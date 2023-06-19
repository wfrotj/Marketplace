import React, { useEffect } from "react";
import productService from "../services/productService";
import { FaTrash } from "react-icons/fa";

function ProductList({ products, setProducts }) {
  useEffect(() => {
    productService
      .getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((response) => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <table className="mt-4 ml-4 flex flex-col">
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <img src={product.photoInfo.url} className="w-20" />
            </td>
            <td>{product.name}</td>
            <td>&#36;{product.price}</td>
            <td>
              <FaTrash onClick={() => deleteProduct(product.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  // <ul>
  //   {products.map((product) => (
  //     <li key={product.id} className="text-lg">
  //       {product.name}
  //       &#36;{product.price}
  //       <img src={product.photoInfo.url} className="w-5 " />
  //       <FaTrash onClick={() => deleteProduct(product.id)} />
  //     </li>
  //   ))}
  // </ul>
}

export default ProductList;
