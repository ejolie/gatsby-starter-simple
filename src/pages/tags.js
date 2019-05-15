import React from "react";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";
import { Container, Columns, Column, Title } from "bloomer";
import styled from "styled-components";

import Layout from "../components/Layout";

const TagsPage = (props) => {
  const { data } = props;
  const tags = data.allMarkdownRemark.group;
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
              isSize={2}
              hasTextColor="dark"
              style={{
                fontFamily: "Nunito, Noto Sans KR",
                fontWeight: 400,
                marginBottom: "1.7rem",
                marginLeft: "0.3rem"
              }}
            >
              Tags
            </Title>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {tags.map((tag) => (
                <TagBox key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </TagBox>
              ))}
            </ul>
          </Column>
        </Columns>
      </Container>
    </Layout>
  );
};

const TagBox = styled.div`
  font-family: "Nunito, Noto Sans KR", sans-serif;
  text-transform: uppercase;
  display: inline-block;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 15px;
  margin: 0.3rem;
  padding: 0.2rem 0.7rem;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  color: #7a7a7a;

  a {
    box-shadow: none;
    font-size: 0.8rem;
    color: hsl(0, 0%, 48%);
  }

  :link {
    color: hsl(0, 0%, 48%);
  }

  :visited {
    color: hsl(0, 0%, 48%);
  }

  :hover {
    transition-delay: 0s !important;
    border: 1px solid hsl(171, 100%, 41%);

    a {
      color: hsl(171, 100%, 41%);
    }
  }
`;

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
