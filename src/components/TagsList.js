import React from "react";
import { Link } from "gatsby";
import { kebabCase } from "lodash";
import styled from "styled-components";

const TagsList = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {tags.map((tag) => (
          <TagBox key={tag}>
            <Link style={{ boxShadow: "none" }} to={`/tags/${kebabCase(tag)}/`}>
              {tag}
            </Link>
          </TagBox>
        ))}
      </ul>
    </>
  );
};

const TagBox = styled.div`
  display: inline-block;
  margin: 0 0.4rem 0.1rem 0rem;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  font-size: 0.6rem;
  text-transform: uppercase;
  background-color: #fff;
  color: #7a7a7a;

  a {
    box-shadow: none;
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

export default TagsList;
