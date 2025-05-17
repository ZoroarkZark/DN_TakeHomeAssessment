import { NavLink } from "react-router";
import type { Product } from "./ProductCard";

type ProductDetailsViewProps = {
	product?: Product;
};

export const ProductDetailsView = ({ product }: ProductDetailsViewProps) => {
	return product ? (
		<div className="product-details-card">
			<NavLink to="/">
				<button className="back-button">Back to Products</button>
			</NavLink>

			<div className="product-details">
				<img
					className="product-details-image"
					src={product.image}
					alt={product.description}
				/>
				<div className="product-text">
					<h1 className="product-name">{product.name}</h1>
					<p className="product-description">{product.description}</p>
					<p className="product-price">${product.price}</p>
				</div>
			</div>
		</div>
	) : (
		"No such product exists!"
	);
};
