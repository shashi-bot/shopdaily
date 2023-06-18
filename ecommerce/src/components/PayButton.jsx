import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;
const PayButton =({cartItems}) =>{
    const user =useSelector((state)=>state.auth)
    const handleCheckout =() =>{
        
         publicRequest.post("/checkout/payment",{
            cartItems,
            userId:user._id,
         }).then((res)=>{
            if(res.data.url){
                window.location.href=res.data.url;
            }
         }).catch((err)=> console.log(err.message));
    };
    return (
        <>
        <Button onClick={()=>handleCheckout()} >Check out</Button></>
    );
}

export default PayButton;