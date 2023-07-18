const NewsLetter = () => {
  return (
    <div className="relative text-center h-[80vh] space-y-4 flex flex-col justify-center items-center">
      <h6 className="text-3xl md:text-4xl font-bold text-primaryText">
        Subscribe Our Newsletter
      </h6>
      <p className="text-primaryText text-base md:text-lg max-w-[18rem] md:max-w-none ">
        Get the latest information and promo offers directly
      </p>

      <div className="flex space-x-4 flex-wrap items-center justify-center gap-4">
        <input
          type="text"
          className="border border-gray-600 py-1 px-2 md:px-4 flex-grow md:w-80"
          placeholder="Input email address"
        />
        <button className="text-sm md:text-lg px-4 py-2 font-semibold flex items-center bg-primaryText text-white border-t-2 border-t-gray-600 border-l-2 border-l-gray-600 border-b-2 border-b-black border-r-2 border-r-black">
          Get Started
        </button>
      </div>

      <div className="absolute flex items-center justify-center inset-0 -z-10">
        <h6 className="text-[3.5rem] sm:text-[6.5rem] lg:text-[7.3rem] leading-[7.4rem] lg:leading-[5.9rem] text-feature_bg font-bold ">
        Newsletter
        </h6>
      </div>
    </div>
  );
};

export default NewsLetter;
