import React from 'react';
import Header from '../components/header';
import SEO from "../components/seo";
import Footer from "../components/footer";
import Img from 'gatsby-image';
import { graphql } from "gatsby";
import styled from "styled-components";



const AboutWrapper = styled.div`

padding: 0.7em
  @media (min-width: 700px) {
    padding: 0.7em 2em;
  }
  @media (min-width: 850px) {
    width: calc(850px - 1.4rem);
    max-width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 1100px) {
    width: calc(1100px - 1.4rem);
    max-width: 100%;
    margin: 0 auto;
  }
`
const AboutContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
max-width: 650px;
margin: 20px auto;`

const Headshot = styled(Img)`
box-shadow: 0 0.7em 1em 0 rgba(0,0,0,.3);
margin: 0 auto;
border-radius:100%;
`
const Greeting = styled.h1`
margin: 25px auto;
text-align: center;
font-size: 1.5rem;
font-weight: 500;

  @media (min-width: 700px) {
    text-align: left;
    font-size: 1.3rem;
  }

  @media (min-width: 1100px) {
    font-size: 1.6rem;
    
  }`

const AboutMe = styled.p`
font-size: 1rem;
line-height: 1.5em;
font-weight: 200;
margin:0 0 25px;
  @media (min-width) {
    font-size: 0.8rem;
  }`


const About = ({data}) => {
  return (
      <>
    <SEO title="About me" />
      <Header about={true}/>
        <AboutWrapper>
            <AboutContainer>
                <Headshot fixed={data.file.childImageSharp.fixed}></Headshot>
                <Greeting>
                    Nice to meet you.
                </Greeting>
                <AboutMe>
                    I believe that technology can make the <a href="https://www.youtube.com/watch?v=B8C5sjjhsso" target="_blank" rel="noreferrer">world a better place</a>. Well, maybe not every piece of technology, but I know my contribution can make a difference to solving real-world problems. I am seeking opportunities to work on projects that improve and ease the life of people around me.
                </AboutMe>
                <AboutMe>
                  Studying International Communication Management in Den Haag, learning about integrated marketing, design thinking, user research, and campaign management fostered my critical and creative thinking - and while emersed in Dutch culture, I fell in love with The Netherlands.
                </AboutMe>
                <AboutMe>
                Building on that, I followed my passion for problem-solving. Coding. I love the satisfaction of creating something that didn't exist that morning. I love the constant learning, that there is no limit to improving myself. And, I love the development community, understanding how others think and solve complex issues.
                </AboutMe>
                <AboutMe>
                  Currently living in Vancouver (moving to Rotterdam in a few weeks), I enjoy the beautiful outdoors hiking and biking. Besides that, I love cooking, movies and football.
                </AboutMe>
                <AboutMe>
                If you'd like to get in touch, feel free to send me an <a href="mailto:marius.gessler@gmail.com">email.</a>
                </AboutMe>
            </AboutContainer>
      </AboutWrapper>
      <Footer/>
      </>
  )
}
export const query = graphql`
  query {
    file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


export default About