import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import Link from "gatsby-link";
import styled from "styled-components";
import { navBackgroundColor, primaryText } from "../colors";

const StyledNavbar = styled(Navbar)`
  background-color: ${navBackgroundColor};
  padding-top: 0;
  padding-bottom: 0;
`;

const Text = styled(Link)`
  color: ${primaryText};
  cursor: pointer;
`;

const NavText = styled(Text)`
  &:hover {
    background-color: ${primaryText};
    color: #000 !important;
  }
`;

class Header extends React.Component {
  state = {
    isOpen: false,
  };

  menuItems = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/about",
      name: "About",
    },
    {
      to: "/blog",
      name: "Blog",
    },
    {
      to: "/contact",
      name: "Contact",
    },
  ];

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  renderNavItems = () =>
    this.menuItems.map(({ to, name }) => (
      <NavItem key={name}>
        <NavText exact activeClassName="active" className="nav-link" to={to}>
          {name}
        </NavText>
      </NavItem>
    ));

  render() {
    return (
      <StyledNavbar color="faded" dark expand="md">
        <Container>
          <Text className="navbar-brand" to="/">
            Tangential
          </Text>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.renderNavItems()}
            </Nav>
          </Collapse>
        </Container>
      </StyledNavbar>
    );
  }
}

export default Header;
