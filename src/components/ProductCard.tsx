import { useContext } from "react";
import { NavLink } from "react-router";
import { CategoryContext } from "./CategoryContext";

export type imageURL = string;

export type Product = {
	id: string;
	name: string;
	price: number;
	image: imageURL;
	description: string;
	category: string;
};

export type ProductCardProps = {
	product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<>
			<NavLink to={`/products/${product.id}`}>
				<div className="product-card">
					<img
						className="product-image"
						src={product.image}
						alt={product.description}
					></img>
					<div className="product-text">
						<h1 className="product-name">{product.name}</h1>
						<p className="product-price">${product.price}</p>
					</div>
				</div>
			</NavLink>
		</>
	);
};

export type ProductCardListProps = {
	products: Product[];
};

export const ProductCardList = ({ products }: ProductCardListProps) => {
	const currentCategory = useContext(CategoryContext);
	return (
		<>
			<ProductCardListHeader />
			<div className="product-list">
				{(currentCategory.category != "All Categories"
					? products.filter(
							(product) => product.category === currentCategory.category
					  )
					: products
				).map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</>
	);
};

export const ProductCardListHeader = () => {
	return (
		<>
			<div className="product-list-header">
				<h1 className="product-list-title">Our Products</h1>
				<ProductCardListDropdown />
			</div>
		</>
	);
};

export const ProductCardListDropdown = () => {
	const { setCategory } = useContext(CategoryContext);

	return (
		<select
			name="filter"
			defaultValue="All Categories"
			className="category-filter"
			onChange={(e) => {
				setCategory(e.target.value);
			}}
		>
			<option value="All Categories">All Categories</option>
			<option value="Apparel">Apparel</option>
			<option value="Accessories">Accessories</option>
			<option value="Electronics">Electronics</option>
		</select>
	);
};
