import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { publicRequest } from "../requestMethods";
const initialState ={
    token: localStorage.getItem("token"),
    name:"",
    email:"",
    _id:"",
    isAdmin: false,
    loginStatus:"",
    loginError:"",
    registerStatus:"",
    registerError:"",
    userLoaded:false,
};
export const registerUser =createAsyncThunk(
    "auth/registerUser",
  async  (values,{rejectWithValue})=>{
        try{

        const token =    await publicRequest.post("auth/register",{
                name:values.name,
                email:values.email,
                password:values.password,

            });
            localStorage.setItem("token",token.data)
            return token.data;
        }catch(err){
            console.log(err.response.data);
            return rejectWithValue(err.response.data);

        }
    }
);
export const loginUser =createAsyncThunk(
    "auth/loginUser",
  async  (user,{rejectWithValue})=>{
        try{

        const token =    await publicRequest.post("auth/login",{
                name:user.name,
              password:user.password,

            });
            localStorage.setItem("token",token.data)
            return token.data;
        }catch(err){
            console.log(err.response.data);
            return rejectWithValue(err.response.data);

        }
    }
)
const authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        loadUser(state,action){
            const token =state.token
            if(token){
                const user = jwtDecode(token)
                return{
                    ...state,
                token,
                name:user.name,
                email:user.email,
                _id:user._id,
                isAdmin:user.isAdmin,
                userLoaded:true
                };
            }

        },
        logoutUser(state,action){
            localStorage.removeItem("token")
            return{
                ...state,
                token:"",
                name:"",
                email:"",
                 _id:"",
                 isAdmin:false,
              loginStatus:"",
              loginError:"",
             registerStatus:"",
            registerError:"",
             userLoaded:false,
            };
        }
    },
    extraReducers: (builder)=>{
      builder.addCase(registerUser.pending,(state,action)=>{
              return {...state,registerStatus:"pending"}
      });
      builder.addCase(registerUser.fulfilled,(state,action)=>{
                if(action.payload){
                    const user = jwtDecode(action.payload);
              return {
                ...state,
                token:action.payload,
                name:user.name,
                email:user.email,
                _id:user._id,
                registerStatus:"success",

              };
                } else return state;

      });
      builder.addCase(registerUser.rejected,(state,action)=>{
            return{
                ...state,
                registerStatus:"rejected",
                registerError:action.payload,

            }
      });
      builder.addCase(loginUser.pending,(state,action)=>{
        return {...state,loginStatus:"pending"}
});
builder.addCase(loginUser.fulfilled,(state,action)=>{
          if(action.payload){
              const user = jwtDecode(action.payload);
        return {
          ...state,
          token:action.payload,
          name:user.name,
          email:user.email,
          _id:user._id,
          isAdmin:user.isAdmin,
          loginStatus:"success",

        };
          } else return state;

});
builder.addCase(loginUser.rejected,(state,action)=>{
      return{
          ...state,
          loginStatus:"rejected",
          loginError:action.payload,

      }
});

    },
});
// export const {loginStart,loginFailure,loginSuccess} =userSlice.actions;
export const {loadUser,logoutUser} = authSlice.actions
export default authSlice.reducer;