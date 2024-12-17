import {
  ADD_POST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./ActionTypes";

const initalState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    default:
      return state;
  }
};

export default postReducer;
