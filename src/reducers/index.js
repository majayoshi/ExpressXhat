import { combineReducers } from "redux";
import User from "./user";
import Staff from "./staff";

const Reducers = combineReducers({
  User,
  Staff
});


// Staff.subscribe(() => {
//   console.log(store.getState());
// });

export default Reducers
