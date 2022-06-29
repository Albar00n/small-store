import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart'
import CartDown from '../../components/cart-down/cart-down'
import "./nav.scss";


const Nav = () => {
	const { currentUser } = useContext(UserContext);
	const {isCartOpen } = useContext(CartContext);
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<div>Logo</div>
				</Link>
				<div className="links-container">
					<Link className="nav-link" to="/shop">
						Shop
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							Sign Out
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							Sign In
						</Link>
					)}
				<CartIcon  />
				</div>
				{isCartOpen &&	<CartDown  />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Nav;
