import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import SignIn from "./Pages/SignIn/SignIn";
import Profile from "./Pages/Profile/Profile";

function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <>
      {/* <Header isLoggedIn={isLoggedIn} setIsloggedIN={setIsLoggedIn} /> */}
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route
          path="/signin"
          element={<SignIn setIsloggedIN={setIsLoggedIn} />}
        /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
