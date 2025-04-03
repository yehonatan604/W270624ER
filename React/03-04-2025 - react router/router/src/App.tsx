import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.page";
import About from "./pages/About.page";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Define your routes here */
        /* The path prop defines the URL path for the route */
        /* The element prop defines the component to render when the route matches */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
