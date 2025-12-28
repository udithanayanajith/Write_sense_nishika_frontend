import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const nav = useNavigate();
  return (
    <nav className="w-full bg-gradient-to-r from-orangeSoft to-kidpurple shadow-md p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div
          onClick={() => nav("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="bg-white/60 p-2 rounded-full">🐱</div>
          <h1 className="text-white text-2xl font-bold">WriteSense</h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => nav("/tutorials")}
            className="text-white font-semibold"
          >
            Tutorials
          </button>
          <button
            onClick={() => nav("/quiz")}
            className="bg-white text-orangeSoft px-4 py-2 rounded-full font-bold shadow"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </nav>
  );
}
