(this["webpackJsonpproyecto-todolist"]=this["webpackJsonpproyecto-todolist"]||[]).push([[0],[,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(4),s=n.n(a),r=(n(14),n(6)),i=n(2);var l=n(0),d=c.a.createContext();function u(e){var t=function(e,t){var n=c.a.useState(!1),o=Object(i.a)(n,2),a=o[0],s=o[1],r=c.a.useState(!0),l=Object(i.a)(r,2),d=l[0],u=l[1],j=c.a.useState(t),m=Object(i.a)(j,2),b=m[0],f=m[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),f(n),u(!1)}catch(a){s(a)}}),2e3)})),{item:b,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),f(t)}catch(a){s(a)}},loading:d,error:a}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,s=t.error,u=c.a.useState(""),j=Object(i.a)(u,2),m=j[0],b=j[1],f=c.a.useState(!1),x=Object(i.a)(f,2),O=x[0],p=x[1],h=n.filter((function(e){return!!e.completed})).length,g=n.length,v=[];v=0===m.length?n:n.filter((function(e){return e.text.toLowerCase().includes(m.toLowerCase())}));return Object(l.jsx)(d.Provider,{value:{error:s,loading:a,totalTodos:g,completedTodos:h,searchValue:m,setSearchValue:b,searchedTodos:v,toggleCompleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(r.a)(n);c[t].completed=!c[t].completed,o(c)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(r.a)(n);c.splice(t,1),o(c)},openModal:O,setOpenModal:p,addTodo:function(e){var t=Object(r.a)(n);t.push({completed:!1,text:e}),o(t)}},children:e.children})}n(16);function j(){var e=c.a.useContext(d),t=e.totalTodos,n=e.completedTodos;return Object(l.jsxs)("h2",{className:"todocounter",children:["Tareas pendientes  ",Object(l.jsxs)("span",{className:"todo-red",children:[t-n," "]})]})}n(17);function m(){var e=c.a.useContext(d),t=e.searchValue,n=e.setSearchValue;return[Object(l.jsx)("form",{children:Object(l.jsxs)("div",{className:"search-container",children:[Object(l.jsx)("span",{className:"icon-search-left-out"}),Object(l.jsx)("input",{className:"search-text",placeholder:"Buscar tarea",value:t,onChange:function(e){n(e.target.value)}})]})})]}n(8);function b(e){return Object(l.jsx)("section",{className:"todolist-container",children:Object(l.jsx)("ul",{className:"todolist",children:e.children})})}n(18);function f(e){return Object(l.jsxs)("li",{className:"TodoItem",children:[Object(l.jsx)("span",{className:"icon-check-item Icon Icon-check ".concat(e.completed&&"Icon-check--active .icon-check-item:active"),onClick:e.onComplete}),Object(l.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"Todo-item-check-active "),children:e.text}),Object(l.jsx)("span",{className:"icon-trash-item Icon  Icon-delete",onClick:e.onDelete})]})}n(19);function x(){var e=c.a.useState(""),t=Object(i.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(d),s=a.addTodo,r=a.setOpenModal,u=document.querySelector("#button-create-task");return Object(l.jsxs)("form",{className:"new-task-form",onSubmit:function(e){e.preventDefault(),u.classList.remove("CreateTodoButton-of"),""===n?(alert("Debes escribir una tarea"),u.classList.add("CreateTodoButton-of")):(s(n),r(!1),u.classList.remove("CreateTodoButton-of"))},children:[Object(l.jsx)("textarea",{onChange:function(e){o(e.target.value)},textarea:n,placeholder:"\xbfQu\xe9 tienes por hacer?",className:"new-task-textarea"}),Object(l.jsxs)("div",{className:"buttons-container",children:[Object(l.jsx)("button",{className:"form-button-cancel",type:"button",onClick:function(){u.classList.remove("CreateTodoButton-of"),r(!1)},children:"Cancelar"}),Object(l.jsx)("button",{className:"form-button-add",type:"submit",children:"A\xf1adir"})]})]})}n(20);function O(e){var t=document.querySelector("#button-create-task");return Object(l.jsxs)("button",{id:"button-create-task",className:"CreateTodoButton",onClick:function(){t.classList.add("CreateTodoButton-of"),e.setOpenModal((function(e){return!e})),console.log((function(e){return!e}))},children:["Crear tarea",Object(l.jsx)("span",{className:"sign-plus"})]})}n(21);function p(e){var t=e.children;return s.a.createPortal(Object(l.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(9);var h=n.p+"static/media/logo-memo.5d6afa84.png";n(22);function g(e){return Object(l.jsxs)("div",{className:"loading-container",children:[Object(l.jsx)("span",{className:"loadingTodo-completeIcon"}),Object(l.jsx)("p",{className:"loadingTodo-text"}),Object(l.jsx)("span",{className:"loadingTodo-deleteIcon"})]})}function v(e){e.error;return Object(l.jsx)("p",{children:"some wrong be happend..."})}n(23);var N=n.p+"static/media/imagen-noHayTareas.7fcc17d8.png";function T(){return Object(l.jsx)("div",{className:"empty-image-container",children:Object(l.jsx)("img",{className:"empty-image",src:N,alt:"imagen-no-hay-tareas"})})}function C(){var e=c.a.useContext(d),t=e.error,n=e.loading,o=e.searchedTodos,a=e.toggleCompleteTodo,s=e.deleteTodo,r=e.openModal,i=e.setOpenModal;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"logo-container  container",children:Object(l.jsx)("img",{className:"logo-memo",src:h,alt:"logo-memo"})}),Object(l.jsx)(j,{}),Object(l.jsx)(m,{}),Object(l.jsxs)(b,{children:[n&&Object(l.jsx)(g,{}),t&&Object(l.jsx)(v,{}),!n&&!o.length&&Object(l.jsx)(T,{}),o.map((function(e){return Object(l.jsx)(f,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return s(e.text)}},e.text)}))]}),!!r&&Object(l.jsx)(p,{children:Object(l.jsx)(x,{})}),Object(l.jsx)(O,{setOpenModal:i})]})}var I=function(e){return Object(l.jsx)(u,{children:Object(l.jsx)(C,{})})};s.a.render(Object(l.jsx)(I,{className:"container"}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.b657f151.chunk.js.map