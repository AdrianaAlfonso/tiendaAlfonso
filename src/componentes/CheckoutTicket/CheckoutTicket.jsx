import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import './checkoutTicket.scss';

const CheckoutTicket = ({ onClose }) => {
  const { cart } = useContext(CartContext);
  const purchaseDate = new Date().toLocaleString();

  return (
    cart?.items?.length && (
      <>
        <div className='checkout-ticket-overlay' onClick={onClose}></div>
        <div className='checkout-ticket-modal'>
          <button
            className='checkout-ticket-modal-close-button'
            onClick={onClose}>
            X
          </button>
          <div className='checkout-ticket-header'>
            <h1>TIENDA ALFONSO</h1>
            <h1>CoderReact</h1>
            <p>Fecha de compra: {purchaseDate}</p>
          </div>
          <div className='checkout-ticket-body'>
            {cart?.items?.length ? (
              <>
                <table className='ticket-items-table'>
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Precio Unitario</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.items?.map((item) => (
                      <tr key={item.id} className='ticket-item'>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${(item.quantity * item.price).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className='ticket-total'>
                  <h2>Total de la compra:</h2>
                  <h2>${cart.totalAmount.toFixed(2)}</h2>
                </div>
              </>
            ) : (
              <h2>No hay productos en el carrito</h2>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default CheckoutTicket;
