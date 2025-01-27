const baseUrl = "https://fakestoreapi.com/products";

export const getAllProducts = async () => {
    console.log("ADRIANA=> getAllProducts")
  const products = await fetch(baseUrl).then((res) => res.json());

  return products;
};

export const getProductById = async (id) => {
  const product = await fetch(`${baseUrl}/${id}`).then((res) => res.json());

  return product;
};

