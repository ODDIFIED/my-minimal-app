type Props = {
  icon: any;
  description: string;
  context: string;
};

const Cardholder = ({ icon, description, context }: Props) => {
  return (
    <div className="md:w-full  xsm:w-[100%] mx-auto xsm:mb-5 xsm:pt-5 md:py-6 xsm:px-2 shadow-md  border border-yellow-300 bg-yellow-300 rounded-lg h-56 flex flex-col justify-center items-center  pb-3">
      <div className="items-center  pb-5">
        <div className= "bg-green-800 flex justify-center items-center mx-auto border border-green-900 rounded-full text-yellow-400 xsm:w-12 xsm:h-12 md:w-10 md:h-10 lg:w-16 lg:h-16 mb-3">{icon}</div>
      <div className="text-black">
        <p className="font-bold xsm:text-xl text-green-900 md:text-sm xsm:pb-2">{description}</p>
        <p className=" xsm:text-sm font-semibold  text-green-900 md:text-xs ">{context}</p>
        </div>
      </div>
    </div>
  );
};

export default Cardholder;
