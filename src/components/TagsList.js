import React from "react";
import { Link } from "gatsby";
import { kebabCase } from "lodash";
import styled from "styled-components";

const TagsList = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  console.log(tags);

  return (
    <>
      <TagBox>
        <span style={{ fontSize: "1.2rem" }}>🔖</span>
        {tags.map((tag) => (
          <TagItem key={tag}>
            <Link style={{ boxShadow: "none" }} to={`/tags/${kebabCase(tag)}/`}>
              {tag}
            </Link>
          </TagItem>
        ))}
      </TagBox>
    </>
  );
};

export default TagsList;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0;
`;

const TagItem = styled.span`
  margin: 0 0.2rem 0 0.2rem;
  padding: 0.2rem 0.5rem;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  font-size: 0.6rem;
  text-transform: uppercase;
  background-color: #fff;

  a {
    box-shadow: none;
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
