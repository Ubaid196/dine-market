import {
  NavbarArray,
  NavbarItemType,
} from "@/components/utils/NavbarArrayAndTypes";
import Link from "next/link";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useState } from "react";
import { FC } from "react";

const Expand: FC<{ item: NavbarItemType }> = ({ item }) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [isTimeout, setTimeOut] = useState<boolean>(false);

  function handleExpand() {
    setExpanded(!isExpanded);
    setTimeout(() => {
      setTimeOut(!isTimeout);
    }, 100);
    setTimeOut(false);
  }

  return (
    <li className={`${isExpanded ? "h-48" : "h-12"} duration-300  list-none  `}>
      <div
        onClick={handleExpand}
        className="py-2 px-3 flex items-center hover:bg-purple-600 rounded-md duration-300 justify-between"
      >
        <Link href={item.href}>{item.label}</Link>
        {item.IsdropDown ? (
          <HiOutlineChevronDown
            size={13}
            className="mt-1 -rotate-180 group-hover:rotate-0 duration-300"
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col space-y-1 mt-2">
        {isTimeout &&
          item.dropDownData?.map((item: NavbarItemType, index: number) => (
            <Link
            key={index}
              className="hover:bg-gray-50 rounded-md px-5 py-1 duration-300"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
      </div>
    </li>
  );
};

export default Expand;
