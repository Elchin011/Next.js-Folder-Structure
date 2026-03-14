"use client";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <header className="container mx-auto bg-white border-b px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">
          <Link href="/" className="hover:text-gray-500">Logo</Link>
        </div>
        <nav className="flex gap-6">
          <Link href="/shop" className="hover:text-gray-500">Shop</Link>
          <Link href="/about" className="hover:text-gray-500">About</Link>
          <Link href="/contact" className="hover:text-gray-500">Contact</Link>
        </nav>
      </header>
    </div>
  );
};