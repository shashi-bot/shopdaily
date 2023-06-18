import { useEffect, useState } from "react";
import styled from "styled-components"
// import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/userRedux";
const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255, 255, 255, 0.5),
rgba(255, 255, 255,0.5)),
url("https://www.shutterstock.com/image-photo/kota-kinabalu-malaysia-november-25-260nw-1240734247.jpg");
backround-size: cover;
display: flex;
align-items: center;
justify-content: center;

`;

const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const Title= styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin:10px 0px;
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
margin-bottom: 10px;
&:disabled{
  color:green;
  cursor:not-allowed;
}
`;


const Login = () => {
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
 
    password:"",
  });
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(loginUser(user))
  }

  return (
    <Container>
     <Wrapper>
        <Title>
            SIGN IN
        </Title>
        <Form >
            <Input placeholder="username" onChange={(e)=>setUser({...user,name:e.target.value})} />
            <Input placeholder="password" 
            type="password"
             onChange={(e)=> setUser({...user,password:e.target.value})}/>
    
               
           <Button onClick={handleSubmit} >LOGIN</Button>

           <Link>
           DO NOT YOU REMEMBER THE PASSWORD?
           </Link>
      <Link to="/register">CREATE_A_NEW_ACCOUNT</Link>
          
        </Form>
        </Wrapper> 
    </Container>

  )
}

export default Login;
