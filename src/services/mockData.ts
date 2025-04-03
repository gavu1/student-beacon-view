// Mock data for the student dashboard

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

// CGPA data by semester (updated to 10.0 scale)
export const cgpaData = [
  { semester: "Semester 1", gpa: 0, credits: 18, status: "Awaited" },
  { semester: "Semester 2", gpa: 0, credits: 20, status: "Awaited" },
  { semester: "Semester 3", gpa: 0, credits: 19, status: "Awaited" },
  { semester: "Current (Sem 4)", gpa: 8.5, credits: 21, status: "Completed" },
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

// Course-wise grades data (updated for semesters)
export const courseGrades = [
  { 
    semester: "Current Semester (4)", 
    courses: [
      { code: "CS401", name: "Data Structures", credits: 4, grade: "A", gpa: 9.0 },
      { code: "CS402", name: "Algorithm Design", credits: 4, grade: "A-", gpa: 8.0 },
      { code: "CS403", name: "Database Systems", credits: 3, grade: "B+", gpa: 7.5 },
      { code: "CS404", name: "Computer Networks", credits: 3, grade: "A", gpa: 9.0 },
      { code: "MA401", name: "Probability & Statistics", credits: 3, grade: "B+", gpa: 7.5 },
      { code: "HU401", name: "Technical Communication", credits: 3, grade: "A-", gpa: 8.0 }
    ]
  },
  { 
    semester: "Semester 3", 
    status: "Awaited",
    courses: []
  },
  { 
    semester: "Semester 2", 
    status: "Awaited",
    courses: []
  },
  { 
    semester: "Semester 1", 
    status: "Awaited",
    courses: []
  }
];

// Attendance data
export const attendanceData = {
  overall: 85.7,
  courses: [
    { code: "CS401", name: "Data Structures", attendance: 92.3, classes: 26, present: 24 },
    { code: "CS402", name: "Algorithm Design", attendance: 88.5, classes: 26, present: 23 },
    { code: "CS403", name: "Database Systems", attendance: 84.2, classes: 19, present: 16 },
    { code: "CS404", name: "Computer Networks", attendance: 78.9, classes: 19, present: 15 },
    { code: "MA401", name: "Probability & Statistics", attendance: 89.5, classes: 19, present: 17 },
    { code: "HU401", name: "Technical Communication", attendance: 80.0, classes: 15, present: 12 }
  ],
  monthly: [
    { month: "January", attendance: 88 },
    { month: "February", attendance: 92 },
    { month: "March", attendance: 85 },
    { month: "April", attendance: 79 },
    { month: "May", attendance: 0 }, // Current month
    { month: "June", attendance: 0 },
  ],
};

// Pending assignments
export const pendingAssignments = [
  { 
    id: 1, 
    title: "Database Design Project", 
    course: "CS403", 
    dueDate: "2025-04-15", 
    status: "Pending" 
  },
  { 
    id: 2, 
    title: "Network Protocols Analysis", 
    course: "CS404", 
    dueDate: "2025-04-10", 
    status: "Pending" 
  },
  { 
    id: 3, 
    title: "Algorithms Problem Set 3", 
    course: "CS402", 
    dueDate: "2025-04-05", 
    status: "Pending" 
  },
];

// Recent announcements
export const announcements = [
  {
    id: 1,
    title: "Clarification Regarding Summer Training / Internship",
    date: "2025-04-03",
    content: "Dear Students, We have noticed some confusion regarding the summer training and internship requirements. For All Students: Summer training/Internship is a mandatory credited course for every student, regardless of whether they are registered for placement services or not."
  },
  {
    id: 2,
    title: "SBD Indian National Powerlifting Championship 2025",
    date: "2025-04-02",
    content: "A Grand Success at Lovely Professional University"
  },
  {
    id: 3,
    title: "Cracking IIT is easier than booking a ticket from IRCTC",
    date: "2025-04-01",
    content: "AAP MP Dr. Ashok Kumar Mittal"
  }
];

// Fee details
export const feeDetails = {
  totalFee: 125000,
  paid: 75000,
  due: 50000,
  nextDueDate: "2025-04-30",
  installments: [
    { id: 1, amount: 25000, dueDate: "2025-01-15", status: "Paid", paidDate: "2025-01-12" },
    { id: 2, amount: 25000, dueDate: "2025-02-15", status: "Paid", paidDate: "2025-02-10" },
    { id: 3, amount: 25000, dueDate: "2025-03-15", status: "Paid", paidDate: "2025-03-14" },
    { id: 4, amount: 25000, dueDate: "2025-04-15", status: "Due" },
    { id: 5, amount: 25000, dueDate: "2025-05-15", status: "Due" }
  ]
};
