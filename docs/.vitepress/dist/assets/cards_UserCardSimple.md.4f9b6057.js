import"./chunks/UserCardSimple.vue_vue_type_style_index_0_lang.4ed993c7.js";import{d as f,o,c as r,r as c,z as t,t as l,H as u,a2 as D,a3 as g,F as m,L as h,D as C,G as n,B as b,b as p,a as i,O as x}from"./chunks/framework.6f2fba7d.js";const _=["src"],k={class:"card-content"},q=["src","alt"],S={class:"card-title"},E={class:"card-subtitle"},v={class:"card-info"},A={class:"label"},w={class:"value"},d=f({__name:"UserCardSimple",props:{background:{type:String,required:!1},image:{type:String,required:!1},title:{type:String,required:!1},subtitle:{type:String,required:!1},info:{type:Object,default:()=>({})},textColor:{type:String,required:!1},backgroundColor:{type:String,required:!1}},setup(e){return(s,F)=>(o(),r("div",{class:"simple-user-card",style:u({"--simple-user-card-color":e.textColor,"--simple-user-card-background":e.backgroundColor})},[c(s.$slots,"background",{},()=>[D(t("img",{class:"card-background",src:e.background},null,8,_),[[g,e.background]])]),t("div",k,[c(s.$slots,"image",{},()=>[D(t("img",{class:"card-image",src:e.image,alt:e.title+" "+e.subtitle},null,8,q),[[g,e.image]])]),t("h4",S,l(e.title),1),t("p",E,l(e.subtitle),1),c(s.$slots,"default",{},()=>[t("ul",v,[(o(!0),r(m,null,h(e.info,(a,y)=>(o(),r("li",{key:"card-info-"+a+y},[t("span",A,l(a),1),t("span",w,l(y),1)]))),128))])])])],4))}});const P=t("h1",{id:"user-card-simple",tabindex:"-1"},[i("User Card Simple "),t("a",{class:"header-anchor",href:"#user-card-simple","aria-label":'Permalink to "User Card Simple"'},"​")],-1),B=t("h2",{id:"code",tabindex:"-1"},[i("Code "),t("a",{class:"header-anchor",href:"#code","aria-label":'Permalink to "Code"'},"​")],-1),U={class:"dev-section"},I=x(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">UserCardSimple</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">background</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://placekitten.com/1200/800</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://placekitten.com/400/400</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem Ipsum</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">subtitle</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Creative Manager</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:info</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#C3E88D;">        followers: 323,</span></span>
<span class="line"><span style="color:#C3E88D;">        following: 290,</span></span>
<span class="line"><span style="color:#C3E88D;">        stories: 22,</span></span>
<span class="line"><span style="color:#C3E88D;">    }</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">UserCardSimple</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://placekitten.com/400/400</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem Ipsum</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">subtitle</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Creative Manager</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:info</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#C3E88D;">        followers: 323</span></span>
<span class="line"><span style="color:#C3E88D;">    }</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">UserCardSimple</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem Ipsum</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">subtitle</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Creative Manager</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:info</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#C3E88D;">        followers: 323,</span></span>
<span class="line"><span style="color:#C3E88D;">        following: 290</span></span>
<span class="line"><span style="color:#C3E88D;">    }</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Prop</th><th style="text-align:left;">Description</th><th style="text-align:left;">Accepted Values</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>background</code></td><td style="text-align:left;">Background image</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>empty</code></td></tr><tr><td style="text-align:left;"><code>image</code></td><td style="text-align:left;">Front image</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>empty</code></td></tr><tr><td style="text-align:left;"><code>title</code></td><td style="text-align:left;">Primary text</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>empty</code></td></tr><tr><td style="text-align:left;"><code>subtitle</code></td><td style="text-align:left;">Secondary text</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>empty</code></td></tr><tr><td style="text-align:left;"><code>info</code></td><td style="text-align:left;">Object with key-value pair as label-info</td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;"><code>empty</code></td></tr><tr><td style="text-align:left;"><code>textColor</code></td><td style="text-align:left;">Text color</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>#303336</code></td></tr><tr><td style="text-align:left;"><code>backgroundColor</code></td><td style="text-align:left;">Background color</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>#ffffff</code></td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Slot</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>default</code></td><td style="text-align:left;">Body of the card</td></tr><tr><td style="text-align:left;"><code>background</code></td><td style="text-align:left;">Background image</td></tr><tr><td style="text-align:left;"><code>image</code></td><td style="text-align:left;">Front image</td></tr></tbody></table><h2 id="scss-variables" tabindex="-1">SCSS Variables <a class="header-anchor" href="#scss-variables" aria-label="Permalink to &quot;SCSS Variables&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Variable</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>$simple-user-card-background</code></td><td style="text-align:left;">Background color</td></tr><tr><td style="text-align:left;"><code>$simple-user-card-color</code></td><td style="text-align:left;">Text color</td></tr></tbody></table>`,7),L=JSON.parse('{"title":"User Card Simple","description":"","frontmatter":{},"headers":[],"relativePath":"cards/UserCardSimple.md","filePath":"cards/UserCardSimple.md"}'),V={name:"cards/UserCardSimple.md"},M=Object.assign(V,{setup(e){return(s,F)=>{const a=C("Badge");return o(),r("div",null,[P,n(a,{type:"info"},{default:b(()=>[i("Card")]),_:1}),B,t("div",U,[n(p(d),{background:"http://placekitten.com/1200/800",image:"http://placekitten.com/400/600",title:"Lorem Ipsum",subtitle:"Creative Manager",backgroundColor:"#f0f0f0",info:{followers:323,following:290,stories:22}}),n(p(d),{image:"http://placekitten.com/400/400",title:"Lorem Ipsum",subtitle:"Creative Manager",backgroundColor:"#f0f0f0",info:{followers:323}}),n(p(d),{title:"Lorem Ipsum",subtitle:"Creative Manager",backgroundColor:"#f0f0f0",info:{followers:323,following:290}})]),I])}}});export{L as __pageData,M as default};
