import React from "react";

class Card extends React.Component {
  render() {
    let showA11yLabel = this.props.showA11yLabel ? "card--show-al" : "";
    let showElementType = this.props.showElementType ? "card--show-et" : "";
    let showFocusOrder = this.props.showFocusOrder ? "card--show-fo" : "";
    let labels = `${showElementType} ${showA11yLabel} ${showFocusOrder}`;
    let urlLabel =
      this.props.version === "wireframe" ? "Link" : "Original post at";
    let instagram = this.props.instagram ? (
      <>
        {urlLabel}: <a href={this.props.instagram}>{this.props.socialMedia}</a>
      </>
    ) : null;
    let button = this.props.showButton ? (
      <button className="card__button button button--icon button--small">
        <span class="fa fa-search"></span>
      </button>
    ) : null;

    let version = this.props.source ? "card--final" : "card--wireframe";
    let image =
      this.props.source && this.props.alt ? (
        <img src={this.props.source} alt={this.props.alt} />
      ) : null;
    return (
      <li className={`card ${version} ${labels}`}>
        <div className="card__img">{image}</div>
        <div className="card__text">
          <h2>
            <a href="#">{this.props.name}</a>
          </h2>
          <p>{this.props.description}</p>
          {button}
          <small>{instagram}</small>
        </div>
      </li>
    );
  }
}

Card.defaultProps = {
  socialMedia: "Instagram",
  version: "wireframe",
  showButton: "true"
};

export default Card;
