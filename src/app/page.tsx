import AboutComp from '@/components/home/AboutComp';
import './globals.css'

import HeroComp from '@/components/home/HeroComp'
import CategoryComp from '@/components/home/CategoryComp';
// import AfterEventComp from '@/components/home/AfterEventComp';
import ContactComp from '@/components/home/ContactComp';
import LogoComp from '@/components/home/LogoComp';
import FAQComp from '@/components/home/FAQComp';

export default function HomePages() {
  return (
    <>
      <HeroComp></HeroComp>
      <AboutComp></AboutComp>   
      <CategoryComp></CategoryComp>
      {/* <AfterEventComp></AfterEventComp> */}
      <ContactComp></ContactComp>
      <FAQComp></FAQComp>
      <LogoComp></LogoComp>
    </>
  );
}
