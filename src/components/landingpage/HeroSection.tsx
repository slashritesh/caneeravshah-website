import Image from "next/image";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";

const HeroSection = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col w-full gap-5">
        <div className="sm:w-1/2 py-12 pb-8 sm:py-20 ">
          <h2 className="text-sm sm:text-base p-1 rounded-full px-2 pr-5 bg-slate-100 w-fit mb-3">
            {" "}
            🔵 Best CA firm in Mumbai
          </h2>
          <h1 className="text-2xl text-left leading-8 sm:leading-[58px] sm:text-[2.8rem]   font-semibold capitalize">
            <span className="font-bold text-orange-500">
              Simplify your taxes,
            </span>
            <br className="hidden sm:inline" /> Get financial clarity to{" "}
            <br className="hidden sm:inline" />
            <span className="font-bold text-blue-600">grow your business.</span>
          </h1>
          <p className="text-gray-400 text-left my-5 sm:my-10 mb-10 text-[12px] sm:text-lg sm:w-[52ch]">
            Navigate your finances effortlessly with CA Neerav Shah. We handle
            your taxes, audits, and financial planning, providing
            straightforward solutions tailored just for you.
          </p>
          <Link
            href={"https://cal.com/caneeravshah/ca-services"}
            className="text-sm  sm:text-lg sm:flex sm:w-fit gap-3 items-center sm:mt-16  bg-blue-600 py-4 px-6 rounded-xl text-white"
          >
            <BiPhoneCall className="text-2xl hidden sm:block" />
            Book Free Call
            <span className="hidden sm:block p-1 bg-orange-500 px-3 text-sm rounded-lg">
              For Enquiry
            </span>
          </Link>
        </div>
        {/* <div className="sm:w-full border sm:px-16 sm:my-20">
          <Image
            alt="Small bussiness owners"
            src="/small-bussiness-owners.png"
            className="w-full h-full"
            width={800}
            height={800}
          />
        </div> */}

        <div className="relative sm:w-full border sm:px-16 sm:my-20 h-[340px] sm:h-[500px]">
          <Image
            alt="Small business owners"
            src="/small-bussiness-owners.png"
            className=""
            fill
            sizes="100vw"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
