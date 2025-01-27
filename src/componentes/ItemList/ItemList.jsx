import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div>
      {items?.length &&
        items.map((item) => {
          return <Item item={item} />;
        })}
    </div>
  );
};

export default ItemList;
