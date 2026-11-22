'use strict';
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));
const paths = {
 pin:'<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
 bag:'<path d="M5 7h14l1 14H4L5 7Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
 cloche:'<path d="M2 17h20M4 15a8 8 0 0 1 16 0ZM7 20h10M12 7V4m-1.5 0h3"/>',
 search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 heart:'<path d="M20.5 4.9a5.1 5.1 0 0 0-7.2 0L12 6.2l-1.3-1.3a5.1 5.1 0 0 0-7.2 7.2L12 20.5l8.5-8.4a5.1 5.1 0 0 0 0-7.2Z"/>',
 clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>',
 star:'<path d="m12 2.5 2.8 5.9 6.5.9-4.7 4.6 1.1 6.4-5.7-3-5.7 3 1.1-6.4-4.7-4.6 6.5-.9Z"/>',
 sparkle:'<path d="m12 2 2.1 7.8L22 12l-7.9 2.1L12 22l-2.1-7.9L2 12l7.9-2.2Z"/>',
 sliders:'<path d="M3 7h6m4 0h8M3 17h10m4 0h4"/><circle cx="11" cy="7" r="2"/><circle cx="15" cy="17" r="2"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.3"/><rect x="14" y="3" width="7" height="7" rx="1.3"/><rect x="3" y="14" width="7" height="7" rx="1.3"/><rect x="14" y="14" width="7" height="7" rx="1.3"/>',
 pizza:'<path d="m3.5 20 4-16a21 21 0 0 1 13 12.5l-17 3.5ZM7 7a18 18 0 0 1 10.6 10"/><circle cx="8.8" cy="14" r="1.1"/><circle cx="11" cy="10.8" r=".6"/>',
 ramen:'<path d="M2.5 11h19a9.5 9.5 0 0 1-19 0Zm4 8.2V21h11v-1.8M7 7l12-5M9 9l12-3"/>',
 biryani:'<path d="M3 13h18a9 9 0 0 1-18 0ZM5.5 12a6.5 6.5 0 0 1 13 0M9 20.5h6M10 6V4m4 2V3"/><path d="M7 10h1m3-2h1m2.5 2h1"/>',
 burger:'<path d="M3 10a9 7 0 0 1 18 0ZM3 13l4 1.5 5-2 5 2 4-1.5M3 17h18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>',
 dessert:'<path d="m3 12 13-7 5 7v8H3ZM3 12h18M3 16q2-2 4 0t4 0 4 0 6 0"/><circle cx="15" cy="4.5" r="1.5"/>',
 leaf:'<path d="M20.5 3.5s1 11-5.3 15.3a7 7 0 0 1-9.3-10C10 5.5 16 7 20.5 3.5ZM3 21l12-11"/>',
 'chevron-left':'<path d="m14.5 6-6 6 6 6"/>','chevron-right':'<path d="m9.5 6 6 6-6 6"/>','chevron-down':'<path d="m6 9 6 6 6-6"/>','chevron-up':'<path d="m6 15 6-6 6 6"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',x:'<path d="m6 6 12 12M18 6 6 18"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',check:'<path d="m4 12 5 5L20 6"/>',receipt:'<path d="M5 3l2 1.5L9 3l3 1.5L15 3l2 1.5L19 3v18l-3-1.5-4 1.5-4-1.5L5 21ZM8.5 9h7m-7 4h5"/>'
};
function icon(name){return '<svg aria-hidden="true" class="icon" viewBox="0 0 24 24">'+(paths[name]||'')+'</svg>'}
$$('[data-icon]').forEach(el=>{const node=document.createElement('span');node.innerHTML=icon(el.dataset.icon);if(el.className)node.firstChild.classList.add(el.className);el.replaceWith(node.firstChild)});
const cuisines=[['All cuisines','grid'],['Pizza','pizza'],['Burgers','burger'],['Asian','ramen'],['Indian','biryani'],['Desserts','dessert'],['Healthy','leaf']];
const restaurants=[
 {id:'forno',name:'Forno Vecchio',category:'Pizza',style:'Wood-fired pizza · Italian',area:'Indiranagar',img:'pizza',alt:'Wood-fired Margherita with fresh basil and blistered crust',rating:4.8,time:25,badge:"Chef’s pick",menu:[
 ['Margherita Classica',345,'San Marzano tomato, fior di latte and fresh basil.',1],['Hot Honey Pepperoni',425,'Pepperoni, chilli honey and aged mozzarella.',0],['Roasted Garlic Bianca',375,'Ricotta, roasted garlic and rosemary oil.',1]]},
 {id:'miso',name:'Miso House',category:'Asian',style:'Ramen · Japanese',area:'Koramangala',img:'ramen',alt:'Ramen in a black bowl with soft egg and fresh scallions',rating:4.7,time:30,menu:[
 ['Signature Miso Ramen',365,'Miso broth, chicken, spring onions and a soft egg.',0],['Sesame Mushroom Ramen',335,'Mushrooms, bok choy and sesame in vegetable broth.',1],['Crispy Chicken Gyoza',245,'Pan-seared chicken dumplings with ginger soy.',0]]},
 {id:'saffron',name:'Saffron & Smoke',category:'Indian',style:'Dum biryani · North Indian',area:'Jayanagar',img:'biryani',alt:'Saffron basmati biryani in a copper serving pot',rating:4.9,time:30,menu:[
 ['Dum Chicken Biryani',325,'Slow-cooked basmati, saffron and spiced chicken.',0],['Paneer Tikka Biryani',295,'Charcoal-grilled paneer, basmati and fried onions.',1],['Dal Makhani',235,'Black lentils simmered with butter and tomato.',1]]},
 {id:'ember',name:'Ember & Oak',category:'Burgers',style:'Smash burgers · American',area:'Indiranagar',img:'classic-burger',alt:'Double cheeseburger with a toasted golden bun',rating:4.8,time:20,menu:[
 ['The Truffle Smash',395,'Double smash patty, aged cheddar, truffle mayo and caramelised onions.',0],['The Classic Melt',315,'Griddled patty, American cheese, pickles and house sauce.',0],['Crispy Shroom Burger',295,'Panko mushroom, smoked cheese and pepper aioli.',1]]},
 {id:'cacao',name:'Atelier Cacao',category:'Desserts',style:'Chocolate · Patisserie',area:'Koramangala',img:'dessert',alt:'Rich chocolate dessert with a dark ganache finish',rating:4.8,time:20,menu:[
 ['Dark Chocolate Délice',265,'Layered chocolate mousse with a glossy ganache finish.',1],['Salted Caramel Tart',245,'A crisp butter shell filled with salted caramel.',1],['Brown Butter Cookie',145,'Chocolate chunks, browned butter and sea salt.',1]]},
 {id:'garden',name:'The Garden Bowl',category:'Healthy',style:'Grain bowls · Salads',area:'Whitefield',img:'greens',alt:'Fresh greens, seasonal vegetables and grains arranged in a bowl',rating:4.6,time:20,menu:[
 ['Green Goddess Bowl',285,'Herbed grains, avocado, garden greens and tahini.',1],['Roasted Harvest Bowl',265,'Sweet potato, chickpeas and a zesty lemon dressing.',1],['Tofu Sesame Salad',255,'Seared tofu, crunchy greens and toasted sesame.',1]]}
];
const byId=Object.fromEntries(restaurants.map(r=>[r.id,r]));
const areas=['Indiranagar','Koramangala','Jayanagar','Whitefield','Thalaghattapura'];
const defaults={sort:'recommended',veg:false,quick:false};
function read(key,fallback){try{return JSON.parse(localStorage.getItem('pent-'+key))??fallback}catch{return fallback}}
function write(key,val){try{localStorage.setItem('pent-'+key,JSON.stringify(val))}catch{}}
const bag=read('bag',{}), saved=new Set(read('saved',[])), orders=read('orders',[]);
let featuredMenu=false;
let area=read('area',''),category='All cuisines',view='discover',filters={...defaults},slide=0,currentMenu='',currentPanel='';
const panel=$('#panel'), panelContent=$('#panel-content');
const money=n=>'₹'+n.toLocaleString('en-IN');
function escapeText(str){return String(str).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function eta(r){return r.time+(area&&area!==r.area?5:0)}
function spanTime(r){return eta(r)+'–'+(eta(r)+10)+' min'}
function showNotice(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(showNotice.t);showNotice.t=setTimeout(()=>t.classList.remove('show'),2200)}
function emptyState(ico,title,msg,btn,action){return '<div class="empty-state">'+icon(ico)+'<h3>'+title+'</h3><p>'+msg+'</p>'+(btn?'<button class="text-action" data-act="'+action+'">'+btn+'</button>':'')+'</div>'}
function renderCategories(){$('#categories').innerHTML=cuisines.map(([name,i])=>'<button class="chip '+(name===category?'selected':'')+'" aria-pressed="'+(name===category)+'" data-cat="'+name+'">'+icon(i)+name+'</button>').join('')}
const cardObserver='IntersectionObserver' in window?new IntersectionObserver(entries=>{
 for(const entry of entries)if(entry.isIntersecting){entry.target.classList.remove('pending-reveal');cardObserver.unobserve(entry.target)}
},{threshold:.04}):null;
function renderCards(){
 cardObserver?.disconnect();
 const query=$('#search').value.toLowerCase().trim();
 let shown=restaurants.filter(r=>(view!=='saved'||saved.has(r.id))&&(category==='All cuisines'||r.category===category)&&(!filters.quick||eta(r)+10<=30)&&[r.name,r.style,r.category,r.area,...r.menu.filter(m=>!filters.veg||m[3]).map(m=>m[0])].join(' ').toLowerCase().includes(query)&&(!filters.veg||r.menu.some(m=>m[3])));
 if(filters.sort==='rating')shown.sort((a,b)=>b.rating-a.rating);
 if(filters.sort==='fastest')shown.sort((a,b)=>eta(a)-eta(b));
 if(filters.sort==='price')shown.sort((a,b)=>Math.min(...a.menu.map(m=>m[1]))-Math.min(...b.menu.map(m=>m[1])));
 $('#collection-title').innerHTML=(view==='saved'?'Saved restaurants':'Explore restaurants')+'<span>.</span>';
 $('#collection-kicker').textContent=view==='saved'?'YOUR COLLECTION':'THE LOCAL SELECTION';
 $$('.nav-link').forEach(n=>n.classList.toggle('active',n.dataset.nav===view));
 const count=Number(filters.quick)+Number(filters.veg)+Number(filters.sort!=='recommended');$('#filter-count').hidden=!count;$('#filter-count').textContent=count;
 $('#cards').innerHTML=shown.map((r,index)=>`<article class="restaurant" style="--delay:${Math.min(index,2)*.045}s"><button class="save-btn ${saved.has(r.id)?'is-saved':''}" data-save="${r.id}" aria-label="${saved.has(r.id)?'Unsave':'Save'} ${r.name}" aria-pressed="${saved.has(r.id)}">${icon('heart')}</button><a href="#menu-${r.id}" data-menu="${r.id}"><div class="card-image"><img src="assets/${r.img}.webp" alt="${r.alt}" ${index>2?'loading="lazy"':''}>${r.badge?'<span class="badge">'+icon('sparkle')+r.badge+'</span>':''}</div><div class="card-body"><div class="card-title"><h3>${r.name}</h3><span class="rating">${icon('star')}${r.rating.toFixed(1)}</span></div><p class="card-desc">${r.style}</p><div class="card-meta">${icon('clock')} ${spanTime(r)} <span class="meta-dot">·</span> ${r.area}</div></div></a></article>`).join('') || (view==='saved'&&!saved.size?emptyState('heart','Your saved restaurants','Tap the heart on a restaurant to keep it here.','Explore restaurants','discover'):emptyState('search','No restaurants found','Try a different dish, cuisine or filter.','Clear filters','reset'));
 if(cardObserver&&!reduceMotion())for(const card of $$('.restaurant')){card.classList.add('pending-reveal');cardObserver.observe(card)}
 $('#results-count').textContent=shown.length+' restaurants shown';
}
function browse(target='discover'){view=target;category='All cuisines';filters={...defaults};$('#search').value='';renderCategories();renderCards();closePanel();$('#restaurants').scrollIntoView({behavior:reduceMotion()?'instant':'smooth'});}
function reduceMotion(){return window.matchMedia('(prefers-reduced-motion: reduce)').matches}
function moveSlide(step){slide=(slide+step+3)%3;$('#assembly-track').classList.toggle('other-slide',slide!==0);$$('.hero-photo').forEach((el,i)=>el.classList.toggle('current',i===slide));$('#slide-counter').innerHTML='0'+(slide+1)+' <span>/</span> 03';$('#feature-name').textContent=['The Truffle Smash','Margherita Classica','Signature Miso Ramen'][slide]}
const tickerItems=['Chef-led kitchens','Freshly made to order','Local favourites','Delivered with care'];
const tickerGroup='<div class="ticker-group">'+[...tickerItems,...tickerItems].map(t=>'<span><b>✧</b>'+t+'</span>').join('')+'</div>';
$('#ticker-track').innerHTML=tickerGroup+tickerGroup;
renderCategories();renderCards();
const closeButton='<button class="close-btn" data-act="close" aria-label="Close dialog">'+icon('x')+'</button>';
function heading(title){return '<div class="panel-head"><h2 id="panel-title" tabindex="-1">'+title+'</h2>'+closeButton+'</div>'}
function openPanel(type,html,maintain=false){
 const oldScroll=maintain?panel.scrollTop:0,previouslyOpen=panel.open;
 currentPanel=type;panelContent.innerHTML=html;
 if(!previouslyOpen)panel.showModal();
 if(!maintain)$('#panel-title')?.focus({preventScroll:true});
 panel.scrollTop=oldScroll;
}
function closePanel(){if(panel.open)panel.close()}
function bagLines(){return Object.entries(bag).flatMap(([key,qty])=>{
 const [rid,idx]=key.split(':');const r=byId[rid],item=r?.menu[Number(idx)];
 return item&&Number.isInteger(qty)&&qty>0?[{key,r,item,qty}]:[];
})}
function costs(){const lines=bagLines(),count=lines.reduce((s,l)=>s+l.qty,0),sub=lines.reduce((s,l)=>s+l.item[1]*l.qty,0),fee=sub?35:0;return {lines,count,sub,fee,total:sub+fee}}
function syncBag(){const c=costs().count;$('#bag-num').textContent=c;$('.bag-btn').setAttribute('aria-label','Open bag, '+c+' items');write('bag',bag);refreshSignatureQuantities()}
function stepper(key){const [rid,idx]=key.split(':'),name=byId[rid].menu[idx][0];return bag[key]?`<div class="stepper"><button data-dec="${key}" aria-label="Remove one ${name}">${icon('minus')}</button><span>${bag[key]}</span><button data-inc="${key}" aria-label="Add one ${name}">${icon('plus')}</button></div>`:`<button class="add-btn" data-inc="${key}" aria-label="Add ${name}">${icon('plus')} Add</button>`}
function showMenu(rid,maintain=false,featured=false){
 const r=byId[rid];if(!r)return;currentMenu=rid;featuredMenu=featured;
 const vegetarianOnly=filters.veg&&!featured;
 const image=featured&&r.id==='ember'?'truffle-hero':r.img;
 openPanel('menu',`<div class="menu-cover" style="background-image:linear-gradient(0deg,#0b0c0ce6,transparent 100%),url('assets/${image}.webp')">${closeButton}<div class="eyebrow">RESTAURANT MENU</div><h2 id="panel-title" tabindex="-1">${r.name}</h2><p>${r.style} · ${spanTime(r)}</p></div><div class="panel-pad"><h3 class="section-title">${vegetarianOnly?'Vegetarian dishes':'On the menu'}</h3>${r.menu.map((m,i)=>vegetarianOnly&&!m[3]?'':`<div class="food-row"><div><h4>${m[3]?'<span class="diet" title="Vegetarian" aria-label="Vegetarian"></span>':''}${m[0]}</h4><p>${m[2]}</p><strong>${money(m[1])}</strong></div>${stepper(r.id+':'+i)}</div>`).join('')}${costs().count?'<button class="primary-btn" data-panel="bag">'+icon('bag')+'View bag · '+money(costs().total)+'</button>':''}</div>`,maintain);
}
function totalsHtml(t){return `<div class="costs"><div><span>Item subtotal</span><span>${money(t.sub)}</span></div><div><span>Delivery fee</span><span>${money(t.fee)}</span></div><div class="total"><span>Total</span><strong>${money(t.total)}</strong></div></div>`}
function showBag(maintain=false){
 const t=costs();openPanel('bag','<div class="panel-pad">'+heading('Your bag')+(t.count?t.lines.map(l=>`<div class="bag-line"><img src="assets/${l.r.img}.webp" alt=""><div class="details"><h4>${l.item[0]}</h4><p>${l.r.name}</p><strong class="price">${money(l.item[1]*l.qty)}</strong></div>${stepper(l.key)}</div>`).join('')+totalsHtml(t)+'<button class="primary-btn" data-panel="checkout">Continue to checkout</button><button class="secondary-btn" data-act="discover">Keep browsing</button>':emptyState('bag','Your bag is empty','Find a dish you love and add it to your bag.','Explore restaurants','discover'))+'</div>',maintain)
}
function showFilters(){
 openPanel('filters','<div class="panel-pad">'+heading('Restaurant filters')+`<form id="filter-form"><label class="form-field">Sort by<select name="sort">${[['recommended','Recommended'],['rating','Highest rated'],['fastest','Fastest delivery'],['price','Lowest starting price']].map(([v,label])=>'<option value="'+v+'" '+(filters.sort===v?'selected':'')+'>'+label+'</option>').join('')}</select></label><label class="choice"><input type="checkbox" name="veg" ${filters.veg?'checked':''}>Show vegetarian dishes only</label><label class="choice"><input type="checkbox" name="quick" ${filters.quick?'checked':''}>Delivery within 30 minutes</label><button class="primary-btn" type="submit">Show restaurants</button><button class="secondary-btn" type="button" data-act="filter-reset">Reset filters</button></form></div>`)
}
function showLocation(){openPanel('location','<div class="panel-pad">'+heading('Delivery location')+'<p class="muted">Choose your Bengaluru neighbourhood for local delivery estimates.</p><div class="area-list">'+areas.map(a=>'<button class="area-btn '+(area===a?'selected':'')+'" data-area="'+a+'">'+icon('pin')+a+(area===a?icon('check'):'')+'</button>').join('')+'</div></div>')}
let draft={name:'',street:'',area:''};
function showCheckout(){
 const t=costs();if(!t.count){showBag();return}
 openPanel('checkout','<div class="panel-pad">'+heading('Checkout')+`<p class="notice">Demo checkout. Use a sample address to try placing an order.</p><form id="checkout-form"><label class="form-field">Name<input name="name" value="${escapeText(draft.name)}" required maxlength="70" placeholder="Name for the order" autocomplete="off"></label><label class="form-field">Delivery address<textarea name="street" required minlength="5" maxlength="175" placeholder="Flat, building and street">${escapeText(draft.street)}</textarea></label><label class="form-field">Neighbourhood<select name="area" required><option value="">Select a Bengaluru neighbourhood</option>${areas.map(a=>'<option '+(a===(draft.area||area)?'selected':'')+'>'+a+'</option>').join('')}</select></label><p class="muted">Payment method · Cash on delivery (demo)</p>${totalsHtml(t)}<button class="primary-btn" type="submit">Place demo order · ${money(t.total)}</button><button class="secondary-btn" type="button" data-panel="bag">Back to bag</button></form></div>`)
}
function showOrders(){openPanel('orders','<div class="panel-pad">'+heading('My orders')+(orders.length?orders.map(o=>`<article class="order-record"><h3>Order ${escapeText(o.id)}</h3><p>${new Date(o.date).toLocaleDateString('en-IN',{day:'numeric',month:'long'})} · Demo order</p><p>${o.items.map(i=>i.qty+' × '+escapeText(i.name)).join(', ')}</p><p class="total">${money(o.total)}</p></article>`).join(''):emptyState('receipt','No orders yet','Your completed demo orders will appear here.','Explore restaurants','discover'))+'</div>')}
function submitOrder(form){
 const t=costs();if(!t.count){showBag();return}
 const fd=new FormData(form),where=fd.get('area');
 const o={id:'PT-'+crypto.randomUUID().slice(0,6).toUpperCase(),date:Date.now(),area:where,total:t.total,items:t.lines.map(l=>({name:l.item[0],qty:l.qty}))};
 orders.unshift(o);write('orders',orders);Object.keys(bag).forEach(key=>delete bag[key]);syncBag();area=where;write('area',area);$('#region').textContent=area;renderCards();draft={name:'',street:'',area:''};
 openPanel('success','<div class="panel-pad"><div class="panel-head"><span></span>'+closeButton+'</div><div class="success">'+icon('check')+'<h2 id="panel-title" tabindex="-1">Demo order confirmed.</h2><p>Order '+o.id+' · '+money(o.total)+'</p><p class="muted">Your order is saved on this device.</p><button class="primary-btn" data-panel="orders">View my orders</button><button class="secondary-btn" data-act="discover">Back to restaurants</button></div></div>')
}
function changeQty(key,delta){const [r,i]=key.split(':');if(!byId[r]?.menu[i])return;bag[key]=Math.max(0,(bag[key]||0)+delta);if(!bag[key])delete bag[key];syncBag();if(currentPanel==='menu')showMenu(currentMenu,true,featuredMenu);else if(panel.open)showBag(true);else showNotice(delta>0?'Added to your bag':'Bag updated')}
function toggleMobile(show){$('#mobile-nav').hidden=!show;$('#mobile-toggle').setAttribute('aria-expanded',String(show))}
const panelRoutes={bag:showBag,filters:showFilters,location:showLocation,checkout:showCheckout,orders:showOrders};
document.addEventListener('click',e=>{
 const b=e.target.closest('button,a[data-menu]');if(!b)return;
 const d=b.dataset;
 if(b.id==='mobile-toggle'){toggleMobile($('#mobile-nav').hidden);return}
 toggleMobile(false);
 if(d.panel){panelRoutes[d.panel]?.();return}
 if(d.nav){if(d.nav==='orders')showOrders();else if(d.nav==='discover'){browse('discover');window.scrollTo({top:0,behavior:reduceMotion()?'instant':'smooth'})}else browse('saved');return}
 if(d.menu){e.preventDefault();showMenu(d.menu);return}
 if(d.save){const rid=d.save;if(saved.has(rid))saved.delete(rid);else saved.add(rid);write('saved',[...saved]);renderCards();showNotice(saved.has(rid)?'Restaurant saved':'Restaurant removed from saved');return}
 if(d.cat){category=d.cat;renderCategories();renderCards();return}
 if(d.inc||d.dec){changeQty(d.inc||d.dec,d.inc?1:-1);return}
 if(d.area){area=d.area;write('area',area);$('#region').textContent=area;draft.area=area;closePanel();renderCards();showNotice('Delivery area updated');return}
 if(d.act==='close'){closePanel();return}
 if(d.act==='discover'||b.id==='explore-btn'){browse('discover');return}
 if(d.act==='reset'){category='All cuisines';filters={...defaults};$('#search').value='';renderCategories();renderCards();return}
 if(d.act==='filter-reset'){filters={...defaults};renderCards();closePanel();return}
 if(b.id==='back-top')window.scrollTo({top:0,behavior:reduceMotion()?'instant':'smooth'});
 if(b.id==='prev-slide'||b.id==='next-slide')moveSlide(b.id==='next-slide'?1:-1);
 if(b.id==='hero-dish'){showMenu(['ember','forno','miso'][slide],false,true)}
});
document.addEventListener('submit',e=>{
 if(e.target.id==='filter-form'){e.preventDefault();const f=new FormData(e.target);filters={sort:f.get('sort'),quick:f.has('quick'),veg:f.has('veg')};renderCards();closePanel()}
 if(e.target.id==='checkout-form'){e.preventDefault();submitOrder(e.target)}
});
document.addEventListener('input',e=>{if(e.target.id==='search')renderCards();if(e.target.closest('#checkout-form'))draft[e.target.name]=e.target.value});
panel.addEventListener('click',e=>{if(e.target===panel){const r=panel.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closePanel()}});
panel.addEventListener('close',()=>{currentPanel=''});
renderSignatures();
$('#region').textContent=area||'Bengaluru';syncBag();
if(location.hash.startsWith('#menu-'))showMenu(location.hash.slice(6));

function renderSignatures(){
 const dishes=[['forno',2,'bianca'],['miso',1,'mushroom'],['cacao',1,'tart']];
 $('#signature-list').innerHTML=dishes.map(([rid,index,image])=>{
  const restaurant=byId[rid], dish=restaurant.menu[index], key=rid+':'+index;
  return `<article class="signature-card">
   <div class="signature-photo"><img loading="lazy" width="764" height="508" src="assets/feature-${image}.webp" alt="${dish[0]}"></div>
   <div class="signature-info">
    <button class="signature-kitchen" data-menu="${rid}" aria-label="View the ${restaurant.name} menu">${restaurant.name}</button>
    <h3>${dish[0]}</h3><p>${dish[2]}</p>
    <div class="signature-actions"><strong>${money(dish[1])}</strong><div data-signature-quantity="${key}">${stepper(key)}</div></div>
   </div></article>`;
 }).join('');
}
function refreshSignatureQuantities(){
 for(const element of $$('[data-signature-quantity]')){
  const key=element.dataset.signatureQuantity;
  const html=stepper(key);
  if(element.dataset.quantity!==String(bag[key]||0)){
   element.innerHTML=html;
   element.dataset.quantity=String(bag[key]||0);
  }
 }
}
function setupBurgerAssembly(){
 const track=$('#assembly-track'), pin=$('.hero-pin'), control=$('#assembly-control');
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 const layers=[
  [$('.layer-lettuce'),0,.37],[$('.layer-patty'),.08,.58],
  [$('.layer-onion'),.19,.76],[$('.layer-crown'),.30,.95]
 ];
 const clamp=value=>Math.max(0,Math.min(1,value));
 let frame=0,previous=-1;
 function draw(){
  frame=0;
  const start=track.getBoundingClientRect().top;
  const lead=track.offsetTop, distance=track.offsetHeight-pin.offsetHeight;
  const progress=motion.matches?1:clamp((lead-start)/Math.max(distance,1));
  if(progress===previous)return;
  previous=progress;
  for(const [image,from,to] of layers){
   const t=clamp((progress-from)/(to-from));
   const smooth=t*t*(3-2*t);
   image.style.setProperty('--open',(1-smooth).toFixed(5));
  }
  track.style.setProperty('--assembly-progress',progress.toFixed(5));
  const complete=progress>=.95;
  $('#assembly-caption').textContent=complete?'Replay assembly':'Scroll to assemble';
  control.setAttribute('aria-label',complete?'Replay the burger assembly':'Scroll to assemble the burger');
 }
 function schedule(){if(!frame)frame=requestAnimationFrame(draw)}
 function setMotion(){
  document.documentElement.classList.toggle('assembly-enabled',!motion.matches);
  previous=-1;
  draw();
 }
 control.addEventListener('click',()=>{
  const end=window.scrollY+track.getBoundingClientRect().top+track.offsetHeight-pin.offsetHeight-$('header').offsetHeight;
  window.scrollTo({top:previous>=.95?track.offsetTop-$('header').offsetHeight:end,behavior:'smooth'});
 });
 window.addEventListener('scroll',schedule,{passive:true});
 window.addEventListener('resize',schedule,{passive:true});
 window.addEventListener('pageshow',schedule);
 motion.addEventListener('change',setMotion);
 setMotion();
}
setupBurgerAssembly();

function setupKitchenSpotlight(){
 const copy=$('.kitchen-copy');
 if(!copy || !('IntersectionObserver' in window) || reduceMotion())return;

 // Keep the original spaces and emphasis so the browser can wrap the copy naturally.
 const textNodes=[];
 const walker=document.createTreeWalker(copy,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){
  if(walker.currentNode.parentElement.closest('h2,p'))textNodes.push(walker.currentNode);
 }
 for(const node of textNodes){
  const fragment=document.createDocumentFragment();
  for(const part of node.data.split(/(\s+)/)){
   if(!part.trim()){fragment.append(part);continue}
   const mask=document.createElement('span'), word=document.createElement('span');
   mask.className='spotlight-mask';
   word.className='spotlight-word';
   word.textContent=part;
   mask.append(word);
   fragment.append(mask);
  }
  node.replaceWith(fragment);
 }

 function reveal(){
  let delay=90;
  for(const block of copy.querySelectorAll('h2,p')){
   let lastTop;
   const words=Array.from(block.querySelectorAll('.spotlight-mask'));
   const tops=words.map(word=>word.getBoundingClientRect().top);
   words.forEach((word,index)=>{
    // Small baseline differences between roman and italic type still share a line.
    if(lastTop!==undefined && Math.abs(tops[index]-lastTop)>6)delay+=90;
    lastTop=tops[index];
    word.style.setProperty('--arrival',delay+'ms');
   });
   delay+=135;
  }
  copy.querySelector('.kitchen-detail').style.setProperty('--arrival',delay+'ms');
  copy.querySelector('.kitchen-button').style.setProperty('--arrival',(delay+100)+'ms');
  copy.dataset.reveal='visible';
 }

 copy.dataset.reveal='ready';
 const observer=new IntersectionObserver(([entry])=>{
  if(!entry.isIntersecting)copy.dataset.reveal='ready';
  else if(entry.intersectionRatio>=.22 && copy.dataset.reveal==='ready')reveal();
 },{threshold:[0,.22]});
 observer.observe(copy);
}
setupKitchenSpotlight();

function setupKitchenFilm(){
 const film=$('#baker-film'), button=$('#baker-playback');
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 let requested=!motion.matches, visible=false;
 const update=()=>{
  if(requested && visible && !document.hidden)film.play().catch(()=>{});
  else film.pause();
 };
 const label=()=>{
  button.classList.toggle('playing',!film.paused);
  button.setAttribute('aria-label',(film.paused?'Play':'Pause')+' dough-making video');
 };
 button.hidden=false;
 button.addEventListener('click',()=>{requested=film.paused;update()});
 film.addEventListener('play',label);
 film.addEventListener('pause',label);
 motion.addEventListener('change',()=>{requested=!motion.matches;update()});
 document.addEventListener('visibilitychange',update);
 if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;update()},{threshold:.08});
  observer.observe(film);
 }else{visible=true;update()}
}
setupKitchenFilm();
