import Image from "next/image";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Promotion from "../../components/Promotion";
import Categories from "../../components/Categories";
import BestSelling from "../../components/BestSelling";
import LimitedOfferModal from "../../components/LimitedOffer";
import FeaturedProduct from "../../components/FeaturedProduct";
 
 

export default function Home() {
  return  (
  <div>
    <Hero/>
    <FeaturedProduct/>
    <Services/>
    <Promotion/>
    <Categories/>
    <BestSelling/>
    <LimitedOfferModal/>
  </div>
  )
}