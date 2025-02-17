import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { useContext } from 'react';
import './item.scss';
import CustomButton from '../CustomButton/CustomButton';
import CustomLink from '../CustomLink/CustomLink';
import formatCurrency from '../../apis/utils/formatCurrency';
import { CartContext } from '../../contexts/CartContext/CartContext';

const Item = ({ item }) => {
  const { addItemToCart } = useContext(CartContext);

  return (
    item && (
      <div className='lista-producto'>
        <div className='lista-producto-img-contenedor'>
          <Link to={`/productos/${item.id}`}>
            {item.images?.length && (
              <img src={item.images[0]} alt={item.title} />
            )}
          </Link>
        </div>
        <div className='lista-producto-info'>
          <h3>{item.title}</h3>
          <h4>{formatCurrency(item.price)}</h4>
        </div>
        <div className='lista-producto-acciones'>
          <CustomLink className='customlink' to={`/productos/${item.id}`}>
            Más Info
          </CustomLink>
          <CustomButton
            onClick={() => {
              addItemToCart(item);
            }}>
            Agregar al carrito
          </CustomButton>
        </div>
      </div>
    )
  );
};

// definimos los tipos de los props
Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Item;
