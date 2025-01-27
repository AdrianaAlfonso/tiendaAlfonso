import React from "react";
import BotonComprar from "../BotonComprar/BotonComprar";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <h4>{item.price}</h4>

      <ItemCount stock={5} />
      <BotonComprar texto="+" />
    </div>
  );
};

export default Item;
