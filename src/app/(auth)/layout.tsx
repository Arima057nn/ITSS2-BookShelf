import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookShelf",
  description: "Generated by BookShelf",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('/assets/images/bg.png')] h-screen bg-cover">
      <div className="flex w-full h-full justify-center items-center">
        {children}
      </div>
    </div>
  );
}
