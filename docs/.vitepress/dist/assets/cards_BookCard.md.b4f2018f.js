import"./chunks/CreditCard.vue_vue_type_style_index_0_lang.4ed993c7.js";import{d as b,k as y,o as u,b as m,a as e,r as F,m as i,v as c,t as p,l as x,n as C,u as s,f as v,g as l,w as D,h as n,i as h}from"./app.6663138f.js";const k={class:"book-cover"},_={class:"content-cover"},w=["src","alt","title"],A={class:"card-bottom"},q=["src"],S={class:"book-spine"},E={class:"content-spine"},T=["src","alt","title"],I={class:"card-bottom"},P=["src"],o=b({__name:"BookCard",props:{title:{type:String,required:!1},author:{type:String,required:!1},color:{type:String,default:()=>"#FFFFFF"},rotation:{type:Number,default:()=>3,validator:t=>t<7.5},hover:{type:Boolean,default:()=>!0},height:{type:Number,required:!1},width:{type:Number,required:!1},ratio:{type:String,required:!1},image:{type:String,required:!1},spine:{type:String,required:!1},spineWidth:{type:String,default:()=>"50px"},logo:{type:String,required:!1}},setup(t){const a=t,d=y(()=>{if(!a.ratio)return 1;const r=a.ratio.split("/");return parseFloat((parseFloat(r[1])/parseFloat(r[0])).toFixed(2))}),g=y(()=>a.height?a.height:a.width?a.width*d.value:null),f=y(()=>a.width?a.width:a.height?a.height*d.value:null);return(r,Q)=>(u(),m("div",{class:x(["book-card",{"book-custom-size":t.width||t.height,"book-custom-aspect-ratio":t.ratio,"book-hoverable":t.hover}]),style:C({"--book-card-height":t.height?s(g)+"px":null,"--book-card-width":t.width?s(f)+"px":null,"--book-card-ratio":s(d)*100+"%","--book-card-color":t.color,"--book-card-rotation":t.rotation,"--book-card-spine-width":t.spineWidth})},[e("div",null,[e("div",k,[e("div",_,[F(r.$slots,"default")]),e("img",{class:"book-cover-image",src:t.image,alt:t.title,title:t.title},null,8,w),i(e("p",{class:"card-top"},p(t.title),513),[[c,t.title]]),i(e("div",A,[e("img",{src:t.logo},null,8,q)],512),[[c,t.logo]]),i(e("p",{class:"card-bottom"},p(t.author),513),[[c,!t.logo&&t.author]])]),e("div",S,[e("div",E,[F(r.$slots,"spine")]),e("img",{class:"book-spine-image",src:t.spine?t.spine:t.image,alt:t.author,title:t.author},null,8,T),i(e("p",{class:"card-top"},p(t.title),513),[[c,t.title]]),i(e("div",I,[e("img",{src:t.logo},null,8,P)],512),[[c,t.logo]]),i(e("p",{class:"card-bottom"},p(t.author),513),[[c,!t.logo&&t.author]])])])],6))}});const B=e("h1",{id:"action-panel",tabindex:"-1"},[n("Action Panel "),e("a",{class:"header-anchor",href:"#action-panel","aria-hidden":"true"},"#")],-1),V=e("h2",{id:"default-width-and-height",tabindex:"-1"},[n("Default width AND height "),e("a",{class:"header-anchor",href:"#default-width-and-height","aria-hidden":"true"},"#")],-1),N=e("h3",{id:"book-or-videogame",tabindex:"-1"},[n("(book or videogame) "),e("a",{class:"header-anchor",href:"#book-or-videogame","aria-hidden":"true"},"#")],-1),$=e("h3",{id:"squared-music-cd",tabindex:"-1"},[n("Squared (music cd) "),e("a",{class:"header-anchor",href:"#squared-music-cd","aria-hidden":"true"},"#")],-1),j=e("h3",{id:"very-long",tabindex:"-1"},[n("Very long "),e("a",{class:"header-anchor",href:"#very-long","aria-hidden":"true"},"#")],-1),R=h(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BookCard</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">LOREM IPSUM</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">author</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">TOAST</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#00ff00</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">spine</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1-spine.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="with-slots" tabindex="-1">With slots <a class="header-anchor" href="#with-slots" aria-hidden="true">#</a></h2>`,2),O=e("h1",null,"Lorem Ipsum Sit Dolor",-1),W=e("h1",null,"Ipsum",-1),M=h(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BookCard</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">spine</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1-spine.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Lorem Ipsum Sit Dolor</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#spine</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Ipsum</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">BookCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="custom-ratio" tabindex="-1">Custom ratio <a class="header-anchor" href="#custom-ratio" aria-hidden="true">#</a></h2><h3 id="_4-25-6-87" tabindex="-1">4.25/6.87 <a class="header-anchor" href="#_4-25-6-87" aria-hidden="true">#</a></h3>`,3),L=e("h3",{id:"_16-9",tabindex:"-1"},[n("16/9 "),e("a",{class:"header-anchor",href:"#_16-9","aria-hidden":"true"},"#")],-1),z=h(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BookCard</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">ratio</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">4.25/6.87</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://placekitten.com/400/700</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">spine</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://placekitten.com/300/300</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="custom-ratio-with-width-height" tabindex="-1">Custom ratio with width/height <a class="header-anchor" href="#custom-ratio-with-width-height" aria-hidden="true">#</a></h2><h3 id="ratio-4-25-6-87-width-200" tabindex="-1">ratio 4.25/6.87 - width 200 <a class="header-anchor" href="#ratio-4-25-6-87-width-200" aria-hidden="true">#</a></h3>`,3),U=e("h3",{id:"ratio-4-25-6-87-height-200",tabindex:"-1"},[n("ratio 4.25/6.87 - height 200 "),e("a",{class:"header-anchor",href:"#ratio-4-25-6-87-height-200","aria-hidden":"true"},"#")],-1),H=e("h3",{id:"ratio-16-9-height-200",tabindex:"-1"},[n("ratio 16/9 - height 200 "),e("a",{class:"header-anchor",href:"#ratio-16-9-height-200","aria-hidden":"true"},"#")],-1),J=e("h3",{id:"ratio-16-9-width-200",tabindex:"-1"},[n("ratio 16/9 - width 200 "),e("a",{class:"header-anchor",href:"#ratio-16-9-width-200","aria-hidden":"true"},"#")],-1),G=h(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BookCard</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">ratio</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">4.25/6.87</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://placekitten.com/700/700</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">spine</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://placekitten.com/400/400</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><p>The BASIC Panel component</p><table><thead><tr><th style="text-align:left;">Prop</th><th style="text-align:left;">Description</th><th style="text-align:left;">Accepted Values</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>title</code></td><td style="text-align:left;">Title of card</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>empty</code></td></tr><tr><td style="text-align:left;"><code>author</code></td><td style="text-align:left;">Author of card</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>empty</code></td></tr><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;">Text color</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>#FFFFFF</code></td></tr><tr><td style="text-align:left;"><code>rotation</code></td><td style="text-align:left;">Rotation strength, max 7.5</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>3</code></td></tr><tr><td style="text-align:left;"><code>hover</code></td><td style="text-align:left;">If rotate on hover</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td></tr><tr><td style="text-align:left;"><code>height</code></td><td style="text-align:left;">Height of card</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>none</code></td></tr><tr><td style="text-align:left;"><code>width</code></td><td style="text-align:left;">Width of card</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>none</code></td></tr><tr><td style="text-align:left;"><code>ratio</code></td><td style="text-align:left;">Width and height ratio</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>none</code></td></tr><tr><td style="text-align:left;"><code>image</code></td><td style="text-align:left;">Main image</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>none</code></td></tr><tr><td style="text-align:left;"><code>spine</code></td><td style="text-align:left;">Spine image</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>none</code></td></tr><tr><td style="text-align:left;"><code>spineWidth</code></td><td style="text-align:left;">Spine width</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>50px</code></td></tr><tr><td style="text-align:left;"><code>logo</code></td><td style="text-align:left;">Logo (bottom right)</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>none</code></td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Slot</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>default</code></td><td style="text-align:left;">Content on the front</td></tr><tr><td style="text-align:left;"><code>spine</code></td><td style="text-align:left;">Content on the spine</td></tr></tbody></table>`,6),Z=JSON.parse('{"title":"Action Panel","description":"","frontmatter":{},"headers":[{"level":2,"title":"Default width AND height","slug":"default-width-and-height","link":"#default-width-and-height","children":[{"level":3,"title":"(book or videogame)","slug":"book-or-videogame","link":"#book-or-videogame","children":[]},{"level":3,"title":"Squared (music cd)","slug":"squared-music-cd","link":"#squared-music-cd","children":[]},{"level":3,"title":"Very long","slug":"very-long","link":"#very-long","children":[]}]},{"level":2,"title":"With slots","slug":"with-slots","link":"#with-slots","children":[]},{"level":2,"title":"Custom ratio","slug":"custom-ratio","link":"#custom-ratio","children":[{"level":3,"title":"4.25/6.87","slug":"_4-25-6-87","link":"#_4-25-6-87","children":[]},{"level":3,"title":"16/9","slug":"_16-9","link":"#_16-9","children":[]}]},{"level":2,"title":"Custom ratio with width/height","slug":"custom-ratio-with-width-height","link":"#custom-ratio-with-width-height","children":[{"level":3,"title":"ratio 4.25/6.87 - width 200","slug":"ratio-4-25-6-87-width-200","link":"#ratio-4-25-6-87-width-200","children":[]},{"level":3,"title":"ratio 4.25/6.87 - height 200","slug":"ratio-4-25-6-87-height-200","link":"#ratio-4-25-6-87-height-200","children":[]},{"level":3,"title":"ratio 16/9 - height 200","slug":"ratio-16-9-height-200","link":"#ratio-16-9-height-200","children":[]},{"level":3,"title":"ratio 16/9 - width 200","slug":"ratio-16-9-width-200","link":"#ratio-16-9-width-200","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"cards/BookCard.md"}'),K={name:"cards/BookCard.md"},tt=Object.assign(K,{setup(t){return(a,d)=>{const g=v("Badge");return u(),m("div",null,[B,l(g,{type:"info"},{default:D(()=>[n("Card")]),_:1}),V,N,l(s(o),{title:"LOREM IPSUM",author:"TOAST",color:"#00ff00",image:"https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1.jpg",spine:"https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1-spine.jpg"}),$,l(s(o),{title:"LOREM IPSUM",author:"TOAST",color:"#00ff00",image:"https://placekitten.com/500/500",logo:"https://placekitten.com/100/100"}),j,l(s(o),{image:"https://placekitten.com/700/200",logo:"https://placekitten.com/200/200"}),R,l(s(o),{image:"https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1.jpg",spine:"https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1-spine.jpg"},{spine:D(()=>[W]),default:D(()=>[O]),_:1}),M,l(s(o),{ratio:"4.25/6.87",image:"https://placekitten.com/400/700",spine:"https://placekitten.com/300/300"}),L,l(s(o),{ratio:"16/9",image:"https://placekitten.com/1600/900",spine:"https://placekitten.com/700/700"}),z,l(s(o),{ratio:"4.25/6.87",width:"200",image:"https://placekitten.com/700/700",spine:"https://placekitten.com/400/400"}),U,l(s(o),{ratio:"4.25/6.87",height:"200",image:"https://placekitten.com/700/700",spine:"https://placekitten.com/400/400"}),H,l(s(o),{ratio:"16/9",height:"200",image:"https://placekitten.com/700/700",spine:"https://placekitten.com/400/400"}),J,l(s(o),{ratio:"16/9",width:"200",image:"https://placekitten.com/700/700",spine:"https://placekitten.com/400/400"}),G])}}});export{Z as __pageData,tt as default};
