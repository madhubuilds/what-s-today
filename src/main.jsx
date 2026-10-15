import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./styles/animations.css";
import "./styles/aspect.css";
import "./styles/borders.css";
import "./styles/buttons.css";
import "./styles/colors.css";
import "./styles/flex.css";
import "./styles/forms.css";
import "./styles/layout.css";
import "./styles/position.css";
import "./styles/responsive.css";
import "./styles/scrollbars.css";
import "./styles/spacing.css";
import "./styles/typography.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
