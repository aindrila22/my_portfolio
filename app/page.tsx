"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

export default function Home() {
  const Navbar = dynamic(() => import("@/components/Navbar"));
  const Intro = dynamic(() => import("@/components/Intro"));
  return (
    <main>
      <Navbar />
      <Intro/>
      <>

      {/* add id to section */}
      <section
        className="grid place-content-center min-h-screen bg-gray-100"
        id="about"
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2">Section 1</h2>
          <Link className="btn" href="#about">
            Back to Top
          </Link>
        </div>
      </section>
    </>
    </main>
  );
}
