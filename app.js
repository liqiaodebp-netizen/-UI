const screens = [
  {
    id: "splash",
    title: "01 启动页",
    image: "01_启动页.png",
    hotspots: [{ label: "开启我的AI星图", target: "onboarding", x: 13, y: 85, w: 74, h: 8 }],
  },
  {
    id: "onboarding",
    title: "02 选择目标",
    image: "02_引导页_选择目标.png",
    hotspots: [
      { label: "学习提升", target: "qa", x: 9, y: 41, w: 39, h: 18 },
      { label: "资料整理", target: "cloud", x: 52, y: 41, w: 39, h: 18 },
      { label: "创意表达", target: "ringtone", x: 9, y: 61, w: 39, h: 18 },
      { label: "权益补给", target: "benefits", x: 52, y: 61, w: 39, h: 18 },
      { label: "生成我的校园路线", target: "home", x: 12, y: 86, w: 76, h: 8 },
    ],
  },
  {
    id: "home",
    title: "03 AI方向盘",
    image: "03_首页_AI方向盘.png",
    hotspots: [
      { label: "消息通知", target: "messages", x: 80, y: 4, w: 8, h: 6 },
      { label: "个人中心", target: "profile", x: 8, y: 5, w: 13, h: 8 },
      { label: "通通校园", target: "qa", x: 9, y: 36, w: 39, h: 15 },
      { label: "联通云盘", target: "cloud", x: 52, y: 36, w: 39, h: 15 },
      { label: "AI视频彩铃", target: "ringtone", x: 9, y: 55, w: 39, h: 15 },
      { label: "青少年专区", target: "benefits", x: 52, y: 55, w: 39, h: 15 },
      { label: "今日任务", target: "daily", x: 7, y: 90, w: 14, h: 8 },
      { label: "AI中心", target: "qa", x: 43, y: 90, w: 14, h: 8 },
      { label: "我的", target: "profile", x: 80, y: 90, w: 14, h: 8 },
    ],
  },
  {
    id: "daily",
    title: "04 今日任务",
    image: "04_日常应用页_今日任务.png",
    hotspots: [
      { label: "AI学习计划", target: "qa", x: 13, y: 35, w: 74, h: 10 },
      { label: "云盘同步", target: "cloud", x: 13, y: 46, w: 74, h: 10 },
      { label: "彩铃草稿", target: "ringtone", x: 13, y: 57, w: 74, h: 10 },
      { label: "校园权益", target: "benefits", x: 13, y: 69, w: 74, h: 10 },
      { label: "完成今日方向", target: "campaign", x: 55, y: 78, w: 34, h: 7 },
      { label: "首页", target: "home", x: 5, y: 91, w: 14, h: 8 },
      { label: "AI中心", target: "qa", x: 43, y: 91, w: 14, h: 8 },
      { label: "我的", target: "profile", x: 80, y: 91, w: 14, h: 8 },
    ],
  },
  {
    id: "qa",
    title: "05 AI问答",
    image: "05_通通校园_AI问答.png",
    hotspots: [
      { label: "返回首页", target: "home", x: 5, y: 4, w: 12, h: 7 },
      { label: "论文助手", target: "thesis", x: 14, y: 78, w: 34, h: 8 },
      { label: "今日任务", target: "daily", x: 52, y: 78, w: 34, h: 8 },
      { label: "发送问题", target: "thesis", x: 83, y: 90, w: 10, h: 6 },
      { label: "首页", target: "home", x: 5, y: 91, w: 14, h: 8 },
      { label: "AI中心", target: "qa", x: 43, y: 91, w: 14, h: 8 },
      { label: "我的", target: "profile", x: 80, y: 91, w: 14, h: 8 },
    ],
  },
  {
    id: "thesis",
    title: "06 论文助手",
    image: "06_通通校园_论文助手.png",
    hotspots: [
      { label: "返回AI问答", target: "qa", x: 4, y: 4, w: 12, h: 7 },
      { label: "上传资料", target: "cloud", x: 8, y: 38, w: 26, h: 8 },
      { label: "AI优化写作", target: "ppt", x: 10, y: 57, w: 38, h: 10 },
      { label: "生成提纲", target: "qa", x: 52, y: 57, w: 38, h: 10 },
      { label: "开始优化", target: "ppt", x: 12, y: 86, w: 76, h: 7 },
    ],
  },
  {
    id: "cloud",
    title: "07 校园云背包",
    image: "07_联通云盘_校园云背包.png",
    hotspots: [
      { label: "返回首页", target: "home", x: 4, y: 4, w: 12, h: 7 },
      { label: "文档文件夹", target: "thesis", x: 8, y: 49, w: 18, h: 11 },
      { label: "论文文件夹", target: "thesis", x: 29, y: 49, w: 18, h: 11 },
      { label: "PPT文件夹", target: "ppt", x: 50, y: 49, w: 18, h: 11 },
      { label: "音乐素材", target: "ringtone", x: 71, y: 49, w: 18, h: 11 },
      { label: "一键同步", target: "ppt", x: 12, y: 85, w: 76, h: 7 },
      { label: "首页", target: "home", x: 5, y: 91, w: 14, h: 8 },
      { label: "我的", target: "profile", x: 80, y: 91, w: 14, h: 8 },
    ],
  },
  {
    id: "ppt",
    title: "08 AI PPT",
    image: "08_联通云盘_AI_PPT.png",
    hotspots: [
      { label: "返回云盘", target: "cloud", x: 4, y: 4, w: 12, h: 7 },
      { label: "从论文生成", target: "thesis", x: 9, y: 32, w: 20, h: 10 },
      { label: "校园模板", target: "campaign", x: 30, y: 32, w: 20, h: 10 },
      { label: "云盘素材", target: "cloud", x: 51, y: 32, w: 20, h: 10 },
      { label: "一键生成", target: "messages", x: 12, y: 86, w: 76, h: 7 },
      { label: "首页", target: "home", x: 5, y: 91, w: 14, h: 8 },
    ],
  },
  {
    id: "ringtone",
    title: "09 彩铃创作台",
    image: "09_AI视频彩铃_创作台.png",
    hotspots: [
      { label: "返回首页", target: "home", x: 4, y: 4, w: 12, h: 7 },
      { label: "播放预览", target: "templates", x: 45, y: 30, w: 12, h: 8 },
      { label: "上传素材", target: "cloud", x: 9, y: 54, w: 24, h: 10 },
      { label: "选择模板", target: "templates", x: 36, y: 54, w: 24, h: 10 },
      { label: "生成我的彩铃", target: "templates", x: 14, y: 85, w: 72, h: 7 },
    ],
  },
  {
    id: "templates",
    title: "10 模板选择",
    image: "10_AI视频彩铃_模板选择.png",
    hotspots: [
      { label: "返回创作台", target: "ringtone", x: 4, y: 4, w: 12, h: 7 },
      { label: "青春模板", target: "messages", x: 8, y: 18, w: 84, h: 17 },
      { label: "毕业模板", target: "messages", x: 8, y: 39, w: 40, h: 18 },
      { label: "动漫模板", target: "messages", x: 52, y: 39, w: 40, h: 18 },
      { label: "使用此模板", target: "messages", x: 58, y: 88, w: 34, h: 6 },
    ],
  },
  {
    id: "benefits",
    title: "11 权益首页",
    image: "11_青少年专区_权益首页.png",
    hotspots: [
      { label: "消息通知", target: "messages", x: 82, y: 4, w: 8, h: 6 },
      { label: "会员权益", target: "campaign", x: 8, y: 24, w: 84, h: 15 },
      { label: "学习会员", target: "qa", x: 8, y: 43, w: 18, h: 12 },
      { label: "视频娱乐", target: "ringtone", x: 30, y: 43, w: 18, h: 12 },
      { label: "出行优惠", target: "cloud", x: 52, y: 43, w: 18, h: 12 },
      { label: "个人中心", target: "profile", x: 82, y: 91, w: 12, h: 7 },
      { label: "首页", target: "home", x: 5, y: 91, w: 12, h: 7 },
    ],
  },
  {
    id: "campaign",
    title: "12 追梦路线图",
    image: "12_活动H5_追梦路线图.png",
    hotspots: [
      { label: "返回权益", target: "benefits", x: 4, y: 4, w: 12, h: 7 },
      { label: "AI学习站", target: "qa", x: 18, y: 42, w: 22, h: 12 },
      { label: "云背包站", target: "cloud", x: 55, y: 51, w: 24, h: 12 },
      { label: "彩铃舞台", target: "ringtone", x: 28, y: 66, w: 24, h: 12 },
      { label: "点亮下一站", target: "messages", x: 17, y: 86, w: 66, h: 7 },
    ],
  },
  {
    id: "messages",
    title: "13 消息通知",
    image: "13_消息通知.png",
    hotspots: [
      { label: "AI提醒", target: "daily", x: 10, y: 23, w: 80, h: 10 },
      { label: "云盘同步", target: "cloud", x: 10, y: 34, w: 80, h: 10 },
      { label: "彩铃已生成", target: "ringtone", x: 10, y: 45, w: 80, h: 10 },
      { label: "权益待领取", target: "benefits", x: 10, y: 56, w: 80, h: 10 },
      { label: "个人中心", target: "profile", x: 82, y: 91, w: 12, h: 7 },
      { label: "首页", target: "home", x: 43, y: 91, w: 14, h: 8 },
    ],
  },
  {
    id: "profile",
    title: "14 个人中心",
    image: "14_个人中心.png",
    hotspots: [
      { label: "设置", target: "settings", x: 82, y: 5, w: 9, h: 7 },
      { label: "权益等级", target: "benefits", x: 61, y: 17, w: 28, h: 16 },
      { label: "AI学习", target: "qa", x: 8, y: 43, w: 18, h: 11 },
      { label: "云背包", target: "cloud", x: 31, y: 43, w: 18, h: 11 },
      { label: "彩铃", target: "ringtone", x: 54, y: 43, w: 18, h: 11 },
      { label: "我的权益", target: "benefits", x: 10, y: 64, w: 80, h: 7 },
      { label: "首页", target: "home", x: 42, y: 91, w: 16, h: 8 },
    ],
  },
  {
    id: "settings",
    title: "15 设置页",
    image: "15_设置页.png",
    hotspots: [
      { label: "返回个人中心", target: "profile", x: 4, y: 4, w: 12, h: 7 },
      { label: "账号安全", target: "profile", x: 8, y: 25, w: 84, h: 7 },
      { label: "通知设置", target: "messages", x: 8, y: 35, w: 84, h: 7 },
      { label: "AI生成偏好", target: "qa", x: 8, y: 54, w: 84, h: 7 },
      { label: "青少年模式", target: "benefits", x: 8, y: 64, w: 84, h: 7 },
      { label: "首页", target: "home", x: 37, y: 90, w: 26, h: 7 },
    ],
  },
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

function initAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playTone(type = "click") {
  if (!soundEnabled) return;
  initAudio();
  const now = audioContext.currentTime;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = type === "back" ? "triangle" : "sine";
  osc.frequency.setValueAtTime(type === "back" ? 360 : 620, now);
  osc.frequency.exponentialRampToValueAtTime(type === "back" ? 180 : 920, now + 0.13);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(type === "back" ? 0.08 : 0.12, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
  osc.connect(gain).connect(audioContext.destination);
  osc.start(now);
  osc.stop(now + 0.17);
}

function findIndex(id) {
  return screens.findIndex((screen) => screen.id === id);
}

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
  if (historyStack.length) {
    goTo(historyStack.pop(), { fromHistory: true, back: true });
  } else if (current !== 0) {
    goTo("home", { back: true });
  }
}

function build() {
  stack.innerHTML = screens
    .map(
      (screen, index) => `
        <article class="screen ${index === 0 ? "active" : ""}" data-id="${screen.id}">
          <img src="./assets/screens/${screen.image}" alt="${screen.title}" />
        </article>
      `,
    )
    .join("");

  miniMap.innerHTML = screens
    .map((screen, index) => `<button type="button" data-index="${index}">${screen.title.replace(/^[0-9]+\\s*/, "")}</button>`)
    .join("");

  render();
}

function render() {
  const screenNodes = [...document.querySelectorAll(".screen")];
  screenNodes.forEach((node, index) => {
    node.classList.toggle("active", index === current);
    node.classList.toggle("exit-left", index === previous && current > previous);
    node.classList.toggle("exit-right", index === previous && current < previous);
  });

  const screen = screens[current];
  title.textContent = screen.title;
  hotspotLayer.innerHTML = screen.hotspots
    .map(
      (hotspot) => `
        <button
          class="ui-hotspot"
          type="button"
          aria-label="${hotspot.label}"
          data-target="${hotspot.target}"
          style="left:${hotspot.x}%;top:${hotspot.y}%;width:${hotspot.w}%;height:${hotspot.h}%"
        ></button>
      `,
    )
    .join("");

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
