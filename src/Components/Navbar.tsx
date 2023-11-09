import { GiPalmTree } from "react-icons/gi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div id="hero" className="w-full max-w-7xl h-16 fixed xsm:px-2 md:px-0   lg:px-20 flex bg-green-900 justify-evenly place-items-center ">
      <div className=" w-[50%] text-white font-bold  flex place-items-center font-sans   ">
        <GiPalmTree color={"yellow"} size={"20px"} />
        <h2>Odd Landscaping</h2>
      </div>

      <div className=" w-[50%] lg:flex lg:justify-evenly lg:space-x-20 xsm:hidden place-items-center md:text-xl ">
        <ul className="flex text-sm font-sans font-bold text-white capitalize space-x-10">
          <Link to={'#sectionOne'}>
          <li>About</li>
          </Link>
          <Link to={'#sectionTwo'}>
          <li>Services</li>
          </Link>
          <Link to={'#Footer'}>
          <li>Contact Us</li>
          </Link>
        </ul>
        <div className="xsm:hidden lg:flex  ">
          <button className="border bg-black text-white text-sm border-black rounded-2xl px-2 py-2 ">
            Get a Quote
          </button>
        </div>
      </div>
      <div onClick={handleNav} className="  xsm:ml-36 lg:ml-24  lg:hidden">
        {!nav ? (
          <AiOutlineMenu color={"yellow"} size={"25px"} />
        ) : (
          <AiOutlineClose color={"yellow"} size={"25px"} />
        )}
      </div>

      <div
        className={
          nav
            ? "fixed z-40 w-[60%] bg-green-900 border border-l-0 h-full top-0 right-0 mt-16 border-black; ease-in-out duration-300  lg:hidden"
            : "fixed left-[-100%] "
        }
      >
        <ul className="uppercase mt-10 pt-14 xsm:text-2xl  md:text-4xl text-white text-right ">
          <Link to={'#hero'} onClick={handleNav} >
           <li className="p-5 border-b-2 font-semibold  border-yellow-400 ">
              home
           </li>
          </Link>
          <Link to={'#sectionTwo'} onClick={handleNav} >
           <li className="p-5 mt-5 border-b-2 font-semibold  border-yellow-400 ">
              about
           </li>
          </Link>
          <Link to={'#sectionTwo'} onClick={handleNav} >
           <li className="p-5 mt-5 border-b-2 font-semibold  border-yellow-400 ">
              service
           </li>
          </Link>
          <Link to={'#Footer'}onClick={handleNav} >
           <li className="p-5  mt-5 border-b-2 font-semibold  border-yellow-400 ">
              contact us
           </li>
          </Link>
          <div className="p-5 mt-5">
            <button className="border  bg-black text-white border-black rounded-2xl px-4 py-4 ">
              Get a Quote
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
