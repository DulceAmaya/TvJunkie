(this["webpackJsonptv-junkie"]=this["webpackJsonptv-junkie"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c(17),n=c.n(i),a=c(2),l=c(3),r=c(15),o=(c(23),c(24),c(0)),j=["btn--primary","btn--outline"],b=["btn--medium","btn--large"],d=function(e){var t=e.children,c=e.type,s=e.onClick,i=e.buttonStyle,n=e.buttonSize,l=j.includes(i)?i:j[0],r=b.includes(n)?n:b[0];return Object(o.jsx)(a.b,{to:"/sign-up",className:"btn-mobile",children:Object(o.jsx)("button",{className:"btn ".concat(l," ").concat(r),onClick:s,type:c,children:t})})};c(31);var m=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("p",{className:"logo-font",children:"Tv Junkie"}),Object(o.jsx)("img",{src:"img/tv.png",alt:"icon",className:"tv-icon"})]})};var u=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(!0),l=Object(r.a)(n,2),j=l[0],b=l[1],u=function(){return i(!1)},x=function(){window.innerWidth<=1e3?b(!1):b(!0)};return Object(s.useEffect)((function(){x()}),[]),window.addEventListener("resize",x),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"navbar-container",children:[Object(o.jsx)(a.b,{to:"/TvJunkie",className:"navbar-logo",onClick:u,children:Object(o.jsx)(m,{})}),Object(o.jsx)("div",{className:"menu-icon",onClick:function(){return i(!c)},children:Object(o.jsx)("i",{className:c?"fas fa-ellipsis-v":"fas fa-bars"})}),Object(o.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{to:"/TvJunkie",className:"nav-links",onClick:u,children:"Inicio"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{to:"/movies",className:"nav-links",onClick:u,children:"Pel\xedculas"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{to:"/tvshows",className:"nav-links",onClick:u,children:"Series"})}),Object(o.jsx)("li",{className:"nav-item-mobile",children:Object(o.jsx)(a.b,{to:"/sign-up",className:"nav-links-mobile",onClick:u,children:"Sign up"})})]}),j&&Object(o.jsx)(d,{buttonStyle:"btn--outline",children:"SIGN UP"})]})})})};c(9),c(32);var x=function(){return Object(o.jsxs)("div",{className:"hero-container",children:[Object(o.jsx)("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(o.jsx)("h1",{children:"Descubre lo mejor del cine"}),Object(o.jsx)("p",{children:"\xbfEst\xe1s listo?"}),Object(o.jsxs)("div",{className:"hero-btns",children:[Object(o.jsx)(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"Comenzar"}),Object(o.jsxs)(d,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:["Watch trailer ",Object(o.jsx)("i",{className:"far fa-play-circle"})]})]})]})};var h=function(e){var t="cards__item__pic__wrap ".concat(e.datatype),c="/content/".concat(e.title);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("li",{className:"cards__item",children:Object(o.jsxs)(a.b,{className:"cards__item__link",to:c,children:[Object(o.jsx)("figure",{className:t,"data-category":e.label,"content-title":e.title,children:Object(o.jsx)("img",{className:"cards__item__img",alt:"Travel",src:e.src})}),Object(o.jsx)("div",{className:"title-card",children:e.title}),Object(o.jsx)("div",{className:"cards__item__info",children:Object(o.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};c(33);var O=function(){return Object(o.jsxs)("div",{className:"cards",children:[Object(o.jsx)("h1",{children:"\xa1Checa las recomendaciones de la semana!"}),Object(o.jsx)("div",{className:"cards__container",children:Object(o.jsxs)("div",{className:"cards__wrapper",children:[Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(h,{src:"img/movie-1.jpg",text:"Lorem ipsum dolor sit amet consectetur adipiscing elit lectus",label:"Romcom",datatype:"movie",title:"Seeking a friend for the end of the world"}),Object(o.jsx)(h,{src:"img/movie-2.jfif",text:"Lorem ipsum dolor sit amet consectetur adipiscing elit lectus",label:"Drama",datatype:"movie",title:"Adopt a Highway"}),Object(o.jsx)(h,{src:"img/movie-3.jpg",text:"Lorem ipsum dolor sit amet consectetur adipiscing elit lectus",label:"Comedia",datatype:"movie",title:"Mr. Right"})]}),Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(h,{src:"img/movie-4.jpeg",text:"Lorem ipsum dolor sit amet consectetur adipiscing elit lectus",label:"Drama",datatype:"movie",title:"Room"}),Object(o.jsx)(h,{src:"img/movie-5.jpg",text:"Lorem ipsum dolor sit amet consectetur adipiscing elit lectus",label:"Familiar",datatype:"movie",title:"Paddington 2"}),Object(o.jsx)(h,{src:"img/movie-6.jpg",text:"Lorem ipsum dolor sit amet consectetur adipiscing elit lectus",label:"Acci\xf3n",datatype:"movie",title:"Ocean's 8"})]}),Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(h,{src:"img/tv-1.jpg",text:"Lorem ipsum dolor sit amet consectetur adipiscing elit lectus",label:"Comedia",datatype:"tvshow",title:"Crashing"}),Object(o.jsx)(h,{src:"img/tv-2.jfif",text:"Lorem ipsum dolor sit amet consectetur adipiscing elit lectus",label:"Drama",datatype:"tvshow",title:"Outlander"}),Object(o.jsx)(h,{src:"img/tv-3.jpg",text:"Lorem ipsum dolor sit amet consectetur adipiscing elit lectus",label:"SciFi",datatype:"tvshow",title:"Into the night"})]})]})})]})};c(34);var v=function(){return Object(o.jsxs)("div",{className:"footer-container",children:[Object(o.jsxs)("section",{className:"footer-subscription",children:[Object(o.jsx)("p",{className:"footer-subscription-header",children:"No te pierdas ninguna de nuestras recomendaciones"}),Object(o.jsx)("p",{className:"footer-subscription-text",children:"\xa1Unete a nuestro newsletter!"}),Object(o.jsx)("div",{className:"input-areas",children:Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{className:"footer-input",type:"email",name:"email",placeholder:"email address"}),Object(o.jsx)(d,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(o.jsxs)("div",{class:"footer-links",children:[Object(o.jsxs)("div",{className:"footer-link-wrapper",children:[Object(o.jsxs)("div",{class:"footer-link-items",children:[Object(o.jsx)("h2",{children:"About Us"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"How it works"}),Object(o.jsx)(a.b,{to:"/",children:"Testimonials"}),Object(o.jsx)(a.b,{to:"/",children:"Careers"}),Object(o.jsx)(a.b,{to:"/",children:"Investors"}),Object(o.jsx)(a.b,{to:"/",children:"Terms of Service"})]}),Object(o.jsxs)("div",{class:"footer-link-items",children:[Object(o.jsx)("h2",{children:"Contact Us"}),Object(o.jsx)(a.b,{to:"/",children:"Contact"}),Object(o.jsx)(a.b,{to:"/",children:"Support"}),Object(o.jsx)(a.b,{to:"/",children:"Destinations"}),Object(o.jsx)(a.b,{to:"/",children:"Sponsorships"})]})]}),Object(o.jsxs)("div",{className:"footer-link-wrapper",children:[Object(o.jsxs)("div",{class:"footer-link-items",children:[Object(o.jsx)("h2",{children:"Videos"}),Object(o.jsx)(a.b,{to:"/",children:"Submit Video"}),Object(o.jsx)(a.b,{to:"/",children:"Ambassadors"}),Object(o.jsx)(a.b,{to:"/",children:"Agency"}),Object(o.jsx)(a.b,{to:"/",children:"Influencer"}),Object(o.jsx)(a.b,{to:"/",children:"Our team"})]}),Object(o.jsxs)("div",{class:"footer-link-items",children:[Object(o.jsx)("h2",{children:"Social Media"}),Object(o.jsx)(a.b,{to:"/",children:"Instagram"}),Object(o.jsx)(a.b,{to:"/",children:"Facebook"}),Object(o.jsx)(a.b,{to:"/",children:"Youtube"}),Object(o.jsx)(a.b,{to:"/",children:"Twitter"})]})]})]}),Object(o.jsx)("section",{className:"social-media",children:Object(o.jsxs)("div",{className:"social-media-wrap",children:[Object(o.jsx)("div",{className:"footer-logo",children:Object(o.jsx)(a.b,{to:"/",className:"social-logo",children:Object(o.jsx)(m,{})})}),Object(o.jsx)("small",{className:"website-rights",children:"Tv Junkie \xa9 2021"}),Object(o.jsxs)("div",{className:"social-icons",children:[Object(o.jsx)(a.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(o.jsx)("i",{className:"fab fa-facebook-f"})}),Object(o.jsx)(a.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(o.jsx)("i",{className:"fab fa-instagram"})}),Object(o.jsx)(a.b,{className:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"YouTube",children:Object(o.jsx)("i",{className:"fab fa-youtube"})}),Object(o.jsx)(a.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(o.jsx)("i",{className:"fab fa-twitter"})}),Object(o.jsx)(a.b,{className:"social-icon-link linkedin",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(o.jsx)("i",{className:"fab fa-linkedin"})})]})]})})]})};var p=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(x,{}),Object(o.jsx)(O,{}),Object(o.jsx)(v,{})]})};function g(){return Object(o.jsx)("div",{style:{background:"url('".concat("/TvJunkie","/img/movie-7.jpg')"),backgroundSize:"cover",backgroundPosition:"center"},className:"landscapes",children:Object(o.jsx)("h1",{children:"Pel\xedculas"})})}function f(){return Object(o.jsx)("div",{style:{background:"url('".concat("/TvJunkie","/img/tv-4.jpg')"),backgroundSize:"cover",backgroundPosition:"center"},className:"cities",children:Object(o.jsx)("h1",{children:"Series"})})}function N(){return Object(o.jsx)("div",{style:{background:"url('".concat("/TvJunkie","/img/img-13.jpg')"),backgroundSize:"cover",backgroundPosition:"center"},className:"sign-up",children:Object(o.jsx)("h1",{children:"Sign up!"})})}function k(){return Object(o.jsx)("div",{style:{background:"url('".concat("/TvJunkie","/img/img-12.jpg')"),backgroundSize:"cover",backgroundPosition:"center"},className:"sign-up",children:Object(o.jsx)("h1",{children:"Coming soon"})})}var _=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(a.a,{children:[Object(o.jsx)(u,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/TvJunkie",exact:!0,component:p}),Object(o.jsx)(l.a,{path:"/movies",exact:!0,component:g}),Object(o.jsx)(l.a,{path:"/tvshows",exact:!0,component:f}),Object(o.jsx)(l.a,{path:"/sign-up",exact:!0,component:N}),Object(o.jsx)(l.a,{path:"/content/",component:k})]})]})})};n.a.render(Object(o.jsx)(_,{}),document.getElementById("root"))},9:function(e,t,c){}},[[35,1,2]]]);
//# sourceMappingURL=main.a1c80e89.chunk.js.map