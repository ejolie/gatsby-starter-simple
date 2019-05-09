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
      <Navbar>
        <Container>
          <NavbarBrand>
            <NavbarItem className="has-text-grey" style={{ marginRight: 5 }}>
              <Link
                to="/"
                style={{ boxShadow: "none", color: "hsl(0, 0%, 29%)" }}
              >
                <h2
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: 600,
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
            />
          </NavbarBrand>
          <NavbarMenu
            isDisplay={["desktop", "widescreen"]}
            isActive={isActive}
            onClick={onClickNav}
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
