import React from "react";
import styled from "styled-components";
// import { tagToPath } from "../utils/paths";

export function TagsList({ tags, ...otherProps }) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <Ul {...otherProps}>
      {tags.map((tag) => (
        <Li key={tag}>
          <a key={tag} href={tagToPath(tag)}>
            {tag}
          </a>
        </Li>
      ))}
    </Ul>
  );
}
