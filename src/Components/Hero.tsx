import tree from "../assets/tree.png";

const Hero = () => {
  return (
    <div  className=" w-full max-w-7xl   md:py-20   bg-yellow-300   ">
      <div className=" w-full  xsm:flex xsm:flex-col-reverse md:px-20  md:space-x-10 xsm:pb-10 md:flex md:flex-row  xsm:place-items-center ">
      <div className=" xsm:text-center md:w-[50%]  text-green-900  lg:w-[50%]  md:text-left">
        <h2 className=" xsm:w-[85%] xsm:mx-auto md:w-[100%] lg:w-[ 100%]  md:mx-0 font-bold xsm:text-3xl md:text-2xl lg:text-3xl">
          Offering Quality work at a fair price to the Cape Cod area.
        </h2>
        <p className=" xsm:w-[90%]  font-semibold xsm:mx-auto md:w-[100%]  lg:w-[80%] md:mx-0 mt-5">
          Our expert craftmen can transform your outdoor space into a
          'wow'space.We have the experience and know-how to design and build the
          perfect outdoor landscape.
        </p>
        <button className=" border bg-green-700 text-white border-green-700 rounded-2xl mt-5 p-2">
          Work with us
        </button>
      </div>
      <div className=" md:w-[60%] xsm:mt-14   md:gap-20  lg:w-[40%] items-center   ">
        <img src={tree}  className=" xsm:h-72  md:h-96 "   alt="tree-img" />
      </div>
      </div>
      
    </div>
  );
};

export default Hero;
