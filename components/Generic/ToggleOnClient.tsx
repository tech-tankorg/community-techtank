"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface Props {
  children: ReactNode;
}

const ToggleOnClient = ({ children }: Props) => {
  const pathname = usePathname();
  return <>{!pathname.startsWith("/studio") && children}</>;
};

export default ToggleOnClient;
