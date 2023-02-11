import ItemDetail from "./ItemDetail";
import { useState } from "react";
import Products from "../products.json";
import { useParams } from "react-router";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Products.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        const productFilter = Products.filter((product) => product.id == id);
        resolve(productFilter);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      setBikes(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  return <ItemDetail products={Products} />;
};

export default ItemDetailContainer;