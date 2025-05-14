"use client";

import { usePathname } from "next/navigation";

export default function CareerLayout({ children }) {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return <div>{children}</div>;
}
