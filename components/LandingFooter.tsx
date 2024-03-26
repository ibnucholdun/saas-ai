"use client";

import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
type Props = {};

const LandingFooter = (props: Props) => {
  return (
    <>
      <hr className="w-full h-2" />
      <h3 className="p-4 text-center text-white">
        Created by Ibnu Choldun &copy; {new Date().getFullYear()}
      </h3>
    </>
  );
};

export default LandingFooter;
