import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../app/pages/home/home-page";

export const Controller = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
