import React from "react";
import Header from "../components/Header";
import Routers from "../Route/Routers";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />

      <div className="mb-10 mt-20">
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
