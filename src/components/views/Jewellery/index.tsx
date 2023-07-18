import { brandFJ } from "@/components/assets";
import Image from "next/image";

const Jewellery = () => {
  const btntxt = "";
  return (
    <div className="px-1 py-16">
      <div className="text-[2.7rem] lg:text-5xl flex justify-start lg:justify-end font-bold text-primaryText">
        <h6 className="max-w-lg leading-[3.5rem] tracking-wide">
          Unique and Authentic Vintage Designer Jewellery
        </h6>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-10 mt-10">
        <div className="relative basis-1/2 gap-10 grid grid-cols-2 grid-rows-2">
          <div className="absolute inset-0 -z-10">
            <h6 className="text-[4rem] sm:text-[6.5rem] lg:text-[7.3rem] leading-[7.4rem] lg:leading-[5.9rem] text-feature_bg font-bold ">
              Different from others
            </h6>
          </div>
          <div className="lg:max-w-[13rem] space-y-2">
            <h6 className="font-semibold text-primaryText text-lg  md:text-xl leading-5">
              Using Good Quality Materials
            </h6>
            <p className="text-base md:text-lg leading-5 text-primaryText">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="lg:max-w-[13rem] space-y-2">
            <h6 className="font-semibold text-primaryText  text-lg  md:text-xl leading-5">
              100% Handmade Products
            </h6>
            <p className="text-base md:text-lg leading-5  text-primaryText">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="lg:max-w-[13rem] space-y-2">
            <h6 className="font-semibold text-primaryText text-lg  md:text-xl leading-5">
              Modern Fashion Design
            </h6>
            <p className="text-base md:text-lg leading-5 text-primaryText">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="lg:max-w-[13rem] space-y-2">
            <h6 className="font-semibold text-primaryText text-lg  md:text-xl leading-5">
              Discount for Bulk Orders
            </h6>
            <p className="text-base md:text-lg leading-5 text-primaryText ">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row gap-10  basis-1/2">
          <div className="w-full px-4 lg:px-0 lg:w-72">
            <Image
              width={1000}
              height={1000}
              src={brandFJ}
              alt="Feature Jewellery"
            ></Image>
          </div>
          <div className="md:space-y-0 space-y-8">
            <p className="text-[1rem] md:text-lg md:max-w-[15rem] leading-[1.7rem] text-justify  text-primaryText h-[80%] ">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className="text-sm md:text-lg px-4 py-2 font-semibold flex items-center bg-primaryText text-white border-t-2 border-t-gray-600 border-l-2 border-l-gray-600 border-b-2 border-b-black border-r-2 border-r-black">
              See All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jewellery;
