const { FETCH_EVENT_VALUES } = require("./types");

const initialValue = {
  dropDownValues: [],
};

const eventReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCH_EVENT_VALUES:
      return {
        ...state,
        dropDownValues: [...action.payload],
      };
    default:
      return state;
  }
};

export default eventReducer;
