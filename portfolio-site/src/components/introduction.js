import React from "react"
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Theme from "../components/theme"
import Portrait from "../images/portrait.svg";
import { Link } from "gatsby";


const IntroContainer    = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
height:100vh;
  @media (min-width: 700px) {
    border: 2px solid red;
    justify-content:center;
    flex-direction: row-reverse;
    flex: 1;
    height: 100%;
  }
`

const IntroductionGroup = styled.div`
color: ${props => props.theme.mg_blue};
  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Greeting      = styled.h1`
margin: 0 auto;
text-align: center;
font-size: 2rem;
font-weight: 500;

  @media (min-width: 700px) {
    margin: 0  0 15px 0;
    text-align: left;
    font-size: 1.3rem;
  }
`

const Opening = styled.h2`
display:none;
  @media (min-width: 700px) {
    margin: 0 0 25px;
    display:block;
    font-weight: 100;
    font-size: 1.6rem;
    max-width: 435px;
    
  }
`

const Actioncall        = styled.p`
text-align:center;
margin: 15px auto;
font-weight: 100;
font-size: 1.3rem;
  @media (min-width: 700px) {
    margin: 0;
    text-align: left;
    font-size: 0.8rem;
    width: 290px;
  }
`


const PortraitGroup     = styled.div`
animation: fadein 3s;

`

const PortraitImg = styled.img`
max-height: 350px;
margin: 0 auto;
display: block;

  @media (min-width: 375px) {
    max-height: 470px;
  }

  @media (min-width: 410px) {
    max-height: 550px;
  }

  @media (min-width: 700px) {
    width: 325px;
    
  }

`



const Introduction = props => (
 
<ThemeProvider theme={Theme}>
  <IntroContainer>
     <PortraitGroup>
        <PortraitImg src={Portrait} />   
      </PortraitGroup>
      <IntroductionGroup>
        <Greeting>Hi, I'm Marius.</Greeting>
        <Opening>A developer 
looking to work on meaningful projects with some nice 
people.</Opening>
        <Actioncall>Scroll down to explore some of my work 
        or get to know me a little better <Link to="/about">here</Link>.</Actioncall>
      </IntroductionGroup>
     
  </IntroContainer>
</ThemeProvider>

)

export default Introduction
