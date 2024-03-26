import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

const JobLi = [
  "Software Development",
  "Web Development",
  "Design",
  "Network Engineer",
  "Database Administrator",
  "Systems Administrator",
  "Data Scientist",
  "Security Analyst",
  "UX/UI Designer",
  "Cloud Engineer",
  "Blockchain Developer",
  "Cybersecurity Engineer",
  "Machine Learning Engineer",
  "AI Engineer",
  "Project Manager",
  "Technical Support Engineer",
  "Business Analyst",
  "IT Manager",
];
const data = [
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/flower",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "Worldwide",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/person",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "USA",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/shit",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "Germany ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/house",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/appartment",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/company",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/building",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/scripture",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/pillar",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 1,
    imgPath: "https://source.unsplash.com/random/heart",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 2,
    imgPath: "https://source.unsplash.com/random/profile",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 3,
    imgPath: "https://source.unsplash.com/random/avatar",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 4,
    imgPath: "https://source.unsplash.com/random/man",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 5,
    imgPath: "https://source.unsplash.com/random/woman",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 6,
    imgPath: "https://source.unsplash.com/random/boy",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
  {
    id: 7,
    imgPath: "https://source.unsplash.com/random/google",
    title: "customer service rep us",
    company: "omni interactions",
    stream: "customer service",
    salary: "$14-$20/hour",
    country: "us ",
    timeOfPost: "2wk ago",
  },
];

const GlobalState = ({ children }) => {
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [hasDialogBeenShown, setHasDialogBeenShown] = useState(false);

  const [showOptions, setShowOptions] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const [ComapanyName, setCompanyName] = useState("");


  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [showDonationBox, setShowDonationBox] = useState(false);

  let [activeTab, setActiveTab] = useState(2);
  const [choosenAmount,setChoosenAmount] = useState('')
  const [isCafEmpty,setISCafEmpty] = useState(true)

  const [isChoosenAmount,setIsChoosenAmount] = useState(false)

  const [StepCount,setStepCount] = useState(1)


  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  const handleLoginButtonClick = () => {
    setIsLoginFormOpen(true);
  };
  const handleSignUpButtonClick = () => {
    setSignUp(true);
    // hasDialogBeenShown(false)
  };



  const handleCancel = () => {
    setIsLoginFormOpen(false);
  };

  const handleClick = (index) => {
    if (index == Location.length - 1) {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const handleChange = (e) => {
    setJobTitle(e.target.value);
  };
  const handleCompanyChange = (e) => {
    setCompanyName(e.target.value);
  };

  return (
    <GlobalContext.Provider
      value={{
        activeTab, setActiveTab,choosenAmount,setChoosenAmount,isCafEmpty,setISCafEmpty,
        StepCount,setStepCount,
        showDonationBox,setShowDonationBox,
        data,
        ComapanyName,handleCompanyChange,handleSignUpButtonClick,
        handleClick,
        handleChange,
        showOptions,
        selectedOption,
        setSelectedOption,
        jobTitle,
        setJobTitle,
        setShowInput,
        showInput,
        setShowOptions,
        JobLi,
        signUp,
        setSignUp,
        hasDialogBeenShown,
        setHasDialogBeenShown,
        handleLoginButtonClick,
        handleCancel,
        isMenu,
        setIsMenu,
        isScrolled,
        setIsScrolled,
        isLoginFormOpen,
        setIsLoginFormOpen,
        toggleMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
