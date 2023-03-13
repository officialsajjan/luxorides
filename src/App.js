import React from "react";
import {  BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Services from "./pages/Services";
import Brands from "./pages/Brands";
import View from "./pages/View";
import About from "./pages/About";
import Support from "./pages/Support";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Locations from "./pages/Locations";
import More from "./pages/More";
import Footer from "./Footer";
import Header from "./components/Header";
import Forgotpassword from "./pages/Forgotpassword";
import Tearms from "./pages/Terms";
import Agra from "./pages/Agra";
import Jaipur from "./pages/Jaipur";


function App() {
  return (
    <Router>
      <Header>
        
      </Header>
      <Routes>
      <Route path="/" element={<Home />}/>
      
      <Route path="/Categories" element={<Categories />}/>
      <Route path="/Services" element={<Services />}/>
      <Route path="/Signin" element={<Signin />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Agra" element={<Agra />}/>
      <Route path="/Jaipur" element={<Jaipur />}/>
      <Route path="/Forgotpassword" element={<Forgotpassword />}/>
      <Route path="/Brands" element={<Brands />}/>
      <Route path="/View" element={<View />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Locations" element={<Locations />}/>
      <Route path="/Support" element={<Support />}/>
      <Route path="/More" element={<More />}/>
      <Route path="/Terms" element={<Tearms />}/>
      
      </Routes>

      <Footer/>
      
    </Router>
  );
}

export default App;
