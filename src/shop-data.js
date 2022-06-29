import images from './images'

const SHOP_DATA = [
	{
		title: "Hats",
		items: [
			{
				id: 1,
				name: "Brown Brim",
				imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
				price: 25,
			},
			{
				id: 2,
				name: "Blue Beanie",
				imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
				price: 18,
			},
			{
				id: 3,
				name: "Brown Cowboy",
				imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
				price: 35,
			},
			{
				id: 4,
				name: "Grey Brim",
				imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
				price: 25,
			},
			{
				id: 5,
				name: "Green Beanie",
				imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
				price: 18,
			},
			{
				id: 6,
				name: "Palm Tree Cap",
				imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
				price: 14,
			},
			{
				id: 7,
				name: "Red Beanie",
				imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
				price: 18,
			},
			{
				id: 8,
				name: "Wolf Cap",
				imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
				price: 14,
			},
			{
				id: 9,
				name: "Blue Snapback",
				imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
				price: 16,
			},
		],
	},
	{
		title: "Sneakers",
		items: [
			{
				id: 10,
				name: "Adidas NMD",
				imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
				price: 220,
			},
			{
				id: 11,
				name: "Adidas Yeezy",
				imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
				price: 280,
			},
			{
				id: 12,
				name: "Black Converse",
				imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
				price: 110,
			},
			{
				id: 13,
				name: "Nike White AirForce",
				imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
				price: 160,
			},
			{
				id: 14,
				name: "Nike Red High Tops",
				imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
				price: 160,
			},
			{
				id: 15,
				name: "Nike Brown High Tops",
				imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
				price: 160,
			},
			{
				id: 16,
				name: "Air Jordan Limited",
				imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
				price: 190,
			},
			{
				id: 17,
				name: "Timberlands",
				imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
				price: 200,
			},
		],
	},
	{
		title: "Jackets",
		items: [
			{
				id: 18,
				name: "Black Jean Shearling",
				imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
				price: 125,
			},
			{
				id: 19,
				name: "Blue Jean Jacket",
				imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
				price: 90,
			},
			{
				id: 20,
				name: "Grey Jean Jacket",
				imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
				price: 90,
			},
			{
				id: 21,
				name: "Brown Shearling",
				imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
				price: 165,
			},
			{
				id: 22,
				name: "Tan Trench",
				imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
				price: 185,
			},
		],
	},
	{
		title: "Womens",
		items: [
			{
				id: 23,
				name: "Blue Tanktop",
				imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
				price: 25,
			},
			{
				id: 24,
				name: "Floral Blouse",
				imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
				price: 20,
			},
			{
				id: 25,
				name: "Floral Dress",
				imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
				price: 80,
			},
			{
				id: 26,
				name: "Red Dots Dress",
				imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
				price: 80,
			},
			{
				id: 27,
				name: "Striped Sweater",
				imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
				price: 45,
			},
			{
				id: 28,
				name: "Yellow Track Suit",
				imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
				price: 135,
			},
			{
				id: 29,
				name: "White Blouse",
				imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
				price: 20,
			},
		],
	},
	{
		title: "Mens",
		items: [
			{
				id: 30,
				name: "Camo Down Vest",
				imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
				price: 325,
			},
			{
				id: 31,
				name: "Floral T-shirt",
				imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
				price: 20,
			},
			{
				id: 32,
				name: "Black & White Longsleeve",
				imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
				price: 25,
			},
			{
				id: 33,
				name: "Pink T-shirt",
				imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
				price: 25,
			},
			{
				id: 34,
				name: "Jean Long Sleeve",
				imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
				price: 40,
			},
			{
				id: 35,
				name: "Burgundy T-shirt",
				imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
				price: 25,
			},
		],
	},
	{
		title: "airphones",
		items: [
			{
				id: 50,
				name: "air phone",
				imageUrl: images.earphones1,
				price: 20,
			},
			{
				id: 52,
				name: "air phone",
				imageUrl: images.earphones2,
				price: 20,
			},
			{
				id: 54,
				name: "air phone",
				imageUrl: images.earphones3,
				price: 20,
			},
			{
				id: 56,
				name: "air phone",
				imageUrl: images.earphones4,
				price: 20,
			},
			{
				id: 58,
				name: "air phone",
				imageUrl: images.earphones5,
				price: 20,
			},
			{
				id: 60,
				name: "air phone",
				imageUrl: images.earphones6,
				price: 20,
			},
			{
				id: 64,
				name: "air phone",
				imageUrl: images.earphones7,
				price: 20,
			},
			{
				id: 64,
				name: "air phone",
				imageUrl: images.earphones8,
				price: 20,
			},
			{
				id: 66,
				name: "air phone",
				imageUrl: images.earphones9,
				price: 20,
			},
			{
				id: 68,
				name: "air phone",
				imageUrl: images.earphones10,
				price: 20,
			},
		],
	},
	{
		title: "headphones",
		items: [
			{
				id: 70,
				name: "head phone",
				imageUrl: images.headphones1,
				price: 50,
			},
			{
				id: 71,
				name: "head phone",
				imageUrl: images.headphones2,
				price: 50,
			},
			{
				id: 72,
				name: "head phone",
				imageUrl: images.headphones3,
				price: 50,
			},
			{
				id: 73,
				name: "head phone",
				imageUrl: images.headphones4,
				price: 50,
			},
			{
				id: 74,
				name: "head phone",
				imageUrl: images.headphones5,
				price: 50,
			},
			{
				id: 75,
				name: "head phone",
				imageUrl: images.headphones6,
				price: 50,
			},
			{
				id: 76,
				name: "head phone",
				imageUrl: images.headphones7,
				price: 50,
			},
		],
	},
	{
		title: "speaker",
		items: [
			{
				id: 80,
				name: "speaker",
				imageUrl: images.speaker1,
				price: 30,
			},
			{
				id: 81,
				name: "speaker",
				imageUrl: images.speaker2,
				price: 30,
			},
			{
				id: 82,
				name: "speaker",
				imageUrl: images.speaker3,
				price: 30,
			},
			{
				id: 83,
				name: "speaker",
				imageUrl: images.speaker4,
				price: 30,
			},
		],
	},
	{
		title: "watch",
		items: [
			{
				id: 88,
				name: "watch",
				imageUrl: images.watch1,
				price: 40,
			},
			{
				id: 89,
				name: "watch",
				imageUrl: images.watch2,
				price: 40,
			},
			{
				id: 92,
				name: "watch",
				imageUrl: images.watch3,
				price: 40,
			},
			{
				id: 95,
				name: "watch",
				imageUrl: images.watch4,
				price: 40,
			},
		],
	},
];

export default SHOP_DATA;