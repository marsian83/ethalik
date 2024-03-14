import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const timer = useRef<NodeJS.Timeout>();

  const [tumblers, setTumblers] = useState([<Tumbler />]);

  useEffect(() => {
    if (!timer.current)
      timer.current = setInterval(() => {
        if (tumblers.length > 200) setTumblers([]);

        setTumblers((p) => [...p, <Tumbler />]);
      }, 1000);
  }, []);

  return (
    <section className="h-screen flex justify-between p-page relative overflow-hidden">
      <div className="flex flex-col gap-y-10 items-center justify-center">
        <h1 className="text-7xl">Vutaleek Beetrootin</h1>
        <p className="text-center text-2xl">
          I'M $PENGIE
          <br /> Everyone knows me as PENG's wife
        </p>
      </div>
      <div className="">
        <img src="/images/vitalik-self-hd.png" className="h-full py-[3vh]" />
      </div>

      <div className="absolute-cover -z-1">{tumblers}</div>
    </section>
  );
}

function Tumbler() {
  const array = [
    "/images/tumblers/write-vitalik.png",
    "/images/tumblers/VITALIK-note-eyeless.jpg",
  ];
  const img = array[Math.floor(Math.random() * array.length)];

  const anim = `tumble ${
    1000 + Math.random() * 7000
  }ms infinite linear, absolute-l2r ${3500 + 8500 * Math.random()}ms linear`;

  return (
    <img
      src={img}
      className="absolute"
      style={{
        animation: anim,
        width: `${5 + Math.random() * 10}vw`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
}
