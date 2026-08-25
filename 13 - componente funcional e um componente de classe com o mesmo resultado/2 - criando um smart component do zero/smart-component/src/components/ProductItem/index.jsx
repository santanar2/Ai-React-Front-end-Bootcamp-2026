export default function ProductItem({product}) {
    return (
        <li>
        <p>
        #{product.id} {product.name} {product.products} {product.descricao}
        </p>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        <p>{product.descricao}</p> 
        </li>
    );
}