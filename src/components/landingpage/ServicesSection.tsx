import ServicesCard from "../ServicesCard";
import {
  IoNewspaperOutline,
  IoChatboxEllipsesOutline,
  IoBusinessOutline,
  IoWalletOutline,
  IoDocumentAttachOutline,
} from "react-icons/io5";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <div className="my-28">
      <h2 className="text-center font-semibold sm:text-lg text-blue-600 mb-4">
        Our trusted Services
      </h2>
      <h1 className="text-2xl sm:text-4xl font-semibold text-center capitalize">
        Services that makes <br /> you stress free
      </h1>
      <div className="grid sm:grid-cols-3 gap-5 mt-10">
        <ServicesCard
          title="Bussiness Setup"
          description="Establish with Confidence: Choose the right structure—LLP, Pvt Ltd, Partnership, or Co-op Housing Society—to build a secure foundation for your business, ensuring confidence in your establishment."
          icon={<IoBusinessOutline className="text-4xl text-orange-600" />}
        />
        <ServicesCard
          title="Financial Management"
          description="Enhance Financial Well-Being: Elevate your financial health through meticulous accounting, robust audit services, and expert insights, guiding your business toward sustained prosperity."
          icon={<IoWalletOutline className="text-4xl text-orange-600" />}
        />
        <ServicesCard
          title="Registrations"
          description="Streamline Compliance Processes: Effortlessly register for Pan, Tan, GST, and Professional Tax to ensure a smooth initiation for your business journey. Simplify complex registration procedures with guidance"
          icon={
            <IoDocumentAttachOutline className="text-4xl text-orange-600" />
          }
        />
        <ServicesCard
          title="Taxation & complaince"
          description="Optimize Tax Strategies: Navigate tax complexities effortlessly with comprehensive Income Tax, GST, TDS, and Professional Tax services. Ensure tax efficiency and strategic financial planning for your business."
          icon={<IoNewspaperOutline className="text-4xl text-orange-600" />}
        />
        <ServicesCard
          title="Consultancy"
          description="Informed Decision-Making: Benefit from our expertise in Management Audit, ERP implementation, and Corporate Law Consultancy, empowering your business with strategic guidance & processes."
          icon={
            <IoChatboxEllipsesOutline className="text-4xl text-orange-600" />
          }
        />
        <div className="p-10 flex-col rounded-xl flex justify-center items-center bg-slate-50">
          <h1 className="text-center mt-5">
            <span className="text-5xl font-semibold">10+</span> <br />
            more than services to fix <br /> your financial records
          </h1>
          <Link href={'/services'} className="p-2 px-5 m-5 bg-orange-500 rounded-lg text-white">
            Explore more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
