import React from "react";
import Cards from "./Cards";
import Loading from "./Loading";

const Content = () => {
  return (
    <>
      <Loading />
      <div>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-orange-300 flex justify-center">
              Confira os pratos do Dia!
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-gray-200 rounded-lg h-96 flex justify-center ">
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
