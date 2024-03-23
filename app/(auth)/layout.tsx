import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLAyout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
};

export default AuthLAyout;
