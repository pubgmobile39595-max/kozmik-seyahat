(function(){
var $=function(s){return document.querySelector(s)};

// LOADER
var pct=0;
var li=setInterval(function(){
  pct+=Math.random()*15+8;
  if(pct>=100){pct=100;clearInterval(li);setTimeout(function(){var l=$('#loader');if(l)l.classList.add('hide')},400)}
  var f=$('#loaderFill');if(f)f.style.width=pct+'%';
},120);

// NAV SCROLL
var nav=$('#nav');
window.addEventListener('scroll',function(){
  if(nav)nav.classList.toggle('nav--scrolled',window.scrollY>30);
  var top=$('#fabTop');
  if(top)top.classList.toggle('show',window.scrollY>400);
});

// SAYAÇLAR
var counters=document.querySelectorAll('.counter');
var ob=new IntersectionObserver(function(en){
  en.forEach(function(e){
    if(e.isIntersecting){
      var el=e.target,t=parseInt(el.getAttribute('data-target'))||0,c=0;
      var step=Math.max(1,Math.floor(t/60));
      var int=setInterval(function(){
        c+=step;
        if(c>=t){c=t;clearInterval(int)}
        el.textContent=c.toLocaleString('tr-TR');
      },25);
      ob.unobserve(el);
    }
  });
},{threshold:0.5});
for(var i=0;i<counters.length;i++)ob.observe(counters[i]);

// REVEAL
var rob=new IntersectionObserver(function(en){
  en.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('visible');rob.unobserve(e.target)}
  });
},{threshold:0.12});

// TEMA
var tb=$('#themeBtn');
if(tb){
  var saved=localStorage.getItem('mt_theme')||'light';
  document.documentElement.setAttribute('data-theme',saved);
  tb.textContent=saved==='light'?'🌙':'☀️';
  tb.onclick=function(){
    var cur=document.documentElement.getAttribute('data-theme')||'light';
    var n=cur==='light'?'dark':'light';
    document.documentElement.setAttribute('data-theme',n);
    localStorage.setItem('mt_theme',n);
    tb.textContent=n==='light'?'🌙':'☀️';
  };
}

// DİL
var lb=$('#langBtn');
if(lb)lb.onclick=function(){
  var cur=lb.textContent;
  var n=cur==='TR'?'EN':cur==='EN'?'RU':'TR';
  lb.textContent=n;
  var msg=n==='TR'?'Türkçe':n==='EN'?'English':'Русский';
  showToast('🌐 Dil: '+msg);
};

// TOAST
function showToast(m){
  var t=$('#toast');if(!t)return;
  t.textContent=m;t.classList.add('show');
  clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove('show')},2500);
}
window.MT={toast:showToast,$:$,revealObs:rob};

// YUKARI
var ft=$('#fabTop');
if(ft)ft.onclick=function(){window.scrollTo({top:0,behavior:'smooth'})};

console.log('✅ Core yüklendi');
})();
