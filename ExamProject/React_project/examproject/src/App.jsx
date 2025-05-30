import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import UserLogin from "./Components/UserLogin";
import AdminLogin from "./Components/AdminLogin";
import AddAuthor from "./Components/AddAuthor"; // ✅ Corrected component name

const App = () => {
  return (
    <div>
      <NavbarComponent />
      
      <Routes>
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/addAuthor" element={<AddAuthor />} /> {/* ✅ Fixed casing */}
      </Routes>
    </div>
  );
};

export default App;
