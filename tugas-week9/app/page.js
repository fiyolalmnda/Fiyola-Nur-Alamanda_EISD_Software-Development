'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Head>
        <title>Landing Page - CSR</title>
      </Head>
      <h1 className="text-2xl font-bold">Landing Page (CSR)</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(product => (
          <Link key={product.id} href={`/product/${product.id}`} className="border p-2 rounded shadow hover:bg-gray-100 transition">
            <img src={product.image} className="h-32 w-full object-contain" alt={product.title} />
            <p>{product.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
}