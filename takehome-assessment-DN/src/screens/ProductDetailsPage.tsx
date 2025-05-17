import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Product } from "../components/ProductCard";
import { ProductDetailsView } from "../components/ProductDetails";
import { TEST_API, TEST_ENDPOINT } from "./ProductListPage";

export const ProductDetailsPage = () => {
	const params = useParams();
	const [productData, setProductData] = useState<Product>();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await fetch(
					`${TEST_API}${TEST_ENDPOINT}/${params.id}`
				);
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
		fetchProduct();
	}, [productData, params.id]);
	return (
		<>
			{loading ? (
				<p>Loading...</p>
			) : (
                <>
				    <ProductDetailsView product={productData} />
                </>
			)}
		</>
	);
};
