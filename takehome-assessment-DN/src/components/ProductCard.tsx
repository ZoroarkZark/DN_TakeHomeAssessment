export type imageURL = string

export type Product = {
    id: string,
    name: string,
    price: number,
    image: imageURL,
    description: string
}

export type ProductCardProps = { 
    product: Product
}

export const ProductCard = ({product}: ProductCardProps) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.description}></img>
        </div>
    )   
}

export type ProductCardListProps = { 
    products: Product[]
}

export const ProductCardList = ({products}: ProductCardListProps) => {
    return (
        <div className="product-list">
            {products.map((product) => <ProductCard product={product}/>)}
        </div>
    )
}