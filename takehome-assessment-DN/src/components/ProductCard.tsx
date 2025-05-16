export type imageURL = string

export type Product = {  
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
            
        </div>
    )
}