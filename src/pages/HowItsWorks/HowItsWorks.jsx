import SectionTitle from "../../components/SectionTitle";
import signUpLogo from "../../assets/signup.png";
import crateProfileLogo from "../../assets/createprofileicon.png";
import seacrhPartnerLogo from "../../assets/searchPartner.png";
import communicationLogo from "../../assets/communicationLogo.png";

const HowItsWorks = () => {
  return (
    <div className="bg-gray-100 pt-10">
      <SectionTitle heading="Find Your Perfect Partner"></SectionTitle>
      <div className=" lg:flex justify-between items-center w-11/12 mx-auto">
        {/* signup */}
        <div className="flex flex-col justify-center items-center">
          <img src={signUpLogo} className="w-20" alt="" />
          <p className="font-semibold text-2xl text-[#5850EC]">Sign Up</p>
        </div>
        {/* create file */}
        <div className="flex flex-col justify-center items-center">
          <img src={crateProfileLogo} className="w-20" alt="" />
          <p className="font-semibold text-2xl text-[#D61F69]">
            Create Your Profile
          </p>
        </div>
        {/* search partner */}
        <div className="flex flex-col justify-center items-center">
          <img src={seacrhPartnerLogo} className="w-20" alt="" />
          <p className="font-semibold text-2xl text-[#5850EC]">
            Search Your Partner
          </p>
        </div>
        {/* communication partner */}
        <div className="flex flex-col justify-center items-center">
          <img src={communicationLogo} className="w-20" alt="" />
          <p className="font-semibold text-2xl text-[#D61F69]">
            Communicate Your Partner
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItsWorks;
