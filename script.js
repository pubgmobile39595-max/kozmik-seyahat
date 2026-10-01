(function(){
'use strict';
var $=function(s){return document.querySelector(s)};
var $$=function(s){return document.querySelectorAll(s)};

// ===== YÜKLEME =====
var loadPct=0;
var loadInt=setInterval(function(){
  loadPct+=Math.random()*15+5;
  if(loadPct>=100){loadPct=100;clearInterval(loadInt);
    setTimeout(function(){var l=$('#loader');if(l)l.classList.add('hide');},400);
  }
  var f=$('#loaderFill');if(f)f.style.width=loadPct+'%';
  var p=$('#loaderPct');if(p)p.textContent=Math.floor(loadPct)+'%';
},150);

// ===== 3D YILDIZ ALANI =====
var sf=$('#starfield');
if(sf){
  var ctx=sf.getContext('2d');
  var stars=[];
  function resize(){
    sf.width=window.innerWidth;
    sf.height=window.innerHeight;
    stars=[];
    for(var i=0;i<250;i++){
      stars.push({
        x:Math.random()*sf.width,
        y:Math.random()*sf.height,
        z:Math.random()*sf.width,
        size:Math.random()*1.5
      });
    }
  }
  resize();
  window.addEventListener('resize',resize);
  var speed=0.5;
  function draw(){
    ctx.fillStyle='rgba(0,0,16,0.3)';
    ctx.fillRect(0,0,sf.width,sf.height);
    for(var i=0;i<stars.length;i++){
      var s=stars[i];
      s.z-=speed;
      if(s.z<=0){s.z=sf.width;s.x=Math.random()*sf.width;s.y=Math.random()*sf.height;}
      var k=128/s.z;
      var x=(s.x-sf.width/2)*k+sf.width/2;
      var y=(s.y-sf.height/2)*k+sf.height/2;
      ctx.fillStyle='rgba(255,255,255,'+(1-s.z/sf.width)+')';
      ctx.beginPath();
      ctx.arc(x,y,s.size,0,Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ===== İMLECİ =====
var cur=$('#cursor'),curDot=$('#cursorDot');
if(cur&&curDot&&window.innerWidth>900){
  document.addEventListener('mousemove',function(e){
    cur.style.left=(e.clientX-16)+'px';
    cur.style.top=(e.clientY-16)+'px';
    curDot.style.left=(e.clientX-3)+'px';
    curDot.style.top=(e.clientY-3)+'px';
  });
  document.addEventListener('mousedown',function(){cur.style.transform='scale(0.7)';});
  document.addEventListener('mouseup',function(){cur.style.transform='scale(1)';});
  var hoverables=document.querySelectorAll('a, button, .planet, .fleet-card, .crew-card');
  hoverables.forEach(function(el){
    el.addEventListener('mouseenter',function(){cur.style.transform='scale(1.5)';cur.style.background='rgba(124,58,237,0.2)';});
    el.addEventListener('mouseleave',function(){cur.style.transform='scale(1)';cur.style.background='transparent';});
  });
}

// ===== NAVBAR SCROLL =====
var nav=$('#nav');
window.addEventListener('scroll',function(){
  if(nav)nav.classList.toggle('nav--scrolled',window.scrollY>50);
  var top=$('#fabTop');
  if(top)top.classList.toggle('show',window.scrollY>400);
});

// ===== GERİ SAYIM =====
var launch=new Date('2027-06-15T10:00:00').getTime();
function cd(){
  var diff=launch-Date.now();
  if(diff<0)diff=0;
  var d=Math.floor(diff/86400000);
  var h=Math.floor(diff%86400000/3600000);
  var m=Math.floor(diff%3600000/60000);
  var s=Math.floor(diff%60000/1000);
  var p=function(n){return String(n).padStart(2,'0')};
  var e;
  if(e=$('#cdDays'))e.textContent=p(d);
  if(e=$('#cdHours'))e.textContent=p(h);
  if(e=$('#cdMin'))e.textContent=p(m);
  if(e=$('#cdSec'))e.textContent=p(s);
}
cd();setInterval(cd,1000);

// ===== SAYAÇLAR =====
var counters=$$('.counter');
var cntObs=new IntersectionObserver(function(entries){
  entries.forEach(function(en){
    if(en.isIntersecting){
      var el=en.target;
      var t=parseInt(el.dataset.target)||0;
      var cur2=0;
      var step=Math.max(1,Math.floor(t/50));
      var int=setInterval(function(){
        cur2+=step;
        if(cur2>=t){cur2=t;clearInterval(int);}
        el.textContent=cur2;
      },30);
      cntObs.unobserve(el);
    }
  });
},{threshold:0.5});
counters.forEach(function(c){cntObs.observe(c)});

// ===== ROTA DETAYLARI =====
var routes={
  lunar:{title:'Ay Yörüngesi',sub:'3 günlük Ay yörüngesi deneyimi',distance:'384.400 km',duration:'3 gün',price:'₺2.500.000',badge:'⭐ EN POPÜLER'},
  leo:{title:'Alçak Yörünge',sub:'Dünya çevresinde 6 saat',distance:'400 km',duration:'6 saat',price:'₺1.500.000',badge:'🚀 HIZLI'},
  iss:{title:'ISS Ziyareti',sub:'Uluslararası Uzay İstasyonu turu',distance:'408 km',duration:'2 gün',price:'₺2.000.000',badge:'🛰️ ÖZEL'},
  mars:{title:'Mars Geçişi',sub:'Mars yörüngesi uzaktan görüntüleme',distance:'225M km',duration:'8 ay',price:'₺15.000.000',badge:'🔴 EPİK'},
  deep:{title:'Derin Uzay',sub:'Jüpiter ve Satürn keşif rotası',distance:'1.4B km',duration:'2 yıl',price:'₺85.000.000',badge:'👑 ULTRA'}
};
function setRoute(key){
  var r=routes[key];if(!r)return;
  var e;
  if(e=$('#routeTitle'))e.textContent=r.title;
  if(e=$('#routeSub'))e.textContent=r.sub;
  if(e=$('#routeDistance'))e.textContent=r.distance;
  if(e=$('#routeDuration'))e.textContent=r.duration;
  if(e=$('#routePrice'))e.textContent=r.price;
  var b=$('.route-detail__badge');if(b)b.textContent=r.badge;
}
$$('.planet').forEach(function(p){
  p.addEventListener('click',function(){
    $$('.planet').forEach(function(x){x.classList.remove('active')});
    p.classList.add('active');
    setRoute(p.dataset.route);
  });
});

// ===== ROTA CANVAS =====
var rc=$('#routeCanvas');
if(rc){
  var rctx=rc.getContext('2d');
  var t=0;
  function drawRoute(){
    rctx.clearRect(0,0,rc.width,rc.height);
    var cx=rc.width/2,cy=rc.height/2;
    // Gezegen
    var grad=rctx.createRadialGradient(cx-40,cy-40,20,cx,cy,120);
    grad.addColorStop(0,'#7c3aed');
    grad.addColorStop(1,'#0a0a1f');
    rctx.fillStyle=grad;
    rctx.beginPath();rctx.arc(cx,cy,100,0,Math.PI*2);rctx.fill();
    // Yörünge
    rctx.strokeStyle='rgba(6,182,212,0.4)';
    rctx.lineWidth=2;
    rctx.setLineDash([10,10]);
    rctx.beginPath();rctx.arc(cx,cy,150,0,Math.PI*2);rctx.stroke();
    rctx.setLineDash([]);
    // Uydu
    var x=cx+Math.cos(t)*150;
    var y=cy+Math.sin(t)*150;
    rctx.fillStyle='#06b6d4';
    rctx.beginPath();rctx.arc(x,y,8,0,Math.PI*2);rctx.fill();
    rctx.shadowBlur=20;rctx.shadowColor='#06b6d4';
    rctx.beginPath();rctx.arc(x,y,4,0,Math.PI*2);rctx.fill();
    rctx.shadowBlur=0;
    t+=0.02;
    requestAnimationFrame(drawRoute);
  }
  drawRoute();
}

// ===== THEME =====
var tb=$('#themeBtn');
if(tb){
  var saved=localStorage.getItem('ks_theme')||'dark';
  document.documentElement.setAttribute('data-theme',saved);
  tb.textContent=saved==='dark'?'☀️':'🌙';
  tb.addEventListener('click',function(){
    var n=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',n);
    localStorage.setItem('ks_theme',n);
    tb.textContent=n==='dark'?'☀️':'🌙';
  });
}

// ===== LANG =====
var lb=$('#langBtn');
if(lb){
  lb.addEventListener('click',function(){
    var cur=lb.textContent;
    var n=cur==='TR'?'EN':cur==='EN'?'AR':'TR';
    lb.textContent=n;
    alert('🌐 Dil: '+n+' (demo)');
  });
}

// ===== YUKARI =====
var ft=$('#fabTop');
if(ft)ft.onclick=function(){window.scrollTo({top:0,behavior:'smooth'})};

// ===== TOAST =====
function toast(msg){
  var t=$('#toast');if(!t)return;
  t.textContent=msg;t.classList.add('show');
  clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove('show')},2500);
}

window.KS={toast:toast,$:$,$$:$$,routes:routes};
console.log('🚀 Kozmik Seyahat yüklendi');
})();
