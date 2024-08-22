import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function StoryDetail() {
  const { id } = useParams();  // Get id from the URL params
  const [story, setStory] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchStory = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/stories/${id}/`);
          if (!response.ok) {
            throw new Error('Story not found');
          }
          const data = await response.json();
          setStory(data);
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchStory();
    }
  }, [id]);

  if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;
  if (!story) return <p className="text-gray-600 text-center mt-4">Loading...</p>;

  // Format the date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div>
        <img src={story.image} alt={story.title} className="w-full h-auto mb-6shadow-md" />
        <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">{story.title}</h1>
        <p className="text-lg text-gray-800 mb-6">{story.description}</p>
        <p className="text-sm text-gray-600">
            Written by: <span className="font-semibold">{story.created_by.username}</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
            Published on: <span className="font-semibold">{formatDate(story.created_at)}</span>
        </p>
        </div>
    </div>
  );
}

export default StoryDetail;
