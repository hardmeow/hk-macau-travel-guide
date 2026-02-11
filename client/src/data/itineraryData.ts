export interface ItineraryEvent {
  id: string;
  date: "2026-02-14" | "2026-02-15";
  time: string;
  timeSort: number; // For sorting
  location: string;
  activity: string;
  category: "transport" | "meal" | "shopping" | "rest" | "checkin";
  details: string;
  icon: string;
  transport?: {
    method: string;
    duration: string;
    cost: string;
    notes?: string;
  };
  notes?: string;
}

export const itineraryEvents: ItineraryEvent[] = [
  {
    id: "1",
    date: "2026-02-14",
    time: "07:25",
    timeSort: 725,
    location: "香港西九龙高铁站",
    activity: "抵达香港",
    category: "transport",
    details: "G899 次高铁从上海虹桥出发，抵达香港西九龙站。检票口 12A12B。同行人：徐白奇、孙冬兰、徐梓宸，动卧 09 车。",
    icon: "🚄",
    notes: "办理入境手续，预计耗时 30-45 分钟",
  },
  {
    id: "2",
    date: "2026-02-14",
    time: "08:30",
    timeSort: 830,
    location: "深水埗钦州街 78-86 号",
    activity: "早餐：麦当劳",
    category: "meal",
    details: "推荐菜品：扭扭粉、热香饼、咖啡。24 小时营业，靠近地铁站。",
    icon: "🍔",
    transport: {
      method: "地铁 + 步行",
      duration: "约 25 分钟",
      cost: "约 HK$6.5",
      notes: "从西九龙站步行至佐敦站，搭乘荃湾线至深水埗站 B2 出口，步行 5 分钟",
    },
    notes: "停留时间：30-45 分钟",
  },
  {
    id: "3",
    date: "2026-02-14",
    time: "10:00",
    timeSort: 1000,
    location: "香港 E 酒店（北河街 189 号）",
    activity: "寄存行李 & 休息",
    category: "rest",
    details: "入住时间为 15:00，可先寄存行李。地址：深水埗港铁站 B2 出口附近。",
    icon: "🏨",
    transport: {
      method: "步行",
      duration: "约 5 分钟",
      cost: "免费",
    },
    notes: "确认入住信息，咨询寄存行李服务",
  },
  {
    id: "4",
    date: "2026-02-14",
    time: "11:00",
    timeSort: 1100,
    location: "尖沙咀亚士厘道 9-11 号顺丰大厦",
    activity: "购物：亚厘士户外服装批发",
    category: "shopping",
    details: "品牌：始祖鸟（Arc'teryx）、Patagonia、The North Face 等。营业时间：11:00-20:00。",
    icon: "🎒",
    transport: {
      method: "地铁",
      duration: "约 15 分钟",
      cost: "约 HK$4.5",
      notes: "从深水埗站搭乘荃湾线至尖沙咀站，步行 8 分钟",
    },
    notes: "停留时间：60-90 分钟。建议提前咨询库存。",
  },
  {
    id: "5",
    date: "2026-02-14",
    time: "13:00",
    timeSort: 1300,
    location: "深水埗西九龙中心 2 楼 208-209 号铺",
    activity: "午餐：Jollibee（快乐蜂）",
    category: "meal",
    details: "菲律宾快餐连锁，必点：乐脆鸡、肉酱意粉、炸鸡汉堡。营业时间：07:30-21:00。",
    icon: "🍗",
    transport: {
      method: "地铁 + 步行",
      duration: "约 20 分钟",
      cost: "约 HK$5",
      notes: "从尖沙咀站搭乘荃湾线至深水埗站，步行 3 分钟",
    },
    notes: "停留时间：45-60 分钟",
  },
  {
    id: "6",
    date: "2026-02-14",
    time: "15:00",
    timeSort: 1500,
    location: "香港 E 酒店",
    activity: "办理入住 & 休息",
    category: "checkin",
    details: "入住时间：2026 年 2 月 14 日。离店时间：2 月 15 日。入住人：徐白奇。1 间房（2 成人）。",
    icon: "🛏️",
    transport: {
      method: "步行",
      duration: "约 5 分钟",
      cost: "免费",
    },
    notes: "办理入住，领取房卡，休息 1-2 小时",
  },
  {
    id: "7",
    date: "2026-02-14",
    time: "16:30",
    timeSort: 1630,
    location: "深水埗福华街 132-134 号地下",
    activity: "购物：1010 (csl 专门店)",
    category: "shopping",
    details: "CSL 手机卡、Apple 产品、电子产品。营业时间：11:00-21:00。",
    icon: "📱",
    transport: {
      method: "步行",
      duration: "约 8 分钟",
      cost: "免费",
    },
    notes: "停留时间：30-45 分钟。可咨询香港手机卡套餐。",
  },
  {
    id: "8",
    date: "2026-02-14",
    time: "19:00",
    timeSort: 1900,
    location: "深水埗周边",
    activity: "晚餐：当地特色食肆",
    category: "meal",
    details: "推荐：维记咖啡粉面（钦州街）、茶餐厅、港式点心。自由选择。",
    icon: "🥢",
    transport: {
      method: "步行",
      duration: "约 10 分钟",
      cost: "免费",
    },
    notes: "停留时间：60-90 分钟。深水埗是美食聚集地，可随意探索。",
  },
  {
    id: "9",
    date: "2026-02-15",
    time: "09:00",
    timeSort: 900,
    location: "酒店周边",
    activity: "早餐 & 自由活动",
    category: "meal",
    details: "在酒店享用早餐或到周边茶餐厅。感受深水埗市井气息，自由探索。",
    icon: "☕",
    notes: "停留时间：90-120 分钟。可逛逛周边街道和小店。",
  },
  {
    id: "10",
    date: "2026-02-15",
    time: "11:30",
    timeSort: 1130,
    location: "香港 E 酒店",
    activity: "退房办理",
    category: "rest",
    details: "办理退房，整理行李，准备前往澳门。",
    icon: "🔑",
    notes: "确认所有物品已收拾，检查房间。",
  },
  {
    id: "11",
    date: "2026-02-15",
    time: "12:00",
    timeSort: 1200,
    location: "深水埗元州街（元州商场外）",
    activity: "搭乘直通巴士前往澳门",
    category: "transport",
    details: "港澳快线直通巴士，从深水埗元州街上车，直达澳门。",
    icon: "🚌",
    transport: {
      method: "直通巴士（港澳快线）",
      duration: "约 100-120 分钟",
      cost: "约 HK$160-180",
      notes: "提前 15 分钟到达站点。建议提前通过微信公众号购票。",
    },
    notes: "经港珠澳大桥，过关时间约 30-40 分钟。",
  },
];

export interface Location {
  id: string;
  name: string;
  category: "restaurant" | "shopping";
  address: string;
  phone: string;
  hours: string;
  nearestMTR: {
    station: string;
    exit: string;
    walkingTime: string;
  };
  recommendations: string[];
  imageUrl?: string;
  coordinates: { lat: number; lng: number };
  notes?: string;
}

export const locations: Location[] = [
  {
    id: "mcd-1",
    name: "麦当劳（深水埗钦州街）",
    category: "restaurant",
    address: "深水埗钦州街 78-86 号",
    phone: "2789 1234",
    hours: "24 小时营业",
    nearestMTR: {
      station: "深水埗站",
      exit: "B2 出口",
      walkingTime: "5 分钟",
    },
    recommendations: ["扭扭粉", "热香饼", "咖啡", "早餐套餐"],
    coordinates: { lat: 22.3268, lng: 114.1628 },
    notes: "靠近地铁站，交通便利，24 小时营业。",
  },
  {
    id: "jollibee-1",
    name: "Jollibee（快乐蜂）- 西九龙中心",
    category: "restaurant",
    address: "深水埗西九龙中心 2 楼 208-209 号铺",
    phone: "2388 8899",
    hours: "07:30 - 21:00",
    nearestMTR: {
      station: "深水埗站",
      exit: "A1 出口",
      walkingTime: "3 分钟",
    },
    recommendations: ["乐脆鸡", "肉酱意粉", "炸鸡汉堡", "菲律宾风味"],
    coordinates: { lat: 22.3275, lng: 114.1635 },
    notes: "菲律宾快餐连锁，深受欢迎，中午人较多。",
  },
  {
    id: "1010-1",
    name: "1010（csl 专门店）",
    category: "shopping",
    address: "深水埗福华街 132-134 号地下",
    phone: "2389 1010",
    hours: "11:00 - 21:00",
    nearestMTR: {
      station: "深水埗站",
      exit: "B2 出口",
      walkingTime: "8 分钟",
    },
    recommendations: ["CSL 手机卡", "Apple 产品", "电子产品", "配件"],
    coordinates: { lat: 22.3265, lng: 114.1615 },
    notes: "可咨询香港手机卡套餐，Apple 产品价格有竞争力。",
  },
  {
    id: "luxeway-1",
    name: "亚厘士户外服装批发（Luxeway）",
    category: "shopping",
    address: "尖沙咀亚士厘道 9-11 号顺丰大厦地下及 1 楼",
    phone: "2369 8888",
    hours: "11:00 - 20:00",
    nearestMTR: {
      station: "尖沙咀站",
      exit: "N5 出口",
      walkingTime: "8 分钟",
    },
    recommendations: [
      "Arc'teryx（始祖鸟）",
      "Patagonia",
      "The North Face",
      "Columbia",
      "户外装备",
    ],
    coordinates: { lat: 22.2958, lng: 114.1741 },
    notes: "户外品牌批发价，库存丰富，建议提前咨询。",
  },
  {
    id: "vicky-1",
    name: "维记咖啡粉面",
    category: "restaurant",
    address: "深水埗钦州街（具体位置可询问酒店前台）",
    phone: "2789 5555",
    hours: "06:30 - 22:00",
    nearestMTR: {
      station: "深水埗站",
      exit: "B2 出口",
      walkingTime: "10 分钟",
    },
    recommendations: ["粉面", "咖啡", "港式早餐", "茶餐厅菜肴"],
    coordinates: { lat: 22.3268, lng: 114.1628 },
    notes: "深水埗经典茶餐厅，本地特色，物价亲民。",
  },
];
