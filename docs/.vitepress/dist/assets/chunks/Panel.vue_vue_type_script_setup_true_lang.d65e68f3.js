import{M as c}from"./Media.1897f0a0.js";import{f as u,j as h,k as r,o as f,c as p,g as o,d as l,n as g,l as m,u as y,a as b}from"../app.1be821d7.js";const k=l("div",{class:"panel-shadow"},null,-1),w={class:"panel-content"},T=u({__name:"Panel",props:{height:{type:String,required:!1},background:{type:String,required:!1},backgroundType:{type:String,default:()=>"image"},backgroundThumbnail:{type:String,required:!1},backgroundTitle:{type:String,default:()=>""},backgroundAlt:{type:String,default:()=>""},shadow:{type:String,required:!1},shadowOpacity:{type:Number,default:()=>.4},centered:{type:Boolean,default:()=>!1},bottom:{type:Boolean,default:()=>!1},strict:{type:Boolean,default:()=>!1},hero:{type:Boolean,default:()=>!1},wallpaper:{type:Boolean,default:()=>!1},ratio:{type:String,required:!1}},setup(e){const a=e,n=h(),s=r(()=>{if(!a.ratio)return 1;const t=a.ratio.split(":").join(",").split("/").join(",").split("-").join(",").split(".").join(",").split(",");return parseFloat((parseFloat(t[1])/parseFloat(t[0])).toFixed(2))}),d=r(()=>{const t={"--hero-panel-aspect-ratio":s.value*100+"%"};return a.hero&&(t[a.strict?"height":"min-height"]="100vh"),a.height&&(t[a.strict?"height":"min-height"]=a.height),a.shadow&&(t["--hero-panel-shadow-color"]=a.shadow,t["--hero-panel-shadow-opacity"]=a.shadowOpacity),t});return(t,S)=>(f(),p("div",{ref_key:"panelRef",ref:n,class:g(["hero-panel",{"shadow-active":e.shadow&&e.shadow.length>0,"wallpaper-mode":e.wallpaper,"aspect-ratio-mode":e.ratio,"centered-mode":e.centered,"bottom-mode":e.bottom}]),style:m(y(d))},[o(t.$slots,"backgroundShadow",{},()=>[k]),o(t.$slots,"background",{},()=>{var i;return[b(c,{class:"panel-background",media:e.background,type:e.backgroundType,thumbnail:e.backgroundThumbnail,title:e.backgroundTitle,alt:e.backgroundAlt,height:e.backgroundType==="iframe"?((i=n.value)==null?void 0:i.clientHeight)+"px":void 0},null,8,["media","type","thumbnail","title","alt","height"])]}),l("div",w,[l("div",null,[o(t.$slots,"default")])])],6))}});export{T as _};