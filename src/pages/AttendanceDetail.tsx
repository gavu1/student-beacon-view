
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import { studentProfile, attendanceData } from "@/services/mockData";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";

const AttendanceDetail = () => {
  const { overall, courses, monthly } = attendanceData;
  
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <Header 
        studentName={studentProfile.name} 
        studentId={studentProfile.id} 
        department={studentProfile.program} 
      />
      
      <main className="flex-1 p-6 bg-gray-50">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </Link>
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <Clock className="h-6 w-6 mr-2 text-ums-blue" />
              Attendance Report
            </h2>
            <p className="text-gray-500">View your attendance across all courses</p>
          </div>
          <button className="ml-auto flex items-center bg-ums-blue text-white px-3 py-2 rounded-md text-sm">
            <Download className="h-4 w-4 mr-1" /> Download Report
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Overall Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-ums-blue">{overall}%</div>
              <Progress value={overall} className="h-2 mt-2" />
              <p className="text-gray-500 text-sm mt-1">
                {overall >= 75 ? "Good Standing" : "Below Requirement"}
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Classes Attended</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-ums-blue">
                {courses.reduce((total, course) => total + course.present, 0)}
              </div>
              <p className="text-gray-500 text-sm mt-1">
                Out of {courses.reduce((total, course) => total + course.classes, 0)} total classes
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Minimum Required</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-ums-orange">75%</div>
              <Progress value={75} className="h-2 mt-2" />
              <p className="text-gray-500 text-sm mt-1">University requirement</p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Attendance Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-4xl font-bold ${overall >= 75 ? "text-green-600" : "text-red-600"}`}>
                {overall >= 75 ? "Good" : "At Risk"}
              </div>
              <p className="text-gray-500 text-sm mt-1">
                {overall >= 75 ? "Keep it up!" : "Improvement needed"}
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Monthly Attendance Trend</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthly.filter(m => m.attendance > 0)}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="attendance" 
                    name="Attendance %" 
                    stroke="#006699" 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Attendance Warning Levels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 mt-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Above 85% (Excellent)</span>
                    <span className="text-sm font-medium">No Action</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">75% - 85% (Good)</span>
                    <span className="text-sm font-medium">No Action</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">65% - 75% (Warning)</span>
                    <span className="text-sm font-medium">First Warning</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Below 65% (Critical)</span>
                    <span className="text-sm font-medium">Final Warning</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-red-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="dashboard-card mb-6">
          <CardHeader>
            <CardTitle>Course-wise Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left font-medium text-gray-500">Course Code</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500">Course Name</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500">Classes Held</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500">Classes Attended</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500">Attendance %</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="px-4 py-3">{course.code}</td>
                      <td className="px-4 py-3">{course.name}</td>
                      <td className="px-4 py-3">{course.classes}</td>
                      <td className="px-4 py-3">{course.present}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <span className="mr-2">{course.attendance.toFixed(1)}%</span>
                          <Progress value={course.attendance} className="h-2 w-24" />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          course.attendance >= 85 ? 'bg-green-100 text-green-800' :
                          course.attendance >= 75 ? 'bg-blue-100 text-blue-800' :
                          course.attendance >= 65 ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {course.attendance >= 85 ? 'Excellent' :
                           course.attendance >= 75 ? 'Good' :
                           course.attendance >= 65 ? 'Warning' : 
                           'Critical'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Attendance Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <p>
                <span className="font-bold">Minimum Attendance Requirement:</span> Students must maintain a minimum of 75% attendance in each course.
              </p>
              <p>
                <span className="font-bold">Warning System:</span> Students whose attendance falls below 75% will receive a warning notification. If attendance falls below 65%, a final warning will be issued.
              </p>
              <p>
                <span className="font-bold">Consequences:</span> Students with attendance below 65% may not be allowed to appear for the end-semester examination as per university rules.
              </p>
              <p>
                <span className="font-bold">Medical Leave:</span> In case of medical emergencies, students can apply for medical leave with proper documentation through the Examination Office.
              </p>
              <p>
                <span className="font-bold">Official Duty:</span> Attendance for official university programs (competitions, cultural events, etc.) can be considered upon proper approval from the concerned department.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <footer className="bg-white p-4 border-t text-center text-sm text-gray-500">
        <p>UMS Pwd will expire after 45 days. Do change your pwd on or before 18-05-2025</p>
      </footer>
    </div>
  );
};

export default AttendanceDetail;
