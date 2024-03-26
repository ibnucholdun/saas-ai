"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import {
  ArrowRight,
  Check,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  Zap,
} from "lucide-react";
import { useProModal } from "@/hooks/useProModal";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";

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

const ProModal = (props: Props) => {
  const proModal = useProModal();
  const [isLoading, setIsLoading] = useState(false);

  const onSubcribe = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = (await response).data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to Genius
              <Badge className="uppercase text-sm py-1" variant="premium">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className={cn(tool.bgColor, "p-2 w-fit rounded-md")}>
                    <tool.icon className={cn(tool.color, "w-6 h-6")} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onSubcribe}
            disabled={isLoading}
            size={"lg"}
            variant={"premium"}
            className="w-full">
            Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
