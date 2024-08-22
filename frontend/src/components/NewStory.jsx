import React, { useState } from 'react';
import axios from 'axios';

const NewStory = () => {
  const [photo, setPhoto] = useState(null);
  const [heading, setHeading] = useState('');
  const [story, setStory] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file); // Store the File object instead of URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', heading);
    formData.append('description', story);
    if (photo) {
      formData.append('image', photo); // Append the File object
    }

    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.post('http://127.0.0.1:8000/api/stories/', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          // Remove the Content-Type header; axios sets it automatically for FormData
        },
      });

      setSuccess('Story uploaded successfully!');
      console.log('Story response:', response.data);
    } catch (err) {
      setError('Failed to upload story');
      console.error('Error response:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-gray-800 shadow-lg rounded-lg p-8 border border-gray-700">
          {/* Photo Upload Section */}
          <div className="mb-6">
            <div className="relative w-full">
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={handlePhotoChange}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              />
              <img
                src={photo ? URL.createObjectURL(photo) : 'https://via.placeholder.com/800x400.png?text=Your+Story+Image'}
                alt="Story preview"
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col">
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="heading">
                Heading
              </label>
              <input
                type="text"
                id="heading"
                className="border border-gray-500 p-3 w-full rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D388F8] transition duration-300"
                placeholder="Enter story heading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="story">
                Your Story
              </label>
              <textarea
                id="story"
                className="border border-gray-500 p-3 w-full h-48 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D388F8] transition duration-300"
                placeholder="Write your story here..."
                value={story}
                onChange={(e) => setStory(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#D388F8] text-white py-2 px-6 rounded-lg hover:bg-[#a565d1] transition duration-300 shadow-md"
              >
                Upload
              </button>
            </div>
          </div>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {success && <p className="text-green-500 text-center mt-4">{success}</p>}
      </div>
    </section>
  );
};

export default NewStory;
