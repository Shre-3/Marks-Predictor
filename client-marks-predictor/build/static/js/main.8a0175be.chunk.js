(this["webpackJsonpmarks-predictor"]=this["webpackJsonpmarks-predictor"]||[]).push([[0],{61:function(e,a,l){e.exports=l(88)},66:function(e,a,l){},67:function(e,a,l){},88:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),r=l(9),c=l.n(r),o=(l(66),l(67),l(113)),m=l(115),i=l(125),u=l(126),s=l(124),E=l(117),d=l(123),b=l(118),g=l(122),v=l(119),p=l(120),y=l(121);const f=Object(o.a)(e=>({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},radio:{display:"flex",flexDirection:"row",alignItems:"center"},radioSet:{display:"flex",flexDirection:"column",alignItems:"center"}}));function x(e){let{setQuery:a,getPrediction:l}=e;const r=f(),[c,o]=Object(t.useState)(!1),[x,h]=Object(t.useState)(""),[D,k]=Object(t.useState)(!1),[w,O]=Object(t.useState)(15),[S,L]=Object(t.useState)(0),[N,H]=Object(t.useState)(1),[j,M]=Object(t.useState)(0),[V,I]=Object(t.useState)(0),W=()=>{o(!1)},A=[{value:0,label:"0%"},{value:50,label:"50%"},{value:100,label:"100%"}];return n.a.createElement("div",{style:{maxWidth:"600px"}},!1===D&&n.a.createElement("form",{className:r.form,noValidate:!0,onSubmit:e=>{e.preventDefault();const{sex:a,romantic:t,goout:n,Walc:r,Dalc:c}=e.target.elements;if(!(a.value&&t.value&&n.value&&r.value&&c.value))return h("Please Fill In All Fields!"),o(!0),"";{const e={age:w,sex:Number(a.value),romantic:Number(t.value),goout:Number(n.value),Walc:Number(r.value),Dalc:Number(c.value),failures:S,studytime:10-N,G1:j/5,G2:V/5};console.log(e),l(e)}}},n.a.createElement(m.a,{container:!0,spacing:2},n.a.createElement("h3",null,"Personal Questions"),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(i.a,{component:"legend"},n.a.createElement("strong",null,"1. How Old Are You?")),n.a.createElement(u.a,{defaultValue:15,onChange:(e,a)=>{O(a)},id:"age","aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:[{value:15,label:"15"},{value:22,label:"22"}],min:15,max:22})),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(i.a,{component:"legend"},n.a.createElement("strong",null,"2. Pick Your Gender:")," "),n.a.createElement(s.a,{"aria-label":"sex",name:"sex",id:"sex",className:r.radio},n.a.createElement(E.a,{value:"1",control:n.a.createElement(d.a,null),label:"Male"}),n.a.createElement(E.a,{value:"0",control:n.a.createElement(d.a,null),label:"Female"}))),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(i.a,{component:"legend"},n.a.createElement("strong",null,"3. Are You In A Romantic Relationship?")," "),n.a.createElement(s.a,{"aria-label":"romantic",name:"romantic",id:"romantic",className:r.radio},n.a.createElement(E.a,{value:"1",control:n.a.createElement(d.a,null),label:"YES"}),n.a.createElement(E.a,{value:"0",control:n.a.createElement(d.a,null),label:"NO"}))),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(i.a,{component:"legend"},n.a.createElement("strong",null,"4. How Often Do You use Social Media?")," ","(frequency)"),n.a.createElement(s.a,{"aria-label":"goout",name:"goout",id:"goout",className:r.radio},n.a.createElement(E.a,{value:"1",control:n.a.createElement(d.a,null),label:"Very Low"}),n.a.createElement(E.a,{value:"2",control:n.a.createElement(d.a,null),label:"Low"}),n.a.createElement(E.a,{value:"3",control:n.a.createElement(d.a,null),label:"Moderate"}),n.a.createElement(E.a,{value:"4",control:n.a.createElement(d.a,null),label:"High"}),n.a.createElement(E.a,{value:"5",control:n.a.createElement(d.a,null),label:"Very High"}))),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(i.a,{component:"legend"},n.a.createElement("strong",null,"5. How Often Do You Party?")," (frequency)"),n.a.createElement(s.a,{"aria-label":"Walc",name:"Walc",id:"Walc",className:r.radio},n.a.createElement(E.a,{value:"1",control:n.a.createElement(d.a,null),label:"Very Low"}),n.a.createElement(E.a,{value:"2",control:n.a.createElement(d.a,null),label:"Low"}),n.a.createElement(E.a,{value:"3",control:n.a.createElement(d.a,null),label:"Moderate"}),n.a.createElement(E.a,{value:"4",control:n.a.createElement(d.a,null),label:"High"}),n.a.createElement(E.a,{value:"5",control:n.a.createElement(d.a,null),label:"Very High"}))),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(i.a,{component:"legend"},n.a.createElement("strong",null,"6. How Often Do You Binge Watch Series?")," ","(frequency)"),n.a.createElement(s.a,{"aria-label":"Dalc",name:"Dalc",id:"Dalc",className:r.radio},n.a.createElement(E.a,{value:"1",control:n.a.createElement(d.a,null),label:"Very Low"}),n.a.createElement(E.a,{value:"2",control:n.a.createElement(d.a,null),label:"Low"}),n.a.createElement(E.a,{value:"3",control:n.a.createElement(d.a,null),label:"Moderate"}),n.a.createElement(E.a,{value:"4",control:n.a.createElement(d.a,null),label:"High"}),n.a.createElement(E.a,{value:"5",control:n.a.createElement(d.a,null),label:"Very High"}))),n.a.createElement("h3",null,"Academic Questions"),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(i.a,{component:"legend"},n.a.createElement("strong",null,"7. How Many Backlogs Do You Have?")),n.a.createElement(u.a,{defaultValue:0,id:"failures",valueLabelDisplay:"on",onChange:(e,a)=>{L(a)},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"}],min:0,max:3})),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(i.a,{component:"legend"},n.a.createElement("strong",null,"8.How Many Hours Do You Study Per Week?")),n.a.createElement(u.a,{defaultValue:1,id:"studytime",onChange:(e,a)=>{H(a)},valueLabelDisplay:"on","aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:[{value:1,label:"1h"},{value:5,label:"5h"},{value:10,label:"10h"}],min:1,max:10})),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(i.a,{component:"legend"},n.a.createElement("strong",null,"9. Internal Assessment 1 Mark:")," ",n.a.createElement("i",null,"...estimate if unknown")," "),n.a.createElement(u.a,{defaultValue:0,id:"G1",onChange:(e,a)=>{M(a)},valueLabelDisplay:"on","aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:5,marks:A,min:0,max:100})),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(i.a,{component:"legend"},n.a.createElement("strong",null,"10. Internal Assessment 2 Mark:")," ",n.a.createElement("i",null,"...estimate if unknown")," "),n.a.createElement(u.a,{defaultValue:0,id:"G2",onChange:(e,a)=>{I(a)},valueLabelDisplay:"on","aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:5,marks:A,min:0,max:100}))),n.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:r.submit},n.a.createElement("strong",null,"PREDICT FINAL MARK!"))),n.a.createElement("div",null,n.a.createElement(g.a,{open:c,onClose:W,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},n.a.createElement(v.a,null,n.a.createElement(p.a,{id:"alert-dialog-description"},x)),n.a.createElement(y.a,null,n.a.createElement(b.a,{onClick:W,color:"primary",autoFocus:!0},"OK")))))}var h=l(52),D=l.n(h);l(87);var k=function(){const[e,a]=Object(t.useState)(),[l,r]=Object(t.useState)();return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null," ",n.a.createElement("span",{role:"img","ariel-aria-label":"emoji"},"\ud83e\udd37\ud83c\udffd\u200d\u2640\ufe0f")," What Mark Will I Get? ",n.a.createElement("span",{role:"img","ariel-aria-label":"emoji"},"\ud83e\udd37\ud83c\udffe\u200d\u2642\ufe0f")),n.a.createElement(x,{setQuery:a,getPrediction:async e=>{const a=await D.a.post("http://127.0.0.1:5000/predict",e);r(a.data)}}),l&&n.a.createElement("div",null,n.a.createElement("h3",null,"Predicted Mark: ",5*l,"% ")))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.8a0175be.chunk.js.map