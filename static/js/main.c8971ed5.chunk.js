(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(8),s=n.n(l),i=(n(14),n(5)),r=n(2),u=(n(15),n(7)),o=(n(16),n(17),n(0)),j=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),u=i[0],j=i[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),x=b[0],O=b[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+u,date:new Date(x)};e.onSaveExpenseData(n),l(""),j(""),O("")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",onChange:function(e){l(e.target.value)},value:c})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",onChange:function(e){j(e.target.value)},value:u})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",onChange:function(e){O(e.target.value)},value:x})]})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{type:"button",onClick:function(){e.onCancel()},children:"Cancel"}),Object(o.jsx)("button",{type:"submit",children:"Add Expense"})]})]})},d=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],l=n[1],s=function(){l((function(e){return!e}))};return Object(o.jsxs)("div",{className:"new-expense",children:[!c&&Object(o.jsx)("button",{onClick:s,children:"Add New Expense"}),c&&Object(o.jsx)(j,{onCancel:s,onSaveExpenseData:function(t){var n=Object(u.a)(Object(u.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),l(!1)}})]})},b=(n(19),n(20),function(e){var t="card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})}),x=(n(21),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by year"}),Object(o.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"})]})]})})}),O=n(9),h=(n(22),n(23),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),v=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(o.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(h,{value:e.value,maxValue:n,label:e.label},e.label)}))})},m=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(O.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(o.jsx)(v,{dataPoints:n})},p=(n(24),n(25),n(26),function(e){var t=e.date.getFullYear(),n=e.date.toLocaleString("en-US",{month:"long"}),a=e.date.toLocaleString("en-US",{day:"2-digit"});return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__month",children:n}),Object(o.jsx)("div",{className:"expense-date__year",children:t}),Object(o.jsx)("div",{className:"expense-date__day",children:a})]})}),f=function(e){return Object(o.jsx)("li",{children:Object(o.jsxs)(b,{className:"expense-item",children:[Object(o.jsx)(p,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},g=function(e){return 0===e.items.length?Object(o.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses"}):Object(o.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(o.jsx)(f,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},_=function(e){var t=Object(a.useState)((new Date).getFullYear().toString()),n=Object(r.a)(t,2),c=n[0],l=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(o.jsx)("div",{children:Object(o.jsxs)(b,{className:"expenses",children:[Object(o.jsx)(x,{selected:c,onChangeFilter:function(e){l(e)}}),Object(o.jsx)(m,{expenses:s}),Object(o.jsx)(g,{items:s})]})})},N=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],S=function(){var e=Object(a.useState)(N),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{onAddExpense:function(e){console.log(e),c((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(o.jsx)(_,{items:n})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root")),w()}],[[27,1,2]]]);
//# sourceMappingURL=main.c8971ed5.chunk.js.map