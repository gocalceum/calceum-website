import { useEffect } from "react";

const SignIn = () => {
  useEffect(() => {
    // Redirect to app.calceum.com signin page
    window.location.href = "https://app.calceum.com/signin";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to Calceum app...</p>
      </div>
    </div>
  );
};

export default SignIn;