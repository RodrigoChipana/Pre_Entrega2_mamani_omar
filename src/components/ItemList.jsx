/* */
import React from "react";
import { Link } from "react-router-dom";

const ItemList=({products})=>{
    return(
        <>
            <div className='container-items'>
				{products.map(product => (
					<div className='item' key={product.id}>
						<div className='info-product'>
							<figure>
								<img src={product.img}/>
							</figure>
								<h2>{product.name}</h2>
								<h2>Color: {product.color}</h2>
								<p className='stock'>Stock: {product.stock}</p>
								<p className='price'>${product.price}</p>
								<button >
									<Link to={`/item/${product.id}`}>Detalles</Link>
								</button>
						</div>
					</div>
				))}
		    </div>
        </>
    );
};

export default ItemList;

/* 
import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ products }) => {
  return (
    <>
      <Container className="main-catalogue">
        {products?.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            color={product.color}
            price={product.price}
            stock={product.stock}
            category={product.category}
            img={product.img}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
*/
