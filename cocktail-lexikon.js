<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>🍹 Cocktail Lexikon</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--acc:#c8a45a;--acc-rgb:200,164,90;--green:#4caf50;--red:#e05252;--gold:#f0c040;--blue:#40a0f0;--bg:#1a1a1a;--bg2:#222;--bg3:#2a2a2a;--border:#333;--border2:#3a3a3a;--text:#e8e8e8;--text2:#aaa;--text3:#666;--radius:8px;--shadow:0 4px 24px rgba(0,0,0,.5)}
body{background:var(--bg);color:var(--text);font-family:'Segoe UI',system-ui,sans-serif;font-size:14px;min-height:100vh}
#app{max-width:1200px;margin:0 auto;padding:12px}
button{font-family:inherit;cursor:pointer;border:none;outline:none}
input,select,textarea{font-family:inherit;outline:none;color:var(--text)}
.hdr{background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:4px}
.title{font-size:20px;font-weight:800;color:var(--acc);letter-spacing:.05em}
.sub{font-size:11px;color:var(--text3);margin-top:2px}
.badge{font-size:10px;padding:3px 10px;border-radius:20px;background:rgba(var(--acc-rgb),.15);color:var(--acc);border:1px solid rgba(var(--acc-rgb),.3)}
.badge.op{background:rgba(76,175,80,.12);color:var(--green);border-color:rgba(76,175,80,.3)}
.tabs{display:flex;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;margin-bottom:4px;flex-wrap:wrap}
.tab{padding:10px 16px;font-size:13px;cursor:pointer;background:transparent;color:var(--text2);border-bottom:2px solid transparent;transition:all .15s;white-space:nowrap;flex-shrink:0}
.tab:hover{color:var(--text)}.tab.on{color:var(--acc);border-bottom-color:var(--acc)}
.panel{background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden}
.bar{display:flex;align-items:center;gap:8px;padding:10px 14px;border-bottom:1px solid var(--border);flex-wrap:wrap;background:var(--bg3)}
.inp{background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:7px 11px;border-radius:6px;font-size:13px;transition:border-color .15s}
.inp:focus{border-color:var(--acc)}.inp.wide{flex:1;min-width:160px;max-width:300px}
.btn{font-size:12px;font-weight:500;padding:7px 14px;border-radius:6px;transition:all .15s;white-space:nowrap}
.btn.pri{background:var(--acc);color:#000}.btn.pri:hover{filter:brightness(1.15)}
.btn.ghost{background:transparent;color:var(--text2);border:1px solid var(--border)}.btn.ghost:hover{color:var(--text);background:var(--bg3)}
.btn.danger{background:rgba(200,0,0,.08);color:var(--red);border:1px solid rgba(200,0,0,.2);font-size:11px;padding:4px 8px}
.btn.danger:hover{background:rgba(200,0,0,.2)}.btn.sm{padding:4px 10px;font-size:11px}
.tag{display:inline-block;font-size:10px;padding:2px 7px;border-radius:5px;background:rgba(var(--acc-rgb),.1);color:var(--acc);border:1px solid rgba(var(--acc-rgb),.25);white-space:nowrap}
.tag.g{background:rgba(76,175,80,.1);color:var(--green);border-color:rgba(76,175,80,.3)}
.tag.gr{background:var(--bg3);color:var(--text3);border-color:var(--border)}
.tag.gd{background:rgba(240,192,64,.1);color:var(--gold);border-color:rgba(240,192,64,.3)}
.tag.bl{background:rgba(64,160,240,.1);color:var(--blue);border-color:rgba(64,160,240,.3)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px;padding:16px}
.card{background:var(--bg3);border:2px solid var(--border);border-radius:var(--radius);padding:14px;cursor:pointer;transition:border-color .15s,box-shadow .15s;position:relative;overflow:hidden}
.card:hover{border-color:var(--acc);box-shadow:0 2px 14px rgba(var(--acc-rgb),.14)}
.card.karte{border-color:rgba(76,175,80,.5)}.card.neu{border-color:var(--gold)!important}
.nbadge{position:absolute;top:0;left:0;background:var(--gold);color:#000;font-size:9px;font-weight:700;padding:2px 10px 2px 7px;border-radius:var(--radius) 0 var(--radius) 0;z-index:2}
.card-img{width:100%;height:90px;object-fit:cover;border-radius:5px;margin-bottom:8px;display:block}
.card-name{font-weight:700;font-size:14px;margin-bottom:5px;padding-right:22px}
.card-meta{font-size:10px;color:var(--text3);margin-bottom:4px;display:flex;gap:4px;flex-wrap:wrap;align-items:center}
.card-price{font-size:13px;font-weight:700;color:var(--acc);margin-top:7px}.card-price.man{color:var(--green)}
.card-acts{position:absolute;top:8px;right:8px;display:flex;gap:3px;opacity:0;transition:opacity .15s;z-index:3}
.card:hover .card-acts{opacity:1}.mwarn{font-size:10px;color:var(--red);margin-top:4px}
.wrap{overflow-x:auto;padding:12px}
table{width:100%;border-collapse:collapse}
th{padding:7px 10px;text-align:left;font-size:12px;color:var(--text3);font-weight:500;border-bottom:1px solid var(--border);background:var(--bg3);white-space:nowrap}
td{padding:7px 10px;border-bottom:1px solid var(--border2);font-size:13px;vertical-align:middle}
tr:hover td{background:rgba(255,255,255,.03)}
.det{padding:20px}.det-hero{width:100%;max-height:200px;object-fit:cover;border-radius:var(--radius);margin-bottom:16px;display:block}
.det-title{font-size:22px;font-weight:800}
.det-meta{font-size:12px;color:var(--text3);margin-top:5px;display:flex;gap:7px;flex-wrap:wrap;align-items:center}
.sec{margin-bottom:20px}
.sec-title{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);margin-bottom:8px;padding-bottom:4px;border-bottom:1px solid var(--border2);display:flex;align-items:center;justify-content:space-between}
.pbox{background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;display:flex;gap:20px;flex-wrap:wrap}
.pi{display:flex;flex-direction:column;gap:2px}.pi-l{font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.06em}
.pi-v{font-size:18px;font-weight:800;color:var(--acc)}.pi-v.man{color:var(--green)}.pi-v.sm{color:var(--text2);font-size:14px}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chip{background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius);padding:8px 12px;min-width:70px;text-align:center}
.chip.miss{border-color:var(--red);opacity:.6}.chip.bas{border-style:dashed;border-color:var(--blue)}
.chip-name{font-size:13px;font-weight:600}.chip-menge{font-size:11px;color:var(--acc);font-weight:700;margin-top:2px}
.steps{display:flex;flex-direction:column;gap:8px}.step{display:flex;gap:10px;align-items:flex-start}
.step-n{width:22px;height:22px;border-radius:50%;background:rgba(var(--acc-rgb),.15);color:var(--acc);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.tog{position:relative;display:inline-flex;align-items:center;gap:8px;cursor:pointer}
.tog input{display:none}
.tog-tr{width:32px;height:18px;border-radius:9px;background:var(--border);transition:background .2s;flex-shrink:0}
.tog input:checked+.tog-tr{background:var(--acc)}
.tog-th{position:absolute;left:2px;top:50%;transform:translateY(-50%);width:14px;height:14px;border-radius:50%;background:white;transition:transform .2s;pointer-events:none}
.tog input:checked~.tog-th{transform:translateY(-50%) translateX(14px)}
.settings{padding:20px;display:flex;flex-direction:column;gap:16px;max-width:480px}
.field{display:flex;flex-direction:column;gap:4px}.lbl{font-size:11px;color:var(--text3)}
.row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.ov{position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:1000;display:flex;align-items:center;justify-content:center;padding:16px}
.modal{background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);padding:22px;width:620px;max-width:100%;max-height:90vh;overflow-y:auto;box-shadow:var(--shadow);display:flex;flex-direction:column;gap:12px}
.modal .field{display:flex;flex-direction:column;gap:4px}.modal .lbl{font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.06em}
.modal .inp{background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:7px 10px;border-radius:6px;font-size:13px;width:100%}
.modal .inp:focus{border-color:var(--acc)}.modal .row{display:flex;gap:10px;align-items:flex-start;flex-wrap:wrap}
.modal .half{flex:1;min-width:120px;display:flex;flex-direction:column;gap:4px}
.modal .btn-row{display:flex;gap:8px;justify-content:flex-end;margin-top:6px}
.modal .sec-lbl{font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.08em;font-weight:600;padding-bottom:4px;border-bottom:1px solid var(--border2);margin-top:4px}
.modal .ing-row{display:flex;gap:6px;align-items:center;padding:5px 0;border-bottom:1px solid var(--border2);flex-wrap:wrap}
.modal .tog{position:relative;display:inline-flex;align-items:center;gap:8px;cursor:pointer}
.modal .tog input{display:none}.modal .tog-tr{width:32px;height:18px;border-radius:9px;background:var(--border);transition:background .2s;flex-shrink:0}
.modal .tog input:checked+.tog-tr{background:var(--acc)}
.modal .tog-th{position:absolute;left:2px;top:50%;transform:translateY(-50%);width:14px;height:14px;border-radius:50%;background:white;transition:transform .2s;pointer-events:none}
.modal .tog input:checked~.tog-th{transform:translateY(-50%) translateX(14px)}
.drop{position:fixed;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);z-index:2000;box-shadow:var(--shadow);min-width:200px;display:flex;flex-direction:column;overflow:hidden}
.drop-s{padding:7px 10px;border-bottom:1px solid var(--border)}
.drop-s input{width:100%;background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:5px 9px;border-radius:6px;font-size:13px}
.drop-l{overflow-y:auto;max-height:220px}
.ditem{padding:7px 14px;font-size:13px;cursor:pointer;color:var(--text2);display:flex;align-items:center;gap:6px}
.ditem:hover{background:var(--bg3);color:var(--text)}.ditem.sel{color:var(--acc);font-weight:500}
.dgrp{font-size:10px;color:var(--text3);letter-spacing:.08em;padding:7px 12px 2px;text-transform:uppercase;font-weight:600;background:var(--bg3)}
.list{padding:12px 16px;display:flex;flex-direction:column;gap:6px}
.list-item{display:flex;align-items:center;gap:8px;padding:8px 10px;background:var(--bg3);border:1px solid var(--border);border-radius:6px}
.list-name{flex:1;font-size:13px}.list-sub{font-size:10px;color:var(--text3)}
.kat-tree{padding:12px 16px;display:flex;flex-direction:column;gap:8px}
.kat-grp{background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden}
.kat-hdr{display:flex;align-items:center;gap:8px;padding:10px 14px;font-weight:600;background:var(--bg2)}
.kat-hn{flex:1;font-size:13px}.kat-subs{padding:4px 14px 10px 28px;display:flex;flex-direction:column;gap:4px}
.kat-sub{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text2);padding:3px 0}
.empty{padding:40px;text-align:center;color:var(--text3)}
.fpanel{background:var(--bg3);border-bottom:1px solid var(--border);padding:12px 14px;display:flex;flex-wrap:wrap;gap:10px;align-items:flex-end}
.fg{display:flex;flex-direction:column;gap:3px;min-width:110px}.flbl{font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.06em}
.fsel{background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:5px 8px;border-radius:6px;font-size:12px}
.subtabs{display:flex;gap:4px;padding:8px 14px;border-bottom:1px solid var(--border);flex-wrap:wrap;background:var(--bg2)}
.stab{padding:4px 12px;font-size:12px;cursor:pointer;border:1px solid var(--border);border-radius:20px;background:transparent;color:var(--text2);transition:all .15s}
.stab:hover{color:var(--text);border-color:var(--acc)}.stab.on{background:rgba(var(--acc-rgb),.15);color:var(--acc);border-color:var(--acc)}
.dbtn{width:100%;cursor:pointer;text-align:left;background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:7px 10px;border-radius:6px;font-size:13px}
.ds{margin-top:16px;padding-top:16px;border-top:1px solid var(--border2)}
</style>
</head>
<body>
<div id="app"><div style="padding:20px;color:#666">🍹 Laden…</div></div>
<script>
const LS={read(k){try{const v=localStorage.getItem(k);return v?JSON.parse(v):null;}catch{return null;}},write(k,v){localStorage.setItem(k,JSON.stringify(v));},del(k){localStorage.removeItem(k);}};
const K={C:"cl_c",I:"cl_i",B:"cl_b",A:"cl_a",KT:"cl_k",S:"cl_s",IMG:"cl_img_"};
function uid(p="x"){return p+Date.now()+Math.random().toString(36).slice(2,5);}
function nowISO(){return new Date().toISOString();}
function futureISO(){return new Date(Date.now()+30*24*60*60*1000).toISOString();}
function isNew(x){if(!x?.createdAt)return false;return(Date.now()-new Date(x.createdAt).getTime())<14*24*60*60*1000;}
function toN(p,u){return p/(1+u/100);}
function ppu(x){if(!x?.packPreis||!x?.packMenge)return 0;const n=x.bruttoFlag?toN(x.packPreis,x.ustSatz||19):x.packPreis;return n/x.packMenge;}
function calcK(c){let t=0;for(const ci of(c.ingredients||[])){if(ci.isCategory)continue;const s=ci.isBasic?S.basics.find(x=>x.id===ci.id):S.ingredients.find(x=>x.id===ci.id);if(s&&ci.menge)t+=ppu(s)*ci.menge;}return t;}
function calcR(k,m,u){if(!k||k<=0||m<=0)return 0;return(k/(1-m/100))*(1+u/100);}
function calcF(k,m,u){if(!k||k<=0||m<=0)return 0;return Math.ceil(Math.max(calcR(k,m,u),9)*2)/2;}
function calcS(k,m,u){if(!k||k<=0||m<=0)return 0;return Math.ceil(calcR(k,m,u)*2)/2;}
function fE(v){if(v==null||isNaN(v))return"–";return v.toFixed(2).replace(".",",")+" €";}
function fM(ml,cl){if(ml==null)return"–";return cl?(ml/10).toFixed(1).replace(".",",")+" cl":ml+" ml";}
function i2ml(v,cl){return cl?v*10:v;}function ml2i(ml,cl){return cl?ml/10:ml;}
function deriveTyp(c){if(c.typOverride)return c.typOverride;const sp=(c.ingredients||[]).filter(ci=>{if(ci.isCategory||ci.isBasic)return false;return S.ingredients.find(i=>i.id===ci.id)?.isSpirit;});if(!sp.length)return"Mocktail";return sp.every(ci=>S.ingredients.find(i=>i.id===ci.id)?.alkoholfrei)?"0,0%-Cocktail":"Cocktail";}
function getMiss(c){return(c.ingredients||[]).filter(ci=>!ci.isCategory&&!ci.isBasic&&S.ingredients.find(i=>i.id===ci.id)?.aufLager===false).map(ci=>S.ingredients.find(i=>i.id===ci.id)?.name||ci.id);}
function saveImg(n,d){LS.write(K.IMG+n,d);}function getImg(n){return LS.read(K.IMG+n);}
const DEF={accentColor:null,zielMarge:75,ust:19,editMode:false,useCl:false,showImagesGrid:true,mixerPreis:0.30,missingIngWarning:true};
const S={cocktails:[],ingredients:[],basics:[],ausstattung:{},kategorien:[],settings:{...DEF},tab:"cocktails",austSub:"glaeser",activeCocktail:null,search:"",ingSearch:"",ldSearch:"",basSearch:"",spirSearch:"",filterOpen:false,filters:{typ:"",karte:"ja",geschmack:"",zutatInkl:[],zutatExkl:[],lager:""},_ingF:"",_spirF:""};
let _drop=null;
function closeDrop(){if(_drop){_drop.remove();_drop=null;}}
function openDrop(anchor,items,onSel,ph="Suchen…",multi=false){
  closeDrop();const rect=anchor.getBoundingClientRect();
  const d=document.createElement("div");d.className="drop";
  const sb=window.innerHeight-rect.bottom;
  if(sb<260&&rect.top>260)d.style.bottom=(window.innerHeight-rect.top+2)+"px";else d.style.top=(rect.bottom+2)+"px";
  d.style.left=rect.left+"px";d.style.width=Math.max(rect.width,220)+"px";
  const sw=d.appendChild(document.createElement("div"));sw.className="drop-s";
  const si=sw.appendChild(document.createElement("input"));si.placeholder=ph;
  const list=d.appendChild(document.createElement("div"));list.className="drop-l";
  function render(q){list.innerHTML="";q=q.toLowerCase();let lG=null;
    for(const item of items){if(item.type==="group"){lG=item;continue;}if(q&&!item.label.toLowerCase().includes(q))continue;
      if(lG){const g=list.appendChild(document.createElement("div"));g.className="dgrp";g.textContent=lG.label;lG=null;}
      const el=list.appendChild(document.createElement("div"));el.className="ditem"+(item.selected?" sel":"");el.textContent=item.label;
      el.addEventListener("mousedown",ev=>{ev.preventDefault();onSel(item.value);if(!multi)closeDrop();else{item.selected=!item.selected;render(si.value);}});
    }
    if(!list.children.length){const e=list.appendChild(document.createElement("div"));e.className="ditem";e.style.pointerEvents="none";e.textContent="Keine Treffer";}
  }
  render("");si.addEventListener("input",ev=>render(ev.target.value));
  document.body.appendChild(d);_drop=d;setTimeout(()=>si.focus(),10);
  const out=ev=>{if(!d.contains(ev.target)&&ev.target!==anchor){closeDrop();document.removeEventListener("mousedown",out,true);}};
  setTimeout(()=>document.addEventListener("mousedown",out,true),10);
}
function el(tag,p={}){const e=document.createElement(tag);if(p.cls)e.className=p.cls;if(p.text)e.textContent=p.text;if(p.html)e.innerHTML=p.html;if(p.style)e.style.cssText=p.style;if(p.attr)Object.entries(p.attr).forEach(([k,v])=>e.setAttribute(k,v));return e;}
function mk(parent,tag,p={}){const e=el(tag,p);parent.appendChild(e);return e;}
function mkF(p,l){const f=mk(p,"div",{cls:"field"});if(l)mk(f,"div",{cls:"lbl",text:l});return f;}
function mkH(p,l){const h=mk(p,"div",{cls:"half"});if(l)mk(h,"div",{cls:"lbl",text:l});return h;}
function mkDB(p,t){return mk(p,"button",{cls:"dbtn",text:t});}
function mkTog(p,l,chk,cb){const lbl=mk(p,"label",{cls:"tog"});const inp=mk(lbl,"input");inp.type="checkbox";if(chk)inp.checked=true;mk(lbl,"div",{cls:"tog-tr"});mk(lbl,"div",{cls:"tog-th"});mk(lbl,"span",{text:l,style:"font-size:13px;color:var(--text)"});inp.addEventListener("change",ev=>cb(ev.target.checked));return inp;}
function confirmDel(btn,lbl,cb){if(btn.dataset.c==="1")cb();else{btn.dataset.c="1";btn.textContent="Sicher?";setTimeout(()=>{btn.dataset.c="";btn.textContent=lbl;},2500);}}
function showPrompt(title,label,ph,cb){
  const ov=mk(document.body,"div",{cls:"ov"});ov.style.zIndex="3000";
  const m=mk(ov,"div",{cls:"modal"});m.style.maxWidth="340px";
  mk(m,"div",{text:title,style:"font-weight:700"});
  const f=mkF(m,label);const inp=mk(f,"input",{cls:"inp"});inp.placeholder=ph;
  const br=mk(m,"div",{cls:"btn-row"});
  mk(br,"button",{cls:"btn ghost",text:"Abbrechen"}).addEventListener("click",()=>ov.remove());
  const ob=mk(br,"button",{cls:"btn pri",text:"OK"});
  ob.addEventListener("click",()=>{if(inp.value.trim()){ov.remove();cb(inp.value.trim());}});
  inp.addEventListener("keydown",ev=>{if(ev.key==="Enter")ob.click();if(ev.key==="Escape")ov.remove();});
  setTimeout(()=>inp.focus(),10);
}
function katItems(sel){return[{type:"item",label:"– Keine –",value:""},...S.kategorien.map(k=>({type:"item",label:k.name,value:k.name,selected:k.name===sel})),{type:"item",label:"+ Neue…",value:"__new__"}];}
function subItems(kat,sel){const k=S.kategorien.find(x=>x.name===kat);return[{type:"item",label:"– Keine –",value:""},...(k?.unterkategorien||[]).map(s=>({type:"item",label:s,value:s,selected:s===sel})),{type:"item",label:"+ Neue…",value:"__new__"}];}
function ensureKat(name){if(!S.kategorien.find(k=>k.name===name)){S.kategorien.push({id:uid("k"),name,unterkategorien:[],createdAt:nowISO()});LS.write(K.KT,S.kategorien);}}
function ensureSub(kat,sub){const k=S.kategorien.find(x=>x.name===kat);if(k&&!k.unterkategorien.includes(sub)){k.unterkategorien.push(sub);LS.write(K.KT,S.kategorien);}}
function rerender(){
  closeDrop();const app=document.getElementById("app");app.innerHTML="";
  if(S.settings.accentColor)document.documentElement.style.setProperty("--acc",S.settings.accentColor);
  const hdr=mk(app,"div",{cls:"hdr"});
  const hw=mk(hdr,"div");mk(hw,"div",{cls:"title",text:"🍹 Cocktail Lexikon"});
  mk(hw,"div",{cls:"sub",html:`<b style="color:var(--acc)">${S.cocktails.length}</b> Cocktails &nbsp;·&nbsp; <b style="color:var(--green)">${S.cocktails.filter(c=>c.aufKarte).length}</b> auf Karte`});
  const hr=mk(hdr,"div",{style:"display:flex;align-items:center;gap:10px"});
  mk(hr,"span",{cls:"badge"+(S.settings.editMode?"":" op"),text:S.settings.editMode?"✏ Editiermodus":"🍸 Betriebsmodus"});
  const tabs=mk(app,"div",{cls:"tabs"});
  [["cocktails","🍹 Cocktails"],["longdrinks","🥤 Longdrinks"],["spirits","🥃 Spirituosen"],["ingredients","🧴 Zutaten"],["basics","🍺 Basics"],["ausstattung","🔧 Ausstattung"],["settings","⚙ Einstellungen"]].forEach(([id,label])=>{
    const t=mk(tabs,"button",{cls:"tab"+(S.tab===id?" on":""),text:label});
    t.addEventListener("click",()=>{S.tab=id;S.activeCocktail=null;rerender();});
  });
  const panel=mk(app,"div",{cls:"panel"});
  if(S.tab==="cocktails")rCocktails(panel);
  else if(S.tab==="longdrinks")rLongdrinks(panel);
  else if(S.tab==="spirits")rSpirits(panel);
  else if(S.tab==="ingredients")rIngredients(panel);
  else if(S.tab==="basics")rBasics(panel);
  else if(S.tab==="ausstattung")rAust(panel);
  else if(S.tab==="settings")rSettings(panel);
}
function applyFilters(list){
  const f=S.filters,q=S.search.toLowerCase();
  return list.filter(c=>{
    if(q){const ok=c.name.toLowerCase().includes(q)||(c.kategorie||"").toLowerCase().includes(q)||(c.geschmack||[]).some(g=>g.toLowerCase().includes(q))||(c.ingredients||[]).some(ci=>{const ing=S.ingredients.find(i=>i.id===ci.id);return ing&&ing.name.toLowerCase().includes(q);});if(!ok)return false;}
    const typ=deriveTyp(c);if(f.typ&&typ!==f.typ)return false;if(f.karte==="ja"&&!c.aufKarte)return false;if(f.karte==="nein"&&c.aufKarte)return false;
    if(f.geschmack&&!(c.geschmack||[]).includes(f.geschmack))return false;
    if(f.zutatInkl.length&&!f.zutatInkl.every(id=>(c.ingredients||[]).some(ci=>ci.id===id)))return false;
    if(f.zutatExkl.length&&f.zutatExkl.some(id=>(c.ingredients||[]).some(ci=>ci.id===id)))return false;
    if(f.lager==="ok"&&getMiss(c).length>0)return false;return true;
  });
}
function rCocktails(panel){
  if(S.activeCocktail){rCocktailDetail(panel,S.cocktails.find(x=>x.id===S.activeCocktail));return;}
  const bar=mk(panel,"div",{cls:"bar"});
  if(S.settings.editMode)mk(bar,"button",{cls:"btn pri",text:"+ Neuer Cocktail"}).addEventListener("click",()=>openCocktailModal(null));
  const si=mk(bar,"input",{cls:"inp wide",attr:{placeholder:"Name, Zutat, Geschmack…",value:S.search}});
  si.addEventListener("input",ev=>{S.search=ev.target.value;refreshGrid();});
  const af=Object.values(S.filters).some(v=>Array.isArray(v)?v.length>0:v&&v!=="ja");
  const fb=mk(bar,"button",{cls:"btn "+(af?"pri":"ghost"),text:"⚡ Filter"});
  fb.addEventListener("click",()=>{S.filterOpen=!S.filterOpen;rerender();setTimeout(()=>si.focus(),30);});
  if(S.filterOpen){
    const fp=mk(panel,"div",{cls:"fpanel"});
    const gl=(S.ausstattung.geschmack||[]).map(g=>({value:g.name,label:g.name}));
    function fg(l){const g=mk(fp,"div",{cls:"fg"});mk(g,"div",{cls:"flbl",text:l});return g;}
    function fsel(parent,opts,val,cb){const s=mk(parent,"select",{cls:"fsel"});opts.forEach(([v,l])=>{const o=mk(s,"option",{text:l});o.value=v;if(v===val)o.selected=true;});s.addEventListener("change",ev=>{cb(ev.target.value);rerender();});return s;}
    fsel(fg("Typ"),[["","Alle"],["Cocktail","Cocktail"],["Mocktail","Mocktail"],["0,0%-Cocktail","0,0%"]],S.filters.typ,v=>S.filters.typ=v);
    fsel(fg("Auf Karte"),[["","Alle"],["ja","✓ Ja"],["nein","✗ Nein"]],S.filters.karte,v=>S.filters.karte=v);
    fsel(fg("Geschmack"),[["","Alle"],...gl.map(g=>[g.value,g.label])],S.filters.geschmack,v=>S.filters.geschmack=v);
    fsel(fg("Verfügbar"),[["","Alle"],["ok","Alle vorhanden"]],S.filters.lager,v=>S.filters.lager=v);
    mk(fp,"button",{cls:"btn ghost sm",text:"Zurücksetzen",style:"align-self:flex-end"}).addEventListener("click",()=>{S.filters={typ:"",karte:"ja",geschmack:"",zutatInkl:[],zutatExkl:[],lager:""};S.filterOpen=false;rerender();});
  }
  const gw=mk(panel,"div");
  function refreshGrid(){gw.innerHTML="";const fl=applyFilters(S.cocktails);const mixed=fl.some(c=>c.aufKarte)&&fl.some(c=>!c.aufKarte);if(!fl.length){mk(gw,"div",{cls:"empty",text:S.cocktails.length?"Keine Treffer.":"Noch keine Cocktails."});return;}const grid=mk(gw,"div",{cls:"grid"});fl.forEach(c=>rCard(grid,c,mixed));}
  refreshGrid();setTimeout(()=>si.focus(),20);
}
function rCard(grid,c,mixed){
  const kk=calcK(c),vf=calcF(kk,S.settings.zielMarge,S.settings.ust),vd=c.preis!=null?c.preis:vf,man=c.preis!=null,typ=deriveTyp(c),miss=getMiss(c),nw=isNew(c);
  const card=mk(grid,"div",{cls:"card"+(mixed&&c.aufKarte?" karte":"")+(nw?" neu":"")});
  if(nw){const nb=mk(card,"div",{cls:"nbadge",text:"NEW"});if(S.settings.editMode){nb.style.cursor="pointer";nb.addEventListener("click",async ev=>{ev.stopPropagation();c.createdAt=futureISO();LS.write(K.C,S.cocktails);rerender();});}}
  if(S.settings.editMode){const acts=mk(card,"div",{cls:"card-acts"});mk(acts,"button",{cls:"btn ghost sm",text:"✏"}).addEventListener("click",ev=>{ev.stopPropagation();openCocktailModal(c);});const db=mk(acts,"button",{cls:"btn danger",text:"✕"});db.addEventListener("click",ev=>{ev.stopPropagation();confirmDel(db,"✕",()=>{S.cocktails=S.cocktails.filter(x=>x.id!==c.id);LS.write(K.C,S.cocktails);rerender();});});}
  if(S.settings.showImagesGrid){const url=getImg(c.name);if(url){const img=mk(card,"img",{cls:"card-img"});img.src=url;}}
  mk(card,"div",{cls:"card-name",text:c.name});
  const meta=mk(card,"div",{cls:"card-meta"});
  if(c.kategorie)mk(meta,"span",{cls:"tag",text:c.kategorie+(c.unterkategorie?" › "+c.unterkategorie:"")});
  mk(meta,"span",{cls:"tag "+(typ==="Mocktail"?"bl":typ==="0,0%-Cocktail"?"g":"gr"),text:typ});
  if(c.geschmack?.length){const gr=mk(card,"div",{style:"display:flex;gap:4px;flex-wrap:wrap;margin-bottom:4px"});c.geschmack.forEach(g=>mk(gr,"span",{cls:"tag gd",text:g}));}
  if(c.deko)mk(card,"div",{text:"🌿 "+c.deko,style:"font-size:10px;color:var(--text2);margin-top:4px"});
  if(miss.length&&S.settings.missingIngWarning)mk(card,"div",{cls:"mwarn",text:"⚠ Fehlt: "+miss.join(", ")});
  if(vd>0)mk(card,"div",{cls:"card-price"+(man?" man":""),text:fE(vd)+(man?"":" *")});
  card.addEventListener("click",()=>{S.activeCocktail=c.id;rerender();});
}
function rCocktailDetail(panel,c){
  if(!c){S.activeCocktail=null;rerender();return;}
  const kk=calcK(c),vr=calcR(kk,S.settings.zielMarge,S.settings.ust),vf=calcF(kk,S.settings.zielMarge,S.settings.ust),man=c.preis!=null,vd=man?c.preis:vf,typ=deriveTyp(c),miss=getMiss(c);
  const bb=mk(panel,"div",{cls:"bar",style:"background:var(--bg3)"});
  mk(bb,"button",{cls:"btn ghost sm",text:"← Zurück"}).addEventListener("click",()=>{S.activeCocktail=null;rerender();});
  mk(bb,"span",{text:c.name,style:"flex:1;font-weight:700"});
  if(S.settings.editMode)mk(bb,"button",{cls:"btn ghost sm",text:"✏ Bearbeiten"}).addEventListener("click",()=>openCocktailModal(c));
  const ul=mk(bb,"label",{cls:"tog"});const ui=mk(ul,"input");ui.type="checkbox";if(S.settings.useCl)ui.checked=true;mk(ul,"div",{cls:"tog-tr"});mk(ul,"div",{cls:"tog-th"});mk(ul,"span",{text:S.settings.useCl?"cl":"ml",style:"font-size:11px;color:var(--text2)"});
  ui.addEventListener("change",ev=>{S.settings.useCl=ev.target.checked;LS.write(K.S,S.settings);rerender();});
  const det=mk(panel,"div",{cls:"det"});
  const imgUrl=getImg(c.name);if(imgUrl){const img=mk(det,"img",{cls:"det-hero"});img.src=imgUrl;img.alt=c.name;}
  mk(det,"div",{cls:"det-title",text:c.name});
  const meta=mk(det,"div",{cls:"det-meta"});
  if(c.kategorie)mk(meta,"span",{cls:"tag",text:c.kategorie+(c.unterkategorie?" › "+c.unterkategorie:"")});
  mk(meta,"span",{cls:"tag "+(typ==="Mocktail"?"bl":typ==="0,0%-Cocktail"?"g":"gr"),text:typ});
  if(c.glas)mk(meta,"span",{text:"🥃 "+c.glas});if(c.eis)mk(meta,"span",{text:"🧊 "+c.eis});
  if(c.methode)mk(meta,"span",{cls:"tag gr",text:c.methode});
  mk(meta,"span",{cls:"tag "+(c.aufKarte?"g":"gr"),text:c.aufKarte?"✓ Auf Karte":"Nicht auf Karte"});
  if(isNew(c))mk(meta,"span",{cls:"tag gd",text:"✦ NEU"});
  if(c.geschmack?.length){const gs=mk(det,"div",{cls:"sec"});mk(gs,"div",{cls:"sec-title",html:"<span>Geschmacksprofil</span>"});const gr=mk(gs,"div",{style:"display:flex;gap:6px;flex-wrap:wrap"});c.geschmack.forEach(g=>mk(gr,"span",{cls:"tag gd",text:g}));}
  if(c.deko){const ds=mk(det,"div",{cls:"sec"});mk(ds,"div",{cls:"sec-title",html:"<span>🌿 Dekoration</span>"});mk(ds,"div",{text:c.deko,style:"background:var(--bg3);border:1px solid var(--border);border-radius:6px;padding:10px 14px;font-size:13px"});}
  const ps=mk(det,"div",{cls:"sec"});mk(ps,"div",{cls:"sec-title",html:"<span>Preis</span>"});
  const pb=mk(ps,"div",{cls:"pbox"});
  if(S.settings.editMode&&kk>0){const p1=mk(pb,"div",{cls:"pi"});mk(p1,"div",{cls:"pi-l",text:"Wareneinsatz"});mk(p1,"div",{cls:"pi-v sm",text:fE(kk)});mk(p1,"div",{text:"Netto",style:"font-size:10px;color:var(--text3)"});const p2=mk(pb,"div",{cls:"pi"});mk(p2,"div",{cls:"pi-l",text:`Errechnet (${S.settings.zielMarge}%)`});mk(p2,"div",{cls:"pi-v sm",text:fE(vr)});mk(p2,"div",{text:"Brutto",style:"font-size:10px;color:var(--text3)"});}
  const p4=mk(pb,"div",{cls:"pi"});mk(p4,"div",{cls:"pi-l",text:man?"Manueller Preis":"VK Preis"});mk(p4,"div",{cls:"pi-v"+(man?" man":""),text:fE(vd)});mk(p4,"div",{text:"Brutto",style:"font-size:10px;color:var(--text3)"});
  if(miss.length)mk(det,"div",{html:`⚠ <b>Nicht verfügbar:</b> ${miss.join(", ")}`,style:"color:var(--red);font-size:12px;margin-bottom:10px;padding:8px 12px;background:rgba(224,82,82,.08);border-radius:6px;border:1px solid rgba(224,82,82,.2)"});
  if(c.ingredients?.length){const is=mk(det,"div",{cls:"sec"});mk(is,"div",{cls:"sec-title",html:"<span>Zutaten</span>"});const chips=mk(is,"div",{cls:"chips"});for(const ci of c.ingredients){let name,isMiss=false,isBasic=ci.isBasic,isCat=ci.isCategory;if(isCat)name="["+ci.cat+"]";else if(isBasic){const b=S.basics.find(x=>x.id===ci.id);name=b?b.name:ci.id;}else{const ing=S.ingredients.find(i=>i.id===ci.id);name=ing?ing.name:ci.id;isMiss=ing&&ing.aufLager===false;}const chip=mk(chips,"div",{cls:"chip"+(isMiss?" miss":"")+(isBasic?" bas":"")});mk(chip,"div",{cls:"chip-name",text:name});if(ci.menge)mk(chip,"div",{cls:"chip-menge",text:fM(ci.menge,S.settings.useCl)});}}
  const steps=(c.zubereitung||"").split("\n").filter(s=>s.trim());
  if(steps.length){const zs=mk(det,"div",{cls:"sec"});const zt=mk(zs,"div",{cls:"sec-title"});mk(zt,"span",{text:"Zubereitung"});let open=false;const tb=mk(zt,"button",{cls:"btn ghost sm",text:"▼ Anzeigen"});const sl=mk(zs,"div",{cls:"steps",style:"display:none"});steps.forEach((s,i)=>{const row=mk(sl,"div",{cls:"step"});mk(row,"div",{cls:"step-n",text:String(i+1)});mk(row,"div",{text:s.trim(),style:"font-size:13px;line-height:1.5"});});tb.addEventListener("click",()=>{open=!open;sl.style.display=open?"flex":"none";tb.textContent=open?"▲ Ausblenden":"▼ Anzeigen";});}
  if(c.notizen){const ns=mk(det,"div",{cls:"sec"});mk(ns,"div",{cls:"sec-title",html:"<span>Notizen</span>"});mk(ns,"div",{text:c.notizen,style:"font-size:13px;color:var(--text2);white-space:pre-wrap;padding:8px;background:var(--bg3);border-radius:6px"});}
}
function openCocktailModal(ex){
  const isN=!ex;const c=ex?JSON.parse(JSON.stringify(ex)):{id:uid("c"),name:"",kategorie:"",unterkategorie:"",methode:"",glas:"",eis:"",deko:"",zubereitung:"",notizen:"",aufKarte:false,ingredients:[],geschmack:[],typOverride:"",preis:null,createdAt:nowISO(),updatedAt:nowISO()};
  const ov=mk(document.body,"div",{cls:"ov"});const m=mk(ov,"div",{cls:"modal"});
  mk(m,"div",{text:isN?"Neuer Cocktail":"Cocktail bearbeiten",style:"font-weight:700"});
  const fn=mkF(m,"Name *");const ni=mk(fn,"input",{cls:"inp"});ni.value=c.name;ni.addEventListener("input",ev=>c.name=ev.target.value);
  const r0=mk(m,"div",{cls:"row"});
  const hk=mkH(r0,"Kategorie");const kb=mkDB(hk,c.kategorie||"– Kategorie –");
  kb.addEventListener("click",()=>openDrop(kb,katItems(c.kategorie),val=>{if(val==="__new__"){showPrompt("Neue Kategorie","Name","z.B. Sour",name=>{ensureKat(name);c.kategorie=name;kb.textContent=name;});return;}c.kategorie=val;c.unterkategorie="";kb.textContent=val||"– Kategorie –";sb.textContent="– Unterkategorie –";},"Kategorie…"));
  const hs=mkH(r0,"Unterkategorie");const sb=mkDB(hs,c.unterkategorie||"– Unterkategorie –");
  sb.addEventListener("click",()=>{if(!c.kategorie)return;openDrop(sb,subItems(c.kategorie,c.unterkategorie),val=>{if(val==="__new__"){showPrompt("Neue Unterkategorie","Name","",name=>{ensureSub(c.kategorie,name);c.unterkategorie=name;sb.textContent=name;});return;}c.unterkategorie=val;sb.textContent=val||"– Unterkategorie –";},"Unterkategorie…");});
  const r1=mk(m,"div",{cls:"row"});
  const hm=mkH(r1,"Methode");const mb=mkDB(hm,c.methode||"– Methode –");mb.addEventListener("click",()=>openDrop(mb,[{type:"item",label:"– Keine –",value:""},...(S.ausstattung.methoden||[]).map(x=>({type:"item",label:x.name,value:x.name,selected:x.name===c.methode}))],val=>{c.methode=val;mb.textContent=val||"– Methode –";}));
  const hg=mkH(r1,"Glas");const gb=mkDB(hg,c.glas||"– Glas –");gb.addEventListener("click",()=>openDrop(gb,[{type:"item",label:"– Keins –",value:""},...(S.ausstattung.glaeser||[]).map(x=>({type:"item",label:x.name,value:x.name,selected:x.name===c.glas}))],val=>{c.glas=val;gb.textContent=val||"– Glas –";}));
  const r2=mk(m,"div",{cls:"row"});
  const he=mkH(r2,"Eis");const eb=mkDB(he,c.eis||"– Eis –");eb.addEventListener("click",()=>openDrop(eb,[{type:"item",label:"– Kein –",value:""},...(S.ausstattung.eistypen||[]).map(x=>({type:"item",label:x.name,value:x.name,selected:x.name===c.eis}))],val=>{c.eis=val;eb.textContent=val||"– Eis –";}));
  const hd=mkH(r2,"Dekoration");const di=mk(hd,"input",{cls:"inp"});di.value=c.deko||"";di.addEventListener("input",ev=>c.deko=ev.target.value);
  const gf=mkF(m,"Geschmacksprofil");const gw=mk(gf,"div",{style:"display:flex;gap:6px;flex-wrap:wrap;padding:6px 0"});
  (S.ausstattung.geschmack||[]).forEach(g=>{const sel=(c.geschmack||[]).includes(g.name);const btn=mk(gw,"button",{cls:"btn sm "+(sel?"pri":"ghost"),text:g.name});btn.addEventListener("click",()=>{if(!c.geschmack)c.geschmack=[];const idx=c.geschmack.indexOf(g.name);if(idx>=0){c.geschmack.splice(idx,1);btn.className="btn sm ghost";}else{c.geschmack.push(g.name);btn.className="btn sm pri";}});});
  const r3=mk(m,"div",{cls:"row"});
  const hp=mkH(r3,"Manueller VK-Preis (Brutto, leer=auto)");const pi=mk(hp,"input",{cls:"inp"});pi.type="number";pi.step="0.5";pi.value=c.preis!=null?c.preis:"";pi.placeholder="leer = automatisch";pi.addEventListener("input",ev=>{const v=parseFloat(ev.target.value);c.preis=isNaN(v)?null:v;});
  const ht=mkH(r3,"Typ (leer=auto)");const tb2=mkDB(ht,c.typOverride||"– Automatisch –");tb2.addEventListener("click",()=>openDrop(tb2,[{type:"item",label:"– Automatisch –",value:""},{type:"item",label:"Cocktail",value:"Cocktail"},{type:"item",label:"Mocktail",value:"Mocktail"},{type:"item",label:"0,0%-Cocktail",value:"0,0%-Cocktail"}],val=>{c.typOverride=val;tb2.textContent=val||"– Automatisch –";}));
  const tr0=mk(m,"div",{style:"display:flex;gap:16px;flex-wrap:wrap"});mkTog(tr0,"Auf der Karte",c.aufKarte,v=>c.aufKarte=v);
  const imgF=mkF(m,"Foto");const imgInp=mk(imgF,"input");imgInp.type="file";imgInp.accept="image/*";imgInp.className="inp";
  const imgPrev=mk(imgF,"div");const exUrl=getImg(c.name);if(exUrl){const img=mk(imgPrev,"img");img.src=exUrl;img.style.cssText="width:100%;max-height:140px;object-fit:cover;border-radius:6px;margin-top:6px;border:1px solid var(--border)";}
  imgInp.addEventListener("change",ev=>{const file=ev.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=e=>{saveImg(c.name,e.target.result);imgPrev.innerHTML="";const img=mk(imgPrev,"img");img.src=e.target.result;img.style.cssText="width:100%;max-height:140px;object-fit:cover;border-radius:6px;margin-top:6px;border:1px solid var(--border)";};reader.readAsDataURL(file);});
  mk(m,"div",{cls:"sec-lbl",text:"Zutaten"});const il=mk(m,"div",{style:"display:flex;flex-direction:column;gap:2px"});
  function renderIngRows(){il.innerHTML="";c.ingredients.forEach((ci,idx)=>{const row=mk(il,"div",{cls:"ing-row"});const tb3=mk(row,"button",{style:"font-size:10px;padding:4px 8px;background:var(--bg3);border:1px solid var(--border);color:var(--text2);border-radius:6px;cursor:pointer;white-space:nowrap;flex-shrink:0",text:ci.isBasic?"Basic":ci.isCategory?"Kat.":"Zutat"});tb3.addEventListener("click",()=>{if(ci.isCategory){ci.isCategory=false;ci.isBasic=false;}else if(ci.isBasic){ci.isBasic=false;ci.isCategory=true;}else{ci.isBasic=true;}ci.id="";ci.cat="";renderIngRows();});const ib=mk(row,"button",{style:"flex:1;cursor:pointer;text-align:left;background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:6px 10px;border-radius:6px;font-family:inherit;font-size:13px;min-width:80px"});if(ci.isCategory){ib.textContent=ci.cat?"["+ci.cat+"]":"– Kategorie –";ib.addEventListener("click",()=>{const its=[{type:"item",label:"– Keine –",value:""},...S.kategorien.map(k=>({type:"item",label:k.name,value:k.name}))];openDrop(ib,its,val=>{ci.cat=val;renderIngRows();},"Kategorie…");});}else if(ci.isBasic){const b=S.basics.find(x=>x.id===ci.id);ib.textContent=b?b.name:"– Basic –";ib.addEventListener("click",()=>openDrop(ib,[{type:"item",label:"– Keine –",value:""},...S.basics.map(b=>({type:"item",label:b.name,value:b.id,selected:b.id===ci.id}))],val=>{ci.id=val;renderIngRows();},"Basic…"));}else{const ing=S.ingredients.find(i=>i.id===ci.id);ib.textContent=ing?ing.name:"– Zutat –";ib.addEventListener("click",()=>{const its=[{type:"item",label:"– Keine –",value:""}];const grp={};S.ingredients.forEach(i=>{const c2=i.kategorie||"Sonstige";if(!grp[c2])grp[c2]=[];grp[c2].push(i);});Object.entries(grp).forEach(([cat,ings])=>{its.push({type:"group",label:cat});ings.forEach(i=>its.push({type:"item",label:i.name+(i.aufLager===false?" ✗":""),value:i.id,selected:i.id===ci.id}));});openDrop(ib,its,val=>{ci.id=val;renderIngRows();},"Zutat…");});}const dm2=ml2i(ci.menge,S.settings.useCl);const mi2=mk(row,"input",{style:"width:70px;background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:6px 8px;border-radius:6px;font-size:13px"});mi2.type="number";mi2.min="0";mi2.value=dm2||"";mi2.placeholder="Menge";mi2.addEventListener("input",ev=>{ci.menge=i2ml(parseFloat(ev.target.value)||0,S.settings.useCl);});mk(row,"span",{text:S.settings.useCl?"cl":"ml",style:"font-size:10px;color:var(--text3);min-width:20px"});const db=mk(row,"button",{cls:"btn danger",text:"✕"});db.addEventListener("click",()=>{c.ingredients.splice(idx,1);renderIngRows();});});const ab=mk(il,"button",{style:"margin-top:4px;font-size:12px;padding:5px 10px;background:transparent;border:1px dashed var(--border);color:var(--text2);border-radius:6px;cursor:pointer",text:"+ Zutat hinzufügen"});ab.addEventListener("click",()=>{c.ingredients.push({id:"",menge:0,isCategory:false,isBasic:false});renderIngRows();});}
  renderIngRows();
  mk(m,"div",{cls:"sec-lbl",text:"Zubereitung (eine Zeile = ein Schritt)"});const zt=mk(m,"textarea",{cls:"inp"});zt.style.cssText="resize:vertical;min-height:80px;width:100%";zt.value=c.zubereitung||"";zt.addEventListener("input",ev=>c.zubereitung=ev.target.value);
  mk(m,"div",{cls:"sec-lbl",text:"Notizen"});const nt=mk(m,"textarea",{cls:"inp"});nt.style.cssText="resize:vertical;min-height:50px;width:100%";nt.value=c.notizen||"";nt.addEventListener("input",ev=>c.notizen=ev.target.value);
  const br=mk(m,"div",{cls:"btn-row"});mk(br,"button",{cls:"btn ghost",text:"Abbrechen"}).addEventListener("click",()=>ov.remove());
  const svBtn=mk(br,"button",{cls:"btn pri",text:isN?"Erstellen":"Speichern"});
  svBtn.addEventListener("click",()=>{if(!c.name.trim()){ni.focus();return;}c.ingredients=c.ingredients.filter(ci=>ci.isCategory?ci.cat:ci.isBasic?ci.id:ci.id);c.updatedAt=nowISO();if(isN)S.cocktails.push(c);else{const idx=S.cocktails.findIndex(x=>x.id===c.id);if(idx>=0)S.cocktails[idx]=c;}LS.write(K.C,S.cocktails);ov.remove();S.activeCocktail=c.id;rerender();});
  ov.addEventListener("mousedown",ev=>{if(ev.target===ov)ov.remove();});setTimeout(()=>ni.focus(),10);
}
function rLongdrinks(panel){
  const spirits=S.ingredients.filter(i=>i.isSpirit&&i.longdrink);
  const bar=mk(panel,"div",{cls:"bar"});mk(bar,"span",{text:`${spirits.length} Spirits als Longdrink · Mixer: ${fE(S.settings.mixerPreis)} · 5cl`,style:"font-size:11px;color:var(--text3)"});
  const si=mk(bar,"input",{cls:"inp wide",attr:{placeholder:"Spirituose suchen…",value:S.ldSearch||""}});si.addEventListener("input",ev=>{S.ldSearch=ev.target.value;refresh();});
  const wrap=mk(panel,"div",{cls:"wrap"});
  function refresh(){wrap.innerHTML="";let list=spirits;const q=(S.ldSearch||"").toLowerCase();if(q)list=list.filter(i=>i.name.toLowerCase().includes(q)||(i.kategorie||"").toLowerCase().includes(q));if(!list.length){mk(wrap,"div",{cls:"empty",text:"Keine Spirituosen mit Longdrink-Flag."});return;}const tbl=mk(wrap,"table");const hr=mk(mk(tbl,"thead"),"tr");["Name","Kategorie","Mixer","5cl WE","Errechnet","VK Preis","Auf Karte"].forEach(h=>mk(hr,"th",{text:h}));const tbody=mk(tbl,"tbody");list.forEach(ing=>{const we=ppu(ing)*50+(S.settings.mixerPreis||0);const vkC=calcS(we,S.settings.zielMarge,S.settings.ust);const vd=ing.longdrinkPreis!=null?ing.longdrinkPreis:vkC,man=ing.longdrinkPreis!=null;const tr=mk(tbody,"tr");mk(tr,"td",{text:ing.name+(isNew(ing)?" ✦":""),style:"font-weight:600"});mk(mk(tr,"td"),"span",{cls:"tag gr",text:ing.kategorie||"–"});const mtd=mk(tr,"td");if((ing.longdrinkMixers||[]).length){const w=mk(mtd,"div",{style:"display:flex;gap:4px;flex-wrap:wrap"});(ing.longdrinkMixers||[]).forEach(mm=>mk(w,"span",{cls:"tag gr",text:mm}));}else mk(mtd,"span",{text:"Standard",style:"font-size:11px;color:var(--text3)"});mk(tr,"td",{text:fE(we),style:"font-size:11px"});mk(tr,"td",{text:man?"–":fE(vkC),style:"color:var(--acc);font-size:11px"});mk(tr,"td",{text:fE(vd)+(man?"":" *"),style:"font-weight:700;"+(man?"color:var(--green)":"color:var(--acc)")});mk(mk(tr,"td"),"span",{cls:"tag "+(ing.longdrinkAufKarte?"g":"gr"),text:ing.longdrinkAufKarte?"✓":"–"});});}
  refresh();setTimeout(()=>si.focus(),20);
}
function rSpirits(panel){
  const bar=mk(panel,"div",{cls:"bar"});if(S.settings.editMode)mk(bar,"button",{cls:"btn pri",text:"+ Neue Spirituose"}).addEventListener("click",()=>openIngModal(null,true));
  const si=mk(bar,"input",{cls:"inp wide",attr:{placeholder:"Suchen…",value:S.spirSearch||""}});si.addEventListener("input",ev=>{S.spirSearch=ev.target.value;refresh();});
  const fs=mk(bar,"select",{cls:"fsel"});[["","Alle"],["lager","Auf Lager"],["fehl","Fehlend"]].forEach(([v,l])=>{const o=mk(fs,"option",{text:l});o.value=v;if(v===S._spirF)o.selected=true;});fs.addEventListener("change",ev=>{S._spirF=ev.target.value;refresh();});
  const wrap=mk(panel,"div",{cls:"wrap"});
  function refresh(){wrap.innerHTML="";let ings=S.ingredients.filter(i=>i.isSpirit);const q=(S.spirSearch||"").toLowerCase();if(q)ings=ings.filter(i=>i.name.toLowerCase().includes(q)||(i.kategorie||"").toLowerCase().includes(q));if(S._spirF==="lager")ings=ings.filter(i=>i.aufLager!==false);if(S._spirF==="fehl")ings=ings.filter(i=>i.aufLager===false);if(!ings.length){mk(wrap,"div",{cls:"empty",text:"Keine Spirituosen."});return;}const tbl=mk(wrap,"table");const hr=mk(mk(tbl,"thead"),"tr");const cols=["Name","Kategorie"];if(S.settings.editMode)cols.push("Packung","EK netto","€/ml","2cl WE","Shot VK");cols.push("Flags","Lager");if(S.settings.editMode)cols.push("");cols.forEach(h=>mk(hr,"th",{text:h}));const tbody=mk(tbl,"tbody");ings.forEach(ing=>{const p=ppu(ing),v2cl=p*20;const shotVK=ing.shotPreisOverride!=null?ing.shotPreisOverride:calcS(v2cl,S.settings.zielMarge,S.settings.ust);const tr=mk(tbody,"tr");mk(tr,"td",{text:ing.name+(isNew(ing)?" ✦":""),style:"font-weight:600"});const kc=mk(tr,"td");if(ing.kategorie)mk(kc,"span",{cls:"tag gr",text:ing.kategorie});if(ing.unterkategorie)mk(kc,"span",{text:"› "+ing.unterkategorie,style:"font-size:10px;color:var(--text3);margin-left:4px"});if(S.settings.editMode){mk(tr,"td",{text:ing.packMenge?`${ing.packMenge} ${ing.einheit}`:"–",style:"font-size:11px"});mk(tr,"td",{text:ing.packPreis?fE(ing.bruttoFlag?toN(ing.packPreis,ing.ustSatz||19):ing.packPreis):"–",style:"font-size:11px"});mk(tr,"td",{text:p>0?(p*100).toFixed(3)+"ct":"–",style:"color:var(--acc);font-size:11px"});mk(tr,"td",{text:v2cl>0?fE(v2cl):"–",style:"font-size:11px"});mk(tr,"td",{text:shotVK>0?fE(shotVK)+(ing.shotPreisOverride!=null?" ✓":" *"):"–",style:"color:var(--acc);font-weight:600;font-size:11px"});}const fw=mk(mk(tr,"td"),"div",{style:"display:flex;gap:4px;flex-wrap:wrap"});if(ing.alkoholfrei)mk(fw,"span",{cls:"tag bl",text:"0,0%"});if(ing.longdrink)mk(fw,"span",{cls:"tag g",text:"Longdrink"});const lt=mk(tr,"td");const ll=mk(lt,"label",{cls:"tog"});const li=mk(ll,"input");li.type="checkbox";if(ing.aufLager!==false)li.checked=true;mk(ll,"div",{cls:"tog-tr"});mk(ll,"div",{cls:"tog-th"});li.addEventListener("change",ev=>{ing.aufLager=ev.target.checked;LS.write(K.I,S.ingredients);});if(S.settings.editMode){const aw=mk(mk(tr,"td"),"div",{style:"display:flex;gap:4px"});mk(aw,"button",{cls:"btn ghost sm",text:"✏"}).addEventListener("click",()=>openIngModal(ing));const db=mk(aw,"button",{cls:"btn danger",text:"✕"});db.addEventListener("click",()=>confirmDel(db,"✕",()=>{S.ingredients=S.ingredients.filter(x=>x.id!==ing.id);LS.write(K.I,S.ingredients);refresh();}));}});}
  refresh();setTimeout(()=>si.focus(),20);
}
function rIngredients(panel){
  const bar=mk(panel,"div",{cls:"bar"});if(S.settings.editMode)mk(bar,"button",{cls:"btn pri",text:"+ Neue Zutat"}).addEventListener("click",()=>openIngModal(null));
  const si=mk(bar,"input",{cls:"inp wide",attr:{placeholder:"Suchen…",value:S.ingSearch||""}});si.addEventListener("input",ev=>{S.ingSearch=ev.target.value;refresh();});
  const fs=mk(bar,"select",{cls:"fsel"});[["","Alle"],["lager","Auf Lager"],["fehl","Fehlend"]].forEach(([v,l])=>{const o=mk(fs,"option",{text:l});o.value=v;if(v===S._ingF)o.selected=true;});fs.addEventListener("change",ev=>{S._ingF=ev.target.value;refresh();});
  const wrap=mk(panel,"div",{cls:"wrap"});
  function refresh(){wrap.innerHTML="";let ings=S.ingredients.filter(i=>!i.isSpirit);const q=(S.ingSearch||"").toLowerCase();if(q)ings=ings.filter(i=>i.name.toLowerCase().includes(q)||(i.kategorie||"").toLowerCase().includes(q));if(S._ingF==="lager")ings=ings.filter(i=>i.aufLager!==false);if(S._ingF==="fehl")ings=ings.filter(i=>i.aufLager===false);if(!ings.length){mk(wrap,"div",{cls:"empty",text:"Keine Treffer."});return;}const tbl=mk(wrap,"table");const hr=mk(mk(tbl,"thead"),"tr");const cols=["Name","Kategorie"];if(S.settings.editMode)cols.push("Packung","EK netto","€/Einheit");cols.push("Lager");if(S.settings.editMode)cols.push("");cols.forEach(h=>mk(hr,"th",{text:h}));const tbody=mk(tbl,"tbody");ings.forEach(ing=>{const p=ppu(ing);const tr=mk(tbody,"tr");mk(tr,"td",{text:ing.name+(isNew(ing)?" ✦":""),style:"font-weight:600"});const kc=mk(tr,"td");if(ing.kategorie)mk(kc,"span",{cls:"tag gr",text:ing.kategorie});if(ing.unterkategorie)mk(kc,"span",{text:"› "+ing.unterkategorie,style:"font-size:10px;color:var(--text3);margin-left:4px"});if(S.settings.editMode){mk(tr,"td",{text:ing.packMenge?`${ing.packMenge} ${ing.einheit}`:"–",style:"font-size:11px"});mk(tr,"td",{text:ing.packPreis?fE(ing.bruttoFlag?toN(ing.packPreis,ing.ustSatz||19):ing.packPreis):"–",style:"font-size:11px"});mk(tr,"td",{text:p>0?(p*100).toFixed(3)+"ct/"+ing.einheit:"–",style:"color:var(--acc);font-size:11px"});}const lt=mk(tr,"td");const ll=mk(lt,"label",{cls:"tog"});const li=mk(ll,"input");li.type="checkbox";if(ing.aufLager!==false)li.checked=true;mk(ll,"div",{cls:"tog-tr"});mk(ll,"div",{cls:"tog-th"});li.addEventListener("change",ev=>{ing.aufLager=ev.target.checked;LS.write(K.I,S.ingredients);});if(S.settings.editMode){const aw=mk(mk(tr,"td"),"div",{style:"display:flex;gap:4px"});mk(aw,"button",{cls:"btn ghost sm",text:"✏"}).addEventListener("click",()=>openIngModal(ing));const db=mk(aw,"button",{cls:"btn danger",text:"✕"});db.addEventListener("click",()=>confirmDel(db,"✕",()=>{S.ingredients=S.ingredients.filter(x=>x.id!==ing.id);LS.write(K.I,S.ingredients);refresh();}));}});}
  refresh();setTimeout(()=>si.focus(),20);
}
function openIngModal(ex,forceSpirit=false){
  const isN=!ex;const ing=ex?JSON.parse(JSON.stringify(ex)):{id:uid("z"),name:"",kategorie:"",unterkategorie:"",einheit:"ml",packMenge:null,packPreis:null,bruttoFlag:false,ustSatz:19,isSpirit:forceSpirit,alkoholfrei:false,aufLager:true,shotPreisOverride:null,longdrink:false,longdrinkMixers:[],longdrinkPreis:null,longdrinkAufKarte:false,createdAt:nowISO(),updatedAt:nowISO()};
  const ov=mk(document.body,"div",{cls:"ov"});const m=mk(ov,"div",{cls:"modal"});m.style.maxWidth="500px";
  mk(m,"div",{text:isN?"Neue Zutat":"Zutat bearbeiten",style:"font-weight:700"});
  const fn=mkF(m,"Name *");const ni=mk(fn,"input",{cls:"inp"});ni.value=ing.name;ni.addEventListener("input",ev=>ing.name=ev.target.value);
  const r0=mk(m,"div",{cls:"row"});const hk=mkH(r0,"Kategorie");const kb=mkDB(hk,ing.kategorie||"– Kategorie –");
  kb.addEventListener("click",()=>openDrop(kb,katItems(ing.kategorie),val=>{if(val==="__new__"){showPrompt("Neue Kategorie","Name","z.B. Rum",name=>{ensureKat(name);ing.kategorie=name;kb.textContent=name;});return;}ing.kategorie=val;ing.unterkategorie="";kb.textContent=val||"– Kategorie –";sb2.textContent="– Unterkategorie –";},"Kategorie…"));
  const hs=mkH(r0,"Unterkategorie");const sb2=mkDB(hs,ing.unterkategorie||"– Unterkategorie –");
  sb2.addEventListener("click",()=>{if(!ing.kategorie)return;openDrop(sb2,subItems(ing.kategorie,ing.unterkategorie),val=>{if(val==="__new__"){showPrompt("Neue Unterkategorie","Name","",name=>{ensureSub(ing.kategorie,name);ing.unterkategorie=name;sb2.textContent=name;});return;}ing.unterkategorie=val;sb2.textContent=val||"– Unterkategorie –";},"Unterkategorie…");});
  const rf=mk(m,"div",{cls:"row"});const hu=mkH(rf,"Einheit");const us=mk(hu,"select",{cls:"inp"});["ml","cl","g","kg","Stück","Dash","Barlöffel","Spritzer"].forEach(u=>{const o=mk(us,"option",{text:u});o.value=u;if(u===ing.einheit)o.selected=true;});us.addEventListener("change",ev=>ing.einheit=ev.target.value);
  const r2=mk(m,"div",{cls:"row"});const hp=mkH(r2,"Packungsmenge");const mi=mk(hp,"input",{cls:"inp"});mi.type="number";mi.value=ing.packMenge||"";mi.addEventListener("input",ev=>{ing.packMenge=parseFloat(ev.target.value)||null;upP();});
  const hpr=mkH(r2,"Einkaufspreis");const pri=mk(hpr,"input",{cls:"inp"});pri.type="number";pri.step="0.01";pri.value=ing.packPreis||"";pri.addEventListener("input",ev=>{ing.packPreis=parseFloat(ev.target.value)||null;upP();});
  const br0=mk(m,"div",{style:"display:flex;gap:16px;flex-wrap:wrap"});mkTog(br0,"Preis ist Brutto",ing.bruttoFlag,v=>{ing.bruttoFlag=v;upP();});
  const pv=mk(m,"div",{style:"background:var(--bg3);border:1px solid var(--border);border-radius:6px;padding:9px 14px;font-size:11px;color:var(--text3)"});
  function upP(){const p=ppu(ing);if(p>0){const n=ing.bruttoFlag?toN(ing.packPreis,ing.ustSatz||19):ing.packPreis;pv.innerHTML=`Netto: <b>${fE(n)}</b> · Pro ${ing.einheit||"ml"}: <b style="color:var(--acc)">${(p*100).toFixed(3)} ct</b> · 2cl: <b>${fE(p*20)}</b>`;}else pv.textContent="Kalkulation erscheint wenn Menge & Preis eingetragen.";}upP();
  mk(m,"div",{cls:"sec-lbl",text:"Eigenschaften"});const fr=mk(m,"div",{style:"display:flex;flex-direction:column;gap:8px"});
  mkTog(fr,"Ist Spirit / Alkohol",ing.isSpirit,v=>{ing.isSpirit=v;akEl.style.display=v?"flex":"none";ldEl.style.display=v?"block":"none";});
  const akEl=mk(fr,"div",{style:"display:"+(ing.isSpirit?"flex":"none")+";padding-left:20px"});mkTog(akEl,"Alkoholfrei (0,0%)",ing.alkoholfrei,v=>ing.alkoholfrei=v);
  mkTog(fr,"Auf Lager",ing.aufLager!==false,v=>ing.aufLager=v);
  const spf=mkF(m,"Shot-Preis Override (2cl Brutto, leer=auto)");const spi=mk(spf,"input",{cls:"inp"});spi.type="number";spi.step="0.5";spi.value=ing.shotPreisOverride!=null?ing.shotPreisOverride:"";spi.addEventListener("input",ev=>{const v=parseFloat(ev.target.value);ing.shotPreisOverride=isNaN(v)?null:v;});
  mk(m,"div",{cls:"sec-lbl",text:"Longdrink"});const ldEl=mk(m,"div");ldEl.style.display=ing.isSpirit?"block":"none";
  mkTog(ldEl,"Als Longdrink anbieten (5cl)",ing.longdrink,v=>{ing.longdrink=v;ldDet.style.display=v?"flex":"none";});
  const ldDet=mk(ldEl,"div",{style:"display:"+(ing.longdrink?"flex":"none")+";flex-direction:column;gap:8px;padding-left:20px;margin-top:8px"});
  const ldpf=mkF(ldDet,"Manueller Longdrink-Preis (leer=auto)");const ldpi=mk(ldpf,"input",{cls:"inp"});ldpi.type="number";ldpi.step="0.5";ldpi.value=ing.longdrinkPreis!=null?ing.longdrinkPreis:"";ldpi.addEventListener("input",ev=>{const v=parseFloat(ev.target.value);ing.longdrinkPreis=isNaN(v)?null:v;});
  mkTog(ldDet,"Auf der Karte",ing.longdrinkAufKarte,v=>ing.longdrinkAufKarte=v);
  const btnr=mk(m,"div",{cls:"btn-row"});mk(btnr,"button",{cls:"btn ghost",text:"Abbrechen"}).addEventListener("click",()=>ov.remove());
  const sb3=mk(btnr,"button",{cls:"btn pri",text:isN?"Erstellen":"Speichern"});
  sb3.addEventListener("click",()=>{if(!ing.name.trim()){ni.focus();return;}ing.updatedAt=nowISO();if(isN)S.ingredients.push(ing);else{const idx=S.ingredients.findIndex(x=>x.id===ing.id);if(idx>=0)S.ingredients[idx]=ing;}LS.write(K.I,S.ingredients);ov.remove();rerender();});
  ov.addEventListener("mousedown",ev=>{if(ev.target===ov)ov.remove();});setTimeout(()=>ni.focus(),10);
}
function rBasics(panel){
  const bar=mk(panel,"div",{cls:"bar"});if(S.settings.editMode)mk(bar,"button",{cls:"btn pri",text:"+ Neues Getränk"}).addEventListener("click",()=>openBasicModal(null));
  const si=mk(bar,"input",{cls:"inp wide",attr:{placeholder:"Getränk suchen…",value:S.basSearch||""}});si.addEventListener("input",ev=>{S.basSearch=ev.target.value;refresh();});
  const wrap=mk(panel,"div",{cls:"wrap"});
  function refresh(){wrap.innerHTML="";let list=S.basics;const q=(S.basSearch||"").toLowerCase();if(q)list=list.filter(b=>b.name.toLowerCase().includes(q)||(b.kategorie||"").toLowerCase().includes(q));if(!list.length){mk(wrap,"div",{cls:"empty",text:"Noch keine Basics."});return;}const tbl=mk(wrap,"table");const hr=mk(mk(tbl,"thead"),"tr");const cols=["Name","Kategorie"];if(S.settings.editMode)cols.push("Packung","EK netto","€/Einheit");cols.push("Serviergrößen","Lager");if(S.settings.editMode)cols.push("");cols.forEach(h=>mk(hr,"th",{text:h}));const tbody=mk(tbl,"tbody");list.forEach(b=>{const p=ppu(b);const tr=mk(tbody,"tr");mk(tr,"td",{text:b.name+(b.alkoholfrei?" 🍃":""),style:"font-weight:600"});mk(mk(tr,"td"),"span",{cls:"tag gr",text:b.kategorie||"–"});if(S.settings.editMode){mk(tr,"td",{text:b.packMenge?`${b.packMenge} ${b.einheit}`:"–",style:"font-size:11px"});mk(tr,"td",{text:b.packPreis?fE(b.bruttoFlag?toN(b.packPreis,b.ustSatz||19):b.packPreis):"–",style:"font-size:11px"});mk(tr,"td",{text:p>0?(p*100).toFixed(3)+"ct/"+b.einheit:"–",style:"color:var(--acc);font-size:11px"});}const sgTd=mk(tr,"td");const sgW=mk(sgTd,"div",{style:"display:flex;gap:6px;flex-wrap:wrap"});(b.serviergroessen||[]).forEach(sg=>{const vk=p>0?calcS(p*sg.menge,S.settings.zielMarge,S.settings.ust):0;const vd=sg.preis!=null?sg.preis:vk;mk(sgW,"span",{cls:"tag "+(sg.preis!=null?"g":"gr"),text:`${sg.label||sg.einheit||""}: ${fE(vd)}${sg.preis==null?" *":""}`,style:"font-size:12px"});});if(!(b.serviergroessen||[]).length)mk(sgTd,"span",{text:"–",style:"font-size:11px;color:var(--text3)"});const lt=mk(tr,"td");const ll=mk(lt,"label",{cls:"tog"});const li=mk(ll,"input");li.type="checkbox";if(b.aufLager!==false)li.checked=true;mk(ll,"div",{cls:"tog-tr"});mk(ll,"div",{cls:"tog-th"});li.addEventListener("change",ev=>{b.aufLager=ev.target.checked;LS.write(K.B,S.basics);});if(S.settings.editMode){const aw=mk(mk(tr,"td"),"div",{style:"display:flex;gap:4px"});mk(aw,"button",{cls:"btn ghost sm",text:"✏"}).addEventListener("click",()=>openBasicModal(b));const db=mk(aw,"button",{cls:"btn danger",text:"✕"});db.addEventListener("click",()=>confirmDel(db,"✕",()=>{S.basics=S.basics.filter(x=>x.id!==b.id);LS.write(K.B,S.basics);refresh();}));}});}
  refresh();setTimeout(()=>si.focus(),20);
}
function openBasicModal(ex){
  const isN=!ex;const b=ex?JSON.parse(JSON.stringify(ex)):{id:uid("bas"),name:"",kategorie:"",einheit:"ml",packMenge:null,packPreis:null,bruttoFlag:false,ustSatz:19,aufLager:true,alkoholfrei:false,serviergroessen:[],createdAt:nowISO(),updatedAt:nowISO()};
  const ov=mk(document.body,"div",{cls:"ov"});const m=mk(ov,"div",{cls:"modal"});m.style.maxWidth="480px";
  mk(m,"div",{text:isN?"Neues Getränk":"Getränk bearbeiten",style:"font-weight:700"});
  const fn=mkF(m,"Name *");const ni=mk(fn,"input",{cls:"inp"});ni.value=b.name;ni.addEventListener("input",ev=>b.name=ev.target.value);
  const basicKats=["Bier","Wein","Apfelwein","Softdrink","Mixer","Saft","Sonstiges"];
  const r0=mk(m,"div",{cls:"row"});const hk=mkH(r0,"Kategorie");const kb=mkDB(hk,b.kategorie||"– Kategorie –");
  kb.addEventListener("click",()=>openDrop(kb,[{type:"item",label:"– Keine –",value:""},...basicKats.map(kk=>({type:"item",label:kk,value:kk,selected:kk===b.kategorie})),{type:"item",label:"+ Eigene…",value:"__new__"}],val=>{if(val==="__new__"){showPrompt("Eigene Kategorie","Name","",name=>{b.kategorie=name;kb.textContent=name;});return;}b.kategorie=val;kb.textContent=val||"– Kategorie –";},"Kategorie…"));
  const hu=mkH(r0,"Einheit");const us=mk(hu,"select",{cls:"inp"});["ml","cl","l","Flasche","Dose","Glas"].forEach(u=>{const o=mk(us,"option",{text:u});o.value=u;if(u===b.einheit)o.selected=true;});us.addEventListener("change",ev=>b.einheit=ev.target.value);
  const r2=mk(m,"div",{cls:"row"});const hpa=mkH(r2,"Packungsmenge");const pami=mk(hpa,"input",{cls:"inp"});pami.type="number";pami.value=b.packMenge||"";pami.addEventListener("input",ev=>b.packMenge=parseFloat(ev.target.value)||null);
  const hpri=mkH(r2,"Einkaufspreis");const prInp=mk(hpri,"input",{cls:"inp"});prInp.type="number";prInp.step="0.01";prInp.value=b.packPreis||"";prInp.addEventListener("input",ev=>b.packPreis=parseFloat(ev.target.value)||null);
  const br0=mk(m,"div",{style:"display:flex;gap:16px;flex-wrap:wrap"});mkTog(br0,"Preis ist Brutto",b.bruttoFlag,v=>b.bruttoFlag=v);mkTog(br0,"Alkoholfrei",b.alkoholfrei,v=>b.alkoholfrei=v);mkTog(br0,"Auf Lager",b.aufLager!==false,v=>b.aufLager=v);
  mk(m,"div",{cls:"sec-lbl",text:"Serviergrößen"});const sgList=mk(m,"div",{style:"display:flex;flex-direction:column;gap:4px"});
  function renderSG(){sgList.innerHTML="";(b.serviergroessen||[]).forEach((sg,i)=>{const row=mk(sgList,"div",{style:"display:flex;gap:6px;align-items:center;padding:5px 0;border-bottom:1px solid var(--border2);flex-wrap:wrap"});const lbl=mk(row,"input",{style:"width:80px;background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:5px 8px;border-radius:6px;font-size:13px"});lbl.placeholder="z.B. 0,3l";lbl.value=sg.label||"";lbl.addEventListener("input",ev=>sg.label=ev.target.value);const mng=mk(row,"input",{style:"width:60px;background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:5px 8px;border-radius:6px;font-size:13px"});mng.type="number";mng.placeholder="Menge";mng.value=sg.menge||"";mng.addEventListener("input",ev=>sg.menge=parseFloat(ev.target.value)||0);const prI=mk(row,"input",{style:"width:80px;background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:5px 8px;border-radius:6px;font-size:13px"});prI.type="number";prI.step="0.5";prI.placeholder="VK (leer=auto)";prI.value=sg.preis!=null?sg.preis:"";prI.addEventListener("input",ev=>{const v=parseFloat(ev.target.value);sg.preis=isNaN(v)?null:v;});mk(row,"span",{text:"€",style:"font-size:10px;color:var(--text3)"});const db2=mk(row,"button",{cls:"btn danger",text:"✕"});db2.addEventListener("click",()=>{b.serviergroessen.splice(i,1);renderSG();});});const ab=mk(sgList,"button",{style:"font-size:12px;padding:4px 10px;background:transparent;border:1px dashed var(--border);color:var(--text2);border-radius:6px;cursor:pointer;margin-top:4px",text:"+ Größe hinzufügen"});ab.addEventListener("click",()=>{if(!b.serviergroessen)b.serviergroessen=[];b.serviergroessen.push({label:"",menge:0,einheit:b.einheit||"ml",preis:null});renderSG();});}
  renderSG();
  const btnr=mk(m,"div",{cls:"btn-row"});mk(btnr,"button",{cls:"btn ghost",text:"Abbrechen"}).addEventListener("click",()=>ov.remove());
  const sb3=mk(btnr,"button",{cls:"btn pri",text:isN?"Erstellen":"Speichern"});
  sb3.addEventListener("click",()=>{if(!b.name.trim()){ni.focus();return;}b.updatedAt=nowISO();if(isN)S.basics.push(b);else{const idx=S.basics.findIndex(x=>x.id===b.id);if(idx>=0)S.basics[idx]=b;}LS.write(K.B,S.basics);ov.remove();rerender();});
  ov.addEventListener("mousedown",ev=>{if(ev.target===ov)ov.remove();});setTimeout(()=>ni.focus(),10);
}
const ATABS={glaeser:{l:"Gläser",i:"🥃"},eistypen:{l:"Eistypen",i:"🧊"},methoden:{l:"Methoden",i:"🔄"},deko:{l:"Deko",i:"🌿"},geschmack:{l:"Geschmack",i:"👅"},kategorien:{l:"Kategorien",i:"🗂"}};
function rAust(panel){
  const st=mk(panel,"div",{cls:"subtabs"});Object.entries(ATABS).forEach(([key,m])=>{const t=mk(st,"button",{cls:"stab"+(S.austSub===key?" on":""),text:m.i+" "+m.l});t.addEventListener("click",()=>{S.austSub=key;rerender();});});
  if(S.austSub==="kategorien"){rKat(panel);return;}
  const key=S.austSub,meta=ATABS[key],items=Array.isArray(S.ausstattung[key])?S.ausstattung[key]:[];
  const bar=mk(panel,"div",{cls:"bar"});if(S.settings.editMode)mk(bar,"button",{cls:"btn pri",text:"+ Hinzufügen"}).addEventListener("click",()=>openAustModal(key,null));mk(bar,"span",{text:`${items.length} Einträge`,style:"font-size:11px;color:var(--text3)"});
  if(!items.length){mk(panel,"div",{cls:"empty",text:`Noch keine ${meta.l}.`});return;}
  const list=mk(panel,"div",{cls:"list"});items.forEach(item=>{const row=mk(list,"div",{cls:"list-item"});if(isNew(item))row.style.borderColor="var(--gold)";const ne=mk(row,"div",{cls:"list-name"});mk(ne,"span",{text:item.name});if(item.beschreibung)mk(ne,"div",{cls:"list-sub",text:item.beschreibung});if(S.settings.editMode){const aw=mk(row,"div",{style:"display:flex;gap:4px;flex-shrink:0"});mk(aw,"button",{cls:"btn ghost sm",text:"✏"}).addEventListener("click",()=>openAustModal(key,item));const db=mk(aw,"button",{cls:"btn danger",text:"✕"});db.addEventListener("click",()=>confirmDel(db,"✕",()=>{S.ausstattung[key]=S.ausstattung[key].filter(x=>x.id!==item.id);LS.write(K.A,S.ausstattung);rerender();}));}});
}
function openAustModal(key,ex){
  const isN=!ex,meta=ATABS[key];const item=ex?JSON.parse(JSON.stringify(ex)):{id:uid("a"),name:"",beschreibung:"",createdAt:nowISO(),updatedAt:nowISO()};
  const ov=mk(document.body,"div",{cls:"ov"});const m=mk(ov,"div",{cls:"modal"});m.style.maxWidth="360px";
  mk(m,"div",{text:(isN?"Neu: ":"Bearbeiten: ")+meta.l,style:"font-weight:700"});
  const fn=mkF(m,"Name");const ni=mk(fn,"input",{cls:"inp"});ni.value=item.name;ni.addEventListener("input",ev=>item.name=ev.target.value);
  const fd=mkF(m,"Beschreibung");const di=mk(fd,"input",{cls:"inp"});di.value=item.beschreibung||"";di.addEventListener("input",ev=>item.beschreibung=ev.target.value);
  const br=mk(m,"div",{cls:"btn-row"});mk(br,"button",{cls:"btn ghost",text:"Abbrechen"}).addEventListener("click",()=>ov.remove());
  const sb=mk(br,"button",{cls:"btn pri",text:isN?"Hinzufügen":"Speichern"});
  sb.addEventListener("click",()=>{if(!item.name.trim()){ni.focus();return;}item.updatedAt=nowISO();if(!S.ausstattung[key])S.ausstattung[key]=[];if(isN)S.ausstattung[key].push(item);else{const idx=S.ausstattung[key].findIndex(x=>x.id===item.id);if(idx>=0)S.ausstattung[key][idx]=item;}LS.write(K.A,S.ausstattung);ov.remove();rerender();});
  ni.addEventListener("keydown",ev=>{if(ev.key==="Enter")di.focus();if(ev.key==="Escape")ov.remove();});ov.addEventListener("mousedown",ev=>{if(ev.target===ov)ov.remove();});setTimeout(()=>ni.focus(),10);
}
function rKat(panel){
  const bar=mk(panel,"div",{cls:"bar"});if(S.settings.editMode)mk(bar,"button",{cls:"btn pri",text:"+ Neue Kategorie"}).addEventListener("click",()=>showPrompt("Neue Kategorie","Name","z.B. Rum",name=>{ensureKat(name);rerender();}));mk(bar,"span",{text:`${S.kategorien.length} Kategorien`,style:"font-size:11px;color:var(--text3)"});
  if(!S.kategorien.length){mk(panel,"div",{cls:"empty",text:"Noch keine Kategorien."});return;}
  const tree=mk(panel,"div",{cls:"kat-tree"});
  S.kategorien.forEach(kat=>{const grp=mk(tree,"div",{cls:"kat-grp"});const hdr=mk(grp,"div",{cls:"kat-hdr"});mk(hdr,"div",{cls:"kat-hn",text:kat.name});if(S.settings.editMode){const aw=mk(hdr,"div",{style:"display:flex;gap:4px"});mk(aw,"button",{cls:"btn ghost sm",text:"+ Sub"}).addEventListener("click",()=>showPrompt("Neue Unterkategorie für "+kat.name,"Name","",name=>{ensureSub(kat.name,name);rerender();}));const db=mk(aw,"button",{cls:"btn danger",text:"✕"});db.addEventListener("click",()=>confirmDel(db,"✕",()=>{S.kategorien=S.kategorien.filter(k=>k.id!==kat.id);LS.write(K.KT,S.kategorien);rerender();}));}if(kat.unterkategorien?.length){const subs=mk(grp,"div",{cls:"kat-subs"});kat.unterkategorien.forEach(sub=>{const sr=mk(subs,"div",{cls:"kat-sub"});mk(sr,"span",{text:"›",style:"color:var(--text3)"});mk(sr,"span",{text:sub,style:"flex:1"});if(S.settings.editMode){const db2=mk(sr,"button",{cls:"btn danger",text:"✕"});db2.addEventListener("click",()=>confirmDel(db2,"✕",()=>{kat.unterkategorien=kat.unterkategorien.filter(s=>s!==sub);LS.write(K.KT,S.kategorien);rerender();}));}});}else mk(grp,"div",{text:"Keine Unterkategorien",style:"padding:6px 14px 10px 14px;font-size:11px;color:var(--text3);font-style:italic"});});
}
const PW_HASH="36dc37d1acc5722519a152e44642ba09ea7d81a19fc85a673ca64eb766ee235d";
async function hashStr(s){const buf=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,"0")).join("");}
function rSettings(panel){
  const box=mk(panel,"div",{cls:"settings"});mk(box,"div",{text:"Einstellungen",style:"font-weight:700"});
  const mf=mkF(box,"Modus");const mr=mk(mf,"div",{cls:"row"});
  if(S.settings.editMode){mkTog(mr,"Editiermodus aktiv",true,async v=>{if(!v){S.settings.editMode=false;LS.write(K.S,S.settings);rerender();}});}
  else{const ub=mk(mr,"button",{cls:"btn ghost",text:"🔒 Editiermodus aktivieren"});ub.addEventListener("click",()=>{
    const ov=mk(document.body,"div",{cls:"ov"});ov.style.zIndex="3000";const m=mk(ov,"div",{cls:"modal"});m.style.maxWidth="320px";mk(m,"div",{text:"Editiermodus",style:"font-weight:700"});
    const f=mkF(m,"Passwort");const pi=mk(f,"input",{cls:"inp"});pi.type="password";pi.placeholder="Passwort eingeben…";
    const errEl=mk(m,"div",{style:"color:var(--red);font-size:11px;min-height:16px"});const br=mk(m,"div",{cls:"btn-row"});mk(br,"button",{cls:"btn ghost",text:"Abbrechen"}).addEventListener("click",()=>ov.remove());
    const ob=mk(br,"button",{cls:"btn pri",text:"Entsperren"});
    ob.addEventListener("click",async()=>{const h=await hashStr(pi.value);if(h===PW_HASH){S.settings.editMode=true;LS.write(K.S,S.settings);ov.remove();rerender();}else{errEl.textContent="Falsches Passwort";pi.value="";pi.focus();}});
    pi.addEventListener("keydown",ev=>{if(ev.key==="Enter")ob.click();if(ev.key==="Escape")ov.remove();});setTimeout(()=>pi.focus(),10);
  });}
  const af=mkF(box,"Anzeige");const ar=mk(af,"div",{style:"display:flex;flex-direction:column;gap:8px"});
  mkTog(ar,"cl statt ml",S.settings.useCl,v=>{S.settings.useCl=v;LS.write(K.S,S.settings);rerender();});
  mkTog(ar,"Bilder in Übersicht",S.settings.showImagesGrid,v=>{S.settings.showImagesGrid=v;LS.write(K.S,S.settings);rerender();});
  mkTog(ar,"Warnung fehlende Zutaten",S.settings.missingIngWarning,v=>{S.settings.missingIngWarning=v;LS.write(K.S,S.settings);rerender();});
  [["Ziel-Marge (%)","number",S.settings.zielMarge,"zielMarge"],["Umsatzsteuer (%)","number",S.settings.ust,"ust"],["Mixer-Preis netto (€)","number",S.settings.mixerPreis,"mixerPreis"]].forEach(([lbl,type,val,key])=>{
    const f=mkF(box,lbl);const inp=mk(f,"input",{cls:"inp",attr:{type,value:val,style:"width:90px"}});if(key==="mixerPreis")inp.step="0.05";
    inp.addEventListener("change",ev=>{S.settings[key]=parseFloat(ev.target.value)||(key==="mixerPreis"?0.30:key==="ust"?19:75);LS.write(K.S,S.settings);rerender();});
  });
  const cc=mkF(box,"Akzentfarbe");const cr=mk(cc,"div",{cls:"row"});const ci=mk(cr,"input",{cls:"inp",attr:{type:"color",value:S.settings.accentColor||"#c8a45a",style:"width:50px;height:34px;padding:2px;cursor:pointer"}});
  mk(cr,"button",{cls:"btn ghost sm",text:"Zurücksetzen"}).addEventListener("click",()=>{S.settings.accentColor=null;LS.write(K.S,S.settings);document.documentElement.style.removeProperty("--acc");rerender();});
  ci.addEventListener("change",ev=>{S.settings.accentColor=ev.target.value;LS.write(K.S,S.settings);document.documentElement.style.setProperty("--acc",ev.target.value);});
  const dm=mk(box,"div",{cls:"ds"});mk(dm,"div",{text:"Datenverwaltung",style:"font-weight:600;margin-bottom:10px"});const dr=mk(dm,"div",{cls:"row"});
  mk(dr,"button",{cls:"btn ghost",text:"📥 Export JSON"}).addEventListener("click",()=>{const data={cocktails:S.cocktails,ingredients:S.ingredients,basics:S.basics,ausstattung:S.ausstattung,kategorien:S.kategorien,settings:S.settings};const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="cocktail-lexikon-backup.json";a.click();});
  const fI=document.createElement("input");fI.type="file";fI.accept=".json";fI.style.display="none";
  fI.addEventListener("change",ev=>{const file=ev.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=e=>{try{const d=JSON.parse(e.target.result);if(d.cocktails)S.cocktails=d.cocktails;if(d.ingredients)S.ingredients=d.ingredients;if(d.basics)S.basics=d.basics;if(d.ausstattung)S.ausstattung=d.ausstattung;if(d.kategorien)S.kategorien=d.kategorien;LS.write(K.C,S.cocktails);LS.write(K.I,S.ingredients);LS.write(K.B,S.basics);LS.write(K.A,S.ausstattung);LS.write(K.KT,S.kategorien);rerender();}catch{alert("Ungültige JSON-Datei");}};reader.readAsText(file);});
  mk(dr,"button",{cls:"btn ghost",text:"📤 Import JSON"}).addEventListener("click",()=>fI.click());document.body.appendChild(fI);
  mk(dm,"div",{text:"Daten werden im Browser (localStorage) gespeichert. Regelmäßig exportieren für Backups.",style:"font-size:11px;color:var(--text3);margin-top:8px"});
}
S.cocktails=LS.read(K.C)||[];S.ingredients=LS.read(K.I)||[];S.basics=LS.read(K.B)||[];S.ausstattung=LS.read(K.A)||{};S.kategorien=LS.read(K.KT)||[];const sS=LS.read(K.S);if(sS)S.settings={...DEF,...sS};
rerender();
</script>
</body>
</html>
