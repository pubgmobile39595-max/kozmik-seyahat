(function(){
var $=function(s){return document.querySelector(s)};
var t=window.MT?window.MT.toast:function(m){alert(m)};

// DESTİNASYONLAR
var DEST=[
  {n:'Kapadokya',c:'Türkiye',img:'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=600',price:12900,dur:'3 Gün',r:4.9,badge:'⭐ POPÜLER'},
  {n:'Antalya',c:'Türkiye',img:'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?w=600',price:8900,dur:'4 Gün',r:4.8,badge:''},
  {n:'Paris',c:'Fransa',img:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600',price:42000,dur:'5 Gün',r:4.8,badge:''},
  {n:'Dubai',c:'BAE',img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600',price:35000,dur:'4 Gün',r:4.7,badge:'🔥 YENİ'},
  {n:'Roma',c:'İtalya',img:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600',price:38000,dur:'5 Gün',r:4.8,badge:''},
  {n:'Bali',c:'Endonezya',img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600',price:58000,dur:'8 Gün',r:4.9,badge:'🌴 EGZOTİK'},
  {n:'Mısır',c:'Mısır',img:'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600',price:24000,dur:'6 Gün',r:4.6,badge:'🏛️ KÜLTÜR'},
  {n:'Santorini',c:'Yunanistan',img:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600',price:48000,dur:'5 Gün',r:4.9,badge:'💙 ROMANTİK'}
];

// TURLAR
var TOURS=[
  {n:'Kapadokya Balon Turu',cat:'yurtici',img:'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800',dur:'3 Gün 2 Gece',desc:'Balon turu, yeraltı şehirleri, peri bacaları.',f:['Balon turu','5 yıldız otel','Tam pansiyon','Rehberli tur'],price:12900},
  {n:'Antalya Ultra Herşey Dahil',cat:'yurtici',img:'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?w=800',dur:'4 Gün 3 Gece',desc:'Deniz, kum, güneş. Lüks resort tatili.',f:['5 yıldız ultra herşey dahil','Deniz manzaralı','Spa erişimi','Animasyon'],price:8900},
  {n:'Paris Romantik Tur',cat:'yurtdisi',img:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',dur:'5 Gün 4 Gece',desc:'Eyfel, Louvre, Seine nehir turu.',f:['Uçak bileti','4 yıldız otel','Louvre girişi','Seine turu'],price:42000},
  {n:'Dubai Lüks Deneyim',cat:'yurtdisi',img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',dur:'4 Gün 3 Gece',desc:'Burj Khalifa, çöl safarisi, lüks.',f:['Uçak bileti','5 yıldız otel','Çöl safarisi','Burj Khalifa'],price:35000},
  {n:'Bali Egzotik Tatil',cat:'yurtdisi',img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',dur:'8 Gün 7 Gece',desc:'Tapınaklar, pirinç tarlaları, plajlar.',f:['Uçak bileti','Villa konaklama','Spa masajı','Özel şoför'],price:58000},
  {n:'Santorini Balayı Paketi',cat:'ozel',img:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',dur:'5 Gün 4 Gece',desc:'Beyaz evler, mavi kubbeler, gün batımı.',f:['Uçak bileti','Suite otel','Gün batımı turu','Şarap tadımı','Özel fotoğrafçı'],price:48000},
  {n:'Mısır Nil Turu (Grup)',cat:'grup',img:'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800',dur:'6 Gün 5 Gece',desc:'Piramitler, Nil nehri, Luksor.',f:['Uçak bileti','Grup rehberi','Tam pansiyon','Tüm girişler'],price:24000},
  {n:'İtalya Roma-Floransa',cat:'grup',img:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',dur:'6 Gün 5 Gece',desc:'Roma, Vatikan, Floransa, Pisa.',f:['Uçak bileti','4 yıldız otel','Şehir turları','Müze girişleri'],price:45000},
  {n:'Yunan Adaları Özel',cat:'ozel',img:'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800',dur:'7 Gün 6 Gece',desc:'Mykonos, Santorini, Rodos.',f:['Uçak + feribot','Özel rehber','Butik otel','Her şey dahil'],price:68000}
];

// VİZE
var VISA=[
  {flag:'🇪🇺',name:'Schengen Vizesi',time:'15-20 gün',desc:'26 Avrupa ülkesi için geçerli. Randevu, evrak hazırlığı ve başvuru desteği.'},
  {flag:'🇺🇸',name:'ABD Vizesi',time:'Randevu 6-12 ay',desc:'DS-160 formu, mülakat hazırlığı ve tam danışmanlık hizmeti.'},
  {flag:'🇬🇧',name:'İngiltere Vizesi',time:'15 iş günü',desc:'Online başvuru, evrak kontrolü ve biyometrik randevu desteği.'},
  {flag:'🇯🇵',name:'Japonya Vizesi',time:'5-7 iş günü',desc:'Turist vizesi için tüm evrak hazırlığı ve konsolosluk takibi.'},
  {flag:'🇷🇺',name:'Rusya Vizesi',time:'10-15 gün',desc:'Davetiye, sigorta ve konsolosluk başvuru desteği.'},
  {flag:'🇦🇪',name:'Dubai Vizesi',time:'3-4 iş günü',desc:'Hızlı online vize. 30 veya 90 günlük seçenekler.'}
];

// YORUMLAR
var REVIEWS=[
  {n:'Ayşe K.',r:'Öğretmen',s:5,x:'Kapadokya balon turu hayatımın en güzel deneyimiydi! Her şey mükemmel organize edilmişti.'},
  {n:'Mehmet D.',r:'İşadamı',s:5,x:'Paris turu için 5 yıldız veriyorum. Rehberler çok bilgili, oteller harika.'},
  {n:'Zeynep Y.',r:'Doktor',s:5,x:'Vize konusunda çok yardımcı oldular. Schengen vizem 10 günde çıktı!'},
  {n:'Ahmet S.',r:'Mühendis',s:5,x:'Bali çok güzeldi. Yılmaz Bey bizzat ilgilendi, kendisine teşekkürler.'},
  {n:'Elif T.',r:'Avukat',s:5,x:'Balayımız için Santorini tercih ettik, hayal gibi bir hafta geçirdik.'},
  {n:'Murat A.',r:'Mimar',s:5,x:'Dubai turunda her şey dahil paketi aldık, tek kuruş ekstra harcamadık.'}
];

// SSS
var FAQ=[
  {q:'Rezervasyon nasıl yapılır?',a:'WhatsApp, telefon veya sitemizdeki form üzerinden rezervasyon yapabilirsiniz. Kaporayı ödedikten sonra yeriniz kesinleşir.'},
  {q:'İptal koşulları nelerdir?',a:'Turdan 15 gün öncesine kadar %100 iade, 7 gün öncesine kadar %50 iade yapılır.'},
  {q:'Vize işlemleri dahil mi?',a:'Yurt dışı turlarında vize danışmanlığı ücretsizdir. Vize harcı ve konsolosluk ücretleri müşteriye aittir.'},
  {q:'Taksit imkanı var mı?',a:'Evet, tüm kredi kartlarına 12 taksit imkanı sunuyoruz.'},
  {q:'Seyahat sigortası zorunlu mu?',a:'Yurt dışı turlarında zorunludur. Erken rezervasyonlarda bizden ücretsizdir.'},
  {q:'Çocuk indirimi var mı?',a:'0-6 yaş ücretsiz, 7-12 yaş %50 indirimlidir.'},
  {q:'Uçak bileti dahil mi?',a:'Yurt dışı turlarda uçak bileti dahildir. Yurt içi turlarda opsiyoneldir.'},
  {q:'Grup indirimi var mı?',a:'6 kişi ve üzeri gruplara %10 indirim uygulanır.'}
];

// DESTİNASYON RENDER
var dg=$('#destGrid');
if(dg){
  var h='';
  for(var i=0;i<DEST.length;i++){
    var d=DEST[i];
    h+='<div class="dest-card reveal"><div class="dest-card__img" style="background-image:url('+d.img+')">'+(d.badge?'<span class="dest-card__badge">'+d.badge+'</span>':'')+'</div><div class="dest-card__body"><div class="dest-card__name">'+d.n+'</div><div class="dest-card__country">📍 '+d.c+'</div><div class="dest-card__meta"><span class="dest-card__price">₺'+d.price.toLocaleString('tr-TR')+'</span><span class="dest-card__rating">⭐ '+d.r+'</span></div></div></div>';
  }
  dg.innerHTML=h;
}

// TUR RENDER + FİLTRE
function renderTours(cat){
  var tg=$('#tourGrid');
  if(!tg)return;
  var h='';
  for(var j=0;j<TOURS.length;j++){
    var tt=TOURS[j];
    if(cat&&cat!=='all'&&tt.cat!==cat)continue;
    var fl='';
    for(var k=0;k<tt.f.length;k++)fl+='<li>'+tt.f[k]+'</li>';
    var catLabel=tt.cat==='yurtici'?'🇹🇷 Yurt İçi':tt.cat==='yurtdisi'?'✈️ Yurt Dışı':tt.cat==='grup'?'👥 Grup':'🎯 Özel';
    h+='<div class="tour-card reveal"><div class="tour-card__img" style="background-image:url('+tt.img+')"><span class="tour-card__cat">'+catLabel+'</span><span class="tour-card__dur">🗓️ '+tt.dur+'</span></div><div class="tour-card__body"><h3 class="tour-card__title">'+tt.n+'</h3><p class="tour-card__desc">'+tt.desc+'</p><ul class="tour-card__feats">'+fl+'</ul><div class="tour-card__footer"><span class="tour-card__price">₺'+tt.price.toLocaleString('tr-TR')+'<span>/kişi</span></span><button class="btn btn--primary btn--sm tour-book" data-name="'+tt.n+'" data-price="'+tt.price+'">Rezervasyon</button></div></div></div>';
  }
  tg.innerHTML=h;
  // Reveal yeniden
  var els=tg.querySelectorAll('.reveal');
  var ro=window.MT&&window.MT.revealObs;
  if(ro)for(var r=0;r<els.length;r++)ro.observe(els[r]);
  // Rezervasyon butonları
  var btns=tg.querySelectorAll('.tour-book');
  for(var b=0;b<btns.length;b++){
    btns[b].onclick=(function(btn){return function(){
      if(window.MTBooking)window.MTBooking.open(btn.getAttribute('data-name'),parseInt(btn.getAttribute('data-price')));
    }})(btns[b]);
  }
}
renderTours('all');

// FİLTRE BUTONLARI
var fbs=document.querySelectorAll('.filter-btn');
for(var f=0;f<fbs.length;f++){
  fbs[f].onclick=(function(btn){return function(){
    for(var x=0;x<fbs.length;x++)fbs[x].classList.remove('active');
    btn.classList.add('active');
    renderTours(btn.getAttribute('data-cat'));
  }})(fbs[f]);
}

// VİZE RENDER
var vg=$('#visaGrid');
if(vg){
  var hv='';
  for(var v=0;v<VISA.length;v++){
    hv+='<div class="visa-card reveal"><div class="visa-card__flag">'+VISA[v].flag+'</div><div class="visa-card__name">'+VISA[v].name+'</div><div class="visa-card__time">⏱️ '+VISA[v].time+'</div><p>'+VISA[v].desc+'</p></div>';
  }
  vg.innerHTML=hv;
}

// YORUMLAR RENDER
var rg=$('#reviewGrid');
if(rg){
  var hr='';
  for(var r2=0;r2<REVIEWS.length;r2++){
    var rv=REVIEWS[r2],str='';
    for(var s=0;s<rv.s;s++)str+='★';
    hr+='<div class="testi reveal"><div class="testi__stars">'+str+'</div><div class="testi__text">"'+rv.x+'"</div><div class="testi__author"><div class="testi__avatar">'+rv.n.charAt(0)+'</div><div><div class="testi__name">'+rv.n+'</div><div class="testi__role">'+rv.r+'</div></div></div></div>';
  }
  rg.innerHTML=hr;
}

// SSS RENDER
var fl2=$('#faqList');
if(fl2){
  var hf='';
  for(var fa=0;fa<FAQ.length;fa++)hf+='<details class="faq__item"><summary>'+FAQ[fa].q+'</summary><p>'+FAQ[fa].a+'</p></details>';
  fl2.innerHTML=hf;
}

// GALERİ RENDER
var gg=$('#galleryGrid');
if(gg){
  var imgs=['1502602898657-3e91760cbb34','1540959733332-eab4deabeeaf','1512453979798-5ea266f8880c','1537996194471-e657df975ab4','1570077188670-e3a8d69ac5ff','1496442226666-8d4d0e62e6e9','1552832230-c0197dd311b5','1533105079780-92b9be482077'];
  var hg='';
  for(var gi=0;gi<imgs.length;gi++)hg+='<div class="gallery__item" style="background-image:url(https://images.unsplash.com/photo-'+imgs[gi]+'?w=600)"></div>';
  gg.innerHTML=hg;
  var modal=document.getElementById('modal'),mb=document.getElementById('modalBody');
  if(modal&&mb){
    var items=gg.querySelectorAll('.gallery__item');
    for(var mi=0;mi<items.length;mi++){
      items[mi].onclick=(function(el){return function(){
        var bg=el.style.backgroundImage;
        var url=bg.replace(/^url\(/,'').replace(/\)$/,'').replace(/["']/g,'');
        mb.innerHTML='<img src="'+url+'" style="width:100%;border-radius:12px">';
        modal.classList.add('active');
      }})(items[mi]);
    }
  }
}

// Reveal uygula
setTimeout(function(){
  var els=document.querySelectorAll('.reveal');
  var ob=window.MT&&window.MT.revealObs;
  if(ob){for(var e=0;e<els.length;e++)ob.observe(els[e])}
  else{for(var e2=0;e2<els.length;e2++)els[e2].classList.add('visible')}
},100);

console.log('✅ İçerik yüklendi');
})();
