import "./styles/App.css";
import "normalize.css";
import "./styles/green.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StaticNavBar from "./views/static/StaticNavBar";
import SideBar from "./views/static/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/pages/Home";
import Page1 from "./views/pages/Page1";
import Page2 from "./views/pages/Page2";
import Blank from "./views/pages/Blank";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <StaticNavBar />
          <div className="wrapper">
            <SideBar />
            <div className="p-5">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Page1" element={<Page1 />} />
                <Route path="/Page2" element={<Page2 />} />
                <Route path="/Blank" element={<Blank />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
