import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Services from "./Services";
import WhyChooseUsPage from "./WhyChoose";
import GalleryPage from "./GalleryPage";
import HowItWorks from "./HowItWorks";

function Home() {
  console.log("render Home Commponent");
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <GalleryPage />
      <HowItWorks />
      <WhyChooseUsPage />
    </div>
  );
}

export default Home;
