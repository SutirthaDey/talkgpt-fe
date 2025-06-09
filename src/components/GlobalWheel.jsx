import React from "react";

const GlobalWheel = ({ text = "Loading..." }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-20 flex flex-col items-center justify-center space-y-2">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
      {text && <p className="text-white text-lg ml-2">{text}</p>}
    </div>
  );
};

export default GlobalWheel;
