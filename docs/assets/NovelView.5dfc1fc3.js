import{u as U,k as i,l as dt,m as _t,q as vt,s as w,v as ut,x as pt,y as j,r as l,o as C,c as x,z as s,b as t,a as n,w as _,t as r,i as y,A as ht,B as mt,j as ft,C as gt,D as bt,E as wt,G as Ct,F as xt,e as kt}from"./index.f8f1d0d6.js";const yt="/G7/imgs/bg_detail_bannerbg.png",Bt="/G7/imgs/bg_banner.png";function Lt(p){const e=["\u9738\u603B","\u4FEE\u771F","\u604B\u7231","\u6821\u56ED","\u5192\u9669","\u641E\u7B11","\u751F\u6D3B","\u70ED\u8840","\u67B6\u7A7A","\u540E\u5BAB","","\u7384\u5E7B","\u60AC\u7591","\u6050\u6016","\u7075\u5F02","\u52A8\u4F5C","\u79D1\u5E7B","\u6218\u4E89","\u53E4\u98CE","\u7A7F\u8D8A","\u7ADE\u6280","\u52B1\u5FD7","\u540C\u4EBA","\u771F\u4EBA"];return p.split(",").map(o=>e[o*1-1]).join("\xB7")}function Nt(){const p=U(),e=i(0),o=p.fullPath,f=k=>{if(p.fullPath===o){var d=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;e.value=d}};return dt(()=>{window.addEventListener("scroll",f)}),_t(()=>{window.removeEventListener("scroll",f)}),e}const Tt={key:0},Dt={class:"navBar"},St={class:"coverBox"},Vt={class:"info"},zt={class:"title"},$t={class:"underTitle"},It={class:"underTitle"},Rt={class:"hotNumber"},At=t("div",{class:"shadow"},[t("img",{class:"bg1",src:yt}),t("img",{class:"bg2",src:Bt})],-1),Et={class:"beginAndContinute"},Qt={class:"detailAndList"},jt={class:"detailInfo"},Ut={class:"notice"},qt=t("div",{class:"recommend"},[t("h3",null,"^_^\u4E3B\u4EBA\uFF0C\u8FD9\u6709\u76F8\u5173\u6F2B\u753B\u4E3A\u4F60\u63A8\u8350~")],-1),Gt={class:"listTop"},Yt=t("h5",null,"\u8FDE\u8F7D",-1),Ft={class:"van-ellipsis"},Pt=t("div",{class:"iconSort"},null,-1),Ht=["onClick"],Mt=ft('<a href="/login"><div class="item"><i class="yp"></i><span>\u6708\u7968</span></div></a><a href="/login"><div class="item"><i class="ds"></i><span>\u6253\u8D4F</span></div></a>',2),Ot=t("div",{class:"item"},[t("i",{class:"share"}),t("span",null,"\u5206\u4EAB")],-1),Wt=[Ot],Jt={class:"popup"},Kt=t("div",{class:"shareBody"},[t("h5",null,"\u5206\u4EAB\u7ED9\u670B\u53CB"),t("div",{class:"flexBox"},[t("a",{href:"/login"},[t("div",{class:"shareQQ aDiv"}),t("p",null,"QQ")]),t("a",{href:"/login"},[t("div",{class:"shareQzone aDiv"}),t("p",null,"qq\u7A7A\u95F4")]),t("a",{href:"/login"},[t("div",{class:"shareWB aDiv"}),t("p",null,"\u5FAE\u535A")])])],-1),te={__name:"NovelView",async setup(p){let e,o;const f=Nt(),k=U(),d=k.params.id,B=vt(),q=()=>history.back(),G=()=>B.push("/"),Y=()=>{},F=([e,o]=w(()=>gt(d)),e=await e,o(),e),{title:L,cover_lateral:P,theme_id:H,author_id:M,content:O,notice:W}=ut(pt(F));let N=i(0);N.value=([e,o]=w(()=>bt(d)),e=await e,o(),e);let T=i(0);T.value=([e,o]=w(()=>wt(d)),e=await e,o(),e);const D=i("list");let h=([e,o]=w(()=>Ct(d)),e=await e,o(),e),{start_time:J,title:K}=h[h.length-1];const v=i([]),g=i(!1),S=i(!1);let m=0;const V=()=>{v.value=v.value.concat(h.slice(m,m+20)),g.value=!1,m=m+20,v.value.length>=h.length&&(S.value=!0)},b=i(!1),z=()=>{b.value=!0},$=i(["\u6B63\u5E8F","\u9006\u5E8F"]),X=()=>{v.value=[],h.reverse(),$.value.reverse(),m=0,g.value=!0,V()},I=i(null),R=i(null);j("chapterTitle",R),j("listIndex",I);const Z=(A,c,u)=>{B.replace(`/${A}/${c}`),I.value=u,R.value=v.value[u].title};return(A,c)=>{const u=l("van-icon"),tt=l("van-nav-bar"),E=l("van-image"),et=l("van-action-bar-icon"),nt=l("van-action-bar-button"),st=l("van-action-bar"),Q=l("van-tab"),ot=l("van-cell"),at=l("van-list"),lt=l("van-tabs"),it=l("van-popup"),ct=l("router-view");return C(),x("div",null,[s(k).params.chapterId?mt("",!0):(C(),x("div",Tt,[t("div",Dt,[n(tt,{title:s(L),"left-arrow":"",onClickLeft:q,border:!1},{right:_(()=>[n(u,{onClick:z,name:"/imgs/ic_nav_share.png",size:"21"}),n(u,{onClick:G,name:"/imgs/ic_nav_gohome.png",size:"21"})]),_:1},8,["title"])]),t("div",St,[n(E,{fit:"contain",width:"100%",height:"210",src:`${s(P)}!banner-600-x`},null,8,["src"]),t("div",Vt,[t("p",zt,r(s(L)),1),t("p",$t,"\u4E3B\u7B14id:"+r(s(M)),1),t("p",It,r(s(Lt)(s(H))),1),t("div",Rt,[n(u,{name:"fire"}),y(r(s(N)),1)])]),At]),t("div",Et,[n(st,null,{default:_(()=>[n(et,{icon:"/imgs/ic_detail_coll_off.png",text:`\u6536\u85CF(${s(T)})`},null,8,["text"]),n(nt,{type:"danger",text:"\u5F00\u59CB\u9605\u8BFB",onClick:Y})]),_:1})]),t("div",Qt,[n(lt,{active:D.value,"onUpdate:active":c[1]||(c[1]=a=>D.value=a),"line-width":"55",color:"#ff7830","title-active-color":"#000"},{default:_(()=>[n(Q,{"title-style":"font-size: 16px;",title:"\u8BE6\u60C5",name:"detail"},{default:_(()=>[t("div",null,[t("div",jt,[y(r(s(O))+" ",1),t("div",Ut,r(s(W)),1)]),qt])]),_:1}),n(Q,{"title-style":"font-size: 16px;",title:"\u76EE\u5F55",name:"list"},{default:_(()=>[t("div",null,[t("div",Gt,[Yt,t("span",Ft,r(new Date(s(J)*1e3).toLocaleDateString().split("/").join("."))+"\u66F4\u65B0\u81F3"+r(s(K)),1),t("div",{class:"sortBtn",onClick:X},[Pt,y(" "+r($.value[0]),1)])]),n(at,{loading:g.value,"onUpdate:loading":c[0]||(c[0]=a=>g.value=a),finished:S.value,"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86",onLoad:V},{default:_(()=>[(C(!0),x(xt,null,kt(v.value,(a,rt)=>(C(),x("div",{class:"listItem",key:a.chapter_id,onClick:Xt=>Z(s(d),a.chapter_id,rt)},[n(E,{radius:"4",width:"120",height:"68",src:`${a.cover}!banner-600-x`},null,8,["src"]),n(ot,{title:a.title,label:new Date(a.start_time*1e3).toLocaleDateString().split("/").join("-")},null,8,["title","label"])],8,Ht))),128))]),_:1},8,["loading","finished"])])]),_:1})]),_:1},8,["active"])]),t("div",{class:"bottomBar"},[Mt,t("a",{href:"#",onClick:z},Wt)]),n(it,{duration:".1",show:b.value,"onUpdate:show":c[3]||(c[3]=a=>b.value=a),position:"bottom",style:ht({backgroundColor:"rgba(255,255,255,0)"})},{default:_(()=>[t("div",Jt,[Kt,t("div",{class:"cancelBtn",onClick:c[2]||(c[2]=a=>b.value=!1)}," \u53D6\u6D88 ")])]),_:1},8,["show","style"])])),n(ct,{sT:s(f)},null,8,["sT"])])}}};export{te as default};
