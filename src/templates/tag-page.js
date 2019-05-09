import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Container, Section, Columns, Column, Title } from "bloomer";
import styled from "styled-components";

import Layout from "../components/Layout";

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const siteTitle = data.site.siteMetadata.title;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with `;

  return (
    <Layout location={location} title={siteTitle}>
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
              {tagHeader}
              <TagHighlight>{tag}</TagHighlight>
            </Title>
            <Section
              style={{ paddingTop: "1rem", paddingLeft: 0, paddingRight: 0 }}
            >
              <ul>
                {edges.map(({ node }) => {
                  const { slug } = node.fields;
                  const { title, date } = node.frontmatter;
                  return (
                    <li key={slug}>
                      <Link
                        style={{
                          fontSize: "1.3rem",
                          marginRight: "0.5rem",
                          lineHeight: "1.7"
                        }}
                        to={slug}
                      >
                        {title}
                      </Link>
                      <small>{date}</small>
                    </li>
                  );
                })}
              </ul>
            </Section>
            <Section style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Link to="/tags">← All tags</Link>
            </Section>
          </Column>
        </Columns>
      </Container>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
};

const TagHighlight = styled.span`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 60%,
    hsla(171, 94%, 61%, 0.5) 50% );
  );
`;

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
