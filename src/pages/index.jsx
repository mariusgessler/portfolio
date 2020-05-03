import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import Introduction from '../components/introduction';
import Work from '../components/work';
import Bar from '../components/topbar';
import Theme from '../components/theme';
import Footer from '../components/footer';

const IndexContainer = styled.div`
padding: 1.2em;
  @media (min-width: 700px) {
    padding: 0.7em 2em;
  }
  @media (min-width: 850px) {
    width: calc(850px - 1.4rem);
    margin: 0 auto;
  }
  @media (min-width: 1100px) {
    width: calc(860px - 1.4rem);
    margin: 0 auto;
  }`;

const ActionCallContainer = styled.div``;

const ActionCall = styled.p`
text-align: center;
margin: 70px auto;
font-weight: 100;
color: ${(props) => props.theme.mg_grey};
font-size: 1.3rem;
  @media (min-width: 700px){
    font-size: 1rem;
  }`;

const IndexPage = () => (
  <>
    <SEO title="Portfolio" />
    <ThemeProvider theme={Theme}>
      <Bar />
      <IndexContainer>
        <Introduction />
        <Work />
        <ActionCallContainer>
          <ActionCall>
            Find out more
            <Link to="/about"> about me </Link>
            or feel free to send me an
            <a href="mailto:marius.gessler@gmail.com"> email.</a>
          </ActionCall>
        </ActionCallContainer>
        <Footer />
      </IndexContainer>
    </ThemeProvider>
  </>
);

export default IndexPage;
