import { combineReducers } from "redux";
// import cakeReducer from "./cake/cakeReducer";
// import chocolateReducer from "./chocolate/chocolateReducer";
// import iceCreamReducer from "./iceCream/iceCreameReducer";
import postsReducer from "./post/postsReducer";

const rootReducer = combineReducers({
  // cake: cakeReducer,
  // iceCream: iceCreamReducer,
  // chocolate: chocolateReducer,
  posts: postsReducer,
});

export default rootReducer;
