import React from "react";

const NotFound = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
        <p className="text-gray-600">
          {/* The page you're looking for does not exist.  */}
        </p>
      </div>
    </section>
  );
};

export default NotFound;
