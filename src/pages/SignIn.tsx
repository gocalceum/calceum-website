import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="mb-8">
        <Link to="/" className="text-3xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
          Calceum
        </Link>
      </div>
      
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-medium text-center">Sign in to your account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-gray-600">
            <p className="mb-4">Sign in functionality coming soon</p>
            <p className="text-sm">This is a placeholder page for the sign-in feature.</p>
          </div>
          
          <div className="pt-4">
            <Link to="/">
              <Button variant="outline" className="w-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      
      <p className="mt-8 text-sm text-gray-600">
        Don't have an account?{" "}
        <Link to="/" className="text-black hover:underline">
          Get early access
        </Link>
      </p>
    </div>
  );
};

export default SignIn;