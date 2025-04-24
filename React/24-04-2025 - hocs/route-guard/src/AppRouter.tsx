import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.page";
import LoginPage from "./pages/Login.page";
import LoggedIn from "./pages/LoggedIn";
import RouteGuard from "./components/RouteGuard";

const Approuter = () => {
  const isLoggedIn = localStorage.getItem("token") || null;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/logged-in"
          element={
            <RouteGuard isLoggedIn={isLoggedIn !== null}>
              <LoggedIn />
            </RouteGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
