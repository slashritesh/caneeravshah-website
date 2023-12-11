import ContainerBox from "@/components/ui/ContainerBox";
import NextBreadcrumb from "@/components/ui/Nextbreadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <ContainerBox>
        <NextBreadcrumb
           homeElement={'Home'}
           separator={<span className="text-slate-400"> 	&gt; </span>}
           activeClasses=''
           containerClasses='flex py-5 text-sm  from-purple-600 to-blue-600' 
           listClasses='hover:underline mx-2 font-medium text-slate-400'
           capitalizeLinks
         />
        <h2 className="mt-10 text-lg mb-4 font-semibold text-blue-600">About us</h2>
        <h1 className="capitalize sm:text-5xl text-3xl font-semibold">
          Meet man behind
          your <br className="sm:inline hidden" />financial sucess
        </h1>
        <div className="flex flex-col sm:flex-row justify-between  my-10 py-10  gap-10">
          <div className="w-1/2">
            
          </div>
          <div className="sm:w-1/2">
            <p className="">
              Hey there! Welcome to CA Neerav Shah, where finance doesn't have
              to be a puzzle.I'm Neerav Shah, your go-to Chartered Accountant
              with a knack for turning financial challenges into success
              stories. <br />
              <br />
              In the dynamic world of tax consulting, business registration, and
              compliance, I've got your back. Whether you're a startup hustling
              in Mumbai or an established business navigating the complexities,
              I'm here to simplify it all. <br />
              <br /> I bring not just expertise but a passion for
              problem-solving. It's not just about ticking boxes; it's about
              making your business thrive. <br />
              <br />
              Let's untangle those financial knots together and make your
              journey not just compliant but downright successful. Join me at CA
              Neerav Shah, where we're not just about numbers; we're about your
              financial success, plain and simple.
            </p>
          </div>
          <div className="flex-1"></div>
        </div>
      </ContainerBox>
    </>
  );
};

export default page;
