import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const timer = useRef<NodeJS.Timeout>();

  const [tumblers, setTumblers] = useState([<Tumbler />]);

  useEffect(() => {
    if (!timer.current)
      timer.current = setInterval(() => {
        setTumblers((p) => [...p, <Tumbler />]);
      }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    if (tumblers.length > 60) setTumblers([]);
  }, [tumblers]);

  return (
    <section className="h-screen flex justify-between p-page-lg relative overflow-hidden">
      <div className="flex flex-col gap-y-10 items-center justify-center text-center">
        <h1 className="text-7xl">Vutaleek Beetrootin</h1>
        <p className="text-center text-2xl">
          Vutaleek is a valorous sir and that gent shall restore peace and order
          on eth'reum
        </p>
      </div>
      <div className="">
        <img
          src="/images/ICON-hd.png"
          className="h-full object-contain py-[3vh]"
        />
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
