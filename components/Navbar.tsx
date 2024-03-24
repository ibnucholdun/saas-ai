import React from "react";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";
import { getApiLimitCount } from "@/lib/api-limit";

type Props = {
  apiLimitCount?: number;
};

const Navbar = async (props: Props) => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
