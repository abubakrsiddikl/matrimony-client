import Banner from "../Banner/Banner";
import BannerPremiumCards from "../BannerPremiumCard/BannerPremiumCards";
import HowItsWorks from "../HowItsWorks/HowItsWorks";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerPremiumCards></BannerPremiumCards>
      <HowItsWorks></HowItsWorks>
      <SuccessCounter></SuccessCounter>
      <SuccessStory></SuccessStory>
    </div>
  );
};

export default Home;
