(function(){
var $=function(s){return document.querySelector(s)};
var $$=function(s){return document.querySelectorAll(s)};
var t=window.DT?window.DT.toast:function(m){alert(m)};

// VERİLER
var DEST=[
  {n:'Kapadokya',c:'Türkiye',img:'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=600',price:15900,dur:'3 Gün',r:4.9,badge:'⭐ POPÜLER'},
  {n:'Paris',c:'Fransa',img:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600',price:45000,dur:'5 Gün',r:4.8,badge:''},
  {n:'Tokyo',c:'Japonya',img:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600',price:78000,dur:'7 Gün',r:4.9,badge:'🔥 YENİ'},
  {n:'Dubai',c:'BAE',img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600',price:38000,dur:'4 Gün',r:4.7,badge:''},
  {n:'Roma',c:'İtalya',img:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600',price:42000,dur:'5 Gün',r:4.8,badge:''},
  {n:'Bali',c:'Endonezya',img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600',price:62000,dur:'8 Gün',r:4.9,badge:'🌴 EGZOTİK'},
  {n:'New York',c:'ABD',img:'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600',price:89000,dur:'6 Gün',r:4.7,badge:''},
  {n:'Santorini',c:'Yunanistan',img:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600',price:52000,dur:'5 Gün',r:4.9,badge:'💙 ROMANTİK'}
];

var TOURS=[
  {n:'Kapadokya Balon Turu',img:'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600',dur:'3 Gün 2 Gece',desc:'Balon turu, yeraltı şehirleri, güvercinlik vadisi.',f:['Balon turu','5 yıldız otel','Kahvaltı + akşam yemeği','Rehberli tur'],price:15900},
  {n:'Paris Romantik Hafta Sonu',img:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600',dur:'4 Gün 3 Gece',desc:'Eyfel Kulesi, Louvre Müzesi, Seine nehir turu.',f:['Uçak bileti dahil','4 yıldız otel','Louvre girişi','Seine turu'],price:45000},
  {n:'Tokyo Kültür Turu',img:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600',dur:'7 Gün 6 Gece',desc:'Shibuya, Fuji Dağı, geleneksel çay evi.',f:['Uçak bileti','5 yıldız otel','JR Pass','Fuji turu'],price:78000},
  {n:'Dubai Lüks Deneyim',img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600',dur:'4 Gün 3 Gece',desc:'Burj Khalifa, çöl safarisi, Dubai Mall.',f:['Uçak bileti','5 yıldız otel','Çöl safarisi','Burj Khalifa'],price:38000},
  {n:'Bali Egzotik Tatil',img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600',dur:'8 Gün 7 Gece',desc:'Tapınaklar, pirinç tarlaları, plajlar.',f:['Uçak bileti','Villa konaklama','Spa masajı','Özel şoför'],price:62000},
  {n:'Santorini Balayı',img:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600',dur:'5 Gün 4 Gece',desc:'Beyaz evler, mavi kubbeler, gün batımı.',f:['Uçak bileti','Suite otel','Gün batımı turu','Şarap tadımı'],price:52000}
];

var PKG=[
  {icon:'🎒',n:'Ekonomik',pr:15000,f:['3 gün yurt içi','3 yıldız otel','Kahvaltı dahil','Grup turu'],ft:false},
  {icon:'✈️',n:'Standart',pr:35000,f:['5 gün yurt dışı','4 yıldız otel','Yarım pansiyon','Rehberli tur','Transfer dahil'],ft:false},
  {icon:'💎',n:'Premium',pr:75000,f:['7 gün yurt dışı','5 yıldız otel','Tam pansiyon','VIP transfer','Fotoğrafçı','Seyahat sigortası'],ft:true},
  {icon:'👑',n:'Lüks VIP',pr:150000,f:['10 gün lüks tur','Lüks resort','Her şey dahil','Özel rehber','Business uçuş','Spa + masaj','Helikopter turu'],ft:false}
];

var REVIEWS=[
  {n:'Ayşe K.',r:'Öğretmen',s:5,x:'Kapadokya balon turu hayatımın en güzel deneyimiydi! Her şey mükemmel organize edilmişti.'},
  {n:'Mehmet D.',r:'İşadamı',s:5,x:'Tokyo turu için 5 yıldız veriyorum. Rehberler çok bilgili, oteller harika.'},
  {n:'Zeynep Y.',r:'Doktor',s:5,x:'Paris tatilini Dünya Turu ile yaptık, fiyatlar çok uygun ve hizmet kaliteli.'},
  {n:'Ahmet S.',r:'Mühendis',s:4,x:'Bali çok güzeldi ama uçuş biraz uzundu. Yine de tavsiye ederim.'},
  {n:'Elif T.',r:'Avukat',s:5,x:'Balayımız için Santorini tercih ettik, hayal gibi bir hafta geçirdik.'},
  {n:'Murat A.',r:'Mimar',s:5,x:'Dubai turunda her şey dahil paketi aldık, tek kuruş ekstra harcamadık.'}
];

var FAQ=[
  {q:'Rezervasyon nasıl yapılır?',a:'Sitemizde "Rezervasyon" butonuna tıklayarak form doldurabilirsiniz. Ödeme sonrası bilet e-postanıza gelir.'},
  {q:'İptal koşulları nelerdir?',a:'Turdan 15 gün öncesine kadar %100 iade, 7 gün öncesine kadar %50 iade yapılır.'},
  {q:'Vize işlemleri dahil mi?',a:'Yurt dışı turlarında vize danışmanlığı ücretsizdir. Vize harcı müşteriye aittir.'},
  {q:'Taksit imkanı var mı?',a:'Evet, tüm kredi kartlarına 12 taksit imkanı sunuyoruz.'},
  {q:'Seyahat sigortası zorunlu mu?',a:'Yurt dışı turlarında zorunludur. Premium ve Lüks paketlerde ücretsizdir.'},
  {q:'Çocuk indirimi var mı?',a:'0-6 yaş ücretsiz, 7-12 yaş %50 indirimlidir.'},
  {q:'Uçak bileti dahil mi?',a:'Standart ve üzeri paketlerde uçak bileti dahildir.'},
  {q:'Grup indirimi var mı?',a:'6 kişi ve üzeri gruplara %10 indirim uygulanır.'}
];

// RENDER
var dg=$('#destGrid');
if(dg){
  var h='';
  for(var i=0;i<DEST.length;i++){
    var d=DEST[i];
    h+='<div class="dest-card reveal"><div class="dest-card__img" style="background-image:url('+d.img+')">'+(d.badge?'<span class="dest-card__badge">'+d.badge+'</span>':'')+'</div><div class="dest-card__body"><div class="dest-card__name">'+d.n+'</div><div class="dest-card__country">📍 '+d.c+'</div><div class="dest-card__meta"><span class="dest-card__price">₺'+d.price.toLocaleString('tr-TR')+'</span><span class="dest-card__rating">⭐ '+d.r+'</span></div></div></div>';
  }
  dg.innerHTML=h;
}

var tg=$('#tourGrid');
if(tg){
  var h2='';
  for(var j=0;j<TOURS.length;j++){
    var tt=TOURS[j],fl='';
    for(var k=0;k<tt.f.length;k++)fl+='<li>'+tt.f[k]+'</li>';
    h2+='<div class="tour-card reveal"><div class="tour-card__img" style="background-image:url('+tt.img+')"><span class="tour-card__duration">🗓️ '+tt.dur+'</span></div><div class="tour-card__body"><h3 class="tour-card__title">'+tt.n+'</h3><p class="tour-card__desc">'+tt.desc+'</p><ul class="tour-card__features">'+fl+'</ul><div class="tour-card__footer"><span class="tour-card__price">₺'+tt.price.toLocaleString('tr-TR')+'<span>/kişi</span></span><button class="btn btn--primary btn--sm" onclick="window.DT.toast(\'✅ '+tt.n+' rezervasyon başlatıldı\')">Rezervasyon</button></div></div></div>';
  }
  tg.innerHTML=h2;
}

var pg=$('#packageGrid');
if(pg){
  var h3='';
  for(var p=0;p<PKG.length;p++){
    var kk=PKG[p],ft=kk.ft?' price-card--featured':'',bd=kk.ft?'<div class="price-card__badge">⭐ EN POPÜLER</div>':'',cls=kk.ft?'btn--primary':'btn--ghost',fl2='';
    for(var q=0;q<kk.f.length;q++)fl2+='<li>✅ '+kk.f[q]+'</li>';
    h3+='<div class="price-card'+ft+' reveal">'+bd+'<div class="price-card__icon">'+kk.icon+'</div><h3>'+kk.n+'</h3><div class="price-card__price">₺'+kk.pr.toLocaleString('tr-TR')+'<span>/kişi</span></div><ul class="price-card__features">'+fl2+'</ul><button class="btn '+cls+'" onclick="window.DT.toast(\'🛒 '+kk.n+' paketi seçildi\')">Paketi Seç</button></div>';
  }
  pg.innerHTML=h3;
}

var rg=$('#reviewGrid');
if(rg){
  var h4='';
  for(var r=0;r<REVIEWS.length;r++){
    var rv=REVIEWS[r],str='';
    for(var s=0;s<rv.s;s++)str+='★';
    h4+='<div class="testi reveal"><div class="testi__stars">'+str+'</div><div class="testi__text">"'+rv.x+'"</div><div class="testi__author"><div class="testi__avatar">'+rv.n.charAt(0)+'</div><div><div class="testi__name">'+rv.n+'</div><div class="testi__role">'+rv.r+'</div></div></div></div>';
  }
  rg.innerHTML=h4;
}

var fl=$('#faqList');
if(fl){
  var h5='';
  for(var f=0;f<FAQ.length;f++)h5+='<details class="faq__item"><summary>'+FAQ[f].q+'</summary><p>'+FAQ[f].a+'</p></details>';
  fl.innerHTML=h5;
}

var gg=$('#galleryGrid');
if(gg){
  var imgs=['1502602898657-3e91760cbb34','1540959733332-eab4deabeeaf','1512453979798-5ea266f8880c','1537996194471-e657df975ab4','1570077188670-e3a8d69ac5ff','1496442226666-8d4d0e62e6e9','1552832230-c0197dd311b5','1533105079780-92b9be482077'];
  var h6='';
  for(var g=0;g<imgs.length;g++)h6+='<div class="gallery__item" style="background-image:url(https://images.unsplash.com/photo-'+imgs[g]+'?w=600)"></div>';
  gg.innerHTML=h6;
  // Lightbox
  var modal=document.getElementById('modal'),mb=document.getElementById('modalBody');
  if(modal&&mb){
    var items=gg.querySelectorAll('.gallery__item');
    for(var m=0;m<items.length;m++){
      items[m].onclick=(function(el){return function(){
        var bg=el.style.backgroundImage;
        var url=bg.replace(/^url\(/,'').replace(/\)$/,'').replace(/["']/g,'');
        mb.innerHTML='<img src="'+url+'" style="width:100%;border-radius:12px"><p style="text-align:center;margin-top:12px;color:var(--text-dim);font-size:.85rem">Dünya Turu · Gezi Fotoğrafı</p>';
        modal.classList.add('active');
      }})(items[m]);
    }
  }
}

// Reveal uygula
setTimeout(function(){
  var els=document.querySelectorAll('.reveal');
  var ob=window.DT&&window.DT.revealObs;
  if(ob){for(var x=0;x<els.length;x++)ob.observe(els[x])}
  else{for(var y=0;y<els.length;y++)els[y].classList.add('visible')}
},100);

console.log('✅ İçerik yüklendi');
})();
