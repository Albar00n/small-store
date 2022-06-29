import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user.context';
// import { StoreProvider } from "./context/store.context";
import { CartProvider } from './context/cart.context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<UserProvider>
				{/* <StoreProvider> */}
					<CartProvider>
						<App />
					</CartProvider>
				{/* </StoreProvider> */}
			</UserProvider>
		</React.StrictMode>
	</BrowserRouter>,
);

