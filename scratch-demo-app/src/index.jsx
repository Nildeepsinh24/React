import React, {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import Calcapp from "./Calcapp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Calcapp />
  </StrictMode>
);