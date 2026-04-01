import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import SplashScreen from "./components/splashscreen";

import Home from "./pages/home";
import Menu from "./pages/menu";
import Franchise from "./pages/franchise";
import Contact from "./pages/contact";
import LegalPage from "./pages/LegalPage";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500); // sync with splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {showSplash && <SplashScreen />}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
