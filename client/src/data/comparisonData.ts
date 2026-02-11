export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  convenience: number; // 1-5
  coverage: string;
  settlement: string;
  steps: string[];
  pros: string[];
  cons: string[];
  recommended: boolean;
  scenario: string;
}

export interface TransportMethod {
  id: string;
  name: string;
  icon: string;
  duration: string;
  cost: string;
  pros: string[];
  cons: string[];
  recommended: boolean;
  scenario: string;
  details: {
    departure: string;
    arrival: string;
    frequency: string;
    notes: string;
  };
}

export const metroPaymentMethods: PaymentMethod[] = [
  {
    id: "octopus",
    name: "手机八达通（Octopus）",
    icon: "🎫",
    convenience: 5,
    coverage: "全港交通 + 商店",
    settlement: "港币结算",
    steps: [
      "在 iPhone 钱包或八达通 APP 中开通手机八达通",
      "预存押金（可退）",
      "无需唤醒屏幕，直接刷手机进站",
      "出站再次刷手机完成交易",
    ],
    pros: [
      "无需唤醒屏幕，最方便",
      "支持所有交通工具及商店",
      "可享受政府交通补贴",
      "余额可用于其他消费",
    ],
    cons: [
      "需预存押金",
      "初次开通需要时间",
      "需要 iPhone/Apple Pay 或 Huawei Pay",
    ],
    recommended: true,
    scenario: "长期或频繁使用香港交通",
  },
  {
    id: "alipay",
    name: "AlipayHK / 支付宝（易乘码）",
    icon: "💳",
    convenience: 4,
    coverage: "地铁、巴士、部分商店",
    settlement: "自动结算（内地版汇率）",
    steps: [
      "在支付宝 APP 中切换至 '香港' 城市",
      "搜索 '易乘码' 或 '乘车码'",
      "打开乘车码，对准紫色闸机扫描区",
      "进站和出站都需要扫码",
    ],
    pros: [
      "内地用户直接用内地版支付宝",
      "汇率自动结算，无需换港币",
      "覆盖地铁和巴士",
      "支持部分商店消费",
    ],
    cons: [
      "暂不享受政府交通补贴",
      "需打开 APP 才能扫码",
      "需寻找紫色闸机",
    ],
    recommended: true,
    scenario: "内地游客首选，无需额外办卡",
  },
  {
    id: "wechat",
    name: "WeChat HK / 微信（乘车码）",
    icon: "📱",
    convenience: 4,
    coverage: "地铁、巴士、部分商店",
    settlement: "自动结算（内地版汇率）",
    steps: [
      "在微信中搜索 '乘车码' 小程序",
      "切换至 '香港' 城市",
      "打开乘车码，对准紫色闸机扫描区",
      "进站和出站都需要扫码",
    ],
    pros: [
      "内地用户直接用内地版微信",
      "支持 '同行码'（1 部手机带 2 人进站）",
      "汇率自动结算",
      "覆盖地铁和巴士",
    ],
    cons: [
      "暂不享受政府交通补贴",
      "需打开小程序才能扫码",
      "需寻找紫色闸机",
    ],
    recommended: true,
    scenario: "需要带同行人进站，或习惯用微信支付",
  },
];

export const macauTransportMethods: TransportMethod[] = [
  {
    id: "shuttle-bus",
    name: "港珠澳大桥穿梭巴士（金巴）",
    icon: "🚌",
    duration: "约 90 分钟（含接驳）",
    cost: "约 HK$65",
    pros: [
      "价格最便宜",
      "24 小时营运，班次频繁",
      "直达澳门各主要地点",
      "可在线提前购票",
    ],
    cons: [
      "需多次转车（市区 → 口岸 → 金巴 → 澳门）",
      "过关时间较长（30-40 分钟）",
      "较为折腾，不适合带大件行李",
      "班次时间表需提前查询",
    ],
    recommended: false,
    scenario: "追求性价比的旅客，行李较少",
    details: {
      departure: "深水埗搭乘 A21/A23 机场巴士或地铁至欣澳站转 B5 巴士",
      arrival: "澳门口岸（需再转车至目的地）",
      frequency: "15-30 分钟一班",
      notes: "需提前购票，可通过微信公众号 '港珠澳大桥穿梭巴士' 购票",
    },
  },
  {
    id: "ferry",
    name: "渡轮（喷射飞航 / 金光飞航）",
    icon: "⛴️",
    duration: "约 60 分钟（船程）",
    cost: "约 HK$175 - 200",
    pros: [
      "体验独特，可欣赏海景",
      "直达澳门半岛或氹仔",
      "舒适度高，座位宽敞",
      "班次频繁（30 分钟一班）",
    ],
    cons: [
      "票价较贵",
      "需地铁至中环上环港澳码头（约 20 分钟）",
      "受天气影响，可能延误",
      "需提前 30 分钟到达码头",
    ],
    recommended: true,
    scenario: "追求舒适度与速度，想体验海景",
    details: {
      departure: "中环 / 上环港澳码头",
      arrival: "澳门外港码头（半岛）或氹仔码头",
      frequency: "30 分钟一班",
      notes: "可在官网、Klook 或现场购票。建议提前购票以确保有座位。",
    },
  },
  {
    id: "direct-bus",
    name: "直通巴士（港澳快线 / 环岛中港通）",
    icon: "🚌",
    duration: "约 100-120 分钟",
    cost: "约 HK$160 - 180",
    pros: [
      "酒店附近上车，无需转乘",
      "省心省力，适合带行李",
      "班次相对稳定",
      "直达澳门主要酒店",
    ],
    cons: [
      "班次相对较少（1-2 小时一班）",
      "需提前购票",
      "过关时间较长（30-40 分钟）",
      "票价介于金巴和渡轮之间",
    ],
    recommended: true,
    scenario: "携带大件行李，追求省心，酒店附近有上车点",
    details: {
      departure: "深水埗元州街（元州商场外）或 V Walk",
      arrival: "澳门各主要酒店（威尼斯人、美獅美高梅等）",
      frequency: "1-2 小时一班",
      notes: "建议通过微信公众号 '港澳快线' 提前购票。提前 15 分钟到达站点。",
    },
  },
];
