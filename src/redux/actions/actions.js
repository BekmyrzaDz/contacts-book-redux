import { REQUEST_DATA_USERS, GET_SUCCESS_USERS_DATA } from "./types";

const url =
  "https://my-json-server.typicode.com/RomanChasovitin/demo-api/users";

const getUsers = () => {
  return {
    type: REQUEST_DATA_USERS,
  };
};

export const getSucces = (data) => {
  return {
    type: GET_SUCCESS_USERS_DATA,
    payload: data,
  };
};

export const GetUsersAll = () => {
  return (dispatch) => {
    dispatch(getUsers());
    fetch(url)
      .then((responce) => responce.json())
      .then((data) => {
        dispatch(getSucces(data.data));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
};
