import{f as d,g as a,d as i,m as l,_ as r}from"../app.1be821d7.js";import"./UserCardSimple.vue_vue_type_style_index_0_lang.4ed993c7.js";const n=["src","alt","title"],s=["aria-label","aria-details"],h=["src","alt","title"],u=["poster","alt","title"],o=["src","type"],g=d({__name:"Media",props:{media:{type:String,required:!0},type:{type:String,default:()=>"image"},height:{type:String,required:!1},width:{type:String,required:!1},thumbnail:{type:String,required:!1},ratio:{type:String,required:!1},title:{type:String,default:()=>""},alt:{type:String,default:()=>""}},setup(e){return(t,m)=>e.type==="image"?a(t.$slots,"image",{key:0},()=>[i("img",l({src:e.media,alt:e.alt,title:e.title,style:{height:e.height,width:e.width}},t.$attrs),null,16,n)],!0):e.type==="color"?a(t.$slots,"color",{key:1},()=>[i("div",l({style:{"background-color":e.media,height:e.height,width:e.width}},t.$attrs),null,16)],!0):e.type==="css"?a(t.$slots,"css",{key:2},()=>[i("div",l({style:{"background-image":"url('"+e.media+"')","background-repeat":"no-repeat","background-position":"center","background-size":"cover",height:e.height,width:e.width},"aria-label":e.title,"aria-details":e.alt},t.$attrs),null,16,s)],!0):e.type==="iframe"?a(t.$slots,"iframe",{key:3},()=>[i("div",l({style:{height:e.height,width:e.width}},t.$attrs,{class:"media-iframe-container"}),[i("iframe",{ref:"iframeRef",src:e.media,frameborder:"0",allowfullscreen:"",autoplay:"",mute:"",loop:"",alt:e.alt,title:e.title},null,8,h)],16)],!0):a(t.$slots,"video",{key:4},()=>[i("video",l({style:{height:e.height,width:e.width},preload:"metadata",playsinline:"",muted:"",loop:"",autoplay:"",poster:e.thumbnail,alt:e.alt,title:e.title},t.$attrs),[i("source",{src:e.media,type:e.type},null,8,o)],16,u)],!0)}}),f=r(g,[["__scopeId","data-v-7472711c"]]);export{f as M};