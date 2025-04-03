
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import { studentProfile, cgpaData, courseGrades, calculateCGPA } from "@/services/mockData";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const CGPADetail = () => {
  const currentCGPA = calculateCGPA();
  
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
              <BookOpen className="h-6 w-6 mr-2 text-ums-blue" />
              CGPA Analysis
            </h2>
            <p className="text-gray-500">View your academic performance across semesters</p>
          </div>
          <button className="ml-auto flex items-center bg-ums-blue text-white px-3 py-2 rounded-md text-sm">
            <Download className="h-4 w-4 mr-1" /> Download Report
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Cumulative GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-ums-blue">{currentCGPA}</div>
              <p className="text-gray-500 text-sm mt-1">Out of 10.0</p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Current Semester GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-ums-blue">
                {cgpaData.find(semester => semester.status === "Completed")?.gpa.toFixed(1) || "N/A"}
              </div>
              <p className="text-gray-500 text-sm mt-1">Out of 10.0</p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Credits Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-ums-blue">
                {cgpaData.filter(sem => sem.status === "Completed").reduce((total, sem) => total + sem.credits, 0)}
              </div>
              <p className="text-gray-500 text-sm mt-1">Out of 160 required</p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Academic Standing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600">Good</div>
              <p className="text-gray-500 text-sm mt-1">Dean's List Eligible</p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Result Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-b pb-2 mb-6">
              <p className="text-gray-700">In case of any query/issue related to "Result", <Link to="#" className="text-ums-blue font-medium">Click Here</Link></p>
            </div>
            
            <Tabs defaultValue="marks">
              <TabsList className="mb-4 border-b w-full justify-start rounded-none bg-transparent">
                <TabsTrigger value="marks" className="rounded-t data-[state=active]:bg-white data-[state=active]:border-b-0 data-[state=active]:border data-[state=active]:border-gray-200 data-[state=active]:text-ums-blue">Marks Details</TabsTrigger>
                <TabsTrigger value="grades" className="rounded-t data-[state=active]:bg-white data-[state=active]:border-b-0 data-[state=active]:border data-[state=active]:border-gray-200 data-[state=active]:text-ums-blue">Grade Details</TabsTrigger>
              </TabsList>
              
              <TabsContent value="marks">
                <div className="mb-4">
                  <span className="text-red-500">*</span> Click to expand for Details
                </div>
                
                {courseGrades.map((semester, index) => (
                  <div key={index} className="mb-6 border rounded-lg bg-gray-50">
                    <div className="p-4 font-medium">
                      Term Id: {123240 + index}
                    </div>
                    
                    {semester.status === "Awaited" ? (
                      <div className="p-4 text-center border-t">
                        <p className="text-xl text-amber-600 font-semibold">Result Awaited</p>
                      </div>
                    ) : (
                      semester.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="border-t">
                          <div className="p-4 text-center bg-gray-100 font-medium">
                            {course.code} : {course.name}
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b">
                                  <th className="px-4 py-2 text-left font-medium text-gray-700 border">Type</th>
                                  <th className="px-4 py-2 text-left font-medium text-gray-700 border">Marks</th>
                                  <th className="px-4 py-2 text-left font-medium text-gray-700 border">Weightage</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b">
                                  <td className="px-4 py-3 border">Attendance Marks</td>
                                  <td className="px-4 py-3 border">5/5</td>
                                  <td className="px-4 py-3 border">5/5</td>
                                </tr>
                                <tr className="border-b">
                                  <td className="px-4 py-3 border">Continuous Assessment</td>
                                  <td className="px-4 py-3 border">68/100</td>
                                  <td className="px-4 py-3 border">28/40</td>
                                </tr>
                                <tr className="border-b">
                                  <td className="px-4 py-3 border">Objective Type End Term</td>
                                  <td className="px-4 py-3 border">31/60</td>
                                  <td className="px-4 py-3 border">19/35</td>
                                </tr>
                                <tr className="border-b">
                                  <td className="px-4 py-3 border">Objective Type Mid Term</td>
                                  <td className="px-4 py-3 border">20/30</td>
                                  <td className="px-4 py-3 border">14/20</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="grades">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left font-medium text-gray-700 border">Semester</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700 border">Course Code</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700 border">Course Name</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700 border">Credits</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700 border">Grade</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700 border">Grade Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courseGrades.map((semester, semIndex) => (
                        semester.status === "Awaited" ? (
                          <tr key={semIndex} className="border-b">
                            <td className="px-4 py-3 border">{semester.semester}</td>
                            <td className="px-4 py-3 border text-amber-600 font-medium" colSpan={5}>
                              Result Awaited
                            </td>
                          </tr>
                        ) : (
                          semester.courses.map((course, courseIndex) => (
                            <tr key={`${semIndex}-${courseIndex}`} className="border-b">
                              {courseIndex === 0 && (
                                <td className="px-4 py-3 border" rowSpan={semester.courses.length}>
                                  {semester.semester}
                                </td>
                              )}
                              <td className="px-4 py-3 border">{course.code}</td>
                              <td className="px-4 py-3 border">{course.name}</td>
                              <td className="px-4 py-3 border">{course.credits}</td>
                              <td className="px-4 py-3 border">
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  course.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                                  course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                                  course.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {course.grade}
                                </span>
                              </td>
                              <td className="px-4 py-3 border">{course.gpa.toFixed(1)}</td>
                            </tr>
                          ))
                        )
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>GPA Trend by Semester</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={cgpaData.filter(sem => sem.status === "Completed")}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="semester" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Bar dataKey="gpa" name="GPA" fill="#006699" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Credits by Semester</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={cgpaData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="semester" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="credits" name="Credits" fill="#e67e22" />
                </BarChart>
              </ResponsiveContainer>
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

export default CGPADetail;
