import {AddOutlined,RemoveOutlined} from "@material-ui/icons"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"



const Container = styled.div``;
const Wrapper = styled.div`
padding: 50px;
display: flex;
`;

const ImgContainer = styled.div`
flex: 1;
`;

const Image = styled.img`
width: 100%
height: 90vh;
object-fit: cover;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`;


const Title = styled.h1`
font-weight: 200:
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;
const FilterContainer = styled.div`
display: flex;
margin 30px 0px;
justify-content: space-between;
width: 50%;
`;

const Filter = styled.div`
display: flex;
align-item: center;
`;

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;

const FilterQuantity = styled.select`
width: 20px;
height: 20px;
cursor: pointer;

`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;

`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
  background-color: #f8f4f4;
}
`;
const AddContainer = styled.div`
display: flex;
width: 50%;
align-items: center;
justify-content: space-between;
`;



const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
        <Image src="https://d39vol41m7feya.cloudfront.net/1670075120-download.jpg"/>
        </ImgContainer>
        <InfoContainer>
            <Title>Boroplus Cream</Title>
            <Desc>
            Boro Plus Doodh Kesar Body Lotion
₹150.00& big pack in
₹300.00
  
            </Desc>
            <Price>$ 20</Price>
         <FilterContainer>
            <Filter>
                <FilterTitle>Quantity</FilterTitle>
            <FilterQuantity Quantity="100mg"/>
            <FilterQuantity Quantity="300mg"/>
            </Filter>
         </FilterContainer>
         <AddContainer>
            <AmountContainer>
                <RemoveOutlined/>
                <Amount>1</Amount>
                <AddOutlined/>

            </AmountContainer>
            <Button>ADD TO CART </Button>
         </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Announcement/>
      <Footer/>
    </Container>
  )
}

export default Product
