import { useParams } from 'react-router';
import './productPage.scss';
import { useContext, useEffect, useState } from 'react';
import { getProductById } from '../../apis/productsApi';
import formatCurrency from '../../apis/utils/formatCurrency';
import ItemCount from '../../componentes/ItemCount/ItemCount';
import { CartContext } from '../../contexts/CartContext/CartContext';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useContext(CartContext);
  const params = useParams();

  useEffect(() => {
    if (params?.productId) {
      getProductById(params.productId)
        .then((response) => {
          console.log(response);
          setProduct({
            images: response.images,
            title: response.title,
            description: response.description,
            price: response.price,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [params]);

  return product ? (
    <div className='product-page-container'>
      <div className='product-page'>
        <div className='product-image'>
          <img
            src={product.images[0]}
            alt={product.title}
            className='product-image'
          />
        </div>
        <div className='product-details'>
          <div className='product-details-info'>
            <h1 className='product-title'>{product.title}</h1>
            <p className='product-description'>{product.description}</p>
            <p className='product-price'>{formatCurrency(product.price)}</p>
          </div>
          <div className='product-actions'>
            <ItemCount stock={10} setValue={setQuantity} value={quantity} />
            <button
              className='product-action-button'
              onClick={() => {
                addItemToCart(product, quantity);
              }}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <h1>...Cargando</h1>
    </>
  );
};

export default ProductPage;
