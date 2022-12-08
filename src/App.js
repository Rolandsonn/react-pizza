import "./scss/style.scss";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { Routes, Route, NavLink } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />

      <Routes>
        <Route path="/" element={<HomePage searchValue={searchValue} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
