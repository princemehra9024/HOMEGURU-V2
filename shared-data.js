// Shared Mock Database & Utilities for NearTutor / HomeGuru Platform

const TUTORS_DATABASE = [
  {
    id: "tutor-1",
    name: "Dr. Rajeshwar Sharma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    badgeTitle: "#1 Physics Guru in Jaipur",
    city: "jaipur",
    cityName: "Jaipur",
    areas: ["Malviya Nagar", "Mansarovar", "Vaishali Nagar", "C-Scheme"],
    cityRank: 1,
    subjectCategory: "Physics",
    subjects: ["Physics", "JEE Main & Advanced", "NEET Physics"],
    classes: ["Class 11", "Class 12", "IIT-JEE Droppers"],
    hourlyRate: 750,
    experienceYears: 12,
    verified: true,
    wellbeingTrained: true,
    demoVideoDuration: "3:40 min",
    videoThumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    ratingBreakdown: {
      studentScore: 4.95,
      parentScore: 4.90,
      attendance: 99,
      improvement: 96,
      compositeScore: 98.2,
    },
    totalReviews: 86,
    studentsCount: 142,
    tagline: "Ex-Allen Sr. Faculty • Concept-first intuitive physics without rote coaching pressure",
    about: "PhD in Applied Physics with 12+ years of guiding students in their home sanctuary. Believes a calm mind retains formulas 3x faster than high-anxiety, crowded coaching batches.",
    degrees: ["Ph.D. in Physics (University of Rajasthan)", "B.Sc. & M.Sc. Gold Medalist", "Police Background Verification Cleared"],
    timingSlots: ["Mon/Wed/Fri: 4:00 PM", "Tue/Thu/Sat: 5:30 PM", "Sun Morning Special Doubt Session"],
    featuredTestimonials: [
      {
        author: "Suman Joshi (Parent, Malviya Nagar)",
        role: "Parent",
        rating: 5,
        text: "We avoided sending our 16-year-old son away to a high-stress hostel in Kota. Dr. Sharma visits our home 3 days a week, clears deep concepts without fear, and our son is smiling and scoring 97 percentile!"
      },
      {
        author: "Aryan J. (Class 12 JEE Aspirant)",
        role: "Student",
        rating: 5,
        text: "Physics used to make me cry in big coaching classes. Sir teaches sitting beside me, draws real-life models, and never gets angry when I ask silly questions."
      }
    ]
  },
  {
    id: "tutor-2",
    name: "Er. Ananya Sengupta",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    badgeTitle: "#1 Maths Specialist in Delhi NCR",
    city: "delhi",
    cityName: "Delhi NCR",
    areas: ["South Ex", "Dwarka", "Vasant Kunj", "Noida Sec 62"],
    cityRank: 1,
    subjectCategory: "Mathematics",
    subjects: ["Pure Mathematics", "Calculus", "Class 10 & 12 CBSE/ICSE"],
    classes: ["Class 9", "Class 10", "Class 11", "Class 12"],
    hourlyRate: 850,
    experienceYears: 9,
    verified: true,
    wellbeingTrained: true,
    demoVideoDuration: "4:15 min",
    videoThumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    ratingBreakdown: {
      studentScore: 4.90,
      parentScore: 4.95,
      attendance: 98,
      improvement: 95,
      compositeScore: 97.4,
    },
    totalReviews: 64,
    studentsCount: 110,
    tagline: "IIT Delhi Alum • Making calculus friendly and fear-free for board & competitive exams",
    about: "Specialized in undoing math phobia. Incorporates visual geometric representations and patient step-by-step guidance right at the student's study desk.",
    degrees: ["B.Tech (IIT Delhi)", "Certified Adolescent Mentor (NIMHANS Training)", "Govt ID Verified"],
    timingSlots: ["Mon to Thu: 6:00 PM", "Weekends: 10:00 AM", "Weekends: 3:00 PM"],
    featuredTestimonials: [
      {
        author: "Ritu Verma (Parent, Dwarka)",
        role: "Parent",
        rating: 5,
        text: "Maths used to give my daughter panic attacks. Ananya ma'am changed her entire outlook. Her pre-board marks went from 54% to 94%."
      }
    ]
  },
  {
    id: "tutor-3",
    name: "Prof. Vikas Deshmukh",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    badgeTitle: "#1 Chemistry Ranker in Pune",
    city: "pune",
    cityName: "Pune",
    areas: ["Kothrud", "Aundh", "Baner", "Wakad", "Viman Nagar"],
    cityRank: 1,
    subjectCategory: "Chemistry",
    subjects: ["Organic Chemistry", "Inorganic & Physical", "NEET / MHT-CET"],
    classes: ["Class 11", "Class 12", "NEET Repeaters"],
    hourlyRate: 700,
    experienceYears: 14,
    verified: true,
    wellbeingTrained: true,
    demoVideoDuration: "2:50 min",
    videoThumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    ratingBreakdown: {
      studentScore: 4.88,
      parentScore: 4.85,
      attendance: 97,
      improvement: 93,
      compositeScore: 96.1,
    },
    totalReviews: 92,
    studentsCount: 180,
    tagline: "Mechanism master • Real 3D molecule models brought right to your living room",
    about: "Brings tactile molecular kits and interactive mnemonics. Eliminates the mindless cramming that drives students to anxiety.",
    degrees: ["M.Sc. Organic Chemistry (Pune University)", "B.Ed. Education", "State Verified"],
    timingSlots: ["Tue/Thu: 4:30 PM", "Sat: 4:00 PM", "Sun: 11:00 AM"],
    featuredTestimonials: [
      {
        author: "Dr. Arvind Patil (Parent, Kothrud)",
        role: "Parent",
        rating: 5,
        text: "Regularity is 100%. He gives weekly updates on our daughter's comprehension without pressuring her. Her NEET mock scores jumped from 480 to 630."
      }
    ]
  },
  {
    id: "tutor-4",
    name: "Pooja Rathore (M.Sc, B.Ed)",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    badgeTitle: "#2 Top Educator in Jaipur",
    city: "jaipur",
    cityName: "Jaipur",
    areas: ["Raja Park", "Jagatpura", "Tonk Road", "Bapu Nagar"],
    cityRank: 2,
    subjectCategory: "Biology / NEET",
    subjects: ["Biology", "Botany", "Zoology", "Class 10 Science"],
    classes: ["Class 9", "Class 10", "Class 11", "Class 12", "NEET"],
    hourlyRate: 600,
    experienceYears: 7,
    verified: true,
    wellbeingTrained: true,
    demoVideoDuration: "3:10 min",
    videoThumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
    ratingBreakdown: {
      studentScore: 4.92,
      parentScore: 4.88,
      attendance: 99,
      improvement: 92,
      compositeScore: 95.8,
    },
    totalReviews: 54,
    studentsCount: 95,
    tagline: "NEET Biology 360/360 Specialist • Diagrammatic mastery & empathetic mentoring",
    about: "Passionate educator who believes warm, domestic study environments allow students to grasp intricate anatomy & genetics with zero dread.",
    degrees: ["M.Sc. Life Sciences", "B.Ed.", "Child Psychology Diploma"],
    timingSlots: ["Mon/Wed/Sat: 5:00 PM", "Daily Morning Revision Slots Available"],
    featuredTestimonials: [
      {
        author: "Sneha Meena (NEET Aspirant)",
        role: "Student",
        rating: 5,
        text: "Ma'am also checks how I am sleeping and tells my mom whenever I am taking too much stress. She is both a great teacher and an elder sister."
      }
    ]
  },
  {
    id: "tutor-5",
    name: "Sunil K. Agarwal",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    badgeTitle: "#1 Local Home Guru in Kota",
    city: "kota",
    cityName: "Kota (Local)",
    areas: ["Talwandi", "Vigyan Nagar", "Indra Vihar", "Dadabari"],
    cityRank: 1,
    subjectCategory: "Mathematics",
    subjects: ["JEE Advanced Maths", "Algebra & Trigonometry"],
    classes: ["Class 11", "Class 12", "JEE Repeaters"],
    hourlyRate: 800,
    experienceYears: 16,
    verified: true,
    wellbeingTrained: true,
    demoVideoDuration: "4:00 min",
    videoThumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    ratingBreakdown: {
      studentScore: 4.85,
      parentScore: 4.90,
      attendance: 96,
      improvement: 94,
      compositeScore: 95.2,
    },
    totalReviews: 120,
    studentsCount: 220,
    tagline: "Save your child from 200-student crowded factory halls • 1-on-1 personal mentorship",
    about: "Teaching in Kota for 16 years. Dedicated to stopping the student mental health crisis by restoring calm, personalised home learning.",
    degrees: ["M.Sc. Mathematics", "Former Allen Senior Faculty", "Police Verified"],
    timingSlots: ["Mon/Wed/Fri: 6:30 PM", "Sun: 9:00 AM"],
    featuredTestimonials: [
      {
        author: "Rameshwar Dayal (Parent, Kota)",
        role: "Parent",
        rating: 5,
        text: "We live in Kota but pulled our child OUT of the factory halls. Having Sunil Sir teach one-on-one at home saved my son from severe depression."
      }
    ]
  },
  {
    id: "tutor-6",
    name: "Meera Krishnan (B.Tech, MS)",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    badgeTitle: "#1 Coding & AI Tutor in Bengaluru",
    city: "bengaluru",
    cityName: "Bengaluru",
    areas: ["Indiranagar", "Koramangala", "HSR Layout", "Whitefield"],
    cityRank: 1,
    subjectCategory: "Coding & AI",
    subjects: ["Python", "Computer Science CBSE", "Web Development", "AI Fundamentals"],
    classes: ["Class 8 to 12", "Undergrad Beginners"],
    hourlyRate: 900,
    experienceYears: 6,
    verified: true,
    wellbeingTrained: true,
    demoVideoDuration: "3:25 min",
    videoThumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    ratingBreakdown: {
      studentScore: 4.96,
      parentScore: 4.89,
      attendance: 98,
      improvement: 97,
      compositeScore: 97.8,
    },
    totalReviews: 48,
    studentsCount: 82,
    tagline: "Ex-Product Engineer • Making algorithms playful, creative, and stress-free",
    about: "Teaches coding hands-on at home. Focuses on building real projects, logic puzzles, and computational thinking rather than rote syntax exams.",
    degrees: ["B.Tech in Computer Science", "MS Software Systems", "Verified Background"],
    timingSlots: ["Tue/Thu/Fri: 5:00 PM", "Sat/Sun: 11:30 AM"],
    featuredTestimonials: [
      {
        author: "Kavita Rao (Parent, HSR Layout)",
        role: "Parent",
        rating: 5,
        text: "Our daughter built two working Python games in 6 weeks! Meera is encouraging, gentle, and inspires genuine curiosity."
      }
    ]
  }
];

// Helper to get tutor by ID
function getTutorById(id) {
  return TUTORS_DATABASE.find(t => t.id === id) || TUTORS_DATABASE[0];
}

// Global booking handler
function bookTutorDemo(tutorId, date, time) {
  const tutor = getTutorById(tutorId);
  alert(`Free Demo Reserved:\n\nTutor: ${tutor.name}\nSlot: ${date || 'Tomorrow'} at ${time || '5:00 PM'}\n\nA confirmation WhatsApp has been sent to your registered phone number.`);
}

