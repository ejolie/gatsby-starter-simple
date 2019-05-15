import React from "react";
import { Link, graphql } from "gatsby";
import { Section, Title, Content, Container } from "bloomer";
import { DiscussionEmbed } from "disqus-react";
import styled from "styled-components";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import TagsList from "../components/TagsList";
import { rhythm } from "../utils/typography";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    const disqusShortname = ""; // Write your disqus shortname
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title
    };

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Container
          style={{
            maxWidth: rhythm(24),
            marginRight: "auto",
            marginLeft: "auto"
          }}
        >
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <Section style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 0 }}>
            <Content isSize="medium">
              <Title
                style={{
                  fontFamily: "Nunito, Noto Sans KR",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem"
                }}
              >
                {post.frontmatter.title}
              </Title>
              <p
                style={{
                  fontFamily: "Nunito, Noto Sans KR",
                  fontSize: "0.8rem",
                  fontWeight: "300",
                  marginTop: "1rem",
                  marginRight: "0.3rem",
                  marginBottom: "0.1rem",
                  marginLeft: "0.1rem",
                  display: "block"
                }}
                className="has-text-grey"
              >
                {post.frontmatter.date}
              </p>
              <TagsList tags={post.frontmatter.tags} />
            </Content>
          </Section>
          <Content style={{ marginBottom: rhythm(3) }}>
            <div
              style={{ fontFamily: "Nunito, Noto Sans KR" }}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Content>
          <Bio />
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              marginBottom: "2rem"
            }}
          >
            <li>
              {next && (
                <Link
                  to={next.fields.slug}
                  rel="next"
                  style={{ color: "inherit" }}
                >
                  ← {next.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {previous && (
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  style={{ color: "inherit" }}
                >
                  {previous.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </Container>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
