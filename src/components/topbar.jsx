import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
height: 5px;
width: ${(props) => props.width};
background-color:${(props) => props.theme.mg_blue};
`;

const BarContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 5px;
z-index: 99;
background-color:${(props) => props.theme.mg_blue_transparent};
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3),
`;

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.scrollProgress = this.scrollProgress.bind(this);

    this.state = {
      scrolled: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollProgress);
  }

  componentWillUnomunt() {
    window.removeEventListener('scroll', this.scrollProgress);
  }

  scrollProgress() {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight 
    - document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    console.log(scrolled);

    this.setState({
      scrolled,
    });
  }

  render() {
    return (
      <BarContainer>
        <Bar width={ this.state.scrolled } />
      </BarContainer>
    );
  }
}

export default Topbar;
