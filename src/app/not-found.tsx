import React from "react";

const ErorrPage = () => {
  return (
    <div className="pt-20 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-[15rem] text-orange-300 font-bold">404</h1>
        <h3 className="text-xl sm:text-[2rem] font-semibold">Page Not Found</h3>
        <button className="p-2 bg-gray-200 text-black rounded-lg mt-5 font-semibold px-5 ">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErorrPage;
