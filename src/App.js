import React, { useState } from 'react';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.scss";
import Main from './comp/main';
import Item1 from './comp/item1';
import Item2 from './comp/item2';
import Item3 from './comp/item3';
import Footer from './comp/footer';



const App = () => {
  

  return (<>
    <Router>
    <Routes>
          
           
    <Route path="/" element={<  Main/>} />
    <Route path="/item1" element={<  Item1/>} />
    <Route path="/item2" element={<  Item2/>} />
    <Route path="/item3" element={<  Item3/>} />
   
  </Routes>
</Router>
<Footer/>
</>
  );
};

export default App;
