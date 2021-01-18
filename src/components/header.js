import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  site ? null : null;
  // const [isExpanded, toggleExpansion] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // window.scrollY >= 120 ? setNavbar(true) : setNavbar(false);
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      className={`ease-in-out sticky top-0 z-50 fade-in relative
        ${navbar ? "bg-gray-500 " : "bg-opacity-0  "}`}
    >
      <div className="px-4 flex flex-wrap items-center justify-between max-full py-6 mx-auto max-w-7xl">
        <Link to="/">
          <h1 className="flex items-center text-black no-underline">
            <img
              className="h-8 w-30"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png"
            />
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
