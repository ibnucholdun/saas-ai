"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import FreeCounter from "./FreeCounter";

type Props = {
  apiLimitCount: number;
  isPro?: boolean;
};

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar: React.FC<Props> = ({ apiLimitCount = 0, isPro = false }) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-white bg-[#111827]">
      <div className="px-3 py-2 flex-1 w-full">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image src="/logo.png" alt="logo" fill />
          </div>
          <h1 className={cn(montserrat.className, "text-2xl font-bold")}>
            Genius
          </h1>
        </Link>
        <div className="space-y-1 w-full">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400",
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
              )}>
              <div className="flex items-center flex-1">
                <route.icon className={cn(route.color, "w-5 h-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
};

export default Sidebar;
