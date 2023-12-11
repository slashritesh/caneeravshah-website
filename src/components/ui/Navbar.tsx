import Image from "next/image";
import ContainerBox from "./ContainerBox";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import ServicesNavMenu from "../ServicesNavMenu";
import MoibleNavbar from "../MoibleNavbar";

const Navbar = () => {
  return (
    <>
      <div className="bg-orange-500 relative">
        <ContainerBox>
          <div className="flex text-[9px] justify-between sm:text-[13px] text-white py-1">
            <p>+91 889 2345 890</p>
            <p>enquiry@caneeravshah.com</p>
          </div>
        </ContainerBox>
        <div className="bg-white border-b ">
          <ContainerBox>
            <div className="flex py-5 justify-between items-center">
              <Link href={"/"}>
                <Image
                  className="cursor-pointer w-[11rem] sm:w-[13rem]"
                  width={500}
                  height={500}
                  alt="CA Neerav Y. Shah and Co. Chartered Acoountant "
                  src="/caneeravshah-logo.svg"
                />
              </Link>
              <ul className="text-sm hidden sm:flex gap-10 font-medium">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="group/item relative">
                  <Link href={"/services"} className="flex items-center ">
                    Services <BiChevronDown className="text-lg" />
                  </Link>
                  <ServicesNavMenu />
                </li>

                <li>
                  <Link href={"/"}>Guides</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
              <Link
                href={"https://cal.com/caneeravshah/ca-services"}
                className="text-sm hidden sm:block bg-blue-600 p-2 px-4 rounded-lg text-white"
              >
                Book Free Call
              </Link>
              <div className="sm:hidden block">
                <MoibleNavbar />
              </div>
            </div>
          </ContainerBox>
        </div>
      </div>
    </>
  );
};

export default Navbar;
