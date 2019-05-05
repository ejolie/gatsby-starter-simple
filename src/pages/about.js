import React from "react";
import Layout from "../components/Layout";
import { Title, Columns } from "bloomer";

const About = (props) => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Columns style={{ minHeight: "60vh" }}>
        <Title isSize={3} style={{ marginLeft: "1rem" }}>
          Work in progress
        </Title>
      </Columns>
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
