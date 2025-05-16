import type { Product } from "./ProductCard"

type ProductDetailsViewProps = {
    product: Product
}

export const ProductDetailsView = ({product}: ProductDetailsViewProps) => {
    return (
        <h1>Product</h1>
    )
}

