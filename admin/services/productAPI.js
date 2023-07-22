function apiGetProductsList() {
  return axios({
    url: `https://64b6ce1adf0839c97e162662.mockapi.io/Products`,
    method: "GET",
  });
}

function apiGetProducts(searchValue) {
  return axios({
    url: `https://64b6ce1adf0839c97e162662.mockapi.io/Products`,
    method: "GET",
    params: {
      name: searchValue || undefined,
    },
  });
}

function apiGetProductById(productId) {
  return axios({
    url: `https://64a6ad14096b3f0fcc8042cd.mockapi.io/products/${productId}`,
    method: "GET",
  });
}
// product = {name: "...", price: 1000, image: "...", type: "..."}
function apiCreateProduct(product) {
  return axios({
    url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/products",
    method: "POST",
    data: product,
  });
}

function apiUpdateProduct(productId, newProduct) {
  return axios({
    url: `https://64a6ad14096b3f0fcc8042cd.mockapi.io/products/${productId}`,
    method: "PUT",
    data: newProduct,
  });
}

function apiDeleteProduct(productId) {
  return axios({
    url: `https://64a6ad14096b3f0fcc8042cd.mockapi.io/products/${productId}`,
    method: "DELETE",
  });
}
