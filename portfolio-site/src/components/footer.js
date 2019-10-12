import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Theme from "../components/theme";
import SVG from "react-inlinesvg";
import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";


const Copyright = styled.p`
color:${props => props.theme.mg_grey};
font-size: 0.8rem `

const FooterContainer = styled.footer`
display:flex;
justify-content: space-between;`

const SocialContainer = styled.div``

const SocialIcon = styled(SVG)`
margin: 0 8px;
width: 16px;
fill: ${props => props.theme.mg_grey};
transition: fill 0.5s ease;
transition: width 0.5s ease;

&: hover{
    fill: ${props => props.theme.mg_blue};
}
    @media (min-width: 375px) {
    width: 20px;
  }
`




const Footer = () => (
        
        <ThemeProvider theme={Theme}>
        <FooterContainer>
        
        <SocialContainer>
            {/* <SocialIcon src="../assets/github.svg"/> */}
            <a href="https://www.linkedin.com/in/marius-gessler" target="_blank" rel="noreferrer"><SocialIcon src={LinkedIn}/></a>
            <a href="https://github.com/mariusgessler" target="_blank" rel="noreferrer"><SocialIcon src={GitHub}/></a>
        </SocialContainer>
        <Copyright>
            2019, Marius Gessler
        </Copyright>
        
        </FooterContainer>
        </ThemeProvider>
        
    )

export default Footer;