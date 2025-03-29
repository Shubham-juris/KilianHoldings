import Herosection from '../Components/Herosection/Herosection';
import AboutSection from '../Components/AboutSection/AboutSection';
import WelcomeSection from '../Components/WelcomeSection/WelcomeSection';
import Disclaimer from '../Components/Disclaimer/Disclaimer';
import FAQDropdown from '../Components/fAskedQuestion/FAQDropdown';

export default function Home() {
  return (
    <>
      <Herosection />
      <WelcomeSection />
      <AboutSection />
      <Disclaimer />
      <FAQDropdown />
    </>
  );
}
