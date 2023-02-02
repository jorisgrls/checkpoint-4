import React from "react";

function SkeletonAnnonce() {
  return (
    <div className="w-full bg-white rounded-md p-8 mb-10 flex gap-4 animate-pulse">
      <div className="w-96 h-72 bg-gray-200 rounded-md" />
      <div className="w-full flex flex-col gap-3">
        <div className="bg-gray-200 rounded-md w-full h-10 mb-8" />
        <div className="bg-gray-200 rounded-md w-full h-3" />
        <div className="bg-gray-200 rounded-md w-full h-3" />
        <div className="bg-gray-200 rounded-md w-full h-3" />
        <div className="bg-gray-200 rounded-md w-full h-3" />
        <div className="bg-gray-200 rounded-md w-full h-3" />
        <div className="flex gap-6 justify-between mt-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gray-200 h-12 w-12" />
            <div className="bg-gray-200 rounded-md w-20 h-3" />
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gray-200 h-12 w-12" />
            <div className="bg-gray-200 rounded-md w-20 h-3" />
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gray-200 h-12 w-12" />
            <div className="bg-gray-200 rounded-md w-20 h-3" />
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gray-200 h-12 w-12" />
            <div className="bg-gray-200 rounded-md w-20 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonAnnonce;
