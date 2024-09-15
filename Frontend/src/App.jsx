import React from "react";
import Style from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/loginPage";
import CreateAccountPage from "./Components/createAccount";
import MainPage from "./Components/mainPage";
import ProductsPage from "./NavigationPages/Products";
import MentorsPage from "./NavigationPages/mentors";
import FinancePage from "./NavigationPages/finance";
import BuyersPage from "./NavigationPages/buyers";
import RegisterPage from "./NavigationPages/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/createAccount" element={<CreateAccountPage/>} />
          <Route path="/mainPage" element={<MainPage/>}/>
          <Route path="/productPage" element={<ProductsPage/>}/>
          <Route path="/mentorsPage" element={<MentorsPage/>}/>
          <Route path="/financePage" element={<FinancePage/>}/>
          <Route path="/buyersPage" element={<BuyersPage/>}/>
          <Route path="/registerPage" element={<RegisterPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
