import React from "react";
import "./App.css";

import {Routes, Route, HashRouter } from "react-router-dom";
import Home from "./component/HomeData/Home";
import About from "./component/AboutData/About";
import Contact from "./component/ContactData/Contact";
import Cowbred from "./component/Cowbreed/Cowbred";
import Product from "./component/product/Product";
import Account from "./component/account/Account";
import WeCare from "./component/wecare/WeCare";
// import Header from "./component/Navbar/Header";
 import MobileViw from "./component/mobileview/MobileViw";
function App() {
  return (
   
      <HashRouter>
    <MobileViw/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cowbreeds" element={<Cowbred />} />
          <Route path="product" element={<Product />} />

          {/* <Route path="knowmilk" element={<knowmilk/>} /> */}
          <Route path="account" element={<Account />} />

          <Route path="wecare" element={<WeCare />} />

        
        </Routes>
      </HashRouter>
   
  );
}

export default App;
