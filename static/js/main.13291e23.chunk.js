(this["webpackJsonpnasa-app"]=this["webpackJsonpnasa-app"]||[]).push([[0],{21:function(s,t,a){},22:function(s,t,a){},24:function(s,t,a){},44:function(s,t,a){},45:function(s,t,a){"use strict";a.r(t);var e=a(2),n=a.n(e),g=a(14),i=a.n(g),m=(a(21),a(3)),c=(a(22),a(5)),r=a.n(c),o=a(15),p=(a(24),a(16)),h=a.n(p),u=function(s){return s?h.a.get("https://images-api.nasa.gov/search?q=".concat(s)).then((function(s){return s.data.collection.items.filter((function(s){return"image"===s.data[0].media_type})).map((function(s){return s.links[0].href}))})).catch((function(s){console.log(s)})):Promise.resolve([])},j=a(0),b=function(s){var t=s.setSearchResults,a=Object(e.useState)(),n=Object(m.a)(a,2),g=n[0],i=n[1],c=function(){var s=Object(o.a)(r.a.mark((function s(a){return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),s.t0=t,s.next=4,u(g);case 4:s.t1=s.sent,(0,s.t0)(s.t1);case 6:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:"search-form",onSubmit:c,children:[Object(j.jsx)("input",{className:"search-input",type:"text",onChange:function(s){return i(s.target.value)},placeholder:"Search space images..."}),Object(j.jsx)("button",{className:"search-btn",type:"submit",children:"Go"})]})})},A=(a(44),function(s){var t=s.results;return t.length?t.map((function(s){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"image-container",children:Object(j.jsx)("img",{className:"image",src:s,alt:"Search result from NASA database","data-testid":"image"})})})})):Object(j.jsx)("p",{children:"Sorry, no results. Please try again"})}),P=["https://images-assets.nasa.gov/image/PIA22350/PIA22350~thumb.jpg","https://images-assets.nasa.gov/image/PIA06909/PIA06909~thumb.jpg","https://images-assets.nasa.gov/image/PIA06910/PIA06910~thumb.jpg","https://images-assets.nasa.gov/image/PIA22351/PIA22351~thumb.jpg","https://images-assets.nasa.gov/image/PIA06907/PIA06907~thumb.jpg","https://images-assets.nasa.gov/image/PIA22352/PIA22352~thumb.jpg","https://images-assets.nasa.gov/image/PIA06908/PIA06908~thumb.jpg","https://images-assets.nasa.gov/image/PIA11213/PIA11213~thumb.jpg","https://images-assets.nasa.gov/image/PIA22353/PIA22353~thumb.jpg","https://images-assets.nasa.gov/image/PIA14884/PIA14884~thumb.jpg","https://images-assets.nasa.gov/image/PIA07144/PIA07144~thumb.jpg","https://images-assets.nasa.gov/image/PIA09604/PIA09604~thumb.jpg","https://images-assets.nasa.gov/image/PIA17844/PIA17844~thumb.jpg","https://images-assets.nasa.gov/image/PIA11435/PIA11435~thumb.jpg","https://images-assets.nasa.gov/image/PIA11748/PIA11748~thumb.jpg","https://images-assets.nasa.gov/image/PIA08533/PIA08533~thumb.jpg","https://images-assets.nasa.gov/image/PIA18929/PIA18929~thumb.jpg","https://images-assets.nasa.gov/image/PIA14872/PIA14872~thumb.jpg","https://images-assets.nasa.gov/image/PIA13119/PIA13119~thumb.jpg","https://images-assets.nasa.gov/image/deml241/deml241~thumb.jpg","https://images-assets.nasa.gov/image/PIA22569/PIA22569~thumb.jpg","https://images-assets.nasa.gov/image/PIA21088/PIA21088~thumb.jpg","https://images-assets.nasa.gov/image/PIA05202/PIA05202~thumb.jpg","https://images-assets.nasa.gov/image/PIA22564/PIA22564~thumb.jpg"];var l=function(){var s=Object(e.useState)(P),t=Object(m.a)(s,2),a=t[0],n=t[1];return Object(j.jsxs)("div",{className:"App","data-testid":"app",children:[Object(j.jsx)("img",{className:"logo",src:"https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg",alt:"NASA logo","data-testid":"logo"}),Object(j.jsx)(b,{setSearchResults:n}),Object(j.jsx)("div",{className:"search-results",children:Object(j.jsx)(A,{results:a})})]})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.13291e23.chunk.js.map