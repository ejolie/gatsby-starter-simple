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
import styled, { keyframes } from "styled-components";

import Nav from "./Nav";

const Header = (props) => {
  const { title, onClickNav, isActive } = props;
  return (
    <Hero isColor="white" isSize="small">
      <Nav title={title} onClickNav={onClickNav} isActive={isActive} />
      <HeroBody className="has-background-light">
        <Container>
          <Columns isCentered>
            <StyledColumn isSize="3/4">
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
                <Heart role="img" aria-label="Heart">
                  💓
                </Heart>
              </Subtitle>
            </StyledColumn>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>
  );
};

const jump = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

const Heart = styled.span`
  display: inline-block;
  animation: ${jump} 0.4s ease infinite alternate;
  animation-play-state: paused;
`;

const StyledColumn = styled(Column)`
  margin-top: 3rem;
  margin-right: 2rem;
  margin-left: 2rem;

  :hover ${Heart} {
    animation-play-state: running;
  }
`;

export default Header;
