import React from "react";
import {
  HeroHeader,
  Navbar,
  Container,
  NavbarBrand,
  NavbarItem,
  NavbarEnd
} from "bloomer";
import { Link } from "gatsby";

const Nav = (props) => {
  const { title } = props;
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
                    fontWeight: 700,
                    fontSize: "1rem"
                  }}
                >
                  {title}
                </h2>
              </Link>
            </NavbarItem>
          </NavbarBrand>
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
              <Link to="/about" style={{ boxShadow: "none", color: "inherit" }}>
                About
              </Link>
            </NavbarItem>
          </NavbarEnd>
        </Container>
      </Navbar>
    </HeroHeader>
  );
};

export default Nav;
