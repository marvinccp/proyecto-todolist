(this["webpackJsonpproyecto-todolist"]=this["webpackJsonpproyecto-todolist"]||[]).push([[0],[,,,,,,,,function(e,t,o){},function(e,t,o){},,,,,function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(1),c=o.n(n),a=o(4),s=o.n(a),r=(o(14),o(6)),l=o(2);var i=o(0),d=c.a.createContext();function u(e){var t=function(e,t){var o=c.a.useState(!1),n=Object(l.a)(o,2),a=n[0],s=n[1],r=c.a.useState(!0),i=Object(l.a)(r,2),d=i[0],u=i[1],j=c.a.useState(t),m=Object(l.a)(j,2),b=m[0],f=m[1];return c.a.useEffect((function(){setTimeout((function(){try{var o,n=localStorage.getItem(e);n?o=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),o=t),f(o),u(!1)}catch(a){s(a)}}),2e3)})),{item:b,saveItem:function(t){try{var o=JSON.stringify(t);localStorage.setItem(e,o),f(t)}catch(a){s(a)}},loading:d,error:a}}("TODOS_V1",[]),o=t.item,n=t.saveItem,a=t.loading,s=t.error,u=c.a.useState(""),j=Object(l.a)(u,2),m=j[0],b=j[1],f=c.a.useState(!1),x=Object(l.a)(f,2),O=x[0],p=x[1],h=o.filter((function(e){return!!e.completed})).length,g=o.length,v=[];v=0===m.length?o:o.filter((function(e){return e.text.toLowerCase().includes(m.toLowerCase())}));return Object(i.jsx)(d.Provider,{value:{error:s,loading:a,totalTodos:g,completedTodos:h,searchValue:m,setSearchValue:b,searchedTodos:v,toggleCompleteTodo:function(e){var t=o.findIndex((function(t){return t.text===e})),c=Object(r.a)(o);c[t].completed=!c[t].completed,n(c)},deleteTodo:function(e){var t=o.findIndex((function(t){return t.text===e})),c=Object(r.a)(o);c.splice(t,1),n(c)},openModal:O,setOpenModal:p,addTodo:function(e){var t=Object(r.a)(o);t.push({completed:!1,text:e}),n(t)}},children:e.children})}o(16);function j(){var e=c.a.useContext(d),t=e.totalTodos,o=e.completedTodos;return Object(i.jsxs)("h2",{className:"todocounter",children:["Tareas pendientes  ",Object(i.jsxs)("span",{className:"todo-red",children:[t-o," "]})]})}o(17);function m(){var e=c.a.useContext(d),t=e.searchValue,o=e.setSearchValue;return[Object(i.jsx)("form",{children:Object(i.jsxs)("div",{className:"search-container",children:[Object(i.jsx)("span",{className:"icon-search-left-out"}),Object(i.jsx)("input",{className:"search-text",placeholder:"Buscar tarea",value:t,onChange:function(e){o(e.target.value)}})]})})]}o(8);function b(e){return Object(i.jsx)("section",{className:"todolist-container",children:Object(i.jsx)("ul",{className:"todolist",children:e.children})})}o(18);function f(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)("span",{className:"icon-check-item Icon Icon-check ".concat(e.completed&&"Icon-check--active .icon-check-item:active"),onClick:e.onComplete}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"Todo-item-check-active "),children:e.text}),Object(i.jsx)("span",{className:"icon-trash-item Icon  Icon-delete",onClick:e.onDelete})]})}o(19);function x(){var e=c.a.useState(""),t=Object(l.a)(e,2),o=t[0],n=t[1],a=c.a.useContext(d),s=a.addTodo,r=a.setOpenModal,u=document.querySelector("#button-create-task");return Object(i.jsxs)("form",{className:"new-task-form",onSubmit:function(e){e.preventDefault(),u.classList.remove("CreateTodoButton-of"),""===o?(alert("Debes escribir una tarea"),u.classList.add("CreateTodoButton-of")):(s(o),r(!1),u.classList.remove("CreateTodoButton-of"))},children:[Object(i.jsx)("textarea",{onChange:function(e){n(e.target.value)},textarea:o,placeholder:"\xbfQu\xe9 tienes por hacer?",className:"new-task-textarea"}),Object(i.jsxs)("div",{className:"buttons-container",children:[Object(i.jsx)("button",{className:"form-button-cancel",type:"button",onClick:function(){u.classList.remove("CreateTodoButton-of"),r(!1)},children:"Cancelar"}),Object(i.jsx)("button",{className:"form-button-add",type:"submit",children:"A\xf1adir"})]})]})}o(20);function O(e){var t=document.querySelector("#button-create-task");return Object(i.jsxs)("button",{id:"button-create-task",className:"CreateTodoButton",onClick:function(){t.classList.add("CreateTodoButton-of"),e.setOpenModal((function(e){return!e})),console.log((function(e){return!e}))},children:["Crear tarea",Object(i.jsx)("span",{className:"sign-plus"})]})}o(21);function p(e){var t=e.children;return s.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}o(9);var h=o.p+"static/media/logo-memo.5d6afa84.png";o(22);function g(e){return Object(i.jsxs)("div",{className:"loading-container",children:[Object(i.jsx)("span",{className:"loadingTodo-completeIcon"}),Object(i.jsx)("p",{className:"loadingTodo-text"}),Object(i.jsx)("span",{className:"loadingTodo-deleteIcon"})]})}function v(e){e.error;return Object(i.jsx)("p",{children:"some wrong be happend..."})}function N(){return Object(i.jsx)("p",{children:"Crea tu primer Todo"})}function T(){var e=c.a.useContext(d),t=e.error,o=e.loading,n=e.searchedTodos,a=e.toggleCompleteTodo,s=e.deleteTodo,r=e.openModal,l=e.setOpenModal;return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"logo-container  container",children:Object(i.jsx)("img",{className:"logo-memo",src:h,alt:"logo-memo"})}),Object(i.jsx)(j,{}),Object(i.jsx)(m,{}),Object(i.jsxs)(b,{children:[o&&Object(i.jsx)(g,{}),t&&Object(i.jsx)(v,{}),!o&&!n.length&&Object(i.jsx)(N,{}),n.map((function(e){return Object(i.jsx)(f,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return s(e.text)}},e.text)}))]}),!!r&&Object(i.jsx)(p,{children:Object(i.jsx)(x,{})}),Object(i.jsx)(O,{setOpenModal:l})]})}var C=function(e){return Object(i.jsx)(u,{children:Object(i.jsx)(T,{})})};s.a.render(Object(i.jsx)(C,{className:"container"}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.1db2e5bc.chunk.js.map