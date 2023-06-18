import { useEffect, useState } from "react";
import styled from "styled-components"
import { popularproducts } from "../data"
import Product from "./Product";
import axios from "axios";
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;
const Products = ({cat,filters}) => {
  
const [products,setproducts] = useState([]);
const [filteredProducts,setFilteredProducts]=useState([]);
useEffect(()=>{
  const getProducts =async ()=>{
    try{
      const res = await axios.get(cat?`http://localhost:5000/api/products?category=${cat}`
                                    : "http://localhost:5000/api/products");
                               

        setproducts(res.data);                            
    
    }
    catch(err){ }
  };
  getProducts();
},[cat]);
useEffect(()=>{
  cat && 
  setFilteredProducts(
    products.filter((item)=>{
      return(Object.entries(filters).every(([key,value])=> { return(
        item[key].includes(value)
    )
      }))})
  ) 
},[products,cat,filters]);
 
  return (
    <Container>
      {cat
      ? filteredProducts.map((item)=> <Product item={item} key={item.id}/>)
      :products.map((item)=>
      (<Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products
