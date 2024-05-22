import React from "react";
import ReactDOM from "react-dom";

import Header from "layout/Header"
import Footer from "layout/Footer"
import Recipes from "pages/Recipes";
// import Recipe from "pages/Recipe";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import "./index.scss";

const App = () => (
  <div className="h-screen bg-[#F9F9F9]">
      <Header/>
      <div className="h-screen mt-10 text-3xl mx-auto max-w-6xl">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Recipes/>}></Route>
            {/* <Route path='/recipes/:slug' element={<Recipe/>}></Route>  */}
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
