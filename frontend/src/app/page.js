import Image from "next/image";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Suscribe from "./Components/Suscribe";
import Card from "./Components/Card";

export default function Home() {
  return (
    
    <div>
      <Navbar/>
      <Card/>
      <Suscribe/>
      <Footer/>
    </div>
  
  );
}
