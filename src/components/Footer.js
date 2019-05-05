import React from "react";
import { Footer as BulmaFooter, Content } from "bloomer";

const Footer = () => {
  return (
    <BulmaFooter id="footer" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
      <Content hasTextAlign="centered">
        <p>
          <a
            href="https://github.com/ejolie"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            Github
          </a>{" "}
          <span role="img" aria-label="Developer woman">
            👩🏻‍💻
          </span>
          <br />
          <a
            href="http://opensource.org/licenses/mit-license.php"
            style={{ color: "inherit" }}
          >
            MIT
          </a>{" "}
          License
        </p>
      </Content>
    </BulmaFooter>
  );
};

export default Footer;
