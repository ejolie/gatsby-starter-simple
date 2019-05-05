import React from "react";
import { Link, graphql } from "gatsby";
import { Columns, Column, Media, Title, MediaContent, Content } from "bloomer";
import "bulma/css/bulma.css";
import styled from "styled-components";

// import "../utils/prism-duotone-dark.css";
import "../utils/global.css";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <Columns isCentered key={node.fields.slug}>
              <StyledColumn isSize="3/4">
                <Media style={{ padding: "1rem" }}>
                  <MediaContent>
                    <Content>
                      <Title
                        style={{
                          marginBottom: "0.5rem"
                        }}
                        isSize={4}
                      >
                        <Link
                          style={{
                            boxShadow: "none",
                            color: "hsl(0, 0%, 21%)",
                            fontFamily: "Nunito, Noto Sans KR",
                            fontWeight: "400"
                          }}
                          to={node.fields.slug}
                        >
                          {title}
                        </Link>
                      </Title>
                      <small
                        className="has-text-grey"
                        style={{
                          fontFamily: "Nunito, Noto Sans KR",
                          fontWeight: "400"
                        }}
                      >
                        {node.frontmatter.date}
                      </small>
                      <p
                        hasTextColor="dark"
                        style={{
                          fontFamily: "Nunito, Noto Sans KR",
                          fontWeight: "400",
                          fontSize: "1.2rem",
                          marginTop: "0.5rem"
                        }}
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt
                        }}
                      />
                    </Content>
                  </MediaContent>
                </Media>
              </StyledColumn>
            </Columns>
          );
        })}
      </Layout>
    );
  }
}

const StyledColumn = styled(Column)`
  background-color: #fff;
  border-radius: 10px;
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  -moz-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);

  :hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.16);
    transform: translate(0, -10px);
    transition-delay: 0s !important;
  }
`;

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
