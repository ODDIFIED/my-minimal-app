type Props = {
  id: number;
  icon: any;
  description: string;
  context: string;
};

const SectionTwo = ({ icon, description, context }: Props) => {
  return (
        <div id="sectionTwo" className=" md:w-full lg:w-full   mb-5 py-5 px-4 border bg-yellow-300 border-yellow-300 mx-auto h-58 rounded-md shadow-md ">
            <div className=" w-16 h-16 mx-auto text-yellow-300 flex justify-center place-items-center rounded-full bg-green-800  border border-yellow-500 ">
                {icon}
            </div>
        <div>
            <p className=" xsm:text-xl  md:text-xs text-green-800 py-2 font-bold">
                {description}
            </p>
            <p className=" xsm:text-sm font-semibold md:text-xs text-green-800 ">
                {context}
            </p>
        </div>
        </div>
  );
};

export default SectionTwo;
