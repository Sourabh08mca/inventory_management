import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ProductList() {
  const [products, setProduct] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001")
      .then(result => setProduct(result.data))
      .catch(err => console.log(err))
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/delete/"+id)
      .then(res => {console.log(res)
        window.location.reload()
      })
      .catch(errr => console.log(errr))
  };

 
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="flex justify-center mb-6">
        <Link
          to="/form"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Add New Product
        </Link>
      </div>

      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Product: {product.name}</h2>

                <p className="text-gray-600 mb-1">
                  <span className="font-bold">Quantity:</span> {product.quantity}
                </p>

                <p className="text-gray-600 mb-1">
                  <span className="font-bold">Price:</span> ₹{product.price}
                </p>

                <p className="text-gray-500 text-sm mt-4">
                  {new Date(product.createdAt).toLocaleString()}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-6">
                <Link
                   className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg transition"
                   to={`/update/${product._id}`}
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
