import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Center,Heading} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
 const [products, setProducts] = useState([]);
  const {category}=useParams();

    useEffect(() => {
      const datos = getFirestore();
      const productsCollection = collection(datos, "products");
      getDocs(productsCollection).then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(products);
      });
    }, []);
  const catFilter = products.filter((product) => product.category === category);
  return (
    <div>
      <Center bg="#F6AD55" h="100px" color="black">
        <Heading as="h2" size="2xl" fontFamily={"monospace"}>
            Productos
        </Heading>
      </Center>
      {category ? <ItemList products={catFilter} /> : <ItemList products={products} />}
      
    </div>
  );
};

export default ItemListContainer;