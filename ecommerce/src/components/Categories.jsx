import React from 'react'
import styled from 'styled-components'
import { categories } from '../data';
import CategoryItem from './CategoryItem';
const Container = styled.div`
display: flex;
padding: 5px;
justify-content: center`;

const Categories = () => {
  return (
 <Container>
{categories.map(item=>(
    <CategoryItem item ={item}/>
))}
 </Container>
  )
};

export default Categories