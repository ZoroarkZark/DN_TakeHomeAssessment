import { useEffect, useState } from "react";
import { CategoryContext } from "../components/CategoryContext";
import { ProductCardList, type Product } from "../components/ProductCard";

export const TEST_API = "https://cart-api.alexrodriguez.workers.dev";
export const TEST_ENDPOINT = "/products";

export const ProductListPage = () => {
    const [selectedValue, setSelectedValue] = useState<string>("All Categories")
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
				if (error instanceof Error) {
                    console.log(error.message)
                }
				setLoading(false);
			}
		};
		fetchProducts();
	}, [productData]);

	return (
		<>
            <CategoryContext.Provider value={{category: selectedValue, setCategory: setSelectedValue}}>
			    {loading ? <p>Loading...</p> : <ProductCardList products={productData} />}
            </CategoryContext.Provider>
		</>
	);
};
