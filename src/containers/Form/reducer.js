import { UPDATE_NAME, UPDATE_EMAIL, UPDATE_MESSAGE } from "./constants";

const initialState = {
  name: "",
  email: "",
  message: ""
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME: {
      //clone state
      //modify clone to update name
    }

    case UPDATE_EMAIL: {
      return Object.assign({}, state, { email: action.email });
    }
    case UPDATE_MESSAGE: {
      return Object.assign({}, state, { message: action.message });
    }
    default: {
      return state;
    }
  }
};

export default formReducer;
