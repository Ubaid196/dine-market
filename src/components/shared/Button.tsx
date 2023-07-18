import { FC } from "react";

const Button: FC<{ text: string}> = ({ text}) => {
  return (
    <button className="bg-black text-white px-4 py-2 text-base font-semibold ">
      {text}
    </button>
  );
};

export default Button;