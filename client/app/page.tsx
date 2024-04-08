import Nav from "./components/nav";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import AboutMe from "./components/about";
import SkillsAndExperience from "./components/skills";
import RecentProject from "./components/recent-project";
import ContactCallToAction from "./components/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <SkillsAndExperience />
      <RecentProject />  
      <ContactCallToAction />
    </>
  );
}
