(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},16:function(t,e,o){},18:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o.n(n),a=o(8),c=o.n(a),s=(o(14),o.p,o(15),o(3)),i=o(2),d=o(4),u=o(5),j=o(7),l=o(6),p=(o(16),o(0)),m=function(){var t=function(t){Object(j.a)(o,t);var e=Object(l.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(u.a)(o,[{key:"render",value:function(){return Object(p.jsx)("h1",{children:"CGU Todo list"})}}]),o}(r.a.Component),e=function(t){Object(j.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).todoRef=r.a.createRef(),t.addItemOnList=function(e){e.preventDefault();var o={todo:t.todoRef.current.value,isCompleted:!1};t.props.addToDoItems(o),e.currentTarget.reset()},t}return Object(u.a)(o,[{key:"render",value:function(){return Object(p.jsxs)("form",{id:"todoList-form",onSubmit:this.addItemOnList,children:[Object(p.jsx)("input",{type:"text",name:"todosTxtbx",ref:this.todoRef,required:!0}),Object(p.jsx)("button",{children:"+"})]})}}]),o}(r.a.Component),o=function(t){Object(j.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).handleChange=function(e){var o=Object(i.a)(Object(i.a)({},t.props.todoItems),{},Object(s.a)({},e.currentTarget.name,e.currentTarget.value));console.log(e.currentTarget.value),t.props.updateTodos(t.props.index,o)},t.toggleCheckbox=function(e){var o=Object(i.a)(Object(i.a)({},t.props.todoItems),{},Object(s.a)({},e.currentTarget.name,e.currentTarget.checked));t.props.updateTodos(t.props.index,o)},t}return Object(u.a)(o,[{key:"render",value:function(){var t=this;return Object(p.jsxs)("li",{className:this.props.todoItems.isCompleted?"done":null,children:[Object(p.jsx)("input",{type:"checkbox",name:"isCompleted",checked:this.props.todoItems.isCompleted,onChange:this.toggleCheckbox}),Object(p.jsx)("input",{type:"text",name:"todo",value:this.props.todoItems.todo,onChange:this.handleChange}),Object(p.jsx)("button",{className:"del-btn",onClick:function(){return t.props.removeToDoItem(t.props.index)},children:"x"})]})}}]),o}(r.a.Component),a=function(n){Object(j.a)(a,n);var r=Object(l.a)(a);function a(){var t;Object(d.a)(this,a);for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return(t=r.call.apply(r,[this].concat(o))).state={todoItems:{}},t.addToDoItems=function(e){var o=Object(i.a)({},t.state.todoItems);console.log(o),o["item".concat(Date.now())]=e,t.setState({todoItems:o})},t.removeToDoItem=function(e){var o=Object(i.a)({},t.state.todoItems);delete o[e],t.setState({todoItems:o})},t.updateTodos=function(e,o){var n=Object(i.a)({},t.state.todoItems);n[e]=o,t.setState({todoItems:n})},t}return Object(u.a)(a,[{key:"render",value:function(){var n=this;return Object(p.jsxs)("div",{className:"main",children:[Object(p.jsx)(t,{}),Object(p.jsx)(e,{addToDoItems:this.addToDoItems}),Object(p.jsx)("ul",{children:Object.keys(this.state.todoItems).map((function(t){return Object(p.jsx)(o,{index:t,todoItems:n.state.todoItems[t],removeToDoItem:n.removeToDoItem,updateTodos:n.updateTodos},t)}))})]})}}]),a}(n.Component);c.a.render(Object(p.jsx)(a,{initItems:[]}),document.getElementById("root"))};var b=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("div",{children:m()})})},h=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,19)).then((function(e){var o=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;o(t),n(t),r(t),a(t),c(t)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),h()}},[[18,1,2]]]);
//# sourceMappingURL=main.bc88edff.chunk.js.map