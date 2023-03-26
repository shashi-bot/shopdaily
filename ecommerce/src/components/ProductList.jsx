import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
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
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>DailyNeedItem</Title>
      <FilterContainer>
      <Filter><FilterText>filter Products</FilterText>
      <Select>
        <Option disabled selected>Recommendation</Option>
        <Option>BestValue</Option>
        <Option>HighestRated</Option>
        <Option>Shopdaily special</Option>
        <Option>LowestPrice</Option>
      </Select>
      </Filter>
      <Filter><FilterText>Sort Products</FilterText>
      <Select>
        <Option disabled selected>Price</Option>
        <Option>Below100</Option>
        <Option>Below500</Option>
        <Option>Below1000</Option>
        <Option>Above1000</Option>
      </Select>
      </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
