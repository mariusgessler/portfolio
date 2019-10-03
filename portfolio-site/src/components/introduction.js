import React from "react"
import styled from "styled-components";
import Portrait from "../images/portrait.svg"

const IntroContainer    = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
background-color: #F4F4F4;

max-height: 100vh;
`

const IntroductionGroup = styled.div`
padding: 30px;
color: #145374;
`;

const Greeting      = styled.h1`
margin-bottom: 0;
`;

const Opening           = styled.h2`
font-weight: 200;
font-size: 3.5rem;
margin-top: 0;`;

const Actioncall        = styled.h3``;

const PortraitGroup     = styled.div`
`




const Introduction = props => (
 

  <IntroContainer>
      <IntroductionGroup>
        <Greeting>hi, i'm marius.</Greeting>
        <Opening>a developer 
looking to work on meaningful projects with some nice 
people.</Opening>
        <Actioncall>scroll down to explore some of my work 
        or get to know me a little.</Actioncall>
      </IntroductionGroup>
      <PortraitGroup>
        <img src={Portrait}/>   
      </PortraitGroup>
  </IntroContainer>

)

export default Introduction
