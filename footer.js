// CustomLayout.js
import React from 'react';

const CustomLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        {/* Header content */}
        Header
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4">
        {/* Footer content */}
        Footer
      </footer>
    </div>
  );
};

export default CustomLayout;