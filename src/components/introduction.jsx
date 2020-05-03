import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import Theme from './theme';
import Portrait from '../images/portrait.svg';

const IntroContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 90vh;
  @media (min-width: 700px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: 150px;
  }`;

const IntroductionGroup = styled.div`
color: ${(props) => props.theme.mg_blue};
margin-top: 65px;
  @media (min-width: 450px) {
    margin-top: 60px;
  }`;

const Greeting = styled.h1`
font-family: 'Montserrat', sans-serif;
font-weight: 600;
font-size: 12px;
  @media (min-width: 1100px) {
    font-size: 14px;
  }`;

const Opening = styled.h2`
font-size: 18px;
font-family: 'Spectral', serif;
max-width: 300px;
  @media (min-width: 700px) {
    font-weight: 100;
    font-size: 26px;
    max-width: 390px;
  }`;

const PortraitGroup = styled.div`
animation: fadein 3s;
  @media (min-width: 700px) {
  }`;

const PortraitImg = styled.img`
display: block;
height: 270px;
margin: 0 auto;
animation: fadein 2s; 
  @media (min-width: 1024px) {
    height: 380px;
  }
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}`;

const Introduction = () => (
  <ThemeProvider theme={Theme}>
    <IntroContainer>
      <PortraitGroup>
        <PortraitImg src={Portrait} alt="Imagetrace of myself" />
      </PortraitGroup>
      <IntroductionGroup>
        <Greeting>Hi, I&apos;m Marius.</Greeting>
        <Opening>
          I&apos;m a developer who enjoys
          working on meaningful projects with some nice
          people, currently at
          <a
            href="https://hiber.global/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Hiber
          </a>
          .
        </Opening>
      </IntroductionGroup>
    </IntroContainer>
  </ThemeProvider>
);

export default Introduction;
