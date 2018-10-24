import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import LS3 from "./components/ls3";

class App extends Component {
  onClick() {
    alert("Hú de");
  }
  render() {
    var products = [
      {
        id: 1,
        name: "Samsung Galaxy S9",
        price: 18000000,
        image:
          "https://cdn.tgdd.vn/Products/Images/42/113263/samsung-galaxy-s9-black-600x600.jpg",
        status: true
      },
      {
        id: 2,
        name: "Samsung Galaxy Note 9",
        price: 19000000,
        image:
          "https://cdn.tgdd.vn/Products/Images/42/154897/samsung-galaxy-note-9-black-400x460-400x460.png",
        status: true
      },
      {
        id: 3,
        name: "Iphone 6 Cũ",
        price: 6000000,
        image:
          "https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg",
        status: false
      }
    ];
    ////////
    let elements = products.map((prd, index) => {
      let result = "";
      if (prd.status) {
        result = (
          <Products
            key={prd.id}
            name={prd.name}
            price={prd.price}
            image={prd.image}
          />
        );
      }
      return result;
    });

    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">{elements}</div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.onClick}
            >
              Click Me!
            </button>
          </div>
        </div>

        <LS3 />
      </div>
    );
  }
}

export default App;
