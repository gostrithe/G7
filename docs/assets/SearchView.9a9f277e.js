import{_ as l,k as s,r as _,o as d,c as h,a as m,T as n}from"./index.dff3b4e7.js";const u={setup(){return{value:s(""),onSearch:e=>n(e),onCancel:()=>n("\u8BF7\u8F93\u5165\u5185\u5BB9")}}},i={action:"/"};function p(a,o,c,e,f,v){const r=_("van-search");return d(),h("form",i,[m(r,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=t=>e.value=t),"show-action":"",placeholder:"\u89E3\u79BB\u5996\u5723","action-text":"\u641C\u7D22",onSearch:e.onSearch,onCancel:e.onCancel},null,8,["modelValue","onSearch","onCancel"])])}const S=l(u,[["render",p]]);export{S as default};