
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

// CGPA data by semester
export const cgpaData = [
  { semester: "Semester 1", gpa: 3.7, credits: 18 },
  { semester: "Semester 2", gpa: 3.8, credits: 20 },
  { semester: "Semester 3", gpa: 3.5, credits: 19 },
  { semester: "Semester 4", gpa: 3.9, credits: 21 },
  { semester: "Semester 5", gpa: 3.6, credits: 18 },
  { semester: "Current", gpa: 3.8, credits: 20 },
];

// Calculate CGPA
export const calculateCGPA = () => {
  let totalPoints = 0;
  let totalCredits = 0;
  
  cgpaData.forEach(sem => {
    totalPoints += sem.gpa * sem.credits;
    totalCredits += sem.credits;
  });
  
  return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "N/A";
};

// Course-wise grades data
export const courseGrades = [
  { 
    semester: "Current Semester", 
    courses: [
      { code: "CS401", name: "Data Structures", credits: 4, grade: "A", gpa: 4.0 },
      { code: "CS402", name: "Algorithm Design", credits: 4, grade: "A-", gpa: 3.7 },
      { code: "CS403", name: "Database Systems", credits: 3, grade: "B+", gpa: 3.3 },
      { code: "CS404", name: "Computer Networks", credits: 3, grade: "A", gpa: 4.0 },
      { code: "MA401", name: "Probability & Statistics", credits: 3, grade: "B+", gpa: 3.3 },
      { code: "HU401", name: "Technical Communication", credits: 3, grade: "A-", gpa: 3.7 }
    ]
  },
  { 
    semester: "Semester 5", 
    courses: [
      { code: "CS301", name: "Operating Systems", credits: 4, grade: "A-", gpa: 3.7 },
      { code: "CS302", name: "Software Engineering", credits: 3, grade: "B+", gpa: 3.3 },
      { code: "CS303", name: "Theory of Computation", credits: 3, grade: "A", gpa: 4.0 },
      { code: "CS304", name: "Computer Architecture", credits: 4, grade: "B+", gpa: 3.3 },
      { code: "MA301", name: "Discrete Mathematics", credits: 3, grade: "A-", gpa: 3.7 }
    ]
  },
  { 
    semester: "Semester 4", 
    courses: [
      { code: "CS201", name: "Object-Oriented Programming", credits: 4, grade: "A", gpa: 4.0 },
      { code: "CS202", name: "Data Communication", credits: 3, grade: "A", gpa: 4.0 },
      { code: "CS203", name: "Web Technologies", credits: 4, grade: "A-", gpa: 3.7 },
      { code: "CS204", name: "Digital Logic Design", credits: 4, grade: "A", gpa: 4.0 },
      { code: "MA201", name: "Linear Algebra", credits: 3, grade: "B+", gpa: 3.3 },
      { code: "HU201", name: "Economics for Engineers", credits: 3, grade: "A-", gpa: 3.7 }
    ]
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
