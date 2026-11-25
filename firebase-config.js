/**
 * HomeGuru Firebase Configuration & Modular Service Layer
 * Supports:
 * - Firebase Authentication (Google Sign-In, Email/Password, WhatsApp OTP)
 * - Cloud Firestore (Real-time student & educator profiles, session bookings)
 * - Firebase Storage (10th/12th marksheets, degree certificates, government ID scans)
 * - Family Communication System (Student reports, parent-linked access, notifications)
 * - Teacher Portal (Report upload, examination management, syllabus management, updates)
 * - Role-Based Access Control (Admin, Teacher, Parent, Student)
 */

(function () {
  // 1. Firebase Project Config for HomeGuru (homeguru-5b281)
  const defaultFirebaseConfig = {
    apiKey: "AIzaSyDummyKeyReplaceWithYourActualFirebaseApiKey",
    authDomain: "homeguru-5b281.firebaseapp.com",
    databaseURL: "https://homeguru-5b281-default-rtdb.firebaseio.com",
    projectId: "homeguru-5b281",
    storageBucket: "homeguru-5b281.appspot.com",
    messagingSenderId: "109876543210",
    appId: "1:109876543210:web:homeguru5b281"
  };

  // Allow custom override saved in localStorage
  let savedConfig = null;
  try {
    const raw = localStorage.getItem('homeguru_firebase_config');
    if (raw) savedConfig = JSON.parse(raw);
  } catch (e) {
    console.warn('[Firebase] Could not parse stored custom config:', e);
  }

  const firebaseConfig = savedConfig || window.__FIREBASE_CONFIG__ || defaultFirebaseConfig;

  let app = null;
  let auth = null;
  let db = null;
  let rtdb = null;
  let storage = null;
  let googleProvider = null;
  let isRealFirebaseActive = false;

  // 2. Initialize Firebase SDK if available
  try {
    if (typeof firebase !== 'undefined' && firebase.initializeApp) {
      if (!firebase.apps || firebase.apps.length === 0) {
        app = firebase.initializeApp(firebaseConfig);
      } else {
        app = firebase.app();
      }

      if (firebase.auth) {
        auth = firebase.auth();
        googleProvider = new firebase.auth.GoogleAuthProvider();
      }

      if (firebase.database) {
        rtdb = firebase.database();
      }

      if (firebase.firestore) {
        db = firebase.firestore();
      }

      if (firebase.storage) {
        storage = firebase.storage();
      }

      // Check if user set non-dummy keys
      if (firebaseConfig.apiKey && !firebaseConfig.apiKey.includes('DummyKey')) {
        isRealFirebaseActive = true;
        console.log('[Firebase] Live Firebase initialized for project:', firebaseConfig.projectId);
      } else {
        console.log('[Firebase] Firebase initialized in Local Sandbox mode. Ready for live credentials.');
      }
    }
  } catch (err) {
    console.warn('[Firebase] Initialization notice:', err.message);
  }

  // 3. Local Mock Storage Initializer (Ensures 100% functionality out of the box in local demo mode)
  const LOCAL_STORAGE_KEYS = {
    USERS: 'homeguru_users',
    REPORTS: 'homeguru_reports',
    EXAMS: 'homeguru_examinations',
    SYLLABUS: 'homeguru_syllabus',
    ANNOUNCEMENTS: 'homeguru_announcements',
    NOTIFICATIONS: 'homeguru_notifications',
    CURRENT_USER: 'homeguru_current_user'
  };

  function initLocalMockData() {
    // Initial demo users
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.USERS)) {
      const defaultUsers = [
        {
          uid: 'student_aryan',
          studentId: 'HG-STU-1082',
          displayName: 'Aryan Sharma',
          email: 'aryan.sharma@gmail.com',
          role: 'student',
          grade: 'Class 12',
          section: 'A',
          city: 'Jaipur',
          avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
          parentUid: 'parent_suman',
          inviteCode: 'HG8491'
        },
        {
          uid: 'student_priya',
          studentId: 'HG-STU-2041',
          displayName: 'Priya Joshi',
          email: 'priya.joshi@gmail.com',
          role: 'student',
          grade: 'Class 12',
          section: 'B',
          city: 'Jaipur',
          avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
          parentUid: 'parent_rakesh',
          inviteCode: 'HG2041'
        },
        {
          uid: 'teacher_rajeshwar',
          teacherId: 'HG-TEACH-8492',
          displayName: 'Dr. Rajeshwar Sharma',
          email: 'dr.rajeshwar.sharma@gmail.com',
          role: 'teacher',
          assignedClasses: ['Class 12', 'Class 11'],
          assignedSubjects: ['Physics', 'JEE Main Physics'],
          isVerified: true,
          city: 'Jaipur',
          avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
        },
        {
          uid: 'teacher_pooja',
          teacherId: 'HG-TEACH-5521',
          displayName: 'Pooja Rathore (M.Sc, B.Ed)',
          email: 'pooja.rathore@gmail.com',
          role: 'teacher',
          assignedClasses: ['Class 10', 'Class 12'],
          assignedSubjects: ['Biology', 'NEET Botany'],
          isVerified: true,
          city: 'Jaipur',
          avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
        },
        {
          uid: 'parent_suman',
          displayName: 'Suman Joshi (Parent)',
          email: 'suman.joshi@gmail.com',
          role: 'parent',
          phone: '+91 98765 43210',
          city: 'Jaipur',
          linkedStudentIds: ['student_aryan'],
          avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
        },
        {
          uid: 'admin_homeguru',
          displayName: 'HomeGuru Admin (Operations)',
          email: 'admin@homeguru.in',
          role: 'admin',
          city: 'Jaipur',
          avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80'
        }
      ];
      localStorage.setItem(LOCAL_STORAGE_KEYS.USERS, JSON.stringify(defaultUsers));
    }

    // Initial demo reports
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.REPORTS)) {
      const defaultReports = [
        {
          id: 'rep_001',
          title: 'Monthly Concept Mastery & Wave Optics Assessment',
          description: 'Aryan displayed 94% retention on double-slit interference and single-slit diffraction numericals. Calm and engaged study posture observed.',
          studentUid: 'student_aryan',
          studentName: 'Aryan Sharma',
          className: 'Class 12',
          section: 'A',
          subject: 'Physics',
          teacherUid: 'teacher_rajeshwar',
          teacherName: 'Dr. Rajeshwar Sharma',
          fileName: 'Wave_Optics_Progress_Nov2026.pdf',
          fileUrl: '#',
          fileSize: 420100,
          attendancePct: 98,
          conceptScore: 92,
          isPublished: true,
          uploadedAt: '2026-11-20T17:30:00.000Z'
        },
        {
          id: 'rep_002',
          title: 'Mid-Term Comprehensive Mechanics Diagnostic',
          description: 'Rigorous 2-hour home testing for Rotational Dynamics & Center of Mass. Scored above 90th percentile with excellent equation rigor.',
          studentUid: 'student_aryan',
          studentName: 'Aryan Sharma',
          className: 'Class 12',
          section: 'A',
          subject: 'Physics',
          teacherUid: 'teacher_rajeshwar',
          teacherName: 'Dr. Rajeshwar Sharma',
          fileName: 'Mechanics_Diagnostic_Report.pdf',
          fileUrl: '#',
          fileSize: 580400,
          attendancePct: 100,
          conceptScore: 95,
          isPublished: true,
          uploadedAt: '2026-11-15T10:00:00.000Z'
        }
      ];
      localStorage.setItem(LOCAL_STORAGE_KEYS.REPORTS, JSON.stringify(defaultReports));
    }

    // Initial demo examinations
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.EXAMS)) {
      const defaultExams = [
        {
          id: 'exam_001',
          examName: 'Mid-Term Physics & Optics Board Simulation',
          className: 'Class 12',
          section: 'A',
          subject: 'Physics',
          examDate: '2026-11-18',
          maxMarks: 100,
          teacherUid: 'teacher_rajeshwar',
          teacherName: 'Dr. Rajeshwar Sharma',
          isPublished: true,
          createdAt: '2026-11-10T09:00:00.000Z',
          results: [
            {
              studentUid: 'student_aryan',
              studentName: 'Aryan Sharma',
              marksObtained: 94,
              maxMarks: 100,
              percentage: 94,
              grade: 'A+',
              rank: 1,
              remarks: 'Exceptional visual diagrams and clear mathematical derivation of Lens Maker formula.'
            },
            {
              studentUid: 'student_priya',
              studentName: 'Priya Joshi',
              marksObtained: 88,
              maxMarks: 100,
              percentage: 88,
              grade: 'A',
              rank: 2,
              remarks: 'Strong theoretical grasp; needs slight practice in 3-mark numerical speed.'
            }
          ]
        },
        {
          id: 'exam_002',
          examName: 'Electrostatics & Gauss Law Unit Test',
          className: 'Class 12',
          section: 'A',
          subject: 'Physics',
          examDate: '2026-10-28',
          maxMarks: 50,
          teacherUid: 'teacher_rajeshwar',
          teacherName: 'Dr. Rajeshwar Sharma',
          isPublished: true,
          createdAt: '2026-10-20T10:00:00.000Z',
          results: [
            {
              studentUid: 'student_aryan',
              studentName: 'Aryan Sharma',
              marksObtained: 47,
              maxMarks: 50,
              percentage: 94,
              grade: 'A+',
              rank: 1,
              remarks: 'Perfect application of spherical Gaussian surface flux theorems.'
            }
          ]
        }
      ];
      localStorage.setItem(LOCAL_STORAGE_KEYS.EXAMS, JSON.stringify(defaultExams));
    }

    // Initial demo syllabus
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.SYLLABUS)) {
      const defaultSyllabus = [
        {
          id: 'syl_001',
          title: 'Class 12 Physics CBSE & JEE Main Curriculum Map (2026-27)',
          className: 'Class 12',
          section: 'All',
          subject: 'Physics',
          academicSession: '2026-2027',
          description: 'Comprehensive term-wise breakdown covering Electrostatics, Current Electricity, Magnetism, Optics, and Modern Physics with weightage breakdown.',
          fileName: 'Class12_Physics_Syllabus_2026_HomeGuru.pdf',
          fileUrl: '#',
          fileSize: 845200,
          teacherUid: 'teacher_rajeshwar',
          teacherName: 'Dr. Rajeshwar Sharma',
          uploadedAt: '2026-11-01T08:30:00.000Z',
          isActive: true
        },
        {
          id: 'syl_002',
          title: 'Class 12 Pre-Board Examination Blueprint & Model Question Paper',
          className: 'Class 12',
          section: 'A',
          subject: 'Physics',
          academicSession: '2026-2027',
          description: 'Official chapter-wise marks distribution, competency-based question criteria, and numerical strategy for December Pre-Boards.',
          fileName: 'PreBoard_Physics_Blueprint_Dec2026.pdf',
          fileUrl: '#',
          fileSize: 620800,
          teacherUid: 'teacher_rajeshwar',
          teacherName: 'Dr. Rajeshwar Sharma',
          uploadedAt: '2026-11-12T14:00:00.000Z',
          isActive: true
        }
      ];
      localStorage.setItem(LOCAL_STORAGE_KEYS.SYLLABUS, JSON.stringify(defaultSyllabus));
    }

    // Initial demo announcements
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.ANNOUNCEMENTS)) {
      const defaultAnnouncements = [
        {
          id: 'ann_001',
          title: 'Upcoming Pre-Board Revision Plan & Parent Coordination',
          body: 'Dear Parents & Students, starting next Tuesday we will conduct focused 90-minute numerical solving sessions for Wave Optics & Dual Nature. Please ensure the study desk is quiet and formulas handbook is ready.',
          type: 'general',
          className: 'Class 12',
          section: 'A',
          subject: 'Physics',
          priority: 'urgent',
          teacherUid: 'teacher_rajeshwar',
          teacherName: 'Dr. Rajeshwar Sharma',
          createdAt: '2026-11-21T09:30:00.000Z'
        },
        {
          id: 'ann_002',
          title: 'Homework Assignment: Young\'s Double Slit 10 Problem Challenge',
          body: 'Students are requested to solve problems 14 to 24 from the supplementary optics problem sheet before our Saturday home session. We will verify every step together.',
          type: 'homework',
          className: 'Class 12',
          section: 'A',
          subject: 'Physics',
          priority: 'normal',
          teacherUid: 'teacher_rajeshwar',
          teacherName: 'Dr. Rajeshwar Sharma',
          createdAt: '2026-11-19T18:00:00.000Z'
        }
      ];
      localStorage.setItem(LOCAL_STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(defaultAnnouncements));
    }

    // Initial demo notifications
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.NOTIFICATIONS)) {
      const defaultNotifications = [
        {
          id: 'notif_001',
          recipientUid: 'student_aryan',
          senderName: 'Dr. Rajeshwar Sharma',
          type: 'report',
          title: 'New Progress Report Uploaded',
          message: 'Dr. Rajeshwar Sharma uploaded Monthly Concept Mastery & Wave Optics Assessment.',
          referenceId: 'rep_001',
          isRead: false,
          createdAt: '2026-11-20T17:31:00.000Z'
        },
        {
          id: 'notif_002',
          recipientUid: 'parent_suman',
          senderName: 'Dr. Rajeshwar Sharma',
          type: 'report',
          title: 'Academic Progress Report for Aryan',
          message: 'Aryan scored 94% retention on Wave Optics numericals with calm focus.',
          referenceId: 'rep_001',
          isRead: false,
          createdAt: '2026-11-20T17:31:00.000Z'
        },
        {
          id: 'notif_003',
          recipientUid: 'parent_suman',
          senderName: 'Dr. Rajeshwar Sharma',
          type: 'exam_result',
          title: 'Physics Board Simulation Results Published',
          message: 'Aryan scored 94/100 (Grade A+, Rank #1) in the Mid-Term Optics test.',
          referenceId: 'exam_001',
          isRead: false,
          createdAt: '2026-11-18T18:00:00.000Z'
        },
        {
          id: 'notif_004',
          recipientUid: 'student_aryan',
          senderName: 'Dr. Rajeshwar Sharma',
          type: 'announcement',
          title: 'Homework: Young\'s Double Slit Problems',
          message: 'Solve problems 14 to 24 before Saturday session.',
          referenceId: 'ann_002',
          isRead: true,
          createdAt: '2026-11-19T18:05:00.000Z'
        }
      ];
      localStorage.setItem(LOCAL_STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(defaultNotifications));
    }
  }

  // Run initialization
  try {
    initLocalMockData();
  } catch (e) {
    console.warn('[HomeGuru Local Data] Init notice:', e);
  }

  // 4. HomeGuru Firebase API Services
  const HomeGuruFirebase = {
    config: firebaseConfig,
    isRealActive: isRealFirebaseActive,
    app: app,
    auth: auth,
    db: db,
    rtdb: rtdb,
    storage: storage,

    // Check if live keys are present
    isConfigured: function () {
      return isRealFirebaseActive && !firebaseConfig.apiKey.includes('DummyKey');
    },

    // Save live credentials from UI
    updateConfig: function (newConfig) {
      localStorage.setItem('homeguru_firebase_config', JSON.stringify(newConfig));
      window.location.reload();
    },

    // Current User Session Helper
    getCurrentUser: function () {
      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.CURRENT_USER);
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      // Fallback default student
      return {
        uid: 'student_aryan',
        name: 'Aryan Sharma',
        displayName: 'Aryan Sharma',
        email: 'aryan.sharma@gmail.com',
        role: 'student',
        grade: 'Class 12 (JEE Main Aspirant)',
        city: 'Jaipur',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
      };
    },

    // Switch active role/user (Convenient for live testing on any device)
    switchActiveRole: function (role, userOverride) {
      const users = this.getLocalUsers();
      let targetUser = userOverride || users.find(u => u.role === role);
      if (!targetUser) {
        if (role === 'teacher') {
          targetUser = users.find(u => u.uid === 'teacher_rajeshwar') || {
            uid: 'teacher_rajeshwar',
            displayName: 'Dr. Rajeshwar Sharma',
            email: 'dr.rajeshwar.sharma@gmail.com',
            role: 'teacher',
            city: 'Jaipur'
          };
        } else if (role === 'parent') {
          targetUser = users.find(u => u.uid === 'parent_suman') || {
            uid: 'parent_suman',
            displayName: 'Suman Joshi (Parent)',
            email: 'suman.joshi@gmail.com',
            role: 'parent',
            linkedStudentIds: ['student_aryan'],
            city: 'Jaipur'
          };
        } else if (role === 'admin') {
          targetUser = users.find(u => u.uid === 'admin_homeguru') || {
            uid: 'admin_homeguru',
            displayName: 'HomeGuru Admin',
            email: 'admin@homeguru.in',
            role: 'admin',
            city: 'Jaipur'
          };
        } else {
          targetUser = users.find(u => u.uid === 'student_aryan');
        }
      }

      const sessionObj = {
        uid: targetUser.uid,
        name: targetUser.displayName || targetUser.name,
        displayName: targetUser.displayName || targetUser.name,
        email: targetUser.email,
        role: targetUser.role,
        grade: targetUser.grade || 'Class 12',
        city: targetUser.city || 'Jaipur',
        avatar: targetUser.avatarUrl || targetUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        linkedStudentIds: targetUser.linkedStudentIds || ['student_aryan']
      };

      localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENT_USER, JSON.stringify(sessionObj));
      return sessionObj;
    },

    // Local Users Helper
    getLocalUsers: function () {
      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.USERS);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    },

    saveLocalUsers: function (users) {
      localStorage.setItem(LOCAL_STORAGE_KEYS.USERS, JSON.stringify(users));
    },

    // Sign In with Google
    signInWithGoogle: async function () {
      if (this.isConfigured() && auth && googleProvider) {
        try {
          googleProvider.setCustomParameters({ prompt: 'select_account' });
          const result = await auth.signInWithPopup(googleProvider);
          const user = result.user;
          const userProfile = {
            uid: user.uid,
            name: user.displayName || 'Aryan Sharma',
            displayName: user.displayName || 'Aryan Sharma',
            email: user.email,
            avatar: user.photoURL || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
            role: 'student',
            grade: 'Class 12',
            city: 'Jaipur',
            lastLogin: new Date().toISOString()
          };

          // Check if user already exists in Firestore to preserve custom role (e.g. teacher/parent/admin)
          if (db) {
            try {
              const doc = await db.collection('users').doc(user.uid).get();
              if (doc.exists) {
                const existing = doc.data();
                if (existing.role) userProfile.role = existing.role;
                if (existing.linkedStudentIds) userProfile.linkedStudentIds = existing.linkedStudentIds;
              } else {
                await db.collection('users').doc(user.uid).set(userProfile, { merge: true });
              }
            } catch (fErr) {
              console.warn('[Firebase Firestore] user check notice:', fErr);
            }
          }

          localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENT_USER, JSON.stringify(userProfile));
          return { success: true, user: userProfile, isLive: true };
        } catch (error) {
          console.error('[Firebase] Google sign-in error:', error);
          throw error;
        }
      } else {
        // Fallback local mode
        const mockStudent = {
          uid: 'student_aryan',
          name: 'Aryan Sharma',
          displayName: 'Aryan Sharma',
          email: 'aryan.sharma@gmail.com',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
          role: 'student',
          grade: 'Class 12 (JEE Main Aspirant)',
          city: 'Jaipur'
        };
        localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENT_USER, JSON.stringify(mockStudent));
        return { success: true, user: mockStudent, mode: 'local' };
      }
    },

    // Upload Document to Firebase Cloud Storage (or local data URL)
    uploadDocument: async function (file, path) {
      if (this.isConfigured() && storage) {
        try {
          const storageRef = storage.ref().child(path + '/' + Date.now() + '_' + file.name);
          const snapshot = await storageRef.put(file);
          const downloadURL = await snapshot.ref.getDownloadURL();
          return { success: true, url: downloadURL, name: file.name, size: file.size, isLive: true };
        } catch (err) {
          console.error('[Firebase] Storage upload error:', err);
          throw err;
        }
      } else {
        // Return local data URL preview
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            resolve({
              success: true,
              url: e.target.result,
              name: file.name,
              size: file.size,
              mode: 'local'
            });
          };
          reader.readAsDataURL(file);
        });
      }
    },

    // =========================================================================
    // 5. FAMILY COMMUNICATION & STUDENT PROGRESS SHARING API
    // =========================================================================

    // A. Upload Student Academic Report
    uploadStudentReport: async function (reportData, file) {
      let fileUrl = '#';
      let fileName = reportData.fileName || 'Report.pdf';
      let fileSize = reportData.fileSize || 0;

      if (file) {
        const uploadRes = await this.uploadDocument(file, 'reports/' + (reportData.teacherUid || 'teacher'));
        fileUrl = uploadRes.url;
        fileName = file.name;
        fileSize = file.size;
      }

      const reportPayload = {
        id: 'rep_' + Date.now(),
        title: reportData.title,
        description: reportData.description || '',
        studentUid: reportData.studentUid,
        studentName: reportData.studentName,
        className: reportData.className || 'Class 12',
        section: reportData.section || 'A',
        subject: reportData.subject || 'All Subjects',
        teacherUid: reportData.teacherUid || this.getCurrentUser().uid,
        teacherName: reportData.teacherName || this.getCurrentUser().displayName,
        fileName: fileName,
        fileUrl: fileUrl,
        fileSize: fileSize,
        attendancePct: Number(reportData.attendancePct) || 100,
        conceptScore: Number(reportData.conceptScore) || 90,
        isPublished: true,
        uploadedAt: new Date().toISOString()
      };

      // 1. Live Firestore if active
      if (this.isConfigured() && db) {
        try {
          const docRef = await db.collection('reports').add(reportPayload);
          reportPayload.id = docRef.id;
        } catch (err) {
          console.warn('[Firestore] Reports upload fallback:', err);
        }
      }

      // 2. Always persist locally
      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.REPORTS);
        const list = raw ? JSON.parse(raw) : [];
        list.unshift(reportPayload);
        localStorage.setItem(LOCAL_STORAGE_KEYS.REPORTS, JSON.stringify(list));
      } catch (e) {}

      // 3. Trigger Notification to Parent & Student
      await this.sendNotification({
        recipientUid: reportPayload.studentUid,
        senderName: reportPayload.teacherName,
        type: 'report',
        title: 'New Progress Report Uploaded',
        message: `${reportPayload.teacherName} uploaded "${reportPayload.title}".`,
        referenceId: reportPayload.id
      });

      // Find parent of this student to notify
      const users = this.getLocalUsers();
      const parentUser = users.find(u => u.role === 'parent' && u.linkedStudentIds && u.linkedStudentIds.includes(reportPayload.studentUid));
      if (parentUser) {
        await this.sendNotification({
          recipientUid: parentUser.uid,
          senderName: reportPayload.teacherName,
          type: 'report',
          title: `Academic Report: ${reportPayload.studentName}`,
          message: `${reportPayload.teacherName} shared a new report for ${reportPayload.studentName} in ${reportPayload.subject}.`,
          referenceId: reportPayload.id
        });
      }

      return { success: true, report: reportPayload };
    },

    // B. Get Reports with filtering
    getReports: async function (filter = {}) {
      if (this.isConfigured() && db) {
        try {
          let query = db.collection('reports').orderBy('uploadedAt', 'desc');
          if (filter.studentUid) query = query.where('studentUid', '==', filter.studentUid);
          if (filter.teacherUid) query = query.where('teacherUid', '==', filter.teacherUid);
          const snap = await query.get();
          if (!snap.empty) {
            return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          }
        } catch (err) {
          console.warn('[Firestore] getReports notice, using local data:', err);
        }
      }

      // Fallback local storage
      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.REPORTS);
        let list = raw ? JSON.parse(raw) : [];
        if (filter.studentUid) list = list.filter(r => r.studentUid === filter.studentUid);
        if (filter.teacherUid) list = list.filter(r => r.teacherUid === filter.teacherUid);
        if (filter.className) list = list.filter(r => r.className === filter.className);
        return list;
      } catch (e) {
        return [];
      }
    },

    // =========================================================================
    // 6. EXAMINATION MANAGEMENT API
    // =========================================================================

    createExamination: async function (examData) {
      const examPayload = {
        id: 'exam_' + Date.now(),
        examName: examData.examName,
        className: examData.className || 'Class 12',
        section: examData.section || 'A',
        subject: examData.subject || 'Physics',
        examDate: examData.examDate || new Date().toISOString().split('T')[0],
        maxMarks: Number(examData.maxMarks) || 100,
        teacherUid: examData.teacherUid || this.getCurrentUser().uid,
        teacherName: examData.teacherName || this.getCurrentUser().displayName,
        isPublished: examData.isPublished !== false,
        createdAt: new Date().toISOString(),
        results: examData.results || []
      };

      if (this.isConfigured() && db) {
        try {
          const docRef = await db.collection('examinations').add(examPayload);
          examPayload.id = docRef.id;
        } catch (err) {
          console.warn('[Firestore] Create exam fallback:', err);
        }
      }

      // Local persistence
      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.EXAMS);
        const list = raw ? JSON.parse(raw) : [];
        list.unshift(examPayload);
        localStorage.setItem(LOCAL_STORAGE_KEYS.EXAMS, JSON.stringify(list));
      } catch (e) {}

      // Notify students & parents if published
      if (examPayload.isPublished && examPayload.results.length > 0) {
        for (const res of examPayload.results) {
          await this.sendNotification({
            recipientUid: res.studentUid,
            senderName: examPayload.teacherName,
            type: 'exam_result',
            title: `Exam Published: ${examPayload.examName}`,
            message: `Your score: ${res.marksObtained}/${examPayload.maxMarks} (Grade ${res.grade}). ${res.remarks || ''}`,
            referenceId: examPayload.id
          });
        }
      }

      return { success: true, exam: examPayload };
    },

    getExaminations: async function (filter = {}) {
      if (this.isConfigured() && db) {
        try {
          let query = db.collection('examinations').orderBy('createdAt', 'desc');
          if (filter.className) query = query.where('className', '==', filter.className);
          const snap = await query.get();
          if (!snap.empty) {
            return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          }
        } catch (err) {
          console.warn('[Firestore] getExaminations notice, using local data:', err);
        }
      }

      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.EXAMS);
        let list = raw ? JSON.parse(raw) : [];
        if (filter.className) list = list.filter(e => e.className === filter.className);
        if (filter.subject) list = list.filter(e => e.subject === filter.subject);
        return list;
      } catch (e) {
        return [];
      }
    },

    // =========================================================================
    // 7. SYLLABUS MANAGEMENT API
    // =========================================================================

    uploadSyllabus: async function (syllabusData, file) {
      let fileUrl = '#';
      let fileName = syllabusData.fileName || 'Syllabus.pdf';
      let fileSize = syllabusData.fileSize || 0;

      if (file) {
        const uploadRes = await this.uploadDocument(file, 'syllabus/' + (syllabusData.className || 'General'));
        fileUrl = uploadRes.url;
        fileName = file.name;
        fileSize = file.size;
      }

      const syllabusPayload = {
        id: 'syl_' + Date.now(),
        title: syllabusData.title,
        className: syllabusData.className || 'Class 12',
        section: syllabusData.section || 'All',
        subject: syllabusData.subject || 'Physics',
        academicSession: syllabusData.academicSession || '2026-2027',
        description: syllabusData.description || '',
        fileName: fileName,
        fileUrl: fileUrl,
        fileSize: fileSize,
        teacherUid: syllabusData.teacherUid || this.getCurrentUser().uid,
        teacherName: syllabusData.teacherName || this.getCurrentUser().displayName,
        uploadedAt: new Date().toISOString(),
        isActive: true
      };

      if (this.isConfigured() && db) {
        try {
          const docRef = await db.collection('syllabus').add(syllabusPayload);
          syllabusPayload.id = docRef.id;
        } catch (err) {}
      }

      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.SYLLABUS);
        const list = raw ? JSON.parse(raw) : [];
        list.unshift(syllabusPayload);
        localStorage.setItem(LOCAL_STORAGE_KEYS.SYLLABUS, JSON.stringify(list));
      } catch (e) {}

      // Notify students in that class
      const users = this.getLocalUsers();
      const classStudents = users.filter(u => u.role === 'student' && (!syllabusData.className || u.grade.includes(syllabusData.className)));
      for (const st of classStudents) {
        await this.sendNotification({
          recipientUid: st.uid,
          senderName: syllabusPayload.teacherName,
          type: 'syllabus',
          title: `New Syllabus: ${syllabusPayload.subject}`,
          message: `${syllabusPayload.title} uploaded for ${syllabusPayload.className}.`,
          referenceId: syllabusPayload.id
        });
      }

      return { success: true, syllabus: syllabusPayload };
    },

    getSyllabus: async function (filter = {}) {
      if (this.isConfigured() && db) {
        try {
          let query = db.collection('syllabus').orderBy('uploadedAt', 'desc');
          if (filter.className) query = query.where('className', '==', filter.className);
          const snap = await query.get();
          if (!snap.empty) {
            return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          }
        } catch (err) {}
      }

      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.SYLLABUS);
        let list = raw ? JSON.parse(raw) : [];
        if (filter.className) list = list.filter(s => s.className === filter.className);
        if (filter.subject) list = list.filter(s => s.subject === filter.subject);
        return list;
      } catch (e) {
        return [];
      }
    },

    // =========================================================================
    // 8. ANNOUNCEMENTS & HOMEWORK API
    // =========================================================================

    postAnnouncement: async function (annData) {
      const annPayload = {
        id: 'ann_' + Date.now(),
        title: annData.title,
        body: annData.body,
        type: annData.type || 'general',
        className: annData.className || 'Class 12',
        section: annData.section || 'A',
        subject: annData.subject || 'All Subjects',
        priority: annData.priority || 'normal',
        teacherUid: annData.teacherUid || this.getCurrentUser().uid,
        teacherName: annData.teacherName || this.getCurrentUser().displayName,
        createdAt: new Date().toISOString()
      };

      if (this.isConfigured() && db) {
        try {
          const docRef = await db.collection('announcements').add(annPayload);
          annPayload.id = docRef.id;
        } catch (err) {}
      }

      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.ANNOUNCEMENTS);
        const list = raw ? JSON.parse(raw) : [];
        list.unshift(annPayload);
        localStorage.setItem(LOCAL_STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(list));
      } catch (e) {}

      // Notify all parents & students in class
      const users = this.getLocalUsers();
      for (const u of users) {
        if (u.role === 'student' || u.role === 'parent') {
          await this.sendNotification({
            recipientUid: u.uid,
            senderName: annPayload.teacherName,
            type: 'announcement',
            title: `Notice: ${annPayload.title}`,
            message: annPayload.body.length > 80 ? annPayload.body.slice(0, 80) + '...' : annPayload.body,
            referenceId: annPayload.id
          });
        }
      }

      return { success: true, announcement: annPayload };
    },

    getAnnouncements: async function (filter = {}) {
      if (this.isConfigured() && db) {
        try {
          let query = db.collection('announcements').orderBy('createdAt', 'desc');
          if (filter.className) query = query.where('className', '==', filter.className);
          const snap = await query.get();
          if (!snap.empty) {
            return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          }
        } catch (err) {}
      }

      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.ANNOUNCEMENTS);
        let list = raw ? JSON.parse(raw) : [];
        if (filter.className) list = list.filter(a => a.className === filter.className);
        return list;
      } catch (e) {
        return [];
      }
    },

    // =========================================================================
    // 9. NOTIFICATIONS ENGINE (BELL ICON DROPDOWN & LIVE QUEUE)
    // =========================================================================

    sendNotification: async function (notifData) {
      const notif = {
        id: 'notif_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        recipientUid: notifData.recipientUid,
        senderName: notifData.senderName || 'HomeGuru Platform',
        type: notifData.type || 'general',
        title: notifData.title,
        message: notifData.message,
        referenceId: notifData.referenceId || '',
        isRead: false,
        createdAt: new Date().toISOString()
      };

      if (this.isConfigured() && db) {
        try {
          await db.collection('notifications').add(notif);
        } catch (e) {}
      }

      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.NOTIFICATIONS);
        const list = raw ? JSON.parse(raw) : [];
        list.unshift(notif);
        localStorage.setItem(LOCAL_STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(list));
      } catch (e) {}

      return notif;
    },

    getNotifications: function (recipientUid) {
      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.NOTIFICATIONS);
        let list = raw ? JSON.parse(raw) : [];
        if (recipientUid) {
          list = list.filter(n => n.recipientUid === recipientUid || n.recipientUid === 'all');
        }
        return list;
      } catch (e) {
        return [];
      }
    },

    markNotificationRead: function (notifId) {
      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.NOTIFICATIONS);
        let list = raw ? JSON.parse(raw) : [];
        list = list.map(n => n.id === notifId ? { ...n, isRead: true } : n);
        localStorage.setItem(LOCAL_STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(list));
      } catch (e) {}
    },

    markAllNotificationsRead: function (recipientUid) {
      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.NOTIFICATIONS);
        let list = raw ? JSON.parse(raw) : [];
        list = list.map(n => (n.recipientUid === recipientUid ? { ...n, isRead: true } : n));
        localStorage.setItem(LOCAL_STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(list));
      } catch (e) {}
    },

    // Auth State Observer
    onAuthStateChanged: function (callback) {
      if (auth) {
        return auth.onAuthStateChanged(callback);
      }
      return null;
    }
  };

  // Expose globally
  window.HomeGuruFirebase = HomeGuruFirebase;
})();
