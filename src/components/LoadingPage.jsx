import Lottie from "lottie-react";
import loaderJson from "../constants/loader.json";

const LoadingPage = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <Lottie animationData={loaderJson} loop={true} />
  </div>
);

export default LoadingPage;
