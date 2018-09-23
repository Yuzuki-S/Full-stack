export function addPackageAction(type) {
  return function(dispatch) {
    dispatch(addPackageReq(type));
    request("get", "/add", { type: type }).then(response => {
      if (!response.ok) {
      } else {
        dispatch(receiveDelBag(response.body.bag));
      }
    });
  };
}


function addPackageReq(type) {
  return {
    type: "PACKAGE_REQ",
    isFetching: true,
    isAuthenticated: true,
    type
  };
}

//   function receiveDelBag(response) {
//     return {
//       type: "BAG_DEL_DONE",
//       isFetching: false,
//       isAuthenticated: true,
//       response: response
//     };
//   }