import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../app/pages/home/home-page";
import SignInPage from "../app/pages/sign-in/sign-in-page";

export const Controller = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/sign-in"} element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};
