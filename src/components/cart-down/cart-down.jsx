import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item'
import Button from '../button/ButtonStyle'
import "./cart-down.scss";

const CartDown = () => {
    const { cartItems } = useContext(CartContext);
    const navgiate = useNavigate();

    const goToCheckoutHandler = () => {
        navgiate('/checkout')
    }

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item}  />
                ))}
            </div>
            <Button onClick={goToCheckoutHandler}>Go TO CheckOut</Button>
        </div>
    )
}
export default CartDown;