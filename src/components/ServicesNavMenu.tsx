import Link from "next/link";
import React from "react";
import ContainerBox from "./ui/ContainerBox";
import { client } from "@/sanity/sanity";

const getdata = ()=>{
  const query = `*[_type == 'category']{
    title,
    _id,
    "services": *[_type == 'services' && references(^._id)] {
      title,
      'slug' : slug.current
    }
  }`
  const data = client.fetch(query,{},{next:{revalidate: 10}})
  return data
}

type categoryData = {
  title : string,
  _id : string,
  services : [{title : string, slug : string}]
}


const ServicesNavMenu = async () => {
  const category = (await getdata()) as categoryData[]
  return (
    <>
      <div className="gap-10 absolute bg-white hidden w-[1200px] group-hover/item:flex p-10 hover:flex top-[3rem] border right-[-38rem]">
        <div className="h-10 w-10 -top-5 right-[39.4rem] absolute bg-white border-t border-l rotate-45">
          
        </div>
        {category.map((category)=>{
          return <>
          <div className="flex gap-1 text-sm flex-col">
          <h3 className="text-base font-semibold">{category.title}</h3>
          {
            category.services.map((item)=>{
              return <>
              <Link href={`/services/${category.title.toLowerCase().replace(/ /g, '-')}/${item.slug}`}>{item.title}</Link>
              </>
            })
          }
        </div>
          </>
        })}
      </div>
    </>
  );
};

export default ServicesNavMenu;
