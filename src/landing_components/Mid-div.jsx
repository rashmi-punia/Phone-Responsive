import React from "react";
import { FcHome } from "react-icons/fc";
import { LiaCertificateSolid } from "react-icons/lia";
import { GiMeditation,GiHighFive } from "react-icons/gi";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animation from "../img/Animation - 1712234950082.json";
const variants = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 100,
      damping: 25,
    },
  },
};

export default function Middiv() {
  return (
    <div className=" p-1 group/one text-wrap ">
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className=" my-4 md:mx-16 p-2 md:w- *:duration-1000 *:ease-linear *:bg-cyan-50  *:shadow *:rounded-lg *:p-2 *:m-3 md:*:p-3 md:*:m-4 *:text-slate-900"
      >
        <motion.div
          variants={variants}
          className="delay-100  group-hover/one:opacity-100  hover:delay-75  hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-400"
        >
          <h1 className=" capitalize tracking-wide text-lg pb-1.5 md:pb-2 font-serif">
            Unleash Your{" "}
            <span className="text-blue-700">Potential on a Global Stage</span>{" "}
            for tech startups.
          </h1>
          <p className=" leading-tight">
            Connect & Create isn't just our motive, it's our mission. We
            envision a world where skilled individuals can seamlessly connect
            with exciting projects across the globe. Our platform fosters a
            vibrant marketplace of talent, empowering Developers to showcase
            their expertise and collaborate with businesses seeking the perfect
            fit.
            <span className="inline-flex space-x-2 align-middle text-white mx-1 px-2">
              <FcHome />
              <LiaCertificateSolid />
            </span>
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className=" delay-200  group-hover/one:opacity-100  hover:delay-75 hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-400"
        >
          <h1 className=" capitalize tracking-wide text-lg md:pb-2 pb-1.5 font-serif">
            Fostering{" "}
            <span className="text-blue-700"> Growth and Building Dreams</span> &
            Easily get Projects
          </h1>
          <p className="leading-tight">
            O G T transcends simple project matchmaking. We aim to cultivate a
            thriving ecosystem for professional growth. By providing access to
            diverse opportunities and fostering meaningful connections, we
            empower Developers to build fulfilling careers, while simultaneously
            enabling businesses to unlock the potential of a globalized
            workforce.
            <span className="inline-flex space-x-2 align-middle text-white mx-1 px-2">
              <GiMeditation className="text-green-500" />
            </span>
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className=" delay-300  group-hover/one:opacity-100  hover:delay-75  hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-400"
        >
          <h1 className=" capitalize tracking-wide text-lg md:pb-2 pb-1.5 font-serif">
            breaking Down Geographical Barriers:
          </h1>
          <p className=" leading-tight">
            O G T embraces the revolution in remote work. Gone are the days of
            location limitations. Our platform streamlines the process of
            finding and hiring top talent, regardless of geographical
            boundaries. Businesses can now access a wider pool of skilled
            professionals, fostering diversity and expertise within their teams.
            This flexibility empowers Developers to work from anywhere,
            fostering a healthy work-life balance and attracting top talent to
            even the most niche projects.
            <span className="inline-flex space-x-2 align-middle text-white mx-1 px-2">
              <GiHighFive className="text-red-500" />
            </span>
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className="  delay-500  group-hover/one:opacity-100 hover:delay-75 hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-400 "
        >
          <h1 className=" capitalize tracking-wide text-lg pb-1.5 md:pb-2 font-serif">
            A World of Solutions at Your Fingertips
          </h1>
          <p className=" leading-tight">
            O G T recognizes that successful businesses rely on a network of
            skilled professionals. Our platform extends beyond connecting
            Developers with project work. Businesses can leverage the global
            talent pool to find specialists for a variety of needs, from
            marketing and accounting to design and development. This simplifies
            the process of finding the perfect fit for any business need,
            eliminating geographical constraints and ensuring access to the best
            talent available.
            <span className="inline-flex space-x-2 align-middle text-white mx-1 px-2">
              <BsEmojiHeartEyesFill className="text-yellow-400 bg-red-500 rounded-full" />
            </span>
          </p>
        </motion.div>
      </motion.div>
      <div className="md:mt-1 pb-2 flex-col justify-center items-center">
<div>
          <Link to={"/Home"} className="button w-fit block mx-auto">
            Browse Projects
          </Link>

</div>
        <div className="flex-col justify-center items-center -space-y-36 md:-space-y-64">
          <div className=" md:h-[97vh] md:w-[36vw] block mx-auto ">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
             
            />
          </div>
        </div>
      </div>
    </div>
  );
}
