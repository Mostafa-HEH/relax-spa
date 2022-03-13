import { combineReducers } from "redux";

const homePageBookDataReducer = (data = {}, action) => {
  switch (action.type) {
    case "HOME_PAGE_BOOK_DATA":
      return action.payload;

    default:
      return data;
  }
};

export default combineReducers({
  BookData: homePageBookDataReducer,
});
