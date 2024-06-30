import "../src/App.css";
import { useState } from "react";
//import Appgg from './test'
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar2 from "./components/Navbar2/Navbar2";
import CarouselComponent from "./components/Navbar2/Carousel";
import { ContainerTable } from "./components/Navbar2/Navbar2.styled";
import Produse from "./components/Produse/Produse";
import ProdusPage from "./components/Produs/ProdusPage";
import Promo from "./components/Promotii/Promotii";
import Trend from "./components/Trend/Trend";
import Noutati from "./components/Noutati/Noutati";
import { cartReducer, initialStateCart } from "./store/reducer";
import { useReducer, useEffect } from "react";
import { CartContext } from "./store/context";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import CartPage from "./components/CartPage/CartPage";
import FavPage from "./components/CartPage/FavPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Reteta from "./components/Reteta/Reteta";
import FaraReteta from "./components/Reteta/FaraReteta";
import DermatoCosm from "./components/ProduseDropdown/DermatoCosm";
import DietaWellness from "./components/ProduseDropdown/DietaWellness";
import DispozMed from "./components/ProduseDropdown/DispozMed";
import IngrijPers from "./components/ProduseDropdown/IngrijPers";
import ViataSex from "./components/ProduseDropdown/ViataSex";
import VitSupliment from "./components/ProduseDropdown/VitSupliment";
function App() {
  const [stateGlobalCart, dispatchCart] = useReducer(
    cartReducer,
    initialStateCart
  );

  const cartContextValue = {
    stateGlobalCart,
    dispatchCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/produse" element={<Produse />} />
        <Route path="/produs/:id" element={<ProdusPage />} />
        <Route path="/promotii" element={<Promo />} />
        <Route path="/trend" element={<Trend />} />
        <Route path="/noutati" element={<Noutati />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorite" element={<FavPage />} />
        <Route path="/reteta" element={<Reteta />} />
        <Route path="/farareteta" element={<FaraReteta />} />
        <Route path="/dermatocosm" element={<DermatoCosm />} />
        <Route path="/dietawellness" element={<DietaWellness />} />
        <Route path="/dispozmed" element={<DispozMed />} />
        <Route path="/ingrijpers" element={<IngrijPers />} />
        <Route path="/viatasex" element={<ViataSex />} />
        <Route path="/vitsupliment" element={<VitSupliment />} />
      </Routes>
      <Newsletter />
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
