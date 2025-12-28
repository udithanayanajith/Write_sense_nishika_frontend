import Navbar from "../components/Navbar";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-peach to-white">
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <section className="bg-white rounded-big p-8 shadow-kid-lg">
          <h1 className="text-5xl font-extrabold text-kidpurple text-center">
            Pick the Letter
          </h1>
          <p className="mt-4 text-center text-lg text-gray-600">
            Short, big letters — perfect for tiny hands. Play tutorial or try
            the quiz.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6">
            <PrimaryButton onClick={() => nav("/quiz")}>
              Start Quiz
            </PrimaryButton>
            <button
              onClick={() =>
                alert("Tutorial coming — play videos & practice writing!")
              }
              className="px-6 py-3 rounded-full bg-kidblue text-white font-bold"
            >
              Tutorial
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-kidblue/8 p-6 rounded-xl text-center">
              <h3 className="font-bold text-2xl">For kids 4–7</h3>
              <p className="mt-2 text-sm text-gray-600">
                Big letters, simple choices, fun colors.
              </p>
            </div>
            <div className="bg-kidteal/8 p-6 rounded-xl text-center">
              <h3 className="font-bold text-2xl">10-question quiz</h3>
              <p className="mt-2 text-sm text-gray-600">
                Each question has 3 choices and a big board to write the missing
                letter.
              </p>
            </div>
            <div className="bg-kidpurple/8 p-6 rounded-xl text-center">
              <h3 className="font-bold text-2xl">Reports</h3>
              <p className="mt-2 text-sm text-gray-600">
                Simple progress tracking for parents & teachers.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
