import React, { useContext } from "react";
import { FcGlobe } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
import { GlobalContext } from "../Context";

const variant = {
  animate: {
    rotate: "-45deg",
    scale: 1.4,
  },
};
const MotionLink = motion(Link)
 
export default function Jobs() {
   const {data} = useContext(GlobalContext)
  
  return (
    <Link to="/project" >
      {data.map((job, index) => (
        <div className="group ">
          <div
            key={index}
            className={`
              ${index < Math.ceil(data.length / 2)
                ? " from-blue-100 to-pink-100"
                : "from-purple-100 to-orange-100" } md:group-hover:h-24 ease-in-out group-hover:bg-opacity-70 items-center flex md:p-1 p-0.5 border my-2 rounded-lg bg-gradient-to-l from-purple-100 to-orange-100 `
            }
          >
            <div className="md:w-16 md:h-16 w-8 h-8 overflow-hidden rounded-full">
              <img
                className="md:w-15 md:h-15   object-cover object-center"
                src={job.imgPath}
              />
            </div>
            <div className=" mx-1.5 md:*:mx-2">
              <div className="group-hover:text-lg mb-1 md:flex flex-col hover:opacity-60  flex md:*:font-semibold capitalize">
                <h1 className=" ">{job.title}</h1>
                <h1 className="text-xs md:text-sm">
                  <span className="md:inline-block hidden  mx-1 h-2 w-2 bg-slate-800 rounded-full"></span>
                  {job.company}
                </h1>
              </div>
              <div className="flex *:text-xs md:text-sm *:p-0.5 *:rounded-full mb-1 md:*:p-1 md:*:px-3 md:*:mx-2">
                <h1 className="border my-auto border-purple-500">
                  {job.stream}
                </h1>
                <h1 className="bg-orange-200 text-sky-900">
                  <FcMoneyTransfer className="size-4 ml-0.5 inline-flex md:mr-2 mr-0.5" />
                  {job.salary}
                </h1>
                <h1 className="bg-blue-200 rounded-md">
                  <FcGlobe className="inline-flex size-4 items-center md:size-5 md:mr-2 mr-0.5" />
                  {job.country}
                </h1>
              </div>
            </div>

            <div className="md:flex space-x-8 items-center ml-auto md:mr-2">
              <h1 className="md:mr-3 text-xs md:text-sm">{job.timeOfPost}</h1>
              <div className="md:group-hover:flex space-x-6 hidden *:rounded-xl *:p-2 *:px-3 *:mx-2">
                <Link to="/project" className="bg-sky-800 text-slate-50 hover:bg-white hover:border hover:text-sky-950 hover:border-sky-800">
                  Apply
                </Link>
                <MotionLink
                to="/project"
                  variants={variant}
                  className="flex group/btn text-nowrap items-center border border-slate-800 hover:opacity-55"
                >
                  See More
                  <motion.svg
                    variants={variant}
                    whileHover="animate"
                    className="group-hover/btn:-rotate-45 font-extralight size-5 "
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </motion.svg>
                </MotionLink>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Link>
  );
}
