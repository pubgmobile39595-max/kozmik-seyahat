(function(){
'use strict';
var $=window.KS?window.KS.$:function(s){return document.querySelector(s)};
var $$=window.KS?window.KS.$$:function(s){return document.querySelectorAll(s)};
var toast=window.KS?window.KS.toast:function(m){alert(m)};
var LS={get:function(k,d){try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}},set:function(k,v){localStorage.setItem(k,JSON.stringify(v))}};
function safe(fn){try{fn()}catch(e){console.log('err',e)}}

// ===== ARAÇLAR (FLEET) =====
safe(function(){
  var fleet=[
    {icon:'🚀',name:'Falcon X',desc:'Yeniden kullanılabilir uzay aracı. 6 yolcu kapasitesi.'},
    {icon:'🛰️',name:'Orion Capsule',desc:'Derin uzay görevleri için tasarlanmış kapsül.'},
    {icon:'✈️',name:'Starship Mini',desc:'Yörünge üstü seyahatler için hızlı araç.'}
  ];
  var f=$('#fleetGrid');if(!f)return;
  f.innerHTML=fleet.map(function(x){
    return '<div class="fleet-card"><div class="fleet-card__icon">'+x.icon+'</div><h3>'+x.name+'</h3><p>'+x.desc+'</p></div>';
  }).join('');
});

// ===== EKİP =====
safe(function(){
  var crew=[
    {n:'Cmdr. Ayşe Yıldız',r:'Baş Pilot',img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'},
    {n:'Dr. Mehmet Demir',r:'Uçuş Doktoru',img:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'},
    {n:'Eng. Zeynep Kaya',r:'Sistem Mühendisi',img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'},
    {n:'Capt. Can Öztürk',r:'Yedek Pilot',img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'}
  ];
  var g=$('#crewGrid');if(!g)return;
  g.innerHTML=crew.map(function(c){
    return '<div class="crew-card"><div class="crew-card__img" style="background-image:url('+c.img+')"><span class="crew-card__badge">⭐ UZMAN</span></div><div class="crew-card__body"><div class="crew-card__name">'+c.n+'</div><div class="crew-card__role">'+c.r+'</div></div></div>';
  }).join('');
});

// ===== TIMELINE =====
safe(function(){
  var tl=[
    {y:'2020',t:'Kuruluş',d:'Kozmik Seyahat, 3 mühendis tarafından kuruldu.'},
    {y:'2022',t:'İlk Test Uçuşu',d:'İnsansız kapsül 400 km yükseklikte test edildi.'},
    {y:'2024',t:'İlk Ticari Uçuş',d:'İlk turist grubu Alçak Yörünge\'de 6 saat geçirdi.'},
    {y:'2025',t:'Ay Yörüngesi',d:'İnsanlı araç ilk kez Ay yörüngesine ulaştı.'},
    {y:'2026',t:'Mars Hazırlığı',d:'Mars geçişi için hazırlıklar başladı.'},
    {y:'2027',t:'Yeni Dönem',d:'Düzenli ticari uçuşlar başlıyor.'}
  ];
  var l=$('#timelineList');if(!l)return;
  l.innerHTML=tl.map(function(x){
    return '<div class="timeline-item"><div class="timeline-year">'+x.y+'</div><div class="timeline-title">'+x.t+'</div><div class="timeline-text">'+x.d+'</div></div>';
  }).join('');
});

// ===== GALERİ =====
safe(function(){
  var g=$('#galleryGrid');if(!g)return;
  g.innerHTML='';
  for(var i=1;i<=8;i++){
    var item=document.createElement('div');
    item.className='gallery__item';
    item.style.backgroundImage='url(https://picsum.photos/400?random='+(i+200)+')';
    item.onclick=function(){
      var m=$('#modal'),b=$('#modalBody');
      if(m&&b){
        b.innerHTML='<img src="'+this.style.backgroundImage.slice(5,-2)+'" style="width:100%;border-radius:12px">';
        m.classList.add('active');
      }
    };
    g.appendChild(item);
  }
});

// ===== YORUMLAR =====
safe(function(){
  var t=[
    {n:'Ali V.',r:'İşadamı',s:5,x:'Hayatımın en unutulmaz 3 günü! Dünya\'yı uzaydan görmek tarif edilemez.'},
    {n:'Fatma K.',r:'Doktor',s:5,x:'Ekip son derece profesyonel. Kendimi çok güvende hissettim.'},
    {n:'Hasan Y.',r:'Mühendis',s:4,x:'Muhteşem deneyim. Sadece eğitim süresi biraz uzun olabilirdi.'},
    {n:'Elif D.',r:'Sanatçı',s:5,x:'Sıfır yerçekimi hissi inanılmazdı. Herkese tavsiye ederim!'},
    {n:'Murat A.',r:'Öğretmen',s:5,x:'Fiyatı yüksek ama her kuruşuna değer. Bir kez yaşanır.'},
    {n:'Seda T.',r:'Tasarımcı',s:4,x:'Kabin konforu çok iyi. Manzara ise paha biçilemez.'}
  ];
  var g=$('#testimonialsGrid');if(!g)return;
  g.innerHTML=t.map(function(x){
    var ini=x.n.split(' ').map(function(w){return w[0]}).join('');
    return '<div class="testi"><div class="testi__stars">'+'★'.repeat(x.s)+'</div><div class="testi__text">"'+x.x+'"</div><div class="testi__author"><div class="testi__avatar">'+ini+'</div><div><div class="testi__name">'+x.n+'</div><div class="testi__role">'+x.r+'</div></div></div></div>';
  }).join('');
});

// ===== HABERLER =====
safe(function(){
  var n=[
    {d:'15 Mart 2027',t:'Falcon X başarıyla test edildi',x:'Yeni nesil uzay aracımız 3 saatlik test uçuşunu tamamladı.'},
    {d:'8 Mart 2027',t:'İlk Türk uzay turisti hazırlanıyor',x:'İlk Türk misafirimiz eğitim kampını tamamladı.'},
    {d:'1 Mart 2027',t:'Mars rotası onaylandı',x:'Uluslararası havacılık kurumlarından onay geldi.'}
  ];
  var g=$('#newsGrid');if(!g)return;
  g.innerHTML=n.map(function(x,i){
    return '<div class="news-card"><div class="news-card__thumb" style="background-image:url(https://picsum.photos/400?random='+(i+300)+')"></div><div class="news-card__body"><div class="news-card__date">'+x.d+'</div><h3>'+x.t+'</h3><p>'+x.x+'</p></div></div>';
  }).join('');
});

// ===== FİYATLAR =====
safe(function(){
  var p=[
    {icon:'🎫',n:'Standart',pr:'₺1.500.000',f:['3 gün yörünge','Standart kabin','Temel eğitim','Dijital sertifika']},
    {icon:'💎',n:'Premium',pr:'₺2.500.000',f:['5 gün yörünge','VIP kabin','Tam eğitim','Fotoğraf paketi','Uzay yemeği'],ft:true},
    {icon:'👑',n:'VIP Ultra',pr:'₺6.500.000',f:['Ay yörüngesi','Süit kabin','Özel eğitim','Video kaydı','Astronot buluşması','Sınırsız ekstra']}
  ];
  var g=$('#pricingGrid');if(!g)return;
  g.innerHTML=p.map(function(x){
    return '<div class="price-card'+(x.ft?' price-card--featured':'')+'">'+(x.ft?'<div class="price-card__badge">⭐ EN POPÜLER</div>':'')+'<div class="price-card__icon">'+x.icon+'</div><h3>'+x.n+'</h3><div class="price-card__price">'+x.pr+'<span>/kişi</span></div><ul class="price-card__features">'+x.f.map(function(f){return '<li>✅ '+f+'</li>'}).join('')+'</ul><button class="btn '+(x.ft?'btn--primary':'btn--ghost')+'" onclick="alert(\''+x.n+' paketi seçildi!\')">Seç</button></div>';
  }).join('');
});

// ===== SERTİFİKALAR =====
safe(function(){
  var c=[
    {i:'🏆',n:'ISO 9001',d:'Kalite yönetimi'},
    {i:'🛡️',n:'NASA Uyumlu',d:'Güvenlik standartları'},
    {i:'🌍',n:'UNOOSA',d:'BM Uzay Ofisi'},
    {i:'✈️',n:'FAA Onaylı',d:'ABD Havacılık'}
  ];
  var g=$('#certsGrid');if(!g)return;
  g.innerHTML=c.map(function(x){
    return '<div class="cert-card"><div class="cert-card__icon">'+x.i+'</div><h4>'+x.n+'</h4><p>'+x.d+'</p></div>';
  }).join('');
});

// ===== SSS =====
safe(function(){
  var f=[
    {q:'Uzaya çıkmak için sağlık şartları neler?',a:'18-65 yaş arası, kalp ve tansiyon rahatsızlığı olmayan herkes başvurabilir. Detaylı sağlık kontrolü ücretsizdir.'},
    {q:'Eğitim ne kadar sürüyor?',a:'Standart pakette 3 gün, Premium\'da 7 gün, VIP\'te 14 günlük fiziksel ve psikolojik eğitim programı uygulanır.'},
    {q:'Uçuş öncesi ne yapmam gerekiyor?',a:'Özel diyet, düzenli egzersiz ve simülatör eğitimleri. Tüm süreç ekibimiz tarafından yönlendirilir.'},
    {q:'İptal koşulları nedir?',a:'Uçuştan 30 gün öncesine kadar tam iade. Sonrasında %50 kesinti uygulanır.'},
    {q:'Uzayda ne kadar kalıyoruz?',a:'Rota ve pakete göre 6 saat ile 2 yıl arasında değişir. En popüler olan Ay rotası 3 gündür.'},
    {q:'Ailem de gelebilir mi?',a:'Evet, 6 kişiye kadar aynı uçuşta rezervasyon yapılabilir. Grup indirimi uygulanır.'},
    {q:'Sigorta dahil mi?',a:'Tüm paketlerde 5 milyon dolar uzay sigortası dahildir.'},
    {q:'Fiziksel engeli olanlar katılabilir mi?',a:'Belirli durumlarda evet. Önceden doktor onayı ve özel değerlendirme gerekir.'}
  ];
  var l=$('#faqList');if(!l)return;
  l.innerHTML=f.map(function(x){
    return '<details class="faq__item"><summary>'+x.q+'</summary><p>'+x.a+'</p></details>';
  }).join('');
});

// ===== QUIZ =====
safe(function(){
  var questions=[
    {q:'Dünya ile Ay arası mesafe kaç km?',o:['384.400 km','150.000 km','1.2 milyon km','50.000 km'],c:0},
    {q:'Uzayda kaç gün kalınabilir?',o:['1 gün','1 hafta','1 ay','1 yıl'],c:2},
    {q:'İlk insanlı uzay uçuşu hangi yılda?',o:['1957','1961','1969','1975'],c:1},
    {q:'Mars\'a yolculuk kaç ay sürer?',o:['1 ay','3 ay','8 ay','2 yıl'],c:2},
    {q:'Uzayda kaç yıldız var?',o:['1 milyon','1 milyar','100 milyar','Milyarlarca galakside sayısız'],c:3}
  ];
  var idx=0,score=0;
  var box=$('#quizBox');if(!box)return;
  function render(){
    if(idx>=questions.length){
      box.innerHTML='<div class="quiz__result"><div style="font-size:4rem">🏆</div><h3>Skor: '+score+'/'+questions.length+'</h3><p>'+(score>=4?'Harika! Sen gerçek bir uzay uzmanısın!':score>=3?'İyi! Biraz daha çalışmalısın.':'Daha fazla okumalısın!')+'</p><button type="button" class="btn btn--primary" id="qRestart">🔄 Tekrar Dene</button></div>';
      var r=$('#qRestart');if(r)r.onclick=function(){idx=0;score=0;render()};
      return;
    }
    var q=questions[idx];
    box.innerHTML='<div class="quiz__progress"><span>Soru '+(idx+1)+'/'+questions.length+'</span><span>Skor: '+score+'</span></div><div class="quiz__question">'+q.q+'</div><div class="quiz__options">'+q.o.map(function(o,i){return '<button type="button" class="quiz__option" data-i="'+i+'">'+o+'</button>'}).join('')+'</div>';
    box.querySelectorAll('.quiz__option').forEach(function(b){
      b.onclick=function(){
        var i=parseInt(b.dataset.i);
        box.querySelectorAll('.quiz__option').forEach(function(x){x.disabled=true});
        if(i===q.c){b.classList.add('correct');score++;}
        else{b.classList.add('wrong');box.querySelectorAll('.quiz__option')[q.c].classList.add('correct');}
        setTimeout(function(){idx++;render()},1200);
      };
    });
  }
  render();
});

// ===== MODAL =====
safe(function(){
  var m=$('#modal'),c=$('#modalClose');
  if(c)c.onclick=function(){m.classList.remove('active')};
  if(m)m.onclick=function(e){if(e.target===m)m.classList.remove('active')};
  window.showModal=function(html){
    if(m&&$('#modalBody')){$('#modalBody').innerHTML=html;m.classList.add('active');}
  };
});

// ===== CHAT =====
safe(function(){
  var fab=$('#fabChat'),box=$('#chat'),close=$('#chatClose'),input=$('#chatInput'),send=$('#chatSend'),body=$('#chatBody');
  if(!fab||!box)return;
  var replies=['Uzay turizmi 2027\'de başlıyor! 🚀','Fiyatlar 1.5M TL\'den başlıyor.','Eğitim kampı 3-14 gün sürer.','Rezervasyon için formu doldurabilirsiniz.','Sıfır yerçekimi inanılmaz bir deneyim!','Sağlık şartları için bize yazın.'];
  fab.onclick=function(){box.classList.toggle('open');if(box.classList.contains('open'))input.focus()};
  if(close)close.onclick=function(){box.classList.remove('open')};
  function addMsg(t,u){
    var m=document.createElement('div');
    m.className='chat__msg chat__msg--'+(u?'user':'bot');
    m.textContent=t;body.appendChild(m);body.scrollTop=body.scrollHeight;
  }
  function doSend(){
    var v=input.value.trim();if(!v)return;
    addMsg(v,true);input.value='';
    setTimeout(function(){addMsg(replies[Math.floor(Math.random()*replies.length)],false)},600);
  }
  if(send)send.onclick=doSend;
  if(input)input.onkeypress=function(e){if(e.key==='Enter')doSend()};
});

// ===== FAVORİLER =====
safe(function(){
  var b=$('#fabFav');if(!b)return;
  var favs=LS.get('ks_fav',[]);
  if(favs.length>0)b.classList.add('active');
  b.onclick=function(){
    b.classList.toggle('active');
    if(b.classList.contains('active')){LS.set('ks_fav',['tum']);toast('❤️ Favorilere eklendi')}
    else{LS.set('ks_fav',[]);toast('💔 Favorilerden çıkarıldı')}
  };
});

// ===== KUPON =====
safe(function(){
  var codes={UZAY25:25,KOZMIK30:30,ILKUcus50:50};
  document.addEventListener('click',function(e){
    if(e.target.closest('#heroBook')||e.target.closest('#ctaBook')||e.target.closest('#bookBtn')||e.target.closest('#calcBook')||e.target.closest('#routeBook')){
      setTimeout(function(){
        window.showModal('<h3 style="font-size:1.4rem;margin-bottom:8px">🎟️ Rezervasyon</h3><p style="color:var(--text-dim);font-size:.9rem;margin-bottom:20px">Bilgilerinizi girin</p><form style="display:flex;flex-direction:column;gap:14px" onsubmit="event.preventDefault();alert(\'✅ Rezervasyon alındı!\');this.closest(\'.modal\').classList.remove(\'active\')"><input placeholder="Ad Soyad" required style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><input placeholder="E-posta" type="email" required style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><input placeholder="Telefon" required style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><input placeholder="Kupon (UZAY25)" style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><button type="submit" style="padding:16px;background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;border:0;border-radius:12px;font-weight:600;cursor:pointer;font-size:1rem">🚀 Rezervasyonu Tamamla</button></form>');
      },300);
    }
  });
});

// ===== HESAPLAYICI =====
safe(function(){
  var btn=$('#calcBtn');if(!btn)return;
  function fmt(n){return '₺'+n.toLocaleString('tr-TR')}
  btn.onclick=function(){
    var p=parseInt($('#calcPeople').value)||1;
    var r=parseInt($('#calcRoute').value)||0;
    var room=parseInt($('#calcRoom').value)||0;
    var extra=0;
    $$('.calc__extras input:checked').forEach(function(c){extra+=parseInt(c.dataset.price)||0});
    var total=(r+room+extra)*p;
    var pr=$('#calcPrice');if(pr)pr.textContent=fmt(total);
    var ex=$('#calcExtra');if(ex)ex.textContent='Kişi başı: '+fmt(total/p);
  };
  btn.click();
});

// ===== PAYLAŞ =====
safe(function(){
  var b=$('#shareBtn');
  if(b)b.onclick=function(){
    if(navigator.share){navigator.share({title:'Kozmik Seyahat',url:location.href}).catch(function(){})}
    else{navigator.clipboard.writeText(location.href);toast('🔗 Link kopyalandı')}
  };
});

// ===== NEWSLETTER =====
safe(function(){
  var f=$('#newsletterForm');
  if(f)f.onsubmit=function(e){e.preventDefault();toast('✅ Abone oldunuz!');f.reset()};
});

// ===== VIEWER =====
safe(function(){
  var views={
    cockpit:{i:'🎮',l:'Kokpit Görünümü'},
    cabin:{i:'💺',l:'Yolcu Kabini'},
    engine:{i:'⚙️',l:'Motor Bölümü'},
    docking:{i:'🛰️',l:'Kenetlenme İstasyonu'}
  };
  $$('.viewer__btn').forEach(function(b){
    b.onclick=function(){
      $$('.viewer__btn').forEach(function(x){x.classList.remove('active')});
      b.classList.add('active');
      var v=views[b.dataset.view];if(!v)return;
      var f=$('.viewer__frame');if(f)f.textContent=v.i;
      var l=$('.viewer__label');if(l)l.textContent=v.l;
    };
  });
});

// ===== SİMÜLATÖR =====
safe(function(){
  var b=$('#simBtn');
  if(b)b.onclick=function(){
    var m=$('#modal'),body=$('#modalBody');
    if(m&&body){
      body.innerHTML='<h3 style="font-size:1.4rem;margin-bottom:8px">🚀 Simülatör</h3><p style="color:var(--text-dim);font-size:.9rem;margin-bottom:20px">Yörünge simülasyonu</p><div style="aspect-ratio:16/9;background:#000;border-radius:16px;position:relative;overflow:hidden"><canvas id="simCanvas" width="500" height="280" style="width:100%;height:100%"></canvas></div><button type="button" style="width:100%;margin-top:16px;padding:14px;background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;border:0;border-radius:12px;font-weight:600;cursor:pointer" id="simStart">▶️ Başlat</button>';
      m.classList.add('active');
      var c=$('#simCanvas');
      var st=$('#simStart');
      if(st)st.onclick=function(){
        if(!c)return;
        var ctx=c.getContext('2d');
        var t=0;
        var int=setInterval(function(){
          ctx.clearRect(0,0,c.width,c.height);
          var cx=c.width/2,cy=c.height/2;
          // Earth
          var g=ctx.createRadialGradient(cx-20,cy-20,10,cx,cy,60);
          g.addColorStop(0,'#4a90e2');g.addColorStop(1,'#0a2540');
          ctx.fillStyle=g;ctx.beginPath();ctx.arc(cx,cy,50,0,Math.PI*2);ctx.fill();
          // Stars
          for(var i=0;i<50;i++){
            ctx.fillStyle='rgba(255,255,255,'+(Math.random())')';
            ctx.fillRect(Math.random()*c.width,Math.random()*c.height,1,1);
          }
          // Orbit
          ctx.strokeStyle='rgba(6,182,212,.3)';
          ctx.setLineDash([5,5]);ctx.beginPath();
          ctx.arc(cx,cy,100,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);
          // Satellite
          var x=cx+Math.cos(t)*100,y=cy+Math.sin(t)*100;
          ctx.fillStyle='#06b6d4';ctx.shadowBlur=15;ctx.shadowColor='#06b6d4';
          ctx.beginPath();ctx.arc(x,y,6,0,Math.PI*2);ctx.fill();
          ctx.shadowBlur=0;
          t+=0.05;
          if(t>Math.PI*8){clearInterval(int);toast('✅ Simülasyon tamamlandı!')}
        },30);
      };
    }
  };
});

console.log('✅ Kozmik Seyahat part 2 yüklendi');
})();
