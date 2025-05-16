import { useEffect, useState } from "react";
import { ProductCardList, type Product } from "../components/ProductCard";
import { ShopHeader } from "../components/ShopHeader";

export const TEST_API = "https://cart-api.alexrodriguez.workers.dev";
export const TEST_ENDPOINT = "/products";

export const ProductListPage = () => {
	const [productData, setProductData] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch(`${TEST_API}${TEST_ENDPOINT}`);
				if (!response.ok) {
					throw new Error(`Error Status: ${response.status}`);
				}
				const json = await response.json();
				setProductData(json);
				setLoading(false);
			} catch (error) {
				console.error(error.message);
				setLoading(false);
			}
		};
		fetchProducts();
	}, [productData]);

	return (
		<>
			<ShopHeader />
			{loading ? <p>Loading...</p> : <ProductCardList products={productData} />}
		</>
	);
};
