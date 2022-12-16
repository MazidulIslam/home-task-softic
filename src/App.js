import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import PostsContainer from "./components/PostsContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostsContainer />
        <h1><b>End of Posts</b></h1>
      </div>
    </Provider>
  );
}
export default App;
