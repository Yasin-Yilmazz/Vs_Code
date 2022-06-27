import Event from "./components/1-event-intro/Event";
import Counter from "./components/2-class-companents/Counter";
import UseStateExample from "./components/3-useStateHook/UseStateExample";
function App() {
  return (
    <div>
      <Event />
      <Counter count={10} />
      <Counter />
      <UseStateExample />
    </div>
  );
}

export default App;
