import { NavLink } from "react-router"

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
        <>
            <NavLink to={`/products/:${product.id}`}>
            <div className="product-card">
                <img src={product.image} alt={product.description}></img>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
            </NavLink>
        </>
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