import React, { useState } from 'react';

function StoryCard({ image, title, excerpt, fullStory }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">
          {isExpanded ? fullStory : excerpt}
        </p>
        <button
          onClick={toggleReadMore}
          className="text-black font-semibold rounded bg-[#FFEF20] p-1 px-2 hover:bg-yellow-400 mt-4"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}

export default StoryCard;
