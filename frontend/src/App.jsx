import axios from "axios";
import React, { useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import { UserContextProvider } from "../context/userContext";


// User app pages

import LandingPage from './pages/LandingPage';


// axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      window.location.reload();
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <UserContextProvider>
          
          <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </UserContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;