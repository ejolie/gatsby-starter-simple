import React from "react";
import {
  Hero,
  HeroBody,
  Container,
  Columns,
  Column,
  Title,
  Subtitle
} from "bloomer";

import Nav from "./Nav";

const Header = (props) => {
  const { title } = props;
  return (
    <Hero isColor="white" isSize="small">
      <Nav title={title} />
      <HeroBody className="has-background-light">
        <Container>
          <Columns isCentered>
            <Column
              isSize="3/4"
              style={{
                marginTop: "3rem",
                marginRight: "2rem",
                marginLeft: "2rem"
              }}
            >
              <Title
                isSize={2}
                hasTextColor="dark"
                style={{
                  fontFamily: "Nunito, Noto Sans KR",
                  fontWeight: 400,
                  marginBottom: "1.7rem"
                }}
              >
                My Dev Blog
              </Title>
              <Subtitle
                isSize={3}
                className="has-text-grey"
                style={{ fontFamily: "Nunito, Noto Sans KR", fontWeight: 300 }}
              >
                I think, write, and code.{" "}
                <span role="img" aria-label="Rocket">
                  🚀
                </span>
              </Subtitle>
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>
  );
};

export default Header;
