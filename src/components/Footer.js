import React from "react";
import { Footer as BulmaFooter, Content } from "bloomer";

const Footer = () => {
  return (
    <BulmaFooter id="footer" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
      <Content hasTextAlign="centered">
        <p>
          © 2019{" "}
          <a
            href="https://github.com/ejolie"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            Eunjeong Park
          </a>{" "}
          <span role="img" aria-label="Developer woman">
            👩🏻‍💻
          </span>
          <br />
          Built with Gatsby
        </p>
      </Content>
    </BulmaFooter>
  );
};

export default Footer;
