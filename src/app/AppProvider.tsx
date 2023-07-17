import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../store/contexts/theme/ThemeProvider";

// CHANGE TO DECLARATION IMPORT @Styles
import "../styles/index.scss";
import { FC } from "react";
import { App } from "../App";

export const AppProvider: FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};
