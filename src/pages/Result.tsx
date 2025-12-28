import { useLocation, useNavigate } from "react-router-dom";

export default function Results() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        No results found 😅
      </div>
    );
  }

  const { score, total, correctLetters, weakLetters } = state;
  const accuracy = Math.round((score / total) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-200 flex items-center justify-center p-6 overflow-hidden">
      <div className="w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT – Trophy + Score */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-8xl mb-4">🏆</div>
          <h1 className="text-5xl font-extrabold text-purple-600 mb-2">
            Fantastic!
          </h1>
          <p className="text-xl text-gray-600 mb-6">You finished the quiz 🎉</p>

          {/* Circular Accuracy */}
          <div className="relative w-48 h-48 mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center shadow-xl">
              <div className="bg-white w-36 h-36 rounded-full flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold text-green-600">
                  {accuracy}%
                </span>
                <span className="text-sm text-gray-500">Accuracy</span>
              </div>
            </div>
          </div>

          {/* Score */}
          <div className="bg-purple-100 rounded-2xl px-8 py-4 text-2xl font-bold text-purple-700 shadow-md">
            ⭐ Score: {score} / {total}
          </div>
        </div>

        {/* RIGHT – Letters + Actions */}
        <div className="flex flex-col justify-between">
          {/* Letters */}
          <div className="grid grid-cols-2 gap-6">
            {/* Strong */}
            <div className="bg-green-100 rounded-3xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                💚 Strong Letters
              </h3>
              <div className="flex flex-wrap gap-3">
                {correctLetters.length > 0 ? (
                  correctLetters.map((l: string) => (
                    <span
                      key={l}
                      className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-500 text-white text-2xl font-extrabold shadow-md"
                    >
                      {l}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500">Still learning!</p>
                )}
              </div>
            </div>

            {/* Practice */}
            <div className="bg-orange-100 rounded-3xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-700 mb-4">
                💡 Practice More
              </h3>
              <div className="flex flex-wrap gap-3">
                {weakLetters.length > 0 ? (
                  weakLetters.map((l: string) => (
                    <span
                      key={l}
                      className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-400 text-white text-2xl font-extrabold shadow-md"
                    >
                      {l}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500">All perfect! 🌟</p>
                )}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={() => navigate("/quiz")}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-extrabold text-xl shadow-xl hover:scale-105 transition-all"
            >
              🔄 Play Again
            </button>

            <button
              onClick={() => navigate("/")}
              className="px-10 py-4 rounded-full bg-white border-4 border-purple-400 text-purple-600 font-extrabold text-xl shadow-xl hover:scale-105 transition-all"
            >
              🏠 Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
