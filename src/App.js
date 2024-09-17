import React from "react";
import Dropdown from "./component/filter";
import Dashboard from "./component/Dashboard";
import { BrowserRouter, Routes,Route } from "react-router-dom";



function App() {

  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/filter" element={<Dropdown/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
