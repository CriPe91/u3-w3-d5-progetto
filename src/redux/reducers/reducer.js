import { SET_TRACK } from "../actions/action";

const initialState = {
  track: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACK:
      return {
        ...state,
        track: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
