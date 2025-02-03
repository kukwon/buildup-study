import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log('Error', error))
  }, [])
  console.log(products)

  return (
    <div>
      {products.map((products) => (
        <div key={products.id} style={{ textAlign: 'start' }}>
          <h3>{products.title}</h3>
          <p>{products.description}</p>
          <div>{products.price}</div>
        </div>
      ))}
    </div>
  )
}

export default App
