import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { red } from "@material-ui/core/colors";
import { useState } from "react";
const Container = styled.div``
const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div` 
display: flex;
justify-content: sapce-between;
`;

const Filter = styled.div`
margin: 20px;
`;
const FilterText = styled.span`
font-size: 20px;
font-weight: 600; 
margin-Right: 20px;
`;

const Select = styled.select`
padding: 10px;
margin-Right: 20px;
`;
const Option = styled.option``

const ProductList = () => {
  const location = useLocation();
  const cat =location.pathname.split("/")[2];
  const [filters,setFilters] = useState({});
  // const [sort,setSort] = useState("newestitems");
  const handleFilters =(e) =>{
    const value =e.target.value;
    setFilters({
      ...filters,
     [e.target.name]:value,
    });
  };

  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>{cat}</Title>
      <FilterContainer>
      <Filter><FilterText>filter Products</FilterText>
      <Select name="Recommendation" onChange={handleFilters}>
        <Option >Recommendation</Option>
        <Option>BestValue</Option>
        <Option>HighestRated</Option>
        <Option>Shopdaily special</Option>
        <Option>LowestPrice</Option>
      </Select>
      </Filter>
      {/* <Filter><FilterText>Sort Products</FilterText>
      <Select  onChange={(e)=> setSort(e.target.value)}>
        <Option value="newest">Newest </Option>
        <Option value="asc">price (asc)</Option>
        <Option value="dsc">price (dsc)</Option>

    </Select>
      </Filter> */}
      </FilterContainer>
      <Products cat ={cat} filters={filters} />
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
