import { useState, useRef } from "react";
import productService from "../services/productService";
function ProductForm({ products, setProducts }) {
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newImage, setNewImage] = useState(null);
  const fileInputRef = useRef(null);

  const addProduct = (e) => {
    e.preventDefault();
    if (newName === "" || newPrice === "" || newImage === "") {
      console.log("Please enter data");
      return;
    }
    const productObject = new FormData();
    productObject.append("name", newName);
    productObject.append("price", newPrice);
    productObject.append("image", newImage);

    productService.createProduct(productObject).then((returnedProduct) => {
      setProducts(products.concat(returnedProduct));
      fileInputRef.current.value = null;
      setNewName("");
      setNewPrice("");
    });
  };
  // const addProduct = (e) => {
  //   e.preventDefault();

  //   const productObject = {
  //     name: newName,
  //     price: newPrice,
  //   };
  //   productService
  //     .createProduct(productObject)
  //     .then((returnedProduct) => {
  //       setProducts(products.concat(returnedProduct));
  //       setNewName("");
  //       setNewPrice("");
  //     })
  //     .catch((error) => console.log(error));
  // };
  return (
    <div className="">
      <form
        onSubmit={addProduct}
        className="flex justify-center items-center flex-col bg-slate-400"
      >
        <div>
          <div>
            <label>Product</label>
          </div>
          <div>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Price</label>
          </div>
          <div>
            <input
              type="text"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="items-center flex flex-col">
          <input
            type="file"
            accept="image/"
            ref={fileInputRef}
            onChange={(e) => setNewImage(e.target.files[0])}
          />
        </div>
        <div>
          <button type="submit">ADD</button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
