import React, { useState } from 'react';
import { Tweet as TweetComponent } from './components/Tweet';
import { TweetBox } from './components/TweetBox';
import type { Tweet, User } from './types';
import { Twitter } from 'lucide-react';

const currentUser: User = {
  id: '1',
  name: 'John Doe',
  username: 'johndoe',
  avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop',
};

function App() {
  const [tweets, setTweets] = useState<Tweet[]>([
    {
      id: '1',
      content: 'Just setting up my Twitter clone! 🚀',
      author: currentUser,
      likes: 0,
      retweets: 0,
      createdAt: new Date(),
    },
  ]);

  const handleTweet = (content: string) => {
    const newTweet: Tweet = {
      id: String(Date.now()),
      content,
      author: currentUser,
      likes: 0,
      retweets: 0,
      createdAt: new Date(),
    };
    setTweets([newTweet, ...tweets]);
  };

  const handleLike = (id: string) => {
    setTweets(tweets.map(tweet => 
      tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
    ));
  };

  const handleRetweet = (id: string) => {
    setTweets(tweets.map(tweet => 
      tweet.id === id ? { ...tweet, retweets: tweet.retweets + 1 } : tweet
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center">
          <Twitter className="h-8 w-8 text-blue-500" />
          <h1 className="text-xl font-bold ml-4">Home</h1>
        </div>
      </header>
      
      <main className="max-w-2xl mx-auto bg-white min-h-screen border-x border-gray-200">
        <TweetBox onTweet={handleTweet} />
        <div>
          {tweets.map(tweet => (
            <TweetComponent
              key={tweet.id}
              tweet={tweet}
              onLike={handleLike}
              onRetweet={handleRetweet}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;