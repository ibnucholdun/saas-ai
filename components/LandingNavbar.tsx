"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
type Props = {};

const LandingNavbar = (props: Props) => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href={"/"} className="flex items-center">
        <div className="relative w-8 h-8 mr-4">
          <Image src={"/logo.png"} alt="logo" fill />
        </div>
        <h1
          className={cn(montserrat.className, "text-2xl font-bold text-white")}>
          Genius
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
