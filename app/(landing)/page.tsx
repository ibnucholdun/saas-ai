import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div>
      LandingPage
      <div className="">
        <Link href={"/sign-in"}>
          <Button>Login</Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
