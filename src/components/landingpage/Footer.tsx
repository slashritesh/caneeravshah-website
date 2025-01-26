import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="sm:p-10  mb-10 p-8 bg-orange-100 rounded-xl">
        <div>
          <h1 className="sm:text-3xl  text-xl leading-tight mb-3  capitalize font-semibold">
            Grow your business with <br className="hidden sm:inline" /> clear <span className="text-orange-500">financial records</span>.
          </h1>
          <p className="sm:w-[75ch] w-auto  mb-8 text-sm">
          Ready to optimize your financial strategy? Schedule a call with our experienced CA team today. Let's discuss how we can elevate your business together. Book your consultation now!
          </p>
          <Link href={'https://cal.com/caneeravshah/ca-services'} className="p-3 px-5 mb-5 sm:text-base text-sm bg-orange-500 text-white rounded-lg">
            Book free call <span className="hidden sm:inline">for Services</span>
          </Link> 
        </div>
      </div>

      <div className="flex sm:flex-row flex-col sm:px-10 border-b py-10 justify-between">
        <div className="sm:w-[300px] w-auto">
          <div>
            <Image
              alt="CA Neerav Y. Shah and Co. Chartered Acoountant "
              src="/caneeravshah-logo.svg"
              width={200}
              height={200}
            />
          </div>
          <p className="sm:text-base text-sm  mt-5">
            No B-3, Vikhroli West, Mumbai - 400083 
            (Behind St Joseph School,
            Near Railway Station, Mohatta Nagar)
          </p>
          <p className="mt-5 sm:text-base text-sm">+91 86920 82292</p>
          <p className="sm:text-base text-sm">caneeravshah@gmail.com</p>
        </div>
        <div className="flex sm:mb-4 gap-1 sm:text-base text-sm flex-col">
          <h3 className="text-lg font-semibold sm:mt-0 mt-5">Quick Links</h3>
          <Link href={""}>Home</Link>
          <Link href={""}>About us</Link>
          <Link href={""}>Contact us</Link>
          <Link href={""}>Contact us</Link>
          <Link href={""}>Privacy policy</Link>
          <Link href={""}>Terms & conditions</Link>
        </div>
        <div className="flex mb-4 gap-1 sm:text-base text-sm flex-col">
          <h3 className="text-lg font-semibold sm:mt-0 mt-5">Services</h3>
          <Link href={""}>Bussiness Setup</Link>
          <Link href={""}>Registration</Link>
          <Link href={""}>Taxation & Compliance</Link>
          <Link href={""}>Consultancy</Link>
          <Link href={""}>Financial Management</Link>
        </div>
        <div className="flex mb-4 text-sm sm:text-base gap-1 flex-col">
          <h3 className="text-lg font-semibold sm:mt-0 mt-5">Popular Guides</h3>
          <Link href={""}>GST return fillings</Link>
          <Link href={""}>Company formation</Link>
          <Link href={""}>partnership firm</Link>
          <Link href={""}>Limited liability partnership</Link>
          <Link href={""}>finalization of accounts</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
