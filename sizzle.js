/*!
 * Sizzle CSS Selector Engine v@VERSION
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: @DATE
 */
!function(e){var t,n,r,o,i,u,l,a,f,c,s,d,p,h,g,m,y,v,x,b="sizzle"+1*new Date,w=e.document,N=0,C=0,E=ae(),A=ae(),S=ae(),D=ae(),T=function(e,t){return e===t&&(s=!0),0},L={}.hasOwnProperty,q=[],I=q.pop,B=q.push,R=q.push,$=q.slice,H=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",z="(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",F="\\[[\\x20\\t\\r\\n\\f]*("+z+")(?:"+P+"*([*^$|!~]?=)"+P+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+z+"))|)"+P+"*\\]",k=":("+z+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+F+")*)|.*)\\)|)",O=new RegExp(P+"+","g"),j=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),G=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),U=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),V=new RegExp(P+"|>"),X=new RegExp(k),J=new RegExp("^"+z+"$"),K={ID:new RegExp("^#("+z+")"),CLASS:new RegExp("^\\.("+z+")"),TAG:new RegExp("^("+z+"|[*])"),ATTR:new RegExp("^"+F),PSEUDO:new RegExp("^"+k),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},Q=/HTML$/i,W=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,oe=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},ie=function(){d()},ue=be((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{R.apply(q=$.call(w.childNodes),w.childNodes),q[w.childNodes.length].nodeType}catch(e){R={apply:q.length?function(e,t){B.apply(e,$.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function le(e,t,r,o){var i,l,f,c,s,h,y,v=t&&t.ownerDocument,w=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return r;if(!o&&(d(t),t=t||p,g)){if(11!==w&&(s=_.exec(e)))if(i=s[1]){if(9===w){if(!(f=t.getElementById(i)))return r;if(f.id===i)return r.push(f),r}else if(v&&(f=v.getElementById(i))&&x(t,f)&&f.id===i)return r.push(f),r}else{if(s[2])return R.apply(r,t.getElementsByTagName(e)),r;if((i=s[3])&&n.getElementsByClassName&&t.getElementsByClassName)return R.apply(r,t.getElementsByClassName(i)),r}if(n.qsa&&!D[e+" "]&&(!m||!m.test(e))&&(1!==w||"object"!==t.nodeName.toLowerCase())){if(y=e,v=t,1===w&&(V.test(e)||U.test(e))){for((v=ee.test(e)&&ye(t.parentNode)||t)===t&&n.scope||((c=t.getAttribute("id"))?c=c.replace(re,oe):t.setAttribute("id",c=b)),l=(h=u(e)).length;l--;)h[l]=(c?"#"+c:":scope")+" "+xe(h[l]);y=h.join(",")}try{return R.apply(r,v.querySelectorAll(y)),r}catch(t){D(e,!0)}finally{c===b&&t.removeAttribute("id")}}}return a(e.replace(j,"$1"),t,r,o)}function ae(){var e=[];return function t(n,o){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=o}}function fe(e){return e[b]=!0,e}function ce(e){var t=p.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function se(e,t){for(var n=e.split("|"),o=n.length;o--;)r.attrHandle[n[o]]=t}function de(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function pe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function he(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ue(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function me(e){return fe((function(t){return t=+t,fe((function(n,r){for(var o,i=e([],n.length,t),u=i.length;u--;)n[o=i[u]]&&(n[o]=!(r[o]=n[o]))}))}))}function ye(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=le.support={},i=le.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Q.test(t||n&&n.nodeName||"HTML")},d=le.setDocument=function(e){var t,o,u=e?e.ownerDocument||e:w;return u!=p&&9===u.nodeType&&u.documentElement?(h=(p=u).documentElement,g=!i(p),w!=p&&(o=p.defaultView)&&o.top!==o&&(o.addEventListener?o.addEventListener("unload",ie,!1):o.attachEvent&&o.attachEvent("onunload",ie)),n.scope=ce((function(e){return h.appendChild(e).appendChild(p.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.attributes=ce((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=ce((function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=Z.test(p.getElementsByClassName),n.getById=ce((function(e){return h.appendChild(e).id=b,!p.getElementsByName||!p.getElementsByName(b).length})),n.getById?(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,r,o,i=t.getElementById(e);if(i){if((n=i.getAttributeNode("id"))&&n.value===e)return[i];for(o=t.getElementsByName(e),r=0;i=o[r++];)if((n=i.getAttributeNode("id"))&&n.value===e)return[i]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},y=[],m=[],(n.qsa=Z.test(p.querySelectorAll))&&(ce((function(e){var t;h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|"+M+")"),e.querySelectorAll("[id~="+b+"-]").length||m.push("~="),(t=p.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),ce((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=Z.test(v=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ce((function(e){n.disconnectedMatch=v.call(e,"*"),v.call(e,"[s!='']:x"),y.push("!=",k)})),m=m.length&&new RegExp(m.join("|")),y=y.length&&new RegExp(y.join("|")),t=Z.test(h.compareDocumentPosition),x=t||Z.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},T=t?function(e,t){if(e===t)return s=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==p||e.ownerDocument==w&&x(w,e)?-1:t==p||t.ownerDocument==w&&x(w,t)?1:c?H(c,e)-H(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return s=!0,0;var n,r=0,o=e.parentNode,i=t.parentNode,u=[e],l=[t];if(!o||!i)return e==p?-1:t==p?1:o?-1:i?1:c?H(c,e)-H(c,t):0;if(o===i)return de(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[r]===l[r];)r++;return r?de(u[r],l[r]):u[r]==w?-1:l[r]==w?1:0},p):p},le.matches=function(e,t){return le(e,null,null,t)},le.matchesSelector=function(e,t){if(d(e),n.matchesSelector&&g&&!D[t+" "]&&(!y||!y.test(t))&&(!m||!m.test(t)))try{var r=v.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){D(t,!0)}return le(t,p,null,[e]).length>0},le.contains=function(e,t){return(e.ownerDocument||e)!=p&&d(e),x(e,t)},le.attr=function(e,t){(e.ownerDocument||e)!=p&&d(e);var o=r.attrHandle[t.toLowerCase()],i=o&&L.call(r.attrHandle,t.toLowerCase())?o(e,t,!g):void 0;return void 0!==i?i:n.attributes||!g?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},le.escape=function(e){return(e+"").replace(re,oe)},le.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},le.uniqueSort=function(e){var t,r=[],o=0,i=0;if(s=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(T),s){for(;t=e[i++];)t===e[i]&&(o=r.push(i));for(;o--;)e.splice(r[o],1)}return c=null,e},o=le.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=o(t);return n},r=le.selectors={cacheLength:50,createPseudo:fe,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||le.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&le.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return K.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=u(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"("+P+"|$)"))&&E(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var o=le.attr(r,e);return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o.replace(O," ")+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),u="last"!==e.slice(-4),l="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,a){var f,c,s,d,p,h,g=i!==u?"nextSibling":"previousSibling",m=t.parentNode,y=l&&t.nodeName.toLowerCase(),v=!a&&!l,x=!1;if(m){if(i){for(;g;){for(d=t;d=d[g];)if(l?d.nodeName.toLowerCase()===y:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[u?m.firstChild:m.lastChild],u&&v){for(x=(p=(f=(c=(s=(d=m)[b]||(d[b]={}))[d.uniqueID]||(s[d.uniqueID]={}))[e]||[])[0]===N&&f[1])&&f[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(x=p=0)||h.pop();)if(1===d.nodeType&&++x&&d===t){c[e]=[N,p,x];break}}else if(v&&(x=p=(f=(c=(s=(d=t)[b]||(d[b]={}))[d.uniqueID]||(s[d.uniqueID]={}))[e]||[])[0]===N&&f[1]),!1===x)for(;(d=++p&&d&&d[g]||(x=p=0)||h.pop())&&((l?d.nodeName.toLowerCase()!==y:1!==d.nodeType)||!++x||(v&&((c=(s=d[b]||(d[b]={}))[d.uniqueID]||(s[d.uniqueID]={}))[e]=[N,x]),d!==t)););return(x-=o)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,o=r.pseudos[e]||r.setFilters[e.toLowerCase()]||le.error("unsupported pseudo: "+e);return o[b]?o(t):o.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?fe((function(e,n){for(var r,i=o(e,t),u=i.length;u--;)e[r=H(e,i[u])]=!(n[r]=i[u])})):function(e){return o(e,0,n)}):o}},pseudos:{not:fe((function(e){var t=[],n=[],r=l(e.replace(j,"$1"));return r[b]?fe((function(e,t,n,o){for(var i,u=r(e,null,o,[]),l=e.length;l--;)(i=u[l])&&(e[l]=!(t[l]=i))})):function(e,o,i){return t[0]=e,r(t,null,i,n),t[0]=null,!n.pop()}})),has:fe((function(e){return function(t){return le(e,t).length>0}})),contains:fe((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||o(t)).indexOf(e)>-1}})),lang:fe((function(e){return J.test(e||"")||le.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return W.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:me((function(){return[0]})),last:me((function(e,t){return[t-1]})),eq:me((function(e,t,n){return[n<0?n+t:n]})),even:me((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:me((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:me((function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e})),gt:me((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e}))}},r.pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=pe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=he(t);function ve(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(e,t,n){var r=t.dir,o=t.next,i=o||r,u=n&&"parentNode"===i,l=C++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||u)return e(t,n,o);return!1}:function(t,n,a){var f,c,s,d=[N,l];if(a){for(;t=t[r];)if((1===t.nodeType||u)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||u)if(c=(s=t[b]||(t[b]={}))[t.uniqueID]||(s[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[r]||t;else{if((f=c[i])&&f[0]===N&&f[1]===l)return d[2]=f[2];if(c[i]=d,d[2]=e(t,n,a))return!0}return!1}}function we(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function Ne(e,t,n,r,o){for(var i,u=[],l=0,a=e.length,f=null!=t;l<a;l++)(i=e[l])&&(n&&!n(i,r,o)||(u.push(i),f&&t.push(l)));return u}function Ce(e,t,n,r,o,i){return r&&!r[b]&&(r=Ce(r)),o&&!o[b]&&(o=Ce(o,i)),fe((function(i,u,l,a){var f,c,s,d=[],p=[],h=u.length,g=i||function(e,t,n){for(var r=0,o=t.length;r<o;r++)le(e,t[r],n);return n}(t||"*",l.nodeType?[l]:l,[]),m=!e||!i&&t?g:Ne(g,d,e,l,a),y=n?o||(i?e:h||r)?[]:u:m;if(n&&n(m,y,l,a),r)for(f=Ne(y,p),r(f,[],l,a),c=f.length;c--;)(s=f[c])&&(y[p[c]]=!(m[p[c]]=s));if(i){if(o||e){if(o){for(f=[],c=y.length;c--;)(s=y[c])&&f.push(m[c]=s);o(null,y=[],f,a)}for(c=y.length;c--;)(s=y[c])&&(f=o?H(i,s):d[c])>-1&&(i[f]=!(u[f]=s))}}else y=Ne(y===u?y.splice(h,y.length):y),o?o(null,u,y,a):R.apply(u,y)}))}function Ee(e){for(var t,n,o,i=e.length,u=r.relative[e[0].type],l=u||r.relative[" "],a=u?1:0,c=be((function(e){return e===t}),l,!0),s=be((function(e){return H(t,e)>-1}),l,!0),d=[function(e,n,r){var o=!u&&(r||n!==f)||((t=n).nodeType?c(e,n,r):s(e,n,r));return t=null,o}];a<i;a++)if(n=r.relative[e[a].type])d=[be(we(d),n)];else{if((n=r.filter[e[a].type].apply(null,e[a].matches))[b]){for(o=++a;o<i&&!r.relative[e[o].type];o++);return Ce(a>1&&we(d),a>1&&xe(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(j,"$1"),n,a<o&&Ee(e.slice(a,o)),o<i&&Ee(e=e.slice(o)),o<i&&xe(e))}d.push(n)}return we(d)}ve.prototype=r.filters=r.pseudos,r.setFilters=new ve,u=le.tokenize=function(e,t){var n,o,i,u,l,a,f,c=A[e+" "];if(c)return t?0:c.slice(0);for(l=e,a=[],f=r.preFilter;l;){for(u in n&&!(o=G.exec(l))||(o&&(l=l.slice(o[0].length)||l),a.push(i=[])),n=!1,(o=U.exec(l))&&(n=o.shift(),i.push({value:n,type:o[0].replace(j," ")}),l=l.slice(n.length)),r.filter)!(o=K[u].exec(l))||f[u]&&!(o=f[u](o))||(n=o.shift(),i.push({value:n,type:u,matches:o}),l=l.slice(n.length));if(!n)break}return t?l.length:l?le.error(e):A(e,a).slice(0)},l=le.compile=function(e,t){var n,o=[],i=[],l=S[e+" "];if(!l){for(t||(t=u(e)),n=t.length;n--;)(l=Ee(t[n]))[b]?o.push(l):i.push(l);l=S(e,function(e,t){var n=t.length>0,o=e.length>0,i=function(i,u,l,a,c){var s,h,m,y=0,v="0",x=i&&[],b=[],w=f,C=i||o&&r.find.TAG("*",c),E=N+=null==w?1:Math.random()||.1,A=C.length;for(c&&(f=u==p||u||c);v!==A&&null!=(s=C[v]);v++){if(o&&s){for(h=0,u||s.ownerDocument==p||(d(s),l=!g);m=e[h++];)if(m(s,u||p,l)){a.push(s);break}c&&(N=E)}n&&((s=!m&&s)&&y--,i&&x.push(s))}if(y+=v,n&&v!==y){for(h=0;m=t[h++];)m(x,b,u,l);if(i){if(y>0)for(;v--;)x[v]||b[v]||(b[v]=I.call(a));b=Ne(b)}R.apply(a,b),c&&!i&&b.length>0&&y+t.length>1&&le.uniqueSort(a)}return c&&(N=E,f=w),x};return n?fe(i):i}(i,o)),l.selector=e}return l},a=le.select=function(e,t,n,o){var i,a,f,c,s,d="function"==typeof e&&e,p=!o&&u(e=d.selector||e);if(n=n||[],1===p.length){if((a=p[0]=p[0].slice(0)).length>2&&"ID"===(f=a[0]).type&&9===t.nodeType&&g&&r.relative[a[1].type]){if(!(t=(r.find.ID(f.matches[0].replace(te,ne),t)||[])[0]))return n;d&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(i=K.needsContext.test(e)?0:a.length;i--&&(f=a[i],!r.relative[c=f.type]);)if((s=r.find[c])&&(o=s(f.matches[0].replace(te,ne),ee.test(a[0].type)&&ye(t.parentNode)||t))){if(a.splice(i,1),!(e=o.length&&xe(a)))return R.apply(n,o),n;break}}return(d||l(e,p))(o,t,!g,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},n.sortStable=b.split("").sort(T).join("")===b,n.detectDuplicates=!!s,d(),n.sortDetached=ce((function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"))})),ce((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||se("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&ce((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||se("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ce((function(e){return null==e.getAttribute("disabled")}))||se(M,(function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}));var Ae=e.Sizzle;le.noConflict=function(){return e.Sizzle===le&&(e.Sizzle=Ae),le},"function"==typeof define&&define.amd?define((function(){return le})):"undefined"!=typeof module&&module.exports?module.exports=le:e.Sizzle=le}(window);