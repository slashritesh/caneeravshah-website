import ContainerBox from "@/components/ui/ContainerBox";
import { client } from "@/sanity/sanity";
import { service } from "@/types/commanTypes";
import PortableText from "react-portable-text";
import React from "react";
import Link from "next/link";

type singleService = {
  body: any;
  description: string;
  title: string;
  category: string;
  slug: {
    current: string;
  };
};

const getdata = (slug: string) => {
  const query = `*[_type == 'services' && slug.current == '${slug}'][0]{body,description,title,_id,'category':category->title,slug}`;
  const data = client.fetch(query, {}, { next: { revalidate: 10 } });
  return data;
};

const page = async ({ params }: { params: { serviceSlug: string } }) => {
  const data = (await getdata(params.serviceSlug)) as singleService;

  const components = {
    h1: ({ children }: { children: any }) => (
      <h1 className="font-semibold text-4xl mb-8">{children}</h1>
    ),
    h2: ({ children }: { children: any }) => (
      <h2 className="font-semibold text-2xl my-5">{children}</h2>
    ),
    h3: ({ children }: { children: any }) => (
      <h3 className="font-semibold text-xl my-5">{children}</h3>
    ),
    normal: ({ children }: { children: any }) => (
      <h3 className="leading-relaxed sm:text-base text-sm my-2">{children}</h3>
    ),
  };

  return (
    <>
      <ContainerBox>
        <div className="flex mt-5 mb-20 gap-20">
          <div className="w-full">
            <PortableText content={data.body} serializers={components} />
          </div>
          <div className="w-[32rem] hidden sm:block">
            <div className="p-8 h-auto bg-orange-100 rounded-lg">
              <h3 className="font-semibold text-2xl mb-5">{data.title}</h3>
              <p className="mb-10">{data.description}</p>
              <Link className="px-5 p-2 bg-orange-500 text-white rounded-md" href={"https://cal.com/caneeravshah/ca-services"}>Book Call Now</Link>
            </div>
            <div className="my-8 p-8 bg-slate-100 rounded-lg">
              <h3 className="text-lg font-semibold">Related Guides</h3>
            </div>
          </div>
        </div>
      </ContainerBox>
    </>
  );
};

export default page;
