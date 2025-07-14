import React, { useEffect, useReact } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppPopup from "../components/PopUp/WhatsAppPopup";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import CallNowButton from "../components/CallNowButton/CallNowButton";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CallNowButton />
      <main className="relative min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppPopup />
    </>
  );
}

export default Layout;
