import React from "react";
// import "./figure.scss";
import familyGuy from "../images/family-guy.gif";

class Figure extends React.Component {
  render() {
    // let img = new Image();
    // img.src = require(this.props.src);

    return (
      <figure className="image image--large">
        {/* img */}
        <img src={familyGuy} alt={this.props.alt} />
        <figcaption className="image--caption">{this.props.caption}</figcaption>
      </figure>
    );
  }
}

export default Figure;
