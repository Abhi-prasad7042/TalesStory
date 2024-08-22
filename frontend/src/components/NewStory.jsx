import React, { useState } from 'react';

const NewStory = () => {
  const [photo, setPhoto] = useState(null);
  const defaultPhoto = 'https://via.placeholder.com/800x400.png?text=Your+Story+Image'; // Default placeholder image

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ photo, heading, story });
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-[#D388F8] mb-6">
          Share Your Story
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Upload a photo, enter a heading, and write your story to share with the community.
        </p>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-gray-800 shadow-lg rounded-lg p-8 border border-gray-700">
          
          {/* Full-Width Photo Upload Section */}
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
                src={photo || defaultPhoto}
                alt="Story preview"
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Form Fields Section */}
          <div className="flex flex-col">

            {/* Heading Input */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="heading">
                Heading
              </label>
              <input
                type="text"
                id="heading"
                className="border border-gray-500 p-3 w-full rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D388F8] transition duration-300"
                placeholder="Enter story heading"
              />
            </div>

            {/* Story Input */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="story">
                Your Story
              </label>
              <textarea
                id="story"
                className="border border-gray-500 p-3 w-full h-48 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D388F8] transition duration-300"
                placeholder="Write your story here..."
              />
            </div>

            {/* Submit Button */}
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
      </div>
    </section>
  );
};

export default NewStory;
