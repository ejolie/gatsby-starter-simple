import React from "react";
import { Section, Container } from "bloomer";

import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = <Header title={title} />;
    } else {
      header = <Nav title={title} />;
    }
    return (
      <div
        style={{
          backgroundColor: "hsl(0, 0%, 96%)",
          minHeight: "100vh"
        }}
      >
        {header}
        <Section
          className="contents"
          style={{
            backgroundColor: "hsl(0, 0%, 96%)"
          }}
        >
          <Container>{children}</Container>
        </Section>
        <Footer />
      </div>
    );
  }
}

export default Layout;
