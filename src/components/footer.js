import React from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import LinkedIn from "../assets/icons/linkedin.svg";
import GitHub from "../assets/icons/github.svg";

const Copyright = styled.p`
color:${props => props.theme.mg_grey};
font-size: 0.8rem `

const FooterContainer = styled.footer`
display:flex;
justify-content: space-between;
max-width: 1100px;
margin: 0 auto;`

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
    
            <FooterContainer>
                <SocialContainer>
                    <a href="https://www.linkedin.com/in/marius-gessler" target="_blank" rel="noreferrer"><SocialIcon src={LinkedIn}/></a>
                    <a href="https://github.com/mariusgessler" target="_blank" rel="noreferrer"><SocialIcon src={GitHub}/></a>
                </SocialContainer>
                <Copyright>
                    2019, Marius Gessler
                </Copyright>
            </FooterContainer>
        
    )

export default Footer;