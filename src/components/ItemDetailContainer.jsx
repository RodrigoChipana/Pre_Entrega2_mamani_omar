import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
      useEffect(() => {
        const datos = getFirestore();
        const productsCollection = collection(datos, "products");
        getDocs(productsCollection).then((querySnapshot) => {
          const products = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setData(products);
        });
      }, []);
  return <ItemDetail products={data} />;
};

export default ItemDetailContainer;