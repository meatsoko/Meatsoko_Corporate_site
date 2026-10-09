import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalHeader } from './layouts/GlobalHeader';
import { GlobalFooter } from './layouts/GlobalFooter';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { ContactUs } from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-white">
        <GlobalHeader />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* We will build these out next */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>

        <GlobalFooter />
      </div>
    </Router>
  );
}

export default App;