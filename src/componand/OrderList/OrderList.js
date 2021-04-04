import React from "react";

const OrderList = (props) => {
  //console.log(props);
  const { image, name, price,date } = props.order;
  return (
    <tr>
      <td>
        <img
          style={{ height: "50px", width: "50px", borderRadius: "30px" }}
          src={image}
          alt=""
        />
      </td>
      <td>{date}</td>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default OrderList;
