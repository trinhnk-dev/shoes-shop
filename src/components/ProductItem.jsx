import React, { Component } from "react";
import "./productItem.css";

export class ProductItem extends Component {
  render() {
    const { name, image, price } = this.props.prod;
    return (
      <div className="card mb-4 p-3  h-100">
        <div className="img-shoes">
          <img src={image} className="w-100 d-block " />

          <h5 className="price">{price}$</h5>
        </div>
        <h3>{name}</h3>

        <div>
          <button
            onClick={() => this.props.selectProduct(this.props.prod)}
            className="btn btn-info me-3 detail"
          >
            Detail
          </button>
          <button
            onClick={() => this.props.addToCart(this.props.prod)}
            className="btn btn-dark add"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
