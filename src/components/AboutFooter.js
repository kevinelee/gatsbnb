/* eslint react/prop-types: 0 */
import React from "react";

function ListItem({ name }) {
  return (
    <li>
      <a
        href="#"
        className="text-base text-black border-b border-transparent hover:border-black"
      >
        {name}
      </a>
    </li>
  );
}

const about = [
  "How Airbnb works",
  "Newsroom",
  "Investors",
  "Airbnb Plus",
  "Airbnb Luxe",
  "Hotel Tonight",
  "Airbnb for Work",
  "Olympics",
  "Careers",
];

const host = [
  "Host your home",
  "Host an Online Experience",
  "Host an Experience",
  "Responsible hosting",
  "Resource Centre",
  "Community Centre",
];

const community = [
  "Diversity & Belonging",
  "Accessibility",
  "Airbnb Associates",
  "Frontline Stays",
  "Invite friends",
  "Airbnb.org",
];

const support = [
  "Our COVID-19 Response",
  "Help Centre",
  "Cancellation options",
  "Neighbourhood Support",
  "Trust & Safety",
];

export default function AboutFooter() {
  return (
    <footer className="bg-gray-100 px-4" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 lg:py-16 ">
        <div className="pb-8 xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold text-black tracking-wider uppercase">
                  ABOUT
                </h3>
                <ul className="mt-4 space-y-4">
                  {about.map((item) => {
                    return <ListItem key={item} name={item} />;
                  })}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold text-black tracking-wider uppercase">
                  COMMUNITY
                </h3>
                <ul className="mt-4 space-y-4">
                  {community.map((item) => {
                    return <ListItem key={item} name={item} />;
                  })}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold text-black tracking-wider uppercase">
                  HOST
                </h3>
                <ul className="mt-4 space-y-4">
                  {host.map((item) => {
                    return <ListItem key={item} name={item} />;
                  })}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold text-black tracking-wider uppercase">
                  SUPPORT
                </h3>
                <ul className="mt-4 space-y-4">
                  {support.map((item) => {
                    return <ListItem key={item} name={item} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
