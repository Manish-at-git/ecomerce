"use client"

import React from "react";
import { Button } from "@nextui-org/react";

type MButtonProps = {
  className?: string;
  title: string;
  click: () => void;
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" | undefined;
  isDisabled?: boolean,
  color: "primary" | "default" | "secondary" | "success" | "warning" | "danger" | undefined
};

const MButton: React.FC<MButtonProps> = ({ className, title, click, variant=undefined, isDisabled, color="primary" }) => {
  return <Button color={color} variant={variant} isDisabled={isDisabled} className={`!px-10 !py-6 font-medium rounded ${className}`}>{title}</Button>;
};

export default MButton;
