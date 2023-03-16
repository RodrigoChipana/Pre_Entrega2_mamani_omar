import { useContext, useState } from "react";
import {
  Text,
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
} from "@chakra-ui/react";

import { CartContext } from "../contexts/ShoppingCartContext";

const ItemCount = ({ stock, id, price, name }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, price, name }];
      }
    });
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Center>
          <Button
            onClick={() => addToCart()}
            variant="solid"
            colorScheme="blue"
          >
            Agregar al carrito: {count}
          </Button>
        </Center>
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
