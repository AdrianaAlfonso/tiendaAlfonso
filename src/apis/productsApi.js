const baseUrl = 'https://api.escuelajs.co/api/v1/products';

export const getAllProducts = async () => {
  console.log('ADRIANA=> getAllProducts');
  const products = await fetch(baseUrl).then((res) => res.json());

  // esto lo puse para solucionar un error en la api que estoy usando
  // a veces viene un mal el formato de la lista
  return products.filter(
    (product) => product.images.length > 0 && !product.images[0].includes('[')
  );
};

export const getProductById = async (id) => {
  const product = await fetch(`${baseUrl}/${id}`).then((res) => res.json());
  console.log('MARTIN_LOG=> getProductById', product);

  return product;
};
