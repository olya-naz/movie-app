(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/default-poster.8f2c6207.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/camera.89605246.svg"},41:function(e,t,a){e.exports=a(81)},46:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),i=a(8),o=a(13),s=a(5),u=a(6),m=a(10),p=a(9),d=a(11),h=(a(46),a(37)),v=a.n(h),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={searchValue:""},a.handleSubmit=function(e){e.preventDefault();var t=a.state.searchValue;0!==t.length&&(a.setState({searchValue:""}),a.props.history.push("/search/".concat(t)))},a.handleInputChange=function(e){a.setState({searchValue:e.target.value})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.searchValue;return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"logo-wr"},r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{src:v.a,alt:"logo"}),r.a.createElement("span",null,"MovieApp"))),r.a.createElement("div",{className:"search-wr"},r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:e,placeholder:"Type to search...",className:"search-text",onChange:this.handleInputChange}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("i",{className:"icon-search"}))))))}}]),t}(n.Component),g=Object(o.f)(f),E=(a(51),function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",null,"\xa9 2019 MovieApp"),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.themoviedb.org"},r.a.createElement("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg",alt:""})))))}),b=a(16),y=a(4),w=a.n(y),O=a(15),k=function(){function e(){var t=this;Object(s.a)(this,e),this._API_KEY="?api_key=fcf247972b8f4e5c42eeb5aa3a0cfdd9",this._API_BASE="https://api.themoviedb.org/3/",this.getAllMovies=function(){var e=Object(O.a)(w.a.mark((function e(a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("movie/".concat(a).concat(t._API_KEY));case 2:return n=e.sent,e.abrupt("return",n.results.map(t.getData));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getMovie=function(){var e=Object(O.a)(w.a.mark((function e(a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("movie/".concat(a).concat(t._API_KEY));case 2:return n=e.sent,e.abrupt("return",t.getData(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getVideo=function(){var e=Object(O.a)(w.a.mark((function e(a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("movie/".concat(a).concat(t._API_KEY));case 2:return n=e.sent,e.abrupt("return",n.results[0].key);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getSearchResults=function(){var e=Object(O.a)(w.a.mark((function e(a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("search/movie".concat(t._API_KEY,"&query=").concat(a));case 2:return n=e.sent,e.abrupt("return",n.results.map(t.getData));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getSearchPagination=function(){var e=Object(O.a)(w.a.mark((function e(a,n){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("search/movie".concat(t._API_KEY,"&query=").concat(a));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.getData=function(e){return{id:e.id,title:e.title,overview:e.overview,tagline:e.tagline,image:e.poster_path,backdrop:e.backdrop_path,date:e.release_date,vote:e.vote_average,genre:e.genres}}}return Object(u.a)(e,[{key:"getResource",value:function(){var e=Object(O.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._API_BASE).concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch, \n                             received ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),N=(a(57),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r))))._apiCall=new k,a.state={movie:[],fetched:!1},a.randomMovie=function(){var e=[546554,512200,398978,549053,420809],t=e[Math.floor(Math.random()*e.length)];a._apiCall.getMovie("".concat(t)).then((function(e){return a.setState({movie:e,fetched:!0})}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.randomMovie(),this.timer=setInterval(this.randomMovie,7e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.movie,t=e.id,a=e.backdrop,n=e.title,c=this.state.fetched?"https://image.tmdb.org/t/p/original/".concat(a):null;return r.a.createElement("div",{className:"top-rank-movie-block"},r.a.createElement(i.b,{to:"/movie/".concat(t),style:{backgroundImage:"url(".concat(c,")")}},r.a.createElement("div",{className:"content-wr"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,n),r.a.createElement("div",{className:"button-link"},r.a.createElement("button",null,"More info"))))))}}]),t}(n.Component)),j=a(20),S=(a(65),function(e){var t=e.vote,a=["vote"];return Number(Object.values({vote:t}))>6.9?a+=" hight":Number(Object.values({vote:t}))>3.9&&(a+=" middle"),r.a.createElement(r.a.Fragment,null,t>0&&r.a.createElement("div",{className:a},r.a.createElement("i",{className:"icon-star-solid"}),t))}),D=(a(66),a(21)),_=a.n(D),x=function(e){var t=e.id,a=e.title,n=e.image,c=e.vote,l=n?"https://image.tmdb.org/t/p/w342/".concat(n):_.a;return r.a.createElement("div",{className:"movie-item"},r.a.createElement(i.b,{to:"/movie/".concat(t)},r.a.createElement("figure",null,r.a.createElement("img",{src:l,alt:"".concat(a," img")}),r.a.createElement("figcaption",null,a))),r.a.createElement(S,{vote:c}))},A=(a(67),function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"circle circle-1"}),r.a.createElement("div",{className:"circle circle-2"}))}),I=(a(68),function(){return r.a.createElement("div",{className:"error"},r.a.createElement("div",{className:"title"},"Ooops!"),r.a.createElement("p",null,"Couldn't find that. Try something else."))}),M=(a(69),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={itemList:[],fetched:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.url!==e.url&&(this.updateItem(),j.animateScroll.scrollToTop({smooth:!0,duration:500,delay:0,isDynamic:!0}))}},{key:"updateItem",value:function(){var e=this,t=this.props,a=t.getData,n=t.url;n&&a(n).then((function(t){return e.setState({itemList:t,fetched:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.itemList,a=e.fetched,n=this.props.title,c=t.map((function(e){var t=e.id;return r.a.createElement(x,Object.assign({key:t},e))}));return a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"movie-list"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,n),c.length?r.a.createElement("div",{className:"movie-list-wr"},c):r.a.createElement(I,null)))):r.a.createElement(A,null)}}]),t}(r.a.Component)),C=function(e){var t=e.getData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.Helmet,null,r.a.createElement("title",null,"MovieApp")),r.a.createElement(N,null),r.a.createElement(M,{getData:t,url:"popular",title:"Popular today:"}))},P=a(40),V=a.n(P),R=(a(77),a(78),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r))))._apiCall=new k,a.state={details:[],fetched:!1,isOpen:!1,videoSrc:null},a.openModal=function(){a.setState({isOpen:!0})},a.getVideoSrc=function(){a._apiCall.getVideo("".concat(a.props.id,"/videos")).then((function(e){return a.setState({videoSrc:e})})).catch((function(e){return console.error(e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updateItem(),this.getVideoSrc(),j.animateScroll.scrollToTop({smooth:!0,duration:0,delay:0,isDynamic:!0})}},{key:"componentDidUpdate",value:function(e){this.props.id!==e.id&&(this.updateItem(),this.getVideoSrc())}},{key:"updateItem",value:function(){var e=this,t=this.props.id;this._apiCall.getMovie(t).then((function(t){return e.setState({details:t,fetched:!0})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.fetched,n=t.videoSrc,c=this.state.details,l=c.image,i=c.backdrop,o=c.title,s=c.tagline,u=c.overview,m=c.genre,p=c.date,d=c.vote,h=a&&i?"https://image.tmdb.org/t/p/original/".concat(i):null,v=a&&l?"https://image.tmdb.org/t/p/w500/".concat(l):_.a,f=this.state.fetched?m.map((function(e){return r.a.createElement("li",{key:e.id},e.name)})):null;return a?r.a.createElement("div",{className:"movie-details"},r.a.createElement(b.Helmet,null,r.a.createElement("title",null,"".concat(o," \u2014 MovieApp"))),r.a.createElement("div",{className:"backdrop-wr"},r.a.createElement("div",{className:"backdrop-inner",style:{backgroundImage:"url(".concat(h,")")}})),r.a.createElement("div",{className:"movie-details-inner"},r.a.createElement("div",{className:"poster-wr hidden-sm hidden-xs"},r.a.createElement("img",{src:v,alt:"".concat(o," img")})),r.a.createElement("div",{className:"details-wr"},r.a.createElement("div",{className:"top-block"},r.a.createElement("h1",null,o),s&&r.a.createElement("blockquote",null,'"',s,'"')),r.a.createElement(S,{vote:d}),p&&r.a.createElement("p",null,r.a.createElement("span",{className:"descr-title"},"Date:")," ",p),r.a.createElement("p",null,r.a.createElement("span",{className:"descr-title"},"Overview:")," ",u),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:"descr-title"},"Genres:")),f),n&&r.a.createElement("button",{className:"movie-button",onClick:this.openModal},r.a.createElement("i",{className:"icon-play"}),r.a.createElement("span",null,"Watch Trailer")))),r.a.createElement(V.a,{channel:"youtube",isOpen:this.state.isOpen,videoId:this.state.videoSrc,onClose:function(){return e.setState({isOpen:!1})}})):r.a.createElement(A,null)}}]),t}(n.Component)),T=function(e){var t=e.id,a=e.getData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{id:t}),r.a.createElement(M,{id:t,getData:a,url:"".concat(t,"/recommendations"),title:"Recommended:"}))},F=(a(79),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:null,loading:!0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getPage()}},{key:"componentDidUpdate",value:function(e){e.url!==this.props.url&&this.getPage()}},{key:"getPage",value:function(){var e=this,t=this.props;(0,t.getData)(t.url).then((function(t){return e.setState({data:t,loading:!1})}))}},{key:"render",value:function(){if(this.state.loading)return null;var e=this.state.data,t=e.page,a=e.total_pages,n=window.location.host,c=window.location.pathname;console.log("1: ".concat(c));var l=c.indexOf("&");c=c.substring(0,-1!==l?l:c.length),console.log("2: ".concat(n,"/").concat(c,"&page=").concat(t-1));var o=1!==t?r.a.createElement(i.b,{to:"".concat(c,"&page=").concat(t-1),className:"prev-btn"},r.a.createElement("i",{className:"icon-left"})," Prev page"):null,s=t<a?r.a.createElement(i.b,{to:"".concat(c,"&page=").concat(t+1),className:"next-btn"},"Next page ",r.a.createElement("i",{className:"icon-right"})):null;return r.a.createElement("div",{className:"pagination"},r.a.createElement("div",{className:"container"},o,s))}}]),t}(n.Component)),K=function(e){var t=e.getData,a=e.getPagination,n=e.url,c=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.Helmet,null,r.a.createElement("title",null,"Search: ".concat(n," \u2014 MovieApp"))),r.a.createElement(M,{getData:t,url:n,title:"Search results: ".concat(c)}),r.a.createElement(F,{getData:a,url:n}))},Y=(a(80),new k),q=Y.getAllMovies,U=Y.getSearchResults,B=Y.getSearchPagination,H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(g,null),r.a.createElement("main",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,render:function(){return r.a.createElement(C,{getData:q})}}),r.a.createElement(o.a,{path:"/movie/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(T,{id:t,getData:q})}}),r.a.createElement(o.a,{path:"/search/:query",render:function(e){var t=e.match.params.query,a=t.indexOf("&"),n=t.substring(0,-1!==a?a:t.length);return r.a.createElement(K,{getData:U,getPagination:B,url:t,title:n})}}),r.a.createElement(o.a,{component:I}))),r.a.createElement(E,null)))};l.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e087b71b.chunk.js.map