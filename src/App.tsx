import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/Main/MainAsync";
import { AboutPageAsync } from "./pages/About/AboutAsync";
import { Suspense } from "react";
import { useTheme } from "./store/contexts/theme/useTheme";
import { getClassNames } from "./utils/helpers/classNames/getClassNames";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={getClassNames("app", [theme], { hover: true })}>
      <Link to={"/"}>Home page</Link>
      <Link to={"/about"}>About page</Link>

      <button onClick={toggleTheme}>Change theme</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
