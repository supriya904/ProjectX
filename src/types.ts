export interface Tweet {
  id: string;
  content: string;
  author: User;
  likes: number;
  retweets: number;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}