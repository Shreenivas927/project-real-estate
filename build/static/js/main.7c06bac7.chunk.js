(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{64:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),l=c(14),n=c.n(l),i=c(12),r=c(17),d=c.n(r),j=d.a.create({baseURL:"http://localhost:8787/api",header:{"Content-type":"application/json"}}),o={saveUser:function(e){return console.log(e),j.post("/savedata",e)},getAll:function(){return j.get("/getusers")},deleteUser:function(e){return console.log(e),j.post("/deleteUser",e)},update:function(e){return j.post("/update",e)},getUserById:function(e){return j.get("/getUserById/".concat(e))}},b=c(13);var h=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],l=t[1],n=Object(a.useState)(),r=Object(i.a)(n,2),d=r[0],j=r[1];return Object(a.useEffect)((function(){o.getAll().then((function(e){console.log("entry list"),l(e.data),console.log(e.data)}))}),[]),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-md-6",children:[Object(s.jsx)("h2",{children:"User List"}),Object(s.jsx)("ul",{className:"list-group",children:c.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("table",{class:"table table-dark table-striped",onClick:function(){return function(e){console.log(e),j(e)}(e)},children:Object(s.jsx)("tbody",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.firstName}),Object(s.jsx)("td",{children:e.lastName}),Object(s.jsx)("td",{children:e.city}),Object(s.jsx)("td",{children:e.email})]})})},e.id)})}))})]}),Object(s.jsx)("div",{className:"col-md-6",children:d?Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("h2",{children:"User Info"})}),Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("label",{type:"text",children:"firstName"}),":  ",d.firstName]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{type:"text",children:"lastName"}),":  ",d.lastName]}),Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("label",{type:"text",children:"city"}),":   ",d.city]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{type:"text",children:"email"}),":   ",d.email]}),Object(s.jsxs)(b.b,{to:"/updateUser/".concat(d._id),children:[" ",Object(s.jsx)("span",{className:"btn btn-secondary mt-4 ml-3",children:"Update User"})]}),Object(s.jsx)("button",{onClick:function(){console.log("clicked"),o.deleteUser(d).then((function(e){!1===e.status?console.log(e):(console.log(e.data),l(e.data))}))},children:"Delete"})]}):Object(s.jsx)("div",{children:Object(s.jsx)("h3",{children:"Please select User first......"})})})]})},x=c(5),O=(c(32),c(15)),m=c(16),A=c(67),u=c(68),p=function(e){var t=Object(x.f)().id;Object(a.useEffect)((function(){console.log(t),U(t)}),[t]);var c=Object(a.useState)({firstName:"",lastName:"",city:"",email:""}),l=Object(i.a)(c,2),n=l[0],r=l[1],d=Object(a.useState)(!1),j=Object(i.a)(d,2),h=j[0],p=j[1],v=Object(a.useState)(!0),g=Object(i.a)(v,2),f=g[0],N=g[1],B=function(){return N(!1)};function E(e){var c,s=e.target,a=s.name,l=s.value;r(Object(m.a)(Object(m.a)({},n),{},(c={},Object(O.a)(c,a,l),Object(O.a)(c,"uid",t),c)))}var U=function(e){o.getUserById(e).then((function(e){console.log(e.data),r(e.data),200===e.status&&p(!0)}))};return Object(s.jsx)("div",{children:h?Object(s.jsx)("div",{children:Object(s.jsxs)(A.a,{show:f,onHide:B,backdrop:"static",keyboard:!1,children:[Object(s.jsx)(A.a.Header,{closeButton:!0,children:Object(s.jsx)(A.a.Title,{children:"Update User"})}),Object(s.jsx)(A.a.Body,{children:Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"firstName",children:"FirstName:"}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"firstName",value:n.firstName,onChange:E})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"lastName",children:"LastName:"}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"lastName",value:n.lastName,onChange:E})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"city",children:"city:"}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"city",value:n.city,onChange:E})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"email",children:"email:"}),Object(s.jsx)("input",{type:"email",className:"form-control",name:"email",value:n.email,onChange:E})]})]})}),Object(s.jsxs)(A.a.Footer,{children:[Object(s.jsx)(u.a,{variant:"secondary",onClick:B,children:"Close"}),Object(s.jsx)(u.a,{variant:"primary",onClick:function(){o.update(n).then((function(e){console.log(e),p(!1)}))},children:"Update"})]})]})}):Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"User updated Successfully"}),Object(s.jsx)(b.b,{to:"/UserList",children:Object(s.jsx)("span",{className:"btn btn-secondary mt-3",children:"Show All Users"})})]})})},v=d.a.create({baseURL:"http://localhost:8787/api",header:{"Content-type":"application/json"}}),g={saveUser:function(e){return console.log(e),v.post("/savedata",e)},getAll:function(e){return v.get("/getusers")},deleteUser:function(e){return console.log(e),v.post("/deleteUser",e)},update:function(e){return v.post("/update",e)},getUserById:function(e){return v.get("/getUserById/".concat(e))}},f=function(){var e=Object(a.useState)({id:null,firstName:"",lastName:"",city:"",email:""}),t=Object(i.a)(e,2),c=t[0],l=t[1],n=Object(a.useState)(!1),r=Object(i.a)(n,2),d=r[0],j=r[1];function o(e){var t=e.target,s=t.name,a=t.value;l(Object(m.a)(Object(m.a)({},c),{},Object(O.a)({},s,a))),console.log(c.firstName)}return Object(s.jsx)("div",{className:"submit-form",children:d?Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"User Added Successfully......"})}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("lable",{htmlFor:"firstName",children:"FirstName:"}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"firstName",value:c.firstName,onChange:o})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("lable",{htmlFor:"lastName",children:"LastName:"}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"lastName",value:c.lastName,onChange:o})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("lable",{htmlFor:"city",children:"city:"}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"city",value:c.city,onChange:o})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("lable",{htmlFor:"email",children:"email:"}),Object(s.jsx)("input",{type:"email",className:"form-control",name:"email",value:c.email,onChange:o})]}),Object(s.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){var e={firstName:c.firstName,lastName:c.lastName,city:c.city,email:c.email,status:500};g.saveUser(e).then((function(e){console.log(e.data),200==e.data.status&&j(!0)}))},children:"Add User"})]})})},N=c.p+"static/media/img4.63eb3de0.jpg",B=c.p+"static/media/img3.acaf6e0d.jpg",E=c.p+"static/media/img2.9b91545e.jpg",U=c.p+"static/media/img1.967c6fc7.jpg",I=c.p+"static/media/banner3.d1533e47.jpg",y=c.p+"static/media/banner4.f073dd87.jpg";var R=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{class:"container-fluid",children:Object(s.jsx)("div",{class:"row",children:Object(s.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(s.jsxs)("div",{class:"container-fluid",children:[Object(s.jsx)("a",{class:"navbar-brand",href:"#",children:Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA3CAMAAAB+QvVgAAAAOVBMVEUOWY0IV44WXpEYX5AnZY+Onpt8fn0EBAR7gIJ5e3rMtmPzvyz1vR32vBfzvyT4uw/5ugr7ugEBVY59k3erAAAAEXRSTlO+55FuOQCacjBnDjaNuG3a9EIJHz4AAAUiSURBVGje7ZmLkqQqDEBB0MUASvv/H3vDIzzt3Rnt3ZnbNVTXlAI6OSQhCbL5TRr7AfkBeRcQiU19+ilFj4GU8B1ABDuOg4tPPzfhYwfD535hk18PorgX6LgIcnD5K7SvBxHHLZBDBIW8Acj0NiDwJqY1zUii5ncA+SZx5AfkLgjozRhrzKb12aBvZaLFhjPh7B1aTnIEkWJivgnR2j31s0nIV4DAZt0jtd12KNrsO47aeFMmPvatfYef9dgQgakWRLEYHkOomwo/TKU/hvObIHov0gUBq7XebOoNIFsz8WHzRDB77PIgGJhrEFmL6wcp+rOjbbgAd0CgxWgE1Lb0eWn7ibumpaCeAHJwVkCmo29RTx1fIrkOAvYxNtPLF0DMOHGHuBaPFqQSWRxjCzphJwPTDRBT9FFd6YHRzjqPO0eXzrTz3CZ4A1Lsh/M8wqAAcu/rNMLVZZC86M7gzpSpgnE1GrD51uHWVmwOkfWjvANwJ2IVSJYXqwyZrUlmi+O+6gBJ+PIyyNZaO3F5lehKQ85ZGkoORH5vCjDtd5BJBCQBWevfDHesuO3KLuu9DJJW1pF7wyjf7kMG0G3eCNISuOwhe/E7WnmRFMJz4OCVl5yl71dBSAhTfCb7NsmXIl9C3nqj1PSObQjsJ3Kx85Av2U2QLE3poe1Ik0ekAddsuBUZmWAVfciExCD3ICjW5uhV/HgRSBVuXXISXW+w2N/eFt1turesauGTgFNurPUZgTtWs81dBkliV117Atlan9BVgG+cxIwjxeT5cd54bU8vBNkH9y8g8x9ArO7drEoaj+cg8iwi/g0Q80EQcw2k4eBs+ucg8CGQqQXhfWMw5SEmpMzkf9FH5mfO/gkfEbJrigIKS+eJLwKptl8SeAAZtt9u16oXI8V2LtizSjGflnS2eBdk69d5nzvTmvuIQ3GQ9ulqMSiA8+epE2trEwKTd0GK6dsuR8wgqTY0vVVS5KydJGeEogkbobgNLbk6V13guQ3ySFUhUBK5DSApS6QCFzKxfnQ5QM5Q2KyOVjDaq2SnEXoCboM4A4HD5ey3B8m5YaxVTCbWXREPOVsXpXwSDQfPu0Hiy+S3QVB2a+xelYg9SM74ceKWCxfcxXRVMFpd8qZgOBmKl/zEK4LS4imkWqV0fAFIX7QPIGdFsavrqr7UFbXRtBXteVzHPexuHNkH8UaQpoSvKl1KGl0HMp2flfjYcXomETzmJohtznmirY8g9aFKcm8oIMa4GiR/rZK9yKkqZL/juwxSn0Ekn91OAnZ9PpcnEgj4wQTCJ1mdw/X2cwrI1HwfZA8HitHI6Hhu20Mz54eSbje6TfBN4EQQzqcukityZ8yrqvJL5pNG7Ff07TGerV7WCJ3xwgcOmnEeVPOapBEAnn+uHT94+PpQfuR/Xsh+P93Ost9//p290chLQBQtO65zuoRF5d558edYgw5weK0Vpb5eIysJtAKkS7VUoi8oo1r7dyzhV7iWr9eIB1HLss7Lguu6rH6tUSP+flGAfyB2+Ckr3vo/eKfC+BwfVCPp14CsKy6plzisv19fDwIrNtLIsgIyqNCx4jWgRvyVWtAQ5+8DgooIICoqqAaBCILagdUrbMHJGWSJqFd9xG33QVyqq7xwyguI6xx0U4EoZAka8ca0LmFuosbf7IEiiLoIYuE+CL1D+R1KKcBV9WuvIO5J2Oc9HqKI2OtHkGGJXf6ZMM2PnG1rfwQxvt3iiO+4pNOgjNfEkf9f+wH5bu0/hIdaGHl6ab0AAAAASUVORK5CYII="})}),Object(s.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{class:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(s.jsx)("li",{class:"nav-item mx-2",children:Object(s.jsx)("a",{class:"nav-link active","aria-current":"page",href:"#",children:Object(s.jsx)("b",{children:"Home"})})}),Object(s.jsx)("li",{class:"nav-item mx-2",children:Object(s.jsx)("a",{class:"nav-link",href:"#",children:Object(s.jsx)("b",{children:"Residencial Property"})})}),Object(s.jsx)("li",{class:"nav-item mx-2",children:Object(s.jsx)("a",{class:"nav-link",href:"#",children:Object(s.jsx)("b",{children:"Commercial Property"})})}),Object(s.jsx)("li",{class:"nav-item mx-2",children:Object(s.jsx)("a",{class:"nav-link",href:"#",children:Object(s.jsx)("b",{children:"Blog"})})})]}),Object(s.jsxs)("form",{class:"d-flex",children:[Object(s.jsx)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(s.jsx)("button",{class:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}),Object(s.jsx)("div",{class:"container-fluid",children:Object(s.jsx)("div",{class:"row",children:Object(s.jsxs)("div",{id:"carouselExampleCaptions",class:"carousel slide","data-bs-ride":"carousel",children:[Object(s.jsxs)("div",{class:"carousel-indicators",children:[Object(s.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),Object(s.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(s.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(s.jsxs)("div",{class:"carousel-inner",children:[Object(s.jsxs)("div",{class:"carousel-item active",children:[Object(s.jsx)("img",{src:y,class:"d-block w-100 ",alt:"..."}),Object(s.jsxs)("div",{class:"carousel-caption d-none d-md-block",children:[Object(s.jsx)("h5",{children:"First slide label"}),Object(s.jsx)("p",{children:"Some representative placeholder content for the first slide."})]})]}),Object(s.jsxs)("div",{class:"carousel-item",children:[Object(s.jsx)("img",{src:"data:image/jpeg;base64,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",class:"d-block w-100",alt:"..."}),Object(s.jsxs)("div",{class:"carousel-caption d-none d-md-block",children:[Object(s.jsx)("h5",{children:"Second slide label"}),Object(s.jsx)("p",{children:"Some representative placeholder content for the second slide."})]})]}),Object(s.jsxs)("div",{class:"carousel-item",children:[Object(s.jsx)("img",{src:I,class:"d-block w-100",alt:"..."}),Object(s.jsxs)("div",{class:"carousel-caption d-none d-md-block",children:[Object(s.jsx)("h5",{children:"Third slide label"}),Object(s.jsx)("p",{children:"Some representative placeholder content for the third slide."})]})]})]}),Object(s.jsxs)("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(s.jsx)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(s.jsx)("span",{class:"visually-hidden",children:"Previous"})]}),Object(s.jsxs)("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(s.jsx)("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(s.jsx)("span",{class:"visually-hidden",children:"Next"})]})]})})}),Object(s.jsx)("div",{class:"container",children:Object(s.jsxs)("div",{class:"row",children:[Object(s.jsx)("div",{class:"pt-5 pb-3",children:Object(s.jsx)("h1",{class:"",id:"h1hove",children:"Best new launches in Pune West"})}),Object(s.jsx)("div",{class:"pb-3",children:"Find upcoming new housing residential real estate projects in Pune West with lifestyle amenities and proximity to key destinations."})]})}),Object(s.jsx)("div",{class:"container",children:Object(s.jsxs)("div",{class:"row justify-content-center",children:[Object(s.jsx)("a",{href:"./Prop1.html",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{class:"col-md-3",children:Object(s.jsxs)("div",{class:"card",style:{width:"18rem",height:"22rem"},children:[Object(s.jsx)("img",{src:U,class:"card-img-top card-img",alt:"..."}),Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)("h5",{class:"card-title text-center",children:"Mantra Codename Infinity"}),Object(s.jsxs)("div",{class:"text-center",children:[Object(s.jsx)("p",{class:"card-text",children:"By Mantra Codename Infinity Developer Pune"}),Object(s.jsx)("a",{href:"#",class:"btn btn-danger rounded-pill",children:"View Details"})]})]})]})})}),Object(s.jsx)("div",{class:"col-md-3",children:Object(s.jsxs)("div",{class:"card",style:{width:"18rem",height:"22rem"},children:[Object(s.jsx)("img",{src:E,class:"card-img-top card-img",alt:"..."}),Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)("h5",{class:"card-title text-center",children:"Godraj 24"}),Object(s.jsxs)("div",{class:"text-center",children:[Object(s.jsx)("p",{class:"card-text",children:"By Godraj Properties Limited Hinjvadi Pune"}),Object(s.jsx)("a",{href:"#",class:"btn btn-danger rounded-pill",children:"View Details"})]})]})]})}),Object(s.jsx)("div",{class:"col-md-3",children:Object(s.jsxs)("div",{class:"card",style:{width:"18rem",height:"22rem"},children:[Object(s.jsx)("img",{src:B,class:"card-img-top card-img",alt:"..."}),Object(s.jsxs)("div",{class:"card-body ",children:[Object(s.jsx)("h5",{class:"card-title text-center",children:"Rahul Aston"}),Object(s.jsxs)("div",{class:"text-center",children:[Object(s.jsx)("p",{class:"card-text ",children:"By Rahul Aston Developer Pune"}),Object(s.jsx)("a",{href:"#",class:"btn btn-danger rounded-pill ",children:"View Details"})]})]})]})}),Object(s.jsx)("div",{class:"col-md-3",children:Object(s.jsxs)("div",{class:"card",style:{width:"18rem",height:"22rem"},children:[Object(s.jsx)("img",{src:N,class:"card-img-top card-img",alt:"..."}),Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)("h5",{class:"card-title text-center",children:"Rohan Prathama"}),Object(s.jsxs)("div",{class:"text-center",children:[Object(s.jsx)("p",{class:"card-text",children:"By Rohan Prathama constuction Pune"}),Object(s.jsx)("a",{href:"#",class:"btn btn-danger rounded-pill",children:"View Details"})]})]})]})})]})})]})};var w=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(b.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(s.jsx)("a",{href:"users",className:"navbar-brand",children:"Navbar"}),Object(s.jsxs)("div",{className:"navbar-nav",children:[Object(s.jsx)("li",{className:"nav-item ",children:Object(s.jsx)(b.b,{to:"/Homeinfo",className:"nav-link",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item ",children:Object(s.jsx)(b.b,{to:"/AddUser",className:"nav-link",children:"Add User"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.b,{to:"/UserList",className:"nav-link",children:"Show Users"})})]})]}),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(x.c,{children:[Object(s.jsx)(x.a,{exact:!0,path:"/UserList",children:Object(s.jsx)(h,{})}),Object(s.jsx)(x.a,{path:"/Homeinfo",children:Object(s.jsx)(R,{})}),Object(s.jsx)(x.a,{path:"/AddUser",children:Object(s.jsx)(f,{})}),Object(s.jsx)(x.a,{path:"/updateUser/:id",children:Object(s.jsx)(p,{})})]})})]})})})};n.a.render(Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(w,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.7c06bac7.chunk.js.map