"use client";
import React from "react";

import { IconContext as IC } from "react-icons";
import { ReactNode } from "react";

interface Props {
  className: string;
  children: ReactNode;
}
const IconContext = ({ className, children }: Props) => {
  return <IC.Provider value={{ className }}>{children}</IC.Provider>;
};

export default IconContext;
