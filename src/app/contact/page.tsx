import ContainerBox from "@/components/ui/ContainerBox";
import React from "react";
import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiLinkedinLine,
  RiInstagramLine,
} from "react-icons/ri";

const page = () => {
  return (
    <>
      <ContainerBox>
        <h2 className="font-semibold mt-10 mb-3 text-blue-600 text-lg">
          Let's connect !
        </h2>
        <h1 className="text-4xl font-semibold">Contact us</h1>

        <div className="my-4 flex sm:flex-row flex-col gap-20 py-10">
          <form className="flex-1 flex flex-col gap-3" action="">
            <div className="flex sm:flex-row flex-col gap-5">
              <div className="flex flex-col">
                <label htmlFor="">Full name</label>
                <input
                  className="p-2 mt-2 px-4 rounded-lg outline-none bg-gray-200"
                  type="text"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <label htmlFor="">Email address</label>
                <input
                  className="p-2 mt-2 px-4 rounded-lg outline-none bg-gray-200"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Company name</label>
              <input
                className="p-2 mt-2 px-4 rounded-lg outline-none bg-gray-200"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Message description</label>
              <textarea
                rows={7}
                className="p-2 mt-2 px-4 rounded-lg outline-none bg-gray-200"
              />
            </div>
            <button className="mt-4 self-start px-10 p-3 bg-blue-600 text-white rounded-lg">
              Submit
            </button>
          </form>
          <div className="flex-1 p-8 bg-orange-100 h-fit rounded-xl flex gap-5 flex-col">
            <h2 className="">Email address : <br />caneeravshah@gmail.com</h2>
            <h2>Phone Number : <br /> +91 7989 298 989</h2>
            <h2 className="sm:w-[32ch] w-auto">
              Office Adresss : <br />
              No B-3, Vikhroli West, Mumbai - 400083 (Behind St Joseph School,
              Near Railway Station, Mohatta Nagar)
            </h2>

            <div className="flex flex-wrap gap-5 my-5">
              <div className="p-2 bg-orange-500  rounded-lg">
                <RiFacebookCircleLine className="text-2xl text-white" />
              </div>
              <div className="p-2 bg-orange-500  rounded-lg">
                <RiTwitterLine className="text-2xl text-white" />
              </div>
              <div className="p-2 bg-orange-500  rounded-lg">
                <RiLinkedinLine className="text-2xl text-white" />
              </div>
              <div className="p-2 bg-orange-500  rounded-lg">
                <RiInstagramLine className="text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </ContainerBox>
    </>
  );
};

export default page;
