import './App.css'
import { useState, useEffect, use } from 'react'
import axios from 'axios'
function Card({ product })
{
  const productStyle = {
    productImage: {
      height: '100px',
      width: '200px'
    },
    productCard: {
      height: '500px',
      width: '300px',
      border: '1px solid white'

    }
  }
  return (
    <div style={productStyle.productCard}>
      <img style={productStyle.productImage} src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  )
}

function App()
{

  const [productData, setProductData] = useState(null)
  const [count, setCount] = useState(0)

  // function handleClick()
  // {
  //   axios.get('https://dummyjson.com/products')
  //     .then(data => setProductData(data.data));
  // }

  useEffect(() =>
  {
    axios.get('https://dummyjson.com/products')
      .then(data => setProductData(data.data));
  }, [count])

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <div style={{ 'display': 'flex', 'flex-wrap': 'wrap' }}>
        {
          productData &&
          productData.products.map((product) =>
          {

            return (<Card product={product} />)
          })
        }
      </div>
    </>
  )
}
export default App
