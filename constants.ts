import { Player, Match, Product, NewsItem } from './types';

export const PLAYERS: Player[] = [
  {
    id: 1,
    name: "亨利大帝",
    position: "前锋",
    number: 9,
    nationality: "中国",
    image: "https://picsum.photos/id/1005/400/500",
    bio: "队长。进球机器。进攻线的核心灵魂。",
    stats: [
      { goals: 22, assists: 8, matches: 30, minutes: 2700 }
    ]
  },
  {
    id: 2,
    name: "卡卡帕",
    position: "中场",
    number: 10,
    nationality: "中国",
    image: "https://picsum.photos/id/1012/400/500",
    bio: "中场建筑师。精准的传球大师。",
    stats: [
      { goals: 5, assists: 18, matches: 28, minutes: 2500 }
    ]
  },
  {
    id: 3,
    name: "黑猩",
    position: "后卫",
    number: 4,
    nationality: "中国",
    image: "https://picsum.photos/id/1025/400/500",
    bio: "后防铁闸。无法逾越的空中霸主。",
    stats: [
      { goals: 2, assists: 1, matches: 32, minutes: 2880 }
    ]
  },
  {
    id: 4,
    name: "莫德里.达",
    position: "门将",
    number: 1,
    nationality: "中国",
    image: "https://picsum.photos/id/1003/400/500",
    bio: "沉默的守护者。拥有猫一般的反应速度。",
    stats: [
      { goals: 0, assists: 1, matches: 32, minutes: 2880 }
    ]
  },
  {
    id: 5,
    name: "猪猡巴",
    position: "前锋",
    number: 11,
    nationality: "中国",
    image: "https://picsum.photos/id/1006/400/500",
    bio: "边路速度恶魔。",
    stats: [
      { goals: 12, assists: 10, matches: 25, minutes: 2000 }
    ]
  },
  {
    id: 6,
    name: "小螃蟹",
    position: "中场",
    number: 8,
    nationality: "中国",
    image: "https://picsum.photos/id/1001/400/500",
    bio: "全能型中场引擎（B2B）。",
    stats: [
      { goals: 4, assists: 6, matches: 20, minutes: 1800 }
    ]
  },
    {
    id: 7,
    name: "蛤蟆",
    position: "后卫",
    number: 3,
    nationality: "中国",
    image: "https://picsum.photos/id/1027/400/500",
    bio: "边路充满力量与速度。",
    stats: [
      { goals: 1, assists: 4, matches: 15, minutes: 1200 }
    ]
  },
  {
    id: 8,
    name: "蜡烛",
    position: "中场",
    number: 6,
    nationality: "中国",
    image: "https://picsum.photos/id/1004/400/500",
    bio: "防守型中场核心。",
    stats: [
      { goals: 1, assists: 2, matches: 29, minutes: 2600 }
    ]
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "德比大战告捷！",
    summary: "凭借亨利大帝的精彩帽子戏法，岩意FC以 3-0 战胜同城死敌。",
    date: "2025年10月24日",
    author: "詹姆斯·史密斯",
    image: "https://picsum.photos/id/1055/600/400"
  },
  {
    id: 2,
    title: "新球场扩建计划公布",
    summary: "狮子竞技场的扩建项目已正式获得市议会批准。",
    date: "2023年10月20日",
    author: "萨拉·康纳",
    image: "https://picsum.photos/id/1047/600/400"
  },
  {
    id: 3,
    title: "青训学院毕业季",
    summary: "三位潜力无限的新星正式晋升至一线队阵容。",
    date: "2025年10月15日",
    author: "迈克·罗斯",
    image: "https://picsum.photos/id/1060/600/400"
  }
];

export const MATCHES: Match[] = [
  { id: 1, opponent: "四团", date: "12月04日", time: "20:00", venue: "主场", price: "£45" },
  { id: 2, opponent: "奉城", date: "12月11日", time: "15:00", venue: "客场", price: "£55" },
  { id: 3, opponent: "南桥", date: "12月25日", time: "17:30", venue: "主场", price: "£60" },
];

export const PRODUCTS: Product[] = [
  { id: 1, name: "23/24 主场球衣", price: "£80.00", category: "球衣", image: "https://picsum.photos/id/1080/300/300" },
  { id: 2, name: "23/24 客场球衣", price: "£80.00", category: "球衣", image: "https://picsum.photos/id/1081/300/300" },
  { id: 3, name: "训练上衣", price: "£45.00", category: "训练装备", image: "https://picsum.photos/id/1082/300/300" },
  { id: 4, name: "官方围巾", price: "£20.00", category: "配饰", image: "https://picsum.photos/id/1083/300/300" },
];
