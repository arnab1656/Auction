import React, { useState, useEffect } from "react";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion after 3 seconds (for demonstration)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading ? (
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
      ) : (
        <h1 className="text-3xl">Loading complete!</h1>
      )}
    </div>
  );
};

export default LoadingAnimation;
