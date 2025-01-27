import { useParams } from 'react-router';
import './productPage.scss';
import { useEffect, useState } from 'react';
import { getProductById } from '../../apis/productsApi';
import formatCurrency from '../../apis/utils/formatCurrency';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
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
    console.log('MARTIN_LOG=> params', params);
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
            <button className='product-action-button'>
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
