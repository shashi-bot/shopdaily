

import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
const Container = styled.div`
margin:3px;
flex:1;
height: 70vh;
position:relative;
`;
const Image =styled.img`
width:100%
height:100%
object-fit:cover;`;
const Info =styled.div`
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
;
const Title =styled.h1`
color:gray;
margin-bottom:20px;`;
const Button = styled.button`
border:none;
padding:10px;
background-color:gray;
color:white;
cursor:pointer;
font-weight:600`;
const CategoryItem = ({item}) => {
  return (
    <Container>
    <Link to ={`/products/${item.cat}`}>
     <Image src ={item.img}/>
     <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
     </Info>
     </Link>
    </Container>
  )
}

export default CategoryItem