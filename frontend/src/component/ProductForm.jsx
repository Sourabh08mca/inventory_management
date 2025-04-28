import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function ProductForm() {
  const [name, setName] = useState()
  const [quantity, setQuantity] = useState()
  const [price , setPrice] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/form",{name, quantity, price})
    .then(result => {console.log(result)
        navigate('/')
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
      <form onSubmit={Submit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Quantity</label>
          <input
            type="number"
            name="quantity"
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter quantity"
            min="1"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Price</label>
          <input
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter price"
            step="0.01"
            min="0"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
