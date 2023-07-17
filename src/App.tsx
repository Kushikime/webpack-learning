import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/Main/MainAsync";
import { AboutPageAsync } from "./pages/About/AboutAsync";
import { Suspense } from "react";

export const App = () => {
  return (
    <BrowserRouter>
      <Link to={"/"}>Home page</Link>
      <Link to={"/about"}>About page</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
