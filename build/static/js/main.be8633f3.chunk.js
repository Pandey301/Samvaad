(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),u=a.n(r),i=(a(60),a(23)),o=a(4),l=a(17),s=a(13),p=a.n(s),m=(a(63),p.a.initializeApp({apiKey:"AIzaSyDdQXxr6cXMiWqEwRJrKpMckdY_YAbYuBI",authDomain:"samvaad-337e7.firebaseapp.com",projectId:"samvaad-337e7",storageBucket:"samvaad-337e7.appspot.com",messagingSenderId:"831086181425",appId:"1:831086181425:web:f135091e9f6960ab9f2910"}).auth()),d=c.a.createContext(),h=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(l.a)(a,2),u=r[0],i=r[1],s=Object(n.useState)(null),p=Object(l.a)(s,2),h=p[0],f=p[1],b=Object(o.f)();Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){f(e),i(!1),e&&b.push("/chats")}))}),[h,b]);var v={user:h};return c.a.createElement(d.Provider,{value:v},!u&&t)},f=a(18),b=a.n(f),v=a(33),g=a(53),E=a(3),j=a.n(E),w=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],r=t[1],u=Object(o.f)(),i=Object(n.useContext)(d).user,s=function(){var e=Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.signOut();case 2:u.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(v.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i&&null!==i?j.a.get("https://api.chatengine.io/users/me",{headers:{"project-id":"775b1edf-f240-46ae-98c3-b44872d57d51","user-name":i.email,"user-secret":i.uid}}).then((function(){r(!1)})).catch((function(){var e=new FormData;e.append("email",i.email),e.append("username",i.email),e.append("secret",i.uid),p(i.photoURL).then((function(t){e.append("avatar",t,t.name),j.a.post("https://api.chatengine.io/users/",e,{headers:{"private-key":"732c9076-ec55-4377-8d39-c8f0b8230beb"}}).then((function(){return r(!1)})).catch((function(e){return console.log(e)}))}))})):u.push("/")}),[i,u]),!i||a?"Loading...":c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"Samvaad"),c.a.createElement("div",{onClick:s,className:"logout-tab"},"Logout")),c.a.createElement(g.d,{height:"calc(100vh - 66px)",projectID:"775b1edf-f240-46ae-98c3-b44872d57d51",userName:i.email,userSecret:i.uid}))},O=a(118),k=a(119),S=function(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome To Samvaad!"),c.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},c.a.createElement(O.a,null)," Sign In with Google"),c.a.createElement("br",null)," ",c.a.createElement("br",null),c.a.createElement("div",{className:"login-button facebook",onClick:function(){return m.signInWithRedirect(new p.a.auth.FacebookAuthProvider)}},c.a.createElement(k.a,null)," Sign In with Facebook")))};var I=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(i.a,null,c.a.createElement(h,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/chats",component:w}),c.a.createElement(o.a,{path:"/",component:S})))))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))},55:function(e,t,a){e.exports=a(116)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.be8633f3.chunk.js.map