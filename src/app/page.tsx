import NextImage from "next/image";
import { ImagesSliderDemo as CustomHome } from "@/components/home";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function HomePage() {
  return (
    

<div className="pt-2">

    <LoginLink className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</LoginLink>
        <RegisterLink className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign up</RegisterLink>
        </div>
  );
}
