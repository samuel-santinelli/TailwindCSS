import React from "react";
import Cards from "./Cards";
import Loading from "./Loading";

const Content = () => {
  return (
    <>
      <Loading />
      <div>
        <header className="bg-black">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-black">
            <h1 className="text-5xl font-bold text-orange-300 flex justify-center font-Sulphur Point">
              
            </h1>
          </div>
        </header>
        <main className="bg-black">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-black">
            <div className="px-4 py-6 sm:px-0">
              <div className="rounded-lg h-96 flex justify-center bg-black ">
                {/* Cards Start here */}
                <Cards />
                {/* Cards End here */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Content;
