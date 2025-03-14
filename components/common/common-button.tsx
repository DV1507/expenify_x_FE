"use client";
import { LucideIcon, Plus } from "lucide-react";
import { Button } from "../ui/button";

interface ButtonProps {
  label: string;
  Icon?: LucideIcon;
  onClick?: () => void;
}

export default function CommonButton({
  label,
  Icon = Plus,
  onClick,
}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white font-medium rounded-lg shadow-sm hover:bg-gray-800 transition"
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </Button>
  );
}
