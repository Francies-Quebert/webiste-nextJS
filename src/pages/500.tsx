"use client";

import Image from "next/image";
// import errorMascot from "../../public/icons/error.svg";

export default function Error() {
  return (
    <div className="h-screen bg-gray-200 flex flex-col ju~stify-center items-center">
      <Image src={'@/icons/error.svg'} alt="error" className="w-56 mb-8" width={20}/>
      <div className="bg-white px-9 py-14 shadow rounded text-dark-theme-text">
        <h3 className="text-3xl font-bold">Well, this is embarrassing</h3>
        <p className="text-reg font-bold">Internal Server Error</p>
        <p className="mt-6 text-sm font-light">Error Code: 400</p>
      </div>
    </div>
  );
}
