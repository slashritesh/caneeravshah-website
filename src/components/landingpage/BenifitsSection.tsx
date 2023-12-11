import Image from "next/image";

const BenifitsSection = () => {
  return (
    <div className="my-52">
      <div className="flex sm:flex-row flex-col items-center justify-between">
        <div>
          <p className="sm:text-lg font-semibold text-blue-600 mb-5">
            Solving your major problems
          </p>
          <h2 className="text-2xl sm:text-4xl font-semibold capitalize">
            Focus on Business growth, <br className="hidden sm:inline" /> not on
            Complicated taxes
          </h2>
        </div>
        <p className="sm:w-1/2 text-sm sm:text-lg mt-5 sm:mt-8">
          Let us handle complicated taxes. Concentrate on growing your business
          while we take care of the rest, making your path straightforward
          toward bussiness goals
        </p>
      </div>
      <div className="flex sm:flex-row flex-col gap-5 my-10">
        <div className="flex-1  relative">
          <div className="absolute bottom-10  left-10">
            <h1 className="sm:text-4xl text-2xl font-semibold text-white">Taxes Made <br />Simple</h1>
          </div>
          <Image
            height={200}
            width={500}
            alt="Tax free man"
            src={"/image-one.png"}
          />
        </div>
        <div className="flex-1 relative">
          <div className="absolute bottom-10 left-10">
            <h1 className="sm:text-4xl text-2xl font-semibold text-white">Time-Saving Finances</h1>
          </div>
          <Image
            height={300}
            width={550}
            alt="Tax free man"
            src={"/image-two.png"}
          />
        </div>
        <div className="flex-1  relative">
          <div className="absolute bottom-10  left-10">
            <h1 className="sm:text-4xl text-2xl font-semibold text-white">Worry Free Complainces</h1>
          </div>
          <Image
            height={200}
            width={500}
            alt="Tax free man"
            src={"/image-three.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default BenifitsSection;
