import Awards from "./Awards";
import Affordable from "./Components/HomeCompo/Affordable";
import BrandLogo from "./Components/HomeCompo/BrandLogo";
import Discover from "./Components/HomeCompo/Discover";
import Fotter from "./Components/HomeCompo/fotter/Fotter";
import Homecompo from "./Components/HomeCompo/Homecompo";
import Injoy from "./Components/HomeCompo/Injoy";
import InjoyText from "./Components/HomeCompo/InjoyText";
import Lates from "./Components/HomeCompo/latest/Lates";
import Lovly from "./Components/HomeCompo/Lovly";
import Ready from "./Components/HomeCompo/ready/Ready";


export default function Home() {
  return (
    <>
    <Homecompo/>
    <BrandLogo/>
    <Injoy/>
    <InjoyText/>
    <Awards/>
    <Discover/>
    {/* I showed laziness */}
    <Lovly/> 
    <Affordable/>
    <Ready/>
    <Lates/>
    <Fotter/>
    {/* I showed laziness */}

    </>
  );
}
