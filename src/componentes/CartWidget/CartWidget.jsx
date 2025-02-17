import { useContext, useEffect, useState } from 'react';
import './cartWidget.scss';
import { CartContext } from '../../contexts/CartContext/CartContext';
import CheckoutTicket from '../CheckoutTicket/CheckoutTicket';
import { createPurchase } from '../../apis/productsApi';

const CartItem = ({ item }) => {
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  return (
    <div className='cart__items__list__item'>
      <div className='cart__items__list__item-image'>
        <img src={item.images?.[0]} alt='item' />
      </div>
      <div className='cart__items__list__item-info'>
        <h3>{item.title}</h3>
        <div className='cart__items__list__item-info-quantity'>
          <div className='cart__items__list__item-info-quantity-actions'>
            <button onClick={() => removeItemFromCart(item)}>-</button>
            <span>{item.quantity || 1}</span>
            <button onClick={() => addItemToCart(item)}>+</button>
          </div>
          <button onClick={() => deleteItemFromCart(item)}>Eliminar</button>
        </div>
      </div>
      <div className='cart__items__list__item-total'>
        <h3>${(item.price * item.quantity).toFixed(2)}</h3>
      </div>
    </div>
  );
};

const CartWidget = ({ cartId }) => {
  const { cart, emptyCart } = useContext(CartContext);
  const [showTicket, setShowTicket] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (showCart && cartId) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [cartId, showCart]);

  const handleShowCart = (value) => {
    setShowCart(value);
  };

  const handlePurchase = async () => {
    await createPurchase(cart);
    handleShowTicket(true);
  };

  const handleShowTicket = (value) => {
    setShowTicket(value);
    if (value === false) {
      // limpiar el carrito
      handleShowCart(false);
      emptyCart();
    }
  };

  return (
    <>
      <>
        {showTicket && (
          <CheckoutTicket onClose={() => handleShowTicket(false)} />
        )}
        {showCart && (
          <div className='cart'>
            <div className='cart__header'>
              <h2>Mi Carrito</h2>
              <button
                className='cart__header-close'
                onClick={() => handleShowCart(false)}>
                X
              </button>
            </div>
            {!loading ? (
              cart?.items?.length > 0 ? (
                <>
                  <div className='cart__items'>
                    <div className='cart__items__list'>
                      {cart.items.map((item) => (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </div>
                    <div className='cart__total'>
                      <h2>Subtotal:</h2>
                      <h2>${cart.totalAmount?.toFixed(2)}</h2>
                    </div>
                  </div>
                  <div className='cart__actions'>
                    <button>Ver Carrito</button>
                    <button
                      onClick={() => {
                        handlePurchase();
                      }}>
                      Finalizar Compra
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2>No hay productos en el carrito</h2>
                </>
              )
            ) : (
              <>
                <h2>Cargando...</h2>
              </>
            )}
          </div>
        )}
      </>
      <>
        <button onClick={() => handleShowCart(true)}>carrito</button>
      </>
    </>
  );
};

export default CartWidget;
