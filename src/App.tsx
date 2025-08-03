// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/Contact.jsx";
import PricingComponent from './pages/Pricing.jsx'
import Feature from "./pages/Features.jsx";
import Login from './pages/Login.jsx'
import FAQSection from './pages/Faq.jsx'
import BlogSection from './pages/BlogSection.jsx'
import Testimonials from './components/Testimonials.js'


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Feature />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pricing" element={<PricingComponent />} />
            <Route path="/faq" element={<FAQSection />} />
            <Route path="/Blog" element={<BlogSection />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
