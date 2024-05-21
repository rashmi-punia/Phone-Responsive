import React, { useContext ,useEffect,useRef} from "react";
import { Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./page_components/HomePage";
import LandingPage from "./landing_components/LandingPage";
import LogIn from "./logIn/Content";
import Reset from "./logIn/Reset";
import Form_page from "./PostJob/Form_page";

import { AnimatePresence } from "framer-motion";
import Project from "./Project/Project";
import Index from "./Donation";
import NewAcc from "./logIn/SignUp/NewAcc";
import { GlobalContext } from "./Context";
import AboutUs from "./About us/AboutUs";
import FAQs from "./Faqs/FAQs";
import Course from "./Resources/Course";
import ConatctUs from "./Contact-details/ConatctUs";

const App = () => {
  const {isLoginFormOpen,handleCancel,setStepCount} = useContext(GlobalContext)
  const location = useLocation();
  const prevLocation = useRef(location); 
  
  useEffect(() => {
    if (prevLocation.current.pathname === '/donate' && location.pathname !== '/donate') {
      setStepCount(1);
    }
    prevLocation.current = location; 
  }, [setStepCount,location]);
  
  const {pathname} =useLocation()
  // console.log(location)
  useEffect(()=>{
    window.scrollTo({top:0, behavior:"smooth"})

  },[pathname])
  return (
    <>
      <AnimatePresence>

        <Routes>
          <Route exact path="/Home" element={<HomePage />}  />
          <Route path="/" element={<LandingPage />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/form" element={<Form_page />} />
          <Route path="/project" element={<Project />}></Route>
          <Route path="/donate" element={<Index />}></Route>
          <Route path="/newAccount" element={<NewAcc />}></Route>
          <Route path="/aboutUs" element={<AboutUs/>}></Route>
          <Route path="/FAQ's" element={<FAQs/>}></Route>
          <Route path="/Free-courses" element={<Course />}></Route>
          <Route path="/contactDetails" element={<ConatctUs />}></Route>
        </Routes>

      </AnimatePresence>
    </>
  );
};

export default App;


