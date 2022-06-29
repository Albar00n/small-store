import React from "react";
import Home from "./routes/home/Home-components";
import Nav from './routes/navgition/Nav'
import Shop from './routes/shop/Shop'
import Checkout from "./routes/checkout/checkout";
import Authentication from "./routes/authentication/authentication";
import { Routes,Route } from "react-router-dom";
// import images from './images'
//  images.image1,
import "./categories.styles.scss";





const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Nav />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout  />} />
			</Route>
		</Routes>
	);
};

export default App;
