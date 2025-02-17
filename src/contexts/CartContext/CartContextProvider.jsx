/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { CartContext } from './CartContext';

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const computeTotalAmount = (cart) => {
  let total = 0;

  if (!cart?.items.length) return total;

  cart.items.forEach((product) => {
    product.totalPrice = parseFloat(
      (product.price * product.quantity).toFixed(2)
    );
    total += product.totalPrice;
  });

  return total;
};

export const CartContextProvider = ({ children }) => {
  const [cart, updateCart] = useState(null);

  const persistCart = (cartData) => {
    updateCart(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  const retrieveCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      persistCart(JSON.parse(storedCart));
    } else {
      persistCart(JSON.parse(JSON.stringify(defaultCart)));
    }
  };

  useEffect(() => {
    retrieveCart();
  }, []);

  const addItemToCart = (product, quantity = 1) => {
    quantity = Number(quantity);

    const existingProductIndex = cart.items.findIndex(
      (item) => item.id === product.id
    );
    const updatedCart = { ...cart };
    if (existingProductIndex !== -1) {
      updatedCart.items[existingProductIndex].quantity += quantity;
    } else {
      updatedCart.items = [...cart.items, { ...product, quantity: quantity }];
    }
    updatedCart.totalAmount = computeTotalAmount(updatedCart);
    persistCart(updatedCart);
  };

  const removeItemFromCart = (product) => {
    const existingProductIndex = cart.items.findIndex(
      (item) => item.id === product.id
    );
    const updatedCart = { ...cart };
    if (existingProductIndex !== -1) {
      if (updatedCart?.items[existingProductIndex].quantity > 1) {
        updatedCart.items[existingProductIndex].quantity -= 1;
      } else {
        updatedCart.items.splice(existingProductIndex, 1);
      }
    }
    updatedCart.totalAmount = computeTotalAmount(updatedCart);
    persistCart(updatedCart);
  };

  const deleteItemFromCart = (product) => {
    const updatedCart = { ...cart };
    updatedCart.items = updatedCart.items.filter(
      (item) => item.id !== product.id
    );
    updatedCart.totalAmount = computeTotalAmount(updatedCart);
    persistCart(updatedCart);
  };

  const emptyCart = () => {
    persistCart(JSON.parse(JSON.stringify(defaultCart)));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
        emptyCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
