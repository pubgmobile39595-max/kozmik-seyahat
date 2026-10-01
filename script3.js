(function(){
var $=function(s){return document.querySelector(s)};
var $$=function(s){return document.querySelectorAll(s)};
var t=window.MT?window.MT.toast:function(m){alert(m)};
var RATE={USD:0.029,EUR:0.027,RUB:2.65};

// HESAPLAYICI
var destData=[
  {n:'Kapadokya, Türkiye',base:3000},
  {n:'Antalya, Türkiye',base:2200},
  {n:'Paris, Fransa',base:8000},
  {n:'Dubai, BAE',base:6500},
  {n:'Roma, İtalya',base:7200},
  {n:'Bali, Endonezya',base:6800},
  {n:'Mısır',base:4000},
  {n:'Santorini, Yunanistan',base:9000}
];
var cd=$('#calcDest');
if(cd){
  var h='';
  for(var i=0;i<destData.length;i++)h+='<option value="'+destData[i].base+'">'+destData[i].n+' · ₺'+destData[i].base.toLocaleString('tr-TR')+'/gün</option>';
  cd.innerHTML=h;
}
var cb=$('#calcBtn');
if(cb)cb.onclick=function(){
  var base=parseInt($('#calcDest').value)||3000;
  var p=parseInt($('#calcPeople').value)||1;
  var d=parseInt($('#calcDays').value)||1;
  var hotel=parseInt($('#calcHotel').value)||0;
  var extra=0;
  var cks=$$('.calc__extras input:checked');
  for(var i=0;i<cks.length;i++)extra+=parseInt(cks[i].getAttribute('data-price'))||0;
  var total=(base*d+hotel*d)*p+extra*p;
  var per=Math.round(total/p);
  if($('#calcPrice'))$('#calcPrice').textContent='₺'+total.toLocaleString('tr-TR');
  if($('#calcExtra'))$('#calcExtra').textContent='Kişi başı: ₺'+per.toLocaleString('tr-TR');
  if($('#calcCurrency'))$('#calcCurrency').textContent='≈ $'+Math.round(total*RATE.USD).toLocaleString('tr-TR')+' · €'+Math.round(total*RATE.EUR).toLocaleString('tr-TR');
};
if(cb)cb.click();

// MODAL
var modal=$('#modal'),mb=$('#modalBody'),mc=$('#modalClose');
if(mc)mc.onclick=function(){modal.classList.remove('active')};
if(modal)modal.onclick=function(e){if(e.target===modal)modal.classList.remove('active')};

// REZERVASYON
function openBooking(plan,price){
  if(!modal||!mb)return;
  mb.innerHTML='<div style="text-align:center;margin-bottom:20px"><div style="font-size:3rem">🌴</div><h3 style="font-size:1.4rem;margin:8px 0 6px;font-family:var(--serif)">Rezervasyon</h3><p style="color:var(--text-dim);font-size:.9rem">'+plan+' · <strong style="color:var(--text)">₺'+price.toLocaleString('tr-TR')+'</strong></p></div><form id="bookForm" style="display:flex;flex-direction:column;gap:14px"><input placeholder="Ad Soyad" required style="padding:14px;background:var(--bg);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit;font-size:.95rem"><input type="email" placeholder="E-posta" required style="padding:14px;background:var(--bg);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit;font-size:.95rem"><input type="tel" placeholder="Telefon" required style="padding:14px;background:var(--bg);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit;font-size:.95rem"><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><label style="display:flex;flex-direction:column;gap:6px;font-size:.8rem;color:var(--text-dim)">Gidiş<input type="date" required style="padding:12px;background:var(--bg);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit;font-size:.9rem"></label><label style="display:flex;flex-direction:column;gap:6px;font-size:.8rem;color:var(--text-dim)">Dönüş<input type="date" required style="padding:12px;background:var(--bg);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit;font-size:.9rem"></label></div><label style="display:flex;flex-direction:column;gap:6px;font-size:.8rem;color:var(--text-dim)">Kişi Sayısı<select style="padding:12px;background:var(--bg);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit;font-size:.9rem"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6+</option></select></label><button type="submit" style="padding:16px;background:var(--grad);color:#fff;border:0;border-radius:12px;font-weight:600;cursor:pointer;font-size:1rem">✅ Rezervasyonu Onayla</button></form>';
  modal.classList.add('active');
  var f=$('#bookForm');
  if(f)f.onsubmit=function(e){
    e.preventDefault();
    mb.innerHTML='<div style="text-align:center;padding:20px"><div style="font-size:4rem;margin-bottom:14px">✅</div><h3 style="font-size:1.5rem;margin-bottom:10px;color:var(--primary)">Rezervasyon Alındı!</h3><p style="color:var(--text-dim);font-size:.9rem;margin-bottom:20px">'+plan+' için rezervasyonunuz oluşturuldu. Ekibimiz en kısa sürede sizinle iletişime geçecek.</p><div style="padding:16px;background:rgba(8,145,178,.08);border:1px solid var(--primary);border-radius:12px;font-family:monospace;font-size:.85rem;margin-bottom:20px">Rezervasyon No:<br><strong style="font-size:1.1rem;color:var(--primary)">MT-'+Date.now().toString().slice(-8)+'</strong></div><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><a href="https://wa.me/905550000000" target="_blank" style="padding:12px 24px;background:#25D366;color:#fff;border-radius:12px;font-weight:600;text-decoration:none">💬 WhatsApp</a><button type="button" onclick="document.getElementById(\'modal\').classList.remove(\'active\')" style="padding:12px 24px;background:var(--grad);color:#fff;border:0;border-radius:12px;font-weight:600;cursor:pointer">Tamam</button></div></div>';
  };
}
window.MTBooking={open:openBooking};

// GENEL BUTONLAR
var genBtns=['calcBook'];
for(var i=0;i<genBtns.length;i++){
  var b=document.getElementById(genBtns[i]);
  if(b)b.onclick=function(){openBooking('Özel Tur Paketi',35000)};
}

// FOOTER MODAL
function showModal(html){if(modal&&mb){mb.innerHTML=html;modal.classList.add('active')}}

var cl=$('#careerLink');
if(cl)cl.onclick=function(e){e.preventDefault();
  showModal('<h3 style="font-size:1.5rem;margin-bottom:16px;font-family:var(--serif)">💼 Kariyer</h3><p style="color:var(--text-dim);font-size:.9rem;margin-bottom:18px">MeloniTour ailesine katılın!</p><div style="display:flex;flex-direction:column;gap:10px"><div style="padding:14px;background:var(--bg);border:1px solid var(--border);border-radius:12px"><strong style="font-size:.92rem">👨‍💼 Tur Operatörü</strong><br><span style="color:var(--text-dim);font-size:.8rem">İstanbul · Tam zamanlı</span></div><div style="padding:14px;background:var(--bg);border:1px solid var(--border);border-radius:12px"><strong style="font-size:.92rem">📞 Rezervasyon Uzmanı</strong><br><span style="color:var(--text-dim);font-size:.8rem">İstanbul · Tam zamanlı</span></div><div style="padding:14px;background:var(--bg);border:1px solid var(--border);border-radius:12px"><strong style="font-size:.92rem">🌐 Pazarlama Müdürü</strong><br><span style="color:var(--text-dim);font-size:.8rem">İstanbul · Hibrit</span></div></div><p style="text-align:center;margin-top:18px;font-size:.85rem;color:var(--text-dim)">Başvuru: <strong style="color:var(--primary)">kariyer@melonitour.com</strong></p>');
};

var pl=$('#pressLink');
if(pl)pl.onclick=function(e){e.preventDefault();
  showModal('<h3 style="font-size:1.5rem;margin-bottom:16px;font-family:var(--serif)">📰 Basın Kiti</h3><p style="color:var(--text-dim);font-size:.9rem;margin-bottom:18px">Medya için tüm materyaller</p><div style="display:flex;flex-direction:column;gap:10px"><button onclick="alert(\'📥 Logo paketi indiriliyor...\')" style="padding:14px;background:var(--bg);border:1px solid var(--border);border-radius:12px;text-align:left;color:var(--text);cursor:pointer;font-family:inherit;font-size:.9rem">🎨 Logo Paketi (PNG/SVG)</button><button onclick="alert(\'📥 Basın bülteni indiriliyor...\')" style="padding:14px;background:var(--bg);border:1px solid var(--border);border-radius:12px;text-align:left;color:var(--text);cursor:pointer;font-family:inherit;font-size:.9rem">📄 Basın Bülteni (PDF)</button><button onclick="alert(\'📥 Fotoğraf arşivi indiriliyor...\')" style="padding:14px;background:var(--bg);border:1px solid var(--border);border-radius:12px;text-align:left;color:var(--text);cursor:pointer;font-family:inherit;font-size:.9rem">📸 Fotoğraf Arşivi</button></div>');
};

var kv=$('#kvkkLink');
if(kv)kv.onclick=function(e){e.preventDefault();
  showModal('<h3 style="font-size:1.4rem;margin-bottom:14px;font-family:var(--serif)">🔒 KVKK Aydınlatma Metni</h3><div style="font-size:.88rem;line-height:1.7;color:var(--text-dim);max-height:400px;overflow-y:auto"><p style="margin-bottom:12px"><strong style="color:var(--text)">1. Veri Sorumlusu:</strong> MeloniTour Seyahat Acentesi</p><p style="margin-bottom:12px"><strong style="color:var(--text)">2. İşlenen Veriler:</strong> Ad, soyad, T.C. kimlik no, pasaport no, iletişim bilgileri, ödeme bilgileri.</p><p style="margin-bottom:12px"><strong style="color:var(--text)">3. İşleme Amacı:</strong> Tur rezervasyonu, vize başvurusu, biletleme, sigorta işlemleri.</p><p style="margin-bottom:12px"><strong style="color:var(--text)">4. Aktarım:</strong> Otel, havayolu, konsolosluk gibi zorunlu iş ortaklarıyla.</p><p style="margin-bottom:12px"><strong style="color:var(--text)">5. Haklarınız:</strong> 6698 sayılı KVKK kapsamında erişim, düzeltme, silme haklarına sahipsiniz.</p><p><strong style="color:var(--text)">İletişim:</strong> kvkk@melonitour.com</p></div>');
};

var pv=$('#privacyLink');
if(pv)pv.onclick=function(e){e.preventDefault();
  showModal('<h3 style="font-size:1.4rem;margin-bottom:14px;font-family:var(--serif)">🔒 Gizlilik Politikası</h3><div style="font-size:.88rem;line-height:1.7;color:var(--text-dim);max-height:400px;overflow-y:auto"><p style="margin-bottom:12px">Bu sitede toplanan kişisel veriler yalnızca tur ve seyahat hizmetlerinin sağlanması amacıyla kullanılır.</p><p style="margin-bottom:12px">Kredi kartı bilgileri PCI-DSS uyumlu altyapıda şifrelenir, sunucularımızda saklanmaz.</p><p style="margin-bottom:12px">Üçüncü şahıslarla veri paylaşımı yalnızca yasal zorunluluk halinde ve sizin onayınızla yapılır.</p><p><strong style="color:var(--text)">TÜRSAB A-1234</strong> kaydı ile hizmet veriyoruz.</p></div>');
};

var tr=$('#termsLink');
if(tr)tr.onclick=function(e){e.preventDefault();
  showModal('<h3 style="font-size:1.4rem;margin-bottom:14px;font-family:var(--serif)">📄 Mesafeli Satış Sözleşmesi</h3><div style="font-size:.88rem;line-height:1.7;color:var(--text-dim);max-height:400px;overflow-y:auto"><p style="margin-bottom:12px"><strong style="color:var(--text)">1. Taraflar:</strong> MeloniTour (Satıcı) ve Müşteri.</p><p style="margin-bottom:12px"><strong style="color:var(--text)">2. Konu:</strong> Tur paketi satışı ve hizmet şartları.</p><p style="margin-bottom:12px"><strong style="color:var(--text)">3. Ödeme:</strong> Kredi kartı, havale/EFT. 12 taksit imkanı.</p><p style="margin-bottom:12px"><strong style="color:var(--text)">4. Cayma Hakkı:</strong> Turdan 15 gün öncesine kadar %100 iade.</p><p style="margin-bottom:12px"><strong style="color:var(--text)">5. İptal:</strong> 7 gün öncesine kadar %50 iade, sonrası iade yoktur.</p><p><strong style="color:var(--text)">6. Uyuşmazlık:</strong> İstanbul Mahkemeleri yetkilidir.</p></div>');
};

var ck=$('#cookieLink');
if(ck)ck.onclick=function(e){e.preventDefault();
  showModal('<h3 style="font-size:1.4rem;margin-bottom:14px;font-family:var(--serif)">🍪 Çerez Politikası</h3><div style="font-size:.88rem;line-height:1.7;color:var(--text-dim);max-height:400px;overflow-y:auto"><p style="margin-bottom:12px">Sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz.</p><p style="margin-bottom:12px"><strong style="color:var(--text)">Zorunlu Çerezler:</strong> Site çalışması için gerekli.</p><p style="margin-bottom:12px"><strong style="color:var(--text)">Analitik Çerezler:</strong> Ziyaret istatistikleri.</p><p style="margin-bottom:12px"><strong style="color:var(--text)">Pazarlama Çerezleri:</strong> Size özel reklamlar.</p><p>Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman silebilirsiniz.</p></div>');
};

console.log('✅ Etkileşim yüklendi');
})();
