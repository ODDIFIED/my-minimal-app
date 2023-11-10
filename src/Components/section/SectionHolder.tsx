import { Contents, Holders, holdersProps } from "../../Data";
import Cardholder from "./Cardholder";
import { detailsProps } from "../../Data";
import SectionTwo from "./SectionTwo";

const SectionHolder = () => {
  return (
    <div id="sectionOne" className=" w-full max-w-7xl mt-6 md:px-0  mx-auto pt-10">
      <h1 className="  text-green-800 text-xl font-semibold">What we specialize in ?</h1>
      <div className="  md:w-[80%] lg:w-[50%]  md:space-x-5 mx-auto md:flex  md:justify-center md:place-items-center pt-5 ">
        {Contents.map((item: detailsProps) => {
          return (
            <div>
              <Cardholder
                key={item.id}
                description={item.description}
                icon={item.icon}
                context={item.context}
              />
            </div>
          );
        })}
      </div>
      <h1 className=" text-green-800   xsm:mt-20 xsm:text-xl md:text-xl font-semibold">
        What work with us ?
      </h1>
      <div className=" md:w-full lg:w-full  md:mx-auto xsm:mt-5 lg:mt-16 md:flex md:justify-between   lg:gap-10">
        <div className="md:w-[80%] mx-auto gap-6 lg:w-[50%] md:flex md:justify-center ">
          {Holders.map((item: holdersProps) => {
            return (
              <div className="">
                <SectionTwo
                  key={item.id}
                  description={item.description}
                  context={item.context}
                  icon={item.icon}
                  id={item.id}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
      <div id="sectionTwo" className=" xsm:w-[100%] xsm:mx-auto xsm:mt-12 md:mt-10 md:w-[100%] lg:w-[100%] md:text-center xsm:text-center   lg:ml-0">
          <h2 className=" xsm:w-[100%] sm:w-[90%] xsm:mx-auto md:w-[75%] md:mx-auto lg:w-[80%] text-green-900 font-semibold xsm:text-sm md:text-sm md:font-semiboldbold lg:text-center">
            We service both commercial and residential customers,and are full
            service design,installation,landscape and maintanance company, Such as :
          </h2>
          <div className="xsm:w-[85%] md:w-[60%] lg:w-[50%] lg:mx-auto  md:mx-auto  xsm:mx-auto ">
            <ul className="xsm:mt-5 text-green-900   md:ml-0 list-disc xsm:text-sm  xsm:grid xsm:grid-cols-2 lg:grid lg:grid-cols-2 md:text-sm font-bold">
              <li className="mb-4 "> Mulching/Bed Maintanance </li>
              <li className="mb-4">Brush Cleaning/ Removal</li>
              <li className="mb-4">Hardscaping</li>
              <li className="mb-4">Landscaping design And Installation</li>
              <li className="mb-4">Planting</li>
              <li className="mb-4">Weed Wacking</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" xsm:w-[100%] mt-14 mx-auto md:w-[70%]   xsm:text-center md:items-center">
        <h1 className="font-bold text-green-900 capitalize text-2xl">lets get started.</h1>
        <p className="lg:w-[100%] text-green-900 xsm:w-[90%] xsm:mx-auto md:w-[80%] md:mx-auto mt-2  text-sm font-semibold">
          Get the quote from the service that you want and you expect to recieve
          between 1-2 Business days
        </p>
        <button className="border border-green-900 text-white hover:bg-yellow-400 hover:text-green-900 bg-green-800 mt-3 rounded-3xl px-3 py-2">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default SectionHolder;
