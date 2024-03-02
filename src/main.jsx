import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/AirplaneApp/App";
import { PlayProvider } from "./contexts/Play";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlayProvider>
      <App />
    </PlayProvider>
  </React.StrictMode>
);
