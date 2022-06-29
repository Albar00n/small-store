import { createContext, useState, useEffect,useReducer } from "react";
const addCartItem = (cartItems, productToAdd) => {
	//find cartitem contains producttoadd
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem,
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	//find the cart item to remove
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id,
	);

	//check if quantity is equal to 1 ,if it is remove that item from the cart
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}
	//return back cartitem wuth natching cart item reduced quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem,
	);
};

const clearCartItem = (cartItems,cartItemToClear) =>  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
	isCartOpen: true,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFormCart: () => {},
	clearItemFormCart: () => {},
	cartCount: 0,
	cartTotal:0,
});

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};
const CART_ACTION_TYPE = {
	SET_CART_ITEMS: "SET_CART_ITEMS",
	SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};
const cartReducer = (state,action) => {
	const {type,payload} = action;


	switch (type) {
		case CART_ACTION_TYPE.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};
		case CART_ACTION_TYPE.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};
		default:
			throw new Error(`unhandled type of ${type} in cartReducer`);
	}
}

export const CartProvider = ({ children }) => {


	const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);

		const updateCartItemsReducer = (newCartItems) => {
			//  dispatch new action with payload
			const newCartCount = newCartItems.reduce(
				(total, cartItem) => total + cartItem.quantity,
				0,
			);
				const newCartTotal = newCartItems.reduce(
					(total, cartItem) => total + cartItem.quantity * cartItem.price,
					0,
				);
				dispatch({
					type: CART_ACTION_TYPE.SET_CART_ITEMS,
					payload: {
						cartItems: newCartItems,
						cartTotal: newCartTotal,
						cartCount: newCartCount,
					},
				});

		}

	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemToCart = (cartToRemove) => {
		const newCartItems = removeCartItem(cartItems, cartToRemove);
		updateCartItemsReducer(newCartItems);

	};
	const clearItemFormCart = (cartToClear) => {
		const newCartItems = clearCartItem(cartItems, cartToClear);
		updateCartItemsReducer(newCartItems);

	};

	const setIsCartOpen = (bool) => {
		dispatch({ type: CART_ACTION_TYPE.SET_IS_CART_OPEN, payload: bool });
	}
	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		cartCount,
		removeItemToCart,
		clearItemFormCart,
		cartTotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
