import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Genius - Code Generation",
};

const CodeLayout: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default CodeLayout;
