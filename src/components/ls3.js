import React, { Component } from "react";

class LS3 extends Component {
  render() {
    var users = [
      {
        id: 1,
        name: "Nguyễn Văn A",
        age: 10
      },
      {
        id: 2,
        name: "Nguyễn Văn B",
        age: 11
      },
      {
        id: 3,
        name: "Nguyễn Văn C",
        age: 12
      },
      {
        id: 4,
        name: "Nguyễn Văn D",
        age: 15
      }
    ];

    var elements = users.map((user, index) => {
      //Giống vòng lặp for
      return (
        <div key={user.id}>
          <p>Tên: {user.name}</p>
          <p>Tuổi: {user.age}</p>
        </div>
      );
    });

    return <div>{elements}</div>;
  }
}

export default LS3;
