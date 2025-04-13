(this["webpackJsonptask-mate"]=this["webpackJsonptask-mate"]||[]).push([[0],{23:function(e,t,s){},59:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),r=s(24),n=s.n(r),l=s(25),o=s(2),i=s(1);var d=e=>{let{task:t,onDelete:s,onToggleComplete:a}=e;return Object(i.jsxs)("div",{className:"flex justify-between items-center p-4 border-b "+(t.completed?"bg-green-100":"bg-white"),children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{className:"text-lg font-semibold",children:t.title}),Object(i.jsx)("p",{className:"text-gray-600",children:t.description}),Object(i.jsxs)("p",{className:"text-sm text-gray-500",children:[t.dueDate," | ",t.category]})]}),Object(i.jsxs)("div",{className:"flex items-center",children:[Object(i.jsx)("button",{onClick:()=>a(t.id),className:"mr-2 "+(t.completed?"text-red-500":"text-green-500"),children:t.completed?"Mark Incomplete":"Mark Complete"}),Object(i.jsx)("button",{onClick:()=>s(t.id),className:"text-red-500",children:"Delete"})]})]})},j=s(9),b=s.n(j);const x=Object(a.createContext)(),m=e=>{let{children:t}=e;const[s,c]=Object(a.useState)([]),[r,n]=Object(a.useState)(!0);Object(a.useEffect)((()=>{(async()=>{try{const e=await b.a.get("/api/tasks");c(e.data)}catch(e){console.error("Error fetching tasks:",e)}finally{n(!1)}})()}),[]);const l=async(e,t)=>{try{const a=await b.a.put(`/api/tasks/${e}`,t);c(s.map((t=>t._id===e?a.data:t)))}catch(a){console.error("Error editing task:",a)}};return Object(i.jsx)(x.Provider,{value:{tasks:s,loading:r,addTask:async e=>{try{const t=await b.a.post("/api/tasks",e);c([...s,t.data])}catch(t){console.error("Error adding task:",t)}},editTask:l,deleteTask:async e=>{try{await b.a.delete(`/api/tasks/${e}`),c(s.filter((t=>t._id!==e)))}catch(t){console.error("Error deleting task:",t)}},toggleCompletion:async e=>{const t=s.find((t=>t._id===e));if(t){const s={...t,completed:!t.completed};await l(e,s)}}},children:t})};var h=()=>{const{tasks:e}=Object(a.useContext)(x);return Object(i.jsx)("div",{className:"task-list",children:0===e.length?Object(i.jsx)("p",{children:"No tasks available"}):e.map((e=>Object(i.jsx)(d,{task:e},e._id)))})};var u=e=>{let{onSearch:t}=e;const[s,c]=Object(a.useState)("");return Object(i.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t(s)},className:"flex items-center",children:[Object(i.jsx)("input",{type:"text",placeholder:"Search tasks...",value:s,onChange:e=>c(e.target.value),className:"border rounded p-2 mr-2"}),Object(i.jsx)("button",{type:"submit",className:"bg-blue-500 text-white rounded p-2",children:"Search"})]})};var p=e=>{let{categories:t,selectedCategory:s,onCategoryChange:a}=e;return Object(i.jsxs)("div",{className:"mb-4",children:[Object(i.jsx)("label",{htmlFor:"category",className:"block text-sm font-medium text-gray-700",children:"Filter by Category"}),Object(i.jsxs)("select",{id:"category",value:s,onChange:e=>a(e.target.value),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500",children:[Object(i.jsx)("option",{value:"",children:"All Categories"}),t.map((e=>Object(i.jsx)("option",{value:e,children:e},e)))]})]})};var O=()=>{const{tasks:e}=Object(a.useContext)(x);return Object(i.jsxs)("div",{className:"container mx-auto p-4",children:[Object(i.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Task Mate Dashboard"}),Object(i.jsx)(u,{}),Object(i.jsx)(p,{}),Object(i.jsx)(h,{tasks:e})]})};var g=()=>Object(i.jsx)("div",{className:"flex items-center justify-center h-screen",children:Object(i.jsx)("h1",{className:"text-4xl font-bold",children:"404 - Not Found"})});s(23);var k=()=>Object(i.jsx)(m,{children:Object(i.jsx)(l.a,{children:Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{exact:!0,path:"/",component:O}),Object(i.jsx)(o.a,{component:g})]})})});n.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.34ef6c76.chunk.js.map