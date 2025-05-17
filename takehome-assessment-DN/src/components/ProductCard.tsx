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
            <NavLink to={`/products/${product.id}`}>
            <div className="product-card">
                <img className="product-image" src={product.image} alt={product.description}></img>
                <div className="product-text">
                    <h1 className="product-name">{product.name}</h1>
                    <p className="product-price">${product.price}</p>
                </div>
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
        <>
            <ProductCardListHeader/>
            <div className="product-list">
                {products.map((product) => <ProductCard key={product.id} product={product}/>)}
            </div>
        </>
    )
}

export const ProductCardListHeader = () => {
    return (
        <>
            <div className="product-list-header">
                <h1 className="product-list-title">Our Products</h1>
                <select name="filter" className="filter">
                    <option value="All Categories">All Categories</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Electronics">Electronics</option>
                </select>
            </div>
        </>
    )
}