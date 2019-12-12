import React from "react";
import Footer from "./Footer";

class Slide extends React.Component {
  render() {
    let footer;

    if (this.props.slideNumber) {
      footer = <Footer slideNumber={this.props.slideNumber} />;
    }

    return (
      <section className={this.props.className}>
        <div className="container">
          <div className="content">{this.props.children}</div>
          {footer}
        </div>
      </section>
    );
  }
}

export default Slide;
