import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUsPage from "../app/pages/about-us/about-us-page";
import ProfilePage from "../app/pages/profile/profile-page";
import HomePage from "../app/pages/home/home-page";
import SignInPage from "../app/pages/sign-in/sign-in-page";
import SignUpPage from "../app/pages/sign-up/sign-up-page";
import RecoverPassword from "../app/pages/recover-password/recover-password-page";
import NewPassword from "../app/pages/new-password/new-password-page";

export const Controller = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/about"} element={<AboutUsPage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"/sign-in"} element={<SignInPage />} />
        <Route path={"/sign-up"} element={<SignUpPage />} />
        <Route path={"/recover-password"} element={<RecoverPassword />} />
        <Route path={"/new-password"} element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
};
