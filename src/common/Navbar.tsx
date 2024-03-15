import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-page py-3 flex gap-x-3">
      <Link to="/" className="text-[4vw] flex gap-x-5 items-center">
        <img src="/images/ICON-hd.webp" className="h-[1.5em]" />
        <h1 className="">$ETHALIK</h1>
      </Link>

      <figure role="separator" className="flex-1" />

      <div className="flex text-[2vw] gap-x-[5vw]">
        <button>how to buy</button>
        <button className="bg-foreground px-[5vw] rounded-xl duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1">
          BUY
        </button>
      </div>
    </nav>
  );
}
