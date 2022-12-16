import "./App.css";
// import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
// import ChocolateContainer from "./components/ChocolateContainer";
// import HooksChocolateContainer from "./components/HooksChocolateContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
// import ItemContainer from "./components/ItemContainer";
import PostsContainer from "./components/PostsContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostsContainer />
        <h1>End of Posts List</h1>
      </div>
    </Provider>
  );
}

export default App;
