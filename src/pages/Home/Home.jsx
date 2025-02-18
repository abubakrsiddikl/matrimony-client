import Banner from "../Banner/Banner";
import BannerPremiumCards from "../BannerPremiumCard/BannerPremiumCards";
import FAQSection from "../Faq/Faqs";
import HowItsWorks from "../HowItsWorks/HowItsWorks";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerPremiumCards></BannerPremiumCards>
      <HowItsWorks></HowItsWorks>
      <SuccessCounter></SuccessCounter>
      <SuccessStory></SuccessStory>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
