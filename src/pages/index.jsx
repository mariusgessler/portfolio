import React from 'react';
import SEO from '../utilis/seo';
import Hero from '../components/hero';
import Work from '../components/work';
import ScrollProgress from '../components/nanos/scrollprogress';
import Footer from '../components/footer';
import About from '../components/about';
import '../css/styles.scss';

const IndexPage = () => {
  // eslint-disable-next-line no-console
  console.log(`Hi there!${String.fromCodePoint(0x1F44B)}`);

  return (
    <>
      <SEO title="Portfolio" />
      <ScrollProgress />
      <Hero />
      <Work />
      <About />
      <Footer />
    </>
  );
};

export default IndexPage;
