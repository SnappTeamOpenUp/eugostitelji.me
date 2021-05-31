import React from "react";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center h-64 sm:h-auto">
        <div className="flex items-center sm:justify-start">
          <div className="px-4 text-lg text-gray-600 border-r-2 border-gray-500 tracking-wider font-bold">
            404
          </div>

          <div className="ml-4 text-lg text-gray-600 uppercase tracking-wider font-bold">
            Page not found
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
