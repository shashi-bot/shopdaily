import React from 'react';
import styled from 'styled-components';
import {Search} from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import {mobile} from "../responsive";

const Container = styled.div`
   height : 60px;
   ${mobile({height:"50px" })}
  
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content:space-between;
align-items: center;
${mobile({ padding: "10px opx" })}
`;
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`;
const Language = styled.span`
font-size: 14px;
cursor: ponter;
${mobile({ display: "none" })}

`;
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
align-items: center;
border: 1px solid lightgray;
display: flex;
margin-left: 25px;
padding:5px;
`;
const Input = styled.input`
border: none;
${mobile({ width: "50px" })}
`;
const Center = styled.div`
flex: 1;
text-align: center;
`;
const Logo = styled.h1`
 font-weight: bold;
 ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
flex:1;
align-items: center;
display: flex;
padding: 5px;
justify-content: flex-end;
${mobile({ flex: 2,justifycontent: "center" })}

`;
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;

margin-left : 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  return (
    <Container><Wrapper><Left>
        <Language>EN</Language>
        <SearchContainer>
           <Input placeholder="Search"/>
            <Search style={{color:"gray",fontSize:16}}/>

        </SearchContainer>
    </Left>
     <Center><Logo>STORE</Logo></Center>
     <Right><MenuItem>REGISTER</MenuItem>
     <MenuItem>SIGN IN</MenuItem>
     <MenuItem><Badge badgeContent={4} color="primary">
      <ShoppingCartIcon/>
    </Badge></MenuItem></Right></Wrapper></Container>
  )
}

export default Navbar