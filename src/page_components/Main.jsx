import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../Context";
import { Link } from "react-router-dom";

const Main = ({route,isDeveloperChecked,setIsDeveloperChecked}) => {
  const { JobLi } = useContext(GlobalContext);
  const [displayText, setDisplayText] = useState("");


  const text = ": The Global marketplace for  Top Talent.";
  const speed = 100;
  
  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    setTimeout(() => {
      let interval = setInterval(() => {
        if (currentIndex == text.length) {
          clearInterval(interval);
          return;
        }
        currentText = text.slice(0, currentIndex + 1);
        setDisplayText(currentText);
        currentIndex++;
      }, speed);
      return () => clearInterval(interval);
    }, 1500);
  }, [text, speed]);

  return (
    <div className="flex mt-16 text-wrap flex-col">
    <Content displayText={displayText} />
      <Switch isDeveloperChecked={isDeveloperChecked} setIsDeveloperChecked={setIsDeveloperChecked}  route={route}/>
      <CategoryTabs JobLi={JobLi} />
    </div>
  );
};

export default Main;

export function Content({displayText}){
  return(
      <div className="text-center my-10 md:my-14 md:mx-16 mx-4">
        <h1 className="font-bold font-riot text-xl md:text-4xl bg-clip-text bg-gradient-to-tr from-slate-700 via-sky-950 to-blue-950 text-transparent">
          <span className="md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-br from-purple-900 via-pink-900 to-orange-500">
            OGT{" "}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-950 to-pink-600">
           {displayText}
          </span>
        </h1>
        <p className="text-center  mt-2 md:mx-28">
          Connect with inspiring projects from around the world and collaborate
          with businesses that value your unique skills. Embrace the freedom to
          choose the work you love, and build a flourishing career without
          borders. For the businesses and startups it's great market place for
          the services which will make your business easier for you.
        </p>

        <Link
          to={"/form"}
          className="md:text-lg relative group font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-950 to-pink-600 capitalize"
        >
          {" "}
          post a job
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-600 rounded-full transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </Link>
      </div>

  )
}

export function Switch({isDeveloperChecked,setIsDeveloperChecked,route}){
  return(
      <div className={` ${route == "/" ? "mx-auto text-slate-800 text-center md:space-y-3" : "hidden"}`}>
      <div  className="flex space-x-2 items-center">
      <p className={`${isDeveloperChecked ? "visible font-semibold md:text-lg" : "text-opacity-80"}`}>Developer</p>
      <div onClick={() => setIsDeveloperChecked(!isDeveloperChecked)} 
      className={`${isDeveloperChecked ? " bg-pink-400" : "bg-purple-400" } md:h-8 md:w-14 h-5 rounded-full flex items-center`}>
      <div className={`${isDeveloperChecked ? "-translate-x-2" : "md:translate-x-full translate-x-2"} h-3 w-3 md:w-5 md:h-5 mx-3 transition-all duration-500 delay-200 bg-white block rounded-full`}></div>

      </div>
      <p className={`${isDeveloperChecked ? "text-opacity-80" : "visible font-semibold md:text-lg"}`}>Employer</p>


</div>
<p className="text-sm md:text-lg">Content as per {isDeveloperChecked ? "Developer" : "Employer" }</p>

      </div>

  )
}

const CategoryTabs =({JobLi}) =>{
  return(
      <div className="p-2 md:mt-4 md:mb-11 mx-4 md:ml-40 md:mr-10 lg:mr-72 lg:ml-96">
        <ul className="*:rounded-full *:border *:bg-sky-100 *:border-slate-600  *:capitalize *:text-slate-900  *:m-0.5 *:px-1.5 md:*:m-1 md:*:px-2 *:py-0.5 *:inline-block">
          {JobLi.map((job) => (
            <li className="bg-blue-200">{job}</li>
          ))}
        </ul>
      </div>

  )
}