import { Event1, Event2, Event3 } from "@/components/assets";
import Image from "next/image";

const ProductTypes = () => {
  return (
    <div className="py-20 px-2 space-y-5">
      <div className="text-center space-y-3">
        <p className="text-promotionColor text-sm">PROMOTIONS</p>

        <h3 className="text-primaryText text-3xl font-bold">
          Our Promotions Events
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2">
        <div className="flex flex-col sm:flex-row items-center justify-between col-span-1 md:col-span-2 w-full bg-Cat1 px-12">
          <div className="max-w-[13rem] py-8">
            <h4 className="text-3xl font-bold text-primaryText">
              GET UP TO 60%
            </h4>
            <p className="text-primaryText1 text-xl">For the summer season</p>
          </div>
          <div className="w-64">
            <Image src={Event1} alt="summer season"></Image>
          </div>
        </div>
        <div className="h-full flex flex-col  items-center row-span-1 md:row-span-2 w-full bg-Cat2">
          <div className="p-4">
            <p>Flex Sweatshirt</p>
            <p className="text-lg">
              <del>$100.00</del>
              &nbsp; &nbsp;
              <b>
                <ins className="no-underline">$75.00</ins>
              </b>
            </p>
          </div>
          <div className="w-64">
            <Image src={Event2} alt="sweaters"></Image>
          </div>
        </div>
        <div className="h-full flex flex-col items-center row-span-1 md:row-span-2 w-full bg-Cat3">
          <div className="p-4">
            <p>Flex Push Button Bomber</p>
            <p className="text-lg">
              <del>$225.00</del>
              &nbsp; &nbsp;
              <b>
                <ins className="no-underline">$190.00</ins>
              </b>
            </p>
          </div>
          <div className="w-64">
            <Image src={Event3} alt="sweaters"></Image>
          </div>
        </div>
        <div className="py-9 w-full col-span-1 md:col-span-2 bg-primaryText flex flex-col justify-between items-center text-white space-y-3">
          <h3 className=" font-extrabold text-4xl">GET 30% Off</h3>
          <p>USE PROMO CODE</p>
          <button
            aria-label="redirect user to Dine Weekend Sale"
            className="py-1 px-8 font-semibold bg-DineWkSale rounded-lg tracking-widest"
          >
            DINEWEEKENDSALE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTypes;
