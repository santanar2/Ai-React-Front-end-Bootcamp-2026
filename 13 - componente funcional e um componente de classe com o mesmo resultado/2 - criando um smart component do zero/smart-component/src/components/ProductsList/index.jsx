import { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../settings'
import ProductItem from '../ProductItem'

export default function ProductsList() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível carregar os produtos.')
        }

        return response.json()
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <p>🔄Carregando produtos...</p>
  }

  return (
    <div>
      <h2>Products</h2>
      <ul className="list">
        {products.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </ul>
    </div>
  )
}
