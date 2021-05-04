(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{20:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a,r,c,i,o=n(0),s=(n(20),n(14)),l=n.n(s),d=n(11),u=n(18),b=n(5),j=n(6),h=n(9),m=n(8),p=n(1),f=function(t){var e=t.contact,n=t.deleteContact,a=e.name,r=e.number,c=e.id;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("li",{children:[a,"-",r,Object(p.jsx)("button",{id:c,type:"button",onClick:n,children:"DELETE"})]})})},x=n(2),O=n(3),g=O.a.form(a||(a=Object(x.a)(["\nul{\n    list-style:none;\n    display: flex;\n    flex-direction:column;\n    text-align:start;\n    padding:0;\n    width:75%;\n    margin:0 auto;\n    \nli{\n    display: flex;\n    justify-content:space-between;\n    margin-bottom:10px;\n}\n}\n"]))),C=function(t){var e=t.contacts,n=t.deleteContact;return Object(p.jsxs)(g,{children:[Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)("ul",{children:e.map((function(t){return Object(p.jsx)(f,{contact:t,deleteContact:n},t.id)}))})]})},y=O.a.label(r||(r=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight:bolder;\n  input {\n    margin-top: 10px;\n    height: 30px;\n    font-size:30px;\n    width:50%;\n  }\n"]))),v=function(t){var e=t.filter,n=t.setFilter;return Object(p.jsxs)(y,{children:["Find your contact by name",Object(p.jsx)("input",{type:"text",value:e,onChange:n})]})},w=n(4),k=O.a.form(c||(c=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  width:250px;\n  margin:0 auto;\n  justify-content:space-around;\n  height:100px;\n  align-items:center;\n  border:1px solid black;\n  border-radius:10px;\n  padding: 10px;\n  margin-bottom:20px;\n  button{\n      width: 50%;\n      margin:0 auto;\n  }\n  \n"]))),A=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.onHandlerSubmit=function(e){e.preventDefault(),t.props.addContact(t.state)},t.onHandlerChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(w.a)({},a,r))},t}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(k,{onSubmit:this.onHandlerSubmit,children:[Object(p.jsxs)("label",{children:["Name",Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.onHandlerChange})]}),Object(p.jsxs)("label",{children:["Phone",Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.onHandlerChange})]}),Object(p.jsx)("button",{type:"submit",children:"ADD CONTACT"})]})}}]),n}(o.Component),S=n(29),F=O.a.div(i||(i=Object(x.a)(["\n  border: 1px solid black;\n  border-radius: 10px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n"]))),H=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:Object(S.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(S.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(S.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(S.a)(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.state.contacts.some((function(t){return t.name===e.name}))?alert("".concat(e.name,", is already in contacts!")):t.setState((function(t){return{contacts:[].concat(Object(u.a)(t.contacts),[Object(d.a)(Object(d.a)({},e),{},{id:Object(S.a)()})])}}))},t.deleteContact=function(e){var n=e.target.id;t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==n}))})},t.setFilter=function(e){var n=e.target.value;t.setState({filter:n})},t.getFilteredContacts=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(F,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(A,{addContact:this.addContact}),Object(p.jsx)(v,{setFilter:this.setFilter,filter:this.state.filter}),Object(p.jsx)(C,{contacts:this.getFilteredContacts(),deleteContact:this.deleteContact})]})}}]),n}(o.Component),z=function(){return Object(p.jsx)(H,{})};l.a.render(Object(p.jsx)(z,{}),document.querySelector("#root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.04538033.chunk.js.map