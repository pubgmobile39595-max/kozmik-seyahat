(function(){
var $=function(s){return document.querySelector(s)};
var $$=function(s){return document.querySelectorAll(s)};

// ==================== VERİ KATMANI ====================
var DB={
  get:function(k,d){try{var v=localStorage.getItem('mt_'+k);return v?JSON.parse(v):d}catch(e){return d}},
  set:function(k,v){localStorage.setItem('mt_'+k,JSON.stringify(v))}
};

// İlk veri kurulumu
function seed(){
  if(!DB.get('admin')) DB.set('admin',{user:'yilmaz',pass:'meloni2024'});
  if(!DB.get('tours')) DB.set('tours',[
    {id:1,name:'Kapadokya Balon Turu',cat:'yurtici',price:12900,dur:'3 Gün 2 Gece',img:'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800',desc:'Balon turu, yeraltı şehirleri, peri bacaları.',active:true,views:0},
    {id:2,name:'Antalya Ultra Herşey Dahil',cat:'yurtici',price:8900,dur:'4 Gün 3 Gece',img:'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?w=800',desc:'Lüks resort tatili.',active:true,views:0},
    {id:3,name:'Paris Romantik Tur',cat:'yurtdisi',price:42000,dur:'5 Gün 4 Gece',img:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',desc:'Eyfel, Louvre, Seine.',active:true,views:0},
    {id:4,name:'Dubai Lüks Deneyim',cat:'yurtdisi',price:35000,dur:'4 Gün 3 Gece',img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',desc:'Burj Khalifa, çöl safarisi.',active:true,views:0},
    {id:5,name:'Bali Egzotik Tatil',cat:'yurtdisi',price:58000,dur:'8 Gün 7 Gece',img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',desc:'Tapınaklar, plajlar.',active:true,views:0},
    {id:6,name:'Santorini Balayı Paketi',cat:'ozel',price:48000,dur:'5 Gün 4 Gece',img:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',desc:'Beyaz evler, gün batımı.',active:true,views:0}
  ]);
  if(!DB.get('destinations')) DB.set('destinations',[
    {id:1,name:'Kapadokya',country:'Türkiye',price:12900,img:'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=600'},
    {id:2,name:'Paris',country:'Fransa',price:42000,img:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600'},
    {id:3,name:'Dubai',country:'BAE',price:35000,img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600'},
    {id:4,name:'Bali',country:'Endonezya',price:58000,img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600'}
  ]);
  if(!DB.get('bookings')) DB.set('bookings',[]);
  if(!DB.get('customers')) DB.set('customers',[]);
  if(!DB.get('messages')) DB.set('messages',[]);
  if(!DB.get('coupons')) DB.set('coupons',[
    {id:1,code:'ERKEN25',discount:25,type:'percent',active:true,uses:0},
    {id:2,code:'MELONI500',discount:500,type:'fixed',active:true,uses:0}
  ]);
  if(!DB.get('blog')) DB.set('blog',[]);
  if(!DB.get('settings')) DB.set('settings',{
    phone:'+90 (212) 555 00 00',whatsapp:'+905550000000',email:'info@melonitour.com',
    company:'MeloniTour',address:'İstiklal Cad. No:42 Beyoğlu/İstanbul',
    hours:'Her gün 09:00 - 21:00',tursab:'A-1234',instagram:'@melonitour',facebook:'melonitour',
    title:'MeloniTour — Hayalinizdeki Tatil, Bizimle Gerçek',
    desc:'1998\'den bu yana profesyonel seyahat acentesi.'
  });
}

// ==================== YARDIMCILAR ====================
function fmt(n){return '₺'+parseInt(n||0).toLocaleString('tr-TR')}
function uid(){return Date.now()+Math.floor(Math.random()*1000)}
function esc(s){return String(s||'').replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function toast(m,type){
  var t=$('#toast');if(!t)return;
  t.textContent=m;t.className='toast'+(type?' toast--'+type:'')+' show';
  clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove('show')},2500);
}
function openModal(title,body){
  var m=$('#modal');if(!m)return;
  $('#modalTitle').textContent=title;
  $('#modalBody').innerHTML=body;
  m.classList.add('active');
}
function closeModal(){var m=$('#modal');if(m)m.classList.remove('active')}

// ==================== LOGIN ====================
var loginScreen=$('#loginScreen'),adminPanel=$('#adminPanel');
function checkAuth(){
  if(sessionStorage.getItem('mt_logged')==='1'){showAdmin()}
  else{loginScreen.style.display='grid';adminPanel.style.display='none'}
}
function showAdmin(){
  loginScreen.style.display='none';
  adminPanel.style.display='grid';
  renderAll();
  updateTime();
}
function updateTime(){
  var now=new Date();
  var h=String(now.getHours()).padStart(2,'0');
  var m=String(now.getMinutes()).padStart(2,'0');
  var el=$('#topbarTime');
  if(el)el.textContent=h+':'+m;
}

var loginForm=$('#loginForm');
if(loginForm)loginForm.onsubmit=function(e){
  e.preventDefault();
  var u=$('#loginUser').value.trim();
  var p=$('#loginPass').value;
  var a=DB.get('admin');
  if(u===a.user&&p===a.pass){
    sessionStorage.setItem('mt_logged','1');
    toast('✅ Hoş geldiniz, Yılmaz Bey!','success');
    showAdmin();
  }else{
    $('#loginError').textContent='❌ Kullanıcı adı veya şifre hatalı';
    $('#loginPass').value='';
  }
};

var logoutBtn=$('#logoutBtn');
if(logoutBtn)logoutBtn.onclick=function(){
  if(confirm('Çıkış yapmak istediğinize emin misiniz?')){
    sessionStorage.removeItem('mt_logged');
    location.reload();
  }
};

// ==================== NAVIGASYON ====================
var links=$$('.sidebar__link');
for(var i=0;i<links.length;i++){
  links[i].onclick=(function(link){
    return function(e){
      e.preventDefault();
      var page=link.getAttribute('data-page');
      goTo(page);
    };
  })(links[i]);
}
function goTo(page){
  for(var i=0;i<links.length;i++)links[i].classList.toggle('active',links[i].getAttribute('data-page')===page);
  var pages=$$('.page');
  for(var j=0;j<pages.length;j++)pages[j].classList.toggle('active',pages[j].getAttribute('data-page')===page);
  var titles={dashboard:'Kontrol Odası',tours:'Turlar',bookings:'Rezervasyonlar',customers:'Müşteriler',messages:'Mesajlar',destinations:'Destinasyonlar',coupons:'Kuponlar',blog:'Blog & Haberler',settings:'Site Ayarları',security:'Güvenlik'};
  var pt=$('#pageTitle');if(pt)pt.textContent=titles[page]||page;
  // Mobil menüyü kapat
  var sb=$('#sidebar'),ov=$('#sidebarOverlay');
  if(sb)sb.classList.remove('open');
  if(ov)ov.classList.remove('open');
  // Sayfaya özel render
  if(page==='dashboard')renderDashboard();
  if(page==='tours')renderTours();
  if(page==='bookings')renderBookings();
  if(page==='customers')renderCustomers();
  if(page==='messages')renderMessages();
  if(page==='destinations')renderDests();
  if(page==='coupons')renderCoupons();
  if(page==='blog')renderBlog();
  if(page==='settings')renderSettings();
}

// Menü toggle (mobil)
var menuBtn=$('#menuBtn'),sbClose=$('#sidebarClose'),sbOv=$('#sidebarOverlay');
if(menuBtn)menuBtn.onclick=function(){var s=$('#sidebar');if(s)s.classList.add('open');var o=$('#sidebarOverlay');if(o)o.classList.add('open')};
if(sbClose)sbClose.onclick=function(){var s=$('#sidebar');if(s)s.classList.remove('open');var o=$('#sidebarOverlay');if(o)o.classList.remove('open')};
if(sbOv)sbOv.onclick=function(){var s=$('#sidebar');if(s)s.classList.remove('open');sbOv.classList.remove('open')};

// data-goto butonları
document.addEventListener('click',function(e){
  var b=e.target.closest('[data-goto]');
  if(b)goTo(b.getAttribute('data-goto'));
});

// ==================== DASHBOARD ====================
function renderDashboard(){
  var bookings=DB.get('bookings',[]);
  var customers=DB.get('customers',[]);
  var tours=DB.get('tours',[]);

  // İstatistikler
  var income=0;
  for(var i=0;i<bookings.length;i++){
    if(bookings[i].status!=='cancelled')income+=parseInt(bookings[i].total||0);
  }
  $('#statIncome').textContent=fmt(income);
  $('#statBookings').textContent=bookings.length;
  $('#statCustomers').textContent=customers.length;
  $('#statTours').textContent=tours.filter(function(t){return t.active}).length;

  // Bugün rezervasyon
  var today=new Date().toDateString();
  var todayCount=bookings.filter(function(b){return new Date(b.date).toDateString()===today}).length;
  $('#statBookingsSub').textContent='Bugün: '+todayCount;

  // Son 7 gün grafiği
  var last7=[];
  var dayNames=['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'];
  for(var d=6;d>=0;d--){
    var dt=new Date();dt.setDate(dt.getDate()-d);
    var ds=dt.toDateString();
    var count=bookings.filter(function(b){return new Date(b.date).toDateString()===ds}).length;
    last7.push({label:dayNames[dt.getDay()],value:count});
  }
  var maxVal=Math.max.apply(null,last7.map(function(x){return x.value}))||1;
  var chart=$('#chartWeek');
  if(chart){
    var ch='';
    for(var c=0;c<last7.length;c++){
      var h=Math.max(8,(last7[c].value/maxVal)*100);
      ch+='<div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;height:100%"><div class="chart__bar" style="height:'+h+'%;"><span>'+last7[c].value+'</span></div><div class="chart__label">'+last7[c].label+'</div></div>';
    }
    chart.innerHTML=ch;
  }

  // Popüler turlar (rezervasyon sayısına göre)
  var tourCounts={};
  for(var k=0;k<bookings.length;k++){
    var tn=bookings[k].tourName||'';
    if(tn)tourCounts[tn]=(tourCounts[tn]||0)+1;
  }
  var sorted=Object.keys(tourCounts).sort(function(a,b){return tourCounts[b]-tourCounts[a]}).slice(0,5);
  var popEl=$('#popularTours');
  if(popEl){
    if(sorted.length===0){popEl.innerHTML='<div class="empty"><div class="empty__icon">📊</div><div class="empty__text">Henüz rezervasyon yok</div></div>';}
    else{
      var ph='';
      for(var p=0;p<sorted.length;p++){
        ph+='<div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--border)"><span style="font-weight:600;font-size:.88rem">'+(p+1)+'. '+esc(sorted[p])+'</span><span style="color:var(--primary);font-weight:700;font-family:monospace">'+tourCounts[sorted[p]]+'x</span></div>';
      }
      popEl.innerHTML=ph;
    }
  }

  // Son rezervasyonlar
  var recent=bookings.slice().reverse().slice(0,5);
  var rb=$('#recentBookings');
  if(rb){
    if(recent.length===0){rb.innerHTML='<div class="empty"><div class="empty__icon">📥</div><div class="empty__text">Henüz rezervasyon yok</div></div>';}
    else{rb.innerHTML=recent.map(bookingItem).join('')}
  }
}

// ==================== TURLAR ====================
function renderTours(){
  var tours=DB.get('tours',[]);
  var q=($('#searchTours')&&$('#searchTours').value||'').toLowerCase();
  var list=$('#toursList');
  if(!list)return;
  var filtered=tours.filter(function(t){
    return !q||t.name.toLowerCase().indexOf(q)>=0;
  });
  if(filtered.length===0){
    list.innerHTML='<div class="empty"><div class="empty__icon">🌍</div><div class="empty__title">Tur bulunamadı</div><div class="empty__text">Yeni tur ekleyin veya arama yapın</div></div>';
    return;
  }
  list.innerHTML=filtered.map(function(t){
    var catLabels={yurtici:'🇹🇷 Yurt İçi',yurtdisi:'✈️ Yurt Dışı',grup:'👥 Grup',ozel:'🎯 Özel'};
    return '<div class="list-item"><div class="list-item__info"><div class="list-item__title">'+esc(t.name)+' <span class="tag tag--'+(t.cat||'yurtici')+'">'+(catLabels[t.cat]||'Tur')+'</span> '+(t.active?'':'<span class="tag tag--cancelled">PASİF</span>')+'</div><div class="list-item__sub">'+esc(t.dur||'')+' · '+esc(t.desc||'').substring(0,60)+'</div></div><div class="list-item__price">'+fmt(t.price)+'</div><div class="list-item__actions"><button class="icon-action" onclick="window.MTAdmin.editTour('+t.id+')" title="Düzenle">✏️</button><button class="icon-action icon-action--danger" onclick="window.MTAdmin.delTour('+t.id+')" title="Sil">🗑️</button></div></div>';
  }).join('');
}

function tourForm(t){
  t=t||{name:'',cat:'yurtici',price:'',dur:'',img:'',desc:'',active:true};
  var catOpts='';
  var cats=[['yurtici','🇹🇷 Yurt İçi'],['yurtdisi','✈️ Yurt Dışı'],['grup','👥 Grup'],['ozel','🎯 Özel']];
  for(var i=0;i<cats.length;i++){
    catOpts+='<option value="'+cats[i][0]+'"'+(t.cat===cats[i][0]?' selected':'')+'>'+cats[i][1]+'</option>';
  }
  return '<form id="tourForm" class="form"><label>Tur Adı<input type="text" id="tfName" value="'+esc(t.name)+'" required></label><div class="form__row"><label>Kategori<select id="tfCat">'+catOpts+'</select></label><label>Fiyat (₺)<input type="number" id="tfPrice" value="'+(t.price||'')+'" required></label></div><div class="form__row"><label>Süre<input type="text" id="tfDur" value="'+esc(t.dur)+'" placeholder="3 Gün 2 Gece"></label><label>Aktif<input type="checkbox" id="tfActive" '+(t.active?'checked':'')+' style="width:auto;align-self:flex-start;margin-top:8px"></label></div><label>Resim URL<input type="url" id="tfImg" value="'+esc(t.img)+'" placeholder="https://..."></label><label>Açıklama<textarea id="tfDesc" rows="3">'+esc(t.desc)+'</textarea></label><div style="display:flex;gap:10px;margin-top:8px"><button type="submit" class="btn btn--primary">💾 Kaydet</button><button type="button" class="btn btn--ghost" onclick="document.getElementById(\'modal\').classList.remove(\'active\')">İptal</button></div></form>';
}

window.MTAdmin={
  editTour:function(id){
    var tours=DB.get('tours',[]);
    var t=tours.filter(function(x){return x.id===id})[0];
    if(!t)return;
    openModal('✏️ Turu Düzenle',tourForm(t));
    $('#tourForm').onsubmit=function(e){
      e.preventDefault();
      t.name=$('#tfName').value;
      t.cat=$('#tfCat').value;
      t.price=parseInt($('#tfPrice').value)||0;
      t.dur=$('#tfDur').value;
      t.img=$('#tfImg').value;
      t.desc=$('#tfDesc').value;
      t.active=$('#tfActive').checked;
      DB.set('tours',tours);
      toast('✅ Tur güncellendi','success');
      closeModal();renderTours();
    };
  },
  delTour:function(id){
    if(!confirm('Bu turu silmek istediğinize emin misiniz?'))return;
    var tours=DB.get('tours',[]).filter(function(x){return x.id!==id});
    DB.set('tours',tours);
    toast('🗑️ Tur silindi','error');
    renderTours();
  },
  delBooking:function(id){
    if(!confirm('Rezervasyonu silmek istediğinize emin misiniz?'))return;
    var b=DB.get('bookings',[]).filter(function(x){return x.id!==id});
    DB.set('bookings',b);toast('🗑️ Silindi','error');renderBookings();
  },
  setBookingStatus:function(id,status){
    var bs=DB.get('bookings',[]);
    for(var i=0;i<bs.length;i++){if(bs[i].id===id)bs[i].status=status}
    DB.set('bookings',bs);toast('✅ Durum güncellendi','success');renderBookings();
  },
  viewBooking:function(id){
    var b=DB.get('bookings',[]).filter(function(x){return x.id===id})[0];
    if(!b)return;
    var html='<div class="form">';
    html+='<div><strong>Ad Soyad:</strong> '+esc(b.name)+'</div>';
    html+='<div><strong>E-posta:</strong> '+esc(b.email)+'</div>';
    html+='<div><strong>Telefon:</strong> '+esc(b.phone||'-')+'</div>';
    html+='<div><strong>Tur:</strong> '+esc(b.tourName)+'</div>';
    html+='<div><strong>Kişi:</strong> '+esc(b.people||'1')+'</div>';
    html+='<div><strong>Tarih:</strong> '+new Date(b.date).toLocaleString('tr-TR')+'</div>';
    html+='<div><strong>Tutar:</strong> '+fmt(b.total)+'</div>';
    if(b.notes)html+='<div><strong>Notlar:</strong> '+esc(b.notes)+'</div>';
    html+='</div>';
    openModal('📋 Rezervasyon Detayı',html);
  },
  editCustomer:function(id){
    var cs=DB.get('customers',[]);
    var c=cs.filter(function(x){return x.id===id})[0];
    if(!c)return;
    openModal('✏️ Müşteri Düzenle','<form id="custForm" class="form"><label>Ad Soyad<input type="text" id="cfName" value="'+esc(c.name)+'" required></label><label>E-posta<input type="email" id="cfEmail" value="'+esc(c.email)+'"></label><label>Telefon<input type="tel" id="cfPhone" value="'+esc(c.phone||'')+'"></label><div style="display:flex;gap:10px;margin-top:8px"><button type="submit" class="btn btn--primary">💾 Kaydet</button><button type="button" class="btn btn--ghost" onclick="document.getElementById(\'modal\').classList.remove(\'active\')">İptal</button></div></form>');
    $('#custForm').onsubmit=function(e){
      e.preventDefault();
      c.name=$('#cfName').value;c.email=$('#cfEmail').value;c.phone=$('#cfPhone').value;
      DB.set('customers',cs);toast('✅ Kaydedildi','success');closeModal();renderCustomers();
    };
  },
  delCustomer:function(id){
    if(!confirm('Müşteriyi silmek istediğinize emin misiniz?'))return;
    DB.set('customers',DB.get('customers',[]).filter(function(x){return x.id!==id}));
    toast('🗑️ Silindi','error');renderCustomers();
  },
  delMessage:function(id){
    if(!confirm('Mesajı silmek istediğinize emin misiniz?'))return;
    DB.set('messages',DB.get('messages',[]).filter(function(x){return x.id!==id}));
    toast('🗑️ Silindi','error');renderMessages();updateBadges();
  },
  delDest:function(id){
    if(!confirm('Destinasyonu silmek istediğinize emin misiniz?'))return;
    DB.set('destinations',DB.get('destinations',[]).filter(function(x){return x.id!==id}));
    toast('🗑️ Silindi','error');renderDests();
  },
  delCoupon:function(id){
    if(!confirm('Kuponu silmek istediğinize emin misiniz?'))return;
    DB.set('coupons',DB.get('coupons',[]).filter(function(x){return x.id!==id}));
    toast('🗑️ Silindi','error');renderCoupons();
  },
  toggleCoupon:function(id){
    var cs=DB.get('coupons',[]);
    for(var i=0;i<cs.length;i++){if(cs[i].id===id)cs[i].active=!cs[i].active}
    DB.set('coupons',cs);toast('✅ Güncellendi','success');renderCoupons();
  },
  delBlog:function(id){
    if(!confirm('Yazıyı silmek istediğinize emin misiniz?'))return;
    DB.set('blog',DB.get('blog',[]).filter(function(x){return x.id!==id}));
    toast('🗑️ Silindi','error');renderBlog();
  }
};

// Yeni tur
var atb=$('#addTourBtn');
if(atb)atb.onclick=function(){
  openModal('➕ Yeni Tur',tourForm());
  $('#tourForm').onsubmit=function(e){
    e.preventDefault();
    var tours=DB.get('tours',[]);
    tours.push({id:uid(),name:$('#tfName').value,cat:$('#tfCat').value,price:parseInt($('#tfPrice').value)||0,dur:$('#tfDur').value,img:$('#tfImg').value,desc:$('#tfDesc').value,active:$('#tfActive').checked,views:0});
    DB.set('tours',tours);
    toast('✅ Tur eklendi','success');
    closeModal();renderTours();
  };
};
var st=$('#searchTours');
if(st)st.oninput=renderTours;

// ==================== REZERVASYONLAR ====================
function bookingItem(b){
  var statusLabels={new:'YENİ',confirmed:'ONAYLANDI',completed:'TAMAMLANDI',cancelled:'İPTAL'};
  var status=b.status||'new';
  return '<div class="list-item"><div class="list-item__info"><div class="list-item__title">'+esc(b.name)+' <span class="tag tag--'+status+'">'+(statusLabels[status]||'YENİ')+'</span></div><div class="list-item__sub">'+esc(b.tourName)+' · '+esc(b.people||'1')+' kişi · '+new Date(b.date).toLocaleDateString('tr-TR')+'</div></div><div class="list-item__price">'+fmt(b.total)+'</div><div class="list-item__actions"><button class="icon-action icon-action--success" onclick="window.MTAdmin.setBookingStatus('+b.id+',\'confirmed\')" title="Onayla">✓</button><button class="icon-action icon-action--success" onclick="window.MTAdmin.setBookingStatus('+b.id+',\'completed\')" title="Tamamla">✔</button><button class="icon-action" onclick="window.MTAdmin.viewBooking('+b.id+')" title="Detay">👁</button><button class="icon-action icon-action--danger" onclick="window.MTAdmin.delBooking('+b.id+')" title="Sil">🗑️</button></div></div>';
}

function renderBookings(){
  var bs=DB.get('bookings',[]);
  var f=$('#filterBooking')&&$('#filterBooking').value||'all';
  var list=$('#bookingsList');
  if(!list)return;
  var filtered=bs.filter(function(b){return f==='all'||(b.status||'new')===f});
  if(filtered.length===0){
    list.innerHTML='<div class="empty"><div class="empty__icon">📋</div><div class="empty__title">Rezervasyon yok</div><div class="empty__text">Yeni rezervasyonlar burada görünecek</div></div>';
    return;
  }
  list.innerHTML=filtered.slice().reverse().map(bookingItem).join('');
}
var fb=$('#filterBooking');
if(fb)fb.onchange=renderBookings;

// ==================== MÜŞTERİ
