import React from "react";
import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory-components";
import images from '../../images'
//  images.image1,
// import "./categories.styles.scss";
const Home = () => {
	const categories = [
		{
			id: 1,
			title: "hats",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
		},
		{
			id: 2,
			title: "jackets",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
		},
		{
			id: 3,
			title: "sneakers",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
		},
		{
			id: 4,
			title: "womens",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
		},
		{
			id: 5,
			title: "mens",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
		},
		{
			id: 6,
			title: "airphones",
			imageUrl: images.earphones5,
		},
		{
			id: 7,
			title: "headphones",
			imageUrl: images.headphones1,
		},
		{
			id: 8,
			title: "speaker",
			imageUrl: images.speaker1,
		},
		{
			id: 9,
			title: "watch",
			imageUrl: images.watch1,
		},
	];
	return (
		<div>
			<Directory categories={categories} />

			<Outlet />
		</div>
	);
};

export default Home;
