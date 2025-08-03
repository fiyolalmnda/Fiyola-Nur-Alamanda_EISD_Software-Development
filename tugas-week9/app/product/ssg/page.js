import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-static';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export default async function SSGPage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Produk (SSG)</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(product => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="border p-2 rounded hover:bg-gray-100 transition block"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={150}
              height={150}
              className="mx-auto"
            />
            <p>{product.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}