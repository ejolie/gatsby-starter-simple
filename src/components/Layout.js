import React from "react";
import { Section, Container } from "bloomer";

import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  onClickNav = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <Header
          onClickNav={this.onClickNav}
          isActive={this.state.isActive}
          title={title}
        />
      );
    } else {
      header = (
        <Nav
          onClickNav={this.onClickNav}
          isActive={this.state.isActive}
          title={title}
        />
      );
    }
    return (
      <>
        <div
          style={{
            minHeight: "100vh"
          }}
        >
          {header}
          <Section className="contents">{children}</Section>
        </div>
        <Footer />
      </>
    );
  }
}

export default Layout;
