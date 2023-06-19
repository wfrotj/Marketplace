import axios from "axios";
const baseUrl = "http://localhost:8080/api/products";

function getProducts() {
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
}

function createProduct(product) {
  // return fetch(baseUrl, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(product),
  // })
  //   .then((res) => res.json())
  //   .then((data) => data);
  return axios.post(baseUrl, product).then((res) => res.data);
}

function deleteProduct(id) {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Delete request failed");
      }
      if (res.status === 204) {
        return {};
      }
      return res.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
}

export default {
  getProducts,
  createProduct,
  deleteProduct,
};
