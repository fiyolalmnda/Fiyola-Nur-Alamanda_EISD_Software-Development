'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>Produk (CSR)</h1>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
        {products.map((item) => (
          <div key={item.id} style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <img src={item.image} alt={item.title} style={{ height: '150px', objectFit: 'contain', marginBottom: '0.5rem' }} />
            <h2 style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</h2>
            <p style={{ color: 'green', fontWeight: 'bold' }}>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}