import styled from "styled-components"
import { Container } from 'react-bootstrap'
import Modal from "../modal/Modal";


const HeroComponent = styled.header`
  padding:5rem 0;
  height:70vh;
  background-image:url("https://images.unsplash.com/photo-1680399524821-d4e6b225b0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size:cover;
  background-position:center;
`
const HeaderContainer = styled.div`
  background-color:rgb(5,148,112);
  padding:3rem;
  color:white;
  width:32.5rem
`;

const Heading = styled.h1`
  font-size:3rem
`;

const SunHeading = styled.h3`
  margin:.5rem 0;
  font-weight:400
`;

const ModalDiv = styled.div`
  display:flex;
  gap:1rem;
  margin-top:2.5rem
`;

const Hero = () => {
  return (
    <HeroComponent>
      <Container>
        <HeaderContainer>
          <Heading>Feeds your mind with the best</Heading>
          <SunHeading>Grow,learn and become more successful by reading some of the the article by highly reputable individuals</SunHeading>
          <ModalDiv>
          <Modal text='Signup'  variant='primary' />
          <Modal text='Login'  variant='danger' />
          </ModalDiv>
        </HeaderContainer>
      </Container>
    </HeroComponent>
  )
}

export default Hero
