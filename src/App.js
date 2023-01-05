import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';
import Services from './components/pages/Services';
import { SignupForm } from './components/accountBox/signupForm';
import { LoginForm } from './components/accountBox/loginForm';
import './App.css'





function App() {
   
  return (
    <>
    <Router>
        <Navbar />

        <Routes>
         

        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signupform' element={<SignupForm />} />
        <Route path='/loginform' element={<LoginForm />} />
       

        </Routes>
    </Router>
      </>
     
  );
}
export default App;
