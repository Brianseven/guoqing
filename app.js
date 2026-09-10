
const bookings = [
  {
    id:"zhongshan", name:"中山陵", city:"南京", visit:"2026-09-30",
    level:"必须预约", type:"must",
    status:"重点监控",
    rule:"实行实名预约免费参观。公开官方页面目前未给出长期固定的“提前几天/几点放票”规则，因此目标日期一开放就立即预约。",
    action:"每天检查 9 月 30 日是否已经可选；开放后优先预约上午时段。",
    url:"https://zschina.nanjing.gov.cn/fjms/fwzn/mpxx/"
  },
  {
    id:"mingxiaoling", name:"明孝陵", city:"南京", visit:"2026-09-30",
    level:"建议提前购票", type:"suggest",
    status:"可现场购票",
    rule:"钟山收费景点可线上购买，也可入口现场购票。国庆前夕建议提前处理，减少现场排队。",
    action:"9 月 29 日前完成购票或再次核对国庆专项通知。",
    url:"https://zschina.nanjing.gov.cn/lyzx/202506/t20250623_5591074.html"
  },
  {
    id:"musicstage", name:"音乐台", city:"南京", visit:"2026-09-30",
    level:"建议提前购票", type:"suggest",
    status:"可现场购票",
    rule:"音乐台为收费景点，可线上或现场购票；国庆前建议和明孝陵一起处理。",
    action:"9 月 29 日前确认。",
    url:"https://zschina.nanjing.gov.cn/lyzx/202506/t20250623_5591074.html"
  },
  {
    id:"jiming", name:"鸡鸣寺", city:"南京", visit:"2026-09-30",
    level:"临近确认", type:"suggest",
    status:"临近再核",
    rule:"电子香花券可通过官方微信服务号“南朝首刹鸡鸣寺”处理；国庆是否临时限流，以临近官方通知为准。",
    action:"9 月 29 日晚和 9 月 30 日早再次检查官方渠道。",
    url:"https://weibo.com/u/2024901692"
  },
  {
    id:"niushou", name:"牛首山文化旅游区", city:"南京", visit:"2026-10-01",
    level:"必须提前处理", type:"must",
    status:"重点监控",
    rule:"实行预约分时入园。国庆首日客流大，10 月 1 日日期一开放就直接购买，不拖到前一天。",
    action:"每天检查 10 月 1 日是否开放；一开放就选最早可接受时段。",
    url:"https://www.niushoushan.net/piaowuzhengce/2176.html"
  }
];

const itinerary = [
  ["2026-09-24","北京 → 威海","23:59 北京丰台乘 K411，夜宿火车"],
  ["2026-09-25","威海","14:25 到达；入住滨海大道住宿；九龙湾海边＋韩乐坊"],
  ["2026-09-26","威海","火炬八街 → 国际海水浴场 → 猫头山 → 海源公园/威海公园"],
  ["2026-09-27","威海 → 青岛","12:53 D8154 → 14:59 青岛北；入住瑞海北路；傍晚后海"],
  ["2026-09-28","青岛","栈桥 → 中山路/天主教堂 → 大学路 → 八大关 → 五四广场 → 奥帆中心"],
  ["2026-09-29","青岛 → 南京","11:48 D2853 → 16:47 南京南；晚间老门东＋夫子庙＋秦淮河"],
  ["2026-09-30","南京","明孝陵 → 中山陵 → 音乐台 → 鸡鸣寺 → 玄武湖"],
  ["2026-10-01","南京","牛首山；晚间新街口"],
  ["2026-10-02","南京 → 邢台","15:09 南京站乘 K234"],
  ["2026-10-03","邢台","04:59 抵达"]
];

const restaurants = [
  {
    date:"2026-09-25", time:"18:30 晚餐", city:"威海",
    name:"巧克力渔家·小船海鲜家常菜（韩乐坊店）",
    budget:"约 ¥80/人",
    fit:"第一天傍晚本来就去韩乐坊，直接在韩乐坊吃，不增加额外交通。",
    dishes:"特色鲅鱼水饺、海肠贝丁捞饭、海鲜疙瘩汤、老灶蒸汽海鲜",
    note:"近期页面显示 11:00–22:30；热门时段建议提前到或线上取号。",
    url:"https://tw.trip.com/restaurant/china/weihai/detail/qiao-ke-li-seafood-home-style-cuisine-152786166/"
  },
  {
    date:"2026-09-26", time:"10:45–12:00 早午餐", city:"威海",
    name:"海鑫海鲜烧烤家常菜饺子馆（海水浴场店）",
    budget:"约 ¥76/人",
    fit:"就在火炬八街/国际海水浴场片区，逛完海水浴场先吃饭，再打车去猫头山最顺。",
    dishes:"鲅鱼水饺、海肠捞饭、鱼锅饼子、蒸汽海鲜锅",
    note:"地址：环海路185-107号（游客中心对面）。当天海鲜按明码价点，先问价再下单。",
    url:"https://you.ctrip.com/food/weihai169/7519547-dianping.html"
  },
  {
    date:"2026-09-28", time:"11:30–13:00 午餐", city:"青岛",
    name:"九龙餐厅（大沽路店）",
    budget:"约 ¥68/人",
    fit:"位于老城区，适合栈桥—中山路—天主教堂之后吃午饭，再继续大学路/八大关。",
    dishes:"辣大肠、蛤蜊小白菜、红烧刀鱼、辣蛤蜊、海肠捞饭",
    note:"近期页面显示午市 11:00–14:00；建议 11:30 前到，避免老店排队。",
    url:"https://gs.ctrip.com/html5/you/foods/fooddetail/5/5057173.html"
  },
  {
    date:"2026-09-28", time:"18:30–20:00 晚餐", city:"青岛",
    name:"船歌·鱼水饺青岛菜（闽江二路店）",
    budget:"约 ¥100/人",
    fit:"五四广场/奥帆中心结束后短途前往，吃完再回青岛北站方向，不需要重新折返老城区。",
    dishes:"墨鱼水饺、鲅鱼水饺、黄花鱼水饺、辣炒蛤蜊、辣炒小鲍鱼",
    note:"近期页面显示 10:30–21:30。若当天太累，可改在五四广场附近就餐。",
    url:"https://gs.ctrip.com/html5/you/foods/fooddetail/2119889/5058125.html"
  },
  {
    date:"2026-09-29", time:"19:00 晚餐＋甜品", city:"南京",
    name:"清真蒋有记（老门东店）＋蓝老大糖粥藕",
    budget:"约 ¥40–60/人",
    fit:"两家都在老门东三条营附近，正好嵌入老门东→夫子庙→秦淮河夜游路线。",
    dishes:"蒋有记：牛肉锅贴、牛肉馄饨；蓝老大：糖芋苗、酒酿赤豆元宵、糖藕粥",
    note:"蒋有记近期页面显示 08:30–22:00，蓝老大 10:00–22:00；适合边逛边吃，不建议夫子庙主街再吃一顿正餐。",
    url:"https://gs.ctrip.com/html5/you/foods/Nanjing9/12501082.html",
    url2:"https://gs.ctrip.com/html5/you/foods/fooddetail/9/5105636.html"
  },
  {
    date:"2026-10-01", time:"17:30–19:00 晚餐", city:"南京",
    name:"南京大牌档（德基店）",
    budget:"约 ¥70/人",
    fit:"牛首山返程后本来就安排新街口，直接把南京菜正餐放在这里，不占白天景区时间。",
    dishes:"盐水鸭、古法糖芋苗、赤豆元宵、美龄粥、狮子头、烤鸭包",
    note:"近期平台页面显示德基一期7楼；不同地图平台对营业状态存在差异，国庆当天务必先电话/商场页面确认，若停业就在新街口就近换南京菜。",
    url:"https://gs.ctrip.com/html5/you/foods/fooddetail/9/5089491.html"
  }
];

function localDate(ymd){
  const [y,m,d]=ymd.split("-").map(Number);
  return new Date(y,m-1,d,12,0,0);
}
function today(){
  const x=new Date(); return new Date(x.getFullYear(),x.getMonth(),x.getDate(),12,0,0);
}
function daysTo(ymd){ return Math.ceil((localDate(ymd)-today())/86400000); }
function zh(ymd){ const [y,m,d]=ymd.split("-"); return `${Number(m)}月${Number(d)}日`; }

function renderBookings(){
  const done=JSON.parse(localStorage.getItem("bookingDone")||"{}");
  const wrap=document.getElementById("bookingGrid");
  wrap.innerHTML=bookings.map(x=>{
    const isDone=!!done[x.id];
    return `<article class="booking-card">
      <div class="booking-top">
        <div><h3>${x.name}</h3><div class="meta">${x.city} · ${zh(x.visit)} · ${x.status}</div></div>
        <span class="status ${isDone?"done":x.type}">${isDone?"已完成":x.level}</span>
      </div>
      <div class="rule"><strong>规则：</strong>${x.rule}</div>
      <p><strong>现在怎么做：</strong>${x.action}</p>
      <div class="actions">
        <a href="${x.url}" target="_blank" rel="noopener">官方渠道</a>
        <button class="done-btn" onclick="toggleDone('${x.id}')">${isDone?"改为未完成":"我已预约/购票"}</button>
      </div>
    </article>`;
  }).join("");
}
window.toggleDone=function(id){
  const done=JSON.parse(localStorage.getItem("bookingDone")||"{}");
  done[id]=!done[id];
  localStorage.setItem("bookingDone",JSON.stringify(done));
  renderBookings(); renderToday();
}

function renderTimeline(){
  document.getElementById("timeline").innerHTML=itinerary.map(x=>`
    <article class="day">
      <div class="day-date">${zh(x[0])}</div>
      <h3>${x[1]}</h3><p>${x[2]}</p>
    </article>`).join("");
}

function renderToday(){
  const d=daysTo("2026-09-24");
  document.getElementById("tripCountdown").textContent=d>0?`${d} 天`:d===0?"今天":"已出发";
  const done=JSON.parse(localStorage.getItem("bookingDone")||"{}");
  const pending=bookings.filter(x=>!done[x.id] && daysTo(x.visit)>=0);
  const title=document.getElementById("todayTitle"), text=document.getElementById("todayText");
  if(!pending.length){
    title.textContent="当前预约清单已处理";
    text.textContent="已没有未完成的目标景点预约。";
    return;
  }
  const urgent=pending.filter(x=>daysTo(x.visit)<=3);
  if(urgent.length){
    title.textContent=`优先处理：${urgent.map(x=>x.name).join("、")}`;
    text.textContent=urgent.map(x=>`${x.name}：${x.action}`).join(" ");
  }else{
    title.textContent="今日继续检查重点景点";
    text.textContent="重点监控中山陵 9 月 30 日与牛首山 10 月 1 日目标日期是否开放；如未开放，今天无需盲目购买第三方票。";
  }
}

function renderFood(){
  const wrap=document.getElementById("foodGrid");
  if(!wrap) return;
  wrap.innerHTML=restaurants.map(x=>`
    <article class="food-card">
      <div class="food-head">
        <div><div class="food-date">${zh(x.date)} · ${x.time}</div><h3>${x.name}</h3></div>
        <span class="food-budget">${x.budget}</span>
      </div>
      <p class="food-fit"><strong>为什么顺路：</strong>${x.fit}</p>
      <p><strong>推荐点：</strong>${x.dishes}</p>
      <p class="food-note">${x.note}</p>
      <div class="actions">
        <a href="${x.url}" target="_blank" rel="noopener">查看餐厅</a>
        ${x.url2?`<a href="${x.url2}" target="_blank" rel="noopener">查看甜品店</a>`:""}
      </div>
    </article>`).join("");
}

function makeICS(){
  const reminders=[
    ["20260920T080000","检查中山陵9月30日预约","打开官方预约渠道，检查9月30日是否开放；开放就立即预约。"],
    ["20260920T081000","检查牛首山10月1日门票","检查10月1日是否开放预约；开放就立即购买。"],
    ["20260929T200000","最终核对南京景区预约","确认中山陵、明孝陵、音乐台、鸡鸣寺与牛首山票务状态。"],
    ["20260930T063000","今天：钟山＋鸡鸣寺","带身份证/预约凭证，按中山陵预约时段游览。"],
    ["20261001T070000","今天：牛首山","确认预约时段、二维码与入园证件。"]
  ];
  const esc=s=>s.replace(/,/g,"\\,").replace(/;/g,"\\;");
  const events=reminders.map(([dt,title,desc],i)=>`BEGIN:VEVENT
UID:trip-${i}@guoqing-trip-2026
DTSTAMP:20260911T000000Z
DTSTART;TZID=Asia/Shanghai:${dt}
SUMMARY:${esc(title)}
DESCRIPTION:${esc(desc)}
BEGIN:VALARM
TRIGGER:-PT30M
ACTION:DISPLAY
DESCRIPTION:${esc(title)}
END:VALARM
END:VEVENT`).join("\n");
  const ics=`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Guoqing Trip 2026//CN
CALSCALE:GREGORIAN
METHOD:PUBLISH
${events}
END:VCALENDAR`;
  const blob=new Blob([ics],{type:"text/calendar;charset=utf-8"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob);
  a.download="2026国庆景区预约提醒.ics"; a.click(); URL.revokeObjectURL(a.href);
}

document.getElementById("calendarBtn").addEventListener("click",makeICS);
document.getElementById("shareBtn").addEventListener("click",async()=>{
  const data={title:"2026 国庆旅行管家",text:"威海·青岛·南京行程与景区预约提醒",url:location.href};
  if(navigator.share){ try{await navigator.share(data)}catch(e){} }
  else{ await navigator.clipboard.writeText(location.href); alert("网站链接已复制"); }
});

renderBookings(); renderTimeline(); renderFood(); renderToday();
