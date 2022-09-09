import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home.jsx";
import App from "./components/App";
import Portal from "./routes/Portal.jsx";
import Login from "./routes/Login.jsx";
import Result from "./routes/Result.jsx";
import AboutPage from "./routes/about_page/AboutPage.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="portal" element={<Portal />} />
        <Route path="portal/result" element={<Result/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </Router>
);
