import { useEffect, useState } from 'react';
import './itemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { getAllProducts } from '../../apis/productsApi';

const ItemListContainer = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className='lista-productos-contenedor'>
      {products && <ItemList items={products} />}
    </div>
  );
};

export default ItemListContainer;
