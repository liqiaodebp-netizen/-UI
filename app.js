const screenDefinitions = [
  { id: "splash", title: "01 启动页", image: "01UI启动页.png", type: "splash" },
  { id: "onboarding", title: "02 目标选择引导页", image: "02UI目标选择引导页.png", type: "onboarding" },
  { id: "home", title: "03 首页 AI 方向盘", image: "03UI首页AI方向盘.png", type: "home" },
  { id: "daily", title: "04 日常任务页", image: "04UI日常任务页.png", type: "daily" },
  { id: "qa", title: "05 通通校园 AI 问答页", image: "05UI通通校园AI问答页.png", type: "qa" },
  { id: "thesis", title: "06 通通校园论文助手页", image: "06UI通通校园论文助手页.png", type: "thesis" },
  { id: "cloud", title: "07 联通云盘校园云背包页", image: "07UI联通云盘校园云背包页.png", type: "cloud" },
  { id: "ppt", title: "08 联通云盘 AI PPT 页", image: "08UI联通云盘AIPPT页.png", type: "ppt" },
  { id: "ringtone", title: "09 AI 视频彩铃创作台页", image: "09UIAI视频彩铃创作台页.png", type: "ringtone" },
  { id: "templates", title: "10 AI 视频彩铃模板选择页", image: "10UIAI视频彩铃模板选择页.png", type: "templates" },
  { id: "benefits", title: "11 青少年专区权益首页", image: "11UI青少年专区权益首页.png", type: "benefits" },
  { id: "campaign", title: "12 活动 H5 追梦路线图页", image: "12UI活动H5追梦路线图页.png", type: "campaign" },
  { id: "messages", title: "13 消息通知页", image: "13UI消息通知页.png", type: "messages" },
  { id: "profile", title: "14 个人中心页", image: "14UI个人中心页.png", type: "profile" },
  { id: "settings", title: "15 设置页", image: "15UI设置页.png", type: "settings" },
  { id: "ipSupply", title: "16 IP 权益补给中心页", image: "01IP拓展UI权益补给中心页.png", type: "ipSupply" },
  { id: "ipSign", title: "17 IP 每日签到中心页", image: "02IP拓展UI每日签到中心页.png", type: "ipSign" },
  { id: "ipMedals", title: "18 IP 勋章成就馆页", image: "03IP拓展UI勋章成就馆页.png", type: "ipMedals" },
  { id: "ipRank", title: "19 IP 成长排行榜页", image: "04IP拓展UI成长排行榜页.png", type: "ipRank" },
  { id: "ipPlaza", title: "20 IP 青春活动广场页", image: "05IP拓展UI青春活动广场页.png", type: "ipPlaza" },
  { id: "ipContest", title: "21 IP AI 创新大赛页", image: "06IP拓展UIAI创新大赛页.png", type: "ipContest" },
  { id: "ipTasks", title: "22 IP 成长任务中心页", image: "07IP拓展UI成长任务中心页.png", type: "ipTasks" },
  { id: "ipCoupons", title: "23 IP 我的优惠券包页", image: "08IP拓展UI我的优惠券包页.png", type: "ipCoupons" },
  { id: "ipLicense", title: "24 IP 素材授权中心页", image: "09IP拓展UI素材授权中心页.png", type: "ipLicense" },
  { id: "ipSupport", title: "25 IP 奖励客服中心页", image: "10IP拓展UI奖励客服中心页.png", type: "ipSupport" },
  { id: "ipDiscover", title: "26 IP 发现广场页", image: "11IP拓展UI发现广场页.png", type: "ipDiscover" },
  { id: "ipMentor", title: "27 IP AI 导师预约页", image: "12IP拓展UIAI导师预约页.png", type: "ipMentor" },
  { id: "ipNotes", title: "28 IP 笔记共享社区页", image: "13IP拓展UI笔记共享社区页.png", type: "ipNotes" },
  { id: "ipCard", title: "29 IP 校园一卡通页", image: "14IP拓展UI校园一卡通页.png", type: "ipCard" },
  { id: "ipMap", title: "30 IP AI 校园地图页", image: "15IP拓展UIAI校园地图页.png", type: "ipMap" },
  { id: "ipArchive", title: "31 IP 学习档案页", image: "16IP拓展UI学习档案页.png", type: "ipArchive" },
  { id: "ipPoster", title: "32 IP AI 海报设计助手页", image: "17IP拓展UIAI海报设计助手页.png", type: "ipPoster" },
  { id: "candidateOnboarding", title: "33 候选目标选择引导页 A", image: "01候选UI目标选择引导页A.png", type: "candidateOnboarding" },
];

const stack = document.querySelector("#screenStack");
const hotspotLayer = document.querySelector("#hotspotLayer");
const title = document.querySelector("#screenTitle");
const backBtn = document.querySelector("#backBtn");
const soundBtn = document.querySelector("#soundBtn");
const debugBtn = document.querySelector("#debugBtn");
const miniMap = document.querySelector("#miniMap");
const phone = document.querySelector("#phone");

let current = 0;
let previous = 0;
let soundEnabled = true;
let audioContext;
let debugHotspots = false;
const historyStack = [];

const backHotspot = (target) => ({ label: "返回", target, x: 4, y: 4, w: 12, h: 7 });
const bottomNav = (active) => {
  const items = [
    { key: "home", label: "首页", target: "home", x: 5 },
    { key: "ai", label: "AI 中心", target: "qa", x: 43 },
    { key: "mine", label: "我的", target: "profile", x: 80 },
  ];
  return items.filter((item) => item.key !== active).map((item) => ({ ...item, y: 91, w: 14, h: 8 }));
};

function buildHotspots(screen) {
  switch (screen.type) {
    case "splash":
      return [{ label: "开启我的 AI 星图", target: "onboarding", x: 13, y: 85, w: 74, h: 8 }];
    case "onboarding":
      return [
        { label: "学习提升", target: "qa", x: 9, y: 41, w: 39, h: 18 },
        { label: "资料整理", target: "cloud", x: 52, y: 41, w: 39, h: 18 },
        { label: "创意表达", target: "ringtone", x: 9, y: 61, w: 39, h: 18 },
        { label: "权益补给", target: "ipSupply", x: 52, y: 61, w: 39, h: 18 },
        { label: "查看方案 A", target: "candidateOnboarding", x: 60, y: 17, w: 28, h: 6 },
        { label: "生成我的校园路线", target: "home", x: 12, y: 86, w: 76, h: 8 },
      ];
    case "candidateOnboarding":
      return [
        backHotspot("onboarding"),
        { label: "去首页", target: "home", x: 10, y: 40, w: 38, h: 18 },
        { label: "去 AI 问答", target: "qa", x: 52, y: 40, w: 38, h: 18 },
        { label: "去权益中心", target: "ipSupply", x: 10, y: 62, w: 38, h: 16 },
        { label: "进入正式方案", target: "home", x: 12, y: 86, w: 76, h: 8 },
      ];
    case "home":
      return [
        { label: "消息通知", target: "messages", x: 80, y: 4, w: 8, h: 6 },
        { label: "个人中心", target: "profile", x: 8, y: 5, w: 13, h: 8 },
        { label: "通通校园", target: "qa", x: 9, y: 36, w: 39, h: 15 },
        { label: "联通云盘", target: "cloud", x: 52, y: 36, w: 39, h: 15 },
        { label: "AI 视频彩铃", target: "ringtone", x: 9, y: 55, w: 39, h: 15 },
        { label: "权益补给", target: "ipSupply", x: 52, y: 55, w: 39, h: 15 },
        { label: "日常任务", target: "daily", x: 7, y: 90, w: 14, h: 8 },
        { label: "AI 中心", target: "qa", x: 43, y: 90, w: 14, h: 8 },
        { label: "我的", target: "profile", x: 80, y: 90, w: 14, h: 8 },
      ];
    case "daily":
      return [
        { label: "AI 学习计划", target: "qa", x: 13, y: 35, w: 74, h: 10 },
        { label: "云盘同步", target: "cloud", x: 13, y: 46, w: 74, h: 10 },
        { label: "彩铃创作", target: "ringtone", x: 13, y: 57, w: 74, h: 10 },
        { label: "成长任务中心", target: "ipTasks", x: 13, y: 68, w: 74, h: 10 },
        { label: "点亮路线图", target: "campaign", x: 55, y: 78, w: 34, h: 7 },
        ...bottomNav("home"),
      ];
    case "qa":
      return [
        backHotspot("home"),
        { label: "论文助手", target: "thesis", x: 14, y: 78, w: 34, h: 8 },
        { label: "导师预约", target: "ipMentor", x: 52, y: 78, w: 34, h: 8 },
        { label: "发送问题", target: "thesis", x: 83, y: 90, w: 10, h: 6 },
        ...bottomNav("ai"),
      ];
    case "thesis":
      return [
        backHotspot("qa"),
        { label: "上传资料", target: "cloud", x: 8, y: 38, w: 26, h: 8 },
        { label: "AI 优化写作", target: "ppt", x: 10, y: 57, w: 38, h: 10 },
        { label: "生成提纲", target: "ipNotes", x: 52, y: 57, w: 38, h: 10 },
        { label: "开始优化", target: "ppt", x: 12, y: 86, w: 76, h: 7 },
      ];
    case "cloud":
      return [
        backHotspot("home"),
        { label: "文档文件夹", target: "thesis", x: 8, y: 49, w: 18, h: 11 },
        { label: "论文文件夹", target: "thesis", x: 29, y: 49, w: 18, h: 11 },
        { label: "PPT 文件夹", target: "ppt", x: 50, y: 49, w: 18, h: 11 },
        { label: "音视频素材", target: "ringtone", x: 71, y: 49, w: 18, h: 11 },
        { label: "一键同步", target: "ipLicense", x: 12, y: 85, w: 76, h: 7 },
        ...bottomNav("home"),
      ];
    case "ppt":
      return [
        backHotspot("cloud"),
        { label: "从论文生成", target: "thesis", x: 9, y: 32, w: 20, h: 10 },
        { label: "校园模板", target: "campaign", x: 30, y: 32, w: 20, h: 10 },
        { label: "云盘素材", target: "ipLicense", x: 51, y: 32, w: 20, h: 10 },
        { label: "一键生成", target: "messages", x: 12, y: 86, w: 76, h: 7 },
        ...bottomNav("home"),
      ];
    case "ringtone":
      return [
        backHotspot("home"),
        { label: "播放预览", target: "templates", x: 45, y: 30, w: 12, h: 8 },
        { label: "上传素材", target: "cloud", x: 9, y: 54, w: 24, h: 10 },
        { label: "选择模板", target: "templates", x: 36, y: 54, w: 24, h: 10 },
        { label: "生成彩铃", target: "templates", x: 14, y: 85, w: 72, h: 7 },
      ];
    case "templates":
      return [
        backHotspot("ringtone"),
        { label: "青春模板", target: "messages", x: 8, y: 18, w: 84, h: 17 },
        { label: "毕业模板", target: "messages", x: 8, y: 39, w: 40, h: 18 },
        { label: "动漫模板", target: "messages", x: 52, y: 39, w: 40, h: 18 },
        { label: "使用此模板", target: "messages", x: 58, y: 88, w: 34, h: 6 },
      ];
    case "benefits":
      return [
        { label: "消息通知", target: "messages", x: 82, y: 4, w: 8, h: 6 },
        { label: "会员权益", target: "ipSupply", x: 8, y: 24, w: 84, h: 15 },
        { label: "学习会员", target: "qa", x: 8, y: 43, w: 18, h: 12 },
        { label: "视频娱乐", target: "ringtone", x: 30, y: 43, w: 18, h: 12 },
        { label: "出行优惠", target: "ipCoupons", x: 52, y: 43, w: 18, h: 12 },
        { label: "个人中心", target: "profile", x: 82, y: 91, w: 12, h: 7 },
        { label: "首页", target: "home", x: 5, y: 91, w: 12, h: 7 },
      ];
    case "campaign":
      return [
        backHotspot("benefits"),
        { label: "AI 学习站", target: "qa", x: 18, y: 42, w: 22, h: 12 },
        { label: "云背包站", target: "cloud", x: 55, y: 51, w: 24, h: 12 },
        { label: "彩铃舞台", target: "ringtone", x: 28, y: 66, w: 24, h: 12 },
        { label: "点亮下一站", target: "ipMap", x: 17, y: 86, w: 66, h: 7 },
      ];
    case "messages":
      return [
        { label: "AI 提醒", target: "daily", x: 10, y: 23, w: 80, h: 10 },
        { label: "云盘同步", target: "cloud", x: 10, y: 34, w: 80, h: 10 },
        { label: "彩铃已生成", target: "ringtone", x: 10, y: 45, w: 80, h: 10 },
        { label: "权益待领取", target: "ipSupply", x: 10, y: 56, w: 80, h: 10 },
        { label: "个人中心", target: "profile", x: 82, y: 91, w: 12, h: 7 },
        { label: "首页", target: "home", x: 43, y: 91, w: 14, h: 8 },
      ];
    case "profile":
      return [
        { label: "设置", target: "settings", x: 82, y: 5, w: 9, h: 7 },
        { label: "权益等级", target: "ipSupply", x: 61, y: 17, w: 28, h: 16 },
        { label: "AI 学习", target: "qa", x: 8, y: 43, w: 18, h: 11 },
        { label: "云背包", target: "cloud", x: 31, y: 43, w: 18, h: 11 },
        { label: "彩铃", target: "ringtone", x: 54, y: 43, w: 18, h: 11 },
        { label: "学习档案", target: "ipArchive", x: 10, y: 64, w: 80, h: 7 },
        { label: "首页", target: "home", x: 42, y: 91, w: 16, h: 8 },
      ];
    case "settings":
      return [
        backHotspot("profile"),
        { label: "账号安全", target: "profile", x: 8, y: 25, w: 84, h: 7 },
        { label: "通知设置", target: "messages", x: 8, y: 35, w: 84, h: 7 },
        { label: "AI 生成偏好", target: "ipPoster", x: 8, y: 54, w: 84, h: 7 },
        { label: "青少年模式", target: "benefits", x: 8, y: 64, w: 84, h: 7 },
        { label: "首页", target: "home", x: 37, y: 90, w: 26, h: 7 },
      ];
    case "ipSupply":
      return [backHotspot("benefits"), { label: "签到中心", target: "ipSign", x: 8, y: 24, w: 84, h: 14 }, { label: "优惠券包", target: "ipCoupons", x: 8, y: 43, w: 40, h: 14 }, { label: "素材授权", target: "ipLicense", x: 52, y: 43, w: 40, h: 14 }, { label: "客服中心", target: "ipSupport", x: 8, y: 61, w: 40, h: 14 }, { label: "返回首页", target: "home", x: 52, y: 61, w: 40, h: 14 }, ...bottomNav("home")];
    case "ipSign":
      return [backHotspot("ipSupply"), { label: "立即签到", target: "ipMedals", x: 13, y: 31, w: 74, h: 12 }, { label: "勋章馆", target: "ipMedals", x: 8, y: 52, w: 40, h: 14 }, { label: "排行榜", target: "ipRank", x: 52, y: 52, w: 40, h: 14 }, { label: "查看成长任务", target: "ipTasks", x: 13, y: 84, w: 74, h: 8 }];
    case "ipMedals":
      return [backHotspot("ipSign"), { label: "切到排行榜", target: "ipRank", x: 60, y: 15, w: 28, h: 7 }, { label: "学习档案", target: "ipArchive", x: 8, y: 70, w: 40, h: 15 }, { label: "去社区分享", target: "ipNotes", x: 52, y: 70, w: 40, h: 15 }];
    case "ipRank":
      return [backHotspot("ipMedals"), { label: "活动广场", target: "ipPlaza", x: 8, y: 24, w: 84, h: 14 }, { label: "AI 创新大赛", target: "ipContest", x: 8, y: 44, w: 40, h: 15 }, { label: "共享社区", target: "ipNotes", x: 52, y: 44, w: 40, h: 15 }, { label: "回到签到", target: "ipSign", x: 13, y: 84, w: 74, h: 8 }];
    case "ipPlaza":
      return [backHotspot("home"), { label: "AI 创新大赛", target: "ipContest", x: 8, y: 24, w: 84, h: 15 }, { label: "导师预约", target: "ipMentor", x: 8, y: 46, w: 40, h: 15 }, { label: "笔记社区", target: "ipNotes", x: 52, y: 46, w: 40, h: 15 }, ...bottomNav("home")];
    case "ipContest":
      return [backHotspot("ipPlaza"), { label: "海报设计助手", target: "ipPoster", x: 8, y: 25, w: 84, h: 15 }, { label: "调用云盘素材", target: "cloud", x: 8, y: 48, w: 40, h: 14 }, { label: "去消息通知", target: "messages", x: 52, y: 48, w: 40, h: 14 }, { label: "返回广场", target: "ipPlaza", x: 13, y: 84, w: 74, h: 8 }];
    case "ipTasks":
      return [backHotspot("daily"), { label: "签到任务", target: "ipSign", x: 8, y: 25, w: 84, h: 14 }, { label: "学习档案", target: "ipArchive", x: 8, y: 46, w: 40, h: 15 }, { label: "成长排行", target: "ipRank", x: 52, y: 46, w: 40, h: 15 }, ...bottomNav("home")];
    case "ipCoupons":
      return [backHotspot("ipSupply"), { label: "校园一卡通", target: "ipCard", x: 8, y: 24, w: 84, h: 14 }, { label: "权益首页", target: "benefits", x: 8, y: 46, w: 40, h: 15 }, { label: "客服咨询", target: "ipSupport", x: 52, y: 46, w: 40, h: 15 }, { label: "回到补给中心", target: "ipSupply", x: 13, y: 84, w: 74, h: 8 }];
    case "ipLicense":
      return [backHotspot("ipSupply"), { label: "打开云盘素材", target: "cloud", x: 8, y: 24, w: 84, h: 14 }, { label: "海报设计助手", target: "ipPoster", x: 8, y: 46, w: 40, h: 15 }, { label: "客服中心", target: "ipSupport", x: 52, y: 46, w: 40, h: 15 }, { label: "一键授权使用", target: "ipPoster", x: 13, y: 84, w: 74, h: 8 }];
    case "ipSupport":
      return [backHotspot("ipSupply"), { label: "优惠券问题", target: "ipCoupons", x: 8, y: 24, w: 84, h: 14 }, { label: "导师咨询", target: "ipMentor", x: 8, y: 46, w: 40, h: 15 }, { label: "消息中心", target: "messages", x: 52, y: 46, w: 40, h: 15 }, { label: "返回补给中心", target: "ipSupply", x: 13, y: 84, w: 74, h: 8 }];
    case "ipDiscover":
      return [backHotspot("home"), { label: "笔记共享社区", target: "ipNotes", x: 8, y: 24, w: 84, h: 15 }, { label: "导师预约", target: "ipMentor", x: 8, y: 46, w: 40, h: 15 }, { label: "创新大赛", target: "ipContest", x: 52, y: 46, w: 40, h: 15 }, ...bottomNav("home")];
    case "ipMentor":
      return [backHotspot("ipDiscover"), { label: "AI 问答", target: "qa", x: 8, y: 24, w: 84, h: 15 }, { label: "共享社区", target: "ipNotes", x: 8, y: 46, w: 40, h: 15 }, { label: "学习档案", target: "ipArchive", x: 52, y: 46, w: 40, h: 15 }, { label: "立即预约", target: "messages", x: 13, y: 84, w: 74, h: 8 }];
    case "ipNotes":
      return [backHotspot("ipDiscover"), { label: "导师预约", target: "ipMentor", x: 8, y: 24, w: 84, h: 15 }, { label: "海报设计助手", target: "ipPoster", x: 8, y: 46, w: 40, h: 15 }, { label: "消息提醒", target: "messages", x: 52, y: 46, w: 40, h: 15 }, { label: "去发布笔记", target: "messages", x: 13, y: 84, w: 74, h: 8 }];
    case "ipCard":
      return [backHotspot("profile"), { label: "AI 校园地图", target: "ipMap", x: 8, y: 24, w: 84, h: 15 }, { label: "优惠券包", target: "ipCoupons", x: 8, y: 46, w: 40, h: 15 }, { label: "学习档案", target: "ipArchive", x: 52, y: 46, w: 40, h: 15 }, ...bottomNav("mine")];
    case "ipMap":
      return [backHotspot("ipCard"), { label: "活动广场", target: "ipPlaza", x: 8, y: 24, w: 84, h: 15 }, { label: "导师预约", target: "ipMentor", x: 8, y: 46, w: 40, h: 15 }, { label: "路线图", target: "campaign", x: 52, y: 46, w: 40, h: 15 }, { label: "回到一卡通", target: "ipCard", x: 13, y: 84, w: 74, h: 8 }];
    case "ipArchive":
      return [backHotspot("profile"), { label: "成长任务", target: "ipTasks", x: 8, y: 24, w: 84, h: 15 }, { label: "勋章馆", target: "ipMedals", x: 8, y: 46, w: 40, h: 15 }, { label: "海报助手", target: "ipPoster", x: 52, y: 46, w: 40, h: 15 }, ...bottomNav("mine")];
    case "ipPoster":
      return [backHotspot("ipContest"), { label: "调用授权素材", target: "ipLicense", x: 8, y: 24, w: 84, h: 15 }, { label: "联通云盘", target: "cloud", x: 8, y: 46, w: 40, h: 15 }, { label: "个人中心", target: "profile", x: 52, y: 46, w: 40, h: 15 }, { label: "生成海报草案", target: "messages", x: 13, y: 84, w: 74, h: 8 }];
    default:
      return [backHotspot("home")];
  }
}

const screens = screenDefinitions.map((screen) => ({ ...screen, hotspots: buildHotspots(screen) }));

function initAudio() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
}

function playTone(kind = "click") {
  if (!soundEnabled) return;
  initAudio();
  const now = audioContext.currentTime;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = kind === "back" ? "triangle" : "sine";
  osc.frequency.setValueAtTime(kind === "back" ? 360 : 620, now);
  osc.frequency.exponentialRampToValueAtTime(kind === "back" ? 180 : 920, now + 0.13);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(kind === "back" ? 0.08 : 0.12, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
  osc.connect(gain).connect(audioContext.destination);
  osc.start(now);
  osc.stop(now + 0.17);
}

const findIndex = (id) => screens.findIndex((screen) => screen.id === id);

function showRipple(event) {
  const rect = phone.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "tap-ripple";
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  phone.appendChild(ripple);
  window.setTimeout(() => ripple.remove(), 560);
}

function goTo(target, options = {}) {
  const next = typeof target === "number" ? target : findIndex(target);
  if (next < 0 || next === current) return;
  previous = current;
  if (!options.fromHistory) historyStack.push(current);
  current = next;
  playTone(options.back ? "back" : "click");
  render();
}

function goBack() {
  if (historyStack.length) goTo(historyStack.pop(), { fromHistory: true, back: true });
  else if (current !== 0) goTo("home", { back: true });
}

function build() {
  stack.innerHTML = screens.map((screen, index) => `<article class="screen ${index === 0 ? "active" : ""}" data-id="${screen.id}"><img src="./assets/screens/${screen.image}" alt="${screen.title}" /></article>`).join("");
  miniMap.innerHTML = screens.map((screen, index) => `<button type="button" data-index="${index}">${screen.title.replace(/^[0-9]+\s*/, "")}</button>`).join("");
  render();
}

function render() {
  [...document.querySelectorAll(".screen")].forEach((node, index) => {
    node.classList.toggle("active", index === current);
    node.classList.toggle("exit-left", index === previous && current > previous);
    node.classList.toggle("exit-right", index === previous && current < previous);
  });
  const screen = screens[current];
  title.textContent = screen.title;
  hotspotLayer.innerHTML = screen.hotspots.map((hotspot) => `<button class="ui-hotspot" type="button" aria-label="${hotspot.label}" data-target="${hotspot.target}" style="left:${hotspot.x}%;top:${hotspot.y}%;width:${hotspot.w}%;height:${hotspot.h}%"></button>`).join("");
  phone.classList.toggle("debug-hotspots", debugHotspots);
  [...miniMap.children].forEach((item, index) => item.classList.toggle("active", index === current));
}

hotspotLayer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-target]");
  if (!button) return;
  showRipple(event);
  goTo(button.dataset.target);
});

miniMap.addEventListener("click", (event) => {
  const button = event.target.closest("[data-index]");
  if (!button) return;
  goTo(Number(button.dataset.index));
});

backBtn.addEventListener("click", goBack);

soundBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundBtn.textContent = soundEnabled ? "音效 开" : "音效 关";
  soundBtn.setAttribute("aria-pressed", String(soundEnabled));
  if (soundEnabled) playTone("click");
});

debugBtn.addEventListener("click", () => {
  debugHotspots = !debugHotspots;
  debugBtn.textContent = debugHotspots ? "隐藏热点" : "显示热点";
  debugBtn.setAttribute("aria-pressed", String(debugHotspots));
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") goTo(Math.min(current + 1, screens.length - 1));
  if (event.key === "ArrowLeft") goBack();
  if (event.key.toLowerCase() === "h") {
    debugHotspots = !debugHotspots;
    debugBtn.textContent = debugHotspots ? "隐藏热点" : "显示热点";
    debugBtn.setAttribute("aria-pressed", String(debugHotspots));
    render();
  }
});

build();
