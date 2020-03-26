// states
const initState = {
  users: [
    {
      name: "admin",
      email: "admin@admin.com",
      sex: "M",
      job: "Sale"
      // phone: []
    }
  ],
  user: {
    name: "admin",
    email: "admin@admin.com",
    sex: "M",
    job: "Sale",
    address: "US"
    // phone: []
  }
};

const User = (state = initState, action) => {
  switch (action.type) {
    case "user/update":
      state.user.name = "Blackpink"
      break;
      case "user/updateName":
      state.user.name = action.payload.name
      console.log(action.payload)
      break;
    default:
      break;
  }
  return state;
};


export default User;
