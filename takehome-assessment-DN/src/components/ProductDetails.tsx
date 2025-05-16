import type { Product } from "./ProductCard"

type ProductDetailsViewProps = {
    product: Product
}

export const ProductDetailsView = ({product}: ProductDetailsViewProps) => {
    return (
        <div className="product-details">
            <img src={product.image} alt={product.description}/>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}

