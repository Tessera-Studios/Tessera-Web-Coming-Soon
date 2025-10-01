import './App.css'
import Home from "./pages/Home.tsx"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from './components/Navbar.tsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,       // default animation duration (ms)
      easing: "ease-in-out", // default easing
      once: true,           // whether animation happens only once
    });
  }, []);


  return (
    <>
        <Navbar />

        <Home/>
    </>

  );
}

export default App
