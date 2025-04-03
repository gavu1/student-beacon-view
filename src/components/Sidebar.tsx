
import { Link } from "react-router-dom";
import { BookOpen, Clock, Home, User, FileText } from "lucide-react";

const Sidebar = ({ onLogout }) => {
  return (
    <div className="w-24 h-screen bg-sidebar flex flex-col items-center border-r">
      <div className="mt-6 mb-8">
        <img src="/lovable-uploads/56fd8156-7c6b-4c29-a0a4-b3a1292e1d5c.png" alt="UMS Logo" className="w-16 h-16" />
      </div>
      
      <nav className="flex flex-col items-center space-y-4">
        <Link to="/" className="sidebar-link">
          <Home className="h-6 w-6 mb-1" />
          <span>Dashboard</span>
        </Link>
        
        <Link to="/attendance" className="sidebar-link">
          <Clock className="h-6 w-6 mb-1" />
          <span>Attendance</span>
        </Link>
        
        <Link to="/cgpa" className="sidebar-link">
          <BookOpen className="h-6 w-6 mb-1" />
          <span>CGPA</span>
        </Link>
        
        <Link to="/profile" className="sidebar-link">
          <User className="h-6 w-6 mb-1" />
          <span>Profile</span>
        </Link>
        
        <Link to="/assignments" className="sidebar-link">
          <FileText className="h-6 w-6 mb-1" />
          <span>Assignments</span>
        </Link>
      </nav>
      
      {onLogout && (
        <button 
          onClick={onLogout} 
          className="mt-auto mb-6 text-red-500 flex flex-col items-center text-xs font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Logout</span>
        </button>
      )}
    </div>
  );
};

export default Sidebar;
