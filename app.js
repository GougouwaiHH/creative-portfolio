const projects = [
  {id:'tasly', brand:'天士力 · 715 祛湿节', title:'此心安处是无湿', tags:['strategy','social'], type:'整合营销', note:'学院奖营销策划优秀类', summary:'把身体感受与情绪表达写进同一个节日主题。', brief:'让偏功能沟通的节日，拥有用户听得懂、愿意参与的内容入口。', idea:'以「此心安处是无湿」为主题，串起「去感知、去释放、去守护」三个传播阶段，延展到活动、海报和媒介安排。', role:'参与消费者分析、创意主题构思、活动前期设计及媒介预算。团队完成 32 页竞赛方案。', samples:[['tasly-detail','策略与视觉节选']]},
  {id:'xiaoyi', brand:'华为小艺', title:'开口，就有“艺”外惊喜', tags:['strategy','social'], type:'年轻化传播', note:'华为花粉挑战赛全国十强', summary:'用一个可以立刻完成的动作，让年轻用户理解智能助手。', brief:'如何让年轻用户愿意理解、尝试并继续使用智能助手？', idea:'以「开口」为入口，把产品能力放进生活场景，设置四阶段活动与线下互动体验。', samples:[['xiaoyi-detail','消费者分析与体验设计']]},
  {id:'huawei', brand:'华为 · HarmonyOS 7', title:'举鸿若轻，一点即便', tags:['strategy','social'], type:'高校生态策划', note:'2026 华为花粉挑战赛 · 团队季军', summary:'把生态能力写成校园里可以理解的便利。', brief:'为中国高校场景策划鸿蒙全场景生态传播。', idea:'用「举鸿若轻，一点即便」概括产品体验，把全场景生态放进校园生活的语境。'},
  {id:'matepad', brand:'华为 · MatePad Air', title:'轻装就位，大有可为', tags:['strategy','social'], type:'校园体验策划', summary:'从高考结束到开学，把平板放进一段真实的大学生活。', brief:'刚入学的学生如何判断一台平板适不适合自己的学习方式？', idea:'围绕备考结束、开学适应和持续使用安排内容。在校园体验设想中，请学生带自己的课件，现场试做批注和整理，把产品体验落到一项熟悉的学习任务。'},
  {id:'maotai', brand:'茅台王子酒', title:'初出茅庐，我亦登台', tags:['strategy','social'], type:'i茅台 App 推广方案', summary:'让普通人的成长经历，有一个值得登上的舞台。', brief:'为品牌活动和平台参与寻找与个人成长相关的切口。', idea:'以「登台」为成长隐喻，用登山、城市舞台和纪念物承载参与。', role:'团队第二作者，参与品牌分析、活动内容撰写、预算梳理和内容提要。', samples:[['maotai-detail','执行节奏与活动物料']]},
  {id:'stage', brand:'茅台王子酒', title:'草台班子，值得喝彩', cover:'assets/stage.jpg', tags:['strategy','social'], type:'国庆节营销策划方案', note:'2026 秋季学院奖 · 银级类', summary:'用一场颁奖典礼，为那些仍在摸索的人喝彩。', brief:'用当代青年熟悉的语言，寻找「致敬奋斗者」的活动表达。', idea:'围绕「草台颁奖典礼」设计活动，让观众从日常经历里找到值得被承认的努力。', samples:[['maotai-stage','活动创意与展示选页']]},
  {id:'hbn', brand:'HBN', title:'与时间同行', tags:['strategy','social'], type:'整合传播策划方案', note:'大广赛市赛二等奖', summary:'从“希望立刻见效”的焦虑，切到可以记录的护肤过程。', brief:'护肤沟通强调快速见效时，品牌如何回应用户对过程的焦虑？', idea:'以「与时间同行」为主题，用挑战、打卡和阶段记录建立参与体验，辅以 H5 和线下场景。', samples:[['hbn-detail','主题、媒介与场景设计']]},
  {id:'battery', brand:'双鹿电池', title:'低调待命，高调响应', tags:['strategy'], type:'整合营销策划方案', summary:'让平时被忽略的一颗电池，出现在需要可靠的时刻。', brief:'电池深度嵌入日常，但稳定耐用的价值很难被主动注意。', idea:'从日常用电池的场景出发，策划「找一找、试一试、晒一晒」、科普条漫及体验活动，推进从发现到理解与验证。', samples:[['battery-detail','内容提要']]},
  {id:'bone', brand:'天劲制药', title:'一骨作气，再而生，三而强', tags:['strategy','social'], type:'健康内容传播', summary:'从大学生与家人的联系出发，寻找健康科普的表达方式。', brief:'大学生如何参与气血骨健康内容传播？', idea:'把大学生设定为家庭联络者和科普内容表达者，从认识自身、与家人沟通到面向同龄群体分享组织内容。'},
  {id:'yang', brand:'养元青', title:'顺滑秀发，养元青呵护', tags:['copy'], type:'创意视觉', summary:'以系列画面呈现产品与头发护理场景。', brief:'围绕头发护理进行广告创意表达。', idea:'以统一的产品主题串联三张系列视觉。', samples:[['yang-2','系列视觉之二'],['yang-3','系列视觉之三']]},
  {id:'yum', brand:'郁美净', title:'她的棱角，由自己定义', tags:['copy'], type:'平面广告 / 长文案', note:'学院奖平面广告入围类', summary:'用「止、必、差」的文字和物件，写下三种自己的态度。', brief:'把肌肤困扰与年轻人的情绪态度放进同一套视觉语言。', idea:'让字形与物件共同表达双关，从「到此为止吧」到「大可不必」，把三条文案收成一组。毕业季长文案以“棱角”串起从童年到走向世界的成长线。', samples:[['yum-1','止 · 温柔，也是一种边界'],['yum-2','必 · 接受修改，也坚持表达'],['yum-3','差 · 用我的方式叫停内耗']], copy:"人在年轻时，总被教导要圆润，要懂事，要把一身棱角慢慢磨平。\n好像只有温顺柔和，才算活得妥当。\n可青春本来就该有棱角，那不是尖锐，是你还在认真活着的证明。\n\n不必强迫自己勇敢。\n允许你敏感，允许你犹豫，允许你胆怯。\n允许你跨过“棱角”，\n也允许你成为棱角，\n允许你慢慢走过那些慌张的日子，\n也允许你，守住自己本来的样子。\n\n你可以如山，安静伫立，自有筋骨，不必追赶谁的脚步；\n也可以如溪，顺着心意流淌，遇寒成冰。\n柔软也能坚硬，安静也有力量，\n这何尝不是一种棱角。\n\n郁美净陪着许多人走过童年，记得你小时候的奶香，\n也懂得你长大后的倔强与坚持。\n从1979年至今的温暖，化作专业与守护，\n照顾你尚在成长的肌肤，也包容你不肯轻易妥协的心。\n\n毕业不是一段时光的结束，\n是你带着自己的棱角，正式走向世界。\n不迎合，不将就，不丢失自己。\n带上棱角，认真生活，\n这才是青春，最坦荡的打开方式。"},
  {id:'aoluo', brand:'奥络', title:'我决定原谅阿May', tags:['copy'], type:'广告长文案', summary:'用日期、保质期和回忆，把一篇产品文案写成失恋独白。', brief:'围绕「让往事过期，让守护继续」写一篇有故事的产品长文案。', idea:'借日期、罐头和衬衫让“过期”反复出现，再让产品进入故事，用同一条时间线收束情绪和品牌句。', copy:"六月七日\n我决定原谅阿May\n\n阿May走的时候说\n我脸上的痘痘比我们的爱情更长久\n她说得对\n细菌从来不看日历\n从立春到霜降\n在我毛孔里定居\n\n我数过\n一罐凤梨罐头可以保存365天\n一件衬衫可以记住她的气息92天\n但一颗痘痘的寿命\n长得让人绝望\n\n直到在便利店转角\n遇见那支小绿膏\n挤出来的瞬间\n我忽然听见碎裂的声音\n\n原来维港的灯塔亮了二百年\n奥络的配方守了三十年\n而忘记一个人\n可能只需要一个疗程\n\n奥络乳膏 香港制造 专注皮肤健康30年\n让往事过期 让守护继续", copyNote:'创意文案原稿。文中产品表述及数据按原稿保留。'}
];
const h5Projects = [
  { id:'battery', brand:'双鹿电池', title:'你的生活，缺哪一格电？', summary:'从关键时刻的电量焦虑出发，串起趣味测试、科普条漫和活动入口。', url:'https://q8qk8ry0wrgc6.space.mcode.cn/' },
  { id:'hbn', brand:'HBN', title:'个人时间账单', summary:'把护肤记录做成一份可翻阅的账单，并延伸到时光寄存与「一起破茧」。', url:'https://q0njzvjy0i2i.space.minimaxi.com/' }
];
const decks = window.portfolioDecks || {};
const byId = new Map(projects.map(project => [project.id, project]));
const detail = document.querySelector('#project-detail');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const hrefFor = id => 'project.html?work=' + encodeURIComponent(id);
const coverFor = project => decks[project.id] ? 'assets/decks/' + project.id + '/' + decks[project.id].pages[0][0] : (project.cover || 'assets/' + project.id + '.jpg');

function showIndex() {
  const grid = document.querySelector('#projects');
  const controls = [...document.querySelectorAll('[data-filter]')];

  function render(filter) {
    grid.innerHTML = projects.filter(project => filter === 'all' || project.tags.includes(filter)).map(project => {
      const count = decks[project.id]?.pages.length;
      const action = count && !decks[project.id].partial ? '完整方案' : '查看作品';
      return `<a class="case-row" id="${project.id}" href="${hrefFor(project.id)}">
        ${project.id === 'aoluo' ? '<div class="typed" aria-hidden="true">六月七日<br>我决定原谅阿May</div>' : `<img src="${coverFor(project)}" alt="" width="320" height="200" loading="lazy">`}
        <div class="row-name"><p>${project.brand} / ${project.type}</p><h3>${project.title}</h3>${project.note ? `<span class="award">${project.note}</span>` : ''}</div>
        <div class="row-action">${action}${count ? `<span>${count} 页</span>` : ''}</div></a>`;
    }).join('');
  }

  controls.forEach(button => button.addEventListener('click', () => {
    controls.forEach(control => control.setAttribute('aria-pressed', String(control === button)));
    render(button.dataset.filter);
  }));
  render('all');

  const poster = document.querySelector('.poster-hero');
  let frame = 0;
  poster.addEventListener('pointermove', event => {
    if (motion.matches || event.pointerType !== 'mouse' || frame) return;
    frame = requestAnimationFrame(() => {
      const bounds = poster.getBoundingClientRect();
      poster.style.setProperty('--drift-x', ((event.clientX - bounds.left) / bounds.width - .5) * 22 + 'px');
      poster.style.setProperty('--drift-y', ((event.clientY - bounds.top) / bounds.height - .5) * 18 + 'px');
      frame = 0;
    });
  });
  poster.addEventListener('pointerleave', () => {
    cancelAnimationFrame(frame);
    frame = 0;
    poster.style.removeProperty('--drift-x');
    poster.style.removeProperty('--drift-y');
  });

  document.querySelector('#h5-projects').innerHTML = h5Projects.map(item => `
    <a class="h5-card" href="${item.url}" target="_blank" rel="noopener"><p>${item.brand} / 互动 H5</p><h3>${item.title}</h3><p>${item.summary}</p><p class="h5-label">体验 H5 · 新标签页</p></a>`).join('');
  const legacy = location.hash.match(/^#case-([a-z]+)$/);
  if (legacy && byId.has(legacy[1])) location.replace(hrefFor(legacy[1]));
}

function renderDeck(project, deck) {
  const count = deck.pages.length;
  const [,width,height] = deck.pages[0];
  return `<section id="reader" class="reader" aria-label="${project.title}方案阅读器" tabindex="0" aria-describedby="reader-help">
    <div class="reader-heading"><strong>方案原稿</strong><p id="reader-help">左右滑动，或按方向键翻页</p><a id="reader-original" target="_blank" rel="noopener">查看原图</a></div>
    <div class="reader-screen" style="--slide-ratio:${width}/${height}"><img id="reader-image" draggable="false" alt=""><p id="reader-error" role="status" hidden>这页暂时无法加载。可以通过「查看原图」重试。</p></div>
    <div class="reader-controls"><button id="reader-previous" type="button">上一页</button>
      <form id="page-jump"><label for="page-number" class="visually-hidden">输入页码后按回车跳页</label><input id="page-number" type="number" required min="1" max="${count}" inputmode="numeric" value="1"><span aria-hidden="true">/ ${count}</span><span class="visually-hidden" id="reader-status" aria-live="polite"></span></form>
      <button id="reader-next" type="button">下一页</button></div>
  </section>`;
}

function setupReader(project, deck) {
  const reader = document.querySelector('#reader');
  const screen = reader.querySelector('.reader-screen');
  const image = reader.querySelector('#reader-image');
  const original = reader.querySelector('#reader-original');
  const previous = reader.querySelector('#reader-previous');
  const next = reader.querySelector('#reader-next');
  const input = reader.querySelector('#page-number');
  const status = reader.querySelector('#reader-status');
  const error = reader.querySelector('#reader-error');
  const count = deck.pages.length;
  let page = 1;
  let gesture;
  let transition;
  let revision = 0;
  const previews = new Map();
  const source = number => 'assets/decks/' + project.id + '/' + deck.pages[number - 1][0];

  function load(number) {
    if (!previews.has(number)) {
      const preview = new Image();
      previews.set(number, new Promise(resolve => {
        preview.onload = () => resolve(true);
        preview.onerror = () => resolve(false);
        preview.src = source(number);
      }));
      if (previews.size > 6) previews.delete(previews.keys().next().value);
    }
    return previews.get(number);
  }

  async function show(number, updateHash = true) {
    const target = Math.min(count, Math.max(1, number));
    const direction = Math.sign(target - page);
    const request = ++revision;
    page = target;
    if (updateHash) history.replaceState(null, '', '#page-' + page);
    const url = source(page);
    error.hidden = true;
    if (!image.hasAttribute('src')) {
      image.alt = project.title + ' · 第 ' + target + ' 页';
      image.src = url;
    }
    original.href = url;
    input.value = page;
    status.textContent = '第 ' + page + ' 页，共 ' + count + ' 页';
    previous.disabled = page === 1;
    next.disabled = page === count;
    const loaded = load(target);
    if (target < count) load(target + 1);
    if (target > 1) load(target - 1);
    const ready = await loaded;
    if (request !== revision) return;
    image.hidden = !ready;
    error.hidden = ready;
    if (!ready) return;
    image.alt = project.title + ' · 第 ' + target + ' 页';
    image.src = url;
    transition?.cancel();
    if (direction && !motion.matches) transition = image.animate([
      {opacity:0.35,transform:'translateX(' + 22 * direction + 'px)'},
      {opacity:1,transform:'translateX(0)'}
    ], {duration:290,easing:'cubic-bezier(.22,.72,.2,1)'});
  }

  previous.addEventListener('click', () => show(page - 1));
  next.addEventListener('click', () => show(page + 1));
  reader.querySelector('#page-jump').addEventListener('submit', event => {
    event.preventDefault();
    show(Number(input.value));
  });
  reader.addEventListener('keydown', event => {
    if (event.target === input || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    show(page + (event.key === 'ArrowRight' ? 1 : -1));
  });
  screen.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0) return;
    gesture = {id:event.pointerId,x:event.clientX,y:event.clientY};
    screen.setPointerCapture(event.pointerId);
  });
  screen.addEventListener('pointermove', event => {
    if (gesture?.id !== event.pointerId || motion.matches) return;
    const dx = event.clientX - gesture.x;
    if (Math.abs(dx) > Math.abs(event.clientY - gesture.y)) {
      transition?.cancel();
      image.style.transform = 'translateX(' + Math.max(-42, Math.min(42, dx * .26)) + 'px)';
    }
  });
  function releaseGesture() {
    const offset = image.style.transform;
    gesture = null;
    image.style.transform = '';
    if (offset && !motion.matches) transition = image.animate([{transform:offset},{transform:'translateX(0)'}], {duration:175,easing:'ease-out'});
  }
  screen.addEventListener('pointercancel', releaseGesture);
  screen.addEventListener('pointerup', event => {
    if (gesture?.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    releaseGesture();
    if (Math.abs(dx) >= 42 && Math.abs(dx) > 1.25 * Math.abs(dy)) show(page + (dx < 0 ? 1 : -1));
  });
  function restorePage() {
    const match = location.hash.match(/^#page-(\d+)$/);
    show(match ? Number(match[1]) : 1, false);
  }
  window.addEventListener('hashchange', restorePage);
  restorePage();
  if (/^#page-\d+$/.test(location.hash)) requestAnimationFrame(() => reader.scrollIntoView({block:'start',behavior:'instant'}));
}

function showProject() {
  const id = new URLSearchParams(location.search).get('work');
  const project = byId.get(id);
  if (!project) {
    detail.innerHTML = '<section class="detail-head"><h1>项目不存在</h1><a class="related-h5" href="./#work">浏览项目索引</a></section>';
    return;
  }
  document.title = project.title + '｜张嘉怡';
  const deck = decks[id];
  const related = h5Projects.find(item => item.id === id);
  detail.innerHTML = `<header class="detail-head">
    <p class="identity-line">${project.brand} / ${project.type}</p><h1>${project.title}</h1>
    ${project.note ? `<p class="award">${project.note}</p>` : ''}
    <p class="deck-summary">${project.summary}</p>
    <dl class="brief"><div><dt>命题</dt><dd>${project.brief}</dd></div><div><dt>策划思路</dt><dd>${project.idea}</dd></div>${project.role ? `<div><dt>我的工作</dt><dd>${project.role}</dd></div>` : ''}</dl>
    ${related ? `<a class="related-h5" href="${related.url}" target="_blank" rel="noopener">体验 H5 · ${related.title}</a>` : ''}
    </header>
    ${deck ? renderDeck(project, deck) : `<div class="samples">${id === 'aoluo' ? '' : `<figure><img src="${coverFor(project)}" alt="${project.title}作品图"></figure>`}${(project.samples || []).map(([file,label]) => `<figure><a href="assets/${file}.jpg" target="_blank" rel="noopener"><img loading="lazy" src="assets/${file}.jpg" alt="${label}"></a><figcaption>${label}</figcaption></figure>`).join('')}</div>`}
    ${project.copy ? `<section class="copy-sheet"><h2>文案原稿</h2>${project.copyNote ? `<p class="footnote">${project.copyNote}</p>` : ''}<div class="copy-text">${project.copy}</div></section>` : ''}`;

  if (deck) setupReader(project, deck);
}

if (detail) showProject();
else showIndex();
