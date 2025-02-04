import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Landing from "./Pages/Landing.jsx";
import Features from "./Pages/Features.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Download from "./Pages/Download.jsx";
import Support from "./Pages/Support.jsx";
import Login from "./Pages/Login.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/download" element={<Download />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login_signup" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
