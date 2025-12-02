export interface Player {
  id: number;
  name: string;
  position: '前锋' | '中场' | '后卫' | '门将';
  number: number;
  nationality: string;
  image: string;
  bio: string;
  stats: {
    goals: number;
    assists: number;
    matches: number;
    minutes: number;
  }[];
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  author: string;
  image: string;
}

export interface Match {
  id: number;
  opponent: string;
  date: string;
  time: string;
  venue: string;
  price: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}