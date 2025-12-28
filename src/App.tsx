import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Tutorials from "./pages/Tutorials";
import Quiz from "./pages/Quiz";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}
