import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
};

const Heading: React.FC<Props> = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}) => {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
      <div className={cn(bgColor, "p-2 w-fit rounded-md")}>
        <Icon className={cn(iconColor, "w-10 h-10")} />
      </div>
      <div className="">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
