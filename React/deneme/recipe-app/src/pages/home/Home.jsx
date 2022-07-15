import Header from "../../components/header/Header";
import { useState } from "react";
import axios from "axios";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import homeImg from "../../assets/home.svg";
import Cards from "../../components/cards/Cards";

const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState(null);

  const APP_ID = "90e9a928";
  const APP_KEY = "04a3b183c291355db820341820c2298f";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Header
        mealType={mealType}
        getData={getData}
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeImg} />
        </ImgDiv>
      )}
      {recipes?.length === 0 && (
        <HeaderText>The Food Can Not Be Found</HeaderText>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;
