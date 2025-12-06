import UserContextProdvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProdvider>
      <h1>Hello</h1>
    </UserContextProdvider>
  );
}

export default App;
