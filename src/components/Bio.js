/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5)
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`
              }}
              imgStyle={{
                borderRadius: `50%`
              }}
            />
            <p
              className="has-text-dark"
              style={{ fontFamily: "Nunito, Noto Sans KR", fontWeight: 400 }}
            >
              Written by <strong>{author}</strong>
              {` `}
              <br />I love #JS #Gatsby #React
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
