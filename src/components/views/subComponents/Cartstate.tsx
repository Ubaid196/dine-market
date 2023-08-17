import { contextVal } from "@/global/Context";
import { useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";

const Cartstate = () => {
  let data = localStorage.getItem("cart") as string;

  return (
    <div className="flex-shrink-0 relative w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center">
      <div className="absolute top-1 right-2  bg-[#F02D34] text-xs text-white font-light rounded-full w-4 h-4 flex justify-center items-center">
        {JSON.parse(data).length}
      </div>
      <CgShoppingCart size={24} />
    </div>
  );
};

export default Cartstate;
