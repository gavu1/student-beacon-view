
// Student profile
export const studentProfile = {
  name: "Gavinder Singh",
  id: "12303567",
  section: "K23GN",
  program: "B.Tech. (Computer Science and Engineering)",
  semester: "P132",
  email: "gavinder.singh@example.edu",
  phone: "+91 9876543210",
  enrollmentDate: "2021-08-15",
  expectedGraduation: "2025-05-30",
  advisor: "Dr. Amit Kumar",
};

// CGPA data by semester
export const cgpaData = [
  { semester: "Semester 1", gpa: 7.8, credits: 24, status: "Completed" },
  { semester: "Semester 2", gpa: 7.6, credits: 24, status: "Completed" },
  { semester: "Semester 3", gpa: 6.9, credits: 24, status: "Completed" },
  { semester: "Current (Sem 4)", gpa: 0, credits: 24, status: "Awaited" },
];

// Calculate CGPA
export const calculateCGPA = () => {
  const completedSemesters = cgpaData.filter(sem => sem.status === "Completed");
  let totalPoints = 0;
  let totalCredits = 0;
  
  completedSemesters.forEach(sem => {
    totalPoints += sem.gpa * sem.credits;
    totalCredits += sem.credits;
  });
  
  return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "N/A";
};

// Course grades data
export const courseGrades = [
  {
    semester: "Current Semester (4)",
    status: "Awaited",
    courses: [
      { code: "CSE310", name: "PROGRAMMING IN JAVA", credits: 3, status: "Awaited" },
      { code: "CSE316", name: "OPERATING SYSTEMS", credits: 3, status: "Awaited" },
      { code: "CSE325", name: "OPERATING SYSTEMS LABORATORY", credits: 2, status: "Awaited" },
      { code: "CSE408", name: "DESIGN AND ANALYSIS OF ALGORITHMS", credits: 3, status: "Awaited" },
      { code: "INT217", name: "INTRODUCTION TO DATA MANAGEMENT", credits: 3, status: "Awaited" },
      { code: "INT375", name: "DATA SCIENCE TOOLBOX: PYTHON PROGRAMMING", credits: 3, status: "Awaited" },
      { code: "INT428", name: "ARTIFICIAL INTELLIGENCE ESSENTIALS", credits: 3, status: "Awaited" },
      { code: "PEA305", name: "ANALYTICAL SKILLS-I", credits: 2, status: "Awaited" }
    ]
  },
  {
    semester: "Semester 3",
    status: "Completed",
    courses: [
      { 
        code: "CSE202",
        name: "OBJECT ORIENTED PROGRAMMING",
        credits: 3,
        grade: "B+",
        gpa: 7.5,
        marks: [
          { type: "Attendance Marks", marks: "4/5", weightage: "4/5" },
          { type: "Continuous Assessment", marks: "55/100", weightage: "28/50" },
          { type: "Practical End Term", marks: "62/100", weightage: "28/45" }
        ]
      },
      { 
        code: "CSE205",
        name: "DATA STRUCTURES AND ALGORITHMS",
        credits: 3,
        grade: "B",
        gpa: 7.0,
        marks: [
          { type: "Attendance Marks", marks: "5/5", weightage: "5/5" },
          { type: "Continuous Assessment", marks: "48/100", weightage: "24/50" },
          { type: "Practical End Term", marks: "41/100", weightage: "19/45" }
        ]
      },
      // ... Additional semester 3 courses
    ]
  },
  {
    semester: "Semester 2",
    status: "Completed",
    courses: [
      { 
        code: "CSE101",
        name: "COMPUTER PROGRAMMING",
        credits: 3,
        grade: "B+",
        gpa: 7.5,
        marks: [
          { type: "Attendance Marks", marks: "4/5", weightage: "4/5" },
          { type: "Continuous Assessment", marks: "44/100", weightage: "22/50" },
          { type: "Practical End Term", marks: "53/100", weightage: "24/45" }
        ]
      },
      // ... Additional semester 2 courses
    ]
  },
  {
    semester: "Semester 1",
    status: "Completed",
    courses: [
      { 
        code: "CHE110",
        name: "ENVIRONMENTAL STUDIES",
        credits: 3,
        grade: "A",
        gpa: 9.0,
        marks: [
          { type: "Attendance Marks", marks: "5/5", weightage: "5/5" },
          { type: "Continuous Assessment", marks: "68/100", weightage: "28/40" },
          { type: "Objective Type End Term", marks: "31/60", weightage: "19/35" },
          { type: "Objective Type Mid Term", marks: "20/30", weightage: "14/20" }
        ]
      },
      // ... Additional semester 1 courses
    ]
  }
];

// Adding missing exports that Dashboard.tsx requires
export const attendanceData = {
  overall: 85, // Overall attendance percentage
  subjects: [
    { name: "PROGRAMMING IN JAVA", attendance: 90 },
    { name: "OPERATING SYSTEMS", attendance: 82 },
    { name: "DATA SCIENCE TOOLBOX: PYTHON PROGRAMMING", attendance: 88 },
    { name: "ARTIFICIAL INTELLIGENCE ESSENTIALS", attendance: 78 },
    { name: "DESIGN AND ANALYSIS OF ALGORITHMS", attendance: 86 }
  ]
};

export const pendingAssignments = [
  { 
    id: 1, 
    title: "Java Programming Assignment 3", 
    course: "CSE310", 
    dueDate: "2025-04-10", 
    status: "Pending" 
  },
  { 
    id: 2, 
    title: "OS Lab Exercise 5", 
    course: "CSE325", 
    dueDate: "2025-04-12", 
    status: "Pending" 
  },
  { 
    id: 3, 
    title: "Algorithm Analysis Report", 
    course: "CSE408", 
    dueDate: "2025-04-15", 
    status: "Pending" 
  }
];

export const announcements = [
  {
    id: 1,
    title: "Mid Semester Exam Schedule",
    content: "Mid semester exams will begin from April 10th, 2025. Please check the exam schedule on the university portal.",
    date: "2025-04-03"
  },
  {
    id: 2,
    title: "Campus Placement Drive",
    content: "Major tech companies will be visiting for campus placements on April 22nd. Register through the placement portal.",
    date: "2025-04-02"
  },
  {
    id: 3,
    title: "Lab Maintenance Notice",
    content: "Computer labs will be closed for maintenance on April 5th and 6th. Plan your work accordingly.",
    date: "2025-04-01"
  },
  {
    id: 4,
    title: "Holiday Announcement",
    content: "The university will remain closed on April 14th on account of Dr. Ambedkar Jayanti.",
    date: "2025-03-30"
  }
];
