import React from "react";
import { addStaff } from "../actions/index";
import { connect } from "react-redux";

const StaffCreate = e => {
  console.log(e);
  console.log(e.target.value)
};

function CrateStaff({ props, dispatch }) {
  console.log(props);
  // const counter = useSelector(state => state.counterReducer);
  // const counter2 = useSelector(state => state.counterReducer2);
  //   const detail = "hello deveryone";

  return (
    <div>
      <button
        onClick={StaffCreate}
        // "dispatch(addStaff())"
      >
        Hey Click Me
      </button>
    </div>
  );
}


export default connect()(CrateStaff);
