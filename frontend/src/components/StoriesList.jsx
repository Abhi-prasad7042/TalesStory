import React from 'react';
import StoryCard from './StoryCard';
import { storiesData } from '../utils/constant';
import { Link } from 'react-router-dom';

function StoriesList() {
  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-purple-600">Explore Our Stories</h2>
          <p className="text-lg text-gray-600 mt-2">Dive into our collection of captivating stories and enjoy the adventure!</p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {storiesData.map((story) => (
            <StoryCard
              key={story.id}
              image={story.image}
              title={story.title}
              excerpt={story.excerpt}
              fullStory={story.fullStory} // Pass the full story
            />
          ))}
        </div>

        {/* Button to See All Stories */}
        <div className="text-center mt-8">
          <a to="/all-stories" className="bg-purple-400 text-black py-2 px-6 rounded-lg font-semibold hover:bg-purple-600 cursor-pointer">
            See All Stories
          </a>
        </div>
      </div>
    </div>
  );
}

export default StoriesList;
