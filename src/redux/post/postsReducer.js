import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  DELETE_POSTS,
} from "./postsTypes";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };

    case DELETE_POSTS:   
    return {
          
           ...state,
           posts: state.posts.filter(( post) => post.id !== action.payload),
          //  error:action.payload,
         };

    default:
      return state;
  }
};

export default reducer;
