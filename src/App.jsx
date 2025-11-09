import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactForm from "./components/ContactForm";
import OtherSection from "./components/OtherSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Navbar/Header */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <AboutSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Other Section - Testimonials */}
      <OtherSection />
      {/* Contact Section */}
      <section className="py-5" id="contact">
        <div className="container">
          <h2 className="mb-4">Contact Us</h2>
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <div className="border p-4 rounded shadow-sm bg-white">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
