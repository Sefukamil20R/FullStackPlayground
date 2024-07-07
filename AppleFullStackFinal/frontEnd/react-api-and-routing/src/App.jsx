import React from "react";
import "./CommonResources/css/bootstrap.css";
import "./CommonResources/css/styles.css";
import './App.css';

import { Route, Routes, Navigate } from "react-router-dom";

// pages
import MainBody from './AppleFuncComponents/MainBody/MainBody';
import Mac from './Pages/Mac/Mac';


import Iphone from "./Pages/Iphone/Iphone";
import Ipad from './Pages/Ipad/Ipad';
import Watch from './Pages/Watch/Watch';
import Tv from './Pages/Tv/Tv';
import Music from './Pages/Music/Music';
import Support from './Pages/Support/Support';
import Cart from './Pages/Cart/Cart';
import Four04 from './Pages/Four04/Four04';
import Search from "./Pages/Search/Search";


// Product page

import SingleProductPage from "./Pages/Productpage/SingleProductPage";
// Shared Page
import SharedLayout from "./Pages/SharedLayout/SharedLayout";




function App() {
    return (
    
    <>
     
   <Routes>
      <Route path="/" element={< SharedLayout />} >

      <Route index element={<Navigate to="/home" />} />
      <Route path="/home"  element={<MainBody />} />


 <Route path="/mac" element={<Mac />} />
  <Route path="/iphone" element={   <Iphone /> } /> 
    <Route path="/iphone/:productID" element={<SingleProductPage />} />  


    <Route path="/ipad" element={    <Ipad />} />
    <Route path="/watch" element={<Watch />} />
    <Route path="/tv" element={<Tv/>} />
    <Route path="/music" element={<Music />} />
    
    <Route path="/support" element={<Support />} />
    <Route path="/search" element={<Search/>} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/*" element={<Four04 />} />

 </Route>
    </Routes>            
    </>
    
  );
}
export default App;
