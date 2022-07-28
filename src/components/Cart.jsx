import React, { Component } from "react";

export class Cart extends Component {
  closeButtonRef = React.createRef();
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cart
              </h5>
              <button
                ref={this.closeButtonRef}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cart.map((item) => {
                    return (
                      <tr key={item.product.id}>
                        <td>{item.product.id}</td>
                        <td>{item.product.name}</td>
                        <td>
                          <img
                            style={{ width: 50 }}
                            src={item.product.image}
                            alt=""
                          />
                        </td>
                        <td>
                          <button
                            onClick={() =>
                              this.props.decreaseCart(item.product.id)
                            }
                            className="btn btn-info"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              this.props.increaseCart(item.product.id)
                            }
                            className="btn btn-info"
                          >
                            +
                          </button>
                        </td>
                        <td>{item.product.price}</td>
                        <td>{item.product.price * item.quantity}</td>
                        <td>
                          <button
                            onClick={() =>
                              this.props.deleteCart(item.product.id)
                            }
                            className="btn btn-danger"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => {
                  this.props.clearCart();
                  this.closeButtonRef.current.click();
                }}
                type="button"
                className="btn btn-primary"
              >
                Paid
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
