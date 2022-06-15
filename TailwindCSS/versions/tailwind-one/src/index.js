import React from "react";
import OurRotes from "./routes.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <OurRotes />
  </StrictMode>
);
