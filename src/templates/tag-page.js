import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Section, Title } from "bloomer";
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
          {tagHeader}
          <TagHighlight>{tag}</TagHighlight>
        </Title>
        <Section style={{ paddingTop: "1rem" }}>
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
        <Section>
          <Link to="/tags">← All tags</Link>
        </Section>
      </Section>
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
  position: relative;
  text-decoration: none;

  :before {
    content: "";
    position: absolute;
    left: -5px;
    bottom: -1px;
    width: 110%;
    height: 8px;
    background-color: hsl(171, 100%, 41%);
    z-index: -1;
  }
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
