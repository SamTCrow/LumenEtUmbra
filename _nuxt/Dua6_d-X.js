import{q as x,_ as z}from"./JRrvCGYn.js";import{d as c,D as h,E as e,n as p,w as o,i as r,G as f,H as v,P as B,I as D,c as d,r as V,g as _,F as N,J as P,e as y,f as u,C as A,B as m,t as g}from"./DhbYyjd9.js";import{u as k}from"./CIZp1sJq.js";const w=c({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(a){const s=a;return(t,n)=>(r(),h(e(B),{"data-slot":"button",as:t.as,"as-child":t.asChild,class:p(e(v)(e(F)({variant:t.variant,size:t.size}),s.class))},{default:o(()=>[f(t.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),F=D("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}}),L=c({__name:"Card",props:{class:{}},setup(a){const s=a;return(t,n)=>(r(),d("div",{"data-slot":"card",class:p(e(v)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",s.class))},[f(t.$slots,"default")],2))}}),S=c({__name:"CardContent",props:{class:{}},setup(a){const s=a;return(t,n)=>(r(),d("div",{"data-slot":"card-content",class:p(e(v)("px-6",s.class))},[f(t.$slots,"default")],2))}}),j=c({__name:"CardDescription",props:{class:{}},setup(a){const s=a;return(t,n)=>(r(),d("p",{"data-slot":"card-description",class:p(e(v)("text-muted-foreground text-sm",s.class))},[f(t.$slots,"default")],2))}}),q=c({__name:"CardFooter",props:{class:{}},setup(a){const s=a;return(t,n)=>(r(),d("div",{"data-slot":"card-footer",class:p(e(v)("flex items-center px-6 [.border-t]:pt-6",s.class))},[f(t.$slots,"default")],2))}}),E=c({__name:"CardHeader",props:{class:{}},setup(a){const s=a;return(t,n)=>(r(),d("div",{"data-slot":"card-header",class:p(e(v)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s.class))},[f(t.$slots,"default")],2))}}),H=c({__name:"CardTitle",props:{class:{}},setup(a){const s=a;return(t,n)=>(r(),d("h3",{"data-slot":"card-title",class:p(e(v)("leading-none font-semibold",s.class))},[f(t.$slots,"default")],2))}}),I={class:"flex flex-col gap-4"},T={class:"flex justify-between w-full mt-4"},G={class:"flex justify-between max-w-prose mx-auto w-full my-2"},K=c({__name:"index",setup(a){const s=V(0),{data:t,refresh:n}=k(()=>x("blog").order("date","DESC").limit(10).skip(s.value).all(),"$qMc483posa"),{data:b}=k(()=>x("blog").count(),"$BAWIFA8AwL");return(J,l)=>{const C=z,$=A;return r(),d("div",I,[(r(!0),d(N,null,P(e(t),i=>(r(),h(e(L),{class:"w-[60%] mx-auto hover:border-accent border transition-colors duration-150"},{default:o(()=>[u($,{to:i.path},{default:o(()=>[u(e(E),null,{default:o(()=>[u(e(H),{class:"text-2xl font-bold"},{default:o(()=>[m(g(i.title),1)]),_:2},1024),u(e(j),null,{default:o(()=>[m(g(i.description),1)]),_:2},1024)]),_:2},1024),u(e(S),null,{default:o(()=>[u(C,{value:i,class:"prosa line-clamp-4"},null,8,["value"])]),_:2},1024),u(e(q),null,{default:o(()=>[_("div",T,[_("span",null,g(i.author),1),_("span",null,g(new Date(i.date).toLocaleDateString()),1)])]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),256)),_("div",G,[e(s)>0?(r(),h(w,{key:0,onClick:l[0]||(l[0]=i=>{s.value-=10,e(n)()}),variant:"ghost",class:"hover:cursor-pointer"},{default:o(()=>l[2]||(l[2]=[m("Post precedenti")])),_:1})):y("",!0),e(b)&&e(b)-e(s)>10?(r(),h(w,{key:1,variant:"ghost",class:"hover:cursor-pointer",onClick:l[1]||(l[1]=i=>{s.value+=10,e(n)()})},{default:o(()=>l[3]||(l[3]=[m("Post successivi")])),_:1})):y("",!0)])])}}});export{K as default};
