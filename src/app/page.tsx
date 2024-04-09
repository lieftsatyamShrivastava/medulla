import { ImagesSliderDemo as CustomHome } from "@/components/home";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import AuthImage from "@/images/auth.png";
export default function HomePage() {
  return (
    <div className="w-screen h-screen bg-gray-50 flex flex-row items-center justify-center p-4 text-slate-900">
      <div className="w-1/2 h-full hidden xl:block">
        <Image alt="Authentication Image" src={AuthImage} width={1920} height={1080} />
      </div>
      <div className="gap-8 w-full sm:w-8/12 xl:w-3/12 flex flex-col items-center justify-center border-2 border-gray-700 bg-gray-50 px-2 py-8 sm:px-6 rounded-xl">
        <h5 className="text-6xl font-semibold w-full text-center">Medulla</h5>
        <div className="w-1/2 h-full block xl:hidden">
        <Image alt="Authentication Image" src={AuthImage} width={1920} height={1080} />
      </div>
        <p className="w-full text-lg text-center">One stop solution for all your emergencies!! :)</p>
        <LoginLink className="w-full bg-gray-800 px-8 py-4 rounded-xl text-white font-semibold text-center text-lg hover:text-slate-800 hover:bg-green-50 transition-all duration-150 ease-in-out focus:text-slate-800 focus:bg-green-50 border-2 border-white hover:border-green-500 focus:border-green-500 outline-none">
          Sign In
        </LoginLink>
        <RegisterLink className="w-full bg-gray-800 px-8 py-4 rounded-xl text-white font-semibold text-center text-lg hover:text-slate-800 hover:bg-blue-50 transition-all duration-150 ease-in-out focus:text-slate-800 focus:bg-blue-50 border-2 border-white hover:border-blue-500 focus:border-blue-500 outline-none">
          Sign up
        </RegisterLink>
      </div>
    </div>
  );
}
