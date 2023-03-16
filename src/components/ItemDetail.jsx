import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
  } from "@chakra-ui/react";
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  import { useEffect, useState } from "react";
  import { doc, getDoc, getFirestore } from "firebase/firestore";
  
  const ItemDetail = ({ products }) => {
    const { id } = useParams();
    const [producto, setProducto] = useState([]);
    useEffect(() => {
      const datos = getFirestore();
      const productRef = doc(datos, "products", `${id}`);
      getDoc(productRef).then((snapshot) => {
        if (snapshot.exists()) {
          setProducto(snapshot.data());
        } else {
        }
      });
    }, []);
  
    const productFilter = products.filter((product) => product.id == id);
  
    return (
      <>
        {productFilter.map((product) => (
          <div key={product.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Image borderRadius="lg" src={product.img} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{product.name}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Color: {product.color}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      Categoria: {product.category}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {product.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Precio: $ {product.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount
                    stock={product.stock}
                    id={product.id}
                    price={product.price}
                    name={product.name}
                  />
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;
  