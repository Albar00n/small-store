
import { useContext, useEffect, useState,Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../context/store.context'
import ProductCard from '../../components/product/Product-card'
import './store.scss'



const Store = () => {
  const {store} = useParams;
  const { storiesMap} = useContext(StoreContext);
  const [products,setProducts] = useState(storiesMap[store]);

  useEffect(() => {
      setProducts(storiesMap[store]);
  },[store,storiesMap])

return (
	<Fragment>
		<h2 className="title">{store}</h2>

		<div className="ategory-container">
			{products &&
				products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
		</div>
	</Fragment>
);
}

export default Store;