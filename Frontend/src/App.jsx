import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ExploreSection from './components/Explore';
import Footer from './components/Footer';
import LoginModal from './components/Login';
import SignUpModal from './components/Signup';
import HowItWorks from './components/how-it-works';
import MarketPage from './components/Markets';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  // Functions to open/close modals
  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);
  const openSignUpModal = () => {
    setShowLoginModal(false); // Make sure to close login modal when sign-up is opened
    setShowSignUpModal(true);
  };
  const closeSignUpModal = () => setShowSignUpModal(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Header openLoginModal={openLoginModal} />
                <Hero />
                <ExploreSection />
                
              </>
            } 
          />
          <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/markets" element= {<MarketPage />} />

        </Routes>
        <Footer />
        
        {/* Conditionally Render the Modals */}
        {showLoginModal && (
          <LoginModal closeModal={closeLoginModal} openSignUpModal={openSignUpModal} />
        )}
        {showSignUpModal && (
          <SignUpModal closeModal={closeSignUpModal} />
        )}
      </div>
    </Router>
  );
}

export default App;
