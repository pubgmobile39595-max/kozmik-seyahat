(function(){
var $=function(s){return document.querySelector(s)};

// ARAÇLAR
var e=$('#fleetGrid');
if(e)e.innerHTML='<div class="fleet-card"><div class="fleet-card__icon">🚀</div><h3>Falcon X</h3><p>6 yolcu kapasiteli yeniden kullanılabilir araç.</p></div><div class="fleet-card"><div class="fleet-card__icon">🛰️</div><h3>Orion Capsule</h3><p>Derin uzay görevleri için tasarlandı.</p></div><div class="fleet-card"><div class="fleet-card__icon">✈️</div><h3>Starship Mini</h3><p>Yörünge üstü hızlı seyahat aracı.</p></div>';

// EKİP
var e2=$('#crewGrid');
if(e2)e2.innerHTML='<div class="crew-card"><div class="crew-card__img" style="background-image:url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400)"><span class="crew-card__badge">⭐ UZMAN</span></div><div class="crew-card__body"><div class="crew-card__name">Ayşe Yıldız</div><div class="crew-card__role">Baş Pilot</div></div></div><div class="crew-card"><div class="crew-card__img" style="background-image:url(https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400)"><span class="crew-card__badge">⭐ UZMAN</span></div><div class="crew-card__body"><div class="crew-card__name">Mehmet Demir</div><div class="crew-card__role">Uçuş Doktoru</div></div></div><div class="crew-card"><div class="crew-card__img" style="background-image:url(https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400)"><span class="crew-card__badge">⭐ UZMAN</span></div><div class="crew-card__body"><div class="crew-card__name">Zeynep Kaya</div><div class="crew-card__role">Sistem Mühendisi</div></div></div><div class="crew-card"><div class="crew-card__img" style="background-image:url(https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400)"><span class="crew-card__badge">⭐ UZMAN</span></div><div class="crew-card__body"><div class="crew-card__name">Can Öztürk</div><div class="crew-card__role">Yedek Pilot</div></div></div>';

// TARİHÇE
var e3=$('#timelineList');
if(e3)e3.innerHTML='<div class="timeline-item"><div class="timeline-year">2020</div><div class="timeline-title">Kuruluş</div><div class="timeline-text">3 mühendis tarafından kuruldu.</div></div><div class="timeline-item"><div class="timeline-year">2022</div><div class="timeline-title">İlk Test Uçuşu</div><div class="timeline-text">400 km yükseklikte test.</div></div><div class="timeline-item"><div class="timeline-year">2024</div><div class="timeline-title">İlk Ticari Uçuş</div><div class="timeline-text">İlk turist grubu 6 saat yörüngede.</div></div><div class="timeline-item"><div class="timeline-year">2025</div><div class="timeline-title">Ay Yörüngesi</div><div class="timeline-text">İnsanlı araç Ay yörüngesine ulaştı.</div></div><div class="timeline-item"><div class="timeline-year">2026</div><div class="timeline-title">Mars Hazırlığı</div><div class="timeline-text">Mars geçişi hazırlıkları başladı.</div></div><div class="timeline-item"><div class="timeline-year">2027</div><div class="timeline-title">Yeni Dönem</div><div class="timeline-text">Düzenli ticari uçuşlar.</div></div>';

// GALERİ
var e4=$('#galleryGrid');
if(e4){
  var g='';
  for(var i=1;i<=8;i++)g+='<div class="gallery__item" style="background-image:url(https://picsum.photos/400?random='+(i+200)+')"></div>';
  e4.innerHTML=g;
}

// YORUMLAR
var e5=$('#testimonialsGrid');
if(e5)e5.innerHTML='<div class="testi"><div class="testi__stars">★★★★★</div><div class="testi__text">Hayatımın en unutulmaz 3 günü!</div><div class="testi__author"><div class="testi__avatar">A</div><div><div class="testi__name">Ali V.</div><div class="testi__role">İşadamı</div></div></div></div><div class="testi"><div class="testi__stars">★★★★★</div><div class="testi__text">Ekip son derece profesyonel.</div><div class="testi__author"><div class="testi__avatar">F</div><div><div class="testi__name">Fatma K.</div><div class="testi__role">Doktor</div></div></div></div><div class="testi"><div class="testi__stars">★★★★</div><div class="testi__text">Muhteşem deneyim.</div><div class="testi__author"><div class="testi__avatar">H</div><div><div class="testi__name">Hasan Y.</div><div class="testi__role">Mühendis</div></div></div></div><div class="testi"><div class="testi__stars">★★★★★</div><div class="testi__text">Sıfır yerçekimi inanılmazdı!</div><div class="testi__author"><div class="testi__avatar">E</div><div><div class="testi__name">Elif D.</div><div class="testi__role">Sanatçı</div></div></div></div><div class="testi"><div class="testi__stars">★★★★★</div><div class="testi__text">Her kuruşuna değer.</div><div class="testi__author"><div class="testi__avatar">M</div><div><div class="testi__name">Murat A.</div><div class="testi__role">Öğretmen</div></div></div></div><div class="testi"><div class="testi__stars">★★★★</div><div class="testi__text">Kabin konforu çok iyi.</div><div class="testi__author"><div class="testi__avatar">S</div><div><div class="testi__name">Seda T.</div><div class="testi__role">Tasarımcı</div></div></div></div>';

// HABERLER
var e6=$('#newsGrid');
if(e6)e6.innerHTML='<div class="news-card"><div class="news-card__thumb" style="background-image:url(https://picsum.photos/400?random=301)"></div><div class="news-card__body"><div class="news-card__date">15 Mart 2027</div><h3>Falcon X test edildi</h3><p>Yeni aracımız 3 saatlik test uçuşunu tamamladı.</p></div></div><div class="news-card"><div class="news-card__thumb" style="background-image:url(https://picsum.photos/400?random=302)"></div><div class="news-card__body"><div class="news-card__date">8 Mart 2027</div><h3>İlk Türk uzay turisti</h3><p>Eğitim kampını tamamladı.</p></div></div><div class="news-card"><div class="news-card__thumb" style="background-image:url(https://picsum.photos/400?random=303)"></div><div class="news-card__body"><div class="news-card__date">1 Mart 2027</div><h3>Mars rotası onaylandı</h3><p>Uluslararası onay geldi.</p></div></div>';

// FİYATLAR
var e7=$('#pricingGrid');
if(e7)e7.innerHTML='<div class="price-card"><div class="price-card__icon">🎫</div><h3>Standart</h3><div class="price-card__price">₺1.500.000<span>/kişi</span></div><ul class="price-card__features"><li>✅ 3 gün yörünge</li><li>✅ Standart kabin</li><li>✅ Temel eğitim</li><li>✅ Sertifika</li></ul><button class="btn btn--ghost" onclick="alert(\'Standart seçildi\')">Seç</button></div><div class="price-card price-card--featured"><div class="price-card__badge">⭐ EN POPÜLER</div><div class="price-card__icon">💎</div><h3>Premium</h3><div class="price-card__price">₺2.500.000<span>/kişi</span></div><ul class="price-card__features"><li>✅ 5 gün yörünge</li><li>✅ VIP kabin</li><li>✅ Tam eğitim</li><li>✅ Fotoğraf</li><li>✅ Uzay yemeği</li></ul><button class="btn btn--primary" onclick="alert(\'Premium seçildi\')">Seç</button></div><div class="price-card"><div class="price-card__icon">👑</div><h3>VIP Ultra</h3><div class="price-card__price">₺6.500.000<span>/kişi</span></div><ul class="price-card__features"><li>✅ Ay yörüngesi</li><li>✅ Süit kabin</li><li>✅ Özel eğitim</li><li>✅ Video kaydı</li><li>✅ Astronot buluşması</li></ul><button class="btn btn--ghost" onclick="alert(\'VIP seçildi\')">Seç</button></div>';

// SERTİFİKALAR
var e8=$('#certsGrid');
if(e8)e8.innerHTML='<div class="cert-card"><div class="cert-card__icon">🏆</div><h4>ISO 9001</h4><p>Kalite yönetimi</p></div><div class="cert-card"><div class="cert-card__icon">🛡️</div><h4>NASA Uyumlu</h4><p>Güvenlik standartları</p></div><div class="cert-card"><div class="cert-card__icon">🌍</div><h4>UNOOSA</h4><p>BM Uzay Ofisi</p></div><div class="cert-card"><div class="cert-card__icon">✈️</div><h4>FAA Onaylı</h4><p>ABD Havacılık</p></div>';

// SSS
var e9=$('#faqList');
if(e9)e9.innerHTML='<details class="faq__item"><summary>Sağlık şartları neler?</summary><p>18-65 yaş arası, kalp ve tansiyon rahatsızlığı olmayan herkes başvurabilir.</p></details><details class="faq__item"><summary>Eğitim ne kadar sürüyor?</summary><p>Standart 3 gün, Premium 7 gün, VIP 14 gün.</p></details><details class="faq__item"><summary>İptal koşulları nedir?</summary><p>Uçuştan 30 gün öncesine kadar tam iade.</p></details><details class="faq__item"><summary>Uzayda ne kadar kalıyoruz?</summary><p>Rota ve pakete göre 6 saat ile 2 yıl.</p></details><details class="faq__item"><summary>Ailem de gelebilir mi?</summary><p>Evet, 6 kişiye kadar aynı uçuşta.</p></details><details class="faq__item"><summary>Sigorta dahil mi?</summary><p>5 milyon dolar uzay sigortası dahil.</p></details>';

// QUIZ
var e10=$('#quizBox');
if(e10)e10.innerHTML='<div class="quiz__question">Dünya ile Ay arası mesafe kaç km?</div><div class="quiz__options"><button class="quiz__option" onclick="alert(\'✅ Doğru!\')">384.400 km</button><button class="quiz__option" onclick="alert(\'❌ Yanlış\')">150.000 km</button><button class="quiz__option" onclick="alert(\'❌ Yanlış\')">1.2 milyon km</button></div>';

// HESAPLAYICI
var cb=$('#calcBtn');
if(cb)cb.onclick=function(){
  var p=parseInt($('#calcPeople').value)||1;
  var r=parseInt($('#calcRoute').value)||0;
  var room=parseInt($('#calcRoom').value)||0;
  var extra=0;
  var cks=document.querySelectorAll('.calc__extras input:checked');
  for(var k=0;k<cks.length;k++)extra+=parseInt(cks[k].getAttribute('data-price'))||0;
  var total=(r+room+extra)*p;
  if($('#calcPrice'))$('#calcPrice').textContent='₺'+total.toLocaleString('tr-TR');
  if($('#calcExtra'))$('#calcExtra').textContent='Kişi başı: ₺'+Math.round(total/p).toLocaleString('tr-TR');
};
if(cb)cb.click();

// CHAT
var fc=$('#fabChat'),cbox=$('#chat'),cc=$('#chatClose'),ci=$('#chatInput'),cs=$('#chatSend'),cbd=$('#chatBody');
if(fc&&cbox){
  fc.onclick=function(){cbox.classList.toggle('open');if(cbox.classList.contains('open'))ci.focus()};
  if(cc)cc.onclick=function(){cbox.classList.remove('open')};
  var replies=['Uzay turizmi 2027\'de başlıyor!','Fiyatlar 1.5M TL\'den başlıyor.','Eğitim 3-14 gün sürer.','Rezervasyon için formu doldurun.'];
  function addMsg(t,u){var m=document.createElement('div');m.className='chat__msg chat__msg--'+(u?'user':'bot');m.textContent=t;cbd.appendChild(m);cbd.scrollTop=cbd.scrollHeight;}
  function send(){var v=ci.value.trim();if(!v)return;addMsg(v,true);ci.value='';setTimeout(function(){addMsg(replies[Math.floor(Math.random()*replies.length)],false)},600);}
  if(cs)cs.onclick=send;
  if(ci)ci.onkeypress=function(e){if(e.key==='Enter')send()};
}

// REZERVASYON MODAL
var modal=$('#modal'),mc=$('#modalClose'),mb=$('#modalBody');
if(mc)mc.onclick=function(){modal.classList.remove('active')};
if(modal)modal.onclick=function(e){if(e.target===modal)modal.classList.remove('active')};
function openRes(){
  if(!modal||!mb)return;
  mb.innerHTML='<h3 style="font-size:1.4rem;margin-bottom:16px">🎟️ Rezervasyon</h3><form style="display:flex;flex-direction:column;gap:14px" onsubmit="event.preventDefault();alert(\'✅ Rezervasyon alındı!\');document.getElementById(\'modal\').classList.remove(\'active\')"><input placeholder="Ad Soyad" required style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text)"><input placeholder="E-posta" type="email" required style="padding:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;color:var(--text)"><button type="submit" style="padding:16px;background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;border:0;border-radius:12px;font-weight:600;cursor:pointer">🚀 Tamamla</button></form>';
  modal.classList.add('active');
}
['bookBtn','heroBook','ctaBook','calcBook','routeBook'].forEach(function(id){
  var b=document.getElementById(id);
  if(b)b.onclick=openRes;
});

// PAYLAŞ
var sb=$('#shareBtn');
if(sb)sb.onclick=function(){
  if(navigator.share)navigator.share({title:'Kozmik Seyahat',url:location.href});
  else navigator.clipboard.writeText(location.href);
};

// NEWSLETTER
var nf=$('#newsletterForm');
if(nf)nf.onsubmit=function(e){e.preventDefault();alert('✅ Abone oldunuz!');nf.reset()};

// YUKARI
var ft=$('#fabTop');
if(ft)ft.onclick=function(){window.scrollTo({top:0,behavior:'smooth'})};

// FAVORİ
var ff=$('#fabFav');
if(ff)ff.onclick=function(){ff.classList.toggle('active')};

// GALLERY CLICK
document.addEventListener('click',function(e){
  var it=e.target.closest('.gallery__item');
  if(!it||!modal||!mb)return;
  var bg=it.style.backgroundImage;
  if(!bg)return;
  var url=bg.replace(/^url\(/,'').replace(/\)$/,'').replace(/["']/g,'');
  mb.innerHTML='<img src="'+url+'" style="width:100%;border-radius:12px">';
  modal.classList.add('active');
});

alert('✅ Tüm özellikler yüklendi!');
})();
