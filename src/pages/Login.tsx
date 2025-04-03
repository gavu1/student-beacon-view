
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "12303557" && password === "Gavi@1234") {
      localStorage.setItem("isAuthenticated", "true");
      toast({
        title: "Success",
        description: "Successfully logged in",
      });
      navigate("/");
    } else {
      toast({
        title: "Error",
        description: "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="flex justify-center mb-6">
          <img 
            src="public/lovable-uploads/ff719044-2c7c-4fcf-a9ab-b184961e0f62.png" 
            alt="UMS Logo" 
            className="h-16"
          />
        </div>
        
        <Card className="w-full">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-semibold text-center mb-6">Log in</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <Select defaultValue="HeadOffice">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Office" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HeadOffice">Head Office</SelectItem>
                  <SelectItem value="RegionalOffice">Regional Office</SelectItem>
                </SelectContent>
              </Select>

              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Registration Number"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2 relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-sm">
                <Select defaultValue="Dashboard">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Select Dashboard" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dashboard">Dashboard</SelectItem>
                    <SelectItem value="AdminDashboard">Admin Dashboard</SelectItem>
                  </SelectContent>
                </Select>
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
              >
                Login
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
