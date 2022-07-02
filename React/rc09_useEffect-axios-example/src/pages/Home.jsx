import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState();
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    const { data } = await axios.get(url);
    setTutorials(data);
  };

  //! fetch only when componentOnMount
  useEffect(() => {
    getTutorials();
  }, []);

  console.log(tutorials);

  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
