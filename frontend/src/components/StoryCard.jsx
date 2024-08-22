import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function StoryCard({ id, image, title, excerpt, fullStory }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [story, setStory] = useState(null);
  const [error, setError] = useState(null);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  console.log(id)

  useEffect(() => {
    console.log("Fetching story with ID:", id);  // Debugging line
    if (id) {
      const fetchStory = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/stories/${id}/`);
          if (!response.ok) {
            throw new Error('Story not found');
          }
          const data = await response.json();
          console.log("Fetched story data:", data);  // Debugging line
          setStory(data);
        } catch (error) {
          console.error("Fetch error:", error);  // Debugging line
          setError(error.message);
        }
      };
  
      fetchStory();
    }
  }, [id]);

  console.log(story)

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 mb-3">
          {isExpanded ? fullStory : excerpt}
        </p>
        <Link to={`/story/${id}`} className="text-black font-semibold rounded bg-[#FFEF20] p-1 px-2 hover:bg-yellow-400 mt-5">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default StoryCard;
