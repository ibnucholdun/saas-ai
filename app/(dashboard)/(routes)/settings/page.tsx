import Heading from "@/components/Heading";
import SubcriptionButton from "@/components/SubcriptionButton";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const isPro = await checkSubscription();
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings"
        icon={Settings}
        iconColor="text-gray-500"
        bgColor="bg-gray-500/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a pro plan"
            : "You are currently on a free plan"}
        </div>
        <SubcriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default page;
