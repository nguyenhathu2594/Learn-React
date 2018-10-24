import React, { Component } from "react";

class Products extends Component {
  //Sự kiện click truyền tham số
  onAddToCart = () => {
    alert(this.props.name + " - Giá:" + this.props.price);
  };
  render() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="thumbnail">
          <img src={this.props.image} alt={this.props.name} />
          <div className="caption">
            <h3>{this.props.name}</h3>
            <p>{this.props.price} VNĐ</p>
            <p>
              <a
                href="#top"
                className="btn btn-primary"
                onClick={this.onAddToCart}
              >
                Mua
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
