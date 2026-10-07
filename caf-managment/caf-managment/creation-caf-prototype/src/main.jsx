import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/league-spartan/700.css";
import "@fontsource/league-spartan/800.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import { App } from "./App.jsx";
import "./styles.css";
import "./english.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
