"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import SideNavbar from "./SideNavbar";

const HeaderBottom = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="bg-amazonLight text-white/80">
      <div className="flex items-center space-x-3 py-1 pl-6 text-sm">
        <button className="link flex items-center" onClick={toggleSidebar}>
          <Menu className="text-xl mr-1" />
          All
        </button>

        <Link href="/products" className="link">
          All Products
        </Link>
      </div>
      <SideNavbar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default HeaderBottom;
