import React from "react";
import { Title, Section, Subtitle } from "bloomer";

import Layout from "../components/Layout";

const About = (props) => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Section
        style={{
          minHeight: "60vh",
          paddingTop: "1.5rem",
          marginLeft: "7.5rem",
          marginRight: "7.5rem"
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
          <span role="img" aria-label="Shaking hand">
            👋🏻
          </span>{" "}
          Hello, I'm Eunjeong. <br />
        </Title>
        <Subtitle isSize={3} style={{ marginTop: "1rem" }}>
          I'm Front-end Developer based in{" "}
          <span role="img" aria-label="South Korea">
            🇰🇷
          </span>{" "}
          Seoul.
          <br /> I love to make things with JavaScript.
        </Subtitle>
        <span>
          <a>Portfolio</a>
        </span>{" "}
        <span>
          <a>Github</a>
        </span>
      </Section>
    </Layout>
  );
};

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
