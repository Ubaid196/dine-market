import Link from "next/link";
import Image from "next/image";
import Logo from "/public/Logo.webp";
import Wrapper from "@/components/shared/Wrapper";

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <div className="container px-5 py-24 md:gap-28 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="space-y-7 w-64 flex-shrink-0 md:mx-0 text-left ">
            <Link
              href={"/"}
              className="w-40 flex-shrink-0 flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <Image
                src={Logo}
                alt="Dine Market Logo"
                width={500}
                height={500}
              ></Image>
            </Link>
            <p className="mt-2 text-base text-primaryText1 w-[9.5rem] md:w-[20rem]">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link
                href={""}
                className=" text-black flex-shrink-0 relative w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6 absolute"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link
                href={""}
                className="ml-3 text-black flex-shrink-0 relative w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6 absolute"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link
                href={""}
                className="ml-3 text-black flex-shrink-0 relative w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-6 h-6 absolute"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
              <Link
                href={""}
                className="ml-3 text-black flex-shrink-0 relative w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6 absolute"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link
                href={"https://github.com/Ubaid196"}
                className="ml-3 text-black flex-shrink-0 relative w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  className="octicon octicon-mark-github v-align-middle color-fg-default"
                >
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
              </Link>
            </span>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-left ">
            <div className="lg:w-1/4 md:w-1/2 w-full ">
              <h2 className="  font-bold text-xl text-primaryText1 tracking-widest mb-3">
                Company
              </h2>
              <nav className="list-none mb-10 space-y-3">
                <ul>
                <li>
                  <Link href={""} className="text-primaryText1 ">
                    About
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-primaryText1 ">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-primaryText1 ">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-primaryText1 ">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-primaryText1 ">
                    Contact Us
                  </Link>
                </li>
                </ul>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full ">
              <h2 className=" font-bold text-primaryText1 tracking-widest text-xl mb-3">
                Support
              </h2>
              <nav className="list-none mb-10 space-y-3">
               <ul>
                <li>
                  <Link href={""} className="text-primaryText1 ">
                    Support Carier
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-primaryText1 ">
                    24h Service
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-primaryText1 ">
                    Quick Chat
                  </Link>
                </li>
                </ul>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full ">
              <h2 className=" font-bold text-primaryText1 tracking-widest text-xl mb-3">
                Contact
              </h2>
              <nav className="list-none mb-10 space-y-3">
               <ul>
                <li>
                  <Link href={""} className="text-primaryText1 ">
                    Whatsapp
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-primaryText1 ">
                    Support 24h
                  </Link>
                </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="border-t border-primaryText1">
        <Wrapper>
          <div className="container mx-auto gap-5 py-4 px-5 flex flex-wrap flex-col lg:justify-between sm:flex-row">
            <p className="text-primaryText1 text-base text-left">
              Copyright © 2022 Dine Market —
              <Link
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-primaryText1 ml-1"
                target="_blank"
              >
                <b className="text-black">@ubaidurrehman</b>
              </Link>
            </p>
            <p className="text-primaryText1 text-base text-left">
              Designed by. <b className="text-black">US Design Studio</b>
            </p>
            <p className="text-primaryText1 text-base text-left">
              Coded by. <b className="text-black">Ubaid196 on github</b>
            </p>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
};

export default Footer;
