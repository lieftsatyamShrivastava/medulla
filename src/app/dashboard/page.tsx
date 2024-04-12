import NextImage from "next/image";
import { ImagesSliderDemo as CustomHome } from "@/components/home";
import Choose from "@/components/choose";


export default function HomePage() {
  return (
    <main>
      <CustomHome />
      <Choose/>
    </main>
  );
}
