/**
 * HomeGuru - Frontend Interactive Architecture
 * Pure JavaScript - Ideathon Prototype
 * Core Concept: "Study close to home. Grow close to family."
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. COMPREHENSIVE REALISTIC MOCK DATA
  // ==========================================================================

  const TUTORS_DATA = [
    {
      id: "tutor-1",
      name: "Priya Verma",
      title: "Senior Mathematics Specialist",
      degree: "M.Sc. Mathematics, B.Ed. (Gold Medalist)",
      city: "Jaipur",
      area: "Vaishali Nagar",
      subjects: ["Mathematics", "Calculus", "Class 10-12 Board", "JEE Main"],
      primarySubject: "Mathematics",
      experience: 8,
      rating: 4.85,
      reviewCount: 142,
      hourlyRate: 500,
      studentsTaught: 380,
      cityRank: 3,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Former Kendriya Vidyalaya faculty with 8+ years specializing in building mathematical intuition from scratch. Believes in patient problem-solving rather than rote formula memorization.",
      teachingPhilosophy: "Every student has mathematical capability. My job is to peel away fear of calculus and build conceptual clarity through real-world visual models right at their study table.",
      demoVideo: {
        title: "Solving Definite Integrals without Panic (5-Min Concept)",
        duration: "4:20 mins"
      },
      availability: ["Mon, Wed, Fri (4:30 PM – 7:30 PM)", "Sat & Sun (10:00 AM – 2:00 PM)"],
      reviews: [
        {
          author: "Ananya S. (Student, Class 12)",
          role: "CBSE Board Aspirant",
          rating: 5,
          text: "Priya ma'am completely removed my fear of Integral Calculus. She never makes you feel stupid for asking a doubt 5 times."
        },
        {
          author: "Ramesh Sharma (Parent)",
          role: "Father of Class 10 Student",
          rating: 4.8,
          text: "Very punctual and gentle with my son. We didn't have to send him to a crowded tuition center."
        }
      ]
    },
    {
      id: "tutor-2",
      name: "Dr. Rajesh Sharma",
      title: "Senior Physics Faculty & Mentor",
      degree: "Ph.D. in Applied Physics, Ex-FIITJEE Kota Faculty",
      city: "Kota",
      area: "Talwandi & Vigyan Nagar",
      subjects: ["Physics", "Mechanics", "Electrodynamics", "NEET/JEE Advanced"],
      primarySubject: "Physics",
      experience: 12,
      rating: 4.92,
      reviewCount: 218,
      hourlyRate: 750,
      studentsTaught: 520,
      cityRank: 1,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "12 years teaching competitive physics in Kota. Left mass-batch coaching centers because students thrive when mentored 1-on-1 in a calm, pressure-free domestic space.",
      teachingPhilosophy: "Physics is visual, tactile, and logical. When a student learns in their living room with family around them, exam fear drops by 70%.",
      demoVideo: {
        title: "Rotational Dynamics: Visualizing Torque without Memorizing Formulas",
        duration: "5:15 mins"
      },
      availability: ["Tue, Thu, Sat (3:00 PM – 7:00 PM)", "Sunday Morning Diagnostic Slots"],
      reviews: [
        {
          author: "Kabir Mathur (Student)",
          role: "JEE Aspirant",
          rating: 5,
          text: "Dr. Rajesh brings tabletop physics demonstrations right to our home. His rotational mechanics breakdown was a gamechanger."
        },
        {
          author: "Meenakshi Mathur (Parent)",
          role: "Mother of Class 11 Student",
          rating: 5,
          text: "Our son wanted to drop out of coaching due to panic attacks. Dr. Sharma restored his self-esteem in two months."
        }
      ]
    },
    {
      id: "tutor-3",
      name: "Ananya Deshmukh",
      title: "Organic & Physical Chemistry Lead",
      degree: "M.Sc. Chemistry (University of Delhi), IIT-JAM Top 50",
      city: "Delhi NCR",
      area: "South Extension & Greater Kailash",
      subjects: ["Chemistry", "Organic Mechanisms", "Class 11-12", "NEET Prep"],
      primarySubject: "Chemistry",
      experience: 9,
      rating: 4.90,
      reviewCount: 189,
      hourlyRate: 650,
      studentsTaught: 410,
      cityRank: 1,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Specializes in demystifying Organic Chemistry reaction mechanisms through logic and mnemonic mapping. Zero rote memorization.",
      teachingPhilosophy: "Organic chemistry isn't about memorizing 300 reactions; it is understanding electron movement. Once students grasp that, confidence skyrockets.",
      demoVideo: {
        title: "Sn1 vs Sn2 Nucleophilic Substitution Made Painless",
        duration: "6:00 mins"
      },
      availability: ["Mon to Fri (4:00 PM – 8:00 PM)", "Weekend Revision Batches"],
      reviews: [
        {
          author: "Devika Rao (Student)",
          role: "NEET Top 2000 Ranker",
          rating: 5,
          text: "Her handmade reaction roadmaps saved my chemistry score! She is like an elder sister who genuinely cares."
        }
      ]
    },
    {
      id: "tutor-4",
      name: "Vikramaditya Rathore",
      title: "Biology & Human Physiology Specialist",
      degree: "M.Sc. Biotechnology, CSIR-NET Certified",
      city: "Jaipur",
      area: "Malviya Nagar & C-Scheme",
      subjects: ["Biology", "Genetics", "Human Physiology", "NEET Biology"],
      primarySubject: "Biology",
      experience: 6,
      rating: 4.75,
      reviewCount: 96,
      hourlyRate: 550,
      studentsTaught: 240,
      cityRank: 2,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Biology mentor dedicated to 360/360 in NEET Biology. Uses high-yield diagrammatic flashcards and line-by-line NCERT dissection.",
      teachingPhilosophy: "Every diagram in NCERT holds 4 potential questions. We analyze diagrams actively until retrieval is instantaneous.",
      demoVideo: {
        title: "Decoding the Cardiac Cycle in 4 Simple Steps",
        duration: "4:45 mins"
      },
      availability: ["Mon, Wed, Fri (5:00 PM – 8:00 PM)"],
      reviews: [
        {
          author: "Tanvi Shekhawat (Student)",
          role: "Class 12 Medical Stream",
          rating: 4.8,
          text: "Rathore sir makes botany and zoology so engaging that revision feels effortless."
        }
      ]
    },
    {
      id: "tutor-5",
      name: "Meera Nambiar",
      title: "English Literature & Academic Writing",
      degree: "M.A. English (EFLU), Cambridge CELTA Certified",
      city: "Bangalore",
      area: "Indiranagar & Koramangala",
      subjects: ["English", "Creative Writing", "ICSE/CBSE English", "Critical Reading"],
      primarySubject: "English",
      experience: 7,
      rating: 4.95,
      reviewCount: 110,
      hourlyRate: 600,
      studentsTaught: 290,
      cityRank: 1,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Cultivates analytical reading, nuanced essay structure, and expressive English fluency for ICSE, CBSE, and International Baccalaureate students.",
      teachingPhilosophy: "Language is the gateway to critical thought. When a student learns to write cleanly, their performance in all STEM and Humanities subjects elevates.",
      demoVideo: {
        title: "Crafting High-Scoring Literature Analysis Essays",
        duration: "5:30 mins"
      },
      availability: ["Weekdays (3:30 PM – 6:30 PM)", "Saturday Writing Clinic"],
      reviews: [
        {
          author: "Siddharth Pai (Parent)",
          role: "Father of Class 9 ICSE Student",
          rating: 5,
          text: "Meera transformed my daughter from a hesitant speaker into the school debate captain."
        }
      ]
    },
    {
      id: "tutor-6",
      name: "Arjun Mehta",
      title: "Accountancy & Applied Microeconomics",
      degree: "Chartered Accountant (FCA), B.Com (Hons.)",
      city: "Ahmedabad",
      area: "Bodakdev & Satellite",
      subjects: ["Accountancy", "Economics", "Financial Statements", "Class 11-12 Commerce"],
      primarySubject: "Accountancy",
      experience: 10,
      rating: 4.88,
      reviewCount: 134,
      hourlyRate: 500,
      studentsTaught: 310,
      cityRank: 1,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Practicing CA with a burning passion for teaching commerce foundations. Connects textbook double-entry bookkeeping to real corporate balance sheets.",
      teachingPhilosophy: "Accounts is the language of enterprise. Stop memorizing rules blindly—learn why cash flows dictate company survival.",
      demoVideo: {
        title: "Cash Flow Statements Simplified with Live Case Study",
        duration: "5:00 mins"
      },
      availability: ["Mon, Tue, Thu (6:00 PM – 8:30 PM)", "Sunday Morning Masterclass"],
      reviews: [
        {
          author: "Nirav Patel (Student)",
          role: "Class 12 Commerce",
          rating: 5,
          text: "Sir's practical business examples made partnership accounts look like a puzzle game instead of a chore."
        }
      ]
    },
    {
      id: "tutor-7",
      name: "Sunita Choudhary",
      title: "Science & Mathematical Foundations (Class 6-10)",
      degree: "B.Sc., B.Ed., M.Sc. Zoology",
      city: "Kota",
      area: "Mahaveer Nagar & Dadabari",
      subjects: ["Science", "Mathematics", "Class 8-10 Foundation", "NTSE Prep"],
      primarySubject: "Mathematics",
      experience: 5,
      rating: 4.80,
      reviewCount: 88,
      hourlyRate: 450,
      studentsTaught: 190,
      cityRank: 2,
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Specialist in early teenage foundation building. Nurtures curiosity and builds solid mathematical foundations so students don't burn out later in high school.",
      teachingPhilosophy: "Children lose interest in science when it becomes abstract formulas. We do quick home experiments to make science touchable.",
      demoVideo: {
        title: "Ray Optics and Light Reflection with Household Mirrors",
        duration: "4:10 mins"
      },
      availability: ["Mon to Sat (4:00 PM – 7:00 PM)"],
      reviews: [
        {
          author: "Pooja Trivedi (Parent)",
          role: "Mother of Class 9 Student",
          rating: 5,
          text: "Sunita ma'am has immense patience. My daughter's math scores jumped from 62% to 89% in just two terms."
        }
      ]
    },
    {
      id: "tutor-8",
      name: "Kabir Sen",
      title: "Computer Science & Python Specialist",
      degree: "B.Tech Computer Science, Olympiad Trainer",
      city: "Indore",
      area: "Vijay Nagar & Palasia",
      subjects: ["Computer Science", "Python", "Data Structures", "Informatics Practices"],
      primarySubject: "Computer Science",
      experience: 6,
      rating: 4.90,
      reviewCount: 76,
      hourlyRate: 700,
      studentsTaught: 175,
      cityRank: 1,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Software architect and dedicated tutor for high school students looking to master Python, SQL, and problem solving for board exams and Olympiads.",
      teachingPhilosophy: "Programming is an art of creative logic. When students build small games and utilities, code syntax becomes muscle memory.",
      demoVideo: {
        title: "Writing Your First Python Algorithm in 10 Lines",
        duration: "5:40 mins"
      },
      availability: ["Tue, Thu, Fri (5:30 PM – 8:30 PM)", "Saturday Hack Hours"],
      reviews: [
        {
          author: "Aman Agarwal (Student)",
          role: "Class 12 CS",
          rating: 5,
          text: "Scored 98/100 in CBSE Informatics Practices thanks to Kabir sir's practical debugging drills."
        }
      ]
    }
  ];

  // ==========================================================================
  // 2. DOM ELEMENT REFERENCES
  // ==========================================================================

  const navbar = document.getElementById('mainNavbar');
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  // Search & Filter elements
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const citySelect = document.getElementById('citySelect');
  const subjectSelect = document.getElementById('subjectSelect');
  const budgetSelect = document.getElementById('budgetSelect');
  const searchSubmitBtn = document.getElementById('searchSubmitBtn');
  const resultsCount = document.getElementById('resultsCount');
  const tutorsContainer = document.getElementById('tutorsContainer');
  const noResultsCard = document.getElementById('noResultsCard');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const fallbackResetBtn = document.getElementById('fallbackResetBtn');
  const quickFilterChips = document.querySelectorAll('.quick-filter-chip:not(.reset-chip)');

  // How it works toggle
  const toggleFamiliesBtn = document.getElementById('toggleFamiliesBtn');
  const toggleTeachersBtn = document.getElementById('toggleTeachersBtn');
  const toggleIndicator = document.getElementById('toggleIndicator');
  const familiesPanel = document.getElementById('familiesPanel');
  const teachersPanel = document.getElementById('teachersPanel');

  // City Ranking Tabs & Podium
  const rankingCityTabs = document.getElementById('rankingCityTabs');
  const podiumContainer = document.getElementById('podiumContainer');

  // Modals
  const tutorModalBackdrop = document.getElementById('tutorModalBackdrop');
  const tutorModalBody = document.getElementById('tutorModalBody');
  const closeTutorModalBtn = document.getElementById('closeTutorModalBtn');

  const bookingModalBackdrop = document.getElementById('bookingModalBackdrop');
  const closeBookingModalBtn = document.getElementById('closeBookingModalBtn');
  const demoBookingForm = document.getElementById('demoBookingForm');
  const bookingTutorId = document.getElementById('bookingTutorId');
  const bookingModalSubtitle = document.getElementById('bookingModalSubtitle');

  const teacherModalBackdrop = document.getElementById('teacherModalBackdrop');
  const closeTeacherModalBtn = document.getElementById('closeTeacherModalBtn');
  const teacherApplicationForm = document.getElementById('teacherApplicationForm');

  const counselorModalBackdrop = document.getElementById('counselorModalBackdrop');
  const closeCounselorModalBtn = document.getElementById('closeCounselorModalBtn');
  const counselorBookingForm = document.getElementById('counselorBookingForm');

  const studyPlannerModalBackdrop = document.getElementById('studyPlannerModalBackdrop');
  const closePlannerModalBtn = document.getElementById('closePlannerModalBtn');
  const downloadPlannerBtn = document.getElementById('downloadPlannerBtn');

  // Triggers
  const openTeacherModalBtn = document.getElementById('openTeacherModalBtn');
  const mobileTeacherBtn = document.getElementById('mobileTeacherBtn');
  const heroTeacherBtn = document.getElementById('heroTeacherBtn');
  const ctaTeacherBtn = document.getElementById('ctaTeacherBtn');
  const footerApplyTutorLink = document.getElementById('footerApplyTutorLink');
  const openCounselorModalBtn = document.getElementById('openCounselorModalBtn');
  const openStudyPlannerBtn = document.getElementById('openStudyPlannerBtn');
  const footerDemoBookingLink = document.getElementById('footerDemoBookingLink');
  const navSearchTrigger = document.getElementById('navSearchTrigger');

  // Wellbeing mood check
  const moodButtonsGroup = document.getElementById('moodButtonsGroup');
  const moodFeedback = document.getElementById('moodFeedback');

  // Toast container
  const toastContainer = document.getElementById('toastContainer');

  // ==========================================================================
  // 3. TOAST NOTIFICATION UTILITY
  // ==========================================================================

  function showToast(title, message, icon = '✓') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'alert');

    toast.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-content">
        <strong>${title}</strong>
        <div>${message}</div>
      </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 4500);
  }

  // ==========================================================================
  // 4. NAVBAR SCROLL PROGRESS & SHRINK
  // ==========================================================================

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${scrolled}%`;
    }

    if (scrollTop > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active navigation spy
    updateActiveNavSpy();
  });

  function updateActiveNavSpy() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 160;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Quick nav search icon focus
  if (navSearchTrigger) {
    navSearchTrigger.addEventListener('click', () => {
      const tutorSection = document.getElementById('tutors');
      if (tutorSection) {
        tutorSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          searchInput.focus();
        }, 500);
      }
    });
  }

  // ==========================================================================
  // 5. MOBILE DRAWER HANDLING
  // ==========================================================================

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileMenu);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ==========================================================================
  // 6. HOW IT WORKS JOURNEYS TOGGLE
  // ==========================================================================

  if (toggleFamiliesBtn && toggleTeachersBtn) {
    toggleFamiliesBtn.addEventListener('click', () => {
      toggleFamiliesBtn.classList.add('active');
      toggleTeachersBtn.classList.remove('active');
      toggleIndicator.style.transform = 'translateX(0%)';
      familiesPanel.classList.add('active');
      teachersPanel.classList.remove('active');
    });

    toggleTeachersBtn.addEventListener('click', () => {
      toggleTeachersBtn.classList.add('active');
      toggleFamiliesBtn.classList.remove('active');
      toggleIndicator.style.transform = 'translateX(100%)';
      teachersPanel.classList.add('active');
      familiesPanel.classList.remove('active');
    });
  }

  // ==========================================================================
  // 7. TUTOR SEARCH, FILTERING & DYNAMIC RENDERING
  // ==========================================================================

  function renderTutors(tutorsList) {
    if (!tutorsContainer) return;
    tutorsContainer.innerHTML = '';

    if (tutorsList.length === 0) {
      noResultsCard.classList.remove('hidden');
      resultsCount.innerHTML = `Showing <strong>0 tutors</strong> for selected criteria`;
      return;
    }

    noResultsCard.classList.add('hidden');
    resultsCount.innerHTML = `Showing <strong>${tutorsList.length} verified tutors</strong> in your region`;

    tutorsList.forEach(tutor => {
      const card = document.createElement('article');
      card.className = 'tutor-card reveal-on-scroll revealed';
      card.setAttribute('data-id', tutor.id);

      const subjectsHTML = tutor.subjects.slice(0, 3).map(sub => 
        `<span class="tutor-subject-pill">${sub}</span>`
      ).join('');

      card.innerHTML = `
        <div class="tutor-card-top">
          <div class="tutor-avatar-wrap">
            <img src="${tutor.avatar}" alt="${tutor.name}" class="tutor-avatar-img" loading="lazy">
          </div>
          <div class="tutor-header-info">
            <div class="tutor-name-row">
              <h3 class="tutor-name">${tutor.name}</h3>
              <span class="verified-badge-mini" title="Background & Credentials Verified">✓</span>
            </div>
            <p class="tutor-headline">${tutor.title}</p>
            <span class="tutor-city-badge">📍 ${tutor.city} &bull; ${tutor.area}</span>
          </div>
        </div>

        <div class="tutor-stats-strip">
          <div class="tutor-stat-col">
            <div class="tstat-value"><span class="star">★</span> ${tutor.rating.toFixed(1)}</div>
            <span class="tstat-label">${tutor.reviewCount} Reviews</span>
          </div>
          <div class="tutor-stat-col">
            <div class="tstat-value">${tutor.experience} Yrs</div>
            <span class="tstat-label">Experience</span>
          </div>
          <div class="tutor-stat-col">
            <div class="tstat-value">₹${tutor.hourlyRate}</div>
            <span class="tstat-label">Per Hour</span>
          </div>
        </div>

        <div class="tutor-pills-row">
          ${subjectsHTML}
          <span class="tutor-area-pill">${tutor.area}</span>
        </div>

        <p class="tutor-bio-snippet">${tutor.bio}</p>

        <div class="tutor-card-actions">
          <button class="btn btn-outline view-profile-btn" data-id="${tutor.id}">
            View Profile &rarr;
          </button>
          <button class="btn btn-primary book-demo-btn" data-id="${tutor.id}" data-name="${tutor.name}">
            Book Free Demo
          </button>
        </div>
      `;

      tutorsContainer.appendChild(card);
    });

    // Attach event listeners to freshly rendered buttons
    attachCardActionListeners();
  }

  function filterTutors() {
    const searchText = (searchInput.value || '').trim().toLowerCase();
    const selectedCity = citySelect.value;
    const selectedSubject = subjectSelect.value;
    const selectedBudget = budgetSelect.value;

    const filtered = TUTORS_DATA.filter(tutor => {
      // 1. Text Search
      if (searchText) {
        const matchName = tutor.name.toLowerCase().includes(searchText);
        const matchCity = tutor.city.toLowerCase().includes(searchText);
        const matchArea = tutor.area.toLowerCase().includes(searchText);
        const matchSubject = tutor.subjects.some(s => s.toLowerCase().includes(searchText));
        const matchTitle = tutor.title.toLowerCase().includes(searchText);

        if (!matchName && !matchCity && !matchArea && !matchSubject && !matchTitle) {
          return false;
        }
      }

      // 2. City
      if (selectedCity !== 'all' && tutor.city !== selectedCity) {
        return false;
      }

      // 3. Subject
      if (selectedSubject !== 'all' && !tutor.subjects.includes(selectedSubject) && tutor.primarySubject !== selectedSubject) {
        return false;
      }

      // 4. Budget
      if (selectedBudget === 'under500' && tutor.hourlyRate >= 500) return false;
      if (selectedBudget === '500-700' && (tutor.hourlyRate < 500 || tutor.hourlyRate > 700)) return false;
      if (selectedBudget === 'above700' && tutor.hourlyRate <= 700) return false;

      return true;
    });

    renderTutors(filtered);
  }

  // Search input listeners
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      if (searchInput.value.trim().length > 0) {
        clearSearchBtn.classList.add('visible');
      } else {
        clearSearchBtn.classList.remove('visible');
      }
      filterTutors();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearSearchBtn.classList.remove('visible');
      filterTutors();
      searchInput.focus();
    });
  }

  if (citySelect) citySelect.addEventListener('change', filterTutors);
  if (subjectSelect) subjectSelect.addEventListener('change', filterTutors);
  if (budgetSelect) budgetSelect.addEventListener('change', filterTutors);
  if (searchSubmitBtn) searchSubmitBtn.addEventListener('click', filterTutors);

  // Quick Chips
  quickFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const filterVal = chip.getAttribute('data-filter');

      // Check if it's a city or subject
      if (['Jaipur', 'Kota', 'Delhi NCR', 'Bangalore', 'Ahmedabad', 'Indore'].includes(filterVal)) {
        citySelect.value = filterVal;
      } else {
        subjectSelect.value = filterVal;
      }

      quickFilterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      filterTutors();
    });
  });

  function resetAllFilters() {
    searchInput.value = '';
    clearSearchBtn.classList.remove('visible');
    citySelect.value = 'all';
    subjectSelect.value = 'all';
    budgetSelect.value = 'all';
    quickFilterChips.forEach(c => c.classList.remove('active'));
    renderTutors(TUTORS_DATA);
    showToast('Filters Cleared', 'Displaying all verified tutors in the registry.', '🔄');
  }

  if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetAllFilters);
  if (fallbackResetBtn) fallbackResetBtn.addEventListener('click', resetAllFilters);

  // Footer city filter links
  document.querySelectorAll('.filter-city-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCity = link.getAttribute('data-city');
      citySelect.value = targetCity;
      filterTutors();
      const tutorSection = document.getElementById('tutors');
      if (tutorSection) tutorSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ==========================================================================
  // 8. CITY RANKINGS PODIUM GENERATION
  // ==========================================================================

  function renderPodium(selectedCity) {
    if (!podiumContainer) return;
    podiumContainer.innerHTML = '';

    // Filter tutors for this city and sort by rating descending
    const cityTutors = TUTORS_DATA
      .filter(t => t.city === selectedCity)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);

    // If city has fewer than 3, borrow top tutors for presentation integrity
    const displayList = [...cityTutors];
    if (displayList.length < 3) {
      TUTORS_DATA.forEach(t => {
        if (!displayList.some(item => item.id === t.id) && displayList.length < 3) {
          displayList.push(t);
        }
      });
    }

    displayList.forEach((tutor, index) => {
      const rankNum = index + 1;
      const card = document.createElement('div');
      card.className = `podium-card rank-${rankNum} reveal-on-scroll revealed`;

      const scorePercent = Math.min(100, Math.round((tutor.rating / 5.0) * 100));

      card.innerHTML = `
        <span class="podium-rank-ribbon">#${rankNum}</span>
        <img src="${tutor.avatar}" alt="${tutor.name}" class="podium-avatar">
        <h4 class="podium-name">${tutor.name}</h4>
        <p class="podium-subject">${tutor.primarySubject} &bull; ${selectedCity}</p>

        <div class="podium-meter-box">
          <div class="podium-meter-label">
            <span>Merit Score</span>
            <span><strong>${tutor.rating.toFixed(2)} / 5.0</strong> (${scorePercent}%)</span>
          </div>
          <div class="podium-meter-track">
            <div class="podium-meter-bar" style="width: ${scorePercent}%;"></div>
          </div>
        </div>

        <ul class="podium-metrics-list">
          <li>✓ <strong>${tutor.studentsTaught}+</strong> local students mentored</li>
          <li>✓ <strong>99.4%</strong> regular home attendance</li>
          <li>✓ <strong>₹${tutor.hourlyRate}/hr</strong> transparent pricing</li>
        </ul>

        <button class="btn btn-outline btn-small w-full mt-auto view-profile-btn" data-id="${tutor.id}">
          View Full Record &rarr;
        </button>
      `;

      podiumContainer.appendChild(card);
    });

    // Reattach profile buttons inside podium
    podiumContainer.querySelectorAll('.view-profile-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openTutorModal(id);
      });
    });
  }

  // City Ranking tab switches
  if (rankingCityTabs) {
    rankingCityTabs.querySelectorAll('.city-tab-btn').forEach(tab => {
      tab.addEventListener('click', () => {
        rankingCityTabs.querySelectorAll('.city-tab-btn').forEach(b => b.classList.remove('active'));
        tab.classList.add('active');
        const city = tab.getAttribute('data-city');
        renderPodium(city);
      });
    });
  }

  // ==========================================================================
  // 9. INTERACTIVE TUTOR PROFILE MODAL (DRAWER)
  // ==========================================================================

  function openTutorModal(tutorId) {
    const tutor = TUTORS_DATA.find(t => t.id === tutorId);
    if (!tutor || !tutorModalBody) return;

    const subjectsBadges = tutor.subjects.map(s => `<span class="tmodal-pill">${s}</span>`).join('');
    const reviewsHTML = tutor.reviews.map(r => `
      <div class="review-item">
        <div class="review-header">
          <span class="reviewer-name">${r.author} (${r.role})</span>
          <span class="stars">${'★'.repeat(Math.floor(r.rating))}</span>
        </div>
        <p class="review-comment">"${r.text}"</p>
      </div>
    `).join('');

    const availabilitySlots = tutor.availability.map(slot => `<li>📅 ${slot}</li>`).join('');

    tutorModalBody.innerHTML = `
      <div class="tutor-modal-header">
        <img src="${tutor.avatar}" alt="${tutor.name}" class="tutor-modal-avatar">
        <div>
          <div class="tmodal-name-row">
            <h2 class="tmodal-name" id="modalTutorName">${tutor.name}</h2>
            <span class="verified-badge-mini" title="Verified Background">✓</span>
          </div>
          <div class="tmodal-subject">${tutor.title} &bull; ${tutor.degree}</div>
          <div class="tmodal-area">📍 Serving ${tutor.city} (${tutor.area} &amp; within 7 km)</div>
        </div>
      </div>

      <div class="tmodal-stats-bar">
        <div>
          <div class="tmodal-stat-val">★ ${tutor.rating.toFixed(2)}</div>
          <div class="tmodal-stat-lbl">Rating (${tutor.reviewCount})</div>
        </div>
        <div>
          <div class="tmodal-stat-val">${tutor.experience} Yrs</div>
          <div class="tmodal-stat-lbl">Experience</div>
        </div>
        <div>
          <div class="tmodal-stat-val">₹${tutor.hourlyRate}</div>
          <div class="tmodal-stat-lbl">Hourly Rate</div>
        </div>
        <div>
          <div class="tmodal-stat-val">#${tutor.cityRank}</div>
          <div class="tmodal-stat-lbl">${tutor.city} Rank</div>
        </div>
      </div>

      <!-- Demo Video Player Mockup -->
      <div class="demo-video-box">
        <div class="demo-video-info">
          <div class="video-play-btn" id="playVideoBtn" title="Play 4-min sample class">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
          <div class="demo-video-text">
            <strong>${tutor.demoVideo.title}</strong>
            <span>Recorded Micro-Demo &bull; ${tutor.demoVideo.duration}</span>
          </div>
        </div>
        <span class="c-pill">Demo Ready</span>
      </div>

      <h4 class="tmodal-section-title">Teaching Philosophy &amp; Approach</h4>
      <p class="tmodal-text">${tutor.teachingPhilosophy}</p>

      <h4 class="tmodal-section-title">Specialized Curriculum &amp; Syllabi</h4>
      <div class="tmodal-pills">${subjectsBadges}</div>

      <h4 class="tmodal-section-title">Available Weekly Home Slots</h4>
      <ul class="footer-links mb-3">${availabilitySlots}</ul>

      <h4 class="tmodal-section-title">Verified Student &amp; Parent Reviews</h4>
      <div class="tmodal-reviews-list">${reviewsHTML}</div>

      <div class="tmodal-footer mt-4">
        <button class="btn btn-gold btn-large w-full modal-book-trigger" data-id="${tutor.id}" data-name="${tutor.name}">
          <span>Book Free 30-Min Diagnostic Class with ${tutor.name.split(' ')[0]} &rarr;</span>
        </button>
      </div>
    `;

    // Modal demo video play trigger
    const playVideoBtn = tutorModalBody.querySelector('#playVideoBtn');
    if (playVideoBtn) {
      playVideoBtn.addEventListener('click', () => {
        showToast('Playing Concept Demo', `Streaming sample classroom snippet for ${tutor.name}`, '▶');
      });
    }

    // Modal internal book trigger
    const modalBookTrigger = tutorModalBody.querySelector('.modal-book-trigger');
    if (modalBookTrigger) {
      modalBookTrigger.addEventListener('click', () => {
        closeModal(tutorModalBackdrop);
        openBookingModal(tutor.id, tutor.name);
      });
    }

    openModal(tutorModalBackdrop);
  }

  function attachCardActionListeners() {
    // View Profile buttons
    document.querySelectorAll('.view-profile-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openTutorModal(id);
      });
    });

    // Book Demo buttons
    document.querySelectorAll('.book-demo-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const name = btn.getAttribute('data-name');
        openBookingModal(id, name);
      });
    });
  }

  // ==========================================================================
  // 10. MODAL HANDLING & ACCESSIBILITY
  // ==========================================================================

  function openModal(modalElement) {
    if (!modalElement) return;
    modalElement.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalElement) {
    if (!modalElement) return;
    modalElement.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Close with backdrop click
  [tutorModalBackdrop, bookingModalBackdrop, teacherModalBackdrop, counselorModalBackdrop, studyPlannerModalBackdrop].forEach(backdrop => {
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          closeModal(backdrop);
        }
      });
    }
  });

  // ESC key listener for all modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [tutorModalBackdrop, bookingModalBackdrop, teacherModalBackdrop, counselorModalBackdrop, studyPlannerModalBackdrop].forEach(closeModal);
      closeMobileMenu();
    }
  });

  // Close buttons
  if (closeTutorModalBtn) closeTutorModalBtn.addEventListener('click', () => closeModal(tutorModalBackdrop));
  if (closeBookingModalBtn) closeBookingModalBtn.addEventListener('click', () => closeModal(bookingModalBackdrop));
  if (closeTeacherModalBtn) closeTeacherModalBtn.addEventListener('click', () => closeModal(teacherModalBackdrop));
  if (closeCounselorModalBtn) closeCounselorModalBtn.addEventListener('click', () => closeModal(counselorModalBackdrop));
  if (closePlannerModalBtn) closePlannerModalBtn.addEventListener('click', () => closeModal(studyPlannerModalBackdrop));

  // ==========================================================================
  // 11. DEMO CLASS BOOKING FLOW
  // ==========================================================================

  function openBookingModal(tutorId, tutorName) {
    if (bookingTutorId) bookingTutorId.value = tutorId || '';
    if (bookingModalSubtitle && tutorName) {
      bookingModalSubtitle.textContent = `Schedule a free 30-minute diagnostic session with ${tutorName} at your home.`;
    }
    // Set min date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateInput = document.getElementById('demoPreferredDate');
    if (dateInput) {
      dateInput.min = tomorrow.toISOString().split('T')[0];
      dateInput.value = tomorrow.toISOString().split('T')[0];
    }
    openModal(bookingModalBackdrop);
  }

  if (footerDemoBookingLink) {
    footerDemoBookingLink.addEventListener('click', (e) => {
      e.preventDefault();
      openBookingModal(TUTORS_DATA[0].id, TUTORS_DATA[0].name);
    });
  }

  if (demoBookingForm) {
    demoBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const sName = document.getElementById('studentName').value;
      const sPhone = document.getElementById('parentPhone').value;
      const sDate = document.getElementById('demoPreferredDate').value;

      closeModal(bookingModalBackdrop);
      demoBookingForm.reset();

      showToast(
        'Diagnostic Demo Confirmed!',
        `Thank you! We've scheduled a session for ${sName} on ${sDate}. Confirmation dispatched to ${sPhone}.`,
        ''
      );
    });
  }

  // ==========================================================================
  // 12. "FOR TEACHERS" MODAL FLOW
  // ==========================================================================

  function openTeacherModal() {
    closeMobileMenu();
    openModal(teacherModalBackdrop);
  }

  if (openTeacherModalBtn) openTeacherModalBtn.addEventListener('click', openTeacherModal);
  if (mobileTeacherBtn) mobileTeacherBtn.addEventListener('click', openTeacherModal);
  if (heroTeacherBtn) heroTeacherBtn.addEventListener('click', openTeacherModal);
  if (ctaTeacherBtn) ctaTeacherBtn.addEventListener('click', openTeacherModal);
  if (footerApplyTutorLink) {
    footerApplyTutorLink.addEventListener('click', (e) => {
      e.preventDefault();
      openTeacherModal();
    });
  }

  if (teacherApplicationForm) {
    teacherApplicationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const tutorName = document.getElementById('tutorFullName').value;
      closeModal(teacherModalBackdrop);
      teacherApplicationForm.reset();

      showToast(
        'Application Received!',
        `Welcome ${tutorName}! Our City Verification Officer will review your credentials within 24 hours.`,
        ''
      );
    });
  }

  // ==========================================================================
  // 13. COUNSELOR CONNECT & WELLBEING
  // ==========================================================================

  if (openCounselorModalBtn) {
    openCounselorModalBtn.addEventListener('click', () => {
      openModal(counselorModalBackdrop);
    });
  }

  if (counselorBookingForm) {
    counselorBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(counselorModalBackdrop);
      counselorBookingForm.reset();

      showToast(
        'Confidential Request Logged',
        'Our licensed adolescent counselor will reach out via discreet message to set up a private call.',
        ''
      );
    });
  }

  // Study planner preview
  if (openStudyPlannerBtn) {
    openStudyPlannerBtn.addEventListener('click', () => {
      openModal(studyPlannerModalBackdrop);
    });
  }

  if (downloadPlannerBtn) {
    downloadPlannerBtn.addEventListener('click', () => {
      showToast(
        'Planner Downloaded',
        'The HomeGuru Balanced Pacing Template (PDF) has been saved to your downloads.',
        ''
      );
    });
  }

  // Interactive In-Card 30-Sec Mood Check
  if (moodButtonsGroup && moodFeedback) {
    const feedbackBanner = moodFeedback.querySelector('.feedback-text');
    const moodTips = {
      'Confident': 'High Momentum: Great mental alertness detected! Tackle your toughest problem sets today.',
      'Calm': 'Steady Progress: Healthy rhythm maintained. Keep your 45-min focus / 15-min hydration cycle.',
      'Tired': 'Mild Fatigue Alert: Take a 25-minute restorative walk or power nap before your home tutor arrives.',
      'Overwhelmed': 'Stress Alert: Continued pressure detected. We recommend lowering daily questions & booking a counselor chat.'
    };

    moodButtonsGroup.querySelectorAll('.mood-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mood = btn.getAttribute('data-mood');
        moodButtonsGroup.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        moodFeedback.classList.remove('hidden');
        feedbackBanner.textContent = moodTips[mood] || 'Mood recorded successfully.';

        showToast(`Mood Logged: ${mood}`, 'Your tutor and parents will receive subtle pacing guidance.', '');
      });
    });
  }

  // ==========================================================================
  // 14. ANIMATED STATS COUNTER WITH INTERSECTION OBSERVER
  // ==========================================================================

  let statsAnimated = false;
  const statsSection = document.getElementById('stats');

  function animateCounter(el, target, isDecimal, suffix) {
    const duration = 1800;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutExpo)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (target - start) * ease;

      if (isDecimal) {
        el.textContent = `${current.toFixed(1)}${suffix}`;
      } else {
        if (target >= 1000) {
          el.textContent = `${Math.floor(current / 1000)}K${suffix}`;
        } else {
          el.textContent = `${Math.floor(current)}${suffix}`;
        }
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        if (isDecimal) {
          el.textContent = `${target.toFixed(1)}${suffix}`;
        } else if (target >= 1000) {
          el.textContent = `10K${suffix}`;
        } else {
          el.textContent = `${target}${suffix}`;
        }
      }
    }

    requestAnimationFrame(update);
  }

  function triggerStatsAnimation() {
    if (statsAnimated) return;
    statsAnimated = true;

    document.querySelectorAll('.stat-number').forEach(statEl => {
      const target = parseFloat(statEl.getAttribute('data-target'));
      const isDecimal = statEl.getAttribute('data-decimal') === 'true';
      const suffix = statEl.getAttribute('data-suffix') || '';
      animateCounter(statEl, target, isDecimal, suffix);
    });
  }

  // Scroll reveal observer
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  };

  const scrollObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        if (entry.target.id === 'stats' || entry.target.closest('#stats')) {
          triggerStatsAnimation();
        }
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });

  // Direct check if stats already visible on load
  if (statsSection) {
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      triggerStatsAnimation();
    }
  }

  // ==========================================================================
  // 15. INITIALIZATION
  // ==========================================================================

  // Initial render of Tutors Grid & Jaipur Podium
  renderTutors(TUTORS_DATA);
  renderPodium('Jaipur');

});
