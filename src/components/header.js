import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

function Header() {
  // const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  if (!site) {
    return null;
  }

  return (
    <header className="bg-opacity-0 z-50 shadow">
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
