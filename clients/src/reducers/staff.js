const initState = {
  staff: [
    {
      name: "Evan You",
      age: 18,
      sex: "M",
      job: "Vue JS Creator, Engineer",
      phone: []
    },
    {
      name: "Mark",
      age: 18,
      sex: "M",
      job: "Vue JS Creator, Engineer",
      phone: []
    },
  ]
};

const Staff = (state = initState, action) => {
  switch (action.type) {
    case "staff/add":
      state.staff.push({
        name: "Bill Gate"
      });
      break;
    case "staff/delete":
      state.staff.pop();
      break;
    default:
      break;
  }
  return state;
};

export default Staff;
