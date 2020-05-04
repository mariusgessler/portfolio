import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
`
const Nav = styled.nav`
`

const Ul = styled.ul`
list-style: none;
margin: 0 auto;
display: flex;
justify-content: flex-end;
margin:0;
padding: 0`

const Li = styled.li`
`

const Links = styled(Link)`
margin: 15px;
font-size: 0.75em;
color:${props => props.theme.mg_grey}
    &:hover {
        color: ${props => props.theme.mg_blue}
    }
}`

// If current page is "about", don't <Link to="about"> 
const Header = ({about}) => (

    <HeaderContainer>
      <Nav>
        <Ul>
          <Li>
            <Links to="/">Home</Links>
          </Li>
          {!about ? 
          <Li>
            <Links to="about">About me</Links> 
          </Li>
          : null
          }
        </Ul>
      </Nav>
    </HeaderContainer>
 
)


export default Header;