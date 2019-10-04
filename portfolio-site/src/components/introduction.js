import React from "react"
import styled from "styled-components";
import Portrait from "../images/portrait.svg";
import { Link } from "gatsby";


const IntroContainer    = styled.div`
display: flex;
flex-direction: column;
background-color: #F4F4F4;
`

const IntroductionGroup = styled.div`
color: #145374;
`;

const Greeting      = styled.h1`
margin: 0 auto;
text-align: center;
font-size: 2rem;
font-weight: 500;
`;

const Opening = styled.h2`
display:none;
font-weight: 100;
font-size: 1em;
margin-top: 0;
`;

const Actioncall        = styled.p`

max-width: 290px;
text-align:center;
margin: 15px auto;
font-weight: 100;
font-size: 1.3rem;
`;


const PortraitGroup     = styled.div`
`

const PortraitImg = styled.img`
max-height: 350px;
margin: 0 auto;
display: block;
`



const Introduction = props => (
 

  <IntroContainer>
     <PortraitGroup>
        <PortraitImg src={Portrait} />   
      </PortraitGroup>
      <IntroductionGroup>
        <Greeting>Hi, I'm Marius.</Greeting>
        <Opening>a developer 
looking to work on meaningful projects with some nice 
people.</Opening>
        <Actioncall>Scroll down to explore some of my work 
        or get to know me a little better <Link to="/about">here</Link>.</Actioncall>
      </IntroductionGroup>
     
  </IntroContainer>

)

export default Introduction
