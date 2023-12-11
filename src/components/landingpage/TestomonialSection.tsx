import TestomonialCard from "../TestomonialCard"


const TestomonialSection = () => {
  return (
    <div className="my-52 mb-28">
        <h2 className="mb-5 sm:text-lg font-semibold text-blue-600">Testomonials</h2>
        <h1 className="text-2xl sm:text-4xl font-semibold">What Our clients say about us?</h1>
        <div className="flex flex-col sm:flex-row gap-5 my-10 w-full">
          <TestomonialCard />
          <TestomonialCard />
          <TestomonialCard />
          <TestomonialCard />
        </div>
    </div>
  )
}

export default TestomonialSection