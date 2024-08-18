import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import "./assets/styles/index.scss";
import "./assets/styles/responsive.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
