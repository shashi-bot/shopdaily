import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@material-ui/icons";
const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
`;

const Title= styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight:600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"}:
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "black"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;
const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;

const Info = styled.div`
flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
const Image = styled.img`
width: 200px;
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;

`;
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.div``
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`;


const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 200;

`;
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "200"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>
            YOUR BAG
        </Title>
        <Top>
            <TopButton>CONTINUE SHOPPING </TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText> Your Wishlist(0)</TopText>
            </TopTexts>
        <TopButton type="filled"> CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
            <Product>
               <ProductDetail>
                <Image src="https://d39vol41m7feya.cloudfront.net/1652707260-55162-500x500.jpeg"/>
                <Details> 
                    <ProductName><b>Product:</b>Dabur Honey</ProductName>
                    <ProductId><b>ID:</b> 9149375470</ProductId>
                
                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                </Details>
                </ProductDetail> 
                <PriceDetail>
                    <ProductAmountContainer>
                        <Add/>
                        <ProductAmount>2</ProductAmount>
                        <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice>
                         </PriceDetail>
            </Product>
            </Info>
            <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemText>$ 80</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemText>$ 5.90</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemText>$ -5.90</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemText>$ 80</SummaryItemText>
            <button>
                CHECKOUT NOW
            </button>
            </SummaryItem>            
            
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
