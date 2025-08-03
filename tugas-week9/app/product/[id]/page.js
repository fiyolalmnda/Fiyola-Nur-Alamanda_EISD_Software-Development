import Image from 'next/image';

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch product with id ${id}`);
  return res.json();
}

export default async function ProductDetail({ params }) {
  if (!params?.id) return <p>Product ID tidak ditemukan.</p>;

  const product = await getProduct(params.id);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <Image src={product.image} alt={product.title} width={300} height={300} className="mx-auto" />
      <p className="mt-4">{product.description}</p>
      <p className="font-semibold text-green-600 text-lg mt-2">${product.price}</p>
      <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>
    </div>
  );
}