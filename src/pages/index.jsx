import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Work from '../components/work';
import ScrollProgress from '../components/scrollprogress';
import Footer from '../components/footer';
import About from '../components/about';
import '../css/styles.scss';

const Container = styled.div`
padding: 1.2em;
  @media (min-width: 700px) {
    padding: 0.7em 2em;
  }
  @media (min-width: 850px) {
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
font-size: 1.3rem;
  @media (min-width: 700px){
    font-size: 1rem;
  }`;

const IndexPage = () => (
  <>
    <SEO title="Portfolio" />
    <ScrollProgress />

    <div className="container">
      <div className="container-fluid">
      <Hero />
      <Work />
      <About />
      <Footer />

      </div>
    </div>


  </>
);

export default IndexPage;
