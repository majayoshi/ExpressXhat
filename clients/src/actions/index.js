export const addStaff = text => {
  return { type: "staff/add" };
};

export const deleteStaff = text => {
  return { type: "staff/delete" };
};

export const updateUser = text => {
  return { type: "user/update" };
  console.log("text : " + text);
};

export const updateName = text => {
  return { type: "user/updateName" };
  // console.log("text : " + text);
};


// export const updateUser = text => dispatch => {
//   // dispatch({type : 'user/update', payload: 'hey' })
// };

// export const createPost = postData => dispatch => {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json"
//     },
//     body: JSON.stringify(postData)
//   })
//     .then(res => res.json())
//     .then(post =>
//       dispatch({
//         type: "NEW_POST",
//         payload: post
//       })
//     );
// };
