import { createItemDoc, getAllFirebaseItem, getFirebaseItem } from './firebase';

const firebaseCollectionName = 'products';

export const getAllProducts = async () => {
  const products = await getAllFirebaseItem(firebaseCollectionName);
  return products;
};

export const getProductById = async (id) => {
  const product = await getFirebaseItem(firebaseCollectionName, id);

  return product;
};

export const createPurchase = async (cart) => {
  // transformamos el carrito en un pago
  const purchase = {
    purchase_date: new Date().toISOString(),
    products: cart.items.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
        total: (product.price * product.quantity).toFixed(2),
      };
    }),
    total: cart.totalAmount.toFixed(2),
  };
  console.log('AdrianaLog: createPurchase -> purchase', purchase);
  // guardamos el pago en la base de datos
  await createItemDoc('purchases', purchase);
};
