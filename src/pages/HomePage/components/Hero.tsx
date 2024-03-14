import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const timer = useRef<NodeJS.Timeout>();

  const [tumblers, setTumblers] = useState<Array<React.ReactNode>>([]);

  useEffect(() => {
    if (!timer.current)
      timer.current = setInterval(() => {
        setTumblers((p) => [...p, <Tumbler />]);
      }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    if (tumblers.length > 60) setTumblers([]);
  }, [tumblers]);

  return (
    <section className="h-screen flex flex-col p-page-lg relative overflow-hidden">
      <div className="flex">
        <div className="flex flex-col gap-y-10 items-center justify-center text-center">
          <h1 className="text-7xl">Vutaleek Beetrootin</h1>
          <p className="text-center text-2xl">
            Vutaleek is a valorous sir and that gent shall restore peace and
            order on eth'reum
          </p>
        </div>
        <div className="">
          <img
            src="/images/ICON-hd.png"
            className="h-full object-contain py-[3vh]"
          />
        </div>

        <div className="absolute-cover -z-1">{tumblers}</div>
      </div>

      <div className="flex font-poppins font-extrabold gap-x-20 items-center text-lg">
        {socials.map((social, key) => (
          <Link
            to={social.link}
            key={key}
            target="_blank"
            className="flex gap-x-4 items-center"
          >
            <div className="h-[4em] rounded-full bg-foreground/80 aspect-square flex justify-center items-center">
              <img
                src={social.image}
                alt={social.title}
                className="h-[1.8em] brightness-0 invert"
              />
            </div>
            <span>{social.title}</span>
          </Link>
        ))}
      </div>
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

const socials = [
  {
    image:
      "https://static-00.iconduck.com/assets.00/telegram-icon-2048x1725-i4kw83ca.png",
    title: "Telegram",
    link: "telegram.com",
  },
  {
    image:
      "https://i.pinimg.com/originals/73/db/02/73db02344af2f927fd361decc424e8b8.png",
    title: "Twitter / X / idk?",
    link: "x.com",
  },
  {
    image: "https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png",
    title: "The Gram",
    link: "instagram.com",
  },
  {
    image: "https://www.dogelonsol.xyz/dexscreener.322a5a2d.png",
    title: "Dexscanner",
    link: "instagram.com",
  },
];
