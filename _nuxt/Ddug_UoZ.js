import{u as p,ab as d,r as g,N as H,ac as j,a2 as B,ad as b,ae as M,af as O,ag as R,E as S,a3 as N,ah as E,b as V}from"./BieJg-ce.js";const K=s=>s==="defer"||s===!1;function F(...s){var v;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[e,f,a={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=p(),P=f,w=()=>d.value,C=()=>t.isHydrating?t.payload.data[e]:t.static.data[e];a.server??(a.server=!0),a.default??(a.default=w),a.getCachedData??(a.getCachedData=C),a.lazy??(a.lazy=!1),a.immediate??(a.immediate=!0),a.deep??(a.deep=d.deep),a.dedupe??(a.dedupe="cancel");const u=a.getCachedData(e,t),h=u!=null;if(!t._asyncData[e]||!a.immediate){(v=t.payload._errors)[e]??(v[e]=d.errorValue);const o=a.deep?g:H;t._asyncData[e]={data:o(h?u:a.default()),pending:g(!h),error:j(t.payload._errors,e),status:g("idle"),_default:a.default}}const n={...t._asyncData[e]};delete n._default,n.refresh=n.execute=(o={})=>{if(t._asyncDataPromises[e]){if(K(o.dedupe??a.dedupe))return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if(o._initial||t.isHydrating&&o._initial!==!1){const c=o._initial?u:a.getCachedData(e,t);if(c!=null)return Promise.resolve(c)}n.pending.value=!0,n.status.value="pending";const l=new Promise((c,i)=>{try{c(P(t))}catch(y){i(y)}}).then(async c=>{if(l.cancelled)return t._asyncDataPromises[e];let i=c;a.transform&&(i=await a.transform(c)),a.pick&&(i=x(i,a.pick)),t.payload.data[e]=i,n.data.value=i,n.error.value=d.errorValue,n.status.value="success"}).catch(c=>{if(l.cancelled)return t._asyncDataPromises[e];n.error.value=R(c),n.data.value=S(a.default()),n.status.value="error"}).finally(()=>{l.cancelled||(n.pending.value=!1,delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=l,t._asyncDataPromises[e]},n.clear=()=>T(t,e);const _=()=>n.refresh({_initial:!0}),m=a.server!==!1&&t.payload.serverRendered;{const o=N();if(o&&m&&a.immediate&&!o.sp&&(o.sp=[]),o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;E(()=>{i.forEach(y=>{y()}),i.splice(0,i.length)}),V(()=>i.splice(0,i.length))}m&&t.isHydrating&&(n.error.value||u!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):o&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(_):a.immediate&&_();const l=M();if(a.watch){const i=B(a.watch,()=>n.refresh());l&&b(i)}const c=t.hook("app:data:refresh",async i=>{(!i||i.includes(e))&&await n.refresh()});l&&b(c)}const D=Promise.resolve(t._asyncDataPromises[e]).then(()=>n);return Object.assign(D,n),D}async function I(s){await new Promise(e=>O(e)),await p().hooks.callHookParallel("app:data:refresh",void 0)}function T(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=d.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=void 0,s._asyncData[r].error.value=d.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function x(s,r){const e={};for(const f of r)e[f]=s[f];return e}const L={content:"v3.3.0--6ITK_20iKg2ZH4fYL1dWzRr-6_wbh2u50MNMeuVOhBg",blog:"v3.3.0--RXdSl4CHQlCHcF1SIAHAHddgHXBQSFLTWl7sbnkvHos"},Q={content:"_content_content",blog:"_content_blog",info:"_content_info"},W={content:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},blog:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",author:"string",date:"date",tags:"json",image:"string"}},info:{type:"data",fields:{}}};export{W as a,L as c,I as r,Q as t,F as u};
