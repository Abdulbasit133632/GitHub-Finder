import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import styles from "./assets/style.module.css";
import { FaGithub } from "react-icons/fa";

import Customcard from "./customcard";
import Errorcom from "./errorcom";
function App() {
  const [gitData, setGitData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async (searchValue = "") => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchValue}`
      );
      // console.log("response", response.data);
      setGitData(response.data);
    } catch (error) {
      alert("Wrong Input");
      console.log("error", error);
    }
  };

  // <h1>{gitData?.name}</h1>
  //  <h1>{gitData?.bio}</h1>
  //
  console.log("Git Data", gitData);

  const searchHandler = () => {
    if (!inputValue) {
      <img src="/public/pic 3.jpg" />;
      return;
    }
    fetchData(inputValue);
    setInputValue("")
    console.log("search Handler", inputValue);
  };
  
  console.log(inputValue, "value");


  return (
    <>
      <div className={`d-flex justify-content-between ${styles.headingd}`}>
        <h1>
          <FaGithub size={50} />
          GitHub User Search
        </h1>
      </div>
      <div className={`mx-auto d-flex ${styles.inputfield}`}>
        <input
          className="w-100 rounded"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button className="btn btn-primary ms-2" onClick={searchHandler}>
          Search
        </button>
      </div>
      
    {gitData ? <Customcard gitData={gitData} /> : <Errorcom />}

    </>
  );
}

export default App;
