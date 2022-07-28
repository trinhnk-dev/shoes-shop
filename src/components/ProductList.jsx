import React, { Component } from "react";
import ProductItem from "./ProductItem";

export class ProductList extends Component {
  render() {
    console.log(this.props.products);
    return (
      <div className="row">
        {this.props.products.map((item) => {
          return (
            <div key={item.id} className="col-3 mb-4">
              <ProductItem
                addToCart={this.props.addToCart}
                selectProduct={this.props.selectProduct}
                prod={item}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
