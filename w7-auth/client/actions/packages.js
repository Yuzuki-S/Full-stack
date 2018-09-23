import request from '../utils/api'

export function addPackageAction(purchase) {
  console.log(purchase);
  
  return function(dispatch) {
    let packageobj = {
      thing: purchase
    }
    dispatch(addPackageReq(purchase));
    request("get", "/add", packageobj).then(response => {
      if (!response.ok) {
        console.log("boooo");
        
      } else {
        console.log(response.body);
        
        dispatch(receivePackage(response.body));
      }
    });
  };
}


function addPackageReq(thing) {
  //console.log(type);
  
  return {
    type: "PACKAGE_REQ",
    isFetching: true,
    isAuthenticated: true,
    thing
  };
}

  function receivePackage(response) {
    return {
      type: "PACKAGE_RECEIVE",
      isFetching: false,
      isAuthenticated: true,
      response: response
    };
  }