import Image from "next/image";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Suscribe from "./Components/Suscribe";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Herotwo from "./Components/Herotwo"

export default function Home() {
  return (
    
    <div>
      <Navbar/>
      <Herotwo/>
      
      <Card/>
      <Suscribe/>
      <Footer/>
    </div>
  
  );
}
