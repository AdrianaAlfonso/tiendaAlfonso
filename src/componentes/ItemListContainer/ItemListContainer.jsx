import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getAllProducts } from "../../apis/productsApi";

const ItemListContainer = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return <div>{products && <ItemList items={products} />}</div>;
};

export default ItemListContainer;
