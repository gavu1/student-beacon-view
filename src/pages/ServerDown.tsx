
import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft, Server } from "lucide-react";

const ServerDown = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="h-24 w-24 bg-red-100 rounded-full flex items-center justify-center">
            <Server className="h-12 w-12 text-red-600" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Server Temporarily Down</h1>
        
        <div className="flex items-center justify-center mb-4">
          <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
          <p className="text-amber-600 font-medium">System Under Maintenance</p>
        </div>
        
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Our server is currently undergoing scheduled maintenance. 
          Please check back in a few hours.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <p className="text-gray-700">
            Maintenance window: <span className="font-medium">04-04-2025 22:00 to 05-04-2025 02:00</span>
          </p>
          <p className="text-gray-700 mt-1">
            Expected to be back: <span className="font-medium text-green-600">05-04-2025 02:00</span>
          </p>
        </div>
        
        <Link to="/" className="inline-flex items-center text-ums-blue hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" /> Return to Dashboard
        </Link>
      </div>
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>If you continue to experience issues after the maintenance window,</p>
        <p>please contact support at <span className="font-medium">support@university.edu</span></p>
      </div>
    </div>
  );
};

export default ServerDown;
