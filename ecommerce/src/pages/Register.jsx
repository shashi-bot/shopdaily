import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components"
import { registerUser } from "../redux/userRedux";


const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255, 255, 255, 0.5),
rgba(255, 255, 255,0.5)),
url("https://www.shutterstock.com/image-photo/kota-kinabalu-malaysia-november-25-260nw-1240734247.jpg");
backgound-size: cover;
display: flex;
align-items: center;
justify-content: center;

`;

const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;
const Title= styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin:20px 10px 0px 0px;
padding: 10px;
`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`;

const Register = () => {
  const dispatch =useDispatch();
  const auth = useSelector((state)=> state.auth);
   const navigate =useNavigate();
  useEffect(()=>{
    if(auth._id){
      navigate("/");
    }
  },[auth._id,navigate]);
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
  });
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(registerUser(user))
  }
  return (
    <Container>
     <Wrapper>
        <Title>
            CREATE AN ACCOUNT
        </Title>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="name" onChange={(e)=> setUser({...user,name:e.target.value})}/>

            <Input placeholder="email" onChange={(e)=> setUser({...user,email:e.target.value})}/>
            <Input type="password" placeholder="password" onChange={(e)=> setUser({...user,password:e.target.value})}/>
            
            <Agreement> By creating an account, I consent to the processing of my personal
                data in accordance with the<b> privacy polocy</b></Agreement>       
           <Button> Register</Button>

        </Form>
        </Wrapper> 
    </Container>
  );
};

export default Register
