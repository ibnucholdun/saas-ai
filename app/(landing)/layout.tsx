import React from "react";

type Props = {
  children: React.ReactNode;
};

const LandingLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
