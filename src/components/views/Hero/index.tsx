import {
  brandF1,
  brandF2,
  brandF3,
  brandF4,
  heroPosterImg,
} from "@/components/assets";
import Image from "next/image";
import { CgShoppingCart } from "react-icons/cg";

const Hero = () => {
  const btntext = "Start\n Shopping";
  return (
    <div className="py-5 flex justify-between items-center">
      {/* {right side} */}
      <div className="space-y-6 max-w-sm">
        <button
          aria-label="redirect the user to sale page"
          className="rounded-md bg-salebtnColor1 text-salebtnColor px-6 py-2 font-semibold text-base"
        >
          Sale 70%
        </button>
        <h1 className="text-5xl md:text-5xl text-primaryText font-bold">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-primaryText1 text-xl">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button
          aria-label="redirect user to sale page"
          className="flex gap-1 items-center bg-primaryText text-white border-t-2 border-t-gray-600 border-l-2 border-l-gray-600 border-b-2 border-b-black border-r-2 border-r-black text-lg px-4 py-4 font-semibold"
        >
          <CgShoppingCart size={24} />
          <p className="whitespace-pre leading-5">{btntext}</p>
        </button>
        <div className="flex gap-4">
          <div className="w-14 md:w-28">
            <Image height={100} width={100} src={brandF1} alt="Bazaar"></Image>
          </div>
          <div className="w-14 md:w-28">
            <Image height={100} width={100} src={brandF2} alt="Bustle"></Image>
          </div>
          <div className="w-14 md:w-28">
            <Image height={100} width={100} src={brandF3} alt="Versace"></Image>
          </div>
          <div className="w-14 md:w-28">
            <Image height={100} width={100} src={brandF4} alt="Instyle"></Image>
          </div>
        </div>
      </div>
      {/* left side */}
      <div className="hidden md:flex bg-primaryWhite rounded-full">
        <Image src={heroPosterImg} alt="heroposter"></Image>
      </div>
    </div>
  );
};

export default Hero;
