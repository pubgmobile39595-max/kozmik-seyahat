(function(){
'use strict';
var $=function(s){return document.querySelector(s)};
var $$=function(s){return document.querySelectorAll(s)};
var toast=window.KS&&window.KS.toast?window.KS.toast:function(m){alert(m)};

// ARAÇLAR
var fleetGrid=$('#fleetGrid');
if(fleetGrid){
  var fleet=[
    ['🚀','Falcon X','Yeniden kullanılabilir uzay aracı. 6 yolcu kapasitesi.'],
    ['🛰️','Orion Capsule','Derin uzay görevleri için tasarlanmış kapsül.'],
    ['✈️','Starship Mini','Yörünge üstü seyahatler için hızlı araç.']
  ];
  var html='';
  for(var i=0;i<fleet.length;i++){
    html+='<div class="fleet-card"><div class="fleet-card__icon">'+fleet[i][0]+'</div><h3>'+fleet[i][1]+'</h3><p>'+fleet[i][2]+'</p></div>';
  }
  fleetGrid.innerHTML=html;
}

// EKİP
var crewGrid=$('#crewGrid');
if(crewGrid){
  var crew=[
    ['Cmdr. Ayşe Yıldız','Baş Pilot','https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'],
    ['Dr. Mehmet Demir','Uçuş Doktoru','https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'],
    ['Eng. Zeynep Kaya','Sistem Mühendisi','https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'],
    ['Capt. Can Öztürk','Yedek Pilot','https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400']
  ];
  var html2='';
  for(var j=0;j<crew.length;j++){
    html2+='<div class="crew-card"><div class="crew-card__img" style="background-image:url('+crew[j][2]+')"><span class="crew-card__badge">⭐ UZMAN</span></div><div class="crew-card__body"><div class="crew-card__name">'+crew[j][0]+'</div><div class="crew-card__role">'+crew[j][1]+'</div></div></div>';
  }
  crewGrid.innerHTML=html2;
}

// TIMELINE
var timelineList=$('#timelineList');
if(timelineList){
  var tl=[
    ['2020','Kuruluş','Kozmik Seyahat, 3 mühendis tarafından kuruldu.'],
    ['2022','İlk Test Uçuşu','İnsansız kapsül 400 km yükseklikte test edildi.'],
    ['2024','İlk Ticari Uçuş','İlk turist grubu Alçak Yörünge\'de 6 saat geçirdi.'],
    ['2025','Ay Yörüngesi','İnsanlı araç ilk kez Ay yörüngesine ulaştı.'],
    ['2026','Mars Hazırlığı','Mars geçişi için hazırlıklar başladı.'],
    ['2027','Yeni Dönem','Düzenli ticari uçuşlar başlıyor.']
  ];
  var html3='';
  for(var k=0;k<tl.length;k++){
    html3+='<div class="timeline-item"><div class="timeline-year">'+tl[k][0]+'</div><div class="timeline-title">'+tl[k][1]+'</div><div class="timeline-text">'+tl[k][2]+'</div></div>';
  }
  timelineList.innerHTML=html3;
}

// GALERİ
var galleryGrid=$('#galleryGrid');
if(galleryGrid){
  var html4='';
  for(var g=1;g<=8;g++){
    html4+='<div class="gallery__item" style="background-image:url(https://picsum.photos/400?random='+(g+200)+')"></div>';
  }
  galleryGrid.innerHTML=html4;
}

// YORUMLAR
var testimonialsGrid=$('#testimonialsGrid');
if(testimonialsGrid){
  var t=[
    ['Ali V.','İşadamı',5,'Hayatımın en unutulmaz 3 günü! Dünya\'yı uzaydan görmek tarif edilemez.'],
    ['Fatma K.','Doktor',5,'Ekip son derece profesyonel. Kendimi çok güvende hissettim.'],
    ['Hasan Y.','Mühendis',4,'Muhteşem deneyim. Sadece eğitim süresi biraz uzun olabilirdi.'],
    ['Elif D.','Sanatçı',5,'Sıfır yerçekimi hissi inanılmazdı. Herkese tavsiye ederim!'],
    ['Murat A.','Öğretmen',5,'Fiyatı yüksek ama her kuruşuna değer. Bir kez yaşanır.'],
    ['Seda T.','Tasarımcı',4,'Kabin konforu çok iyi. Manzara ise paha biçilemez.']
  ];
  var html5='';
  for(var tt=0;tt<t.length;tt++){
    var stars='';
    for(var st=0;st<t[tt][2];st++)stars+='★';
    var ini=t[tt][0].charAt(0);
    html5+='<div class="testi"><div class="testi__stars">'+stars+'</div><div class="testi__text">'+t[tt][3]+'</div><div class="testi__author"><div class="testi__avatar">'+ini+'</div><div><div class="testi__name">'+t[tt][0]+'</div><div class="testi__role">'+t[tt][1]+'</div></div></div></div>';
  }
  testimonialsGrid.innerHTML=html5;
}

// HABERLER
var newsGrid=$('#newsGrid');
if(newsGrid){
  var news=[
    ['15 Mart 2027','Falcon X başarıyla test edildi','Yeni nesil uzay aracımız 3 saatlik test uçuşunu tamamladı.'],
    ['8 Mart 2027','İlk Türk uzay turisti hazırlanıyor','İlk Türk misafirimiz eğitim kampını tamamladı.'],
    ['1 Mart 2027','Mars rotası onaylandı','Uluslararası havacılık kurumlarından onay geldi.']
  ];
  var html6='';
  for(var n=0;n<news.length;n++){
    html6+='<div class="news-card"><div class="news-card__thumb" style="background-image:url(https://picsum.photos/400?random='+(n+300)+')"></div><div class="news-card__body"><div class="news-card__date">'+news[n][0]+'</div><h3>'+news[n][1]+'</h3><p>'+news[n][2]+'</p></div></div>';
  }
  newsGrid.innerHTML=html6;
}

// FİYATLAR
var pricingGrid=$('#pricingGrid');
if(pricingGrid){
  var pr=[
    ['🎫','Standart','₺1.500.000',['3 gün yörünge','Standart kabin','Temel eğitim','Dijital sertifika'],false],
    ['💎','Premium','₺2.500.000',['5 gün yörünge','VIP kabin','Tam eğitim','Fotoğraf paketi','Uzay yemeği'],true],
    ['👑','VIP Ultra','₺6.500.000',['Ay yörüngesi','Süit kabin','Özel eğitim','Video kaydı','Astronot buluşması','Sınırsız ekstra'],false]
  ];
  var html7='';
  for(var p=0;p<pr.length;p++){
    var ft=pr[p][4]?' price-card--featured':'';
    var badge=pr[p][4]?'<div class="price-card__badge">⭐ EN POPÜLER</div>':'';
    var btnCls=pr[p][4]?'btn--primary':'btn--ghost';
    var fList='';
    for(var f=0;f<pr[p][3].length;f++)fList+='<li>✅ '+pr[p][3][f]+'</li>';
    html7+='<div class="price-card'+ft+'">'+badge+'<div class="price-card__icon">'+pr[p][0]+'</div><h3>'+pr[p][1]+'</h3><div class="price-card__price">'+pr[p][2]+'<span>/kişi</span></div><ul class="price-card__features">'+fList+'</ul><button class="btn '+btnCls+'" onclick="alert(\''+pr[p][1]+' paketi seçildi!\')">Seç</button></div>';
  }
  pricingGrid.innerHTML=html7;
}

// SERTİFİKALAR
var certsGrid=$('#certsGrid');
if(certsGrid){
  var c=[
    ['🏆','ISO 9001','Kalite yönetimi'],
    ['🛡️','NASA Uyumlu','Güvenlik standartları'],
    ['🌍','UNOOSA','BM Uzay Ofisi'],
    ['✈️','FAA Onaylı','ABD Havacılık']
  ];
  var html8='';
  for(var ci=0;ci<c.length;ci++){
    html8+='<div class="cert-card"><div class="cert-card__icon">'+c[ci][0]+'</div><h4>'+c[ci][1]+'</h4><p>'+c[ci][2]+'</p></div>';
  }
  certsGrid.innerHTML=html8;
}

// SSS
var faqList=$('#faqList');
if(faqList){
  var faq=[
    ['Uzaya çıkmak için sağlık şartları neler?','18-65 yaş arası, kalp ve tansiyon rahatsızlığı olmayan herkes başvurabilir.'],
    ['Eğitim ne kadar sürüyor?','Standart pakette 3 gün, Premium\'da 7 gün, VIP\'te 14 gün.'],
    ['Uçuş öncesi ne yapmam gerekiyor?','Özel diyet, düzenli egzersiz ve simülatör eğitimleri.'],
    ['İptal koşulları nedir?','Uçuştan 30 gün öncesine kadar tam iade.'],
    ['Uzayda ne kadar kalıyoruz?','Rota ve pakete göre 6 saat ile 2 yıl arasında değişir.'],
    ['Ailem de gelebilir mi?','Evet, 6 kişiye kadar aynı uçuşta rezervasyon yapılabilir.'],
    ['Sigorta dahil mi?','Tüm paketlerde 5 milyon dolar uzay sigortası dahildir.'],
    ['Fiziksel engeli olanlar katılabilir mi?','Belirli durumlarda evet. Önceden doktor onayı gerekir.']
  ];
  var html9='';
  for(var q=0;q<faq.length;q++){
    html9+='<details class="faq__item"><summary>'+faq[q][0]+'</summary><p>'+faq[q][1]+'</p></details>';
  }
  faqList.innerHTML=html9;
}

// QUIZ
var quizBox=$('#quizBox');
if(quizBox){
  var questions=[
    ['Dünya ile Ay arası mesafe kaç km?',['384.400 km','150.000 km','1.2 milyon km','50.000 km'],0],
    ['Uzayda kaç gün kalınabilir?',['1 gün','1 hafta','1 ay','1 yıl'],2],
    ['İlk insanlı uzay uçuşu hangi yılda?',['1957','1961','1969','1975'],1],
    ['Mars\'a yolculuk kaç ay sürer?',['1 ay','3 ay','8 ay','2 yıl'],2],
    ['Uzayda kaç yıldız var?',['1 milyon','1 milyar','100 milyar','Sayısız'],3]
  ];
  var idx=0,score=0;
  function renderQuiz(){
    if(idx>=questions.length){
      var msg=score>=4?'Harika! Sen gerçek bir uzay uzmanısın!':score>=3?'İyi! Biraz daha çalışmalısın.':'Daha fazla okumalısın!';
      quizBox.innerHTML='<div class="quiz__result"><div style="font-size:4rem">🏆</div><h3>Skor: '+score+'/'+questions.length+'</h3><p>'+msg+'</p><button type="button" class="btn btn--primary" id="qRestart">🔄 Tekrar Dene</button></div>';
      var r=$('#qRestart');
      if(r)r.onclick=function(){idx=0;score=0;renderQuiz()};
      return;
    }
    var qq=questions[idx];
    var html10='<div class="quiz__progress"><span>Soru '+(idx+1)+'/'+questions.length+'</span><span>Skor: '+score+'</span></div><div class="quiz__question">'+qq[0]+'</div><div class="quiz__options">';
    for(var oi=0;oi<qq[1].length;oi++){
      html10+='<button type="button" class="quiz__option" data-i="'+oi+'">'+qq[1][oi]+'</button>';
    }
    html10+='</div>';
    quizBox.innerHTML=html10;
    var opts=quizBox.querySelectorAll('.quiz__option');
    for(var o=0;o<opts.length;o++){
      opts[o].onclick=(function(btn){
        return function(){
          var i=parseInt(btn.getAttribute('data-i'));
          for(var x=0;x<opts.length;x++)opts[x].disabled=true;
          if(i===qq[2]){btn.classList.add('correct');score++;}
          else{btn.classList.add('wrong');opts[qq[2]].classList.add('correct');}
          setTimeout(function(){idx++;renderQuiz()},1200);
        };
      })(opts[o]);
    }
  }
  renderQuiz();
}

// MODAL
var modal=$('#modal');
var modalClose=$('#modalClose');
if(modalClose)modalClose.onclick=function(){modal.classList.remove('active')};
if(modal)modal.onclick=function(e){if(e.target===modal)modal.classList.remove('active')};

// CHAT
var fabChat=$('#fabChat');
var chatBox=$('#chat');
var chatClose=$('#chatClose');
var chatInput=$('#chatInput');
var chatSend=$('#chatSend');
var chatBody=$('#chatBody');
if(fabChat&&chatBox){
  var replies=['Uzay turizmi 2027\'de başlıyor! 🚀','Fiyatlar 1.5M TL\'den başlıyor.','Eğitim kampı 3-14 gün sürer.','Sıfır yerçekimi inanılmaz bir deneyim!','Sağlık şartları için bize yazın.'];
  fabChat.onclick=function(){
    chatBox.classList.toggle('open');
    if(chatBox.classList.contains('open')&&chatInput)chatInput.focus();
  };
  if(chatClose)chatClose.onclick=function(){chatBox.classList.remove('open')};
  function addMsg(t,u){
    var m=document.createElement('div');
    m.className='chat__msg chat__msg--'+(u?'user':'bot');
    m.textContent=t;
    chatBody.appendChild(m);
    chatBody.scrollTop=chatBody.scrollHeight;
  }
  function doSend(){
    var v=chatInput.value.trim();
    if(!v)return;
    addMsg(v,true);
    chatInput.value='';
    setTimeout(function(){addMsg(replies[Math.floor(Math.random()*replies.length)],false)},600);
  }
  if(chatSend)chatSend.onclick=doSend;
  if(chatInput)chatInput.onkeypress=function(e){if(e.key==='Enter')doSend()};
}

// FAVORİ
var fabFav=$('#fabFav');
if(fabFav){
  fabFav.onclick=function(){
    fabFav.classList.toggle('active');
    if(fabFav.classList.contains('active'))toast('❤️ Favorilere eklendi');
    else toast('💔 Favorilerden çıkarıldı');
  };
}

// HESAPLAYICI
var calcBtn=$('#calcBtn');
if(calcBtn){
  function fmt(n){return '₺'+n.toLocaleString('tr-TR')}
  calcBtn.onclick=function(){
    var p=parseInt($('#calcPeople').value)||1;
    var r=parseInt($('#calcRoute').value)||0;
    var room=parseInt($('#calcRoom').value)||0;
    var extra=0;
    var checks=$$('.calc__extras input:checked');
    for(var i=0;i<checks.length;i++)extra+=parseInt(checks[i].getAttribute('data-price'))||0;
    var total=(r+room+extra)*p;
    var pr=$('#calcPrice');
    if(pr)pr.textContent=fmt(total);
    var ex=$('#calcExtra');
    if(ex)ex.textContent='Kişi başı: '+fmt(total/p);
  };
  calcBtn.click();
}

// REZERVASYON
function openReservation(){
  if(!modal)return;
  var body=$('#modalBody');
  if(!body)return;
  body.innerHTML='<h3 style="font-size:1.4rem;margin-bottom:8px">🎟️ Rezervasyon</h3><p style="color:var(--text-dim);font-size:.9rem;margin-bottom:20px">Bilgilerinizi girin</p><form style="display:flex;flex-direction:column;gap:14px" id="resForm"><input placeholder="Ad Soyad" required style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><input placeholder="E-posta" type="email" required style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><input placeholder="Telefon" required style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><input placeholder="Kupon (UZAY25)" style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><button type="submit" style="padding:16px;background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;border:0;border-radius:12px;font-weight:600;cursor:pointer;font-size:1rem">🚀 Rezervasyonu Tamamla</button></form>';
  modal.classList.add('active');
  var form=$('#resForm');
  if(form)form.onsubmit=function(e){
    e.preventDefault();
    toast('✅ Rezervasyon alındı!');
    modal.classList.remove('active');
  };
}
var btnIds=['bookBtn','heroBook','ctaBook','calcBook','routeBook'];
for(var bi=0;bi<btnIds.length;bi++){
  var btn=$(btnIds[bi]);
  if(btn)btn.onclick=openReservation;
}

// PAYLAŞ
var shareBtn=$('#shareBtn');
if(shareBtn)shareBtn.onclick=function(){
  if(navigator.share)navigator.share({title:'Kozmik Seyahat',url:location.href}).catch(function(){});
  else{navigator.clipboard.writeText(location.href);toast('🔗 Link kopyalandı')}
};

// NEWSLETTER
var nf=$('#newsletterForm');
if(nf)nf.onsubmit=function(e){e.preventDefault();toast('✅ Abone oldunuz!');nf.reset()};

// VIEWER
var viewBtns=$$('.viewer__btn');
var views={
  cockpit:['🎮','Kokpit Görünümü'],
  cabin:['💺','Yolcu Kabini'],
  engine:['⚙️','Motor Bölümü'],
  docking:['🛰️','Kenetlenme İstasyonu']
};
for(var vb=0;vb<viewBtns.length;vb++){
  viewBtns[vb].onclick=(function(btn){
    return function(){
      for(var x=0;x<viewBtns.length;x++)viewBtns[x].classList.remove('active');
      btn.classList.add('active');
      var key=btn.getAttribute('data-view');
      var v=views[key];
      if(!v)return;
      var f=$('.viewer__frame');if(f)f.textContent=v[0];
      var l=$('.viewer__label');if(l)l.textContent=v[1];
    };
  })(viewBtns[vb]);
}

// SİMÜLATÖR
var simBtn=$('#simBtn');
if(simBtn)simBtn.onclick=function(){
  if(!modal)return;
  var body=$('#modalBody');
  if(!body)return;
  body.innerHTML='<h3 style="font-size:1.4rem;margin-bottom:8px">🚀 Simülatör</h3><p style="color:var(--text-dim);font-size:.9rem;margin-bottom:20px">Yörünge simülasyonu</p><div style="aspect-ratio:16/9;background:#000;border-radius:16px;position:relative;overflow:hidden"><canvas id="simCanvas" width="500" height="280" style="width:100%;height:100%"></canvas></div><button type="button" style="width:100%;margin-top:16px;padding:14px;background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;border:0;border-radius:12px;font-weight:600;cursor:pointer" id="simStart">▶️ Başlat</button>';
  modal.classList.add('active');
  var simStart=$('#simStart');
  if(simStart)simStart.onclick=function(){
    var c=$('#simCanvas');
    if(!c)return;
    var ctx=c.getContext('2d');
    var t=0;
    var int=setInterval(function(){
      ctx.clearRect(0,0,c.width,c.height);
      var cx=c.width/2,cy=c.height/2;
      var g=ctx.createRadialGradient(cx-20,cy-20,10,cx,cy,60);
      g.addColorStop(0,'#4a90e2');g.addColorStop(1,'#0a2540');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(cx,cy,50,0,Math.PI*2);ctx.fill();
      for(var i=0;i<50;i++){
        ctx.fillStyle='rgba(255,255,255,'+Math.random()+')';
        ctx.fillRect(Math.random()*c.width,Math.random()*c.height,1,1);
      }
      ctx.strokeStyle='rgba(6,182,212,.3)';
      ctx.setLineDash([5,5]);ctx.beginPath();
      ctx.arc(cx,cy,100,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);
      var x=cx+Math.cos(t)*100,y=cy+Math.sin(t)*100;
      ctx.fillStyle='#06b6d4';ctx.shadowBlur=15;ctx.shadowColor='#06b6d4';
      ctx.beginPath();ctx.arc(x,y,6,0,Math.PI*2);ctx.fill();
      ctx.shadowBlur=0;
      t+=0.05;
      if(t>Math.PI*8){clearInterval(int);toast('✅ Simülasyon tamamlandı!')}
    },30);
  };
};

// GALLERY CLICK
document.addEventListener('click',function(e){
  var item=e.target.closest('.gallery__item');
  if(!item||!modal)return;
  var bg=item.style.backgroundImage;
  if(!bg)return;
  var url=bg.replace(/^url\(["']?/,'').replace(/["']?\)$/,'');
  var body=$('#modalBody');
  if(body){
    body.innerHTML='<img src="'+url+'" style="width:100%;border-radius:12px">';
    modal.classList.add('active');
  }
});

console.log('✅ script2 yüklendi');
})();
