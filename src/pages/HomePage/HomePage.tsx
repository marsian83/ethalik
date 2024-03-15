import React from "react";
import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <div className="">
      <Hero />

      <section>
        <video
          autoPlay
          muted
          loop
          controls={false}
          src="/images/angel.mp4"
          className="w-full"
        />
      </section>
    </div>
  );
}
