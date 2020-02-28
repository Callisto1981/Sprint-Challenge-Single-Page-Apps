import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import axios from "axios";

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
    </main>
  );
}
