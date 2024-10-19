import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { YoutubeProvider } from "./context/ContextAPI.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <YoutubeProvider>
      <App />
    </YoutubeProvider>
  </StrictMode>
);
