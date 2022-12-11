import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AboutUsPage from "../app/pages/about-us/about-us-page";
import HomePage from "../app/pages/home/home-page";
import SignInPage from "../app/pages/sign-in/sign-in-page";
import SignUpPage from "../app/pages/sign-up/sign-up-page";

export const Controller = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/home"} element={<HomePage />} />
        <Route path={"/about"} element={<AboutUsPage />} />
        <Route path={"/sign-in"} element={<SignInPage />} />
        <Route path={"/sign-up"} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
