import { useState } from "react";
import { StickyNavbar } from "./components";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Questions from "./Pages/Questions";
import Essay from "./Pages/Essay";
import PerWeek from "./Pages/PerWeek";
import Outlet from "./Pages/Outlet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <StickyNavbar />
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/essay" element={<Essay />} />
          <Route path="/perWeek" element={<PerWeek />}>
            <Route path=":id" element={<PerWeek />} />
          </Route>
          <Route path="*" element={<Outlet />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
