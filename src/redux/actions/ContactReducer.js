import { REQUEST_DATA_USERS, GET_SUCCESS_USERS_DATA } from "./types";

const initialState = {
  data: [0, "adad"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA_USERS:
      return {
        ...state,
      };
    case GET_SUCCESS_USERS_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
