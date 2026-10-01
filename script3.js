(function(){
var $=function(s){return document.querySelector(s)};
var $$=function(s){return document.querySelectorAll(s)};
var modal,mb;
function ready(){modal=$('#modal');mb=$('#modalBody');return modal&&mb}

// 1. FİYATLARI YENİDEN OLUŞTUR (4 paket + ödeme butonlu)
function refreshPricing(){
  var pg=$('#pricingGrid');if(!pg)return;
  var plans=[
    {icon:'🎫',name:'Başlangıç',price:'₺750.000',features:['1 gün yörünge','Standart kabin','Temel eğitim','Dijital sertifika'],featured:false},
    {icon:'🚀',name:'Standart',price:'₺1.500.000',features:['3 gün yörünge','Standart kabin','Tam eğitim','Sertifika + fotoğraf'],featured:false},
    {icon:'💎',name:'Premium',price:'₺2.500.000',features:['5 gün yörünge','VIP kabin','Tam eğitim','Fotoğraf paketi','Gurme şef menüsü'],featured:true},
    {icon:'👑',name:'VIP Ultra',price:'₺6.500.000',features:['Ay yörüngesi','Süit kabin','Özel eğitim','Video kaydı','Astronot buluşması','Sınırsız ekstra'],featured:false}
  ];
  var html='';
  for(var i=0;i<plans.length;i++){
    var p=plans[i],ft=p.featured?' price-card--featured':'',badge=p.featured?'<div class="price-card__badge">⭐ EN POPÜLER</div>':'',cls=p.featured?'btn--primary':'btn--ghost',fl='';
    for(var j=0;j<p.features.length;j++)fl+='<li>✅ '+p.features[j]+'</li>';
    html+='<div class="price-card'+ft+'">'+badge+'<div class="price-card__icon">'+p.icon+'</div><h3>'+p.name+'</h3><div class="price-card__price">'+p.price+'<span>/kişi</span></div><ul class="price-card__features">'+fl+'</ul><button class="btn '+cls+' buy-btn" data-plan="'+p.name+'" data-price="'+p.price+'">🛒 Rezervasyon</button></div>';
  }
  pg.innerHTML=html;
  var btns=pg.querySelectorAll('.buy-btn');
  for(var k=0;k<btns.length;k++){
    btns[k].onclick=(function(b){return function(){openPayment(b.getAttribute('data-plan'),b.getAttribute('data-price'))}})(btns[k]);
  }
}

// 2. ÖDEME SİSTEMİ
function openPayment(plan,price){
  if(!ready())return;
  mb.innerHTML='<div style="text-align:center;margin-bottom:20px"><div style="font-size:2.5rem">💳</div><h3 style="font-size:1.4rem;margin:8px 0 6px">Güvenli Ödeme</h3><p style="color:var(--text-dim);font-size:.9rem">'+plan+' Paketi · <strong style="color:var(--text)">'+price+'</strong></p></div><form id="payForm" style="display:flex;flex-direction:column;gap:14px"><div style="display:grid;grid-template-columns:1fr 1fr;gap:14px"><input placeholder="Ad Soyad" required style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><input type="email" placeholder="E-posta" required style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"></div><input id="payCard" placeholder="Kart Numarası" maxlength="19" required style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit;letter-spacing:2px"><div style="display:grid;grid-template-columns:1fr 1fr;gap:14px"><input id="payExp" placeholder="AA/YY" maxlength="5" required style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><input placeholder="CVV" maxlength="3" required style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"></div><div style="padding:12px 16px;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.3);border-radius:12px;font-size:.82rem;color:var(--text);display:flex;align-items:center;gap:10px"><span style="font-size:1.4rem">🔒</span><div><strong>256-bit SSL Güvenli Ödeme</strong><br><span style="color:var(--text-dim)">Kart bilgileriniz şifrelenmiştir</span></div></div><button type="submit" style="padding:16px;background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;border:0;border-radius:12px;font-weight:600;cursor:pointer;font-size:1rem">💳 '+price+' Öde</button></form>';
  modal.classList.add('active');
  var f=$('#payForm');
  if(f)f.onsubmit=function(e){
    e.preventDefault();
    var btn=f.querySelector('button[type=submit]');
    btn.disabled=true;btn.textContent='⏳ İşleniyor...';
    setTimeout(function(){
      var rn='KS-'+Date.now().toString().slice(-8);
      mb.innerHTML='<div style="text-align:center;padding:20px"><div style="font-size:4rem;margin-bottom:14px">✅</div><h3 style="font-size:1.5rem;margin-bottom:10px;background:linear-gradient(135deg,#10b981,#06b6d4);-webkit-background-clip:text;background-clip:text;color:transparent">Ödeme Başarılı!</h3><p style="color:var(--text-dim);font-size:.9rem;margin-bottom:20px">'+plan+' paketiniz onaylandı. Bilet e-posta adresinize gönderildi.</p><div style="padding:16px;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.3);border-radius:12px;font-family:monospace;font-size:.85rem;margin-bottom:20px">Rezervasyon No:<br><strong style="font-size:1.1rem">'+rn+'</strong></div><button type="button" onclick="document.getElementById(\'modal\').classList.remove(\'active\')" style="padding:14px 32px;background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;border:0;border-radius:12px;font-weight:600;cursor:pointer">Tamam</button></div>';
    },1500);
  };
  var c=$('#payCard');if(c)c.oninput=function(){c.value=c.value.replace(/\s/g,'').replace(/(\d{4})/g,'$1 ').trim()};
  var x=$('#payExp');if(x)x.oninput=function(){var v=x.value.replace(/\D/g,'');if(v.length>=2)v=v.slice(0,2)+'/'+v.slice(2,4);x.value=v};
}

// 3. BASIN MODALI
function showPress(){
  if(!ready())return;
  var files=[
    ['🎨','Logo Paketi (PNG/SVG)','2.4 MB'],
    ['📄','Basın Bülteni (PDF)','840 KB'],
    ['📸','Yüksek Çözünürlüklü Fotoğraflar','45 MB'],
    ['📋','Şirket Profili','320 KB'],
    ['🎬','Tanıtım Videosu','128 MB']
  ];
  var html='<h3 style="font-size:1.5rem;margin-bottom:6px">📰 Basın Kiti</h3><p style="color:var(--text-dim);font-size:.9rem;margin-bottom:20px">Medya ve basın için tüm materyaller</p><div style="display:flex;flex-direction:column;gap:10px">';
  for(var i=0;i<files.length;i++){
    html+='<button type="button" onclick="alert(\'📥 '+files[i][1]+' indiriliyor...\')" style="display:flex;justify-content:space-between;align-items:center;padding:16px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);cursor:pointer;font-family:inherit;font-size:.9rem;text-align:left"><span>'+files[i][0]+' '+files[i][1]+'</span><span style="color:var(--text-dim);font-size:.82rem">'+files[i][2]+'</span></button>';
  }
  html+='</div><div style="margin-top:20px;padding:14px;background:rgba(124,58,237,.1);border:1px solid rgba(124,58,237,.3);border-radius:12px;font-size:.85rem"><strong>Basın İletişim:</strong><br><span style="color:var(--text-dim)">press@kozmikseyahat.com · +90 212 555 00 01</span></div>';
  mb.innerHTML=html;
  modal.classList.add('active');
}

// 4. KARİYER MODALI
function showCareer(){
  if(!ready())return;
  var jobs=[
    ['👨‍🚀','Uçuş Pilotu','Ankara · Tam zamanlı','Deneyim: 5+ yıl'],
    ['🔧','Sistem Mühendisi','İstanbul · Tam zamanlı','Deneyim: 3+ yıl'],
    ['📊','Veri Analisti','Uzaktan · Tam zamanlı','Deneyim: 2+ yıl'],
    ['🎨','UX/UI Tasarımcı','İstanbul · Hibrit','Deneyim: 3+ yıl'],
    ['💬','Müşteri Deneyimi Uzmanı','Ankara · Tam zamanlı','Deneyim: 1+ yıl'],
    ['📣','Pazarlama Müdürü','İstanbul · Tam zamanlı','Deneyim: 5+ yıl']
  ];
  var html='<h3 style="font-size:1.5rem;margin-bottom:6px">💼 Kariyer</h3><p style="color:var(--text-dim);font-size:.9rem;margin-bottom:20px">Bize katılın, uzayın geleceğini birlikte inşa edelim</p><div style="display:flex;flex-direction:column;gap:10px">';
  for(var i=0;i<jobs.length;i++){
    html+='<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;padding:16px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px"><div style="display:flex;gap:12px;align-items:center;min-width:0"><span style="font-size:1.8rem">'+jobs[i][0]+'</span><div style="min-width:0"><div style="font-weight:600;margin-bottom:4px">'+jobs[i][1]+'</div><div style="color:var(--text-dim);font-size:.8rem">'+jobs[i][2]+'</div><div style="color:var(--text-dim);font-size:.75rem;margin-top:2px">'+jobs[i][3]+'</div></div></div><button type="button" onclick="alert(\'📩 Başvurunuz alındı! 3 iş günü içinde dönüş yapılacak.\')" style="flex-shrink:0;padding:10px 16px;background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;border:0;border-radius:10px;font-weight:600;cursor:pointer;font-size:.82rem">Başvur</button></div>';
  }
  html+='</div><div style="margin-top:20px;padding:14px;background:rgba(6,182,212,.1);border:1px solid rgba(6,182,212,.3);border-radius:12px;font-size:.85rem"><strong>Genel Başvuru:</strong><br><span style="color:var(--text-dim)">kariyer@kozmikseyahat.com</span></div>';
  mb.innerHTML=html;
  modal.classList.add('active');
}

// 5. FOOTER LİNKLER
document.addEventListener('click',function(e){
  var a=e.target.closest('.footer__grid a');
  if(!a)return;
  var t=a.textContent.trim();
  if(t==='Basın'){e.preventDefault();showPress();}
  if(t==='Kariyer'){e.preventDefault();showCareer();}
});

// 6. TEMA FIX
function fixTheme(){
  var tb=$('#themeBtn');if(!tb)return;
  var nb=tb.cloneNode(true);
  tb.parentNode.replaceChild(nb,tb);
  var saved=localStorage.getItem('ks_theme')||'dark';
  document.documentElement.setAttribute('data-theme',saved);
  nb.textContent=saved==='dark'?'☀️':'🌙';
  nb.onclick=function(){
    var cur=document.documentElement.getAttribute('data-theme')||'dark';
    var n=cur==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',n);
    if(n==='light'){
      document.documentElement.style.background='#f0f4ff';
      document.body.style.background='#f0f4ff';
      document.body.style.color='#0a0a2a';
    }else{
      document.documentElement.style.background='#000010';
      document.body.style.background='#000010';
      document.body.style.color='#ffffff';
    }
    localStorage.setItem('ks_theme',n);
    nb.textContent=n==='dark'?'☀️':'🌙';
  };
}

// 7. 3D VIEWER (Canvas)
function fixViewer(){
  var sc=$('#viewerScreen');if(!sc)return;
  var fr=$('.viewer__frame');if(fr)fr.style.display='none';
  if(!$('#viewerCanvas')){
    var c=document.createElement('canvas');
    c.id='viewerCanvas';c.width=600;c.height=400;
    c.style.cssText='width:100%;height:100%;display:block;position:absolute;top:0;left:0';
    sc.insertBefore(c,sc.firstChild);
  }
  var views={cockpit:{c:'#7c3aed',s:'cube'},cabin:{c:'#06b6d4',s:'sphere'},engine:{c:'#f59e0b',s:'torus'},docking:{c:'#ec4899',s:'ring'}};
  var cur='cockpit',t=0;
  function draw(){
    var c=$('#viewerCanvas');if(!c)return;
    var ctx=c.getContext('2d');
    ctx.clearRect(0,0,c.width,c.height);
    var cx=c.width/2,cy=c.height/2,v=views[cur];
    var bg=ctx.createRadialGradient(cx,cy,10,cx,cy,300);
    bg.addColorStop(0,'rgba(124,58,237,.15)');bg.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=bg;ctx.fillRect(0,0,c.width,c.height);
    for(var i=0;i<80;i++){
      ctx.fillStyle='rgba(255,255,255,'+(0.2+Math.random()*0.5)+')';
      ctx.fillRect((i*83)%c.width,(i*127)%c.height,1,1);
    }
    ctx.save();ctx.translate(cx,cy);
    ctx.shadowBlur=30;ctx.shadowColor=v.c;
    if(v.s==='cube'){
      var s=120;
      ctx.rotate(t);ctx.strokeStyle=v.c;ctx.lineWidth=3;ctx.fillStyle='rgba(124,58,237,.15)';
      for(var k=0;k<4;k++){ctx.save();ctx.rotate(k*Math.PI/2);ctx.beginPath();ctx.rect(-s/2,-s/2,s,s);ctx.fill();ctx.stroke();ctx.restore();}
    }else if(v.s==='sphere'){
      var r=90,g=ctx.createRadialGradient(-30,-30,10,0,0,r);
      g.addColorStop(0,v.c);g.addColorStop(1,'#0a0a1f');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle=v.c;ctx.lineWidth=2;
      for(var m=0;m<3;m++){ctx.save();ctx.rotate(t+m*Math.PI/3);ctx.beginPath();ctx.ellipse(0,0,r,r*0.3,0,0,Math.PI*2);ctx.stroke();ctx.restore();}
    }else if(v.s==='torus'){
      ctx.rotate(t);ctx.strokeStyle=v.c;ctx.lineWidth=4;
      for(var n=0;n<3;n++){ctx.beginPath();ctx.arc(0,0,60+n*25,0,Math.PI*2);ctx.stroke();}
    }else if(v.s==='ring'){
      ctx.rotate(t);ctx.strokeStyle=v.c;ctx.lineWidth=5;
      for(var p=0;p<3;p++){ctx.beginPath();ctx.arc(0,0,50+p*30,0,Math.PI*1.5);ctx.stroke();}
    }
    ctx.restore();t+=0.02;requestAnimationFrame(draw);
  }
  draw();
  var btns=$$('.viewer__btn');
  for(var b=0;b<btns.length;b++){
    btns[b].onclick=(function(btn){return function(){
      for(var x=0;x<btns.length;x++)btns[x].classList.remove('active');
      btn.classList.add('active');
      cur=btn.getAttribute('data-view');
      var labels={cockpit:'Kokpit Görünümü',cabin:'Yolcu Kabini',engine:'Motor Bölümü',docking:'Kenetlenme İstasyonu'};
      var l=$('.viewer__label');if(l)l.textContent=labels[cur]||'Görünüm';
    }})(btns[b]);
  }
}

// 8. SİMÜLATÖR FIX
function fixSim(){
  var sb=$('#simBtn');if(!sb)return;
  var nb=sb.cloneNode(true);
  sb.parentNode.replaceChild(nb,sb);
  nb.onclick=function(){
    if(!ready())return;
    mb.innerHTML='<h3 style="font-size:1.4rem;margin-bottom:6px">🚀 Yörünge Simülatörü</h3><p style="color:var(--text-dim);font-size:.9rem;margin-bottom:16px">Canlı uydu yörünge simülasyonu</p><div style="aspect-ratio:16/9;background:#000;border-radius:16px;position:relative;overflow:hidden"><canvas id="simCanvas" width="600" height="340" style="width:100%;height:100%;display:block"></canvas></div><div style="display:flex;gap:10px;margin-top:16px"><button type="button" id="simStart" style="flex:1;padding:14px;background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;border:0;border-radius:12px;font-weight:600;cursor:pointer">▶️ Başlat</button><button type="button" id="simStop" style="padding:14px 20px;background:rgba(255,255,255,.05);border:1px solid var(--border);color:var(--text);border-radius:12px;font-weight:600;cursor:pointer">⏹️ Durdur</button></div><div style="margin-top:14px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;text-align:center"><div style="padding:12px;background:rgba(255,255,255,.03);border-radius:10px"><div style="font-size:.68rem;color:var(--text-dim);letter-spacing:.1em">HIZ</div><div style="font-weight:700;color:#7c3aed;font-family:monospace">28.000 km/s</div></div><div style="padding:12px;background:rgba(255,255,255,.03);border-radius:10px"><div style="font-size:.68rem;color:var(--text-dim);letter-spacing:.1em">YÜKSEKLİK</div><div style="font-weight:700;color:#06b6d4;font-family:monospace">408 km</div></div><div style="padding:12px;background:rgba(255,255,255,.03);border-radius:10px"><div style="font-size:.68rem;color:var(--text-dim);letter-spacing:.1em">TUR</div><div style="font-weight:700;color:#10b981;font-family:monospace" id="simOrbit">0</div></div></div>';
    modal.classList.add('active');
    var intv=null,t=0,orbit=0;
    function loop(){
      var c=$('#simCanvas');if(!c)return;
      var ctx=c.getContext('2d');
      ctx.clearRect(0,0,c.width,c.height);
      var cx=c.width/2,cy=c.height/2;
      for(var i=0;i<100;i++){
        ctx.fillStyle='rgba(255,255,255,'+(0.3+Math.random()*0.5)+')';
        ctx.fillRect((i*67+t*10)%c.width,(i*89)%c.height,1,1);
      }
      var g=ctx.createRadialGradient(cx-40,cy-40,20,cx,cy,90);
      g.addColorStop(0,'#4a90e2');g.addColorStop(0.5,'#2c5f9e');g.addColorStop(1,'#0a2540');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(cx,cy,70,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(16,185,129,.4)';
      ctx.beginPath();ctx.arc(cx-20,cy-15,20,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(cx+25,cy+20,15,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle='rgba(6,182,212,.3)';ctx.setLineDash([8,8]);
      ctx.beginPath();ctx.arc(cx,cy,130,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);
      ctx.strokeStyle='rgba(6,182,212,.6)';ctx.lineWidth=2;
      ctx.beginPath();
      for(var k=0;k<20;k++){
        var kt=t-k*0.1,kx=cx+Math.cos(kt)*130,ky=cy+Math.sin(kt)*130;
        if(k===0)ctx.moveTo(kx,ky);else ctx.lineTo(kx,ky);
      }
      ctx.stroke();
      var x=cx+Math.cos(t)*130,y=cy+Math.sin(t)*130;
      ctx.shadowBlur=25;ctx.shadowColor='#06b6d4';
      ctx.fillStyle='#06b6d4';ctx.beginPath();ctx.arc(x,y,8,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fill();
      ctx.shadowBlur=0;
      t+=0.03;
      if(t>Math.PI*2){t-=Math.PI*2;orbit++;var so=$('#simOrbit');if(so)so.textContent=orbit;}
    }
    var ss=$('#simStart'),st=$('#simStop');
    if(ss)ss.onclick=function(){if(intv)return;intv=setInterval(loop,30)};
    if(st)st.onclick=function(){clearInterval(intv);intv=null};
    intv=setInterval(loop,30);
  };
}

// BAŞLAT
window.addEventListener('load',function(){
  setTimeout(function(){
    try{refreshPricing()}catch(e){}
    try{fixTheme()}catch(e){}
    try{fixViewer()}catch(e){}
    try{fixSim()}catch(e){}
    console.log('✅ Tüm düzeltmeler yüklendi');
  },1200);
});
})();
