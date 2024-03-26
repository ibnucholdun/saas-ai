"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const tools = [
  {
    label: "Converstaion",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-200",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-200",
    href: "/image",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-200",
    href: "/code",
  },
];

const DashboardPage = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl font-bold md:text-4xl text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground text-center font-light text-sm md:text-lg ">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            onClick={() => router.push(tool.href)}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn(tool.bgColor, "p-2 w-fit rounded-md")}>
                <tool.icon className={cn(tool.color, "w-8 h-8")} />
              </div>
              <p className="font-semibold">{tool.label}</p>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
