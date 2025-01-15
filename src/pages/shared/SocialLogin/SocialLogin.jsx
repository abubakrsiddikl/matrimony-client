import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();
  const handleGoogleSignIn = async () => {
    const result = await signInWithGoogle();
    toast.success("You are logged in !");
    navigate("/");
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="bg-black text-white px-5 py-3 w-full rounded-lg font-semibold mt-4 flex justify-center items-center gap-3 "
      >
        Login With Google <FcGoogle className="text-2xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
