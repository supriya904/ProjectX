import { type FC } from 'react';

export const ExplorePage: FC = () => {
  return (
    <div className="min-h-screen border-l border-r border-gray-200">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="px-4 py-3">
          <h1 className="text-xl font-bold">Explore</h1>
        </div>
      </header>
      
      <div className="p-4">
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h2 className="font-bold text-lg mb-2">What's happening</h2>
            <div className="space-y-4">
              {/* Placeholder trending topics */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="space-y-1">
                  <p className="text-sm text-gray-500">Trending in Technology</p>
                  <p className="font-bold">#{`TrendingTopic${item}`}</p>
                  <p className="text-sm text-gray-500">{`${item}0K posts`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
