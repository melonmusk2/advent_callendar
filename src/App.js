import React from 'react';
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
import Item7 from './comp/item7';
import Item8 from './comp/item8';
import Item9 from './comp/item9';
import Item10 from './comp/item10';
import Item11 from './comp/item11';
import Item12 from './comp/item12';
import Item13 from './comp/item13';
import Item14 from './comp/item14';
import Item15 from './comp/item15';
import Item16 from './comp/item16';
import Item17 from './comp/item17';
import Item18 from './comp/item18';
import Item19 from './comp/item19';
import Item20 from './comp/item20';
import Item21 from './comp/item21';
import Item22 from './comp/item22';
import Item23 from './comp/item23';



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
    <Route path="/item7" element={<  Item7/>} />
    <Route path="/item8" element={<Item8 />} />
    <Route path="/item9" element={<Item9 />} />
    <Route path="/item10" element={<Item10 />} />
    <Route path="/item11" element={<Item11 />} />
    <Route path="/item12" element={<Item12 />} />
    <Route path="/item13" element={<Item13 />} />
    <Route path="/item14" element={<Item14 />} />
    <Route path="/item15" element={<Item15 />} />
    <Route path="/item16" element={<Item16 />} />
    <Route path="/item17" element={<Item17 />} />
    <Route path="/item18" element={<Item18 />} />
    <Route path="/item19" element={<Item19 />} />
    <Route path="/item20" element={<Item20 />} />
    <Route path="/item21" element={<Item21 />} />
    <Route path="/item22" element={<Item22 />} />
    <Route path="/item23" element={<Item23 />} />
   
  </Routes>
</Router>
<Footer/>
    <Analytics />
</>
  );
};

export default App;
