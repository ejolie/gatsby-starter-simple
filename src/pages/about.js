import React from "react";
import { Container, Column, Columns, Title, Subtitle } from "bloomer";
import styled, { keyframes } from "styled-components";

import Layout from "../components/Layout";

const About = (props) => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
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
              isSize={3}
              hasTextColor="dark"
              style={{
                fontFamily: "Nunito, Noto Sans KR",
                fontWeight: 400,
                marginBottom: "1.7rem"
              }}
            >
              <Hand role="img" aria-label="Shaking hand">
                👋🏻
              </Hand>{" "}
              Hello, I'm Eunjeong.
              <br />
            </Title>
            <Subtitle isSize={4} style={{ marginTop: "1rem" }}>
              I'm Front-end Developer based in Seoul.{" "}
              <span role="img" aria-label="South Korea">
                🇰🇷
              </span>
              <br /> I love to make things with JavaScript.
            </Subtitle>
          </Column>
        </Columns>
      </Container>
    </Layout>
  );
};

const shake = keyframes`
  10% {
    transform: rotate(-20deg);
  }

  20% {
    transform: rotate(10deg);
  }

  30%, 100% {
    transform: rotate(0deg);
  }
`;

const Hand = styled.span`
  display: inline-block;
  animation: ${shake} 2s 1.5;
  transform-origin: right bottom;
  animation-play-state: running;
`;

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
