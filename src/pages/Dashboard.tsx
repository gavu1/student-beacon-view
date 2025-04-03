import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, Clock, FileText } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import { 
  studentProfile, 
  calculateCGPA, 
  attendanceData, 
  pendingAssignments, 
  announcements 
} from "@/services/mockData";

const Dashboard = () => {
  const cgpa = calculateCGPA();
  const overallAttendance = attendanceData.overall;
  
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <Header 
        studentName={studentProfile.name} 
        studentId={studentProfile.id} 
        department={studentProfile.program} 
      />
      
      <main className="flex-1 p-6 bg-gray-50">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Welcome, {studentProfile.name}</h2>
          <p className="text-gray-500">
            ID: {studentProfile.id} | Section: {studentProfile.section} | Program: {studentProfile.program}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* CGPA Card */}
          <Link to="/cgpa">
            <Card className="dashboard-card cursor-pointer h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Current CGPA</span>
                  <BookOpen className="h-5 w-5 text-ums-blue" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-ums-blue">{cgpa}</div>
                <p className="text-gray-500 text-sm mt-1">Out of 4.0</p>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex items-center text-ums-orange text-sm font-medium">
                  View detailed report <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </Link>
          
          {/* Attendance Card */}
          <Link to="/attendance">
            <Card className="dashboard-card cursor-pointer h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Attendance</span>
                  <Clock className="h-5 w-5 text-ums-blue" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-ums-blue">{overallAttendance}%</div>
                <Progress 
                  value={overallAttendance} 
                  className="h-2 mt-2" 
                />
                <p className="text-gray-500 text-sm mt-1">Overall attendance</p>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex items-center text-ums-orange text-sm font-medium">
                  View detailed report <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </Link>
          
          {/* Assignment Status Card */}
          <Link to="/assignments">
            <Card className="dashboard-card cursor-pointer h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Pending Assignments</span>
                  <FileText className="h-5 w-5 text-ums-blue" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-ums-blue">{pendingAssignments.length}</div>
                <p className="text-gray-500 text-sm mt-1">Due this week</p>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex items-center text-ums-orange text-sm font-medium">
                  View all assignments <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Important Links */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Important Links and Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <button className="link-button">Hostel Booking</button>
                <button className="link-button">RMS</button>
                <button className="link-button">Fee Dashboard</button>
                <button className="link-button">Issued Books</button>
                <button className="link-button">Academic Calendar</button>
                <button className="link-button">Emergency Numbers</button>
                <button className="link-button">Certificate Request</button>
                <button className="link-button">Part-time Job Application</button>
                <button className="orange-button">WhatsApp</button>
              </div>
            </CardContent>
          </Card>
          
          {/* Announcements */}
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>My Messages</CardTitle>
              <button className="text-ums-blue text-sm">All Messages</button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="border-b pb-3 last:border-0">
                    <h3 className="font-medium">{announcement.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                      {announcement.content}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{announcement.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Events */}
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Upcoming Events</CardTitle>
              <button className="text-ums-blue text-sm">View More</button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-gray-100 rounded-md p-2 text-center min-w-[60px]">
                    <div className="text-xs text-gray-500">APR</div>
                    <div className="text-lg font-bold">10</div>
                  </div>
                  <div>
                    <h3 className="font-medium">Mid-semester Examination</h3>
                    <p className="text-sm text-gray-500">10:00 AM - All Departments</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-gray-100 rounded-md p-2 text-center min-w-[60px]">
                    <div className="text-xs text-gray-500">APR</div>
                    <div className="text-lg font-bold">15</div>
                  </div>
                  <div>
                    <h3 className="font-medium">Technical Symposium</h3>
                    <p className="text-sm text-gray-500">9:00 AM - Computer Science Department</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-gray-100 rounded-md p-2 text-center min-w-[60px]">
                    <div className="text-xs text-gray-500">APR</div>
                    <div className="text-lg font-bold">22</div>
                  </div>
                  <div>
                    <h3 className="font-medium">Campus Recruitment Drive</h3>
                    <p className="text-sm text-gray-500">10:00 AM - Placement Cell</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Course Schedule */}
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Today's Schedule</CardTitle>
              <Link to="/schedule" className="text-ums-blue text-sm">Full Schedule</Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                  <div>
                    <h3 className="font-medium">CS401: Data Structures</h3>
                    <p className="text-sm text-gray-500">Room: CS-201</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">10:00 - 11:30 AM</p>
                    <p className="text-sm text-gray-500">Dr. Rajesh Kumar</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                  <div>
                    <h3 className="font-medium">CS403: Database Systems</h3>
                    <p className="text-sm text-gray-500">Room: CS-105</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">1:00 - 2:30 PM</p>
                    <p className="text-sm text-gray-500">Dr. Meena Sharma</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                  <div>
                    <h3 className="font-medium">CS404: Computer Networks Lab</h3>
                    <p className="text-sm text-gray-500">Room: CS-LAB-3</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">3:00 - 5:00 PM</p>
                    <p className="text-sm text-gray-500">Prof. Sanjay Gupta</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <footer className="bg-white p-4 border-t text-center text-sm text-gray-500">
        <p>UMS Pwd will expire after 45 days. Do change your pwd on or before 18-05-2025</p>
      </footer>
    </div>
  );
};

export default Dashboard;
