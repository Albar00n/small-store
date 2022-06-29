import React,{useContext} from 'react'
import { CartContext } from '../../context/cart.context';
import Button from '../button/ButtonStyle'

import './Product-card.scss';

const ProductCard = ({product}) => {
    const {name , price,imageUrl} = product;
	const {addItemToCart} = useContext(CartContext);

	const addProducts =	() => addItemToCart(product)
  return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button buttonType="inverted" onClick={addProducts}>Add to Card</Button>
		</div>
	);
}

export default ProductCard