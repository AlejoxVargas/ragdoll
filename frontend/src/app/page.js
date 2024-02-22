import Image from "next/image";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Suscribe from "./Components/Suscribe";
import Card from "./Components/Card";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    
    <div>
      <Navbar/>
      <Hero/>
      <Card/>
      <Suscribe/>
      <Footer/>
    </div>
  
  );
}
