import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card mb-4 cm-card">
        <img
          src={this.props.item.url}
          className="card-img-top"
          alt={this.props.item.title}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.item.title}</h5>
          <p className="card-text">{this.props.item.description}</p>
          <div className="container">
            <div className="col-6">
              <p className="card-text">
                {this.props.item.currency_code}
                {this.props.item.price}
              </p>
            </div>
            <div className="col-6">
              <p className="card-text">
                {this.props.item.quantity}
                {this.props.item.item_weight_unit}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
