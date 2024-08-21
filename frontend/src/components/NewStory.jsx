import React, { useState } from 'react';

const NewStory = () => {
  const [photo, setPhoto] = useState(null);
  const [heading, setHeading] = useState('');
  const [story, setStory] = useState('');

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ photo, heading, story });
  };

  return (
    <section className="p-10 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#d683ff] mb-6">
          Share Your Story
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Upload a photo, enter a heading, and write your story to share with the community.
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto border border-gray-200 flex flex-col md:flex-row">
          {/* Photo Upload Section */}
          <div className="md:w-1/3 mb-6 md:mb-0 pr-4">
            <div className="flex justify-center">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="photo">
                Upload Photo
              </label>
            </div>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className="border border-gray-300 p-2 w-full rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#d683ff] transition duration-300"
            />
            {photo && (
              <div className="mt-4 relative">
                <img src={photo} alt="Story preview" className="w-full h-60 object-cover rounded-lg shadow-md" />
              </div>
            )}
          </div>

          {/* Form Fields Section */}
          <div className="md:w-2/3 flex flex-col">
            {/* Heading */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="heading">
                Heading
              </label>
              <input
                type="text"
                id="heading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className="border border-gray-300 p-3 w-full rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#d683ff] transition duration-300"
                placeholder="Enter story heading"
              />
            </div>

            {/* Story */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="story">
                Your Story
              </label>
              <textarea
                id="story"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                className="border border-gray-300 p-3 w-full h-48 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#d683ff] transition duration-300"
                placeholder="Write your story here..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#d683ff] text-white py-2 px-6 rounded-lg hover:bg-[#a565d1] transition duration-300 shadow-md"
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
