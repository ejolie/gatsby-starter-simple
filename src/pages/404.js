import React from "react";
import { graphql } from "gatsby";
import { Container, Columns, Column, Title, Subtitle } from "bloomer";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
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
                Not Found
              </Title>
              <Subtitle isSize={4}>
                You just hit a route that doesn&#39;t exist...
                <span role="img" aria-label="Sad">
                  😂
                </span>
              </Subtitle>
            </Column>
          </Columns>
        </Container>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
