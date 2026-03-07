// ================================================================
// VOLTEMOS À PALAVRA — app.js
// ================================================================
var EN_PT={
  "Genesis":"Gênesis","Exodus":"Êxodo","Leviticus":"Levítico","Numbers":"Números",
  "Deuteronomy":"Deuteronômio","Joshua":"Josué","Judges":"Juízes","Ruth":"Rute",
  "1 Samuel":"1 Samuel","2 Samuel":"2 Samuel","1 Kings":"1 Reis","2 Kings":"2 Reis",
  "1 Chronicles":"1 Crônicas","2 Chronicles":"2 Crônicas","Ezra":"Esdras",
  "Nehemiah":"Neemias","Esther":"Ester","Job":"Jó","Psalms":"Salmos",
  "Proverbs":"Provérbios","Ecclesiastes":"Eclesiastes","Song of Solomon":"Cânticos",
  "Isaiah":"Isaías","Jeremiah":"Jeremias","Lamentations":"Lamentações",
  "Ezekiel":"Ezequiel","Daniel":"Daniel","Hosea":"Oséias","Joel":"Joel",
  "Amos":"Amós","Obadiah":"Obadias","Jonah":"Jonas","Micah":"Miquéias",
  "Nahum":"Naum","Habakkuk":"Habacuque","Zephaniah":"Sofonias","Haggai":"Ageu",
  "Zechariah":"Zacarias","Malachi":"Malaquias","Matthew":"Mateus","Mark":"Marcos",
  "Luke":"Lucas","John":"João","Acts":"Atos","Romans":"Romanos",
  "1 Corinthians":"1 Coríntios","2 Corinthians":"2 Coríntios","Galatians":"Gálatas",
  "Ephesians":"Efésios","Philippians":"Filipenses","Colossians":"Colossenses",
  "1 Thessalonians":"1 Tessalonicenses","2 Thessalonians":"2 Tessalonicenses",
  "1 Timothy":"1 Timóteo","2 Timothy":"2 Timóteo","Titus":"Tito","Philemon":"Filemom",
  "Hebrews":"Hebreus","James":"Tiago","1 Peter":"1 Pedro","2 Peter":"2 Pedro",
  "1 John":"1 João","2 John":"2 João","3 John":"3 João","Jude":"Judas","Revelation":"Apocalipse"
};
var PT_EN={};Object.keys(EN_PT).forEach(function(k){PT_EN[EN_PT[k]]=k;});
var BOOK_SLUG={
  "Genesis":"genesis","Exodus":"exodo","Leviticus":"levitico","Numbers":"numeros",
  "Deuteronomy":"deuteronomio","Joshua":"josue","Judges":"juizes","Ruth":"rute",
  "1 Samuel":"1-samuel","2 Samuel":"2-samuel","1 Kings":"1-reis","2 Kings":"2-reis",
  "1 Chronicles":"1-cronicas","2 Chronicles":"2-cronicas","Ezra":"esdras",
  "Nehemiah":"neemias","Esther":"ester","Job":"jo","Psalms":"salmos",
  "Proverbs":"proverbios","Ecclesiastes":"eclesiastes","Song of Solomon":"canticos",
  "Isaiah":"isaias","Jeremiah":"jeremias","Lamentations":"lamentacoes",
  "Ezekiel":"ezequiel","Daniel":"daniel","Hosea":"oseias","Joel":"joel",
  "Amos":"amos","Obadiah":"obadias","Jonah":"jonas","Micah":"miqueias",
  "Nahum":"naum","Habakkuk":"habacuque","Zephaniah":"sofonias","Haggai":"ageu",
  "Zechariah":"zacarias","Malachi":"malaquias","Matthew":"mateus","Mark":"marcos",
  "Luke":"lucas","John":"joao","Acts":"atos","Romans":"romanos",
  "1 Corinthians":"1-corintios","2 Corinthians":"2-corintios","Galatians":"galatas",
  "Ephesians":"efesios","Philippians":"filipenses","Colossians":"colossenses",
  "1 Thessalonians":"1-tessalonicenses","2 Thessalonians":"2-tessalonicenses",
  "1 Timothy":"1-timoteo","2 Timothy":"2-timoteo","Titus":"tito","Philemon":"filemom",
  "Hebrews":"hebreus","James":"tiago","1 Peter":"1-pedro","2 Peter":"2-pedro",
  "1 John":"1-joao","2 John":"2-joao","3 John":"3-joao","Jude":"judas","Revelation":"apocalipse"
};
var ABBR={
  "Gn":"Genesis","Ex":"Exodus","Lv":"Leviticus","Nm":"Numbers","Dt":"Deuteronomy",
  "Jos":"Joshua","Jz":"Judges","Rt":"Ruth","1S":"1 Samuel","2S":"2 Samuel",
  "1R":"1 Kings","2R":"2 Kings","1Cr":"1 Chronicles","2Cr":"2 Chronicles",
  "Esd":"Ezra","Ne":"Nehemiah","Est":"Esther","Jó":"Job","Jo":"Job",
  "Sl":"Psalms","Sal":"Psalms","Ps":"Psalms","Pv":"Proverbs","Pr":"Proverbs",
  "Ec":"Ecclesiastes","Ct":"Song of Solomon","Is":"Isaiah","Jr":"Jeremiah",
  "Lm":"Lamentations","Ez":"Ezekiel","Dn":"Daniel","Os":"Hosea","Jl":"Joel",
  "Am":"Amos","Ab":"Obadiah","Jn":"Jonah","Mq":"Micah","Mc":"Mark","Na":"Nahum",
  "Hb":"Hebrews","Hc":"Habakkuk","Sf":"Zephaniah","Ag":"Haggai","Zc":"Zechariah",
  "Ml":"Malachi","Mt":"Matthew","Lc":"Luke","At":"Acts","Rm":"Romans",
  "1Co":"1 Corinthians","2Co":"2 Corinthians","1 Co":"1 Corinthians","2 Co":"2 Corinthians",
  "Gl":"Galatians","Ef":"Ephesians","Fp":"Philippians","Cl":"Colossians",
  "1Ts":"1 Thessalonians","2Ts":"2 Thessalonians","1 Ts":"1 Thessalonians","2 Ts":"2 Thessalonians",
  "1Tm":"1 Timothy","2Tm":"2 Timothy","1 Tm":"1 Timothy","2 Tm":"2 Timothy",
  "Tt":"Titus","Fm":"Philemon","He":"Hebrews","Tg":"James",
  "1Pe":"1 Peter","2Pe":"2 Peter","1 Pe":"1 Peter","2 Pe":"2 Peter",
  "1Jo":"1 John","2Jo":"2 John","3Jo":"3 John","1 Jo":"1 John","2 Jo":"2 John","3 Jo":"3 John",
  "Jd":"Jude","Ap":"Revelation"
};
var BOOK_ABBR={
  "Genesis":"Gn","Exodus":"Ex","Leviticus":"Lv","Numbers":"Nm","Deuteronomy":"Dt",
  "Joshua":"Jos","Judges":"Jz","Ruth":"Rt","1 Samuel":"1S","2 Samuel":"2S",
  "1 Kings":"1R","2 Kings":"2R","1 Chronicles":"1Cr","2 Chronicles":"2Cr",
  "Ezra":"Esd","Nehemiah":"Ne","Esther":"Est","Job":"Jo","Psalms":"Sl",
  "Proverbs":"Pv","Ecclesiastes":"Ec","Song of Solomon":"Ct",
  "Isaiah":"Is","Jeremiah":"Jr","Lamentations":"Lm","Ezekiel":"Ez","Daniel":"Dn",
  "Hosea":"Os","Joel":"Jl","Amos":"Am","Obadiah":"Ab","Jonah":"Jn",
  "Micah":"Mq","Nahum":"Na","Habakkuk":"Hc","Zephaniah":"Sf","Haggai":"Ag",
  "Zechariah":"Zc","Malachi":"Ml","Matthew":"Mt","Mark":"Mc","Luke":"Lc",
  "John":"Jo","Acts":"At","Romans":"Rm","1 Corinthians":"1Co","2 Corinthians":"2Co",
  "Galatians":"Gl","Ephesians":"Ef","Philippians":"Fp","Colossians":"Cl",
  "1 Thessalonians":"1Ts","2 Thessalonians":"2Ts","1 Timothy":"1Tm","2 Timothy":"2Tm",
  "Titus":"Tt","Philemon":"Fm","Hebrews":"He","James":"Tg","1 Peter":"1Pe",
  "2 Peter":"2Pe","1 John":"1Jo","2 John":"2Jo","3 John":"3Jo","Jude":"Jd","Revelation":"Ap"
};

if(typeof BASE==='undefined') var BASE="";
var DB={ara:null,kjv:null,str:null,refs:null};
var bookEN=(typeof INIT_BOOK!=='undefined')?INIT_BOOK:"Genesis";
var capNum=(typeof INIT_CAP!=='undefined')?INIT_CAP:1;
var booksEN=[];

// Load data
(function(){
  var needed=4,done=0;
  function check(){done++;if(done>=needed)boot();}
  fetch(BASE+"data/strong.json").then(function(r){return r.json();}).then(function(d){DB.str=d;check();}).catch(function(){DB.str={};check();});
  fetch(BASE+"data/kjv.json").then(function(r){return r.json();}).then(function(d){DB.kjv=d;check();}).catch(function(){DB.kjv=null;check();});
  fetch(BASE+"data/ara.json").then(function(r){return r.json();}).then(function(d){DB.ara=d;check();}).catch(function(){DB.ara=null;check();});
  fetch(BASE+"data/refs.json").then(function(r){return r.json();}).then(function(d){DB.refs=d;check();}).catch(function(){DB.refs={};check();});
})();

function boot(){
  if(!DB.kjv||!DB.ara){
    document.getElementById("versesPanel").innerHTML='<div class="loading">❌ Erro ao carregar dados.</div>';
    return;
  }
  booksEN=Object.keys(DB.kjv);
  renderBookList();
  renderCapSelect();
  render();
  initMobile();
  initPWA();
  initDailyVerse();
}

// ── SIDEBAR ──
function renderBookList(){
  var ul=document.getElementById("bookList");
  var html='<li class="section-lbl">Antigo Testamento</li>';
  booksEN.forEach(function(en){
    if(en==="Matthew") html+='<li class="section-lbl">Novo Testamento</li>';
    var slug=BOOK_SLUG[en]||en.toLowerCase();
    var caps=Object.keys(DB.kjv[en]||{});
    var firstCap=caps.length?Math.min.apply(null,caps.map(Number)):1;
    var href=BASE+slug+"/"+firstCap+".html";
    html+='<li class="'+(en===bookEN?"active":"")+'">'
         +'<a href="'+href+'">'+(EN_PT[en]||en)+'</a></li>';
  });
  ul.innerHTML=html;
}

// ── CAPÍTULOS ──
function getCaps(){return Object.keys(DB.kjv[bookEN]||{}).map(Number).sort(function(a,b){return a-b;});}
function renderCapSelect(){
  var caps=getCaps();
  var sel=document.getElementById("capSel");
  var slug=BOOK_SLUG[bookEN]||bookEN.toLowerCase();
  sel.innerHTML=caps.map(function(c){
    return '<option value="'+c+'" '+(c===capNum?"selected":"")
           +' data-href="'+BASE+slug+'/'+c+'.html">Cap. '+c+'</option>';
  }).join("");
}
function onCapSel(){
  var sel=document.getElementById("capSel");
  var opt=sel.options[sel.selectedIndex];
  var href=opt.getAttribute("data-href");
  if(href) window.location.href=href;
}

// ── RENDER ──
function render(){
  var ver=document.querySelector('input[name=ver]:checked').value;
  var par=document.getElementById("chkPar").checked;
  var showStr=document.getElementById("chkStr").checked;
  var showRef=document.getElementById("chkRef").checked;
  var capS=String(capNum);
  var kjvArr=(DB.kjv[bookEN]||{})[capS]||[];
  var araArr=(DB.ara[bookEN]||{})[capS]||[];
  var araMap={};araArr.forEach(function(v){araMap[v.v]=v.t;});
  var ptName=EN_PT[bookEN]||bookEN;
  document.getElementById("chapTitle").textContent=(par?ptName+" / "+bookEN:(ver==="ara"?ptName:bookEN))+" "+capNum;
  var subs={ara:"Almeida Revista e Atualizada",kjv:"King James Version + Strong's Numbers"};
  document.getElementById("chapSub").textContent=par?"ARA · KJV + Strong":subs[ver];
  document.getElementById("parHeads").classList.toggle("show",par);
  var abbr=BOOK_ABBR[bookEN]||bookEN.substring(0,2);
  var html="";
  kjvArr.forEach(function(vObj,i){
    var verso=vObj.v;
    var kjvText=vObj.t;
    var araText=araMap[verso]||"";
    var kjvHtml=processStrong(kjvText,showStr);
    var araHtml=processStrong(araText,showStr)||'<em style="color:var(--txt-s)">—</em>';
    var refsSideHtml="";
    if(showRef&&DB.refs){
      var sKey=abbr+"."+capNum+"."+verso;
      var refsA=DB.refs[sKey]||[];
      if(refsA.length){
        var pills=refsA.map(function(r){return '<span class="ref-pill" onclick="navToRef(\''+r+'\')">' +r+'</span>';}).join("");
        var refId='refs-'+bookEN.replace(/[^a-zA-Z0-9]/g,'_')+'-'+capNum+'-'+verso;
        refsSideHtml='<div class="v-refs-side collapsed" id="'+refId+'">'
          +'<div class="ref-label">Ref</div>'
          +'<button class="ref-toggle" onclick="toggleRefs(\''+refId+'\')">☰</button>'
          +'<div class="ref-list">'+pills+'</div></div>';
      }
    }
    html+='<div class="verse-row" style="animation-delay:'+(i*.02)+'s">';
    html+='<div class="v-num">'+verso+'</div>';
    if(par){
      html+='<div class="v-cols par">'
           +'<div class="v-side"><div class="v-text">'+araHtml+'</div></div>'
           +'<div class="v-side"><div class="v-text">'+kjvHtml+'</div></div>'
           +'</div>'+refsSideHtml;
    } else {
      html+='<div class="v-cols"><div class="v-side"><div class="v-text">'
           +(ver==="ara"?araHtml:kjvHtml)+'</div></div></div>'+refsSideHtml;
    }
    html+='</div>';
  });
  document.getElementById("versesPanel").innerHTML=html||'<div class="loading">Nenhum versículo.</div>';
}

function processStrong(text,showCode){
  if(!text) return "";
  var cls=showCode?"sw-code":"sw-code hidden";
  return text.replace(/\{?\(?([GH]\d+)\)?\}?/g,function(match,codigo){
    return '<span class="sw" onclick="openStrong(\''+codigo+'\')">'
           +'<span class="'+cls+'">'+codigo+'</span></span>';
  });
}

// ── BUSCA ──
function doSearch(){
  var q=document.getElementById("searchInput").value.trim();
  if(!q) return;
  var parts=q.split(/[\s:]+/);
  if(parts.length<3){alert("Formato: Livro Capítulo Verso\nEx: Gênesis 1 1");return;}
  var nome=parts.slice(0,parts.length-2).join(" ");
  var cap=Number(parts[parts.length-2]);
  var en=PT_EN[nome]||PT_EN[nome.charAt(0).toUpperCase()+nome.slice(1)]||nome;
  if(!DB.kjv[en]){en=nome.charAt(0).toUpperCase()+nome.slice(1);if(!DB.kjv[en]){alert("Livro não encontrado: "+nome);return;}}
  var slug=BOOK_SLUG[en]||en.toLowerCase();
  window.location.href=BASE+slug+"/"+cap+".html";
}

// ── POPUP STRONG ──
function openStrong(codigo){
  var d=DB.str[codigo];
  if(!d){alert("Código não encontrado: "+codigo);return;}
  document.getElementById("popCode").textContent=codigo;
  document.getElementById("popBadge").textContent=codigo.charAt(0)==="G"?"Grego":"Hebraico";
  document.getElementById("popOrig").textContent=d.l||"—";
  document.getElementById("popXlit").textContent=d.x||"—";
  document.getElementById("popPron").textContent=d.p||"—";
  document.getElementById("popDesc").textContent=d.d||"—";
  // Pronunciation button
  var pb=document.getElementById("popPronBtn");
  if(pb){pb.onclick=function(){pronounceStrong(d.x||d.l,codigo.charAt(0)==="G"?"el-GR":"he-IL");};}
  // Link to full page
  var pl=document.getElementById("popPageLink");
  if(pl){pl.href=BASE+"strong/"+codigo+".html";}
  document.getElementById("overlay").style.display="block";
  document.getElementById("popup").style.display="block";
}
function pronounceStrong(word,lang){
  if(!window.speechSynthesis){alert("Seu navegador não suporta síntese de voz.");return;}
  var u=new SpeechSynthesisUtterance(word);
  u.lang=lang; u.rate=0.75;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}
function closePopup(){
  document.getElementById("overlay").style.display="none";
  document.getElementById("popup").style.display="none";
}
document.addEventListener("keydown",function(e){if(e.key==="Escape")closePopup();});

function toggleRefs(id){var el=document.getElementById(id);if(el)el.classList.toggle('collapsed');}

function navToRef(refStr){
  var first=refStr.split("-")[0].trim();
  var m=first.match(/^(\d+\s*)?([A-Za-zÀ-ÿ]+)\s*[.\s]\s*(\d+)\s*[.\s]\s*(\d+)/);
  if(!m){alert("Formato não reconhecido: "+refStr);return;}
  var prefix=(m[1]||"").trim();
  var abrRaw=prefix?prefix+" "+m[2]:m[2];
  var cap=Number(m[3]);
  var livro=ABBR[abrRaw]||ABBR[abrRaw.replace(/\s+/g,"")];
  if(!livro){alert("Livro não reconhecido: "+abrRaw);return;}
  var slug=BOOK_SLUG[livro]||livro.toLowerCase();
  window.location.href=BASE+slug+"/"+cap+".html";
}


// ── BUSCA POR PALAVRA ──
var _dvText='', _dvRef='';

function searchWord(){
  var q=document.getElementById('wordSearchInput').value.trim().toLowerCase();
  if(q.length<2){alert("Digite pelo menos 2 letras.");return;}
  var results=[];
  var books=Object.keys(DB.kjv||{});
  outer:
  for(var bi=0;bi<books.length;bi++){
    var book=books[bi];
    var caps=Object.keys(DB.kjv[book]||{});
    for(var ci=0;ci<caps.length;ci++){
      var cap=caps[ci];
      var araArr=(DB.ara[book]||{})[cap]||[];
      var kjvArr=(DB.kjv[book]||{})[cap]||[];
      var araMap={};araArr.forEach(function(v){araMap[v.v]=v.t;});
      for(var vi=0;vi<kjvArr.length;vi++){
        var v=kjvArr[vi];
        var araT=(araMap[v.v]||'').toLowerCase().replace(/\{[^}]+\}/g,'');
        var kjvT=v.t.toLowerCase().replace(/\{[^}]+\}/g,'');
        if(araT.includes(q)||kjvT.includes(q)){
          var ptName=EN_PT[book]||book;
          var slug=BOOK_SLUG[book]||book.toLowerCase();
          results.push({book:ptName,cap:cap,verse:v.v,
            araText:(araMap[v.v]||'').replace(/\{[^}]+\}/g,''),
            href:BASE+slug+'/'+cap+'.html'});
          if(results.length>=50) break outer;
        }
      }
    }
  }
  renderWordResults(results,q);
}

function renderWordResults(results,q){
  var panel=document.getElementById('wordResultsPanel');
  if(!panel) return;
  if(!results.length){panel.innerHTML='<p style="color:var(--txt-s);padding:20px">Nenhum resultado encontrado.</p>';return;}
  var html='<div style="padding:10px 0 14px;font-size:.78rem;color:var(--txt-s)">'+results.length+(results.length>=50?' (primeiros 50)':'')+' resultado(s)</div>';
  results.forEach(function(r){
    var safe=r.araText.replace(/[<>]/g,'');
    var re2=new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');
    var hi=safe.replace(re2,'<mark style="background:rgba(201,168,76,.3);border-radius:2px">$1</mark>');
    html+='<div style="padding:10px 0;border-bottom:1px solid var(--parch-dd)">'
      +'<a href="'+r.href+'" style="font-family:Cinzel,serif;font-size:.82rem;color:var(--gold);font-weight:600;text-decoration:none">'+r.book+' '+r.cap+':'+r.verse+'</a>'
      +'<p style="font-family:Crimson Pro,serif;font-size:1rem;line-height:1.7;color:var(--txt);margin-top:3px">'+hi+'</p>'
      +'</div>';
  });
  panel.innerHTML=html;
  panel.style.display='block';
}

// ── VERSÍCULO DO DIA ──
var DAILY_VERSES=[
  {b:"John",c:"3",v:"16"},{b:"Psalms",c:"23",v:"1"},{b:"Romans",c:"8",v:"28"},
  {b:"Philippians",c:"4",v:"13"},{b:"Isaiah",c:"41",v:"10"},{b:"Jeremiah",c:"29",v:"11"},
  {b:"Proverbs",c:"3",v:"5"},{b:"Matthew",c:"6",v:"33"},{b:"Romans",c:"5",v:"8"},
  {b:"John",c:"14",v:"6"},{b:"Psalms",c:"119",v:"105"},{b:"Isaiah",c:"40",v:"31"},
  {b:"Matthew",c:"11",v:"28"},{b:"John",c:"10",v:"10"},{b:"Romans",c:"12",v:"2"},
  {b:"Ephesians",c:"2",v:"8"},{b:"Psalms",c:"46",v:"1"},{b:"1 Corinthians",c:"13",v:"4"},
  {b:"Galatians",c:"5",v:"22"},{b:"John",c:"1",v:"1"},{b:"Genesis",c:"1",v:"1"},
  {b:"Hebrews",c:"11",v:"1"},{b:"Matthew",c:"5",v:"3"},{b:"Romans",c:"3",v:"23"},
  {b:"John",c:"3",v:"36"},{b:"Psalms",c:"91",v:"1"},{b:"Isaiah",c:"53",v:"5"},
  {b:"Matthew",c:"28",v:"19"},{b:"John",c:"15",v:"5"},{b:"Romans",c:"6",v:"23"}
];

function initDailyVerse(){
  var dv=document.getElementById('dailyVerse');
  if(!dv||!DB.ara) return;
  var idx=Math.floor(Math.random()*DAILY_VERSES.length);
  var ref=DAILY_VERSES[idx];
  var araArr=(DB.ara[ref.b]||{})[ref.c]||[];
  var vObj=araArr.find(function(v){return v.v===ref.v;});
  if(!vObj) return;
  var text=vObj.t.replace(/\{[^}]+\}/g,'');
  var ptName=EN_PT[ref.b]||ref.b;
  var slug=BOOK_SLUG[ref.b]||ref.b.toLowerCase();
  var href=BASE+slug+'/'+ref.c+'.html';
  _dvText=text; _dvRef=ptName+' '+ref.c+':'+ref.v;
  dv.innerHTML='<div class="dv-text">"'+text+'"</div>'
    +'<div class="dv-ref"><a href="'+href+'">'+ptName+' '+ref.c+':'+ref.v+'</a></div>'
    +'<div class="dv-actions">'
    +'<button class="dv-btn" onclick="shareDV()">📤 Compartilhar</button>'
    +'<button class="dv-btn" onclick="initDailyVerse()">🔄 Outro</button>'
    +'</div>';
}

function shareDV(){
  var msg='"'+_dvText+'"\n— '+_dvRef+'\n\nBíblia Strong Interativa:\nhttps://voltemosapalavra1-bit.github.io/B-blia_Strong/';
  if(navigator.share){
    navigator.share({title:'Versículo do Dia',text:msg}).catch(function(){});
  } else if(navigator.clipboard){
    navigator.clipboard.writeText(msg).then(function(){alert('Copiado! Cole onde quiser.');});
  } else {
    window.open('https://wa.me/?text='+encodeURIComponent(msg),'_blank');
  }
}
