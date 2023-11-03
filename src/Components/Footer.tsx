import {
  FaFacebook,
  FaInstagram,
  FaPaperclip,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";

const Footer = () => {
  return (
    <div id="Footer" className="w-full max-w-7xl md:px-20 xsm:pb-10  md:py-10 bg-green-900 mt-10">

    <div className="  xsm:flex xsm:flex-col xsm:py-10 md:flex md:flex-row md:justify-evenly  ">
      <div className="md:w-[50%] xsm:w-[100%]  md:mx-0">
        <div className=" xsm:w-[100%] md:w-[50%] md:justify-start text-white font-bold  xsm:mx-auto md:mx-0 flex justify-center place-items-center font-sans   ">
          <GiPalmTree color={"yellow"} size={"20px"} />
          <h2>Odd Landscaping</h2>
        </div>
        <p className=" md:w-[80%] xsm:w-[90%] xsm:mx-auto  md:mx-0 mt-3 leading-6 text-sm text-white xsm:text-center md:text-left">
          We're proud of your contribution towards building the future,ground
          up! our landscaping company is ready to complete nay kind of project
          for any type of commercial and residential client!
        </p>
        
      </div>
      <div className="md:w-[50%] xsm:ml-3 xsm:w-[100% ] px-3 xsm:mt-8 xsm:mx-auto">
        <table className="text-white table-auto     text-sm">
          <th className=" xsm:px-0 md:px-5"> Social Media</th>
          <th className="xsm:px-0  md:px-5"> Working Hours</th>
          <th>Contact</th>
          <tbody>
          <tr className="text-sm">
            <td className="flex justify-evenly place-items-center gap-2 ">
              <>
                <FaFacebook size={10} color="yellow" /> Facebook
              </>
            </td>
            <td> Mon - Sat </td>
            <td className="flex justify-center place-items-center gap-2  ">
              <FaPhoneAlt size={12} color="yellow" /> Yarmouth, MA 0234
            </td>
          </tr>
          <tr className="text-sm">
            <td className="flex justify-evenly place-items-center gap-2 ">
              <>
                <FaInstagram size={10} color="yellow" /> Instagram
              </>
            </td>
            <td className="xsm:w-[30%] md:w-[100%] md:px-2"> Working Hour : 7AM - 6PM </td>
            <td className="flex justify-center place-items-center  ">
              <FaPaperclip size={12} color="yellow" /> Land0dd@gmail.com
            </td>
          </tr>

          </tbody>
                  </table>
      </div>
    </div>
    <div className=" w-full xsm:mt-3 md:mt-20 text-white mx-auto text-center">
          <p>@2023 0ddified-Ng.Copyright reserved.Privacy policy </p>
        </div>
    </div>

  );
};

export default Footer;
