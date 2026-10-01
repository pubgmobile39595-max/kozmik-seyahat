(function(){
var $=function(s){return document.querySelector(s)};
var $$=function(s){return document.querySelectorAll(s)};
var t=window.DT?window.DT.toast:function(m){alert(m)};

// PARA BİRİMİ
var RATE={USD:0.029,EUR:0.027,GBP:0.023};

// HESAPLAYICI
var destData=[
  {n:'Kapadokya, Türkiye',base:5000},
  {n:'Paris, Fransa',base:12000},
  {n:'Tokyo, Japonya',base:15000},
  {n:'Dubai, BAE',base:10000},
  {n:'Roma, İtalya',base:11000},
  {n:'Bali, Endonezya',base:14000},
  {n:'New York, ABD',base:18000},
  {n:'Santorini, Yunanistan',base:13000}
];

var cd=$('#calcDest');
if(cd){
  var h='';
  for(var i=0;i<destData.length;i++)h+='<option value="'+destData[i].base+'">'+destData[i].n+' · ₺'+destData[i].base.toLocaleString('tr-TR')+'/gün</option>';
  cd.innerHTML=h;
}

var cb=$('#calcBtn');
if(cb)cb.onclick=function(){
  var base=parseInt($('#calcDest').value)||5000;
  var p=parseInt($('#calcPeople').value)||1;
  var d=parseInt($('#calcDays').value)||1;
  var hotel=parseInt($('#calcHotel').value)||0;
  var extra=0;
  var cks=$$('.calc__extras input:checked');
  for(var i=0;i<cks.length;i++)extra+=parseInt(cks[i].getAttribute('data-price'))||0;
  var total=(base*d+hotel*d)*p+extra*p;
  var perPerson=Math.round(total/p);
  if($('#calcPrice'))$('#calcPrice').textContent='₺'+total.toLocaleString('tr-TR');
  if($('#calcExtra'))$('#calcExtra').textContent='Kişi başı: ₺'+perPerson.toLocaleString('tr-TR');
  if($('#calcCurrency'))$('#calcCurrency').textContent='≈ $'+Math.round(total*RATE.USD).toLocaleString('tr-TR')+' · €'+Math.round(total*RATE.EUR).toLocaleString('tr-TR');
};
if(cb)cb.click();

// MODAL
var modal=$('#modal'),mb=$('#modalBody'),mc=$('#modalClose');
if(mc)mc.onclick=function(){modal.classList.remove('active')};
if(modal)modal.onclick=function(e){if(e.target===modal)modal.classList.remove('active')};

// ÖDEME SİSTEMİ
function openPayment(plan,price){
  if(!modal||!mb)return;
  mb.innerHTML='<div style="text-align:center;margin-bottom:20px"><div style="font-size:3rem">💳</div><h3 style="font-size:1.4rem;margin:8px 0 6px;font-family:var(--serif)">Güvenli Ödeme</h3><p style="color:var(--text-dim);font-size:.9rem">'+plan+' · <strong style="color:var(--text)">'+price+'</strong></p></div><form id="payForm" style="display:flex;flex-direction:column;gap:14px"><div style="display:grid;grid-template-columns:1fr 1fr;gap:14px"><input placeholder="Ad Soyad" required style="padding:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><input type="email" placeholder="E-posta" required style="padding:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"></div><input id="payCard" placeholder="1234 5678 9012 3456" maxlength="19" required style="padding:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:monospace;letter-spacing:2px"><div style="display:grid;grid-template-columns:1fr 1fr;gap:14px"><input id="payExp" placeholder="AA/YY" maxlength="5" required style="padding:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:monospace"><input placeholder="CVV" maxlength="3" required style="padding:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:monospace"></div><div style="padding:12px 16px;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.3);border-radius:12px;font-size:.82rem;display:flex;align-items:center;gap:10px"><span style="font-size:1.4rem">🔒</span><div><strong>256-bit SSL Güvenli Ödeme</strong><br><span style="color:var(--text-dim)">Kart bilgileriniz şifrelenmiştir</span></div></div><button type="submit" style="padding:16px;background:var(--grad);color:#fff;border:0;border-radius:12px;font-weight:600;cursor:pointer;font-size:1rem">💳 '+price+' Öde</button></form>';
  modal.classList.add('active');
  var f=$('#payForm');
  if(f)f.onsubmit=function(e){
    e.preventDefault();
    var btn=f.querySelector('button[type=submit]');
    btn.disabled=true;btn.textContent='⏳ İşleniyor...';
    setTimeout(function(){
      var rn='DT-'+Date.now().toString().slice(-8);
      mb.innerHTML='<div style="text-align:center;padding:20px"><div style="font-size:4rem;margin-bottom:14px">✅</div><h3 style="font-size:1.5rem;margin-bottom:10px;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent">Ödeme Başarılı!</h3><p style="color:var(--text-dim);font-size:.9rem;margin-bottom:20px">'+plan+' paketiniz onaylandı. Bilet e-posta adresinize gönderildi.</p><div style="padding:16px;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.3);border-radius:12px;font-family:monospace;font-size:.85rem;margin-bottom:20px">Rezervasyon No:<br><strong style="font-size:1.1rem">'+rn+'</strong></div><button type="button" onclick="document.getElementById(\'modal\').classList.remove(\'active\')" style="padding:14px 32px;background:var(--grad);color:#fff;border:0;border-radius:12px;font-weight:600;cursor:pointer">Tamam</button></div>';
    },1500);
  };
  var c=$('#payCard');if(c)c.oninput=function(){c.value=c.value.replace(/\D/g,'').replace(/(\d{4})/g,'$1 ').trim()};
  var x=$('#payExp');if(x)x.oninput=function(){var v=x.value.replace(/\D/g,'');if(v.length>=2)v=v.slice(0,2)+'/'+v.slice(2,4);x.value=v};
}

// REZERVASYON BUTONLARI
function openBooking(plan,price){
  if(!modal||!mb)return;
  mb.innerHTML='<div style="text-align:center;margin-bottom:20px"><div style="font-size:3rem">🌍</div><h3 style="font-size:1.4rem;margin:8px 0 6px;font-family:var(--serif)">Rezervasyon</h3><p style="color:var(--text-dim);font-size:.9rem">'+plan+' · <strong style="color:var(--text)">'+price+'</strong></p></div><form id="bookForm" style="display:flex;flex-direction:column;gap:14px"><input placeholder="Ad Soyad" required style="padding:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><input type="email" placeholder="E-posta" required style="padding:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><input type="tel" placeholder="Telefon" required style="padding:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"><div style="display:grid;grid-template-columns:1fr 1fr;gap:14px"><label style="display:flex;flex-direction:column;gap:6px;font-size:.8rem;color:var(--text-dim)">Gidiş<input type="date" required style="padding:12px;background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"></label><label style="display:flex;flex-direction:column;gap:6px;font-size:.8rem;color:var(--text-dim)">Dönüş<input type="date" required style="padding:12px;background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit"></label></div><button type="submit" style="padding:16px;background:var(--grad);color:#fff;border:0;border-radius:12px;font-weight:600;cursor:pointer;font-size:1rem">✅ Devam Et (Ödeme)</button></form>';
  modal.classList.add('active');
  var f=$('#bookForm');
  if(f)f.onsubmit=function(e){e.preventDefault();openPayment(plan,price)};
}

var bookBtns=['bookBtn','heroBook','ctaBook','calcBook'];
for(var i=0;i<bookBtns.length;i++){
  var b=document.getElementById(bookBtns[i]);
  if(b)b.onclick=function(){openBooking('Genel Rezervasyon','₺35.000')};
}

// ARAMA
var hs=$('#heroSearchBtn'),hi=$('#heroSearch');
if(hs&&hi)hs.onclick=function(){
  var q=hi.value.trim().toLowerCase();
  if(!q){t('⚠️ Bir şey yazın');return}
  var tg=document.getElementById('tours');
  if(tg)tg.scrollIntoView({behavior:'smooth'});
  t('🔍 "'+q+'" için sonuçlar aşağıda');
};

// CHAT
var fc=$('#fabChat'),cbox=$('#chat'),cc=$('#chatClose'),ci=$('#chatInput'),cs=$('#chatSend'),cbd=$('#chatBody');
if(fc&&cbox){
  var reps=['Kapadokya 3 günlük turumuz çok popüler!','Paris için en iyi zaman ilkbahar.','Tokyo turları 78.000₺\'den başlıyor.','12 taksit imkanımız var.','Vize danışmanlığımız ücretsiz.','Hangi destinasyonu merak ediyorsunuz?'];
  fc.onclick=function(){cbox.classList.toggle('open');if(cbox.classList.contains('open'))ci.focus()};
  if(cc)cc.onclick=function(){cbox.classList.remove('open')};
  function addM(txt,u){var m=document.createElement('div');m.className='chat__msg chat__msg--'+(u?'user':'bot');m.textContent=txt;cbd.appendChild(m);cbd.scrollTop=cbd.scrollHeight;}
  function sendM(){var v=ci.value.trim();if(!v)return;addM(v,true);ci.value='';setTimeout(function(){addM(reps[Math.floor(Math.random()*reps.length)],false)},600);}
  if(cs)cs.onclick=sendM;
  if(ci)ci.onkeypress=function(e){if(e.key==='Enter')sendM()};
}

// FOOTER MODALLAR
function showAbout(){
  if(!modal||!mb)return;
  mb.innerHTML='<h3 style="font-size:1.5rem;margin-bottom:16px;font-family:var(--serif)">🏢 Hakkımızda</h3><p style="color:var(--text-dim);font-size:.9rem;line-height:1.7;margin-bottom:14px">Dünya Turu, 2012 yılında İstanbul\'da kurulmuş, TÜRSAB onaylı bir seyahat acentesidir. 15 yıllık deneyimimizle 45 ülkede, 200+ şehirde hizmet veriyoruz.</p><p style="color:var(--text-dim);font-size:.9rem;line-height:1.7;margin-bottom:14px"><strong style="color:var(--text)">Misyonumuz:</strong> Herkesin hayalindeki tatili güvenli, konforlu ve uygun fiyatla yaşamasını sağlamak.</p><p style="color:var(--text-dim);font-size:.9rem;line-height:1.7"><strong style="color:var(--text)">Değerlerimiz:</strong> Şeffaflık, güven, kalite, müşteri memnuniyeti.</p>';
  modal.classList.add('active');
}
function showCareer(){
  if(!modal||!mb)return;
  var jobs=[['👨‍💼','Tur Operatörü','İstanbul · Tam zamanlı'],['📞','Rezervasyon Uzmanı','İstanbul · Tam zamanlı'],['🌐','Pazarlama Müdürü','İstanbul · Hibrit'],['🎨','Sosyal Medya Uzmanı','Uzaktan · Tam zamanlı'],['✈️','Vize Danışmanı','Ankara · Tam zamanlı']];
  var h='<h3 style="font-size:1.5rem;margin-bottom:16px;font-family:var(--serif)">💼 Kariyer Fırsatları</h3>';
  for(var i=0;i<jobs.length;i++){
    h+='<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:12px;margin-bottom:10px"><div><div style="font-weight:600;font-size:.92rem">'+jobs[i][0]+' '+jobs[i][1]+'</div><div style="color:var(--text-dim);font-size:.78rem;margin-top:2px">'+jobs[i][2]+'</div></div><button type="button" onclick="alert(\'📩 Başvurunuz alındı!\')" style="flex-shrink:0;padding:8px 14px;background:var(--grad);color:#fff;border:0;border-radius:10px;font-weight:600;cursor:pointer;font-size:.78rem">Başvur</button></div>';
  }
  mb.innerHTML=h;
  modal.classList.add('active');
}
function showPress(){
  if(!modal||!mb)return;
  var files=[['🎨','Logo Paketi','2.4 MB'],['📄','Basın Bülteni','840 KB'],['📸','Fotoğraf Arşivi','45 MB'],['📊','Şirket Sunumu','3 MB']];
  var h='<h3 style="font-size:1.5rem;margin-bottom:16px;font-family:var(--serif)">📰 Basın Kiti</h3>';
  for(var i=0;i<files.length;i++){
    h+='<button type="button" onclick="alert(\'📥 '+files[i][1]+' indiriliyor...\')" style="display:flex;justify-content:space-between;width:100%;padding:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:12px;color:var(--text);cursor:pointer;font-family:inherit;font-size:.88rem;margin-bottom:10px;text-align:left"><span>'+files[i][0]+' '+files[i][1]+'</span><span style="color:var(--text-dim);font-size:.78rem">'+files[i][2]+'</span></button>';
  }
  mb.innerHTML=h;
  modal.classList.add('active');
}
var al=$('#aboutLink'),cl=$('#careerLink'),pl=$('#pressLink');
if(al)al.onclick=function(e){e.preventDefault();showAbout()};
if(cl)cl.onclick=function(e){e.preventDefault();showCareer()};
if(pl)pl.onclick=function(e){e.preventDefault();showPress()};

// PAYLAŞ
var sb=$('#shareBtn');
if(sb)sb.onclick=function(){
  if(navigator.share)navigator.share({title:'Dünya Turu',url:location.href}).catch(function(){});
  else{navigator.clipboard.writeText(location.href);t('🔗 Link kopyalandı')}
};

// NEWSLETTER
var nf=$('#newsletterForm');
if(nf)nf.onsubmit=function(e){e.preventDefault();t('✅ Bültene abone oldunuz!');nf.reset()};

console.log('✅ Etkileşim yüklendi');
})();
