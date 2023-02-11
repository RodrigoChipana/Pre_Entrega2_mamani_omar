import ItemList from "./ItemList";
import Products from "../products.json";
import { Center,Heading} from "@chakra-ui/react";
import {useParams} from "react-router-dom";

const ItemListContainer = () => {
  const {category}=useParams();

  console.log("la categoria es "+ category);

  const getDatos = ()=>{
    return new Promise ((resolve, reject)=>{
        if(Products.length === 0){
            reject(new Error("No hay datos"));
        }
        setTimeout(()=>{
            resolve(Products);
        },2000);
    });
  };

  async function fetchingData(){
    try{
        const datosFetched = await getDatos();
    }catch(err){
        console.log(err);
    }
  }
  fetchingData();

  const catFilter = Products.filter((product) => product.category === category);
    
  return (
    <div>
      <Center bg="#F6AD55" h="100px" color="black">
        <Heading as="h2" size="2xl" fontFamily={"monospace"}>
            Productos
        </Heading>
      </Center>
      {category ? <ItemList products={catFilter} /> : <ItemList products={Products} />}
      
    </div>
  );
    

};

export default ItemListContainer;