import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function Layout({ children }) {

  return (
    <>
      <div className="px-[3%] md:px-[15%] bg-background">
        <Header key="header" />
          {children}
        <Footer key="footer" />
      </div>
    </>
  );
}

export default Layout;
