import React from "react";
import Link from "next/link";
import { service } from "@/types/commanTypes";
import limitStringLength from "@/lib/shortlenght";

type cardProps = {
  item: service;
};

const ServiceViewCard = (props: cardProps) => {
  return (
    <div>
      <div
        key={props.item._id}
        className="sm:p-10 p-8 hover:bg-orange-100 border hover:border-none rounded-xl"
      >
        <h1 className="text-xl font-semibold">{props.item.title}</h1>
        <p className="text-[15px] mt-3 mb-6">{limitStringLength(props.item.description,130)}</p>
        <div className="flex sm:flex-row flex-col gap-2 sm:gap-5 sm:w-full w-fit  sm:items-center">
          <Link
            className="p-2 bg-orange-500 text-sm sm:text-base rounded-lg px-5 text-white"
            href={"https://cal.com/caneeravshah/ca-services"}
          >
            Book Call Now
          </Link>
          <Link
            className="p-2 bg-slate-200 w-fit text-sm sm:text-base rounded-lg px-5"
            href={`/services/${props.item.category.title
              .toLowerCase()
              .replace(/ /g, "-")}/${props.item.slug.current}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceViewCard;
