import Person from "./Person";
import data from "./data";

function App() {
  // const { name, img, tel } = data;
  return (
    <>
      {/* {data.map((x) => (
      <Person name={x.name} img={x.img} tel={x.tel}  />
      ))} */}
      {data.map((i) => {
        const { name, img, tel } = i;
        return <Person name={name} img={img} tel={tel} />;
      })}
    </>
  );
}

export default App;
