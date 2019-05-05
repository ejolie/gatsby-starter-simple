import React from "react";
import { Link, graphql } from "gatsby";
import { Section, Title, Content, Container } from "bloomer";
import { DiscussionEmbed } from "disqus-react";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { rhythm, scale } from "../utils/typography";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    const disqusShortname = "ejolie";
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title
    };

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Container
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
          }}
        >
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <Section style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Title
              style={{
                fontFamily: "Nunito, Noto Sans KR",
                fontSize: "2.5rem",
                fontWeight: 700
              }}
              hasTextColor="dark"
            >
              {post.frontmatter.title}
            </Title>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
                marginTop: rhythm(-0.5)
              }}
              className="has-text-grey"
            >
              {post.frontmatter.date}
            </p>
          </Section>
          <Content>
            <div
              style={{ fontFamily: "Nunito, Noto Sans KR" }}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Content>
          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />
          <Bio />
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              marginBottom: "3rem"
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
      }
    }
  }
`;
