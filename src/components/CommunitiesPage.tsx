import { type FC, useState } from 'react';
import { Users, Search, Plus, ChevronRight, MessageCircle, Heart, Repeat2 } from 'lucide-react';

interface Community {
  id: string;
  name: string;
  description: string;
  members: number;
  category: string;
  image: string;
  isJoined: boolean;
}

export const CommunitiesPage: FC = () => {
  const [activeTab, setActiveTab] = useState<'discover' | 'joined'>('discover');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample communities data
  const [communities, setCommunities] = useState<Community[]>([
    {
      id: '1',
      name: 'Tech Enthusiasts',
      description: 'A community for discussing the latest in technology, gadgets, and innovation.',
      members: 15243,
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop',
      isJoined: true
    },
    {
      id: '2',
      name: 'Book Club',
      description: 'Share your favorite books, discuss literature, and get recommendations.',
      members: 8976,
      category: 'Books & Literature',
      image: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?w=200&h=200&fit=crop',
      isJoined: false
    },
    {
      id: '3',
      name: 'Travel Adventures',
      description: 'Share your travel stories, photos, and get tips for your next adventure.',
      members: 12567,
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=200&h=200&fit=crop',
      isJoined: true
    },
    {
      id: '4',
      name: 'Fitness & Health',
      description: 'Tips, motivation, and discussions about fitness, nutrition, and healthy living.',
      members: 9823,
      category: 'Health',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&h=200&fit=crop',
      isJoined: false
    },
    {
      id: '5',
      name: 'Foodies Unite',
      description: 'For food lovers to share recipes, restaurant recommendations, and cooking tips.',
      members: 14532,
      category: 'Food & Drink',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop',
      isJoined: false
    },
    {
      id: '6',
      name: 'Gaming Hub',
      description: 'Discuss video games, share gaming moments, and find people to play with.',
      members: 18765,
      category: 'Gaming',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&h=200&fit=crop',
      isJoined: true
    }
  ]);

  // Filter communities based on search query and active tab
  const filteredCommunities = communities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         community.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'joined' ? community.isJoined : true;
    return matchesSearch && matchesTab;
  });

  // Toggle join/leave community
  const toggleJoin = (id: string) => {
    setCommunities(communities.map(community => 
      community.id === id ? { ...community, isJoined: !community.isJoined } : community
    ));
  };

  // Format member count
  const formatMemberCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M members`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K members`;
    } else {
      return `${count} members`;
    }
  };

  return (
    <div className="min-h-screen border-l border-r border-gray-200">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="px-4 py-3">
          <h1 className="text-xl font-bold">Communities</h1>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button 
          className={`flex-1 py-4 font-medium ${activeTab === 'discover' ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('discover')}
        >
          Discover
        </button>
        <button 
          className={`flex-1 py-4 font-medium ${activeTab === 'joined' ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('joined')}
        >
          Joined
        </button>
      </div>

      {/* Search bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search communities"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Create community button (only on discover tab) */}
      {activeTab === 'discover' && (
        <div className="p-4 border-b border-gray-200">
          <button className="flex items-center gap-2 w-full p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition text-left">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <Plus className="text-white" size={20} />
            </div>
            <div>
              <div className="font-bold">Create a community</div>
              <div className="text-sm text-gray-500">Connect with people who share your interests</div>
            </div>
            <ChevronRight className="ml-auto text-gray-500" size={20} />
          </button>
        </div>
      )}

      {/* Communities list */}
      <div className="divide-y divide-gray-200">
        {filteredCommunities.length > 0 ? (
          filteredCommunities.map(community => (
            <div key={community.id} className="p-4 hover:bg-gray-50">
              <div className="flex gap-3">
                <img 
                  src={community.image} 
                  alt={community.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{community.name}</h3>
                      <p className="text-gray-500 text-sm">{formatMemberCount(community.members)}</p>
                    </div>
                    <button 
                      className={`px-4 py-1.5 rounded-full text-sm font-bold ${community.isJoined ? 'bg-gray-200 hover:bg-gray-300 text-black' : 'bg-black hover:bg-gray-800 text-white'}`}
                      onClick={() => toggleJoin(community.id)}
                    >
                      {community.isJoined ? 'Joined' : 'Join'}
                    </button>
                  </div>
                  <p className="mt-1 text-gray-700">{community.description}</p>
                  
                  {/* Sample post from community (only for joined communities) */}
                  {community.isJoined && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-sm">Recent post</span>
                        <span className="text-gray-500 text-xs">2h ago</span>
                      </div>
                      <p className="text-sm">Has anyone tried the new feature that was just released? I'd love to hear your thoughts!</p>
                      <div className="flex gap-4 mt-2">
                        <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
                          <MessageCircle size={16} />
                          <span className="text-xs">12</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-500 hover:text-green-500">
                          <Repeat2 size={16} />
                          <span className="text-xs">4</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
                          <Heart size={16} />
                          <span className="text-xs">23</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            <Users size={48} className="mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-bold mb-1">No communities found</h3>
            <p>{activeTab === 'joined' ? 'You haven\'t joined any communities yet.' : 'No communities match your search.'}</p>
            {activeTab === 'joined' && (
              <button 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600"
                onClick={() => setActiveTab('discover')}
              >
                Discover communities
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
