import React from 'react';
import { Search, MoreHorizontal } from 'lucide-react';

export const TrendingSidebar = () => {
  const trends = [
    {
      category: 'Trending in India',
      title: '#GetOutRaGa',
      posts: '103K posts'
    },
    {
      category: 'Entertainment · Trending',
      title: 'Khloé in Wonder Land',
      posts: '52K posts'
    },
    {
      category: 'Trending',
      title: '#TVKForTN',
      posts: '83K posts'
    },
    {
      category: 'Politics · Trending',
      title: '#Divorce',
      posts: '1,043 posts'
    }
  ];

  return (
    <div className="py-1 px-6">
      {/* Search Bar */}
      <div className="sticky top-0 bg-gray-50 pt-2 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
        </div>
      </div>

      {/* Subscribe Card */}
      <div className="bg-gray-100 rounded-2xl p-4 my-4">
        <h2 className="font-bold text-xl mb-2">Subscribe to Premium</h2>
        <p className="text-sm text-gray-600 mb-3">
          Subscribe to unlock new features and if eligible, receive a share of revenue.
        </p>
        <button className="bg-black text-white rounded-full px-4 py-2 font-bold hover:bg-gray-800">
          Subscribe
        </button>
      </div>

      {/* What's happening section */}
      <div className="bg-gray-100 rounded-2xl overflow-hidden">
        <h2 className="font-bold text-xl p-4">What's happening</h2>
        {trends.map((trend, index) => (
          <div
            key={index}
            className="px-4 py-3 hover:bg-gray-200 transition-colors cursor-pointer flex justify-between items-start border-t border-gray-200 first:border-none"
          >
            <div>
              <p className="text-sm text-gray-500">{trend.category}</p>
              <p className="font-bold mt-0.5">{trend.title}</p>
              <p className="text-sm text-gray-500 mt-0.5">{trend.posts}</p>
            </div>
            <button className="hover:bg-blue-50 hover:text-blue-500 rounded-full p-1.5 transition-colors">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
