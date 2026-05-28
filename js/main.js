/* ─── CURSOR ────────────────────────────────────────────── */
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'});
(function animRing(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing)})();

/* ─── HERO LETTERS ──────────────────────────────────────── */
const heroTitle = document.getElementById('hero-title');
'RAAFÉN'.split('').forEach((l,i)=>{
  const s=document.createElement('span');
  s.className='letter';
  s.textContent=l;
  s.style.animationDelay=(0.8+i*0.13)+'s';
  s.style.background='linear-gradient(105deg,#9a7820 0%,#f6e4a8 25%,#d4af72 50%,#f6e4a8 75%,#9a7820 100%)';
  s.style.backgroundSize='300% auto';
  s.style.webkitBackgroundClip='text';
  s.style.webkitTextFillColor='transparent';
  s.style.backgroundClip='text';
  s.style.animation=`letterFall 0.9s cubic-bezier(0.16,1,0.3,1) ${(0.8+i*0.13)}s forwards, shimmerLetter 4s linear ${(0.8+i*0.13)}s infinite`;
  heroTitle.appendChild(s);
});

/* ─── NAV SCROLL ────────────────────────────────────────── */
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',window.scrollY>60);
},{passive:true});

/* ─── MOBILE MENU ───────────────────────────────────────── */
const mm=document.getElementById('mobile-menu');
document.getElementById('menu-btn').onclick=()=>mm.classList.add('open');
document.getElementById('mm-close').onclick=()=>mm.classList.remove('open');
function closeMM(){mm.classList.remove('open')}

/* ─── SCROLL REVEAL ─────────────────────────────────────── */
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)}
  });
},{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('[data-reveal]').forEach(el=>ro.observe(el));

/* ─── CART ──────────────────────────────────────────────── */
let cart=[]; 
const cartItems=document.getElementById('cart-items');
const cartTotal=document.getElementById('cart-total');
const cartCount=document.getElementById('cart-count');
const cartFooter=document.getElementById('drawer-footer');
const emptyCart=document.getElementById('empty-cart');

function openCart(){
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('show');
}
function closeCart(){
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('show');
}

function addToCart(name,price,img){
  const existing=cart.find(i=>i.name===name);
  if(existing){existing.qty++;} else {cart.push({name,price,img,qty:1});}
  renderCart(); openCart();
  toast('✦ '+name+' added to your collection');
}

function removeFromCart(name){
  cart=cart.filter(i=>i.name!==name);
  renderCart();
}

function renderCart(){
  const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const count=cart.reduce((s,i)=>s+i.qty,0);
  cartCount.textContent=count;
  cartCount.classList.toggle('show',count>0);
  cartTotal.textContent='$'+total.toLocaleString();
  cartFooter.style.display=cart.length?'block':'none';
  emptyCart.style.display=cart.length?'none':'block';

  const existing=cartItems.querySelectorAll('.cart-item');
  existing.forEach(el=>el.remove());

  cart.forEach(item=>{
    const div=document.createElement('div');
    div.className='cart-item';
    div.innerHTML=`
      <img src="${item.img}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-sub">Qty: ${item.qty}</div>
        <div class="cart-item-price">$${(item.price*item.qty).toLocaleString()}</div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.name}')">Remove</button>
      </div>`;
    cartItems.appendChild(div);
  });
}

/* ─── WISHLIST ──────────────────────────────────────────── */
function toggleWish(btn,name){
  const on=btn.classList.toggle('wished');
  btn.textContent=on?'♥':'♡';
  toast(on?'♥ '+name+' saved to wishlist':name+' removed from wishlist');
}

/* ─── SCENT FINDER ──────────────────────────────────────── */
const scentMap={
  dark:{name:'Noir Essence',desc:'Dark oud, smoky amber, velvety rose. For those who command a room.'},
  floral:{name:'Golden Aura',desc:'Rare saffron, jasmine sambac, aged sandalwood. Luminous and unforgettable.'},
  ocean:{name:'Ocean Reverie',desc:'Sea salt, bergamot, driftwood. For the free spirit.'},
  exotic:{name:'Crimson Veil',desc:'Black rose, patchouli, pomegranate. Seductive and mysterious.'},
};
function selectScent(card,type){
  document.querySelectorAll('.finder-card').forEach(c=>c.classList.remove('selected'));
  card.classList.add('selected');
  const s=scentMap[type];
  document.getElementById('finder-result-name').textContent=s.name;
  document.getElementById('finder-result-desc').textContent=s.desc;
  document.getElementById('finder-result').classList.add('show');
}

/* ─── TOAST ─────────────────────────────────────────────── */
const toastEl=document.getElementById('toast');
let toastTimer;
function toast(msg){
  toastEl.textContent=msg; toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>toastEl.classList.remove('show'),3500);
}

/* ─── FORMS ─────────────────────────────────────────────── */
document.getElementById('newsletter-form').addEventListener('submit',function(e){
  e.preventDefault(); toast('✦ Welcome to the RAAFÉN Inner Circle');
  document.getElementById('nl-email').value='';
});
document.getElementById('contact-form').addEventListener('submit',function(e){
  e.preventDefault(); toast('✦ Your message has been sent to RAAFÉN'); this.reset();
});

/* ─── SMOOTH SCROLL ─────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    e.preventDefault();
    const t=document.querySelector(this.getAttribute('href'));
    if(t){t.scrollIntoView({behavior:'smooth',block:'start'});}
    closeMM();
  });
});

/* ─── PARALLAX ──────────────────────────────────────────── */
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  const heroImg=document.querySelector('#hero .hero-bg img');
  if(heroImg) heroImg.style.transform=`translateY(${y*0.3}px) scale(1.1)`;
},{passive:true});

/* ─── THEME TOGGLE ──────────────────────────────────────── */
function toggleTheme(){
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const next = isLight ? 'dark' : 'light';
  applyTheme(next);
  try { localStorage.setItem('raafen-theme', next); } catch(e){}
}

function applyTheme(theme){
  if(theme === 'light'){
    document.documentElement.setAttribute('data-theme','light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

// Restore saved theme on load
(function(){
  try {
    const saved = localStorage.getItem('raafen-theme');
    if(saved === 'light') applyTheme('light');
  } catch(e){}
})();



/* ════════════════════════════════════════════════
   ADMIN PANEL CORE
════════════════════════════════════════════════ */
/* ── Auth ── */
const _sc=['4e36','a255','340e','f65a','7c13','42b6','6796','549e','bc69','fd65','006c','59ad','3860','1cca','add1','41cc'];
const _AH=_sc.join('');

async function _digest(str){
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

function openAdminLock(){
  document.getElementById('admin-lock').classList.add('show');
  document.getElementById('admin-pass-input').focus();
  document.getElementById('admin-pass-input').value='';
  document.getElementById('lock-err').classList.remove('show');
}
function closeAdminLock(){
  document.getElementById('admin-lock').classList.remove('show');
}
async function checkAdminPass(){
  const val = document.getElementById('admin-pass-input').value;
  const hash = await _digest(val);
  if(hash === _AH){
    closeAdminLock();
    openAdminPanel();
  } else {
    document.getElementById('lock-err').classList.add('show');
    document.getElementById('admin-pass-input').select();
  }
}

/* ── Panel open/close ── */
function openAdminPanel(){
  document.getElementById('admin-panel').classList.add('show');
  document.body.style.overflow='hidden';
  renderAllLists();
  updateDashStats();
}
function closeAdminPanel(){
  document.getElementById('admin-panel').classList.remove('show');
  document.body.style.overflow='';
}

/* ── Tab switching ── */
function switchTab(id){
  document.querySelectorAll('.ap-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.ap-pane').forEach(p=>p.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  document.getElementById('pane-'+id).classList.add('active');
}

/* ── Admin toast ── */
let apToastTimer;
function apToast(msg){
  const t=document.getElementById('ap-toast');
  t.textContent=msg; t.classList.add('show');
  clearTimeout(apToastTimer);
  apToastTimer=setTimeout(()=>t.classList.remove('show'),2800);
}

/* ────────────────────────────────────────────────
   PRODUCTS MANAGEMENT
──────────────────────────────────────────────── */
// Parse existing products from DOM on load
let adminProducts = [];
(function initProducts(){
  document.querySelectorAll('#collections .product-card').forEach(card=>{
    const name = card.querySelector('.product-name')?.textContent.trim()||'';
    const price = parseInt((card.querySelector('.product-price')?.textContent||'0').replace(/[^0-9]/g,''))||0;
    const type  = card.querySelector('.product-type')?.textContent.trim()||'';
    const notes = card.querySelector('.product-notes')?.textContent.trim()||'';
    const img   = card.querySelector('.product-img')?.src||'';
    const starsOn = card.querySelectorAll('.star.on').length;
    const badgeEl = card.querySelector('.product-badge');
    const badge = badgeEl ? (badgeEl.classList.contains('badge-ltd')?'badge-ltd':badgeEl.classList.contains('badge-new')?'badge-new':'badge-exc') : '';
    adminProducts.push({name,price,type,notes,img,stars:starsOn,badge});
  });
})();

let editingProductIndex = -1;

function renderAllLists(){
  renderProductsList();
  renderTestimonialsList();
  renderScentList();
  renderNavLinks();
}

function renderProductsList(){
  const list = document.getElementById('products-list');
  list.innerHTML='';
  adminProducts.forEach((p,i)=>{
    const d=document.createElement('div');
    d.className='ap-card';
    d.innerHTML=`
      <div class="product-preview-strip">
        <img class="product-preview-img" src="${p.img||'https://picsum.photos/100/130'}" onerror="this.src='https://picsum.photos/100/130'">
        <div>
          <div class="ap-card-name">${p.name}</div>
          <div style="font-size:11px;color:rgba(196,169,110,0.4);margin-top:4px">${p.type}</div>
          <div style="font-size:12px;color:var(--gold-mid);margin-top:4px">$${p.price}</div>
        </div>
        <div class="ap-card-actions" style="margin-left:auto">
          <button class="ap-btn-edit" onclick="editProduct(${i})">Edit</button>
          <button class="ap-btn-del" onclick="deleteProduct(${i})">Delete</button>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(200,190,175,0.35)">${p.notes}</div>
      <div style="font-size:11px;color:rgba(196,169,110,0.3);margin-top:4px">${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</div>
    `;
    list.appendChild(d);
  });
  document.getElementById('stat-products').textContent=adminProducts.length;
}

function openAddProduct(){
  editingProductIndex=-1;
  document.getElementById('product-form-title').textContent='New Product';
  document.getElementById('pf-name').value='';
  document.getElementById('pf-price').value='';
  document.getElementById('pf-type').value='Eau de Parfum · RAAFÉN';
  document.getElementById('pf-notes').value='';
  document.getElementById('pf-img').value='';
  document.getElementById('pf-stars').value='5';
  document.getElementById('pf-badge').value='';
  document.getElementById('product-form-wrap').style.display='block';
}

function editProduct(i){
  editingProductIndex=i;
  const p=adminProducts[i];
  document.getElementById('product-form-title').textContent='Edit: '+p.name;
  document.getElementById('pf-name').value=p.name;
  document.getElementById('pf-price').value=p.price;
  document.getElementById('pf-type').value=p.type;
  document.getElementById('pf-notes').value=p.notes;
  document.getElementById('pf-img').value=p.img;
  document.getElementById('pf-stars').value=p.stars;
  document.getElementById('pf-badge').value=p.badge||'';
  document.getElementById('product-form-wrap').style.display='block';
}

function closeProductForm(){
  document.getElementById('product-form-wrap').style.display='none';
  editingProductIndex=-1;
}

function saveProduct(){
  const name  = document.getElementById('pf-name').value.trim();
  const price = parseInt(document.getElementById('pf-price').value)||0;
  const type  = document.getElementById('pf-type').value.trim();
  const notes = document.getElementById('pf-notes').value.trim();
  const img   = document.getElementById('pf-img').value.trim() || 'https://picsum.photos/seed/'+encodeURIComponent(name)+'/600/720';
  const stars = Math.min(5,Math.max(1,parseInt(document.getElementById('pf-stars').value)||5));
  const badge = document.getElementById('pf-badge').value;
  if(!name){apToast('⚠ Product name required');return;}
  const obj={name,price,type,notes,img,stars,badge};
  if(editingProductIndex>=0){
    adminProducts[editingProductIndex]=obj;
  } else {
    adminProducts.push(obj);
  }
  closeProductForm();
  renderProductsList();
  rebuildProductsGrid();
  apToast('✦ Product saved: '+name);
}

function deleteProduct(i){
  if(!confirm('Delete "'+adminProducts[i].name+'" from the collection?')) return;
  adminProducts.splice(i,1);
  renderProductsList();
  rebuildProductsGrid();
  apToast('✦ Product removed');
}

function starsHTML(n){
  let h='';
  for(let i=1;i<=5;i++) h+=`<span class="star${i<=n?' on':''}">${i<=n?'★':'★'}</span>`;
  return h;
}

function rebuildProductsGrid(){
  const grid = document.querySelector('#collections .products-grid');
  if(!grid) return;
  grid.innerHTML='';
  adminProducts.forEach((p,i)=>{
    const delays=[0.05,0.08,0.08,0.08,0.16,0.24];
    const delay=delays[i]||0.08;
    const badgePart = p.badge ? `<span class="product-badge ${p.badge}">${p.badge==='badge-ltd'?'Limited':p.badge==='badge-new'?'New':'Exclusive'}</span>`:'';
    const thumbImg = p.img.includes('picsum.photos') ? p.img.replace(/\/600\/720/,'/150/200').replace(/\/\d+\/\d+$/,'/150/200') : p.img;
    const div=document.createElement('div');
    div.className='product-card'; div.setAttribute('data-reveal','');
    div.style.transitionDelay=delay+'s';
    div.innerHTML=`
      ${badgePart}
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" class="product-img">
        <div class="product-overlay"></div>
        <div class="product-actions">
          <button class="product-atc" onclick="addToCart('${p.name}',${p.price},'${thumbImg}')">Add to Cart</button>
          <button class="product-wish" onclick="toggleWish(this,'${p.name}')">♡</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-type">${p.type}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-notes">${p.notes}</div>
        <div class="product-footer">
          <span class="product-price gs">$${p.price.toLocaleString()}</span>
          <div class="product-rating">${starsHTML(p.stars)}</div>
        </div>
      </div>`;
    grid.appendChild(div);
    // re-observe for reveal
    ro.observe(div);
  });
  document.getElementById('stat-products').textContent=adminProducts.length;
}

/* ────────────────────────────────────────────────
   HERO
──────────────────────────────────────────────── */
function applyHero(){
  // Eyebrow
  const ey=document.querySelector('.hero-eyebrow');
  if(ey) ey.textContent=document.getElementById('hero-eyebrow').value;
  // Brand name (letters)
  const heroTitleEl=document.getElementById('hero-title');
  if(heroTitleEl){
    heroTitleEl.innerHTML='';
    document.getElementById('hero-brand-name').value.split('').forEach((l,i)=>{
      const s=document.createElement('span');
      s.className='letter gs'; s.textContent=l;
      s.style.animationDelay=(0.8+i*0.13)+'s';
      heroTitleEl.appendChild(s);
    });
  }
  // Tagline
  const tg=document.querySelector('.hero-tagline');
  if(tg) tg.textContent=document.getElementById('hero-tagline').value;
  // Body
  const heroBodyEl=document.querySelector('#hero .hero-content p[style]');
  if(heroBodyEl) heroBodyEl.textContent=document.getElementById('hero-body').value;
  // Buttons
  const btns=document.querySelectorAll('.hero-btns a');
  if(btns[0]) btns[0].textContent=document.getElementById('hero-btn1').value;
  if(btns[1]) btns[1].textContent=document.getElementById('hero-btn2').value;
  // BG
  const bgImg=document.querySelector('#hero .hero-bg img');
  if(bgImg) bgImg.src=document.getElementById('hero-bg-img').value;
  apToast('✦ Hero section updated');
}

/* ────────────────────────────────────────────────
   STORY
──────────────────────────────────────────────── */
function applyStory(){
  const si=document.querySelector('.story-intro');
  if(si) si.textContent=document.getElementById('story-intro').value;
  const sh=document.querySelector('.story-heading');
  if(sh){sh.innerHTML='';sh.textContent=document.getElementById('story-heading').value;sh.classList.add('gs','gs-slow');}
  const ps=document.querySelectorAll('.story-body');
  if(ps[0]) ps[0].textContent=document.getElementById('story-p1').value;
  if(ps[1]) ps[1].textContent=document.getElementById('story-p2').value;
  const snums=document.querySelectorAll('.stat-num');
  const slbls=document.querySelectorAll('.stat-label');
  if(snums[0]) snums[0].textContent=document.getElementById('stat1-num').value;
  if(snums[1]) snums[1].textContent=document.getElementById('stat2-num').value;
  if(snums[2]) snums[2].textContent=document.getElementById('stat3-num').value;
  if(slbls[0]) slbls[0].textContent=document.getElementById('stat1-lbl').value;
  if(slbls[1]) slbls[1].textContent=document.getElementById('stat2-lbl').value;
  if(slbls[2]) slbls[2].textContent=document.getElementById('stat3-lbl').value;
  const simg=document.querySelector('.story-main-img');
  if(simg) simg.src=document.getElementById('story-img').value;
  apToast('✦ Story section updated');
}

/* ────────────────────────────────────────────────
   PHILOSOPHY
──────────────────────────────────────────────── */
function applyPhilosophy(){
  const q=document.querySelector('.philosophy-quote');
  if(q){
    q.innerHTML=document.getElementById('phil-quote').value
      .replace('exist','<em class="gs gs-slow">exist</em>')
      .replace('announce','<em class="gs gs-slow">announce</em>');
  }
  const a=document.querySelector('.philosophy-attribution');
  if(a) a.textContent=document.getElementById('phil-attr').value;
  const pillars=document.querySelectorAll('.pillar');
  [[1],[2],[3]].forEach(([n],idx)=>{
    const p=pillars[idx]; if(!p) return;
    const ic=p.querySelector('.pillar-icon'); if(ic) ic.textContent=document.getElementById('pillar'+n+'-icon').value;
    const nm=p.querySelector('.pillar-name'); if(nm) nm.textContent=document.getElementById('pillar'+n+'-name').value;
    const ds=p.querySelector('.pillar-desc'); if(ds) ds.textContent=document.getElementById('pillar'+n+'-desc').value;
    n++;
  });
  // Fix: iterate correctly
  [1,2,3].forEach((n,idx)=>{
    const p=pillars[idx]; if(!p) return;
    const ic=p.querySelector('.pillar-icon'); if(ic) ic.textContent=document.getElementById('pillar'+n+'-icon').value;
    const nm=p.querySelector('.pillar-name'); if(nm) nm.textContent=document.getElementById('pillar'+n+'-name').value;
    const ds=p.querySelector('.pillar-desc'); if(ds) ds.textContent=document.getElementById('pillar'+n+'-desc').value;
  });
  apToast('✦ Philosophy section updated');
}

/* ────────────────────────────────────────────────
   TESTIMONIALS
──────────────────────────────────────────────── */
let adminTestimonials = [];
(function initTestimonials(){
  document.querySelectorAll('.testimonial-card').forEach(card=>{
    const text=card.querySelector('.testimonial-text')?.textContent.trim()||'';
    const name=card.querySelector('.author-name')?.textContent.trim()||'';
    const loc=card.querySelector('.author-loc')?.textContent.trim()||'';
    const stars=card.querySelectorAll('.testimonial-stars').length ? 5 : 5;
    adminTestimonials.push({text,name,loc,stars});
  });
})();

let editingTestIndex=-1;

function renderTestimonialsList(){
  const list=document.getElementById('testimonials-list');
  list.innerHTML='';
  adminTestimonials.forEach((t,i)=>{
    const d=document.createElement('div');
    d.className='ap-card';
    d.innerHTML=`
      <div class="ap-card-head">
        <span class="ap-card-name">${t.name} <span style="font-size:12px;color:rgba(196,169,110,0.4)">${t.loc}</span></span>
        <div class="ap-card-actions">
          <button class="ap-btn-edit" onclick="editTestimonial(${i})">Edit</button>
          <button class="ap-btn-del" onclick="deleteTestimonial(${i})">Delete</button>
        </div>
      </div>
      <div style="font-size:13px;color:rgba(200,190,175,0.5);font-style:italic">"${t.text.slice(0,100)}${t.text.length>100?'…':''}"</div>
      <div style="margin-top:8px;color:var(--gold-mid);font-size:12px">${'★'.repeat(t.stars)}</div>
    `;
    list.appendChild(d);
  });
  document.getElementById('stat-testimonials').textContent=adminTestimonials.length;
}

function openAddTestimonial(){
  editingTestIndex=-1;
  document.getElementById('test-form-title').textContent='New Testimonial';
  document.getElementById('tf-text').value='';
  document.getElementById('tf-name').value='';
  document.getElementById('tf-loc').value='';
  document.getElementById('tf-stars').value='5';
  document.getElementById('testimonial-form-wrap').style.display='block';
}

function editTestimonial(i){
  editingTestIndex=i;
  const t=adminTestimonials[i];
  document.getElementById('test-form-title').textContent='Edit: '+t.name;
  document.getElementById('tf-text').value=t.text;
  document.getElementById('tf-name').value=t.name;
  document.getElementById('tf-loc').value=t.loc;
  document.getElementById('tf-stars').value=t.stars;
  document.getElementById('testimonial-form-wrap').style.display='block';
}

function closeTestimonialForm(){
  document.getElementById('testimonial-form-wrap').style.display='none';
  editingTestIndex=-1;
}

function saveTestimonial(){
  const text=document.getElementById('tf-text').value.trim();
  const name=document.getElementById('tf-name').value.trim();
  const loc=document.getElementById('tf-loc').value.trim();
  const stars=Math.min(5,Math.max(1,parseInt(document.getElementById('tf-stars').value)||5));
  if(!text||!name){apToast('⚠ Name and text required');return;}
  const obj={text,name,loc,stars};
  if(editingTestIndex>=0){adminTestimonials[editingTestIndex]=obj;}
  else{adminTestimonials.push(obj);}
  closeTestimonialForm();
  renderTestimonialsList();
  rebuildTestimonialsDOM();
  apToast('✦ Testimonial saved');
}

function deleteTestimonial(i){
  if(!confirm('Delete this testimonial?')) return;
  adminTestimonials.splice(i,1);
  renderTestimonialsList();
  rebuildTestimonialsDOM();
  apToast('✦ Testimonial removed');
}

function rebuildTestimonialsDOM(){
  const grid=document.querySelector('.testimonials-grid');
  if(!grid) return;
  grid.innerHTML='';
  adminTestimonials.forEach((t,i)=>{
    const initials=(t.name.split(' ').map(w=>w[0]||'').join('')).toUpperCase().slice(0,2);
    const d=document.createElement('div');
    d.className='testimonial-card'; d.setAttribute('data-reveal','');
    d.style.transitionDelay=(0.1*(i+1))+'s';
    d.innerHTML=`
      <div class="testimonial-quote-mark">"</div>
      <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="author-avatar">${initials}</div>
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-loc">${t.loc}</div>
        </div>
      </div>`;
    grid.appendChild(d);
    ro.observe(d);
  });
}

/* ────────────────────────────────────────────────
   SCENT FINDER
──────────────────────────────────────────────── */
let adminScents = [
  {key:'dark',  label:'Dark & Deep',     icon:'🌑', resultName:'Noir Essence',  resultDesc:'Dark oud, smoky amber, velvety rose. For those who command a room.'},
  {key:'floral',label:'Floral & Light',  icon:'🌸', resultName:'Golden Aura',   resultDesc:'Rare saffron, jasmine sambac, aged sandalwood. Luminous and unforgettable.'},
  {key:'ocean', label:'Fresh & Marine',  icon:'🌊', resultName:'Ocean Reverie', resultDesc:'Sea salt, bergamot, driftwood. For the free spirit.'},
  {key:'exotic',label:'Exotic & Spiced', icon:'🌿', resultName:'Crimson Veil',  resultDesc:'Black rose, patchouli, pomegranate. Seductive and mysterious.'},
];

let editingScentIndex=-1;

function renderScentList(){
  const list=document.getElementById('scent-list');
  list.innerHTML='';
  adminScents.forEach((s,i)=>{
    const d=document.createElement('div');
    d.className='ap-card';
    d.innerHTML=`
      <div class="ap-card-head">
        <span class="ap-card-name">${s.icon} ${s.label}</span>
        <div class="ap-card-actions">
          <button class="ap-btn-edit" onclick="editScent(${i})">Edit</button>
          <button class="ap-btn-del" onclick="deleteScent(${i})">Delete</button>
        </div>
      </div>
      <div style="font-size:12px;color:rgba(196,169,110,0.5)">→ ${s.resultName}</div>
      <div style="font-size:11px;color:rgba(200,190,175,0.3);margin-top:4px">${s.resultDesc.slice(0,70)}…</div>
    `;
    list.appendChild(d);
  });
  document.getElementById('stat-scents').textContent=adminScents.length;
}

function openAddScent(){
  editingScentIndex=-1;
  document.getElementById('scent-form-title').textContent='New Scent Profile';
  document.getElementById('sf-label').value='';
  document.getElementById('sf-icon').value='';
  document.getElementById('sf-result-name').value='';
  document.getElementById('sf-result-desc').value='';
  document.getElementById('scent-form-wrap').style.display='block';
}

function editScent(i){
  editingScentIndex=i;
  const s=adminScents[i];
  document.getElementById('scent-form-title').textContent='Edit: '+s.label;
  document.getElementById('sf-label').value=s.label;
  document.getElementById('sf-icon').value=s.icon;
  document.getElementById('sf-result-name').value=s.resultName;
  document.getElementById('sf-result-desc').value=s.resultDesc;
  document.getElementById('scent-form-wrap').style.display='block';
}

function closeScentForm(){
  document.getElementById('scent-form-wrap').style.display='none';
  editingScentIndex=-1;
}

function saveScent(){
  const label=document.getElementById('sf-label').value.trim();
  const icon=document.getElementById('sf-icon').value.trim();
  const resultName=document.getElementById('sf-result-name').value.trim();
  const resultDesc=document.getElementById('sf-result-desc').value.trim();
  if(!label){apToast('⚠ Label required');return;}
  const key='scent_'+Date.now();
  const obj={key,label,icon,resultName,resultDesc};
  if(editingScentIndex>=0){adminScents[editingScentIndex]={...adminScents[editingScentIndex],...obj};}
  else{adminScents.push(obj);}
  closeScentForm();
  renderScentList();
  rebuildScentFinderDOM();
  apToast('✦ Scent profile saved');
}

function deleteScent(i){
  if(!confirm('Delete this scent profile?')) return;
  adminScents.splice(i,1);
  renderScentList();
  rebuildScentFinderDOM();
  apToast('✦ Scent profile removed');
}

function rebuildScentFinderDOM(){
  const container=document.getElementById('finder-cards');
  if(!container) return;
  container.innerHTML='';
  // rebuild scentMap
  window.scentMap={};
  adminScents.forEach(s=>{
    window.scentMap[s.key]={name:s.resultName,desc:s.resultDesc};
    const d=document.createElement('div');
    d.className='finder-card';
    d.setAttribute('onclick',`selectScent(this,'${s.key}')`);
    d.innerHTML=`<div class="finder-icon">${s.icon}</div><div class="finder-label">${s.label}</div>`;
    container.appendChild(d);
  });
}

/* ────────────────────────────────────────────────
   CONTACT
──────────────────────────────────────────────── */
function applyContact(){
  const ch=document.querySelector('.contact-heading');
  if(ch){ch.innerHTML=document.getElementById('contact-heading').value.replace('RAAFÉN','RAAFÉN<br>');ch.classList.add('gs','gs-slow');}
  const ct=document.querySelector('.contact-tagline');
  if(ct) ct.textContent=document.getElementById('contact-tagline').value;
  const addrs=document.querySelectorAll('.contact-item-val');
  if(addrs[0]) addrs[0].innerHTML=document.getElementById('contact-addr1').value+'<br>'+document.getElementById('contact-addr2').value;
  if(addrs[1]) addrs[1].textContent=document.getElementById('contact-email').value;
  if(addrs[2]) addrs[2].textContent=document.getElementById('contact-phone').value;
  apToast('✦ Contact info updated');
}

/* ────────────────────────────────────────────────
   NAVIGATION
──────────────────────────────────────────────── */
let adminNavLinks=[
  {text:'Story',href:'#story'},
  {text:'Collections',href:'#collections'},
  {text:'Philosophy',href:'#philosophy'},
  {text:'Contact',href:'#contact'},
];

function renderNavLinks(){
  const list=document.getElementById('nav-links-list');
  list.innerHTML='';
  adminNavLinks.forEach((l,i)=>{
    const d=document.createElement('div');
    d.className='ap-card';
    d.style.padding='12px 16px';
    d.innerHTML=`
      <div style="display:flex;gap:12px;align-items:center">
        <input class="ap-input" style="flex:1" value="${l.text}" id="navlink-text-${i}" placeholder="Label">
        <input class="ap-input" style="flex:1" value="${l.href}" id="navlink-href-${i}" placeholder="#section">
        <button class="ap-btn-del" style="padding:8px 12px;white-space:nowrap" onclick="deleteNavLink(${i})">✕</button>
      </div>`;
    list.appendChild(d);
  });
}

function addNavLink(){
  adminNavLinks.push({text:'New Link',href:'#'});
  renderNavLinks();
}

function deleteNavLink(i){
  adminNavLinks.splice(i,1);
  renderNavLinks();
}

function applyNav(){
  // Save current input values
  adminNavLinks.forEach((l,i)=>{
    const tEl=document.getElementById('navlink-text-'+i);
    const hEl=document.getElementById('navlink-href-'+i);
    if(tEl) adminNavLinks[i].text=tEl.value;
    if(hEl) adminNavLinks[i].href=hEl.value;
  });
  // Update logo
  const logoEl=document.querySelector('.nav-logo');
  if(logoEl){
    const svg=logoEl.querySelector('svg');
    logoEl.textContent=document.getElementById('nav-logo-text').value;
    if(svg) logoEl.prepend(svg);
  }
  // Update CTA
  const ctaEl=document.querySelector('.nav-cta span');
  if(ctaEl) ctaEl.textContent=document.getElementById('nav-cta-text').value;
  // Rebuild nav links
  const navLinksEl=document.querySelector('.nav-links');
  if(navLinksEl){
    navLinksEl.innerHTML='';
    adminNavLinks.forEach(l=>{
      const a=document.createElement('a');
      a.href=l.href; a.className='nav-link'; a.textContent=l.text;
      navLinksEl.appendChild(a);
    });
  }
  // Mobile menu
  const mm=document.getElementById('mobile-menu');
  if(mm){
    mm.querySelectorAll('.mm-link:not(:first-child)').forEach(el=>el.remove());
    adminNavLinks.forEach(l=>{
      const a=document.createElement('a');
      a.href=l.href; a.className='mm-link'; a.textContent=l.text;
      a.setAttribute('onclick','closeMM()');
      mm.appendChild(a);
    });
  }
  apToast('✦ Navigation updated');
}

/* ────────────────────────────────────────────────
   FOOTER
──────────────────────────────────────────────── */
function applyFooter(){
  const fb=document.querySelector('.footer-brand-text');
  if(fb) fb.textContent=document.getElementById('footer-brand-text').value;
  const fc=document.querySelector('.footer-copy');
  if(fc) fc.textContent=document.getElementById('footer-copy').value;
  const nlt=document.querySelector('.newsletter-title');
  if(nlt) nlt.textContent=document.getElementById('nl-title').value;
  const nld=document.querySelector('.newsletter-desc');
  if(nld) nld.textContent=document.getElementById('nl-desc').value;
  apToast('✦ Footer updated');
}

/* ────────────────────────────────────────────────
   SETTINGS — COLORS
──────────────────────────────────────────────── */
function applyColors(){
  const gm=document.getElementById('color-gold-mid').value;
  const gl=document.getElementById('color-gold-light').value;
  const ink=document.getElementById('color-ink').value;
  document.documentElement.style.setProperty('--gold-mid',gm);
  document.documentElement.style.setProperty('--gold-light',gl);
  document.documentElement.style.setProperty('--ink',ink);
  apToast('✦ Colors applied');
}

function resetColors(){
  document.getElementById('color-gold-mid').value='#c9a96e';
  document.getElementById('color-gold-light').value='#f4dfa0';
  document.getElementById('color-ink').value='#05040a';
  document.documentElement.style.removeProperty('--gold-mid');
  document.documentElement.style.removeProperty('--gold-light');
  document.documentElement.style.removeProperty('--ink');
  apToast('✦ Colors reset to default');
}

/* ────────────────────────────────────────────────
   SETTINGS — FEATURE TOGGLES
──────────────────────────────────────────────── */
function toggleFeature(f){
  const btn=document.getElementById('toggle-'+f);
  const on=btn.classList.toggle('on');
  if(f==='cursor'){
    document.getElementById('cursor-dot').style.display=on?'block':'none';
    document.getElementById('cursor-ring').style.display=on?'block':'none';
    document.body.style.cursor=on?'none':'auto';
    // When cursor is off, restore pointer/text cursors throughout the page
    if(!on){
      document.querySelectorAll('button,a,[onclick]').forEach(el=>{ if(!el.style.cursor) el.style.cursor='pointer'; });
    } else {
      document.querySelectorAll('button,a,[onclick]').forEach(el=>{ el.style.cursor=''; });
    }
  }
  if(f==='grain'){
    document.getElementById('grain').style.display=on?'':'none';
  }
  if(f==='blobs'){
    document.querySelectorAll('.blob').forEach(b=>b.style.display=on?'':'none');
  }
  if(f==='reveal'){
    if(!on) document.querySelectorAll('[data-reveal]').forEach(el=>{el.classList.add('visible');});
  }
  if(f==='marquee'){
    document.querySelectorAll('.marquee-section').forEach(m=>m.style.display=on?'':'none');
  }
  apToast('✦ Feature '+(on?'enabled':'disabled')+': '+f);
}

/* ────────────────────────────────────────────────
   SETTINGS — MARQUEE
──────────────────────────────────────────────── */
function applyMarquee(){
  const items=document.getElementById('marquee-items').value.split(',').map(s=>s.trim()).filter(Boolean);
  document.querySelectorAll('.marquee-track').forEach((track,ti)=>{
    const dot=ti===0?'✦':'◆';
    track.innerHTML='';
    items.forEach(item=>{
      const span1=document.createElement('span');
      span1.className='marquee-item'; span1.textContent=item;
      const span2=document.createElement('span');
      span2.className='marquee-dot'; span2.textContent=dot;
      track.appendChild(span1); track.appendChild(span2);
    });
    // duplicate for seamless scroll
    items.forEach(item=>{
      const span1=document.createElement('span');
      span1.className='marquee-item'; span1.textContent=item;
      const span2=document.createElement('span');
      span2.className='marquee-dot'; span2.textContent=dot;
      track.appendChild(span1); track.appendChild(span2);
    });
  });
  apToast('✦ Marquee updated');
}

/* ────────────────────────────────────────────────
   SAVE ALL + DASHBOARD
──────────────────────────────────────────────── */
function saveAllChanges(){
  applyHero();
  applyStory();
  applyPhilosophy();
  applyContact();
  applyNav();
  applyFooter();
  apToast('✦ All changes applied to the live site');
}

function updateDashStats(){
  document.getElementById('stat-products').textContent=adminProducts.length;
  document.getElementById('stat-testimonials').textContent=adminTestimonials.length;
  document.getElementById('stat-scents').textContent=adminScents.length;
  // Cart
  const count=typeof cart!=='undefined'?cart.reduce((s,i)=>s+i.qty,0):0;
  document.getElementById('stat-cart').textContent=count;
  // Cart monitor
  const monitor=document.getElementById('dash-cart-monitor');
  if(typeof cart!=='undefined'&&cart.length){
    monitor.innerHTML=cart.map(i=>`<div style="padding:6px 0;border-bottom:1px solid rgba(196,169,110,0.06);display:flex;justify-content:space-between"><span style="color:#ddd">${i.name} ×${i.qty}</span><span style="color:var(--gold-mid)">$${(i.price*i.qty).toLocaleString()}</span></div>`).join('');
  } else {
    monitor.innerHTML='<span style="color:rgba(200,190,175,0.3)">Cart is empty</span>';
  }
}
// Refresh cart monitor when cart changes
const _origRenderCart=typeof renderCart!=='undefined'?renderCart:null;
if(typeof renderCart!=='undefined'){
  const __rc=renderCart;
  window.renderCart=function(){__rc();if(document.getElementById('admin-panel').classList.contains('show'))updateDashStats();};
}