import { Route,Routes } from 'react-router-dom';
import StorePreview from "../story-preview/story-preview";
import Store from "../store/Store";
import {StoreProvider} from '../../context/store.context'

import './shop.scss'
const Shop = () => {

  return (
		<StoreProvider>
			<Routes>
				<Route index element={<StorePreview />} />
				<Route path=":store" element={<Store />} />
			</Routes>
		</StoreProvider>
	);
}

export default Shop