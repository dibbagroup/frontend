import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../app/pages/home/home-page";
import SignUpPage from "../app/pages/sign-up/sign-up-page";

export const Controller = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/sign-up"} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
