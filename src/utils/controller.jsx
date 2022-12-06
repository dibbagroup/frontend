import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../app/pages/home/home-page";
import IntegrationPage from "../app/pages/integration-test/integration-test-page";

export const Controller = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/tests"} element={<IntegrationPage />} />
      </Routes>
    </BrowserRouter>
  );
};
