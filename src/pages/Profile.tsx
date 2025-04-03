
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Calendar, GraduationCap, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import { studentProfile } from "@/services/mockData";

const Profile = () => {
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
              <User className="h-6 w-6 mr-2 text-ums-blue" />
              Student Profile
            </h2>
            <p className="text-gray-500">View and manage your profile information</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="lg:col-span-1">
            <Card className="dashboard-card">
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-gray-500">{studentProfile.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold">{studentProfile.name}</h3>
                <p className="text-gray-500 mb-2">{studentProfile.id}</p>
                <p className="text-sm text-gray-500 mb-1">{studentProfile.program}</p>
                <p className="text-sm text-gray-500">Section: {studentProfile.section}</p>
                
                <div className="w-full mt-6 space-y-3">
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{studentProfile.email}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{studentProfile.phone}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Enrolled: {studentProfile.enrollmentDate}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <GraduationCap className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Expected Graduation: {studentProfile.expectedGraduation}</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-ums-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Edit Profile
                </button>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <Tabs defaultValue="academic" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="academic">Academic Information</TabsTrigger>
                <TabsTrigger value="personal">Personal Information</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>
              
              <TabsContent value="academic">
                <Card className="dashboard-card mb-6">
                  <CardHeader>
                    <CardTitle>Academic Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-4">Program Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Program</span>
                            <span className="font-medium">{studentProfile.program}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Current Semester</span>
                            <span className="font-medium">{studentProfile.semester}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Section</span>
                            <span className="font-medium">{studentProfile.section}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Academic Advisor</span>
                            <span className="font-medium">{studentProfile.advisor}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Enrollment Status</span>
                            <span className="font-medium">Active</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-4">Academic Timeline</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Enrollment Date</span>
                            <span className="font-medium">{studentProfile.enrollmentDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Expected Graduation</span>
                            <span className="font-medium">{studentProfile.expectedGraduation}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Total Credits Earned</span>
                            <span className="font-medium">96 / 160</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Current CGPA</span>
                            <span className="font-medium">3.7 / 4.0</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Academic Standing</span>
                            <span className="font-medium text-green-600">Good Standing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="dashboard-card">
                  <CardHeader>
                    <CardTitle>Current Course Registration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="px-4 py-2 text-left font-medium text-gray-500">Course Code</th>
                            <th className="px-4 py-2 text-left font-medium text-gray-500">Course Name</th>
                            <th className="px-4 py-2 text-left font-medium text-gray-500">Credits</th>
                            <th className="px-4 py-2 text-left font-medium text-gray-500">Instructor</th>
                            <th className="px-4 py-2 text-left font-medium text-gray-500">Schedule</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-4 py-3">CS401</td>
                            <td className="px-4 py-3">Data Structures</td>
                            <td className="px-4 py-3">4</td>
                            <td className="px-4 py-3">Dr. Rajesh Kumar</td>
                            <td className="px-4 py-3">Mon, Wed 10:00-11:30 AM</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-3">CS402</td>
                            <td className="px-4 py-3">Algorithm Design</td>
                            <td className="px-4 py-3">4</td>
                            <td className="px-4 py-3">Dr. Sanjay Gupta</td>
                            <td className="px-4 py-3">Tue, Thu 9:00-10:30 AM</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-3">CS403</td>
                            <td className="px-4 py-3">Database Systems</td>
                            <td className="px-4 py-3">3</td>
                            <td className="px-4 py-3">Dr. Meena Sharma</td>
                            <td className="px-4 py-3">Mon, Fri 1:00-2:30 PM</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-3">CS404</td>
                            <td className="px-4 py-3">Computer Networks</td>
                            <td className="px-4 py-3">3</td>
                            <td className="px-4 py-3">Prof. Ajay Singh</td>
                            <td className="px-4 py-3">Wed, Fri 3:00-4:30 PM</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-3">MA401</td>
                            <td className="px-4 py-3">Probability & Statistics</td>
                            <td className="px-4 py-3">3</td>
                            <td className="px-4 py-3">Dr. Anita Verma</td>
                            <td className="px-4 py-3">Tue, Thu 1:00-2:30 PM</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3">HU401</td>
                            <td className="px-4 py-3">Technical Communication</td>
                            <td className="px-4 py-3">3</td>
                            <td className="px-4 py-3">Prof. Ritu Sharma</td>
                            <td className="px-4 py-3">Wed 10:00-11:30 AM</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="personal">
                <Card className="dashboard-card mb-6">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-4">Basic Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Full Name</span>
                            <span className="font-medium">{studentProfile.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Student ID</span>
                            <span className="font-medium">{studentProfile.id}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Date of Birth</span>
                            <span className="font-medium">15 August 2001</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Gender</span>
                            <span className="font-medium">Male</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Nationality</span>
                            <span className="font-medium">Indian</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Email</span>
                            <span className="font-medium">{studentProfile.email}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Phone</span>
                            <span className="font-medium">{studentProfile.phone}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Current Address</span>
                            <span className="font-medium">Hostel A-205, LPU Campus</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Permanent Address</span>
                            <span className="font-medium truncate">123 Main Street, Delhi, India</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Emergency Contact</span>
                            <span className="font-medium">+91 9876543210 (Father)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="dashboard-card">
                  <CardHeader>
                    <CardTitle>Parent/Guardian Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-4">Father's Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Name</span>
                            <span className="font-medium">Harpreet Singh</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Occupation</span>
                            <span className="font-medium">Business Owner</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Phone</span>
                            <span className="font-medium">+91 9876543210</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Email</span>
                            <span className="font-medium">harpreet.singh@example.com</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-4">Mother's Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Name</span>
                            <span className="font-medium">Manpreet Kaur</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Occupation</span>
                            <span className="font-medium">Teacher</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Phone</span>
                            <span className="font-medium">+91 9876543211</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Email</span>
                            <span className="font-medium">manpreet.kaur@example.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="documents">
                <Card className="dashboard-card">
                  <CardHeader>
                    <CardTitle>Uploaded Documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-md p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="bg-gray-100 p-2 rounded-md mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">High School Certificate</p>
                              <p className="text-xs text-gray-500">Uploaded on: 15 Aug 2021</p>
                            </div>
                          </div>
                          <button className="text-ums-blue text-sm">View</button>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="bg-gray-100 p-2 rounded-md mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">Intermediate Certificate</p>
                              <p className="text-xs text-gray-500">Uploaded on: 15 Aug 2021</p>
                            </div>
                          </div>
                          <button className="text-ums-blue text-sm">View</button>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="bg-gray-100 p-2 rounded-md mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">ID Proof (Aadhar Card)</p>
                              <p className="text-xs text-gray-500">Uploaded on: 15 Aug 2021</p>
                            </div>
                          </div>
                          <button className="text-ums-blue text-sm">View</button>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="bg-gray-100 p-2 rounded-md mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">Medical Certificate</p>
                              <p className="text-xs text-gray-500">Uploaded on: 15 Aug 2021</p>
                            </div>
                          </div>
                          <button className="text-ums-blue text-sm">View</button>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="bg-gray-100 p-2 rounded-md mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">Domicile Certificate</p>
                              <p className="text-xs text-gray-500">Uploaded on: 15 Aug 2021</p>
                            </div>
                          </div>
                          <button className="text-ums-blue text-sm">View</button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button className="bg-ums-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                        Upload New Document
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <footer className="bg-white p-4 border-t text-center text-sm text-gray-500">
        <p>UMS Pwd will expire after 45 days. Do change your pwd on or before 18-05-2025</p>
      </footer>
    </div>
  );
};

export default Profile;
