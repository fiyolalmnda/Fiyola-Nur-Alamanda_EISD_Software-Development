// app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Fake Store Landing',
  description: 'Fake Store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <nav className="bg-purple-600 p-4 text-white flex justify-between">
          <Link href="/">Home</Link>
          <div className="space-x-4">
            <Link href="/product/ssg">SSG</Link>
            <Link href="/product/ssr">SSR</Link>
          </div>
        </nav>
        <main className="flex-grow p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">© 2025</footer>
      </body>
    </html>
  );
}