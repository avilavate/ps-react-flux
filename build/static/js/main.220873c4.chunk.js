(this["webpackJsonpps-react-flux"]=this["webpackJsonpps-react-flux"]||[]).push([[0],{25:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);a(26);var n=a(0),r=a.n(n),l=a(17),c=a(2);var o=function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Course Administration"),r.a.createElement("p",null,"React Flux & React Router for ultra fast Web Apps."),r.a.createElement("p",null,r.a.createElement(c.b,{className:"btn btn-primary",to:"/about"},"About")))},u=a(20),m=a(21),s=a(23),i=a(22),E=a(24),p=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"This is About page"))}}]),t}(r.a.Component),b=a(6);var h=function(){var e={color:"orange"};return r.a.createElement("nav",null,r.a.createElement(c.c,{exact:!0,activeStyle:e,to:"/"},"Home")," | ",r.a.createElement(c.c,{activeStyle:e,to:"/about"},"About")," | ",r.a.createElement(c.c,{activeStyle:e,to:"/courses"},"Courses"))},f=a(10),d=a(8),v=a(13),g=a.n(v);function y(e){var t;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.ok){a.next=2;break}return a.abrupt("return",e.json());case 2:if(400!==e.status){a.next=7;break}return a.next=5,g.a.awrap(e.text());case 5:throw t=a.sent,new Error(t);case 7:throw new Error("Network response was not ok.");case 8:case"end":return a.stop()}}))}function N(e){throw console.error("API call failed. "+e),e}var x="http://localhost:3001/courses";var C=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"table-dark"},r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Author Id"),r.a.createElement("th",null,"Category"))),r.a.createElement("tbody",null,e.courses.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(c.b,{to:"/course/"+e.slug}," ",e.title)),r.a.createElement("td",null,e.authorId),r.a.createElement("td",null,e.category))})))))};var j=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch(x).then(y).catch(N).then((function(e){l(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Course"),r.a.createElement(C,{courses:a}))};var O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Page not found!"),r.a.createElement("p",null,r.a.createElement(c.b,{to:"/"},"Home")))},w=a(9);var k=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{id:"title",type:"text",name:"title",onChange:e.onChange,className:"form-control",value:e.course.title}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"author"},"Author"),r.a.createElement("div",{className:"field"},r.a.createElement("select",{id:"author",name:"authorId",onChange:e.onChange,value:e.course.authorId,className:"form-control"},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"1"},"Cory House"),r.a.createElement("option",{value:"2"},"Scott Allen")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"text",id:"category",name:"category",onChange:e.onChange,className:"form-control",value:e.course.category}))),r.a.createElement("input",{type:"submit",value:"Save",className:"btn btn-primary"}))},A=function(e){var t=Object(n.useState)({id:null,title:"",slug:"",authorId:null,category:""}),a=Object(f.a)(t,2),l=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Manage Course"),r.a.createElement(k,{course:l,onChange:function(e){var t=Object(d.a)({},l,Object(w.a)({},e.target.name,e.target.value));console.log("Updated Course: "+JSON.stringify(t)),c(t)}}))};var F=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(h,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/",exact:!0,component:o}),r.a.createElement(b.b,{path:"/about",exact:!0,component:p}),r.a.createElement(b.b,{path:"/courses",exact:!0,component:j}),r.a.createElement(b.b,{path:"/course/:slug",exact:!0,component:A}),r.a.createElement(b.a,{from:"/about-page",to:"/about"}),r.a.createElement(b.b,{component:O})))};Object(l.render)(r.a.createElement(c.a,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.220873c4.chunk.js.map