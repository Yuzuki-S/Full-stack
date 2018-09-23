export default function packages (state=[], action) {
    switch(action.type){
    case "PACKAGE_REQ":
    return state
    case "PACKAGE_RECEIVE":
    console.log(action);
    
    return action.response
    default:
    return state
    }
     
}