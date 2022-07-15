import {
  FormContainer,
  HeaderContainer,
  HeaderTitle,
  InputBox,
  SearchButton,
  SelectList,
} from "./Header.style";

const Header = ({ mealType, getData, setQuery, setSelectedMeal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <HeaderContainer>
      <HeaderTitle>Recipe App</HeaderTitle>
      <FormContainer onSubmit={handleSubmit}>
        <InputBox
          type="text"
          placeholder="SEARCH"
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <SearchButton type="submit">SEARCH</SearchButton>
        <SelectList
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType?.map((meal, index) => (
            <option key={index} value={meal.toLowerCase()}>
              {meal}
            </option>
          ))}
        </SelectList>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
