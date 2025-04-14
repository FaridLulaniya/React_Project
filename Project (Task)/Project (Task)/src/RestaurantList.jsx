import React, { useState } from 'react';

const RestaurantList = () => {
  // Initial data from the image
  const initialRestaurants = [
    { id: 1, name: '.CN Chinese', address: '228 City Road', postcode: '3JH', rating: 5, type: 'Chinese' },
    { id: 2, name: '007 Takeaway', address: '6 Drummond Street', postcode: '1HY', rating: 6, type: 'Pizza' },
    { id: 3, name: '042 Restaurant & Bar', address: '885 High Road Leytonstone', postcode: '1HR', rating: 3, type: 'African' },
    { id: 4, name: '1 2 3 Chinese', address: 'Unit 4 Spencer House', postcode: '3DS', rating: 4.5, type: 'Chinese' },
    { id: 5, name: '400 Business Chinese Restaurant', address: '27 Park Street', postcode: '48N', rating: 5, type: 'Chinese' },
  ];

  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    address: '',
    postcode: '',
    rating: '',
    type: ''
  });

  // Handle delete
  const handleDelete = (id) => {
    setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
  };

  // Start editing
  const startEditing = (restaurant) => {
    setEditingId(restaurant.id);
    setEditForm({
      name: restaurant.name,
      address: restaurant.address,
      postcode: restaurant.postcode,
      rating: restaurant.rating,
      type: restaurant.type
    });
  };

  // Handle edit form changes
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Save edits
  const saveEdit = () => {
    setRestaurants(restaurants.map(restaurant =>
      restaurant.id === editingId ? { ...restaurant, ...editForm } : restaurant
    ));
    setEditingId(null);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="container mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Restaurant Listings</h1>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-3 px-6 text-left font-semibold uppercase tracking-wider">Name</th>
              <th className="py-3 px-6 text-left font-semibold uppercase tracking-wider">Address</th>
              <th className="py-3 px-6 text-left font-semibold uppercase tracking-wider">Postcode</th>
              <th className="py-3 px-6 text-left font-semibold uppercase tracking-wider">Rating</th>
              <th className="py-3 px-6 text-left font-semibold uppercase tracking-wider">Type of Food</th>
              <th className="py-3 px-6 text-left font-semibold uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {restaurants.map((restaurant, index) => (
              <tr
                key={restaurant.id}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-indigo-50 transition-colors`}
              >
                {editingId === restaurant.id ? (
                  <>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <input
                        type="text"
                        name="name"
                        value={editForm.name}
                        onChange={handleEditChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <input
                        type="text"
                        name="address"
                        value={editForm.address}
                        onChange={handleEditChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <input
                        type="text"
                        name="postcode"
                        value={editForm.postcode}
                        onChange={handleEditChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <input
                        type="number"
                        name="rating"
                        value={editForm.rating}
                        onChange={handleEditChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <input
                        type="text"
                        name="type"
                        value={editForm.type}
                        onChange={handleEditChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap space-x-2">
                      <button
                        onClick={saveEdit}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors shadow-sm"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors shadow-sm"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-900">{restaurant.name}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-gray-700">{restaurant.address}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-gray-700">{restaurant.postcode}</td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${restaurant.rating >= 5 ? 'bg-green-100 text-green-800' :
                          restaurant.rating >= 3 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                        }`}>
                        {restaurant.rating}
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-gray-700">{restaurant.type}</td>
                    <td className="py-4 px-6 whitespace-nowrap space-x-2">
                      <button
                        onClick={() => startEditing(restaurant)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(restaurant.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors shadow-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestaurantList;