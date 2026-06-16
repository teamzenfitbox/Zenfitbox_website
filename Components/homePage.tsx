
import { About } from "./About/about";
import BannerSection from "./Banner/BannerSection";
import { Marquee } from "./Comman/Marquee";
import Contact from "./Contact/Contact";





import { FAQ } from "./FAQ/FAQ";

import { Hero } from "./Home/Hero";
import { Services } from "./Service/Services";
import { WhyChooseUs } from "./WhyChooseUs/WhyChooseUs";


export default function HomePage(){
    return(
        <>
        <Hero/>
        <Marquee/>
        <About/>
        <Services/>
        <BannerSection/>
        <WhyChooseUs/>
        <FAQ/>
        <Contact/>
        
        </>
    )
}