import HookUseEffect from "./AllHooks/HookUseEffect";
import HookUseState from "./AllHooks/HookUseState";
import useFetchAPI from "./AllHooks/useFetchAPI";
import "./App.css";

function App() {
  const { data, loading, error } = useFetchAPI(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(data);

  if (error) return <p>Error!</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h2>HookUseState Counter</h2>
      <HookUseState />
      <h2>HookUseEffect Window Width</h2>

      <HookUseEffect />
      {/* <HookUseMemo /> */}
      {/* <HookUseCallback /> */}
      {/* <HookUseRef /> */}
      {/* <HookUseContext /> */}
      {/* <HookUseReducer /> */}
      {/* <HookUseImperativeHandle /> */}
      {/* <HookUseLayoutEffect /> */}

      <h2>useFetchAPI Direct fecth</h2>
      <ul>
        {data?.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );

}
export default App;
