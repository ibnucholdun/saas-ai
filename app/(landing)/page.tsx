import LandingContent from "@/components/LandingContent";
import LandingFooter from "@/components/LandingFooter";
import LandingHero from "@/components/LandingHero";
import LandingNavbar from "@/components/LandingNavbar";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Genius - Home",
};
const LandingPage = (props: Props) => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
