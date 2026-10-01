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
  leo:{title:'Alçak Yörünge',sub:'
