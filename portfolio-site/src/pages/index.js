import React from "react"
import SEO from "../components/seo"
import Introduction from "../components/introduction";
import Work from "../components/work";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Theme from "../components/theme";
import { Link } from "gatsby";
import Footer from "../components/Footer";

const IndexContainer = styled.div`
padding: 0.7em
  @media (min-width: 700px) {
    padding: 0.7em 2em;
  }`

const ActionCallContainer = styled.div``

const ActionCall = styled.p`
text-align:center;
margin: 70px auto;
font-weight: 100;
color: ${props => props.theme.mg_grey};
font-size: 1.3rem;`


const IndexPage = () => (
  <>
    <SEO title="Portfolio" />
    <ThemeProvider theme={Theme}>
    <IndexContainer>
      <Introduction/>
        <Work/>
        <ActionCallContainer>
          <ActionCall>Find out more <Link to="/about">about me</Link> or feel free to send me an <a href="mailto:marius.gessler@gmail.com">email.</a> </ActionCall>
        </ActionCallContainer>
        <Footer/>
      </IndexContainer>
      </ThemeProvider>
    </>
)

export default IndexPage;

