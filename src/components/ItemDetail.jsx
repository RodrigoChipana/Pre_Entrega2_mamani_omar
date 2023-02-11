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
  
  const ItemDetail = ({ products }) => {
    const { id } = useParams();
  
    const productFilter = products.filter((product) => product.id == id);
    
    console.log(productFilter);

    return (
      <>
        <div className='container-items'>
			{productFilter.map(product => (

				<div className='item' key={product.id}>
					<div className='info-product'>
                    <figure>
						<img src={product.img}/>
					</figure>
						<h2>{product.name}</h2>
                        <h2>Color: {product.color}</h2>
                        <p className='stock'>Stock: {product.stock}</p>
						<p className='price'>${product.price}</p>
                        
					</div>
				</div>
			))}
		    </div>

       
      </>
    );
  };
  
  export default ItemDetail;
  