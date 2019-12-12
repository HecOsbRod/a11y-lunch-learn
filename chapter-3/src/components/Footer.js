import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="copy">
        <span className="copy__name">{this.props.name}</span>
        <span className="copy__title">{this.props.title}</span>
        <span className="copy__number">
          {this.props.slideNumber < 10
            ? "0" + this.props.slideNumber
            : this.props.slideNumber}
        </span>
      </footer>
    );
  }
}

Footer.defaultProps = {
  name: "Design implications",
  title: "Accessibility Lunch & Learn - Chapter 3"
};

export default Footer;
