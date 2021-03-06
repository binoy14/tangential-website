import React from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, Container } from "reactstrap";
import { Link } from "gatsby";
import styled from "styled-components";
import colors from "../colors";

const { navBackgroundColor, primaryText } = colors;

const StyledNavbar = styled(Navbar)`
  background-color: ${navBackgroundColor};
  padding-top: 0;
  padding-bottom: 0;
`;

const Text = styled(Link)`
  color: ${primaryText};
  cursor: pointer;
`;

const NavText = styled<any>(Text)`
  &:hover {
    background-color: ${primaryText};
    color: #000 !important;
  }
`;

interface Props {}

interface State {
  isOpen: boolean;
}

class Header extends React.Component<Props, State> {
  state = {
    isOpen: false,
  };

  menu: any;

  componentDidMount() {
    document.addEventListener("mousedown", this.handleMouseDown);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleMouseDown);
  }

  setRef = (ref: any) => {
    this.menu = ref;
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

  handleMouseDown = (e: any) => {
    if (this.menu && !this.menu.contains(e.target)) {
      this.setState({ isOpen: false });
    }
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  renderNavItems = () =>
    this.menuItems.map(({ to, name }) => (
      <NavItem key={name}>
        <NavText exact={to.toString()} activeClassName="active" className="nav-link" to={to}>
          {name}
        </NavText>
      </NavItem>
    ));

  render() {
    return (
      <div ref={this.setRef}>
        <StyledNavbar color="faded" dark expand="md">
          <Container>
            <Text className="navbar-brand" to="/">
              Binoy
            </Text>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {this.renderNavItems()}
              </Nav>
            </Collapse>
          </Container>
        </StyledNavbar>
      </div>
    );
  }
}

export default Header;
