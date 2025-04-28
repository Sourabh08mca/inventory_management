import axios from 'axios';
import React, { useEffect, useState }  from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateForm() {
    const {id} = useParams()
    const [name, setName] = useState()
    const [quantity, setQuantity] = useState()
    const [price, setPrice] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setQuantity(result.data.quantity)
            setPrice(result.data.price)
        })
        .catch(err => console.log(err))
    },[])
      
     const Update = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:3001/update/'+id, {name, quantity, price})
        .then(result => {console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
     }

 return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Product</h2>
      <form onSubmit={Update} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={name}
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
            value={quantity}
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
            value={price}
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
          Update
        </button>
      </form>
    </div>
  );
}
