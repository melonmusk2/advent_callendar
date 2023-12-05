import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.scss";
import Main from './comp/main';
import Item1 from './comp/item1';
import Item2 from './comp/item2';
import Item3 from './comp/item3';
import Footer from './comp/footer';
import Item4 from './comp/item4';
import Item5 from './comp/item5';
import Item6 from './comp/item6';



const App = () => {
  

  return (<>
    <Router>
    <Routes>
          
           
    <Route path="/" element={<  Main/>} />
    <Route path="/item1" element={<  Item1/>} />
    <Route path="/item2" element={<  Item2/>} />
    <Route path="/item3" element={<  Item3/>} />
    <Route path="/item4" element={<  Item4/>} />
    <Route path="/item5" element={<  Item5/>} />
    <Route path="/item6" element={<  Item6/>} />
   
  </Routes>
</Router>
<Footer/>
    <Analytics />
</>
  );
};

export default App;
