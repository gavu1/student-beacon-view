
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, CalendarDays, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import { studentProfile, pendingAssignments } from "@/services/mockData";

// Add completed assignments to our mock data
const completedAssignments = [
  { 
    id: 4, 
    title: "Data Structures Implementation", 
    course: "CS401", 
    dueDate: "2025-03-20", 
    submissionDate: "2025-03-18",
    grade: "A",
    status: "Completed" 
  },
  { 
    id: 5, 
    title: "Database Design ERD", 
    course: "CS403", 
    dueDate: "2025-03-15", 
    submissionDate: "2025-03-14",
    grade: "A-",
    status: "Completed" 
  },
  { 
    id: 6, 
    title: "Algorithm Complexity Analysis", 
    course: "CS402", 
    dueDate: "2025-03-10", 
    submissionDate: "2025-03-09",
    grade: "B+",
    status: "Completed" 
  },
];

// Add upcoming assignments 
const upcomingAssignments = [
  { 
    id: 7, 
    title: "Network Socket Programming", 
    course: "CS404", 
    dueDate: "2025-04-25", 
    status: "Upcoming" 
  },
  { 
    id: 8, 
    title: "Statistical Data Analysis", 
    course: "MA401", 
    dueDate: "2025-04-28", 
    status: "Upcoming" 
  },
  { 
    id: 9, 
    title: "Technical Report Writing", 
    course: "HU401", 
    dueDate: "2025-04-30", 
    status: "Upcoming" 
  },
];

const Assignments = () => {
  const getDaysRemaining = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
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
              <FileText className="h-6 w-6 mr-2 text-ums-blue" />
              Assignments
            </h2>
            <p className="text-gray-500">View and manage your course assignments</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                Pending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-ums-orange">{pendingAssignments.length}</div>
              <p className="text-gray-500 text-sm mt-1">Assignments due soon</p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <CalendarDays className="h-5 w-5 mr-2 text-blue-500" />
                Upcoming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-ums-blue">{upcomingAssignments.length}</div>
              <p className="text-gray-500 text-sm mt-1">Future assignments</p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600">{completedAssignments.length}</div>
              <p className="text-gray-500 text-sm mt-1">Submitted assignments</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Pending Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                {pendingAssignments.length > 0 ? (
                  <div className="space-y-4">
                    {pendingAssignments.map((assignment) => (
                      <div key={assignment.id} className="border rounded-md p-4 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                          <div>
                            <h3 className="font-medium text-lg">{assignment.title}</h3>
                            <p className="text-sm text-gray-500">Course: {assignment.course}</p>
                          </div>
                          <div className="mt-2 md:mt-0 flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-red-500" />
                            <span className="text-sm font-medium text-red-500">
                              Due in {getDaysRemaining(assignment.dueDate)} days ({assignment.dueDate})
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end space-x-2">
                          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">View Details</button>
                          <button className="px-3 py-1 bg-ums-blue text-white rounded-md text-sm">Submit Assignment</button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-12 w-12 mx-auto text-green-500 mb-2" />
                    <h3 className="font-medium text-lg">No pending assignments!</h3>
                    <p className="text-gray-500">You're all caught up.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="upcoming">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingAssignments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAssignments.map((assignment) => (
                      <div key={assignment.id} className="border rounded-md p-4 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                          <div>
                            <h3 className="font-medium text-lg">{assignment.title}</h3>
                            <p className="text-sm text-gray-500">Course: {assignment.course}</p>
                          </div>
                          <div className="mt-2 md:mt-0 flex items-center">
                            <CalendarDays className="h-4 w-4 mr-1 text-blue-500" />
                            <span className="text-sm font-medium text-blue-500">
                              Due in {getDaysRemaining(assignment.dueDate)} days ({assignment.dueDate})
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">View Details</button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CalendarDays className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                    <h3 className="font-medium text-lg">No upcoming assignments</h3>
                    <p className="text-gray-500">Check back later for new assignments.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Completed Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                {completedAssignments.length > 0 ? (
                  <div className="space-y-4">
                    {completedAssignments.map((assignment) => (
                      <div key={assignment.id} className="border rounded-md p-4 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                          <div>
                            <h3 className="font-medium text-lg">{assignment.title}</h3>
                            <p className="text-sm text-gray-500">Course: {assignment.course}</p>
                          </div>
                          <div className="mt-2 md:mt-0 flex items-center space-x-4">
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                              <span className="text-sm text-gray-500">
                                Submitted: {assignment.submissionDate}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className={`px-2 py-0.5 rounded-full text-xs ${
                                assignment.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                                assignment.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                                assignment.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-red-100 text-red-800'
                              }`}>
                                Grade: {assignment.grade}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end space-x-2">
                          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">View Feedback</button>
                          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">Download Submission</button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                    <h3 className="font-medium text-lg">No completed assignments</h3>
                    <p className="text-gray-500">You haven't submitted any assignments yet.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Assignment Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <p>
                  <span className="font-bold">File Format:</span> Submit your assignments in PDF, DOCX, or ZIP format only. Maximum file size: 10MB.
                </p>
                <p>
                  <span className="font-bold">Late Submissions:</span> Late submissions may incur a penalty as per the course policy. Check with your course instructor for specific details.
                </p>
                <p>
                  <span className="font-bold">Plagiarism:</span> All assignments are checked for plagiarism using automated tools. Ensure your work is original and properly cited.
                </p>
                <p>
                  <span className="font-bold">Technical Issues:</span> If you encounter any technical issues while submitting assignments, contact the IT helpdesk immediately at helpdesk@lpu.in.
                </p>
                <p>
                  <span className="font-bold">Extensions:</span> For extension requests due to valid reasons, contact your course instructor with proper documentation.
                </p>
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

export default Assignments;
