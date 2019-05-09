import React from "react";
import {
  HeroHeader,
  Navbar,
  Container,
  NavbarBrand,
  NavbarItem,
  NavbarEnd,
  NavbarBurger,
  NavbarMenu
} from "bloomer";
import { Link } from "gatsby";

const Nav = (props) => {
  const { title, onClickNav, isActive } = props;
  return (
    <HeroHeader>
      <Navbar style={{ backgroundColor: "#f5f5f5" }}>
        <Container>
          <NavbarBrand>
            <NavbarItem style={{ marginRight: 5, marginLeft: 5 }}>
              <Link
                to="/"
                style={{ boxShadow: "none", color: "hsl(0, 0%, 29%)" }}
              >
                <h2
                  className="has-text-dark"
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: 400,
                    fontSize: "1rem"
                  }}
                >
                  {title}
                </h2>
              </Link>
            </NavbarItem>
            <NavbarBurger
              isDisplay="mobile"
              isActive={isActive}
              onClick={onClickNav}
              style={{ backgroundColor: "#f5f5f5" }}
            />
          </NavbarBrand>
          <NavbarMenu
            isDisplay={["desktop", "widescreen"]}
            isActive={isActive}
            onClick={onClickNav}
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <NavbarEnd>
              <NavbarItem
                className="has-text-grey"
                style={{
                  fontFamily: "Nunito",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  textTransform: "uppercase"
                }}
              >
                <Link to="/" style={{ boxShadow: "none", color: "inherit" }}>
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem
                className="has-text-grey"
                style={{
                  fontFamily: "Nunito",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  textTransform: "uppercase"
                }}
              >
                <Link
                  to="/about"
                  style={{ boxShadow: "none", color: "inherit" }}
                >
                  About
                </Link>
              </NavbarItem>
              <NavbarItem
                className="has-text-grey"
                style={{
                  fontFamily: "Nunito",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  textTransform: "uppercase"
                }}
              >
                <Link
                  to="/tags"
                  style={{ boxShadow: "none", color: "inherit" }}
                >
                  Tags
                </Link>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Navbar>
    </HeroHeader>
  );
};

export default Nav;
