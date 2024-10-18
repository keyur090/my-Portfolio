import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Projects from "./components/Projects";
import Education from "./components/Testimonial";
import Certificates from "./components/Servicess";

function App() {
  return (
    <>
     <ToastContainer />
     <Navbar />
     <Header />
     <About />
     <Education />
     <Skills />
     <Projects/>
     <Certificates/>
     <Contact />
     <Footer />
    </>
  );
}

export default App;
