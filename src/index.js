import React from "react";
import ReactDOM from "react-dom/client";
import "./client/scss/index.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from './client/pages/ProfilePage'
import HomePage from './client/pages/HomePage'

import './client/scss/customBootstrap.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);
