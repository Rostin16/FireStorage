import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./Components/AuthPage";
import Home from "./Components/HomePage";
import AddUser from "./Components/AddUser"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              My FireStore
            </a>
      
            <div class="collapse navbar-collapse">
  <ul class="navbar-nav ms-auto">
    <li class="nav-item">
      <a class="nav-link btn btn-primary text-success px-4 py-2 rounded-3 shadow-sm" href="/" role="button">
        Log In
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link btn btn-success text-success px-4 py-2 rounded-3 shadow-sm" href="/home" role="button">
        Home
      </a>
    </li>
  </ul>
</div>

          </div>
        </nav>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
