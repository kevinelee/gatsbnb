import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import Footer from "./Footer";
import AboutFooter from "./AboutFooter";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />
      <div className="mx-auto">{children}</div>
      <AboutFooter />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
