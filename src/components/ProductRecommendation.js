// components/ProductRecommendation.js
import { useState, useEffect } from "react";

export default function ProductRecommendation() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setProducts([
        { id: 1, name: "Hydrating Face Cream", price: "₹899" },
        { id: 2, name: "Vitamin C Serum", price: "₹1299" },
        { id: 3, name: "Sunscreen SPF 50+", price: "₹699" },
      ]);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded mt-6">
      <h3 className="text-xl font-bold text-pink-600 mb-2">Recommended Products</h3>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ul className="space-y-2">
          {products.map((product) => (
            <li key={product.id} className="flex justify-between border-b pb-2">
              <span>{product.name}</span>
              <span>{product.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
