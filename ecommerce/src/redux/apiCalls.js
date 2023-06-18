import { publicRequest } from "../requestMethods";
// import { loginFailure, loginStart, loginSuccess } from "./userRedux"

// export const login =async(dispatch,user)=>{
//   dispatch(loginStart());
//   try{
//      const res= await publicRequest.post("/auth/login",user);
//      dispatch(loginSuccess(res.data));
//   } catch(err){
//     dispatch(loginFailure());
//   } 
// };

export const url = "http://localhost:5000/api";

export const setHeaders = () => {
  const headers = {
    headers:{
    "x-auth-token": localStorage.getItem("token"),},
};

  return headers;
};