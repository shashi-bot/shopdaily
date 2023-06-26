import {Facebook,Instagram,Twitter, Pinterest } from "@material-ui/icons";
import {Room,Phone,MailOutline} from "@material-ui/icons";
import styled from "styled-components";



const Container = styled.div`
display: flex;

`;

const Left= styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
margin: 20px opx;
`;

const SocialContainer = styled.div`
display: flex;`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
align-items: center;
justify-content: center;
margin-right: 20px;
`;


const  center= styled.div`
flex: 1;
padding: 20px;
`;

const Title= styled.h3`
margin-bottom: 30px;
`;
const List =styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px; 
`;
const Right = styled.div`
flex: 1;
padding: 20px;
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;
const Payment = styled.img`
width: 50%;
`;

const Footer  = () => {
  return (
    <Container>
      <Left>
        <Logo>shopdaily</Logo>
        <Desc>
           shop now
        </Desc>
        <SocialContainer>
           <SocialIcon color="3B5999">
            <Facebook/>
             </SocialIcon > 
             <SocialIcon color="E4405F">
            <Instagram/>
             </SocialIcon >
             <SocialIcon color="55ACEE">
            <Twitter/>
             </SocialIcon >
             <SocialIcon color="E60023">
            <Pinterest/>
             </SocialIcon>
        </SocialContainer>

      </Left>
      <center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>
                Grocery
            </ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>dairy products</ListItem>
            <ListItem> Order Tracking</ListItem>
            <ListItem> fruits&veg</ListItem>
            <ListItem>Helpline</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms&Service</ListItem>
        </List>

      </center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}}/>Tilak Hostel, MNNIT Allahabad</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>+917902125402</ContactItem>   
        <ContactItem><MailOutline style={{marginRight:"10px"}}/>Contact@rautela.gmail</ContactItem>
      <Payment src="https://tap2pay.me/wp-content/uploads/2019/11/payment-methods-with-circle_23-2147674741-1-750x423@2x.jpg"/>
      </Right>

    </Container>
  )
}

export default  Footer;
