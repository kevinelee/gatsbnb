import React from "react";
import airbnb from "../../images/airbnb bg.png";

export default function Background() {
  return (
    <div className="relative">
      {/* <img className="w-full z-negative absolute" src={airbnb} /> */}
      {/* 
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0">
            <div className="lg:self-center">
              <h2 className="font-extrabold text-black">
                <span className="block text-7xl">Go</span>
                <span className="block text-7xl">Near</span>
              </h2>
              <a
                href="#"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Explore Nearby Stays
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <img className="w-full z-negative absolute" src={airbnb} />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-black sm:text-4xl leading-6">
                  <span className="block text-7xl">Go</span>
                  <span className="block text-7xl">Near</span>
                </h2>

                <a
                  href="/homes"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-black hover:bg-indigo-50"
                >
                  Explore Nearby Stays
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
