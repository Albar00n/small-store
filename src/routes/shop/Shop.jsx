import { Route,Routes } from 'react-router-dom';
import StorePreview from "../story-preview/story-preview";
import Store from "../store/Store";

import './shop.scss'
const Shop = () => {

  return (
		<Routes>
			<Route index element={<StorePreview />} />
			<Route path=":store" element={<Store />} />
		</Routes>
	);
}

export default Shop