import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Genius - Dashboard",
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default DashboardLayout;
