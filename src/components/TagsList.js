import React from "react";
import styled from "styled-components";

const TagsList = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <Ul>
      {tags.map((tag) => (
        <Li key={tag}>{tag}</Li>
      ))}
    </Ul>
  );
};

export default TagsList;

const Ul = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  border: 0;
  float: left;

  font-family: "Nunito, Noto Sans KR", sans-serif;
  font-size: 0.5rem;
  color: hsl(0, 0%, 48%);
  text-transform: uppercase;
  display: inline-block;
  background-color: #fff;

  border-radius: 10px;
  margin: 0.3rem;
  padding: 0.2rem 0.5rem;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
`;
