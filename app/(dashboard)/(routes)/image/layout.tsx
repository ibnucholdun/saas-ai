import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Genius - Code Generation",
};

const ImageLayout: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default ImageLayout;
