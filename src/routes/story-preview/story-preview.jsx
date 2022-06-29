
import React, { useContext,Fragment } from "react";
import { StoreContext } from "../../context/store.context";

import StorePreview from "../../components/store-preview/store-preview";



const Shop = () => {
	const { storiesMap } = useContext(StoreContext);
	return (
		<Fragment>
			{Object.keys(storiesMap).map((title) => {
				const products = storiesMap[title];
				return (
					<StorePreview key={title} title={title} products={products} />
				);
			})}
		</Fragment>
	);
};

export default Shop;