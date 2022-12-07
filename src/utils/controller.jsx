import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../app/pages/home/home-page";
import SignInPage from "../app/pages/sign-in/sign-in-page";
import SignUpPage from "../app/pages/sign-up/sign-up-page";
import SignInPage from "../app/pages/sign-in/sign-in-page";

export const Controller = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/sign-in"} element={<SignInPage />} />
        <Route path={"/sign-up"} element={<SignUpPage />} />
        <Route path={"/sign-in"} element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};
