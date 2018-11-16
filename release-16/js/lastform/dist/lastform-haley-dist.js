/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,
r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Ma(a,b,f),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);
if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
;
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});
if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;
/*!
	Autosize 3.0.20
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),s="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(s)&&(s=0),l()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function o(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function r(){var t=e.style.height,n=o(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="auto";var i=e.scrollHeight+s;return 0===e.scrollHeight?void(e.style.height=t):(e.style.height=i+"px",u=e.clientWidth,n.forEach(function(e){e.node.scrollTop=e.scrollTop}),void(r&&(document.documentElement.scrollTop=r)))}function l(){r();var t=Math.round(parseFloat(e.style.height)),o=window.getComputedStyle(e,null),i=Math.round(parseFloat(o.height));if(i!==t?"visible"!==o.overflowY&&(n("visible"),r(),i=Math.round(parseFloat(window.getComputedStyle(e,null).height))):"hidden"!==o.overflowY&&(n("hidden"),r(),i=Math.round(parseFloat(window.getComputedStyle(e,null).height))),a!==i){a=i;var l=d("autosize:resized");try{e.dispatchEvent(l)}catch(e){}}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!i.has(e)){var s=null,u=e.clientWidth,a=null,p=function(){e.clientWidth!==u&&l()},c=function(t){window.removeEventListener("resize",p,!1),e.removeEventListener("input",l,!1),e.removeEventListener("keyup",l,!1),e.removeEventListener("autosize:destroy",c,!1),e.removeEventListener("autosize:update",l,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),i.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",c,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",l,!1),window.addEventListener("resize",p,!1),e.addEventListener("input",l,!1),e.addEventListener("autosize:update",l,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",i.set(e,{destroy:c,update:l}),t()}}function o(e){var t=i.get(e);t&&t.destroy()}function r(e){var t=i.get(e);t&&t.update()}var i="function"==typeof Map?new Map:function(){var e=[],t=[];return{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){e.indexOf(n)===-1&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}}(),d=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){d=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(l=function(e){return e},l.destroy=function(e){return e},l.update=function(e){return e}):(l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},l.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e}),t.exports=l});;
/* SockJS client, version --minify, http://sockjs.org, MIT License

Copyright (c) 2011-2012 VMware, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// JSON2 by Douglas Crockford (minified).
var JSON;JSON||(JSON={}),function(){function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g;return e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)typeof rep[c]=="string"&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g;return e}}function quote(a){escapable.lastIndex=0;return escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function f(a){return a<10?"0"+a:a}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver=="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")})}()

SockJS=function(){var a=document,b=window,c={},d=function(){};d.prototype.addEventListener=function(a,b){this._listeners||(this._listeners={}),a in this._listeners||(this._listeners[a]=[]);var d=this._listeners[a];c.arrIndexOf(d,b)===-1&&d.push(b);return},d.prototype.removeEventListener=function(a,b){if(!(this._listeners&&a in this._listeners))return;var d=this._listeners[a],e=c.arrIndexOf(d,b);if(e!==-1){d.length>1?this._listeners[a]=d.slice(0,e).concat(d.slice(e+1)):delete this._listeners[a];return}return},d.prototype.dispatchEvent=function(a){var b=a.type,c=Array.prototype.slice.call(arguments,0);this["on"+b]&&this["on"+b].apply(this,c);if(this._listeners&&b in this._listeners)for(var d=0;d<this._listeners[b].length;d++)this._listeners[b][d].apply(this,c)};var e=function(a,b){this.type=a;if(typeof b!="undefined")for(var c in b){if(!b.hasOwnProperty(c))continue;this[c]=b[c]}};e.prototype.toString=function(){var a=[];for(var b in this){if(!this.hasOwnProperty(b))continue;var c=this[b];typeof c=="function"&&(c="[function]"),a.push(b+"="+c)}return"SimpleEvent("+a.join(", ")+")"};var f=function(a){var b=this;b._events=a||[],b._listeners={}};f.prototype.emit=function(a){var b=this;b._verifyType(a);if(b._nuked)return;var c=Array.prototype.slice.call(arguments,1);b["on"+a]&&b["on"+a].apply(b,c);if(a in b._listeners)for(var d=0;d<b._listeners[a].length;d++)b._listeners[a][d].apply(b,c)},f.prototype.on=function(a,b){var c=this;c._verifyType(a);if(c._nuked)return;a in c._listeners||(c._listeners[a]=[]),c._listeners[a].push(b)},f.prototype._verifyType=function(a){var b=this;c.arrIndexOf(b._events,a)===-1&&c.log("Event "+JSON.stringify(a)+" not listed "+JSON.stringify(b._events)+" in "+b)},f.prototype.nuke=function(){var a=this;a._nuked=!0;for(var b=0;b<a._events.length;b++)delete a[a._events[b]];a._listeners={}};var g="abcdefghijklmnopqrstuvwxyz0123456789_";c.random_string=function(a,b){b=b||g.length;var c,d=[];for(c=0;c<a;c++)d.push(g.substr(Math.floor(Math.random()*b),1));return d.join("")},c.random_number=function(a){return Math.floor(Math.random()*a)},c.random_number_string=function(a){var b=(""+(a-1)).length,d=Array(b+1).join("0");return(d+c.random_number(a)).slice(-b)},c.getOrigin=function(a){a+="/";var b=a.split("/").slice(0,3);return b.join("/")},c.isSameOriginUrl=function(a,c){return c||(c=b.location.href),a.split("/").slice(0,3).join("/")===c.split("/").slice(0,3).join("/")},c.getParentDomain=function(a){if(/^[0-9.]*$/.test(a))return a;if(/^\[/.test(a))return a;if(!/[.]/.test(a))return a;var b=a.split(".").slice(1);return b.join(".")},c.objectExtend=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a};var h="_jp";c.polluteGlobalNamespace=function(){h in b||(b[h]={})},c.closeFrame=function(a,b){return"c"+JSON.stringify([a,b])},c.userSetCode=function(a){return a===1e3||a>=3e3&&a<=4999},c.countRTO=function(a){var b;return a>100?b=3*a:b=a+200,b},c.log=function(){b.console&&console.log&&console.log.apply&&console.log.apply(console,arguments)},c.bind=function(a,b){return a.bind?a.bind(b):function(){return a.apply(b,arguments)}},c.flatUrl=function(a){return a.indexOf("?")===-1&&a.indexOf("#")===-1},c.amendUrl=function(b){var d=a.location;if(!b)throw new Error("Wrong url for SockJS");if(!c.flatUrl(b))throw new Error("Only basic urls are supported in SockJS");return b.indexOf("//")===0&&(b=d.protocol+b),b.indexOf("/")===0&&(b=d.protocol+"//"+d.host+b),b=b.replace(/[/]+$/,""),b},c.arrIndexOf=function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},c.arrSkip=function(a,b){var d=c.arrIndexOf(a,b);if(d===-1)return a.slice();var e=a.slice(0,d);return e.concat(a.slice(d+1))},c.isArray=Array.isArray||function(a){return{}.toString.call(a).indexOf("Array")>=0},c.delay=function(a,b){return typeof a=="function"&&(b=a,a=0),setTimeout(b,a)};var i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,j={"\0":"\\u0000","\x01":"\\u0001","\x02":"\\u0002","\x03":"\\u0003","\x04":"\\u0004","\x05":"\\u0005","\x06":"\\u0006","\x07":"\\u0007","\b":"\\b","\t":"\\t","\n":"\\n","\x0b":"\\u000b","\f":"\\f","\r":"\\r","\x0e":"\\u000e","\x0f":"\\u000f","\x10":"\\u0010","\x11":"\\u0011","\x12":"\\u0012","\x13":"\\u0013","\x14":"\\u0014","\x15":"\\u0015","\x16":"\\u0016","\x17":"\\u0017","\x18":"\\u0018","\x19":"\\u0019","\x1a":"\\u001a","\x1b":"\\u001b","\x1c":"\\u001c","\x1d":"\\u001d","\x1e":"\\u001e","\x1f":"\\u001f",'"':'\\"',"\\":"\\\\","\x7f":"\\u007f","\x80":"\\u0080","\x81":"\\u0081","\x82":"\\u0082","\x83":"\\u0083","\x84":"\\u0084","\x85":"\\u0085","\x86":"\\u0086","\x87":"\\u0087","\x88":"\\u0088","\x89":"\\u0089","\x8a":"\\u008a","\x8b":"\\u008b","\x8c":"\\u008c","\x8d":"\\u008d","\x8e":"\\u008e","\x8f":"\\u008f","\x90":"\\u0090","\x91":"\\u0091","\x92":"\\u0092","\x93":"\\u0093","\x94":"\\u0094","\x95":"\\u0095","\x96":"\\u0096","\x97":"\\u0097","\x98":"\\u0098","\x99":"\\u0099","\x9a":"\\u009a","\x9b":"\\u009b","\x9c":"\\u009c","\x9d":"\\u009d","\x9e":"\\u009e","\x9f":"\\u009f","\xad":"\\u00ad","\u0600":"\\u0600","\u0601":"\\u0601","\u0602":"\\u0602","\u0603":"\\u0603","\u0604":"\\u0604","\u070f":"\\u070f","\u17b4":"\\u17b4","\u17b5":"\\u17b5","\u200c":"\\u200c","\u200d":"\\u200d","\u200e":"\\u200e","\u200f":"\\u200f","\u2028":"\\u2028","\u2029":"\\u2029","\u202a":"\\u202a","\u202b":"\\u202b","\u202c":"\\u202c","\u202d":"\\u202d","\u202e":"\\u202e","\u202f":"\\u202f","\u2060":"\\u2060","\u2061":"\\u2061","\u2062":"\\u2062","\u2063":"\\u2063","\u2064":"\\u2064","\u2065":"\\u2065","\u2066":"\\u2066","\u2067":"\\u2067","\u2068":"\\u2068","\u2069":"\\u2069","\u206a":"\\u206a","\u206b":"\\u206b","\u206c":"\\u206c","\u206d":"\\u206d","\u206e":"\\u206e","\u206f":"\\u206f","\ufeff":"\\ufeff","\ufff0":"\\ufff0","\ufff1":"\\ufff1","\ufff2":"\\ufff2","\ufff3":"\\ufff3","\ufff4":"\\ufff4","\ufff5":"\\ufff5","\ufff6":"\\ufff6","\ufff7":"\\ufff7","\ufff8":"\\ufff8","\ufff9":"\\ufff9","\ufffa":"\\ufffa","\ufffb":"\\ufffb","\ufffc":"\\ufffc","\ufffd":"\\ufffd","\ufffe":"\\ufffe","\uffff":"\\uffff"},k=/[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,l,m=JSON&&JSON.stringify||function(a){return i.lastIndex=0,i.test(a)&&(a=a.replace(i,function(a){return j[a]})),'"'+a+'"'},n=function(a){var b,c={},d=[];for(b=0;b<65536;b++)d.push(String.fromCharCode(b));return a.lastIndex=0,d.join("").replace(a,function(a){return c[a]="\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4),""}),a.lastIndex=0,c};c.quote=function(a){var b=m(a);return k.lastIndex=0,k.test(b)?(l||(l=n(k)),b.replace(k,function(a){return l[a]})):b};var o=["websocket","xdr-streaming","xhr-streaming","iframe-eventsource","iframe-htmlfile","xdr-polling","xhr-polling","iframe-xhr-polling","jsonp-polling"];c.probeProtocols=function(){var a={};for(var b=0;b<o.length;b++){var c=o[b];a[c]=y[c]&&y[c].enabled()}return a},c.detectProtocols=function(a,b,c){var d={},e=[];b||(b=o);for(var f=0;f<b.length;f++){var g=b[f];d[g]=a[g]}var h=function(a){var b=a.shift();d[b]?e.push(b):a.length>0&&h(a)};return c.websocket!==!1&&h(["websocket"]),d["xhr-streaming"]&&!c.null_origin?e.push("xhr-streaming"):d["xdr-streaming"]&&!c.cookie_needed&&!c.null_origin?e.push("xdr-streaming"):h(["iframe-eventsource","iframe-htmlfile"]),d["xhr-polling"]&&!c.null_origin?e.push("xhr-polling"):d["xdr-polling"]&&!c.cookie_needed&&!c.null_origin?e.push("xdr-polling"):h(["iframe-xhr-polling","jsonp-polling"]),e};var p="_sockjs_global";c.createHook=function(){var a="a"+c.random_string(8);if(!(p in b)){var d={};b[p]=function(a){return a in d||(d[a]={id:a,del:function(){delete d[a]}}),d[a]}}return b[p](a)},c.attachMessage=function(a){c.attachEvent("message",a)},c.attachEvent=function(c,d){typeof b.addEventListener!="undefined"?b.addEventListener(c,d,!1):(a.attachEvent("on"+c,d),b.attachEvent("on"+c,d))},c.detachMessage=function(a){c.detachEvent("message",a)},c.detachEvent=function(c,d){typeof b.addEventListener!="undefined"?b.removeEventListener(c,d,!1):(a.detachEvent("on"+c,d),b.detachEvent("on"+c,d))};var q={},r=!1,s=function(){for(var a in q)q[a](),delete q[a]},t=function(){if(r)return;r=!0,s()};c.attachEvent("unload",t),c.unload_add=function(a){var b=c.random_string(8);return q[b]=a,r&&c.delay(s),b},c.unload_del=function(a){a in q&&delete q[a]},c.createIframe=function(b,d){var e=a.createElement("iframe"),f,g,h=function(){clearTimeout(f);try{e.onload=null}catch(a){}e.onerror=null},i=function(){e&&(h(),setTimeout(function(){e&&e.parentNode.removeChild(e),e=null},0),c.unload_del(g))},j=function(a){e&&(i(),d(a))},k=function(a,b){try{e&&e.contentWindow&&e.contentWindow.postMessage(a,b)}catch(c){}};return e.src=b,e.style.display="none",e.style.position="absolute",e.onerror=function(){j("onerror")},e.onload=function(){clearTimeout(f),f=setTimeout(function(){j("onload timeout")},2e3)},a.body.appendChild(e),f=setTimeout(function(){j("timeout")},15e3),g=c.unload_add(i),{post:k,cleanup:i,loaded:h}},c.createHtmlfile=function(a,d){var e=new ActiveXObject("htmlfile"),f,g,i,j=function(){clearTimeout(f)},k=function(){e&&(j(),c.unload_del(g),i.parentNode.removeChild(i),i=e=null,CollectGarbage())},l=function(a){e&&(k(),d(a))},m=function(a,b){try{i&&i.contentWindow&&i.contentWindow.postMessage(a,b)}catch(c){}};e.open(),e.write('<html><script>document.domain="'+document.domain+'";'+"</s"+"cript></html>"),e.close(),e.parentWindow[h]=b[h];var n=e.createElement("div");return e.body.appendChild(n),i=e.createElement("iframe"),n.appendChild(i),i.src=a,f=setTimeout(function(){l("timeout")},15e3),g=c.unload_add(k),{post:m,cleanup:k,loaded:j}};var u=function(){};u.prototype=new f(["chunk","finish"]),u.prototype._start=function(a,d,e,f){var g=this;try{g.xhr=new XMLHttpRequest}catch(h){}if(!g.xhr)try{g.xhr=new b.ActiveXObject("Microsoft.XMLHTTP")}catch(h){}if(b.ActiveXObject||b.XDomainRequest)d+=(d.indexOf("?")===-1?"?":"&")+"t="+ +(new Date);g.unload_ref=c.unload_add(function(){g._cleanup(!0)});try{g.xhr.open(a,d,!0)}catch(i){g.emit("finish",0,""),g._cleanup();return}if(!f||!f.no_credentials)g.xhr.withCredentials="true";if(f&&f.headers)for(var j in f.headers)g.xhr.setRequestHeader(j,f.headers[j]);g.xhr.onreadystatechange=function(){if(g.xhr){var a=g.xhr;switch(a.readyState){case 3:try{var b=a.status,c=a.responseText}catch(a){}b===1223&&(b=204),c&&c.length>0&&g.emit("chunk",b,c);break;case 4:var b=a.status;b===1223&&(b=204),g.emit("finish",b,a.responseText),g._cleanup(!1)}}},g.xhr.send(e)},u.prototype._cleanup=function(a){var b=this;if(!b.xhr)return;c.unload_del(b.unload_ref),b.xhr.onreadystatechange=function(){};if(a)try{b.xhr.abort()}catch(d){}b.unload_ref=b.xhr=null},u.prototype.close=function(){var a=this;a.nuke(),a._cleanup(!0)};var v=c.XHRCorsObject=function(){var a=this,b=arguments;c.delay(function(){a._start.apply(a,b)})};v.prototype=new u;var w=c.XHRLocalObject=function(a,b,d){var e=this;c.delay(function(){e._start(a,b,d,{no_credentials:!0})})};w.prototype=new u;var x=c.XDRObject=function(a,b,d){var e=this;c.delay(function(){e._start(a,b,d)})};x.prototype=new f(["chunk","finish"]),x.prototype._start=function(a,b,d){var e=this,f=new XDomainRequest;b+=(b.indexOf("?")===-1?"?":"&")+"t="+ +(new Date);var g=f.ontimeout=f.onerror=function(){e.emit("finish",0,""),e._cleanup(!1)};f.onprogress=function(){e.emit("chunk",200,f.responseText)},f.onload=function(){e.emit("finish",200,f.responseText),e._cleanup(!1)},e.xdr=f,e.unload_ref=c.unload_add(function(){e._cleanup(!0)});try{e.xdr.open(a,b),e.xdr.send(d)}catch(h){g()}},x.prototype._cleanup=function(a){var b=this;if(!b.xdr)return;c.unload_del(b.unload_ref),b.xdr.ontimeout=b.xdr.onerror=b.xdr.onprogress=b.xdr.onload=null;if(a)try{b.xdr.abort()}catch(d){}b.unload_ref=b.xdr=null},x.prototype.close=function(){var a=this;a.nuke(),a._cleanup(!0)},c.isXHRCorsCapable=function(){return b.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest?1:b.XDomainRequest&&a.domain?2:L.enabled()?3:4};var y=function(a,d,e){if(this===b)return new y(a,d,e);var f=this,g;f._options={devel:!1,debug:!1,protocols_whitelist:[],info:undefined,rtt:undefined},e&&c.objectExtend(f._options,e),f._base_url=c.amendUrl(a),f._server=f._options.server||c.random_number_string(1e3),f._options.protocols_whitelist&&f._options.protocols_whitelist.length?g=f._options.protocols_whitelist:(typeof d=="string"&&d.length>0?g=[d]:c.isArray(d)?g=d:g=null,g&&f._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.')),f._protocols=[],f.protocol=null,f.readyState=y.CONNECTING,f._ir=S(f._base_url),f._ir.onfinish=function(a,b){f._ir=null,a?(f._options.info&&(a=c.objectExtend(a,f._options.info)),f._options.rtt&&(b=f._options.rtt),f._applyInfo(a,b,g),f._didClose()):f._didClose(1002,"Can't connect to server",!0)}};y.prototype=new d,y.version="--minify",y.CONNECTING=0,y.OPEN=1,y.CLOSING=2,y.CLOSED=3,y.prototype._debug=function(){this._options.debug&&c.log.apply(c,arguments)},y.prototype._dispatchOpen=function(){var a=this;a.readyState===y.CONNECTING?(a._transport_tref&&(clearTimeout(a._transport_tref),a._transport_tref=null),a.readyState=y.OPEN,a.dispatchEvent(new e("open"))):a._didClose(1006,"Server lost session")},y.prototype._dispatchMessage=function(a){var b=this;if(b.readyState!==y.OPEN)return;b.dispatchEvent(new e("message",{data:a}))},y.prototype._dispatchHeartbeat=function(a){var b=this;if(b.readyState!==y.OPEN)return;b.dispatchEvent(new e("heartbeat",{}))},y.prototype._didClose=function(a,b,d){var f=this;if(f.readyState!==y.CONNECTING&&f.readyState!==y.OPEN&&f.readyState!==y.CLOSING)throw new Error("INVALID_STATE_ERR");f._ir&&(f._ir.nuke(),f._ir=null),f._transport&&(f._transport.doCleanup(),f._transport=null);var g=new e("close",{code:a,reason:b,wasClean:c.userSetCode(a)});if(!c.userSetCode(a)&&f.readyState===y.CONNECTING&&!d){if(f._try_next_protocol(g))return;g=new e("close",{code:2e3,reason:"All transports failed",wasClean:!1,last_event:g})}f.readyState=y.CLOSED,c.delay(function(){f.dispatchEvent(g)})},y.prototype._didMessage=function(a){var b=this,c=a.slice(0,1);switch(c){case"o":b._dispatchOpen();break;case"a":var d=JSON.parse(a.slice(1)||"[]");for(var e=0;e<d.length;e++)b._dispatchMessage(d[e]);break;case"m":var d=JSON.parse(a.slice(1)||"null");b._dispatchMessage(d);break;case"c":var d=JSON.parse(a.slice(1)||"[]");b._didClose(d[0],d[1]);break;case"h":b._dispatchHeartbeat()}},y.prototype._try_next_protocol=function(b){var d=this;d.protocol&&(d._debug("Closed transport:",d.protocol,""+b),d.protocol=null),d._transport_tref&&(clearTimeout(d._transport_tref),d._transport_tref=null);for(;;){var e=d.protocol=d._protocols.shift();if(!e)return!1;if(y[e]&&y[e].need_body===!0&&(!a.body||typeof a.readyState!="undefined"&&a.readyState!=="complete"))return d._protocols.unshift(e),d.protocol="waiting-for-load",c.attachEvent("load",function(){d._try_next_protocol()}),!0;if(!!y[e]&&!!y[e].enabled(d._options)){var f=y[e].roundTrips||1,g=(d._options.rto||0)*f||5e3;d._transport_tref=c.delay(g,function(){d.readyState===y.CONNECTING&&d._didClose(2007,"Transport timeouted")});var h=c.random_string(8),i=d._base_url+"/"+d._server+"/"+h;return d._debug("Opening transport:",e," url:"+i," RTO:"+d._options.rto),d._transport=new y[e](d,i,d._base_url),!0}d._debug("Skipping transport:",e)}},y.prototype.close=function(a,b){var d=this;if(a&&!c.userSetCode(a))throw new Error("INVALID_ACCESS_ERR");return d.readyState!==y.CONNECTING&&d.readyState!==y.OPEN?!1:(d.readyState=y.CLOSING,d._didClose(a||1e3,b||"Normal closure"),!0)},y.prototype.send=function(a){var b=this;if(b.readyState===y.CONNECTING)throw new Error("INVALID_STATE_ERR");return b.readyState===y.OPEN&&b._transport.doSend(c.quote(""+a)),!0},y.prototype._applyInfo=function(b,d,e){var f=this;f._options.info=b,f._options.rtt=d,f._options.rto=c.countRTO(d),f._options.info.null_origin=!a.domain;var g=c.probeProtocols();f._protocols=c.detectProtocols(g,e,b)};var z=y.websocket=function(a,d){var e=this,f=d+"/websocket";f.slice(0,5)==="https"?f="wss"+f.slice(5):f="ws"+f.slice(4),e.ri=a,e.url=f;var g=b.WebSocket||b.MozWebSocket;e.ws=new g(e.url),e.ws.onmessage=function(a){e.ri._didMessage(a.data)},e.unload_ref=c.unload_add(function(){e.ws.close()}),e.ws.onclose=function(){e.ri._didMessage(c.closeFrame(1006,"WebSocket connection broken"))}};z.prototype.doSend=function(a){this.ws.send("["+a+"]")},z.prototype.doCleanup=function(){var a=this,b=a.ws;b&&(b.onmessage=b.onclose=null,b.close(),c.unload_del(a.unload_ref),a.unload_ref=a.ri=a.ws=null)},z.enabled=function(){return!!b.WebSocket||!!b.MozWebSocket},z.roundTrips=2;var A=function(){};A.prototype.send_constructor=function(a){var b=this;b.send_buffer=[],b.sender=a},A.prototype.doSend=function(a){var b=this;b.send_buffer.push(a),b.send_stop||b.send_schedule()},A.prototype.send_schedule_wait=function(){var a=this,b;a.send_stop=function(){a.send_stop=null,clearTimeout(b)},b=c.delay(25,function(){a.send_stop=null,a.send_schedule()})},A.prototype.send_schedule=function(){var a=this;if(a.send_buffer.length>0){var b="["+a.send_buffer.join(",")+"]";a.send_stop=a.sender(a.trans_url,b,function(b,c){a.send_stop=null,b===!1?a.ri._didClose(1006,"Sending error "+c):a.send_schedule_wait()}),a.send_buffer=[]}},A.prototype.send_destructor=function(){var a=this;a._send_stop&&a._send_stop(),a._send_stop=null};var B=function(b,d,e){var f=this;if(!("_send_form"in f)){var g=f._send_form=a.createElement("form"),h=f._send_area=a.createElement("textarea");h.name="d",g.style.display="none",g.style.position="absolute",g.method="POST",g.enctype="application/x-www-form-urlencoded",g.acceptCharset="UTF-8",g.appendChild(h),a.body.appendChild(g)}var g=f._send_form,h=f._send_area,i="a"+c.random_string(8);g.target=i,g.action=b+"/jsonp_send?i="+i;var j;try{j=a.createElement('<iframe name="'+i+'">')}catch(k){j=a.createElement("iframe"),j.name=i}j.id=i,g.appendChild(j),j.style.display="none";try{h.value=d}catch(l){c.log("Your browser is seriously broken. Go home! "+l.message)}g.submit();var m=function(a){if(!j.onerror)return;j.onreadystatechange=j.onerror=j.onload=null,c.delay(500,function(){j.parentNode.removeChild(j),j=null}),h.value="",e(!0)};return j.onerror=j.onload=m,j.onreadystatechange=function(a){j.readyState=="complete"&&m()},m},C=function(a){return function(b,c,d){var e=new a("POST",b+"/xhr_send",c);return e.onfinish=function(a,b){d(a===200||a===204,"http status "+a)},function(a){d(!1,a)}}},D=function(b,d){var e,f=a.createElement("script"),g,h=function(a){g&&(g.parentNode.removeChild(g),g=null),f&&(clearTimeout(e),f.parentNode.removeChild(f),f.onreadystatechange=f.onerror=f.onload=f.onclick=null,f=null,d(a),d=null)},i=!1,j=null;f.id="a"+c.random_string(8),f.src=b,f.type="text/javascript",f.charset="UTF-8",f.onerror=function(a){j||(j=setTimeout(function(){i||h(c.closeFrame(1006,"JSONP script loaded abnormally (onerror)"))},1e3))},f.onload=function(a){h(c.closeFrame(1006,"JSONP script loaded abnormally (onload)"))},f.onreadystatechange=function(a){if(/loaded|closed/.test(f.readyState)){if(f&&f.htmlFor&&f.onclick){i=!0;try{f.onclick()}catch(b){}}f&&h(c.closeFrame(1006,"JSONP script loaded abnormally (onreadystatechange)"))}};if(typeof f.async=="undefined"&&a.attachEvent)if(!/opera/i.test(navigator.userAgent)){try{f.htmlFor=f.id,f.event="onclick"}catch(k){}f.async=!0}else g=a.createElement("script"),g.text="try{var a = document.getElementById('"+f.id+"'); if(a)a.onerror();}catch(x){};",f.async=g.async=!1;typeof f.async!="undefined"&&(f.async=!0),e=setTimeout(function(){h(c.closeFrame(1006,"JSONP script loaded abnormally (timeout)"))},35e3);var l=a.getElementsByTagName("head")[0];return l.insertBefore(f,l.firstChild),g&&l.insertBefore(g,l.firstChild),h},E=y["jsonp-polling"]=function(a,b){c.polluteGlobalNamespace();var d=this;d.ri=a,d.trans_url=b,d.send_constructor(B),d._schedule_recv()};E.prototype=new A,E.prototype._schedule_recv=function(){var a=this,b=function(b){a._recv_stop=null,b&&(a._is_closing||a.ri._didMessage(b)),a._is_closing||a._schedule_recv()};a._recv_stop=F(a.trans_url+"/jsonp",D,b)},E.enabled=function(){return!0},E.need_body=!0,E.prototype.doCleanup=function(){var a=this;a._is_closing=!0,a._recv_stop&&a._recv_stop(),a.ri=a._recv_stop=null,a.send_destructor()};var F=function(a,d,e){var f="a"+c.random_string(6),g=a+"?c="+escape(h+"."+f),i=0,j=function(a){switch(i){case 0:delete b[h][f],e(a);break;case 1:e(a),i=2;break;case 2:delete b[h][f]}},k=d(g,j);b[h][f]=k;var l=function(){b[h][f]&&(i=1,b[h][f](c.closeFrame(1e3,"JSONP user aborted read")))};return l},G=function(){};G.prototype=new A,G.prototype.run=function(a,b,c,d,e){var f=this;f.ri=a,f.trans_url=b,f.send_constructor(C(e)),f.poll=new $(a,d,b+c,e)},G.prototype.doCleanup=function(){var a=this;a.poll&&(a.poll.abort(),a.poll=null)};var H=y["xhr-streaming"]=function(a,b){this.run(a,b,"/xhr_streaming",bd,c.XHRCorsObject)};H.prototype=new G,H.enabled=function(){return b.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest&&!/opera/i.test(navigator.userAgent)},H.roundTrips=2,H.need_body=!0;var I=y["xdr-streaming"]=function(a,b){this.run(a,b,"/xhr_streaming",bd,c.XDRObject)};I.prototype=new G,I.enabled=function(){return!!b.XDomainRequest},I.roundTrips=2;var J=y["xhr-polling"]=function(a,b){this.run(a,b,"/xhr",bd,c.XHRCorsObject)};J.prototype=new G,J.enabled=H.enabled,J.roundTrips=2;var K=y["xdr-polling"]=function(a,b){this.run(a,b,"/xhr",bd,c.XDRObject)};K.prototype=new G,K.enabled=I.enabled,K.roundTrips=2;var L=function(){};L.prototype.i_constructor=function(a,b,d){var e=this;e.ri=a,e.origin=c.getOrigin(d),e.base_url=d,e.trans_url=b;var f=d+"/iframe.html";e.ri._options.devel&&(f+="?t="+ +(new Date)),e.window_id=c.random_string(8),f+="#"+e.window_id,e.iframeObj=c.createIframe(f,function(a){e.ri._didClose(1006,"Unable to load an iframe ("+a+")")}),e.onmessage_cb=c.bind(e.onmessage,e),c.attachMessage(e.onmessage_cb)},L.prototype.doCleanup=function(){var a=this;if(a.iframeObj){c.detachMessage(a.onmessage_cb);try{a.iframeObj.iframe.contentWindow&&a.postMessage("c")}catch(b){}a.iframeObj.cleanup(),a.iframeObj=null,a.onmessage_cb=a.iframeObj=null}},L.prototype.onmessage=function(a){var b=this;if(a.origin!==b.origin)return;var c=a.data.slice(0,8),d=a.data.slice(8,9),e=a.data.slice(9);if(c!==b.window_id)return;switch(d){case"s":b.iframeObj.loaded(),b.postMessage("s",JSON.stringify([y.version,b.protocol,b.trans_url,b.base_url]));break;case"t":b.ri._didMessage(e)}},L.prototype.postMessage=function(a,b){var c=this;c.iframeObj.post(c.window_id+a+(b||""),c.origin)},L.prototype.doSend=function(a){this.postMessage("m",a)},L.enabled=function(){var a=navigator&&navigator.userAgent&&navigator.userAgent.indexOf("Konqueror")!==-1;return(typeof b.postMessage=="function"||typeof b.postMessage=="object")&&!a};var M,N=function(a,d){parent!==b?parent.postMessage(M+a+(d||""),"*"):c.log("Can't postMessage, no parent window.",a,d)},O=function(){};O.prototype._didClose=function(a,b){N("t",c.closeFrame(a,b))},O.prototype._didMessage=function(a){N("t",a)},O.prototype._doSend=function(a){this._transport.doSend(a)},O.prototype._doCleanup=function(){this._transport.doCleanup()},c.parent_origin=undefined,y.bootstrap_iframe=function(){var d;M=a.location.hash.slice(1);var e=function(a){if(a.source!==parent)return;typeof c.parent_origin=="undefined"&&(c.parent_origin=a.origin);if(a.origin!==c.parent_origin)return;var e=a.data.slice(0,8),f=a.data.slice(8,9),g=a.data.slice(9);if(e!==M)return;switch(f){case"s":var h=JSON.parse(g),i=h[0],j=h[1],k=h[2],l=h[3];i!==y.version&&c.log('Incompatibile SockJS! Main site uses: "'+i+'", the iframe:'+' "'+y.version+'".');if(!c.flatUrl(k)||!c.flatUrl(l)){c.log("Only basic urls are supported in SockJS");return}if(!c.isSameOriginUrl(k)||!c.isSameOriginUrl(l)){c.log("Can't connect to different domain from within an iframe. ("+JSON.stringify([b.location.href,k,l])+")");return}d=new O,d._transport=new O[j](d,k,l);break;case"m":d._doSend(g);break;case"c":d&&d._doCleanup(),d=null}};c.attachMessage(e),N("s")};var P=function(a,b){var d=this;c.delay(function(){d.doXhr(a,b)})};P.prototype=new f(["finish"]),P.prototype.doXhr=function(a,b){var d=this,e=(new Date).getTime(),f=new b("GET",a+"/info"),g=c.delay(8e3,function(){f.ontimeout()});f.onfinish=function(a,b){clearTimeout(g),g=null;if(a===200){var c=(new Date).getTime()-e,f=JSON.parse(b);typeof f!="object"&&(f={}),d.emit("finish",f,c)}else d.emit("finish")},f.ontimeout=function(){f.close(),d.emit("finish")}};var Q=function(b){var d=this,e=function(){var a=new L;a.protocol="w-iframe-info-receiver";var c=function(b){if(typeof b=="string"&&b.substr(0,1)==="m"){var c=JSON.parse(b.substr(1)),e=c[0],f=c[1];d.emit("finish",e,f)}else d.emit("finish");a.doCleanup(),a=null},e={_options:{},_didClose:c,_didMessage:c};a.i_constructor(e,b,b)};a.body?e():c.attachEvent("load",e)};Q.prototype=new f(["finish"]);var R=function(){var a=this;c.delay(function(){a.emit("finish",{},2e3)})};R.prototype=new f(["finish"]);var S=function(a){if(c.isSameOriginUrl(a))return new P(a,c.XHRLocalObject);switch(c.isXHRCorsCapable()){case 1:return new P(a,c.XHRLocalObject);case 2:return new P(a,c.XDRObject);case 3:return new Q(a);default:return new R}},T=O["w-iframe-info-receiver"]=function(a,b,d){var e=new P(d,c.XHRLocalObject);e.onfinish=function(b,c){a._didMessage("m"+JSON.stringify([b,c])),a._didClose()}};T.prototype.doCleanup=function(){};var U=y["iframe-eventsource"]=function(){var a=this;a.protocol="w-iframe-eventsource",a.i_constructor.apply(a,arguments)};U.prototype=new L,U.enabled=function(){return"EventSource"in b&&L.enabled()},U.need_body=!0,U.roundTrips=3;var V=O["w-iframe-eventsource"]=function(a,b){this.run(a,b,"/eventsource",_,c.XHRLocalObject)};V.prototype=new G;var W=y["iframe-xhr-polling"]=function(){var a=this;a.protocol="w-iframe-xhr-polling",a.i_constructor.apply(a,arguments)};W.prototype=new L,W.enabled=function(){return b.XMLHttpRequest&&L.enabled()},W.need_body=!0,W.roundTrips=3;var X=O["w-iframe-xhr-polling"]=function(a,b){this.run(a,b,"/xhr",bd,c.XHRLocalObject)};X.prototype=new G;var Y=y["iframe-htmlfile"]=function(){var a=this;a.protocol="w-iframe-htmlfile",a.i_constructor.apply(a,arguments)};Y.prototype=new L,Y.enabled=function(){return L.enabled()},Y.need_body=!0,Y.roundTrips=3;var Z=O["w-iframe-htmlfile"]=function(a,b){this.run(a,b,"/htmlfile",bc,c.XHRLocalObject)};Z.prototype=new G;var $=function(a,b,c,d){var e=this;e.ri=a,e.Receiver=b,e.recv_url=c,e.AjaxObject=d,e._scheduleRecv()};$.prototype._scheduleRecv=function(){var a=this,b=a.poll=new a.Receiver(a.recv_url,a.AjaxObject),c=0;b.onmessage=function(b){c+=1,a.ri._didMessage(b.data)},b.onclose=function(c){a.poll=b=b.onmessage=b.onclose=null,a.poll_is_closing||(c.reason==="permanent"?a.ri._didClose(1006,"Polling error ("+c.reason+")"):a._scheduleRecv())}},$.prototype.abort=function(){var a=this;a.poll_is_closing=!0,a.poll&&a.poll.abort()};var _=function(a){var b=this,d=new EventSource(a);d.onmessage=function(a){b.dispatchEvent(new e("message",{data:unescape(a.data)}))},b.es_close=d.onerror=function(a,f){var g=f?"user":d.readyState!==2?"network":"permanent";b.es_close=d.onmessage=d.onerror=null,d.close(),d=null,c.delay(200,function(){b.dispatchEvent(new e("close",{reason:g}))})}};_.prototype=new d,_.prototype.abort=function(){var a=this;a.es_close&&a.es_close({},!0)};var ba,bb=function(){if(ba===undefined)if("ActiveXObject"in b)try{ba=!!(new ActiveXObject("htmlfile"))}catch(a){}else ba=!1;return ba},bc=function(a){var d=this;c.polluteGlobalNamespace(),d.id="a"+c.random_string(6,26),a+=(a.indexOf("?")===-1?"?":"&")+"c="+escape(h+"."+d.id);var f=bb()?c.createHtmlfile:c.createIframe,g;b[h][d.id]={start:function(){g.loaded()},message:function(a){d.dispatchEvent(new e("message",{data:a}))},stop:function(){d.iframe_close({},"network")}},d.iframe_close=function(a,c){g.cleanup(),d.iframe_close=g=null,delete b[h][d.id],d.dispatchEvent(new e("close",{reason:c}))},g=f(a,function(a){d.iframe_close({},"permanent")})};bc.prototype=new d,bc.prototype.abort=function(){var a=this;a.iframe_close&&a.iframe_close({},"user")};var bd=function(a,b){var c=this,d=0;c.xo=new b("POST",a,null),c.xo.onchunk=function(a,b){if(a!==200)return;for(;;){var f=b.slice(d),g=f.indexOf("\n");if(g===-1)break;d+=g+1;var h=f.slice(0,g);c.dispatchEvent(new e("message",{data:h}))}},c.xo.onfinish=function(a,b){c.xo.onchunk(a,b),c.xo=null;var d=a===200?"network":"permanent";c.dispatchEvent(new e("close",{reason:d}))}};return bd.prototype=new d,bd.prototype.abort=function(){var a=this;a.xo&&(a.xo.close(),a.dispatchEvent(new e("close",{reason:"user"})),a.xo=null)},y.getUtils=function(){return c},y.getIframeTransport=function(){return L},y}(),"_sockjs_onload"in window&&setTimeout(_sockjs_onload,1),typeof define=="function"&&define.amd&&define("sockjs",[],function(){return SockJS})
;
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
		} catch(e) {
			return;
		}

		try {
			// If we can't parse the cookie, ignore it, it's unusable.
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write
		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));
;
/*
 *   Copyright (c) 2011-2015 The original author or authors
 *   ------------------------------------------------------
 *   All rights reserved. This program and the accompanying materials
 *   are made available under the terms of the Eclipse Public License v1.0
 *   and Apache License v2.0 which accompanies this distribution.
 *
 *       The Eclipse Public License is available at
 *       http://www.eclipse.org/legal/epl-v10.html
 *
 *       The Apache License v2.0 is available at
 *       http://www.opensource.org/licenses/apache2.0.php
 *
 *   You may elect to redistribute this code under either of these licenses.
 */
//DK: added custom MAX_CONNECTIONS_EXCEEDED failureType handler
!function (factory) {
  if (typeof require === 'function' && typeof module !== 'undefined') {
    // CommonJS loader
    var SockJS = require('sockjs-client');
    if(!SockJS) {
      throw new Error('vertx-eventbus.js requires sockjs-client, see http://sockjs.org');
    }
    factory(SockJS);
  } else if (typeof define === 'function' && define.amd) {
    // AMD loader
    define('vertx-eventbus', ['sockjs'], factory);
  } else {
    // plain old include
    if (typeof this.SockJS === 'undefined') {
      throw new Error('vertx-eventbus.js requires sockjs-client, see http://sockjs.org');
    }

    EventBus = factory(this.SockJS);
  }
}(function (SockJS) {

  function makeUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (a, b) {
      return b = Math.random() * 16, (a == 'y' ? b & 3 | 8 : b | 0).toString(16);
    });
  }

  function mergeHeaders(defaultHeaders, headers) {
    if (defaultHeaders) {
      if(!headers) {
        return defaultHeaders;
      }

      for (var headerName in defaultHeaders) {
        if (defaultHeaders.hasOwnProperty(headerName)) {
          // user can overwrite the default headers
          if (typeof headers[headerName] === 'undefined') {
            headers[headerName] = defaultHeaders[headerName];
          }
        }
      }
    }

    // headers are required to be a object
    return headers || {};
  }

  /**
   * EventBus
   *
   * @param url
   * @param options
   * @constructor
   */
  var EventBus = function (url, options) {
    var self = this;

    options = options || {};

    var pingInterval = options.vertxbus_ping_interval || 5000;
    var pingTimerID;

    // attributes
    this.sockJSConn = new SockJS(url, null, options);
    this.state = EventBus.CONNECTING;
    this.handlers = {};
    this.replyHandlers = {};
    this.defaultHeaders = null;

    this.errorListeners = [];
    
    // default event handlers
    this.onerror = function (err) {
      try {
        console.error(err);
      } catch (e) {
        // dev tools are disabled so we cannot use console on IE
      }
      
      for(var i = 0 ; i < self.errorListeners.length; i++) {
    	  self.errorListeners[i](err);
      }
      
    };

    var sendPing = function () {
      self.sockJSConn.send(JSON.stringify({type: 'ping'}));
    };

    this.sockJSConn.onopen = function () {
      // Send the first ping then send a ping every pingInterval milliseconds
      sendPing();
      pingTimerID = setInterval(sendPing, pingInterval);
      self.state = EventBus.OPEN;
      self.onopen && self.onopen();
    };

    this.sockJSConn.onclose = function () {
      self.state = EventBus.CLOSED;
      if (pingTimerID) clearInterval(pingTimerID);
      self.onclose && self.onclose();
    };

    this.sockJSConn.onmessage = function (e) {
      var json = JSON.parse(e.data);

      // define a reply function on the message itself
      if (json.replyAddress) {
        Object.defineProperty(json, 'reply', {
          value: function (message, headers, callback) {
            self.send(json.replyAddress, message, headers, callback);
          }
        });
      }

      if (self.handlers[json.address]) {
        // iterate all registered handlers
        var handlers = self.handlers[json.address];
        for (var i = 0; i < handlers.length; i++) {
          if (json.type === 'err') {
            handlers[i]({failureCode: json.failureCode, failureType: json.failureType, message: json.message});
          } else {
            handlers[i](null, json);
          }
        }
      } else if (self.replyHandlers[json.address]) {
        // Might be a reply message
        var handler = self.replyHandlers[json.address];
        delete self.replyHandlers[json.address];
        if (json.type === 'err') {
          handler({failureCode: json.failureCode, failureType: json.failureType, message: json.message});
        } else {
          handler(null, json);
        }
      } else {
        if (json.type === 'err') {
          self.onerror(json);
        } else {
          try {
            console.warn('No handler found for message: ', json);
          } catch (e) {
            // dev tools are disabled so we cannot use console on IE
          }
        }
      }
    }
  };
  
  EventBus.prototype.addErrorListener = function(listener) {
	  if( this.errorListeners.indexOf(listener) < 0 ) {
		  this.errorListeners.push(listener);
		  return true;
	  }
	  return false;
  };
  
  EventBus.prototype.removeErrorListener = function(listener) {
	  var index = this.errorListeners.indexOf(listener);
	  if(index < 0) return false;
	  this.errorListeners.splice(index, 1);
	  return true;
  };

  /**
   * Send a message
   *
   * @param {String} address
   * @param {Object} message
   * @param {Object} [headers]
   * @param {Function} [callback]
   */
  EventBus.prototype.send = function (address, message, headers, callback) {
    // are we ready?
    if (this.state != EventBus.OPEN) {
      throw new Error('INVALID_STATE_ERR');
    }

    if (typeof headers === 'function') {
      callback = headers;
      headers = {};
    }

    var envelope = {
      type: 'send',
      address: address,
      headers: mergeHeaders(this.defaultHeaders, headers),
      body: message
    };

    if (callback) {
      var replyAddress = makeUUID();
      envelope.replyAddress = replyAddress;
      this.replyHandlers[replyAddress] = callback;
    }

    this.sockJSConn.send(JSON.stringify(envelope));
  };

  /**
   * Publish a message
   *
   * @param {String} address
   * @param {Object} message
   * @param {Object} [headers]
   */
  EventBus.prototype.publish = function (address, message, headers) {
    // are we ready?
    if (this.state != EventBus.OPEN) {
      throw new Error('INVALID_STATE_ERR');
    }

    this.sockJSConn.send(JSON.stringify({
      type: 'publish',
      address: address,
      headers: mergeHeaders(this.defaultHeaders, headers),
      body: message
    }));
  };

  /**
   * Register a new handler
   *
   * @param {String} address
   * @param {Object} [headers]
   * @param {Function} callback
   */
  EventBus.prototype.registerHandler = function (address, headers, callback) {
    // are we ready?
    if (this.state != EventBus.OPEN) {
      throw new Error('INVALID_STATE_ERR');
    }

    if (typeof headers === 'function') {
      callback = headers;
      headers = {};
    }

    // ensure it is an array
    if (!this.handlers[address]) {
      this.handlers[address] = [];
      // First handler for this address so we should register the connection
      this.sockJSConn.send(JSON.stringify({
        type: 'register',
        address: address,
        headers: mergeHeaders(this.defaultHeaders, headers)
      }));
    }

    this.handlers[address].push(callback);
  };

  /**
   * Unregister a handler
   *
   * @param {String} address
   * @param {Object} [headers]
   * @param {Function} callback
   */
  EventBus.prototype.unregisterHandler = function (address, headers, callback) {
    // are we ready?
    if (this.state != EventBus.OPEN) {
      throw new Error('INVALID_STATE_ERR');
    }

    var handlers = this.handlers[address];

    if (handlers) {

      if (typeof headers === 'function') {
        callback = headers;
        headers = {};
      }

      var idx = handlers.indexOf(callback);
      if (idx != -1) {
        handlers.splice(idx, 1);
        if (handlers.length === 0) {
          // No more local handlers so we should unregister the connection
          this.sockJSConn.send(JSON.stringify({
            type: 'unregister',
            address: address,
            headers: mergeHeaders(this.defaultHeaders, headers)
          }));

          delete this.handlers[address];
        }
      }
    }
  };

  /**
   * Closes the connection to the EvenBus Bridge.
   */
  EventBus.prototype.close = function () {
    this.state = EventBus.CLOSING;
    this.sockJSConn.close();
  };

  EventBus.CONNECTING = 0;
  EventBus.OPEN = 1;
  EventBus.CLOSING = 2;
  EventBus.CLOSED = 3;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = EventBus;
    } else {
      exports.EventBus = EventBus;
    }
  } else {
    return EventBus;
  }
});;
/**
 * VitalService javascript interface
 * @param address - vitalservice eventbus address, 'vitalservice' in most cases
 * @param eventBusURL - if null then current window url protocol://host:port/eventbus will be used 
 * @param successCB
 * @param errorCB
 * @param options: 
 * 		{
 * 			logger: (default console), 
 * 			loggingEnabled: (default false),
 * 			disconnectOnWebsocketLimitExceeded: (default false),
 * 			websocketLimitExceededHandler: (default null)
 *		}
 * @returns
 */

/*
if(module) {
	
	var import1 = require(__dirname + '/vitalservice-json-0.2.304.js');
	
	vitaljs = import1.vitaljs;
	VitalServiceJson = import1.VitalServiceJson;
	
	var import2 = require(__dirname + '/vitalservice-impl-0.2.304.js');
	
	VitalServiceWebsocketImpl = import2.VitalServiceWebsocketImpl;
	UUIDGenerator = import2.UUIDGenerator;
	
}
*/

VitalService = function(address, eventbusURL, successCB, errorCB, options) {

	if(typeof(module) !== 'undefined') {
		
		if( typeof(tv4) === 'undefined' ) {

			VITAL_JSON_SCHEMAS = [];
			
			tv4 = require(__dirname + '/tv4.min.js');
		
			LRUCache = require(__dirname + '/lru.js').LRUCache;
			
			require(__dirname + '/vital-core-0.2.304.js')
			require(__dirname + '/vital-0.2.304.js')
			
			var fs = require('fs');
			
			var items = fs.readdirSync(__dirname + '/domains');
			
			for(var i = 0 ; i < items.length; i++) {
				var file = items[i];
				console.log("Loading domain file: " + file)
				require(__dirname + '/domains/' + file);
			}
			
//			require(__dirname + '/vital-nlp-0.2.304.js')
//			require(__dirname + '/vital-social-0.2.304.js')
//			require(__dirname + '/vital-aimp-0.1.0.js')
//			require(__dirname + '/haley-0.1.0.js')
//			require(__dirname + '/haley-shopping-0.1.0.js')
					
			var import1 = require(__dirname + '/vitalservice-json-0.2.304.js');
			
			vitaljs = import1.vitaljs;
			VitalServiceJson = import1.VitalServiceJson;
			
			var import2 = require(__dirname + '/vitalservice-impl-0.2.304.js');
			
			VitalServiceWebsocketImpl = import2.VitalServiceWebsocketImpl;
			UUIDGenerator = import2.UUIDGenerator;

		}
		
	}
	
	var _logger = console;
	
	var _loggingEnabled = false;
	
	var _disconnectOnWebsocketLimitExceeded = false;
	
	var _websocketLimitExceededHandler = null;
	
	if(options != null) {
		if(options.logger != null) {
			_logger = options.logger;
		}
		if(options.loggingEnabled != null) {
			_loggingEnabled = options.loggingEnabled;
		}
		if(options.disconnectOnWebsocketLimitExceeded != null) {
			_disconnectOnWebsocketLimitExceeded = options.disconnectOnWebsocketLimitExceeded;
		}
		if(options.websocketLimitExceededHandler != null) {
			_websocketLimitExceededHandler = options.websocketLimitExceededHandler;
		}
	}
	
	//default is console
	this.logger = _logger;
	
	//the vitalservice is initialized asynchronously
	this.impl = new VitalServiceWebsocketImpl(address, 'service', eventbusURL, successCB, errorCB, this.logger, _loggingEnabled);
	this.impl.disconnectOnWebsocketLimitExceeded = _disconnectOnWebsocketLimitExceeded;
	this.impl.websocketLimitExceededHandler = _websocketLimitExceededHandler;
	this.NO_TRANSACTION = null;
	
	
//	 * 			disconnectOnWebsocketLimitExceeded: (default false),
//	 * 			websocketLimitExceededHandler: (default null)
	
	this.impl.newConnection();
	
	
}

VitalService.JS_REGISTER_STREAM_HANDLER = 'js-register-stream-handler';

VitalService.JS_UNREGISTER_STREAM_HANDLER = 'js-unregister-stream-handler';

VitalService.JS_LIST_STREAM_HANDLERS = 'js-list-stream-handlers';


VitalService.VERTX_STREAM_SUBSCRIBE = 'vertx-stream-subscribe';

VitalService.VERTX_STREAM_UNSUBSCRIBE = 'vertx-stream-unsubscribe';



VitalService.prototype.setLogger = function(logger){
	if(logger == null) throw new Error("logger cannot be null"); 
	this.impl.logger = logger;
	this.logger = logger;
}

VitalService.prototype.getLogger = function() {
	return this.logger;
}

//non - api

/**
 * returns currently logged in user or null
 */
VitalService.prototype.getCurrentLogin = function() {
	return this.impl.login;
}

/**
 * returns current session ID or null if not authenticated
 */
VitalService.prototype.getSessionID = function() {
	return this.impl.appSessionID;
}

/**
 * Returns appSessionID from cookie or null
 */
VitalService.prototype.getAppSessionID = function() {
	return this.impl.getAppSessionID();
}


//bulkExport(VitalSegment, OutputStream)
//bulkImport(VitalSegment, InputStream)

/**
 * Destroy vitalservice session cookie
 */
VitalService.prototype.destroySessionCookie = function() {
	this.impl.destroySessionCookie();
}

/**
 * Sets auth session expired handler. 
 * Handler returning false prevent further processing.
 */
VitalService.prototype.setAuthSessionExpiredHandler = function(handler) {
	this.impl.authSessionExpiredHandler = handler;
}

VitalService.prototype.getAuthSessionExpiredHandler = function() {
	return this.impl.authSessionExpiredHandler;
}

//bulkExport(VitalSegment, OutputStream)
//bulkImport(VitalSegment, InputStream)

/**
 * Calls datascript with name and params
 * returns ResultList
 */
VitalService.prototype.callFunction = function(functionName, paramsMap, successCB, errorCB) {
	
	if(functionName == VitalService.JS_LIST_STREAM_HANDLERS) {
		
		//list handlers
		this.impl.listStreamHandlers(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalService.JS_REGISTER_STREAM_HANDLER) {
		
		this.impl.registerStreamHandler(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalService.JS_UNREGISTER_STREAM_HANDLER) {
		
		this.impl.unregisterStreamHandler(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalService.VERTX_STREAM_SUBSCRIBE) {
		
		this.impl.streamSubscribe(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalService.VERTX_STREAM_UNSUBSCRIBE) {
		
		this.impl.streamUnsubscribe(paramsMap, successCB, errorCB);
		return;
		
	}
	
//	public final static String VERTX_STREAM_SUBSCRIBE = 'vertx-stream-subscribe'
//		
//		public final static String VERTX_STREAM_UNSUBSCRIBE = 'vertx-stream-unsubscribe'
//		
//		public final static String VERTX_STREAM_LIST_SUBSCRIPTIONS = 'vertx-stream-list-subscriptions'
	
	
	this.impl.callMethod('callFunction', [functionName, paramsMap], successCB, errorCB);
}

//close() //vital status?
VitalService.prototype.close = function(successCB, errorCB) {
	this.impl.close(successCB, errorCB);
}

VitalService.prototype.commitTransaction = function(transaction, successCB, errorCB) {
	this.impl.callMethod('commitTransaction', [transaction], successCB, errorCB);
}

VitalService.prototype.createTransaction = function(successCB, errorCB) {
	this.impl.callMethod('createTransaction', [], successCB, errorCB);
}


/**
* Deletes a single URIProperty or List of URIProperty objects, arguments:
* URIPropertyOrList, successCB, errorCB
* VitalTransaction, URIPropertyOrList, successCB, errorCB
* 
*/
VitalService.prototype.delete_ = function() {
	
	var l = arguments.length;
	if(l < 3 || l > 4) {
		this.logger.error("Expected 3 or 4 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var URIPropertyOrList = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 4) {
		VitalTransaction = arguments[0];	
	}
	this.impl.callMethod('delete', [VitalTransaction, URIPropertyOrList], successCB, errorCB);
}


/**
* Deletes expanded single URIProperty or List of URIProperty objects, arguments:
* URIPropertyorList, successCB, errorCB (3 args)
* VitalTransaction, URIPropertyorList, successCB, errorCB (4 args)
* URIPropertyorList, vitalPathQueryString, successCB, errorCB (4 args)
* VitalTransaction, URIPropertyorList, vitalPathQueryString, successCB, errorCB (5 args)
*/
VitalService.prototype.deleteExpanded = function() {
	
	var l = arguments.length;
	if(l < 3 || l > 5) {
		this.logger.error("Expected 3 to 5 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var vitalPathQueryString = null;
	var URIPropertyorList = null;
	if(l == 5) {
		VitalTransaction = arguments[0];
		URIPropertyorList = arguments[1];
		vitalPathQueryString = arguments[2];
	} else if(l == 4) {
		//check type of a[1]
		if(typeof(arguments[1]) == 'string') {
			URIPropertyorList = arguments[0];
			vitalPathQueryString = arguments[1];
		} else {
			VitalTransaction = arguments[0];
			URIPropertyorList = arguments[1];
		}
	} else {
		URIPropertyorList = arguments[0];
	}
	
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];

	var params = [VitalTransaction, URIPropertyorList];
	if(vitalPathQueryString != null) {
		params.push(vitalPathQueryString);
	}

	this.impl.callMethod('deleteExpanded', params, successCB, errorCB);

}


/**
 * Deletes expanded a single graph object, arguments:
 * graphObject, successCB, errorCB
 * VitalTransaction, graphObject, successCB, errorCB
 */
VitalService.prototype.deleteExpandedObject = function() {
	var l = arguments.length;
	if(l < 3 || l > 4) {
		this.logger.error("Expected 3 or 4 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var graphObject = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 4) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteExpandedObject', [VitalTransaction, graphObject], successCB, errorCB);
}

/**
 * Deletes expanded a list of graph objects with vital path query string, arguments:
 * graphObject, vitalPathQueryString, successCB, errorCB
 * VitalTransaction, graphObject, vitalPathQueryString, successCB, errorCB
 * 
 */
VitalService.prototype.deleteExpandedObjects = function() {
	
	var l = arguments.length;
	if(l < 4 || l > 5) {
		this.logger.error("Expected 4 or 5 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var graphObject = arguments[l - 4];
	var vitalPathQueryString = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 5) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteExpandedObjects', [VitalTransaction, graphObject, vitalPathQueryString], successCB, errorCB);
}



//deleteFile(URIProperty, String)

/**
* Deletes a single graph object, arguments:
* graphObject, successCB, errorCB
* VitalTransaction, graphObject, successCB, errorCB
*/
VitalService.prototype.deleteObject = function() {
	
	var l = arguments.length;
	if(l < 3 || l > 4) {
		this.logger.error("Expected 3 or 4 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var graphObject = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 4) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteObject', [VitalTransaction, graphObject], successCB, errorCB);
}

/**
 * Deletes a list of graph objects, arguments:
 * graphObjectsList, successCB, errorCB
 * VitalTransaction, graphObjectsList, successCB, errorCB
 */
VitalService.prototype.deleteObjects = function() {
	
	var l = arguments.length;
	if(l < 3 || l > 4) {
		this.logger.error("Expected 3 or 4 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var graphObjectsList = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 4) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteObjects', [VitalTransaction, graphObjectsList], successCB, errorCB);
}


//doOperations(ServiceOperations)

//downloadFile(URIProperty, String, OutputStream, boolean)

//fileExists(URIProperty, String)



/**
 * Generates a new URI for given class (class object)
 * returns URIProperty
 */
VitalService.prototype.generateURI = function(classObject, successCB, errorCB) {
	this.impl.callMethod('generateURI', [classObject], successCB, errorCB);
}

/**
 * Gets a GraphObject or list, input is either URIProperty or list of URIProperty objects accordingly
 * Flag controls whether to cache object on the server side
 */
VitalService.prototype.get = function(URIPropertyOrList, doCache, successCB, errorCB) {
	//always service wide context!
	this.impl.callMethod('get', ['ServiceWide', URIPropertyOrList, doCache], successCB, errorCB);
}


/**
 * Gets current app
 * returns App
 */
VitalService.prototype.getApp = function(successCB, errorCB) {
	this.impl.callMethod('getApp', [], successCB, errorCB);
}

/**
 * returns string
 */
VitalService.prototype.getDefaultSegmentName = function(successCB, errorCB) {
	this.impl.callMethod('getDefaultSegmentName', [], successCB, errorCB);
}


/**
 * returns EndpointType
 */
VitalService.prototype.getEndpointType = function(successCB, errorCB) {
	this.impl.callMethod('getEndpointType', [], successCB, errorCB);
}

VitalService.prototype.getExpanded = function(URIProperty, doCache, successCB, errorCB) {
	this.impl.callMethod('getExpanded', [URIProperty, doCache], successCB, errorCB);
}

VitalService.prototype.getExpanded = function(URIProperty, VitalPathQueryString, doCache, successCB, errorCB) {
	this.impl.callMethod('getExpanded', [URIProperty, VitalPathQueryString, doCache], successCB, errorCB);
}

VitalService.prototype.getName = function(successCB, errorCB) {
	this.impl.callMethod('getName', [], successCB, errorCB);
}

VitalService.prototype.getOrganization = function(successCB, errorCB) {
	this.impl.callMethod('getOrganization', [], successCB, errorCB);
}

VitalService.prototype.getSegment = function(segmentID, successCB, errorCB) {
	this.impl.callMethid('getSegment', [segmentID], successCB, errorCB);
}

VitalService.prototype.getTransactions = function(successCB, errorCB) {
	this.impl.callMethod('getTransactions', [], successCB, errorCB);
}

/**
 * Inserts a new object (or objects list) into a segment, arguments:
 * vitalSegment, graphObjectOrList, successCB, error
 * VitalTransaction, vitalSegment, graphObjectOrList, successCB, errorCB
 */
VitalService.prototype.insert = function(VitalTransaction, vitalSegment, graphObjectOrList, successCB, errorCB) {
	
	var l = arguments.length;
	if(l < 4 || l > 5) {
		this.logger.error("Expected 4 or 5 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var vitalSegment = arguments[l - 4];
	var graphObjectOrList = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 5) {
		VitalTransaction = arguments[0];	
	}
	
//	this.impl.callMethod('deleteObjects', [VitalTransaction, app, graphObjectsList], successCB, errorCB);
	
	this.impl.callMethod('insert', [VitalTransaction, vitalSegment, graphObjectOrList], successCB, errorCB);
}


VitalService.prototype.listDatabaseConnections = function(successCB, errorCB) {
	this.impl.callMethod('listDatabaseConnections', [], successCB, errorCB);
}

//listFiles(String)

VitalService.prototype.listSegments = function(successCB, errorCB) {
	this.impl.callMethod('listSegments', [], successCB, errorCB);
}

VitalService.prototype.listSegmentsWithConfig = function(successCB, errorCB) {
	this.impl.callMethod('listSegmentsWithConfig', [], successCB, errorCB);
}

/**
 * Pings the service 
 * returns VitalStatus
 */
VitalService.prototype.ping = function(successCB, errorCB) {
	this.impl.callMethod('ping', [], successCB, errorCB);
}

//pipeline(Closure<?>)

/**
 * Queries the vitalservice
 */
VitalService.prototype.query = function(vitalQueryString, successCB, errorCB) {
	this.impl.callMethod('query', [vitalQueryString], successCB, errorCB);
}


/**
 * Special method for handling graph queries that embeds objects in GraphMatch results.
 * GRAPH { inlineObjects } value should be set to false to save resources
 */
VitalService.prototype.graphQuery = function(vitalGraphQueryString, successCB, errorCB) {
	
	var _this = this;
	
	this.impl.callMethod('query', [vitalGraphQueryString], function(results){
		
		var _resultsGetter = function(urisList, getSuccessCB, getErrorCB) {
			_this.get(urisList, false, getSuccessCB, getErrorCB);
		};
	
		_this.impl.processGraphQueryResults(results, _resultsGetter, successCB, errorCB);
		
	}, errorCB);
	
}

/**
 * Queries the vitalservice
 */
VitalService.prototype.queryLocal = function(vitalQueryString, successCB, errorCB) {
	this.impl.callMethod('queryLocal', [vitalQueryString], successCB, errorCB);
}

VitalService.prototype.rollbackTransaction = function(transaction, successCB, errorCB) {
	this.impl.callMethod('rollbackTransaction', [transaction], successCB, errorCB);
}


/**
 * Saves a graph object or objects list in default segment or specified segment, the params combinations are:
 * graphObjectOrList, successCB, errorCB (3 args)
 * transaction, graphObjectOrList, successCB, errorCB (4 args)
 * segment, graphObjectOrList, createIfNotExistsFlag, successCB, errorCB (5 args)
 * transaction, segment, graphObjectOrList, createIfNotExistsFlag, successCB, errorCB  (6 args) 
 * 
 */
VitalService.prototype.save = function() {
	
	var l = arguments.length; 
	
	if( l < 3 || l > 6) {
		this.logger.error("save method error, expected 3 to 6 arguments - see documentation");
		return;
	}
	
	var successCB = arguments[arguments.length - 2];
	var errorCB = arguments[arguments.length -1 ];
	
	if(l == 3 || l == 4) {
		
		var VitalTransaction  = l == 4 ? arguments[0] : null;
		var graphObjectOrList = l == 4 ? arguments[1] : arguments[0];
		
		this.impl.callMethod('save', [VitalTransaction, graphObjectOrList], successCB, errorCB);
		
	} else {
		
		var VitalTransaction  = l == 6 ? arguments[0] : null;
		var segment           = l == 6 ? arguments[1] : arguments[0];
		var graphObjectOrList = l == 6 ? arguments[2] : arguments[1];
		var createIfNotExists = l == 6 ? arguments[3] : arguments[2];
		
		this.impl.callMethod('save', [VitalTransaction, segment, graphObjectOrList, createIfNotExists], successCB, errorCB);
		
	}
	
}

VitalService.prototype.sendEvent = function(VITAL_Event, waitForDelivery, successCB, errorCB) {
	this.impl.callMethod('sendEvent', [VITAL_Event, waitForDelivery], successCB, errorCB);
}

VitalService.prototype.sendEvents = function(ListOfVITAL_Events, waitForDelivery, successCB, errorCB) {
	this.impl.callMethod('sendEvents', [ListOfVITAL_Events, waitForDelivery], successCB, errorCB);
}

VitalService.prototype.setDefaultSegmentName = function(defaultsegment, successCB, errorCB) {
	this.impl.callMethod('setDefaultSegmentName', [defaultsegment], successCB, errorCB);
}

//uploadFile(URIProperty, String, InputStream, boolean)

VitalService.prototype.validate = function(successCB, errorCB) {
	this.impl.callMethod('validate', [], successCB, errorCB);
}


/**
 * Returns the result list of all schemas available remotely
 * @returns array of DomainModel objects
 */
VitalService.prototype.getSchemaList = function(successCB, errorCB) {
	this.impl.getSchemaList(successCB, errorCB);
}

/**
 * Returns dependencies of a schema, parents or all ancestors based on recursive flag
 * @returns array of DomainModel objects
 */
VitalService.prototype.getDependenciesOfSchema = function(schemaName, recursive, successCB, errorCB) {
	this.impl.getDependenciesOfSchema(schemaName, recursive, successCB, errorCB);
}

/**
 * Returns an array of json schema objects, the original array is wrapped with {name:, URI:, schema: [] }, the order is preserved
 */
VitalService.prototype.getSchemas = function(schemaNamesArray, successCB, errorCB) {
	this.impl.getSchemas(schemaNamesArray, successCB, errorCB);
}

/**
 * Loads given schema objects ( {name:, URI:, schema: [] } in the given order
 */
VitalService.prototype.loadSchemas = function(jsonSchemasArray, successCB, errorCB) {
	this.impl.loadSchemas(jsonSchemasArray, successCB, errorCB);
}

/**
 * Purges currently loaded domain schemas
 */
VitalService.prototype.purgeSchemas = function(successCB, errorCB) {
	this.impl.purgeSchemas(successCB, errorCB);
}

/**
 * Returns locally loaded domains
 */
VitalService.prototype.getLocalSchemaList = function(successCB, errorCB) {
	this.impl.getLocalSchemaList(successCB, errorCB);
}

/**
 * Unloads schema
 */
VitalService.prototype.unloadSchema = function(schemaURI, successCB, errorCB) {
	this.impl.unloadSchema(schemaURI, successCB, errorCB);
}


if(typeof(module) !== 'undefined') {
	
	module.exports = VitalService;
	
};
/**
 * Set this property to redirect pages to maintenance page if vitalservice is unavailable
 */
var VITAL_SERVICE_UNAVAILABLE_URL = null;


/**
 * Set this callback to be notified when session expires
 * depending if returned value is true/false the default callback will be called afterwards
 */
var VITAL_SESSION_EXPIRED_CALLBACK = null;


/**
 * Set this callback to be notified of access to protected resource when no sessionid is given
 * depending if returned value is true/false the default callback will be called afterwards
 */
var VITAL_AUTHENTICATION_REQUIRED_CALLBACK = null;

/**
 * overridden cookie attributes
 */ 
var VITAL_COOKIE_ATTRS = {};

/**
 * use prefixed cookies if there are multiple apps with different logins hosted in same vital app 
 */
var VITAL_COOKIE_PREFIX = '';

//logging disabled by default, no longer in use!
var VITAL_LOGGING = false

/**
 * Websocket based implementation
 * @param address - vitalservice eventbus address, 'vitalservice' in most cases
 * @param eventBusURL - if null then current window url protocol://host:port/eventbus will be used 
 * @param successCB
 * @param errorCB
 * @returns
 */
VitalServiceWebsocketImpl = function(address, type, eventBusURL, successCB, errorCB, logger, loggingEnabled) {
	
	//default logger is console, but can be replaced with watson etc
	this.logger = logger != null ? logger : console;
	this.loggingEnabled = loggingEnabled != null ? loggingEnabled : VITAL_LOGGING;
	
	this.admin = false;
	this.superadmin = false;
	
	if(type == 'service') {
		
	} else if(type == 'admin') {
		this.admin = true;
	} else if(type == 'superadmin') {
		this.superadmin = true;
	} else {
		this.logger.error("Unhnown type: " + type);
		return
	}
	
	
	this.loginTypes = [
	  'http://vital.ai/ontology/vital#Login',
	  'http://vital.ai/ontology/vital#AdminLogin',
	  'http://vital.ai/ontology/vital#SuperAdminLogin'
	];
	
	//there's always a new session generated, it could be cached in localstorage/cookie etc
	this.sessionID = UUIDGenerator.generate();
	
	//obtained via authentication, appended to every request
	this.appSessionID  = null;
	
	this.login = null;
	
	if(this.loggingEnabled) { this.logger.info('sessionID: ' + this.sessionID); }

	this.address = address;
	
	//notified when reconnection event happens
	this.firstConnectionAttempt = true;
	this.reconnectHandler = null;
	
	//
	this.authAppID = null; 
	
	if(this.address.indexOf('endpoint.') == 0) {
		
		this.authAppID = this.address.substring('endpoint.'.length);
		
		this.COOKIE_SESSION_ID = VITAL_COOKIE_PREFIX + 'sessionID.' + this.authAppID;
		
		if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
			this.appSessionID = $.cookie(this.COOKIE_SESSION_ID);
		}
		
	} else {
		
		//no authentication enabled
		this.COOKIE_SESSION_ID = null;
	}
	
	
	this.vsJson = null;
	
	this.closed = false;
	
	//single use callbacks
	this.sH = successCB;
	this.eH = errorCB;
	
	if(eventBusURL != null) {
		this.url = eventBusURL
	} else {
		this.url = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/eventbus';
	}
	
	if(this.loggingEnabled) { this.logger.info("eventbus url", this.url); }
	
	this.windowKilled = false;
	
	this.recTimeout = null;
	
	
	this.eb = null;
	
	if(typeof( VitalServiceJson ) != 'undefined') {
		
		if(this.loggingEnabled) { this.logger.info("loading json validation module..."); }
		
		if(VitalServiceJson.SINGLETON != null) {
			
			if(this.loggingEnabled) { this.logger.info("json singleton already set - reusing"); }
			
		} else {
		
			if(this.loggingEnabled) { this.logger.info("Initializing new json singleton"); }
			
			VitalServiceJson.SINGLETON = new VitalServiceJson(this.logger, this.loggingEnabled);
			
		}
		
		this.vsJson = VitalServiceJson.SINGLETON;
		
		if(type == 'service') {
			
			vitaljs.vitalservice = this;
			
		}
		
	} else {
		
		this.logger.error("VitalServiceJson module not available, it's mandatory.");

		return;
	}
	

	this.registeredHandlers = {};

	this.currentHandlers = {};
	
	this.eventbusListenerActive = false;
	this.eventbusHandler = null;
	
	var _this = this;
	if(EventBus == null) {
		throw 'vertx.EventBus module not loaded!' 
	}
	
	if(typeof($) !== 'undefined') {
		$(window).bind('beforeunload', function(){
			_this.windowKilled = true;
		});
	}

	//handler notified when user is logged out
	this.authSessionExpiredHandler = null;

	//by default the client will keep reconnecting
	this.disconnectOnWebsocketLimitExceeded = false;
	//handler notified when no websocket connections are available
	this.websocketLimitExceededHandler = null;
	
}

VitalServiceWebsocketImpl.JS_REGISTER_STREAM_HANDLER = 'js-register-stream-handler';

VitalServiceWebsocketImpl.JS_UNREGISTER_STREAM_HANDLER = 'js-unregister-stream-handler';

VitalServiceWebsocketImpl.JS_LIST_STREAM_HANDLERS = 'js-list-stream-handlers';


VitalServiceWebsocketImpl.VERTX_STREAM_SUBSCRIBE = 'vertx-stream-subscribe';

VitalServiceWebsocketImpl.VERTX_STREAM_UNSUBSCRIBE = 'vertx-stream-unsubscribe';

VitalServiceWebsocketImpl.DomainsManagerScript = 'commons/scripts/DomainsManagerScript';

VitalServiceWebsocketImpl.vitalauth_login = 'vitalauth.login';

VitalServiceWebsocketImpl.vitalauth_logout = 'vitalauth.logout';

VitalServiceWebsocketImpl.vitalauth_authorise = 'vitalauth.authorise';

VitalServiceWebsocketImpl.prototype.getAppSessionID = function() {
	
	if(this.COOKIE_SESSION_ID == null) {
		return null;
	}
	
	//check if cookie exists
	if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
		this.appSessionID = $.cookie(this.COOKIE_SESSION_ID);
	}
	
	if(this.appSessionID == null) {
		
		
		if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
			$.removeCookie(this.COOKIE_SESSION_ID, VITAL_COOKIE_ATTRS);
			$.removeCookie(this.COOKIE_SESSION_ID);
		}
		
		this.appSessionID = null;
		this.login = null;
		
		
	}
	
	return this.appSessionID;
	
}

VitalServiceWebsocketImpl.prototype.newConnection = function() {
    

	if(this.recTimeout != null) {
		clearInterval(this.recTimeout);
		this.recTimeout = null;
	}
	
	var _this = this;
    var options = {};
    
    /*
    if(configService.protocols_whitelist != null && configService.protocols_whitelist.length > 0 ) {
    		
    		var s = ''
    			
    		configService.protocols_whitelist.splice(0, 2);
    			
    		for(var v = 0; v < configService.protocols_whitelist.length; v++) {
    			if(s.length > 0) s+= ', ';
    			s += configService.protocols_whitelist[v];
    		}
    		
    		
    		
    	options.protocols_whitelist = configService.protocols_whitelist;
    }
    */

    if(this.eb != null) {
    	
    	if(this.loggingEnabled) { this.logger.info("closing existing evenbus connection"); }
    	try {
    		this.eb.close();
    	} catch(e) {
    		this.logger.error('error when closing existing websocket', e);
    	}
    }
    
    this.eb = new EventBus(this.url, options);
    if(this.eb.addErrorListener != null) {
        this.eb.addErrorListener(function(error){
        	
        	_this.logger.error("Vertx eventbus error", error);
        	
        	if(error.failureType === "MAX_CONNECTIONS_EXCEEDED") {
        		
        		_this.logger.error('max active websocket connections limit has been exceeded');
        		
        		if(_this.disconnectOnWebsocketLimitExceeded) {
        			_this.logger.info("not retrying - marking client as closed");
        			_this.closed = true;
        		}

        		if(_this.websocketLimitExceededHandler != null) {
        			_this.websocketLimitExceededHandler();
        		}
        	}
        	
        });    	
    } else {
    	this.logger.warn("eventbus additional listeners not available");
    }

    this.eb.onopen = function() {

    	if(_this.recTimeout != null) {
    			
//   		clearTimeout(_this.recTimeout);
   			clearInterval(_this.recTimeout);
   			_this.recTimeout = null;
    			
   		}
    		
    	
    	var currentKeys = [];
    	
    	for ( var key in _this.currentHandlers ) {
    		currentKeys.push(key);
    	}
    	
    	if(currentKeys.length > 0) {
    		
    		if(_this.loggingEnabled) { _this.logger.info('refreshing session handlers: ', currentKeys); }
    		
    		var args = [VitalServiceWebsocketImpl.VERTX_STREAM_SUBSCRIBE, {streamNames: currentKeys, sessionID: _this.sessionID}];
    		if(_this.admin) {
    			//insert null app
    			args.splice(0, 0, null);
    		}
    		//re-register it ?
    		_this.callMethod('callFunction', args, function(successRL){
    			
    			if(true /*!_this.eventbusListenerActive*/) {
    				
    				_this.eventbusHandler = _this.createNewHandler();
    				_this.eb.registerHandler('stream.'+ _this.sessionID, _this.eventbusHandler);
    				_this.eventbusListenerActive = true;
    				
    			}
    			
    			
    		}, function(errorResponse){
    			_this.logger.error(errorResponse);
    		});
    			
    	}
    		
    		
    	if(_this.windowKilled) {
    		_this.logger.error("sockjstransport, opened - but window killed!");
    		return;
    	}
    		
    	if(_this.loggingEnabled) { _this.logger.info('sockjstransport, transport ready'); }
    		
    	if(_this.sH != null) {
    		
    		if(_this.appSessionID != null) {
    			
    			_this.initialSessionCheck();
    			
    		} else {
    			_this.sH();
    			_this.sH = null;
    			_this.eH = null;
    		}
    	}
    	
    	if(_this.firstConnectionAttempt) {
    		_this.firstConnectionAttempt = false;
    	} else {
    		if(_this.reconnectHandler != null) {
    			if(_this.loggingEnabled) { _this.logger.info("Notifying reconnect handler"); }
    			_this.reconnectHandler();
    		} else {
    			if(_this.loggingEnabled) { _this.logger.info("No reconnect handler to notify"); }
    		}
    	}
    		
    };
    	
    this.eb.onclose = function() {

    	if(_this.closed) {
    		if(_this.loggingEnabled) {
    			_this.logger.info("client already closed");
    		}
    		return;
    	}
    	
    	_this.logger.warn('sockjstransport, transport closed, ');

    	if(_this.recTimeout != null) {
    		clearInterval(_this.recTimeout);
    		_this.recTimeout = null;
    	}
    		
    	if(_this.eH != null) {
    		_this.eH('e');
    	}
    	_this.eH = null;
    		
    	if(_this.windowKilled) {
    		_this.logger.warn("window killed, don't show popup, or try to reconnect");
    		return
    	}
    	
    	_this.eventbusListenerActive = false;
    		
//   		_this.recTimeout = setTimeout(function () {
    	_this.recTimeout = setInterval(function () {
   			_this.newConnection();
   		}, 3000);
   		
    };
    	
}

VitalServiceWebsocketImpl.prototype.initialSessionCheck = function() {
	
	var _this = this;
	
	var args = [];
	
	
	if(this.admin) {
		args.push(null);
	}
	
	args.push(VitalServiceWebsocketImpl.vitalauth_authorise);
	
	args.push({sessionID: this.appSessionID});
	
	this.callMethod('callFunction', args, function(authResults){
		
		for(var i = 0 ; i < authResults.results.length; i++) {
			
			var g = authResults.results[i].graphObject;
			
			if(_this.loginTypes.indexOf(g.type) >= 0) {
				_this.login = g;
			}
			
		}
		
		_this.sH();
		_this.eH = null;
		_this.sH = null;		
		
	}, function(errorMsg){
		
		_this.logger.warn(errorMsg);
		
		if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
			$.removeCookie(_this.COOKIE_SESSION_ID, VITAL_COOKIE_ATTRS);
			$.removeCookie(_this.COOKIE_SESSION_ID);
		}
		_this.appSessionID = null;
		_this.login = null;
		
		_this.sH();
		_this.eH = null;
		_this.sH = null;
		
		
	});
	
}

VitalServiceWebsocketImpl.prototype.loadDynamicOntologies = function(successCB, errorCB) {
	
	var _this = this;
	
	this.callMethod('callFunction', ['commons/scripts/DomainsManagerScript', {action: 'listJsonSchemas'}], function(domainsRL){

		if(_this.loggingEnabled) { _this.logger.info("domainsRL: ", domainsRL); }
		
		_this.vsJson.reloadOntologies(domainsRL);
		
		successCB(domainsRL);
		
	}, errorCB);
	
}
	
	
/**
 * Calls the service method, all input parameters are validated against json schema - same 
 */
VitalServiceWebsocketImpl.prototype.callMethod = function(method, args, successCB, errorCB) {
	
	if(this.loggingEnabled) { this.logger.debug("service call " + method + " args:", args); }
	
	if(typeof(successCB) != "function") {
		this.logger.error("method: " + method + " - Success callback not a function, arguments list invalid");
		return;
	}
	
	if(typeof(errorCB) != "function") {
		this.logger.error("method: " + method + " - Error callback not a function, arguments list invalid");
		return;
	}
	
	var data = {
		method: method,
		args: args,
		sessionID: this.appSessionID
	};
	
	var _this = this;
	
	var __ignoreJsonValidationErrors = false; 
	
	
	var functionName = null;
	
	if(method == 'callFunction') {
		
		//determine the functionName based on params count
		if(args.length >= 2) {
			functionName = args[args.length - 2];
			
			var params = args[args.length - 1];
			
			__ignoreJsonValidationErrors = params && params.__ignoreJsonValidationErrors == true;
			
			//set the sessionID param
			if(functionName == VitalServiceWebsocketImpl.vitalauth_logout) {
				params.sessionID = this.appSessionID;
			}
			
		} else {
			this.logger.error("method : " + method + " requires at least two arguments");
			return
		}
		
		
	}
	
	
	try {
	
	this.eb.send(this.address, data, function(err, result) {
		
		if(err != null) {
			
			_this.logger.error("ERROR:", err);
			
			if(typeof(err) === 'object' && err.message != null) {
				err = err.message;
			}
			
			result = { status: 'error', message: err };
			
		} else {
			
			//unpack result object
			result = result.body
			
		}
		
		if(result == null) {
			result = { status: 'error', message: 'request timed out' };
		}
		
		if(_this.loggingEnabled) { _this.logger.debug(method + ' result: ', result); }
		
		
		//check the status, then object
		
		if(result.status == 'ok') {
			
			//validate response
			
			var response = result.response;
			
			if(response != null) {
				
				//check response type
				if(_this.vsJson != null) {
					var validationError = _this.vsJson.validateResponse(response);
					
					if(validationError != null) {
						if(!__ignoreJsonValidationErrors) {
							errorCB(validationError);
							return;
						} else {
							_this.logger.warn("json schema validation error ignored - ", validationError);
						}
						
					}
					
				} else {
					
					errorCB("No VitalServiceJson module loaded - it's mandatory.");
					return;
					
				}
				
				
				//sessionID filter - get the session from positive authentication
				if(functionName == VitalServiceWebsocketImpl.vitalauth_login && _this.COOKIE_SESSION_ID != null) {
					for(var i = 0 ; i < response.results.length; i++) {
						var g = response.results[i].graphObject;
						if(g.type == 'http://vital.ai/ontology/vital#UserSession') {
							_this.appSessionID = g.get('sessionID');
							if(_this.loggingEnabled) { _this.logger.info('new auth session: ', g.get('sessionID')); }
							//store it in cookie
							var attrs = {expires: 7};
							_this.extend(attrs, VITAL_COOKIE_ATTRS);
							if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
								$.cookie(_this.COOKIE_SESSION_ID, g.get('sessionID'), attrs);
							}
						} else if(_this.loginTypes.indexOf(g.type) >= 0) {
							_this.login = g;
						}
					}
					
				}
				
				if(functionName == VitalServiceWebsocketImpl.vitalauth_logout && _this.COOKIE_SESSION_ID != null) {
					
					_this.appSessionID = null
					_this.login = null;
					if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
						$.removeCookie(_this.COOKIE_SESSION_ID, VITAL_COOKIE_ATTRS);
						$.removeCookie(_this.COOKIE_SESSION_ID);
					}
					if(_this.loggingEnabled) { _this.logger.info("session cookie removed"); }
					
				}
				
			}
			
			successCB(result.response);
			
		} else {
			
			
			if(functionName == VitalServiceWebsocketImpl.vitalauth_logout && _this.COOKIE_SESSION_ID != null) {
				//no matter what, always remove the cookie and notify callback
				if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
					$.removeCookie(_this.COOKIE_SESSION_ID, VITAL_COOKIE_ATTRS);
					$.removeCookie(_this.COOKIE_SESSION_ID);
				}
				_this.login = null;
				_this.appSessionID = null;
			}
			
			if(result.message != null && typeof(result.message.indexOf) === 'function') {
				
				if( result.message.indexOf('java.net.ConnectException') >= 0 && VITAL_SERVICE_UNAVAILABLE_URL != null ) {
					
					window.location.href = VITAL_SERVICE_UNAVAILABLE_URL;
					return;
					
				}
				
			}
			
			var callErrorCB = true;
			
			//this is thrown when session expired / not found
			if(result.status == 'error_denied') {

				if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
					$.removeCookie(_this.COOKIE_SESSION_ID, VITAL_COOKIE_ATTRS);
					$.removeCookie(_this.COOKIE_SESSION_ID);
				}
				_this.appSessionID = null;
				_this.login = null;
				
				if(_this.authSessionExpiredHandler != null) {
					
					callErrorCB = _this.authSessionExpiredHandler(result.message);
					
				} else if( VITAL_SESSION_EXPIRED_CALLBACK != null) {
				
					callErrorCB = VITAL_SESSION_EXPIRED_CALLBACK(result.message);
				}
				
			} else if(result.status == 'error_authentication_required') {
				
				//this happens when no session / user is set and protected endpoint is called
				if( VITAL_AUTHENTICATION_REQUIRED_CALLBACK != null ) {
					callErrorCB = VITAL_AUTHENTICATION_REQUIRED_CALLBACK(result.message);
				}
				
			}
			
			if(callErrorCB == true) {
				errorCB(result.message)
			}
			
			
		}
		
	});
	
	
	} catch(e) {
		
		_this.logger.error(e);
		
		errorCB('' + e);
		
	}
}

VitalServiceWebsocketImpl.prototype.close = function(successCB, errorCB){
	
	var _this = this;
	
	this.closed = true;
	if(this.eb != null) {
		try {
			this.eb.close()
		} catch(e) {
			_this.logger.error(e);
		}
		this.eb = null;
	}
	
	if(successCB != null) {
		successCB();
	}
	
	
}

VitalServiceWebsocketImpl.prototype.listStreamHandlers = function(paramsMap, successCB, errorCB) {
	
	var results = [];
	
	for(var key in this.registeredHandlers) {
		
		var g = {
			URI: 'handler:' + key,
			type: 'http://vital.ai/ontology/vital-core#VITAL_Node',
			"http://vital.ai/ontology/vital-core#isActive": this.currentHandlers[key] != null,
			"http://vital.ai/ontology/vital-core#hasName": key
		};
		
		results.push({
			_type: 'ai.vital.vitalservice.query.ResultElement',
			score: 1.0,
			graphObject: g
		});
		
	}
	
	
	var res = {
		_type: 'ai.vital.vitalservice.query.ResultList',
		results: results
	};
	
	var errorMsg = this.vsJson.validateResponse(res);
	
	if(errorMsg != null) {
		errorCB(errorMsg);
		return;
	}
	
	successCB(res);
	
	
}

VitalServiceWebsocketImpl.prototype.registerStreamHandler = function(paramsMap, successCB, errorCB) {
	
	var streamName = paramsMap.streamName;
	
	var handlerFunction = paramsMap.handlerFunction;
	
	if(streamName == null) {
		errorCB("No 'streamName' param");
		return;
	}
	
	if(handlerFunction == null) {
		errorCB("No 'handlerFunction' param");
		return;
	}
	
	if( typeof(handlerFunction) != 'function') {
		errorCB("handlerFunction must be a function");
		return;
	}
	
	
	if( this.registeredHandlers[streamName] != null ) {
		errorCB("Handler for stream " + streamName + " already registered.");
		return;
	}
	
	this.registeredHandlers[streamName] = handlerFunction;
	
	successCB({
		_type: 'ai.vital.vitalservice.query.ResultList',
		status: {
			_type: 'ai.vital.vitalservice.VitalStatus',
			status: 'ok',
			message: 'Handler for stream ' + streamName + ' registered successfully'
		}
	});
	
}



VitalServiceWebsocketImpl.prototype.unregisterStreamHandler = function(paramsMap, successCB, errorCB) {
	
	var streamName = paramsMap.streamName;
	if(streamName == null) {
		errorCB("No 'streamName' param");
		return;
	}
	
	var currentHandler = this.registeredHandlers[streamName];
	
	if(currentHandler == null) {
		errorCB("No handler for stream " + streamName + " registered");
		return;
	}
	
	if(this.currentHandlers[streamName] != null) {
		errorCB("Handler in use " + streamName);
		return;
	}
	
	
	delete this.registeredHandlers[streamName];
	
	successCB({
		_type: 'ai.vital.vitalservice.query.ResultList',
		status: {
			_type: 'ai.vital.vitalservice.VitalStatus',
			status: 'ok',
			message: 'Handler for stream ' + streamName + ' unregistered successfully'
		}
	});
	
}

VitalServiceWebsocketImpl.prototype.streamSubscribe = function(paramsMap, successCB, errorCB) {
	
	//first check if we are able to
	
	var streamName = paramsMap.streamName;
	if(streamName == null) {
		errorCB("No 'streamName' param");
		return;
	}
	
	var currentHandler = this.registeredHandlers[streamName];
	
	if(currentHandler == null) {
		errorCB("No handler for stream " + streamName + " registered");
		return;
	}
	
	var activeHandler = this.currentHandlers[streamName]
	
	if(activeHandler != null) {
		errorCB("Handler for stream " + streamName + " already subscribed");
		return;
	}
	
	var args = [VitalServiceWebsocketImpl.VERTX_STREAM_SUBSCRIBE, {streamNames: [streamName], sessionID: this.sessionID}];
	
	if(this.admin) {
		//insert null app
		args.splice(0, 0, null);
	}
	
	
	//first call the server side, on success register
	
	var _this = this;
	
	this.callMethod('callFunction', args, function(successRL){
		
		if(!_this.eventbusListenerActive) {
			
			_this.eventbusHandler = _this.createNewHandler();
			_this.eb.registerHandler('stream.'+ _this.sessionID, _this.eventbusHandler);
			_this.eventbusListenerActive = true;
		}
		
		
		_this.currentHandlers[streamName] = currentHandler;
		
		successCB({
			_type: 'ai.vital.vitalservice.query.ResultList',
			status: {
				_type: 'ai.vital.vitalservice.VitalStatus',
				status: 'ok',
				message: 'Successfully Subscribe to stream ' + streamName
			}
		});
		
	}, function(errorResponse){
		errorCB(errorResponse);
	});
	
	
}


Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

VitalServiceWebsocketImpl.prototype.streamUnsubscribe = function(paramsMap, successCB, errorCB) {

	var streamName = paramsMap.streamName;
	if(streamName == null) {
		errorCB("No 'streamName' param");
		return;
	}
	
	var activeHandler = this.currentHandlers[streamName]
	
	if( activeHandler == null ) {
		errorCB("No handler subscribed to stream " + streamName);
		return;
	}
	
	var _this = this;
	
	var args = [VitalServiceWebsocketImpl.VERTX_STREAM_UNSUBSCRIBE, {streamNames: [streamName], sessionID: this.sessionID}];
	
	if(this.admin) {
		//insert null app
		args.splice(0, 0, null);
	}
	
	this.callMethod('callFunction', args, function(successRL){
		
		delete _this.currentHandlers[streamName];

		if(Object.size( _this.currentHandlers) < 1) {
			_this.eb.unregisterHandler('stream.'+ _this.sessionID, _this.eventbusHandler);
			_this.eventbusListenerActive = false;
		}
		
		successCB({
			_type: 'ai.vital.vitalservice.query.ResultList',
			status: {
				_type: 'ai.vital.vitalservice.VitalStatus',
				status: 'ok',
				message: 'Successfully unsubscribe from stream ' + streamName
			}
		});
		
	}, function(errorResponse){
		errorCB(errorResponse);
	});
	
}


VitalServiceWebsocketImpl.prototype.createNewHandler = function() {
	
	var _this = this;
	
	var wrapperHandler = function(err, json) {
		
		if(err) {
			_this.logger.error("ERROR:", err);
			return;
		}
		
		json = json.body;
		
		if(json._type != 'ai.vital.vitalservice.query.ResultList' ) {
			_this.logger.error("only ai.vital.vitalservice.query.ResultList type messages accepted");
			return
		}
		
		var stream = json.streamName;
		
		if(stream == null) {
			_this.logger.error('No streamName property in json message');
			return;
		}
		
		
		var handlerFunction = _this.currentHandlers[stream];
		
		if(handlerFunction == null) {
			_this.logger.warn("Received a message for nonexisting stream handler: " + stream)
			return;
		}
		
		//check response type
		if(_this.vsJson != null) {
			var validationError = _this.vsJson.validateResponse(json);
				
			if(validationError != null) {
				_this.logger.error("Async message json validation failed: ", validationError);
				return;
			}
			
			handlerFunction(json);
				
		} else {
				
			_this.logger.error("No VitalServiceJson module loaded - cannot parse async message.");
			return;
				
		}
			
	};
	
	return wrapperHandler;
	
}


/*
 * Returns the result list of all schemas available remotely
 * @returns array of DomainModel objects
 */
VitalServiceWebsocketImpl.prototype.getSchemaList = function(successCB, errorCB) {

	var _this = this;
	
	this.callMethod('callFunction', [VitalServiceWebsocketImpl.DomainsManagerScript, {action: 'listJsonSchemas'}], function(domainsRL){
	
		if(_this.loggingEnabled) { _this.logger.info("remote domains list", domainsRL); }
		
		var r = [];
		
		for(var i = 0 ; i < domainsRL.results.length; i++) {
			var g = domainsRL.results[i].graphObject;
			r.push(g);
		}
		
		successCB(r);
		
	}, errorCB);
	
}


/*
 * Returns dependencies of a schema, parents or all ancestors based on recursive flag
 * @returns array of DomainModel objects
 */
VitalServiceWebsocketImpl.prototype.getDependenciesOfSchema = function(schemaName, recursive, successCB, errorCB) {
	
	var _this = this;
	
	this.callMethod('callFunction', [VitalServiceWebsocketImpl.DomainsManagerScript, {action: 'getDependenciesOfSchema', schemaName: schemaName, recursive: recursive}], function(domainsRL){
		
		if(_this.loggingEnabled) { _this.logger.info("schema dependencies list", domainsRL); }
		
		var r = [];
		
		for(var i = 0 ; i < domainsRL.results.length; i++) {
			var g = domainsRL.results[i].graphObject;
			r.push(g);
		}
		
		successCB(r);
		
	}, errorCB);
}

/*
 * Returns an array of json schema objects, the original array is wrapped with {name:, URI:, schema: [] }, the order is preserved
 */
VitalServiceWebsocketImpl.prototype.getSchemas = function(schemaNamesArray, successCB, errorCB) {
	
	this.getNextSchema(schemaNamesArray, 0, [], successCB, errorCB);
	
}

VitalServiceWebsocketImpl.prototype.getNextSchema = function(schemaNamesArray, index, output, successCB, errorCB) {

	if(index >= schemaNamesArray.length) {
		var parsedOutput = [];
		for(var i = 0; i < output.length; i++) {
			var c = output[i];
			var schemaArray = JSON.parse(c);
//			var name = schemaNamesArray[i];
//			var uri = this.vsJson.getSchemaURI(schemaArray);
			parsedOutput.push(schemaArray);
			
		}
		successCB(parsedOutput);
		return
	}
	
	this.getNextSchemaPart(schemaNamesArray, index, output, 1, successCB, errorCB);
	
}


VitalServiceWebsocketImpl.prototype.getNextSchemaPart = function(schemaNamesArray, index, output, part, successCB, errorCB) {

	var _this = this;
	
	this.callMethod('callFunction', [VitalServiceWebsocketImpl.DomainsManagerScript, {action: 'getJsonSchema', schemaName: schemaNamesArray[index], part: part, size: 6000}], function(partRL){
		
		var content = partRL.results[0].graphObject.get('name');
		
		if(part == 1) {
			output.push(content);
		} else {
			output[output.length-1] = output[output.length-1] + content;
		}
		
		if(part >= partRL.totalResults) {
			//no more parts
			_this.getNextSchema(schemaNamesArray, index + 1, output, successCB, errorCB);
		} else {
			_this.getNextSchemaPart(schemaNamesArray, index, output, part + 1, successCB, errorCB);
		}
		
	}, errorCB);
	
}


/*
 * Loads given schema objects ( {name:, URI:, schema: [] } in the given order
 */
VitalServiceWebsocketImpl.prototype.loadSchemas = function(jsonSchemasArray, successCB, errorCB) {
	try {
		this.vsJson.loadSchemas(jsonSchemasArray);
		successCB();
	} catch(e) {
		errorCB(e);
	}
}


/*
 * Purges currently loaded schemas
 */
VitalServiceWebsocketImpl.prototype.purgeSchemas = function(successCB, errorCB) {

	try {
		this.vsJson.purgeSchemas();
		successCB();
	} catch(e) {
		errorCB(e);
	}
	
}

/*
 * Returns locally loaded domains
 */
VitalServiceWebsocketImpl.prototype.getLocalSchemaList = function(successCB, errorCB) {
	try {
		successCB(this.vsJson.getLocalSchemaList());
	} catch(e) {
		errorCB(e);
	}
}


/*
 * Unloads schema with given URI, a simple validation is performed to check
 */
VitalServiceWebsocketImpl.prototype.unloadSchema = function(schemaURI, successCB, errorCB) {
	
	var _this = this;
	
	try {
		this.vsJson.unloadSchema(schemaURI);
		successCB();
	} catch(e) {
		_this.logger.error(e);
		errorCB(e);
	}
}


VitalServiceWebsocketImpl.prototype.processGraphQueryResults = function(results, _resultsGetter, successCB, errorCB) {
	
	var urisSet = [];
	var urisToGet = [];
	
	//process results
	for(var i = 0 ; i < results.results.length; i++) {
		
		var g = results.results[i].graphObject;
		
		if(g.type != 'http://vital.ai/ontology/vital-core#GraphMatch') {
			errorCB('query_error expected GraphMatch objects only, found: ' + g.type);
			return;
		}
		
		for(var p in g) {
			
			if(!g.hasOwnProperty(p)) continue;
			
			var v = g[p];
			
			if(typeof(v) == 'object') {
				
				if(v._type == 'ai.vital.vitalsigns.model.property.URIProperty') {
					var uri = v.value;
					if(uri != null && urisSet.indexOf(uri) < 0) {
						urisSet.push(uri);
						urisToGet.push(v);
					}
				}
				
			}
			
		}
		
	}
	
	if(urisToGet.length == 0) {
		successCB(results);
		return;
	}
	
	_resultsGetter(urisToGet, function(getResults){

		var resMap = {};
		
		for(var i = 0; i < getResults.results.length; i++) {
			
			var g = getResults.results[i].graphObject;
		
			resMap[g.URI] = g;
			
		}
		
		//augment the graphmatch instances now
		for(var i = 0 ; i < results.results.length; i++) {
			
			var g = results.results[i].graphObject;
			
			var thisURIs = [];
			
			for(var p in g) {
				
				if(!g.hasOwnProperty(p)) continue;
				
				var v = g[p];
				
				if(typeof(v) == 'object') {
					
					if(v._type == 'ai.vital.vitalsigns.model.property.URIProperty') {
						var uri = v.value;
						if(thisURIs.indexOf(uri) < 0) {
							thisURIs.push(uri);
						}
					}
					
				}
				
			}
			
			for( var u = 0 ; u < thisURIs.length; u++ ) {
				
				var uri = thisURIs[u];
				
				var x = resMap[uri];
				
				g[uri] = x;
			}
			
		}

		successCB(results);
		
	}, function(getError){
		
		errorCB("query_error Query succeeded but there was an error when getting graph match results: " + getError);
		
	});
	
}

VitalServiceWebsocketImpl.prototype.destroySessionCookie = function(){
	
	if(this.COOKIE_SESSION_ID != null && typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
		$.removeCookie(this.COOKIE_SESSION_ID, VITAL_COOKIE_ATTRS);
		$.removeCookie(this.COOKIE_SESSION_ID);
	}
	
}

//substitute for jquery.extend, source: http://stackoverflow.com/a/11197343
VitalServiceWebsocketImpl.prototype.extend = function extend(a, b){
    for(var key in b)
        if(b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}


UUIDGenerator = {};

UUIDGenerator.generate = function() {
	
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});
	
}


if(typeof(module) !== 'undefined') {

	//SockJS = require(__dirname + '/sockjs-0.3.4.min.js');
	
	EventBus = require(__dirname + '/vertx-eventbus-3.2.1.js');
	
	module.exports = {
		UUIDGenerator: UUIDGenerator,
		VitalServiceWebsocketImpl: VitalServiceWebsocketImpl
	};
	
};
!function(a,b){"function"==typeof define&&define.amd?define([],b):"undefined"!=typeof module&&module.exports?module.exports=b():a.tv4=b()}(this,function(){function a(a){return encodeURI(a).replace(/%25[0-9][0-9]/g,function(a){return"%"+a.substring(3)})}function b(b){var c="";l[b.charAt(0)]&&(c=b.charAt(0),b=b.substring(1));var d="",e="",f=!0,g=!1,h=!1;"+"===c?f=!1:"."===c?(e=".",d="."):"/"===c?(e="/",d="/"):"#"===c?(e="#",f=!1):";"===c?(e=";",d=";",g=!0,h=!0):"?"===c?(e="?",d="&",g=!0):"&"===c&&(e="&",d="&",g=!0);for(var i=[],j=b.split(","),k=[],n={},o=0;o<j.length;o++){var p=j[o],q=null;if(-1!==p.indexOf(":")){var r=p.split(":");p=r[0],q=parseInt(r[1],10)}for(var s={};m[p.charAt(p.length-1)];)s[p.charAt(p.length-1)]=!0,p=p.substring(0,p.length-1);var t={truncate:q,name:p,suffices:s};k.push(t),n[p]=t,i.push(p)}var u=function(b){for(var c="",i=0,j=0;j<k.length;j++){var l=k[j],m=b(l.name);if(null===m||void 0===m||Array.isArray(m)&&0===m.length||"object"==typeof m&&0===Object.keys(m).length)i++;else if(c+=j===i?e:d||",",Array.isArray(m)){g&&(c+=l.name+"=");for(var n=0;n<m.length;n++)n>0&&(c+=l.suffices["*"]?d||",":",",l.suffices["*"]&&g&&(c+=l.name+"=")),c+=f?encodeURIComponent(m[n]).replace(/!/g,"%21"):a(m[n])}else if("object"==typeof m){g&&!l.suffices["*"]&&(c+=l.name+"=");var o=!0;for(var p in m)o||(c+=l.suffices["*"]?d||",":","),o=!1,c+=f?encodeURIComponent(p).replace(/!/g,"%21"):a(p),c+=l.suffices["*"]?"=":",",c+=f?encodeURIComponent(m[p]).replace(/!/g,"%21"):a(m[p])}else g&&(c+=l.name,h&&""===m||(c+="=")),null!=l.truncate&&(m=m.substring(0,l.truncate)),c+=f?encodeURIComponent(m).replace(/!/g,"%21"):a(m)}return c};return u.varNames=i,{prefix:e,substitution:u}}function c(a){if(!(this instanceof c))return new c(a);for(var d=a.split("{"),e=[d.shift()],f=[],g=[],h=[];d.length>0;){var i=d.shift(),j=i.split("}")[0],k=i.substring(j.length+1),l=b(j);g.push(l.substitution),f.push(l.prefix),e.push(k),h=h.concat(l.substitution.varNames)}this.fill=function(a){for(var b=e[0],c=0;c<g.length;c++){var d=g[c];b+=d(a),b+=e[c+1]}return b},this.varNames=h,this.template=a}function d(a,b){if(a===b)return!0;if("object"==typeof a&&"object"==typeof b){if(Array.isArray(a)!==Array.isArray(b))return!1;if(Array.isArray(a)){if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(!d(a[c],b[c]))return!1}else{var e;for(e in a)if(void 0===b[e]&&void 0!==a[e])return!1;for(e in b)if(void 0===a[e]&&void 0!==b[e])return!1;for(e in a)if(!d(a[e],b[e]))return!1}return!0}return!1}function e(a){var b=String(a).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return b?{href:b[0]||"",protocol:b[1]||"",authority:b[2]||"",host:b[3]||"",hostname:b[4]||"",port:b[5]||"",pathname:b[6]||"",search:b[7]||"",hash:b[8]||""}:null}function f(a,b){function c(a){var b=[];return a.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(a){"/.."===a?b.pop():b.push(a)}),b.join("").replace(/^\//,"/"===a.charAt(0)?"/":"")}return b=e(b||""),a=e(a||""),b&&a?(b.protocol||a.protocol)+(b.protocol||b.authority?b.authority:a.authority)+c(b.protocol||b.authority||"/"===b.pathname.charAt(0)?b.pathname:b.pathname?(a.authority&&!a.pathname?"/":"")+a.pathname.slice(0,a.pathname.lastIndexOf("/")+1)+b.pathname:a.pathname)+(b.protocol||b.authority||b.pathname?b.search:b.search||a.search)+b.hash:null}function g(a){return a.split("#")[0]}function h(a,b){if(a&&"object"==typeof a)if(void 0===b?b=a.id:"string"==typeof a.id&&(b=f(b,a.id),a.id=b),Array.isArray(a))for(var c=0;c<a.length;c++)h(a[c],b);else{"string"==typeof a.$ref&&(a.$ref=f(b,a.$ref));for(var d in a)"enum"!==d&&h(a[d],b)}}function i(a,b,c,d,e,f){if(Error.call(this),void 0===a)throw new Error("No code supplied for error: "+b);this.message=b,this.params=c,this.code=a,this.dataPath=d||"",this.schemaPath=e||"",this.subErrors=f||null;var g=new Error(this.message);if(this.stack=g.stack||g.stacktrace,!this.stack)try{throw g}catch(g){this.stack=g.stack||g.stacktrace}}function j(a,b){if(b.substring(0,a.length)===a){var c=b.substring(a.length);if(b.length>0&&"/"===b.charAt(a.length-1)||"#"===c.charAt(0)||"?"===c.charAt(0))return!0}return!1}function k(a){var b=new n,c=a||"en",d={addFormat:function(){b.addFormat.apply(b,arguments)},language:function(a){return a?(s[a]||(a=a.split("-")[0]),s[a]?(c=a,a):!1):c},addLanguage:function(a,b){var c;for(c in o)b[c]&&!b[o[c]]&&(b[o[c]]=b[c]);var d=a.split("-")[0];if(s[d]){s[a]=Object.create(s[d]);for(c in b)"undefined"==typeof s[d][c]&&(s[d][c]=b[c]),s[a][c]=b[c]}else s[a]=b,s[d]=b;return this},freshApi:function(a){var b=k();return a&&b.language(a),b},validate:function(a,d,e,f){var g=new n(b,!1,s[c],e,f);"string"==typeof d&&(d={$ref:d}),g.addSchema("",d);var h=g.validateAll(a,d,null,null,"");return!h&&f&&(h=g.banUnknownProperties()),this.error=h,this.missing=g.missing,this.valid=null===h,this.valid},validateResult:function(){var a={};return this.validate.apply(a,arguments),a},validateMultiple:function(a,d,e,f){var g=new n(b,!0,s[c],e,f);"string"==typeof d&&(d={$ref:d}),g.addSchema("",d),g.validateAll(a,d,null,null,""),f&&g.banUnknownProperties();var h={};return h.errors=g.errors,h.missing=g.missing,h.valid=0===h.errors.length,h},addSchema:function(){return b.addSchema.apply(b,arguments)},getSchema:function(){return b.getSchema.apply(b,arguments)},getSchemaMap:function(){return b.getSchemaMap.apply(b,arguments)},getSchemaUris:function(){return b.getSchemaUris.apply(b,arguments)},getMissingUris:function(){return b.getMissingUris.apply(b,arguments)},dropSchemas:function(){b.dropSchemas.apply(b,arguments)},defineKeyword:function(){b.defineKeyword.apply(b,arguments)},defineError:function(a,b,c){if("string"!=typeof a||!/^[A-Z]+(_[A-Z]+)*$/.test(a))throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if("number"!=typeof b||b%1!==0||1e4>b)throw new Error("Code number must be an integer > 10000");if("undefined"!=typeof o[a])throw new Error("Error already defined: "+a+" as "+o[a]);if("undefined"!=typeof p[b])throw new Error("Error code already used: "+p[b]+" as "+b);o[a]=b,p[b]=a,r[a]=r[b]=c;for(var d in s){var e=s[d];e[a]&&(e[b]=e[b]||e[a])}},reset:function(){b.reset(),this.error=null,this.missing=[],this.valid=!0},missing:[],error:null,valid:!0,normSchema:h,resolveUrl:f,getDocumentUri:g,errorCodes:o};return d}Object.keys||(Object.keys=function(){var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],d=c.length;return function(e){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object.keys called on non-object");var f=[];for(var g in e)a.call(e,g)&&f.push(g);if(b)for(var h=0;d>h;h++)a.call(e,c[h])&&f.push(c[h]);return f}}()),Object.create||(Object.create=function(){function a(){}return function(b){if(1!==arguments.length)throw new Error("Object.create implementation only accepts one parameter.");return a.prototype=b,new a}}()),Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!==d?d=0:0!==d&&1/0!==d&&d!==-1/0&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1}),Object.isFrozen||(Object.isFrozen=function(a){for(var b="tv4_test_frozen_key";a.hasOwnProperty(b);)b+=Math.random();try{return a[b]=!0,delete a[b],!1}catch(c){return!0}});var l={"+":!0,"#":!0,".":!0,"/":!0,";":!0,"?":!0,"&":!0},m={"*":!0};c.prototype={toString:function(){return this.template},fillFromObject:function(a){return this.fill(function(b){return a[b]})}};var n=function(a,b,c,d,e){if(this.missing=[],this.missingMap={},this.formatValidators=a?Object.create(a.formatValidators):{},this.schemas=a?Object.create(a.schemas):{},this.collectMultiple=b,this.errors=[],this.handleError=b?this.collectError:this.returnError,d&&(this.checkRecursive=!0,this.scanned=[],this.scannedFrozen=[],this.scannedFrozenSchemas=[],this.scannedFrozenValidationErrors=[],this.validatedSchemasKey="tv4_validation_id",this.validationErrorsKey="tv4_validation_errors_id"),e&&(this.trackUnknownProperties=!0,this.knownPropertyPaths={},this.unknownPropertyPaths={}),this.errorMessages=c,this.definedKeywords={},a)for(var f in a.definedKeywords)this.definedKeywords[f]=a.definedKeywords[f].slice(0)};n.prototype.defineKeyword=function(a,b){this.definedKeywords[a]=this.definedKeywords[a]||[],this.definedKeywords[a].push(b)},n.prototype.createError=function(a,b,c,d,e){var f=this.errorMessages[a]||r[a];if("string"!=typeof f)return new i(a,"Unknown error code "+a+": "+JSON.stringify(b),b,c,d,e);var g=f.replace(/\{([^{}]*)\}/g,function(a,c){var d=b[c];return"string"==typeof d||"number"==typeof d?d:a});return new i(a,g,b,c,d,e)},n.prototype.returnError=function(a){return a},n.prototype.collectError=function(a){return a&&this.errors.push(a),null},n.prototype.prefixErrors=function(a,b,c){for(var d=a;d<this.errors.length;d++)this.errors[d]=this.errors[d].prefixWith(b,c);return this},n.prototype.banUnknownProperties=function(){for(var a in this.unknownPropertyPaths){var b=this.createError(o.UNKNOWN_PROPERTY,{path:a},a,""),c=this.handleError(b);if(c)return c}return null},n.prototype.addFormat=function(a,b){if("object"==typeof a){for(var c in a)this.addFormat(c,a[c]);return this}this.formatValidators[a]=b},n.prototype.resolveRefs=function(a,b){if(void 0!==a.$ref){if(b=b||{},b[a.$ref])return this.createError(o.CIRCULAR_REFERENCE,{urls:Object.keys(b).join(", ")},"","");b[a.$ref]=!0,a=this.getSchema(a.$ref,b)}return a},n.prototype.getSchema=function(a,b){var c;if(void 0!==this.schemas[a])return c=this.schemas[a],this.resolveRefs(c,b);var d=a,e="";if(-1!==a.indexOf("#")&&(e=a.substring(a.indexOf("#")+1),d=a.substring(0,a.indexOf("#"))),"object"==typeof this.schemas[d]){c=this.schemas[d];var f=decodeURIComponent(e);if(""===f)return this.resolveRefs(c,b);if("/"!==f.charAt(0))return void 0;for(var g=f.split("/").slice(1),h=0;h<g.length;h++){var i=g[h].replace(/~1/g,"/").replace(/~0/g,"~");if(void 0===c[i]){c=void 0;break}c=c[i]}if(void 0!==c)return this.resolveRefs(c,b)}void 0===this.missing[d]&&(this.missing.push(d),this.missing[d]=d,this.missingMap[d]=d)},n.prototype.searchSchemas=function(a,b){if(a&&"object"==typeof a){"string"==typeof a.id&&j(b,a.id)&&void 0===this.schemas[a.id]&&(this.schemas[a.id]=a);for(var c in a)if("enum"!==c)if("object"==typeof a[c])this.searchSchemas(a[c],b);else if("$ref"===c){var d=g(a[c]);d&&void 0===this.schemas[d]&&void 0===this.missingMap[d]&&(this.missingMap[d]=d)}}},n.prototype.addSchema=function(a,b){if("string"!=typeof a||"undefined"==typeof b){if("object"!=typeof a||"string"!=typeof a.id)return;b=a,a=b.id}a===g(a)+"#"&&(a=g(a)),this.schemas[a]=b,delete this.missingMap[a],h(b,a),this.searchSchemas(b,a)},n.prototype.getSchemaMap=function(){var a={};for(var b in this.schemas)a[b]=this.schemas[b];return a},n.prototype.getSchemaUris=function(a){var b=[];for(var c in this.schemas)(!a||a.test(c))&&b.push(c);return b},n.prototype.getMissingUris=function(a){var b=[];for(var c in this.missingMap)(!a||a.test(c))&&b.push(c);return b},n.prototype.dropSchemas=function(){this.schemas={},this.reset()},n.prototype.reset=function(){this.missing=[],this.missingMap={},this.errors=[]},n.prototype.validateAll=function(a,b,c,d,e){var f;if(b=this.resolveRefs(b),!b)return null;if(b instanceof i)return this.errors.push(b),b;var g,h=this.errors.length,j=null,k=null;if(this.checkRecursive&&a&&"object"==typeof a){if(f=!this.scanned.length,a[this.validatedSchemasKey]){var l=a[this.validatedSchemasKey].indexOf(b);if(-1!==l)return this.errors=this.errors.concat(a[this.validationErrorsKey][l]),null}if(Object.isFrozen(a)&&(g=this.scannedFrozen.indexOf(a),-1!==g)){var m=this.scannedFrozenSchemas[g].indexOf(b);if(-1!==m)return this.errors=this.errors.concat(this.scannedFrozenValidationErrors[g][m]),null}if(this.scanned.push(a),Object.isFrozen(a))-1===g&&(g=this.scannedFrozen.length,this.scannedFrozen.push(a),this.scannedFrozenSchemas.push([])),j=this.scannedFrozenSchemas[g].length,this.scannedFrozenSchemas[g][j]=b,this.scannedFrozenValidationErrors[g][j]=[];else{if(!a[this.validatedSchemasKey])try{Object.defineProperty(a,this.validatedSchemasKey,{value:[],configurable:!0}),Object.defineProperty(a,this.validationErrorsKey,{value:[],configurable:!0})}catch(n){a[this.validatedSchemasKey]=[],a[this.validationErrorsKey]=[]}k=a[this.validatedSchemasKey].length,a[this.validatedSchemasKey][k]=b,a[this.validationErrorsKey][k]=[]}}var o=this.errors.length,p=this.validateBasic(a,b,e)||this.validateNumeric(a,b,e)||this.validateString(a,b,e)||this.validateArray(a,b,e)||this.validateObject(a,b,e)||this.validateCombinations(a,b,e)||this.validateHypermedia(a,b,e)||this.validateFormat(a,b,e)||this.validateDefinedKeywords(a,b,e)||null;if(f){for(;this.scanned.length;){var q=this.scanned.pop();delete q[this.validatedSchemasKey]}this.scannedFrozen=[],this.scannedFrozenSchemas=[]}if(p||o!==this.errors.length)for(;c&&c.length||d&&d.length;){var r=c&&c.length?""+c.pop():null,s=d&&d.length?""+d.pop():null;p&&(p=p.prefixWith(r,s)),this.prefixErrors(o,r,s)}return null!==j?this.scannedFrozenValidationErrors[g][j]=this.errors.slice(h):null!==k&&(a[this.validationErrorsKey][k]=this.errors.slice(h)),this.handleError(p)},n.prototype.validateFormat=function(a,b){if("string"!=typeof b.format||!this.formatValidators[b.format])return null;var c=this.formatValidators[b.format].call(null,a,b);return"string"==typeof c||"number"==typeof c?this.createError(o.FORMAT_CUSTOM,{message:c}).prefixWith(null,"format"):c&&"object"==typeof c?this.createError(o.FORMAT_CUSTOM,{message:c.message||"?"},c.dataPath||null,c.schemaPath||"/format"):null},n.prototype.validateDefinedKeywords=function(a,b){for(var c in this.definedKeywords)if("undefined"!=typeof b[c])for(var d=this.definedKeywords[c],e=0;e<d.length;e++){var f=d[e],g=f(a,b[c],b);if("string"==typeof g||"number"==typeof g)return this.createError(o.KEYWORD_CUSTOM,{key:c,message:g}).prefixWith(null,"format");if(g&&"object"==typeof g){var h=g.code||o.KEYWORD_CUSTOM;if("string"==typeof h){if(!o[h])throw new Error("Undefined error code (use defineError): "+h);h=o[h]}var i="object"==typeof g.message?g.message:{key:c,message:g.message||"?"},j=g.schemaPath||"/"+c.replace(/~/g,"~0").replace(/\//g,"~1");return this.createError(h,i,g.dataPath||null,j)}}return null},n.prototype.validateBasic=function(a,b,c){var d;return(d=this.validateType(a,b,c))?d.prefixWith(null,"type"):(d=this.validateEnum(a,b,c))?d.prefixWith(null,"type"):null},n.prototype.validateType=function(a,b){if(void 0===b.type)return null;var c=typeof a;null===a?c="null":Array.isArray(a)&&(c="array");var d=b.type;"object"!=typeof d&&(d=[d]);for(var e=0;e<d.length;e++){var f=d[e];if(f===c||"integer"===f&&"number"===c&&a%1===0)return null}return this.createError(o.INVALID_TYPE,{type:c,expected:d.join("/")})},n.prototype.validateEnum=function(a,b){if(void 0===b["enum"])return null;for(var c=0;c<b["enum"].length;c++){var e=b["enum"][c];if(d(a,e))return null}return this.createError(o.ENUM_MISMATCH,{value:"undefined"!=typeof JSON?JSON.stringify(a):a})},n.prototype.validateNumeric=function(a,b,c){return this.validateMultipleOf(a,b,c)||this.validateMinMax(a,b,c)||this.validateNaN(a,b,c)||null},n.prototype.validateMultipleOf=function(a,b){var c=b.multipleOf||b.divisibleBy;return void 0===c?null:"number"==typeof a&&a%c!==0?this.createError(o.NUMBER_MULTIPLE_OF,{value:a,multipleOf:c}):null},n.prototype.validateMinMax=function(a,b){if("number"!=typeof a)return null;if(void 0!==b.minimum){if(a<b.minimum)return this.createError(o.NUMBER_MINIMUM,{value:a,minimum:b.minimum}).prefixWith(null,"minimum");if(b.exclusiveMinimum&&a===b.minimum)return this.createError(o.NUMBER_MINIMUM_EXCLUSIVE,{value:a,minimum:b.minimum}).prefixWith(null,"exclusiveMinimum")}if(void 0!==b.maximum){if(a>b.maximum)return this.createError(o.NUMBER_MAXIMUM,{value:a,maximum:b.maximum}).prefixWith(null,"maximum");if(b.exclusiveMaximum&&a===b.maximum)return this.createError(o.NUMBER_MAXIMUM_EXCLUSIVE,{value:a,maximum:b.maximum}).prefixWith(null,"exclusiveMaximum")}return null},n.prototype.validateNaN=function(a){return"number"!=typeof a?null:isNaN(a)===!0||1/0===a||a===-1/0?this.createError(o.NUMBER_NOT_A_NUMBER,{value:a}).prefixWith(null,"type"):null},n.prototype.validateString=function(a,b,c){return this.validateStringLength(a,b,c)||this.validateStringPattern(a,b,c)||null},n.prototype.validateStringLength=function(a,b){return"string"!=typeof a?null:void 0!==b.minLength&&a.length<b.minLength?this.createError(o.STRING_LENGTH_SHORT,{length:a.length,minimum:b.minLength}).prefixWith(null,"minLength"):void 0!==b.maxLength&&a.length>b.maxLength?this.createError(o.STRING_LENGTH_LONG,{length:a.length,maximum:b.maxLength}).prefixWith(null,"maxLength"):null},n.prototype.validateStringPattern=function(a,b){if("string"!=typeof a||void 0===b.pattern)return null;var c=new RegExp(b.pattern);return c.test(a)?null:this.createError(o.STRING_PATTERN,{pattern:b.pattern}).prefixWith(null,"pattern")},n.prototype.validateArray=function(a,b,c){return Array.isArray(a)?this.validateArrayLength(a,b,c)||this.validateArrayUniqueItems(a,b,c)||this.validateArrayItems(a,b,c)||null:null},n.prototype.validateArrayLength=function(a,b){var c;return void 0!==b.minItems&&a.length<b.minItems&&(c=this.createError(o.ARRAY_LENGTH_SHORT,{length:a.length,minimum:b.minItems}).prefixWith(null,"minItems"),this.handleError(c))?c:void 0!==b.maxItems&&a.length>b.maxItems&&(c=this.createError(o.ARRAY_LENGTH_LONG,{length:a.length,maximum:b.maxItems}).prefixWith(null,"maxItems"),this.handleError(c))?c:null},n.prototype.validateArrayUniqueItems=function(a,b){if(b.uniqueItems)for(var c=0;c<a.length;c++)for(var e=c+1;e<a.length;e++)if(d(a[c],a[e])){var f=this.createError(o.ARRAY_UNIQUE,{match1:c,match2:e}).prefixWith(null,"uniqueItems");if(this.handleError(f))return f}return null},n.prototype.validateArrayItems=function(a,b,c){if(void 0===b.items)return null;var d,e;if(Array.isArray(b.items)){for(e=0;e<a.length;e++)if(e<b.items.length){if(d=this.validateAll(a[e],b.items[e],[e],["items",e],c+"/"+e))return d}else if(void 0!==b.additionalItems)if("boolean"==typeof b.additionalItems){if(!b.additionalItems&&(d=this.createError(o.ARRAY_ADDITIONAL_ITEMS,{}).prefixWith(""+e,"additionalItems"),this.handleError(d)))return d}else if(d=this.validateAll(a[e],b.additionalItems,[e],["additionalItems"],c+"/"+e))return d}else for(e=0;e<a.length;e++)if(d=this.validateAll(a[e],b.items,[e],["items"],c+"/"+e))return d;return null},n.prototype.validateObject=function(a,b,c){return"object"!=typeof a||null===a||Array.isArray(a)?null:this.validateObjectMinMaxProperties(a,b,c)||this.validateObjectRequiredProperties(a,b,c)||this.validateObjectProperties(a,b,c)||this.validateObjectDependencies(a,b,c)||null},n.prototype.validateObjectMinMaxProperties=function(a,b){var c,d=Object.keys(a);return void 0!==b.minProperties&&d.length<b.minProperties&&(c=this.createError(o.OBJECT_PROPERTIES_MINIMUM,{propertyCount:d.length,minimum:b.minProperties}).prefixWith(null,"minProperties"),this.handleError(c))?c:void 0!==b.maxProperties&&d.length>b.maxProperties&&(c=this.createError(o.OBJECT_PROPERTIES_MAXIMUM,{propertyCount:d.length,maximum:b.maxProperties}).prefixWith(null,"maxProperties"),this.handleError(c))?c:null},n.prototype.validateObjectRequiredProperties=function(a,b){if(void 0!==b.required)for(var c=0;c<b.required.length;c++){var d=b.required[c];if(void 0===a[d]){var e=this.createError(o.OBJECT_REQUIRED,{key:d}).prefixWith(null,""+c).prefixWith(null,"required");if(this.handleError(e))return e}}return null},n.prototype.validateObjectProperties=function(a,b,c){var d;for(var e in a){var f=c+"/"+e.replace(/~/g,"~0").replace(/\//g,"~1"),g=!1;if(void 0!==b.properties&&void 0!==b.properties[e]&&(g=!0,d=this.validateAll(a[e],b.properties[e],[e],["properties",e],f)))return d;if(void 0!==b.patternProperties)for(var h in b.patternProperties){var i=new RegExp(h);if(i.test(e)&&(g=!0,d=this.validateAll(a[e],b.patternProperties[h],[e],["patternProperties",h],f)))return d}if(g)this.trackUnknownProperties&&(this.knownPropertyPaths[f]=!0,delete this.unknownPropertyPaths[f]);else if(void 0!==b.additionalProperties){if(this.trackUnknownProperties&&(this.knownPropertyPaths[f]=!0,delete this.unknownPropertyPaths[f]),"boolean"==typeof b.additionalProperties){if(!b.additionalProperties&&(d=this.createError(o.OBJECT_ADDITIONAL_PROPERTIES,{}).prefixWith(e,"additionalProperties"),this.handleError(d)))return d}else if(d=this.validateAll(a[e],b.additionalProperties,[e],["additionalProperties"],f))return d}else this.trackUnknownProperties&&!this.knownPropertyPaths[f]&&(this.unknownPropertyPaths[f]=!0)}return null},n.prototype.validateObjectDependencies=function(a,b,c){var d;if(void 0!==b.dependencies)for(var e in b.dependencies)if(void 0!==a[e]){var f=b.dependencies[e];if("string"==typeof f){if(void 0===a[f]&&(d=this.createError(o.OBJECT_DEPENDENCY_KEY,{key:e,missing:f}).prefixWith(null,e).prefixWith(null,"dependencies"),this.handleError(d)))return d}else if(Array.isArray(f))for(var g=0;g<f.length;g++){var h=f[g];if(void 0===a[h]&&(d=this.createError(o.OBJECT_DEPENDENCY_KEY,{key:e,missing:h}).prefixWith(null,""+g).prefixWith(null,e).prefixWith(null,"dependencies"),this.handleError(d)))return d}else if(d=this.validateAll(a,f,[],["dependencies",e],c))return d}return null},n.prototype.validateCombinations=function(a,b,c){return this.validateAllOf(a,b,c)||this.validateAnyOf(a,b,c)||this.validateOneOf(a,b,c)||this.validateNot(a,b,c)||null},n.prototype.validateAllOf=function(a,b,c){if(void 0===b.allOf)return null;for(var d,e=0;e<b.allOf.length;e++){var f=b.allOf[e];if(d=this.validateAll(a,f,[],["allOf",e],c))return d}return null},n.prototype.validateAnyOf=function(a,b,c){if(void 0===b.anyOf)return null;var d,e,f=[],g=this.errors.length;this.trackUnknownProperties&&(d=this.unknownPropertyPaths,e=this.knownPropertyPaths);for(var h=!0,i=0;i<b.anyOf.length;i++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var j=b.anyOf[i],k=this.errors.length,l=this.validateAll(a,j,[],["anyOf",i],c);if(null===l&&k===this.errors.length){if(this.errors=this.errors.slice(0,g),this.trackUnknownProperties){for(var m in this.knownPropertyPaths)e[m]=!0,delete d[m];for(var n in this.unknownPropertyPaths)e[n]||(d[n]=!0);h=!1;continue}return null}l&&f.push(l.prefixWith(null,""+i).prefixWith(null,"anyOf"))}return this.trackUnknownProperties&&(this.unknownPropertyPaths=d,this.knownPropertyPaths=e),h?(f=f.concat(this.errors.slice(g)),this.errors=this.errors.slice(0,g),this.createError(o.ANY_OF_MISSING,{},"","/anyOf",f)):void 0},n.prototype.validateOneOf=function(a,b,c){if(void 0===b.oneOf)return null;var d,e,f=null,g=[],h=this.errors.length;this.trackUnknownProperties&&(d=this.unknownPropertyPaths,e=this.knownPropertyPaths);for(var i=0;i<b.oneOf.length;i++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var j=b.oneOf[i],k=this.errors.length,l=this.validateAll(a,j,[],["oneOf",i],c);if(null===l&&k===this.errors.length){if(null!==f)return this.errors=this.errors.slice(0,h),this.createError(o.ONE_OF_MULTIPLE,{index1:f,index2:i},"","/oneOf");if(f=i,this.trackUnknownProperties){for(var m in this.knownPropertyPaths)e[m]=!0,delete d[m];for(var n in this.unknownPropertyPaths)e[n]||(d[n]=!0)}}else l&&g.push(l)}return this.trackUnknownProperties&&(this.unknownPropertyPaths=d,this.knownPropertyPaths=e),null===f?(g=g.concat(this.errors.slice(h)),this.errors=this.errors.slice(0,h),this.createError(o.ONE_OF_MISSING,{},"","/oneOf",g)):(this.errors=this.errors.slice(0,h),null)},n.prototype.validateNot=function(a,b,c){if(void 0===b.not)return null;var d,e,f=this.errors.length;this.trackUnknownProperties&&(d=this.unknownPropertyPaths,e=this.knownPropertyPaths,this.unknownPropertyPaths={},this.knownPropertyPaths={});var g=this.validateAll(a,b.not,null,null,c),h=this.errors.slice(f);return this.errors=this.errors.slice(0,f),this.trackUnknownProperties&&(this.unknownPropertyPaths=d,this.knownPropertyPaths=e),null===g&&0===h.length?this.createError(o.NOT_PASSED,{},"","/not"):null},n.prototype.validateHypermedia=function(a,b,d){if(!b.links)return null;for(var e,f=0;f<b.links.length;f++){var g=b.links[f];if("describedby"===g.rel){for(var h=new c(g.href),i=!0,j=0;j<h.varNames.length;j++)if(!(h.varNames[j]in a)){i=!1;break}if(i){var k=h.fillFromObject(a),l={$ref:k};if(e=this.validateAll(a,l,[],["links",f],d))return e}}}};var o={INVALID_TYPE:0,ENUM_MISMATCH:1,ANY_OF_MISSING:10,ONE_OF_MISSING:11,ONE_OF_MULTIPLE:12,NOT_PASSED:13,NUMBER_MULTIPLE_OF:100,NUMBER_MINIMUM:101,NUMBER_MINIMUM_EXCLUSIVE:102,NUMBER_MAXIMUM:103,NUMBER_MAXIMUM_EXCLUSIVE:104,NUMBER_NOT_A_NUMBER:105,STRING_LENGTH_SHORT:200,STRING_LENGTH_LONG:201,STRING_PATTERN:202,OBJECT_PROPERTIES_MINIMUM:300,OBJECT_PROPERTIES_MAXIMUM:301,OBJECT_REQUIRED:302,OBJECT_ADDITIONAL_PROPERTIES:303,OBJECT_DEPENDENCY_KEY:304,ARRAY_LENGTH_SHORT:400,ARRAY_LENGTH_LONG:401,ARRAY_UNIQUE:402,ARRAY_ADDITIONAL_ITEMS:403,FORMAT_CUSTOM:500,KEYWORD_CUSTOM:501,CIRCULAR_REFERENCE:600,UNKNOWN_PROPERTY:1e3},p={};for(var q in o)p[o[q]]=q;var r={INVALID_TYPE:"Invalid type: {type} (expected {expected})",ENUM_MISMATCH:"No enum match for: {value}",ANY_OF_MISSING:'Data does not match any schemas from "anyOf"',ONE_OF_MISSING:'Data does not match any schemas from "oneOf"',ONE_OF_MULTIPLE:'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}',NOT_PASSED:'Data matches schema from "not"',NUMBER_MULTIPLE_OF:"Value {value} is not a multiple of {multipleOf}",NUMBER_MINIMUM:"Value {value} is less than minimum {minimum}",NUMBER_MINIMUM_EXCLUSIVE:"Value {value} is equal to exclusive minimum {minimum}",NUMBER_MAXIMUM:"Value {value} is greater than maximum {maximum}",NUMBER_MAXIMUM_EXCLUSIVE:"Value {value} is equal to exclusive maximum {maximum}",NUMBER_NOT_A_NUMBER:"Value {value} is not a valid number",STRING_LENGTH_SHORT:"String is too short ({length} chars), minimum {minimum}",STRING_LENGTH_LONG:"String is too long ({length} chars), maximum {maximum}",STRING_PATTERN:"String does not match pattern: {pattern}",OBJECT_PROPERTIES_MINIMUM:"Too few properties defined ({propertyCount}), minimum {minimum}",OBJECT_PROPERTIES_MAXIMUM:"Too many properties defined ({propertyCount}), maximum {maximum}",OBJECT_REQUIRED:"Missing required property: {key}",OBJECT_ADDITIONAL_PROPERTIES:"Additional properties not allowed",OBJECT_DEPENDENCY_KEY:"Dependency failed - key must exist: {missing} (due to key: {key})",ARRAY_LENGTH_SHORT:"Array is too short ({length}), minimum {minimum}",ARRAY_LENGTH_LONG:"Array is too long ({length}), maximum {maximum}",ARRAY_UNIQUE:"Array items are not unique (indices {match1} and {match2})",ARRAY_ADDITIONAL_ITEMS:"Additional items not allowed",FORMAT_CUSTOM:"Format validation failed ({message})",KEYWORD_CUSTOM:"Keyword failed: {key} ({message})",CIRCULAR_REFERENCE:"Circular $refs: {urls}",UNKNOWN_PROPERTY:"Unknown property (not in schema)"};i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i.prototype.name="ValidationError",i.prototype.prefixWith=function(a,b){if(null!==a&&(a=a.replace(/~/g,"~0").replace(/\//g,"~1"),this.dataPath="/"+a+this.dataPath),null!==b&&(b=b.replace(/~/g,"~0").replace(/\//g,"~1"),this.schemaPath="/"+b+this.schemaPath),null!==this.subErrors)for(var c=0;c<this.subErrors.length;c++)this.subErrors[c].prefixWith(a,b);return this};var s={},t=k();return t.addLanguage("en-gb",r),t.tv4=t,t});;
/**
 * A doubly linked list-based Least Recently Used (LRU) cache. Will keep most
 * recently used items while discarding least recently used items when its limit
 * is reached.
 *
 * Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
 * See README.md for details.
 *
 * Illustration of the design:
 *
 *       entry             entry             entry             entry
 *       ______            ______            ______            ______
 *      | head |.newer => |      |.newer => |      |.newer => | tail |
 *      |  A   |          |  B   |          |  C   |          |  D   |
 *      |______| <= older.|______| <= older.|______| <= older.|______|
 *
 *  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
 */
function LRUCache (limit) {
  // Current size of the cache. (Read-only).
  this.size = 0;
  // Maximum number of items this cache can hold.
  this.limit = limit;
  this._keymap = {};
}

/**
 * Put <value> into the cache associated with <key>. Returns the entry which was
 * removed to make room for the new entry. Otherwise undefined is returned
 * (i.e. if there was enough room already).
 */
LRUCache.prototype.put = function(key, value) {
  var entry = {key:key, value:value};
  // Note: No protection agains replacing, and thus orphan entries. By design.
  this._keymap[key] = entry;
  if (this.tail) {
    // link previous tail to the new tail (entry)
    this.tail.newer = entry;
    entry.older = this.tail;
  } else {
    // we're first in -- yay
    this.head = entry;
  }
  // add new entry to the end of the linked list -- it's now the freshest entry.
  this.tail = entry;
  if (this.size === this.limit) {
    // we hit the limit -- remove the head
    return this.shift();
  } else {
    // increase the size counter
    this.size++;
  }
};

/**
 * Purge the least recently used (oldest) entry from the cache. Returns the
 * removed entry or undefined if the cache was empty.
 *
 * If you need to perform any form of finalization of purged items, this is a
 * good place to do it. Simply override/replace this function:
 *
 *   var c = new LRUCache(123);
 *   c.shift = function() {
 *     var entry = LRUCache.prototype.shift.call(this);
 *     doSomethingWith(entry);
 *     return entry;
 *   }
 */
LRUCache.prototype.shift = function() {
  // todo: handle special case when limit == 1
  var entry = this.head;
  if (entry) {
    if (this.head.newer) {
      // advance the list
      this.head = this.head.newer;
      this.head.older = undefined;
    } else {
      // the cache is exhausted
      this.head = undefined;
      this.tail = undefined;
    }
    // Remove last strong reference to <entry> and remove links from the purged
    // entry being returned:
    entry.newer = entry.older = undefined;
    // delete is slow, but we need to do this to avoid uncontrollable growth:
    delete this._keymap[entry.key];
    this.size--;
  }
  return entry;
};

/**
 * Get and register recent use of <key>. Returns the value associated with <key>
 * or undefined if not in cache.
 */
LRUCache.prototype.get = function(key, returnEntry) {
  // First, find our cache entry
  var entry = this._keymap[key];
  if (entry === undefined) return; // Not cached. Sorry.
  // As <key> was found in the cache, register it as being requested recently
  if (entry === this.tail) {
    // Already the most recenlty used entry, so no need to update the list
    return returnEntry ? entry : entry.value;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head)
      this.head = entry.newer;
    entry.newer.older = entry.older; // C <-- E.
  }
  if (entry.older)
    entry.older.newer = entry.newer; // C. --> E
  entry.newer = undefined; // D --x
  entry.older = this.tail; // D. --> E
  if (this.tail)
    this.tail.newer = entry; // E. <-- D
  this.tail = entry;
  return returnEntry ? entry : entry.value;
};

// ----------------------------------------------------------------------------
// Following code is optional and can be removed without breaking the core
// functionality.

/**
 * Check if <key> is in the cache without registering recent use. Feasible if
 * you do not want to chage the state of the cache, but only "peek" at it.
 * Returns the entry associated with <key> if found, or undefined if not found.
 */
LRUCache.prototype.find = function(key) {
  return this._keymap[key];
};

/**
 * Update the value of entry with <key>. Returns the old value, or undefined if
 * entry was not in the cache.
 */
LRUCache.prototype.set = function(key, value) {
  var oldvalue, entry = this.get(key, true);
  if (entry) {
    oldvalue = entry.value;
    entry.value = value;
  } else {
    oldvalue = this.put(key, value);
    if (oldvalue) oldvalue = oldvalue.value;
  }
  return oldvalue;
};

/**
 * Remove entry <key> from cache and return its value. Returns undefined if not
 * found.
 */
LRUCache.prototype.remove = function(key) {
  var entry = this._keymap[key];
  if (!entry) return;
  delete this._keymap[entry.key]; // need to do delete unfortunately
  if (entry.newer && entry.older) {
    // relink the older entry with the newer entry
    entry.older.newer = entry.newer;
    entry.newer.older = entry.older;
  } else if (entry.newer) {
    // remove the link to us
    entry.newer.older = undefined;
    // link the newer entry to head
    this.head = entry.newer;
  } else if (entry.older) {
    // remove the link to us
    entry.older.newer = undefined;
    // link the newer entry to head
    this.tail = entry.older;
  } else {// if(entry.older === undefined && entry.newer === undefined) {
    this.head = this.tail = undefined;
  }

  this.size--;
  return entry.value;
};

/** Removes all entries */
LRUCache.prototype.removeAll = function() {
  // This should be safe, as we never expose strong refrences to the outside
  this.head = this.tail = undefined;
  this.size = 0;
  this._keymap = {};
};

/**
 * Return an array containing all keys of entries stored in the cache object, in
 * arbitrary order.
 */
if (typeof Object.keys === 'function') {
  LRUCache.prototype.keys = function() { return Object.keys(this._keymap); };
} else {
  LRUCache.prototype.keys = function() {
    var keys = [];
    for (var k in this._keymap) keys.push(k);
    return keys;
  };
}

/**
 * Call `fun` for each entry. Starting with the newest entry if `desc` is a true
 * value, otherwise starts with the oldest (head) enrty and moves towards the
 * tail.
 *
 * `fun` is called with 3 arguments in the context `context`:
 *   `fun.call(context, Object key, Object value, LRUCache self)`
 */
LRUCache.prototype.forEach = function(fun, context, desc) {
  var entry;
  if (context === true) { desc = true; context = undefined; }
  else if (typeof context !== 'object') context = this;
  if (desc) {
    entry = this.tail;
    while (entry) {
      fun.call(context, entry.key, entry.value, this);
      entry = entry.older;
    }
  } else {
    entry = this.head;
    while (entry) {
      fun.call(context, entry.key, entry.value, this);
      entry = entry.newer;
    }
  }
};

/** Returns a JSON (array) representation */
LRUCache.prototype.toJSON = function() {
  var s = [], entry = this.head;
  while (entry) {
    s.push({key:entry.key.toJSON(), value:entry.value.toJSON()});
    entry = entry.newer;
  }
  return s;
};

/** Returns a String representation */
LRUCache.prototype.toString = function() {
  var s = '', entry = this.head;
  while (entry) {
    s += String(entry.key)+':'+entry.value;
    entry = entry.newer;
    if (entry)
      s += ' < ';
  }
  return s;
};

// Export ourselves
if (typeof this === 'object') this.LRUCache = LRUCache;
;
/**
 * VitalService JSON submodule - validates the messages and transferred objects using json schema
 * TODO - all service objects validation
 */
VitalServiceJson = function(logger, loggingEnabled) {

	this.logger = logger != null ? logger : console;
	this.loggingEnabled = loggingEnabled == true;
	
	if(VitalServiceJson.SINGLETON != null) {
		throw ("VitalServiceJson SINGLETON already initialized");
	}
	
	if(typeof(tv4) == 'undefined') {
		throw ("missing tv4 library");
	}
	
	if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
		throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable")
	}

	/*
	if(typeof(vital_core_0_2_252_schema) == 'undefined') {
		throw ("No vital_core_0_2_252_schema - core json schema not loaded");
	}
	
	if(typeof(vital_0_2_252_schema) == 'undefined') {
		throw ("No vital_0_2_252_schema - domain json schema not loaded");
	}
	*/
	
	//optimize memory usage in large domains
	this.schemasCache = new LRUCache(10000);
	
	this.loaded = {};
	this.dynamicPropertiesClasses = [];
	
	this.domainURI2LongProperties = {};
	
	
	this.vitalCoreSchema = null;
	this.vitalDomainSchema = null;
	
	this.dynamicDomains = [];
	
	this.domainsMap = {};
	
	this.propertiesMap = {};
	
	var sFiles = [];
	
	for(var i = 0 ; i < VITAL_JSON_SCHEMAS.length; i++) {
		
		var schema = VITAL_JSON_SCHEMAS[i];
		
		if(schema.domainURI == VitalServiceJson.VITAL_CORE_URI ) {
			this.vitalCoreSchema = schema;
		} else if(schema.domainURI == VitalServiceJson.VITAL_DOMAIN_URI ) {
			this.vitalDomainSchema = schema;
		} else {
			this.dynamicDomains.push(schema);
		}
		

		sFiles.push(schema);
		
		this._fixLongPropertySchema(schema);
		
		this.domainsMap[schema.domainURI] = schema;
		
		for(var j = 0 ; j < schema.properties.length; j++) {
			var p = schema.properties[j];
			this.propertiesMap[p.URI] = p;
		}
		
	}
	
	
	if(this.vitalCoreSchema == null) {
		this.logger.error("No vital core schema loaded");
		return;
	}
	
	if(this.vitalDomainSchema == null) {
		this.logger.error("No vital domain schema loaded");
		return;
	}
	
	
	for(var i = 0 ; i < VitalServiceJson.customOntologies.length; i++) {
		
		var schema = VitalServiceJson.customOntologies[i];
		
		var schemaURI = schema.domainURI;
		
		this._fixLongPropertySchema(schema);
		
		this.domainsMap[schema.domainURI] = schema;
		
		for(var i = 0 ; i < schema.properties.length; i++) {
			var p = schema.properties[i];
			this.propertiesMap[p.URI] = p;
		}
		
		sFiles.push(schema);
		
	}
	
	sFiles = VitalServiceJson.topologicalSort(sFiles);
	
	this._load(sFiles);
	
}

VitalServiceJson.topologicalSort = function(domains){
	
	//initially get the root domain
	var out = [];
	var roots = [];
	
	var copy = domains.slice();
	
	for(var i = domains.length -1; i >= 0; i--) {
		var domain = domains[i];
		if(domain.parents == null || domain.parents.length == 0) {
			domains.splice(i, 1)
			roots.push(domain);
		} else {
			domain.parentsCopy = domain.parents.slice();
		}
	}
	
	if(roots.length != 1) throw "Expected exactly 1 root domain, found: " + S.length;
	
	while(roots.length > 0) {
		
		var removed = roots.splice(0, 1)[0];
		
		out.push(removed);
		
		var uri = removed.domainURI;
		
		for(var i = domains.length - 1; i >= 0; i--) {
			
			var d = domains[i];
			
			if(d.parentsCopy != null) {
				var indexOfParent = d.parentsCopy.indexOf(uri); 
				if(indexOfParent >= 0) {
					d.parentsCopy.splice(indexOfParent, 1);
					if(d.parentsCopy.length == 0) {
						delete d.parentsCopy;
						domains.splice(i, 1);
						roots.push(d);
					}
				}
			}
			
		}
		
	}
	
	if(copy.length != out.length) {
		console.error("input domains", copy);
		console.error("output domains", out);
		throw "Incomplete domains graph detected!"
	}
	
	return out;
	
}

/**
 * @type VitalServiceJson
 */
VitalServiceJson.SINGLETON = null;

VitalServiceJson.VITAL_CORE_URI = 'http://vital.ai/ontology/vital-core';

VitalServiceJson.VITAL_DOMAIN_URI = 'http://vital.ai/ontology/vital';



VitalServiceJson.prototype._fixLongPropertySchema = function(schema) {
	
	var schemaURI = schema.domainURI;
	
	//collect long properties
	var longProperties = {};
	for(var i = 0; i < schema['properties'].length; i++) {
		var property = schema['properties'][i];
		if(property.type == 'LongProperty'){
			longProperties[property.URI] = true;
		}
	}
	
	var keys = Object.keys(longProperties);

	if(this.loggingEnabled) { 
		this.logger.info( schema.domainURI + " Long properties: ", Object.keys(longProperties));
	}
	
	var otherSchemasKeys = null;
	
	for(var i = 0 ; i < schema.schemas.length; i++) {
		
		var classSchema = schema.schemas[i];
		
		var properties = classSchema['properties'];
		
		var pURIs = Object.keys(properties);
	
		
		for(var j = 0; j < pURIs.length; j++) {
			
			var pURI = pURIs[j];
			
			var isLongProp = false;
			
			if(longProperties[pURI] != null) {
//				this.logger.warn("Updating long schema: ", properties[pURI])
//				this.logger.warn("Into: ", {});
				
				//get rid of type constraint for long properties
				isLongProp = true;
				
			} else {
				
				if(otherSchemasKeys == null) {
					otherSchemasKeys = Object.keys(this.domainURI2LongProperties);
				}
				
				for(var s = 0 ; s < otherSchemasKeys.length; s++) {
					
					var k = otherSchemasKeys[s];
					
					var otherLongProps = this.domainURI2LongProperties[k];
					
					if(otherLongProps[pURI] != null) {
						isLongProp = true;
						break;
					}
					
				}
				
			}
			
			if(isLongProp) {
				
				properties[pURI] = {};
				
			}
			
		}
		
	}

	this.domainURI2LongProperties[schemaURI] = longProperties;
	
}


VitalServiceJson.prototype._load = function(sFiles) {
	

	if(this.loggingEnabled) { this.logger.info("schemas count: ", sFiles.length); }
	
	var newLoaded = {};
	
	for(var i = 0 ; i < sFiles.length; i++) {
		
		var schemas = sFiles[i].schemas;
		
		for(var j = 0 ; j < schemas.length; j++) {
			
			var schema = schemas[j];
			
			var extendsURI = schema['extends'];
			
			if(extendsURI != null) {
				
				var l = this.loaded[extendsURI];
				
				if(l == null) {
					this.logger.warn("Base schema not found: " + extendsURI);
					continue;
				}
			
				var currentProps = l['properties'];
				
				var newProps = schema['properties'];
				
				this.extend(currentProps, newProps);
				
//				tv4.addSchema(extendsURI, l);
				
				this.loaded[extendsURI] = l;
				
			} else {
				
				var uri = schema.id;
				
				if(uri == null) {
					throw "unknown schema object, no id";
				}
				
				
				if(schema.type == null) {
					schema.type = 'object';
				}
				
				if(schema.required == null) {
					schema.required = [ "URI", "type" ];
				}
				
				if(schema.additionalProperties == null) {
					schema.additionalProperties = false;
				}
				
				
				var props = schema.properties;
				if(props == null) {
					schema.properties = props;
					props = {};
				}
				
				if(props.URI == null) {
					props.URI = {
						"type": "string"
					};
				}
				
				if(props.type == null) {
					props.type = {
						"enum" : [ uri ]
					};
				}
				
				if(props.types == null) {
					props.types = {
						"type" : "array",
						"minItems" : 1,
						"items" : {
							"type" : "string"
						},
						"uniqueItems" : true
					};
				}
				
				this.loaded[uri] = schema;
				
				newLoaded[uri] = schema;
				
			}
			
		}
		
	}
	
	
	//collect all  VITAL_GraphContainerObject subclasses
	for (var key in newLoaded) {
		if ( ! newLoaded.hasOwnProperty(key)) continue;
		
		//collect parent classes
		var classHierarchy = this.listSuperclasses(key, [], false);
		
		if(classHierarchy.indexOf(VitalServiceJson.VITAL_CORE_URI + '#VITAL_GraphContainerObject') >= 0) {
			
			if(this.dynamicPropertiesClasses.indexOf(key) < 0) {
				this.dynamicPropertiesClasses.push(key);
			}
			
		}
		
	}
	
}

VitalServiceJson.prototype.listSuperclasses = function(thisClass, results, direct) {
	return this._listSuperclasses(thisClass, results, direct, true);
}

VitalServiceJson.prototype._listSuperclasses = function(thisClass, results, direct, topLevel) {
	
	var obj = this.loaded[thisClass];
	
	if(obj == null) throw "class not found in registry: " + thisClass;
	
	results.push(thisClass);
	
	if(direct == true && topLevel == false) {
		return results;
	}
	
	var parent = obj['parent'];
	
	if(parent != null) {
		
		results = this._listSuperclasses(parent, results, direct, false);
		
	} 
	return results;
	
}

VitalServiceJson.prototype.listSubclasses = function(thisClass, results, direct) {
	
	var obj = this.loaded[thisClass];
	
	if(obj == null) throw "class not found in registry: " + thisClass;

	results.push(thisClass);
	
	var pool = [thisClass];
	
	while(pool.length > 0) {
		
		var newPool = [];
		
		for(var i = 0 ; i < pool.length; i++) {
			
			var parentURI = pool[i];
			
			for(var key in this.loaded) {
				
				if ( ! this.loaded.hasOwnProperty(key) )  continue;
				
				var cls = this.loaded[key];
				
				if( cls.parent == parentURI ) {
					
					if(results.indexOf(key) < 0) {
						
						results.push(key);
						
						newPool.push(key);
						
					}
					
				}
				
			}
			
			
		}
		
		if(direct) {
			pool = [];
		} else {
			pool = newPool;
		}
		
	}
	
	return results;
	
}

VitalServiceJson.prototype.listSuperproperties = function(thisProperty, results, direct) {
	return this._listSuperproperties(thisProperty, results, direct, true);
}

VitalServiceJson.prototype._listSuperproperties = function(thisProperty, results, direct, topLevel) {
	
	var obj = this.propertiesMap[thisProperty];
	
	if(obj == null) throw "property not found in registry: " + thisProperty;
	
	results.push(thisProperty);
	
	if(direct == true && topLevel == false) {
		return results;
	}
	
	var parent = obj['parent'];
	
	if(parent != null) {
		
		results = this._listSuperproperties(parent.URI, diresults, direct, false);
		
	}
	
	return results;
	
}

VitalServiceJson.prototype.listSubproperties = function(thisProperty, results, direct) {
	
	var obj = this.propertiesMap[thisProperty];
	
	if(obj == null) throw "property not found in registry: " + thisProperty;

	var topLevel = true;
	
	results.push(thisProperty);
	
	var pool = [thisProperty];
	
	while(pool.length > 0) {
		
		var newPool = [];
		
		for(var i = 0 ; i < pool.length; i++) {
			
			var parentURI = pool[i];
			
			for(var key in this.propertiesMap) {
				
				if ( ! this.propertiesMap.hasOwnProperty(key) )  continue;
				
				var cls = this.propertiesMap[key];
				
				if( cls.parent == parentURI ) {
					
					if(results.indexOf(key) < 0) {
						
						results.push(key);
						
						newPool.push(key);
						
					}
					
				}
				
			}
			
			
		}
		
		if(direct) {
			pool = [];
		} else {
			pool = newPool;
		}
		
	}
	
	return results;
	
}


VitalServiceJson.customOntologies = [];

/**
 * Validates vitalservice json response object
 * returns errorMessage or null if ok
 */
VitalServiceJson.prototype.validateResponse = function(response) {

	if(response == null) return 'null response object - nothing to validate';
	
	if(response.type != null) {
		var status = this.validateGraphObject(response);
		return status; 
	}
	
	if(vitaljs.isArray(response)) {
		
		for(var i = 0 ; i < response.length; i++) {
			
			var o = response[i];
			
			if(o.type != null) {
				
				var status = this.validateGraphObject(o);
				if(status != null) return status;
				
			} else {
				
				return "expected list of graph objects";
				
			}
			
		}
		
		if(this.loggingEnabled) { this.logger.info("Validation passed, checked " + response.length + " objects in array"); }
		
		return null;
		
		
	}
	
	//only result list
	if( response._type == 'ai.vital.vitalservice.query.ResultList' ) {
	
		if(response.results == null) {
			response.results = [];
		}
		
		vitaljs.resultList(response);
		
		if( response.results == null ) return null;
		
		for(var i = 0 ; i < response.results.length; i++) {
			
			
			var resultElement = response.results[i];
			
			var graphObject = resultElement.graphObject;
	
			var status = this.validateGraphObject(graphObject);
			if(status != null) return status;
			
		}
		
		if(this.loggingEnabled) { this.logger.info("Validation passed, checked " + response.results.length + " objects in ResultList"); }
	    
	    return null;

	} else {
		
		if(this.loggingEnabled) { this.logger.info("response validation skipped: " + response._type); }
		return null;
	}
	
}


VitalServiceJson.prototype._getJsonSchema = function(typeURI) {
	
	var s = null;
	
	s = this.schemasCache.get(typeURI);
	if(s != null) return s;
	
	var schema = this.loaded[typeURI]
	
	if(schema == null) throw "No schema found for graph object type: " + typeURI;
	
	//aggregate additional properties from upper classes
	s = this.extend({}, schema);
	s.properties = {};
	this.extend(s.properties, schema.properties);
	
	var superClassesWithThis = this.listSuperclasses(typeURI, [], false);
	
	for( var i = 0 ; i < superClassesWithThis.length; i++) {
		if( i == 0 ) continue;
		var parentSchema = this.loaded[superClassesWithThis[i]];
		
		//we do not need deep copy here
		for(var k in parentSchema.properties) {
			if(parentSchema.properties.hasOwnProperty(k)) {
				if(k != 'URI' && k != 'type' && k != 'types') {
					s.properties[k] = parentSchema.properties[k];
				}
			}
		}
		
	}
	
	this.schemasCache.put(typeURI, s);
	
	return s;
	
	
}

VitalServiceJson.prototype.validateGraphObject = function(graphObject) {
	
	if(graphObject.type == null) return "Graph object without type!";

	if(this.dynamicPropertiesClasses.indexOf(graphObject.type) >= 0) {
		//dynamic properties objects are allowed
		vitaljs.graphObject(graphObject);
		return null;
	}
	
	var s = null;
	
	try {
		s = this._getJsonSchema(graphObject.type);
	} catch(e) {
		return e.message;
	}
	
	var valid = tv4.validate(graphObject, s);
	
	if(!valid) {
		this.logger.error("Object invalid", tv4.error);
		this.logger.error("Object invalid code ", tv4.error.code);
		this.logger.error("Object invalid message ", tv4.error.message);
		this.logger.error("Object invalid dataPath ", tv4.error.dataPath);
		this.logger.error("Object invalid schemaKey ", tv4.error.schemaKey);
		this.logger.error("Object invalid obj Key ", graphObject);
		return "Code: " + tv4.error.code + 
		" Message: " + tv4.error.message +
		" DataPath: " + tv4.error.dataPath + 
		" SchemaKey: " + tv4.error.schemaKey;
	}

	vitaljs.graphObject(graphObject);
	
	return null;
	
}


VitalServiceJson.prototype.loadSchemas = function(schemasArray) {
	
	var filtered = [];
	
	for(var si = 0 ; si < schemasArray.length; si++) {
		
		var schemaObj = schemasArray[si];
		
		var loadedAlready = false;
		
		for( var i = 0 ; i < this.dynamicDomains.length; i ++ ) {
			if(this.dynamicDomains[i].domainURI == schemaObj.domainURI) {
				loadedAlready = true;
				break;
			}
		}
		
		if(loadedAlready) {
			this.logger.warn("Schema already loaded: " + schemaObj.domainURI);
			continue;
		}
		
		filtered.push(schemaObj);
		
		this._fixLongPropertySchema(schema);
		
		this.dynamicDomains.push(schemaObj);
		
		this.domainsMap[schemaObj.domainURI] = schemaObj;
		
		for(var i = 0 ; i < schemaObj.properties.length; i++) {
			var p = schemaObj.properties[i];
			this.propertiesMap[p.URI] = p;
		}
		
	}
	
	this._load(filtered);
	
}


VitalServiceJson.prototype.purgeSchemas = function(schemaArray) {
	
	this.dynamicDomains = [];
	this.domainsMap = {};
	this.propertiesMap = {};
	this.loaded = {};
	this.dynamicPropertiesClasses = [];
	this.domainURI2LongProperties = {};
	tv4.dropSchemas();
	this.schemasCache = new LRUCache(10000);
	
	this._load([this.vitalCoreSchema, this.vitalDomainSchema]);
	
	
}

VitalServiceJson.prototype.getLocalSchemaList = function() {
	var list = [this.vitalCoreSchema, this.vitalDomainSchema];
	for(var i = 0; i < this.dynamicDomains; i++) {
		list.push(this.dynamicDomains[i]);
	}
	return list;
}

VitalServiceJson.prototype.unloadSchema = function(schemaURI) {
	
	var d = null;
	var index = -1;
	//dependent
	var dependent = [];
	
	if(this.vitalCoreSchema.domainURI == schemaURI) throw ("Cannot unload vital-core schema: " + schemaURI);
	
	if(this.vitalDomainSchema.domainURI == schemaURI) throw ("Cannot unload vital schema: " + schemaURI);
	
	var dependentSchemas = [];
	
	for(var i = 0 ; i < this.dynamicDomains.length; i++) {
		
		var _d = this.dynamicDomains[i];
		
		if(_d.domainURI == schemaURI) {
			d = _d;
			index = i;
		} else {

			var parents = _d.parents;
			
			if(parents.indexOf(schemaURI) >= 0) {
				dependent.push(_d);
			}
			
		}
		
	}
	
	if(d == null) throw "schema with URI not found: " + schemaURI;
	
	if(dependent.length > 0) {
		
		var m = "Cannot unload schema, " + dependent.length + " schema" + (dependent.length == 1 ? '' : 's' ) + " depend" + (dependent.length == 1 ? 's' : '' ) + " on it: ";
		
		for(var i = 0 ; i < dependent.length; i++) {
			var dep = dependent[i];
			if( i > 0) m += ", ";
			m += dep.domainURI;
		}
		
		throw m;
		
	}
	
	
	this.dynamicDomains.splice(index, 1);
	
	
	//refresh
	var newList = [this.vitalCoreSchema, this.vitalDomainSchema];
	
	
	for(var i = 0 ; i < this.dynamicDomains.length; i++) {
		newList.push(this.dynamicDomains[i]);
	}
	
	
	this.schemasCache = new LRUCache(10000);
	tv4.dropSchemas();
	
	delete this.domainsMap[schemaURI];
	delete this.domainURI2LongProperties[schemaURI];
	
	for( var i = 0 ; i < d.properties.length; i++) {
		var pURI = d.properties[i].URI;
		delete this.propertiesMap[pURI];
	}
	
	this.loaded = {};
	this.dynamicPropertiesClasses = [];
	
	this._load(newList);
	
}

//substitute for jquery.extend, source: http://stackoverflow.com/a/11197343
VitalServiceJson.prototype.extend = function extend(a, b){
    for(var key in b)
        if(b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}

/**
 * Reloads domain ontologies (schemas), drops all currently loaded
 */
/*
VitalServiceJson.prototype.reloadOntologies = function(domainsRL, successCB, errorCB) {

	var sList = [];
	
	for( var i = 0; i < VITAL_JSON_SCHEMAS.length; i++ ) {
		
		var schema = VITAL_JSON_SCHEMAS[i];
		
		//check if vital or vital-core
		for(var j = 0 ; j < schema.length; j++) {
			var s = schema[j];
			if(s.id == null) continue;
			
			if(s.id.indexOf('http://vital.ai/ontology/vital-core#') == 0 ||
					s.id.indexOf('http://vital.ai/ontology/vital#') == 0) {
				sList.push(schema);
				break;
			}
		}
		
	}
	
	VITAL_JSON_SCHEMAS.splice(0,VITAL_JSON_SCHEMAS.length);
	
	for( var i = 0; i < sList.length; i++ ) {
		VITAL_JSON_SCHEMAS.push(sList[i]);
	} 
	

	for(var i = 0 ; i < domainsRL.results.length; i ++) {
	
		var domainGO = domainsRL.results[i].graphObject;
		
		eval( domainGO.domainOWL );
		
		
	}
	
	this.logger.info("new domains list: ", VITAL_JSON_SCHEMAS);

	this.reload();
	
}
*/


//vitaljs namespace
vitaljs = {};

/**
 * @type VitalService
 */
vitaljs.vitalservice = null;

vitaljs.getPropertyShortName = function(propertyURI) {
	
	var pName = null;
	
	var i = propertyURI.indexOf('#');
	if(i < 0) {
//		throw new RuntimeException("Not a property URI: ${propertyURI} - missing #");
		pName = propertyURI;
	} else {
		pName = propertyURI.substring(i+1);
	}
	
	
	if(pName.indexOf("has") == 0) {
		
		pName = pName.substring(3, 4).toLowerCase() + pName.substring(4);
		
	} else if(pName.indexOf("is") == 0) {
	
		pName = pName.substring(2, 3).toLowerCase() + pName.substring(3);
	
	} else {

		//don't trim
		
	}
	
	return pName;
	
}

vitaljs.graphObject = function(rawObject) {
	
	vitaljs._getImpl(rawObject);
	
	vitaljs._setImpl(rawObject);
	
	return rawObject;
	
}

/**
 * Adds utility methods to ResultList object
 */
vitaljs.resultList = function(rl) {
	
	if(arguments.length == 0 || rl == null) {
		rl = {_type: 'ai.vital.vitalservice.query.ResultList', results: []};
	}
	
	if(rl._type != 'ai.vital.vitalservice.query.ResultList') {
		VitalServiceJson.SINGLETON.logger("Only objects of _type: ai.vital.vitalservice.query.ResultList may be augmented: " + rl._type);
		return;
	}
	
	if( typeof( rl.first ) === 'undefined' ) {
		rl.first = function() {
			if( this.results.length > 0 ) return this.results[0].graphObject;
			return null;
		};
	}
	
	if( typeof( rl.get ) === 'undefined' ) {
		rl.get = function(uri) {
			for(var i = 0 ; i < this.results.length; i++) {
				var g = this.results[i].graphObject;
				if(g.URI == uri) return g;
			}
			return null;
		};
	}
	
	if( typeof( rl.addResult ) === 'undefined' ) {
		
		rl.addResult = function(graphObject, score) {
			
			if(graphObject == null) throw("graphObject cannot be null");
			if(score == null) {
				score = 1;
			}
			
			rl.results.push({_type: 'ai.vital.vitalservice.query.ResultElement', graphObject: graphObject, score: score});
			
		}
		
	}
	
	//pseudo iterator
	if( typeof( rl.iterator ) === 'undefined' ) {
		
		/**
		 * varargs
		 * by default returns all graphobjects 
		 */
		rl.iterator = function(classURI, strict) {
			
			var r = [];
			
			if(strict == null) strict = false;
			
			var typesFilter = null;
			
			
			if(classURI != null) {
				
				//check if type exists
				
				typesFilter = {};
				
				if( ! vitaljs.isClassLoaded(classURI) ) throw "class not found: " + classURI;
				
				typesFilter[classURI] = true;
				
				if(strict) {
					
				} else {
					
					var subclassesList = vitaljs.getSubclasses({URI: classURI}, false);
					
					for(var i = 0; i < subclassesList.length; i++) {
						
						typesFilter[subclassesList[i].URI] = true
						
					}
					
					
					
				}
				
			}
			
			for(var i = 0 ; i < this.results.length; i++) {
				var g = this.results[i].graphObject;
				
				if(typesFilter == null || typesFilter[g.type] == true) {
					
					r.push(g);
					
				}
				
			}
			
			return r;
			
		};
		
	}
	
	return rl;
	
}

vitaljs._getImpl = function(rawObject) {
	
	var t = typeof(rawObject.get);
	
	if(t == 'undefined') {
		
		rawObject.get = function(shortName) {

			if(shortName == null) throw ("shortName must not be null");
			
			if(typeof(shortName) != 'string') throw ("shortName must be a string");
			
			if(shortName.length == 0) throw ("shortName must not be empty");
			
			var type = this.type;
			
			if(type == null) throw ( "no type property in this graphobject" );
			
			if( VitalServiceJson.SINGLETON == null ) throw ( "vitaljs singleton not available" );
			
			if( vitaljs.isSubclassOf(type, VitalServiceJson.VITAL_CORE_URI + '#VITAL_GraphContainerObject') ) {
				var v = this[shortName];
				if( v != null) return v.value;
				return null;
			}
			
			var schema = VitalServiceJson.SINGLETON._getJsonSchema(type);//loaded[type];
			
			if(schema == null) throw ( "schema not found for type: " + type );
			
			var props = schema.properties;
			
			var lastKey = null
			
			for (var key in props) {
					
				if (props.hasOwnProperty(key)) {
						
					if( shortName == vitaljs.getPropertyShortName(key)) {
							
						if(lastKey == null || lastKey == key) {
								
							lastKey = key;
							
						} else {
								
							throw "property short name ambiguous: " + shortName + ", matching properties: " + lastKey + ", " + key;
								
						}
							
					}
						
				}
					
			}
			
			if(lastKey == null) throw ("no matching property for short name found: " + shortName + " type: " + type);
			
			return rawObject[lastKey];
			
		}
		
	} else {
		
		if( t != 'function' ) {
			throw "object.get already defined as " + t;
		}
	}
	
}

vitaljs._setImpl = function(rawObject) {
	
	var t = typeof(rawObject.set);
	
	if(t == 'undefined') {
		
		rawObject.set = function(shortName, value) {
			
			if(shortName == null) throw ("shortName must not be null");
			
			if(typeof(shortName) != 'string') throw ("shortName must be a string");
			
			if(shortName.length == 0) throw ("shortName must not be empty");
			
			var type = this.type;
			
			if(type == null) throw ( "no type property in this graphobject" );
			
			if( VitalServiceJson.SINGLETON == null ) throw ( "vitaljs singleton not available" );
			
			var schema = VitalServiceJson.SINGLETON._getJsonSchema(type);// VitalServiceJson.SINGLETON.loaded[type];
			
			if(schema == null) throw ( "schema not found for type: " + type );
			
			var props = schema.properties;
			
			var lastKey = null
			
			for (var key in props) {
				
				if (props.hasOwnProperty(key)) {
					
					if( shortName == vitaljs.getPropertyShortName(key)) {
						
						if(lastKey == null || lastKey == key) {
							
							lastKey = key;
							
						} else {
							
							throw "property short name ambiguous: " + shortName + ", matching properties: " + lastKey + ", " + key;
							
						}
						
					}
					
				}
				
			}
			
			if(lastKey == null) throw ("no matching property for short name found: " + shortName + " type: " + type);
			
			if(value != null) {
				this[lastKey] = value; 
			} else {
				delete this[lastKey];
			}
			
			
		}
		
	} else {
		
		if( t != 'function' ) {
			throw "object.set already defined as " + t;
		}
	}
	
}

vitaljs.isArray = function(someVar) {
	
	if( Object.prototype.toString.call( someVar ) === '[object Array]' ) {
	    return true;
	}
	
	return false;
	
}

vitaljs.getLoadedDomains = function() {

	if( VitalServiceJson.SINGLETON == null ) throw ( "vitaljs singleton not available" );
	
	return VitalServiceJson.SINGLETON.getLocalSchemaList();
	
}


vitaljs._toDomainGraphObject = function(schemaObj) {

	var d = {
		URI: schemaObj.domainURI
	};
	
	d[VitalServiceJson.VITAL_CORE_URI + "#hasName"] = schemaObj.name;
	
	return d;
	
}


/**
 * Lists parent domains of this domain object
 * @param domainObj
 * @returns list of parent domains for this domain
 */
vitaljs.getImportedDomains = function(domainObj) {

	if(domainObj == null) throw "null domainObj";
	if(domainObj.domainURI == null) throw "no domainURI property";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var thisDomain = s.domainsMap[domainObj.domainURI];
	if(thisDomain == null) throw ("domain not loaded, URI: " + domainObj.domainURI);
	
	var r = [];
	
	var parents = thisDomain.parents;
	for(var i = 0; i < parents.length; i++) {
		var parentURI = parents[i];
		var parentDomain = s.domainsMap[parentURI];
		if(parentDomain == null) throw("parent domain " + parentURI + " of " + domainObj.domainURI + " not found");
		
		r.push(parentDomain);
//		r.push(vitaljs._toDomainGraphObject(parentDomain));
		
	}
	
	return r;
	
}


/**
 * Lists all domains that depend on this one
 * @param domainObj
 * @returns list of all dependent domains
 */
vitaljs.getDependentDomains = function(domainObj) {
	

	if(domainObj == null) throw "null domainObj";
	if(domainObj.domainURI == null) throw "no domainURI property";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var thisDomain = s.domainsMap[domainObj.domainURI];
	if(thisDomain == null) throw ("domain not loaded, URI: " + domainObj.domainURI);

	var pool = [domainObj.domainURI];
	
	var processedURIs = [];
	var r = [];
	
	while(pool.length > 0) {
		
		var newPool = [];
		
		for(var i = 0 ; i < pool.length; i++) {
			
			var parentURI = pool[i];
			
			for( var j = 0 ; j < s.loaded.parents.length; j++) {
				
				var p = s.loaded.parents[j];
				
				if(p == parentURI && processedURIs.indexOf(p) < 0) {
					
					var d = s.domainsMap[p];
					
					if(d == null) throw ("runtime error: domain not found: " + p);
					
					processedURIs.push(p);
//					r.push(vitaljs._toDomainGraphObject(d));
					r.push(d);
					
					newPool.push(p);
					
				}
				
			}
			
		}
		
		pool = newPool;
		
	}
	
	return r;
	
}

/**
 * Returns the result list of all schemas available remotely
 * @returns array of DomainModel objects
 */
vitaljs.getSchemaList = function(successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.getSchemaList(successCB, errorCB);
}

/**
 * Returns dependencies of a schema, parents or all ancestors based on recursive flag
 * @returns array of DomainModel objects
 */
vitaljs.getDependenciesOfSchema = function(schemaName, recursive, successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.getDependenciesOfSchema(schemaName, recursive, successCB, errorCB);
}

/**
 * Returns an array of json schema objects, the original array is wrapped with {name:, URI:, schema: [] }, the order is preserved
 */
vitaljs.getSchemas = function(schemaNamesArray, successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.getSchemas(schemaNamesArray, successCB, errorCB);
}

/**
 * Loads given schema objects ( {name:, URI:, schema: [] } in the given order
 */
vitaljs.loadSchemas = function(jsonSchemasArray, successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.loadSchemas(jsonSchemasArray, successCB, errorCB);
}

/**
 * Purges currently loaded domain schemas
 */
vitaljs.purgeSchemas = function(successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.purgeSchemas(successCB, errorCB);
}

/**
 * Returns locally loaded domains
 */
vitaljs.getLocalSchemaList = function(successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.getLocalSchemaList(successCB, errorCB);
}

/**
 * Unloads schema
 */
vitaljs.unloadSchema = function(schemaURI, successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.unloadSchema(schemaURI, successCB, errorCB);
}

/**
 * determines if thisClass is a subclass of thatClass
 * @param thisClass either class URI string or class object with URI property
 * @param thatClass either class URI string or class object with URI property 
 */
vitaljs.isSubclassOf = function(thisClass, thatClass) {
	
	if(thisClass == null) throw ("thisClass cannot be null");
	if(thatClass == null) throw ("thatClass cannot be null");
	
	var thisURI = null;
	var thatURI = null;
	
	if(typeof(thisClass) == 'string') {
		thisURI = thisClass;
	} else if(typeof(thisClass) == 'object') {
		thisURI = thisClass.URI;
		if(thisURI == null) throw "null thisClass.URI"; 
	}
	
	if(typeof(thatClass) == 'string') {
		thatURI = thatClass;
	} else if(typeof(thatClass) == 'object') {
		thatURI = thatClass.URI;
		if(thatURI == null) throw "null thatClass.URU";
	}
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var thisSchema = s.loaded[thisURI];
	if(thisSchema == null) throw "class not found: " + thisURI;
	
	var thatSchema = s.loaded[thatURI]
	if(thatSchema == null) throw "class not found: " + thatURI;
	
	var allSuperclasses = s.listSuperclasses(thisURI, [], false);

	if(allSuperclasses.indexOf(thatURI) >= 0) {
		return true;
	}
	
	return false;
	
}

/**
 * determines if thisClass is a superclass of thatClass
 * @param thisClass either class URI string or class object with URI property
 * @param thatClass either class URI string or class object with URI property
 * @returns true if this class is a superclass of that class
 */
vitaljs.isSuperclassOf = function(thisClass, thatClass) {
	//reverse it
	return vitaljs.isSubclassOf(thatClass, thisClass);
}

/**
 * determines if thisProperty is a subproperty of thatProperty
 * @param thisClass either property URI string or property object with URI property
 * @param thatClass either Property URI string or property object with URI property
 * @returns true if this property is a subproperty of that property
 */
vitaljs.isSubpropertyOf = function(thisProperty, thatProperty) {
	
	if(thisProperty == null) throw ("thisProperty cannot be null");
	if(thatProperty == null) throw ("thatProperty cannot be null");
	
	var thisURI = null;
	var thatURI = null;
	
	if(typeof(thisProperty) == 'string') {
		thisURI = thisProperty;
	} else if(typeof(thisProperty) == 'object') {
		thisURI = thisProperty.URI;
		if(thisURI == null) throw "null thisProperty.URI"; 
	}
	
	if(typeof(thatProperty) == 'string') {
		thatURI = thatProperty;
	} else if(typeof(thatProperty) == 'object') {
		thatURI = thatProperty.URI;
		if(thatURI == null) throw "null thatProperty.URU";
	}
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var thisSchema = s.propertiesMap[thisURI];
	if(thisSchema == null) throw "property not found: " + thisURI;
	
	var thatSchema = s.propertiesMap[thatURI]
	if(thatSchema == null) throw "property not found: " + thatURI;
	
	var allSubproperties = s.listSuperproperties(thisURI, [], false);

	if(allSubproperties.indexOf(thatURI) >= 0) {
		return true;
	}
	
	return false;
	
}

/**
 * determines if thisProperty is a superproperty of thatProperty
 * @param thisClass either property URI string or property object with URI property
 * @param thatClass either Property URI string or property object with URI property
 * @returns true is this property is a superproperty of that property 
 */
vitaljs.isSuperpropertyOf = function(thisProperty, thatProperty) {
	//reverse it
	return vitaljs.isSubpropertyOf(thatProperty, thisProperty);
}

/**
 * returns list of subclasses for given classObj
 * @param classObj object with class URI property
 * @param direct if true direct subclasses only
 * @returns list of subclasses
 */
vitaljs.getSubclasses = function(classObj, direct) {
	
	if(classObj == null) throw "classObj cannot be null";
	if(classObj.URI == null) throw "classObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );

	var allSubclasses = s.listSubclasses(classObj.URI, [], direct);
	
	var r = [];
	
	for(var i = 0 ; i < allSubclasses.length; i++) {
		
		var u = allSubclasses[i];
		
		if(u == classObj.URI) continue;
		
		r.push({URI: u});
		
	}
	
	return r;
	
}

/**
 * List super classes of given class
 * @param classObj with class URI property
 * @param direct if true only parent class will be returned
 */
vitaljs.getSuperclasses = function(classObj, direct) {
	
	if(classObj == null) throw "classObj cannot be null";
	if(classObj.URI == null) throw "classObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var allSuperclasses = s.listSuperclasses(classObj.URI, [], direct);
	
	var r = [];
	
	for(var i = 0 ; i < allSuperclasses.length; i++) {
		
		var u = allSuperclasses[i];
		
		if(u == classObj.URI) continue;
		
		r.push({URI: u});
		
	}
	
	return r;
	
}

/**
 * Returns list of subproperties for giver property
 * @param propertyObj object with property URI
 * @param direct if true returns only direct children
 * @returns list of subproperties
 */
vitaljs.getSubproperties = function(propertyObj, direct) {
	
	if(propertyObj == null) throw "propertyObj cannot be null";
	if(propertyObj.URI == null) throw "propertyObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var allSubproperties = s.listSubproperties(propertyObj.URI, [], direct);
	
	var r = [];
	
	for(var i = 0 ; i < allSubproperties.length; i++) {
		
		var u = allSubproperties[i];
		
		if(u == propertyObj.URI) continue;
		
		r.push({URI: allSubproperties[i]});
		
	}
	
	return r;
	
}

/**
 * Returns list of superproperties for given property
 * @param propertyObj object with property URI
 * @param direct if true returns only parent property
 * @returns list of superproperties
 */
vitaljs.getSuperproperties = function(propertyObj, direct) {
	
	if(propertyObj == null) throw "propertyObj cannot be null";
	if(propertyObj.URI == null) throw "propertyObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var allSuperproperties = s.listSuperproperties(propertyObj.URI, [], direct);
	
	var r = [];
	
	for(var i = 0 ; i < allSuperproperties.length; i++) {
		
		var u = allSuperproperties[i];
		
		if(u == propertyObj.URI) continue;
		
		r.push({URI: u});
		
	}
	
	return r;
	
}

/**
 * Returns loaded classes optionally limited to a particular domain 
 * @param optionalDomainURIFilter
 * @returns list of class objects
 */
vitaljs.getLoadedClasses = function(optionalDomainURIFilter) {
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var r = [];
	
	for(var key in s.domainsMap) {

		if ( ! s.domainsMap.hasOwnProperty(key) ) continue;
		
		var domain = s.domainsMap[key];
		
		if(optionalDomainURIFilter != null && optionalDomainURIFilter != domain.domainURI) {
			continue;
		}
		
		for(var i = 0 ; i < domain.schemas.length; i++) {
			
			r.push({URI: domain.schemas[i].uri});
			
		}
		
		
	}
	
	return r;
	
}

/**
 * Returns properties associated with a class
 * @param classObj object with class URI
 * @param direct if true ignores properties defined in superclasses
 * @returns list of property objects
 */
vitaljs.getClassProperties = function(classObj, direct) {
	
	if(classObj == null) throw "classObj cannot be null";
	if(classObj.URI == null) throw "classObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );

	var domainURIs = null;
	
	if(direct) {
		domainURIs = [classObj.URI];
	} else { 
		domainURIs = s.listSuperclasses(classObj.URI, [], false);
	}
	
	var r = [];
	var alreadySet = {URI: true, type: true, types: true};
	
	
	for(var key in s.propertiesMap) {
		
		if ( ! s.propertiesMap.hasOwnProperty(key) )  continue;
		
		var propertyObj = s.propertiesMap[key];
		
		var domains = propertyObj.domainClassesURIs;
		
		for(var i = 0; i < domains.length; i++) {
			
			var domain = domains[i];

			if( domainURIs.indexOf(domain) >= 0 ) {
			
				r.push({URI: key});
				alreadySet[key] = true;
				
			}
			
		}
		
	}
	
	//cover the case with extended properties
	var schema = s.loaded[classObj.URI];
	if(schema != null) {
		var ps = schema.properties;
		for(var k in ps) {
			
			if ( ! ps.hasOwnProperty(k) )  continue;
			
			if(alreadySet[k] == true) continue;
			
			r.push({URI: k});
			
		}
		
	}
	
	return r;
	
}  

/**
 * Returns property metadata {"URI": ..., "domainClassesURIs": [ ... ], "shortName": ..., "multipleValues": boolean, "type" : "StringProperty"}
 * @param propertyURI 
 * @returns metadata or null
 */
vitaljs.getPropetyMetadata = function(propertyURI) {
	var s = VitalServiceJson.SINGLETON;
	return s.propertiesMap[propertyURI];
}

/**
 * returns true if class exists, false otherwise
 */
vitaljs.isClassLoaded = function(classURI) {
	var s = VitalServiceJson.SINGLETON;
	return s.loaded[classURI] != null;
}


if(typeof(module) !== 'undefined') {
	
	module.exports = {
		vitaljs: vitaljs,
		VitalServiceJson: VitalServiceJson
	};
	
};
/**
 * Represents a haley session, two states authenticated / not authenticated
 * @param implementation
 * @returns
 */
HaleySession = function(implementation){
	//haley session maintains its state
	this.impl = implementation;
	//default channel URI for output messages
	this.defaultChannelURI = null;
	//default endpoint URI for output messages
	this.defaultEndpointURI = null;
	//default userID for output messages
	//only used in with anonymous sessions 
	this.defaultUserID = null;
	//default userName for output messages
	this.defaultUserName = null;
}

HaleySession.prototype.isAuthenticated = function() {
	return this.impl.isAuthenticated(this);
}

HaleySession.prototype.getAuthSessionID = function() {
	return this.impl.getAuthSessionID(this);
}

HaleySession.prototype.getSessionID = function() {
	return this.impl.getSessionID(this);
}

/**
 * returns current auth account (login) used to authenticate
 */
HaleySession.prototype.getAuthAccount = function() {
	return this.impl.getAuthAccount(this);
}



/**
 * 
 * all callbacks have node.js style params: ( error , results... )
 * 
 * @param implementation
 * @param syncdomains
 * @returns
 */
HaleyAPI = function(implementation, syncdomains, callback, logger) {
	this.logger = logger != null ? logger : console;
	this.impl = implementation;
	this.impl.logger = this.logger;
	if(syncdomains) {
		throw "syncdomains not supported yet";
	}
	var _this = this;
	this.impl.initialize(syncdomains, function(error){
		
		if(error) {
			callback(error);
			return;
		}
		
		callback(null, _this);
		
	});
}

HaleyAPI.prototype.setLogger = function(logger){
	if(logger == null) throw new Error("logger cannot be null"); 
	this.impl.logger = logger;
	this.logger = logger;
}

HaleyAPI.prototype.getLogger = function() {
	return this.logger;
}

/**
 * Authenticates haley session or throws exception if already authenticated or auth error occured
 */
HaleyAPI.prototype.authenticateSession = function(haleySession, username, password, callback) {
	this.impl.authenticateSession(haleySession, username, password, callback);
}

/**
 * Authenticates haley session or throws exception if already authenticated or auth error occured
 */
HaleyAPI.prototype.authenticateSessionWithAccountID = function(haleySession, username, password, accountID, callback) {
	this.impl.authenticateSessionWithAccountID(haleySession, username, password, accountID, callback);
}


HaleyAPI.prototype.close = function(callback) {
	this.impl.close(callback);
}

HaleyAPI.prototype.closeAllSessions = function(callback) {
	this.impl.closeAllSessions(callback);
}

HaleyAPI.prototype.closeSession = function(haleySession, callack) {
	this.impl.closeSession(haleySession, callack);
}


/**
 * Deregisters given callback based on function equality. request, types and default callback. 
 * @param haleySession
 * @param callback
 * @returns true if a callback was removed, false if not found
 */
HaleyAPI.prototype.deregisterCallback = function(haleySession, callback) {
	return this.impl.deregisterCallback(haleySession, callback);
}


/**
 * Returns current default callback for this session
 * @returns current callback
 */
HaleyAPI.prototype.getDefaultCallback = function(haleySession) {
	return this.impl.getDefaultCallback(haleySession);
}



//getActiveThreadCount()
HaleyAPI.prototype.getSessions = function() {
	return this.impl.getSessions();
}

//isQuiescent()


/**
 * Returns a list of current typed callbacks. List element: 
 * { type: 'request', 'type', 'default'
 * 	 //for 'type'
 *   primaryURIs: [],
 *   classesURIs: [],
 *   callback: function,
 *   //for 'request'
 *   requestURI: string
 * }
 */
HaleyAPI.prototype.listCallbacks = function(haleySession) {
	return this.impl.listCallbacks(haleySession);
}



/**
 * @param haleySession
 * @param callback a closure( error, List<Channel>)
 */
HaleyAPI.prototype.listChannels = function(haleySession, callback) {
	this.impl.listChannels(haleySession, callback);
}


/**
 * In some implementations the session may be already authenticated
 */
HaleyAPI.prototype.openSession = function(callback) {
	this.impl.openSession(callback);
}


/**
 * Registers a message type callback
 * @param haleySession
 * @param classURIorList
 * @param subclasses (boolean)
 * @param callback a closure (ResultList message)
 * @return true if registered, false if already registered
 */
HaleyAPI.prototype.registerCallback = function(haleySession, classURIorList, subclasses, callback) {
	return this.impl.registerCallback(haleySession, classURIorList, subclasses, callback);
}

/**
 * Registers default (fallback) callback
 * @param haleySession
 * @param callback, null value deregisters default callback (ResultList message)
 * @return true if this is a new or different callback, false if this handler is already registered
 */
HaleyAPI.prototype.registerDefaultCallback = function(haleySession, callback) {
	return this.impl.registerDefaultCallback(haleySession, callback);
}

/**
 * Registers a request callback
 * @param haleySession
 * @param aimpMessage
 * @param callback a closure (ResultList message)
 * @return true if this is a new or different callback, false if this handler is already registered
 */
HaleyAPI.prototype.registerRequestCallback = function(haleySession, aimpMessage, callback) {
	return this.impl.registerRequestCallback(haleySession, aimpMessage, callback);
}



/**
 * sends a message. The callback 
 * @param haleySession
 * @param aimpMessage
 * @param graphObjectsList
 * @param callback - gets notified if the message was sent successfully - null error - or not
 */
HaleyAPI.prototype.sendMessage = function(haleySession, aimpMessage, graphObjectsList, callback) {
	this.impl.sendMessage(haleySession, aimpMessage, graphObjectsList, callback);
}

/**
 * sends a message with associated requestCallback
 * @param haleySession
 * @param aimpMessage 
 * @param graphObjectsList
 * @param callback - gets notified if the message was sent successfully - null error - or not
 * @param requestCallback - the callback that is registered for this requestURI 
 * @return true if this is a new or different callback, false if this handler is already registered
 */
HaleyAPI.prototype.sendMessageWithRequestCallback = function(haleySession, aimpMessage, graphObjectsList, callback, requestCallback) {
	return this.impl.sendMessageWithRequestCallback(haleySession, aimpMessage, graphObjectsList, callback, requestCallback);
}

HaleyAPI.prototype.unauthenticateSession = function(haleySession, callback) {
	this.impl.unauthenticateSession(haleySession, callback);
}


/**
 * Adds reconnect listener that gets notified on reconnect event.
 * @return true if new listener, false if already registered.
 */
HaleyAPI.prototype.addReconnectListener = function(reconnectListener) {
	return this.impl.addReconnectListener(reconnectListener);
}

/**
 * Removes reconnect listener.
 * @return true if listener found, false otherwise.
 */
HaleyAPI.prototype.removeReconnectListener = function(reconnectListener) {
	return this.impl.removeReconnectListener(reconnectListener);
}


/**
 * callback called with String error, List<DomainModel>
 */
HaleyAPI.prototype.listServerDomainModels = function(callback) {
	return this.impl.listServerDomainModels(callback);
}

/**
 * callback called with String error
 */
HaleyAPI.prototype.validateDomainModels = function(failIfListElementsDifferent, callback) {
	
	var _this = this;
	
	this.listServerDomainModels(function(error, models){
		
		try {
			
			if(error) {
				callback("Error when listing server domain models: " + error);
				return;
			}
		
			
			var localDomains = {};
			var serverDomains = {};
			
			
			for(var i = 0 ; i < models.length; i++) {
				var dm = models[i];
				serverDomains[dm.URI] = dm;
			}
			
			var localDomainsList = [];
			
			for(var i = 0 ; i < VitalServiceJson.SINGLETON.dynamicDomains.length; i++) {
				var ld = VitalServiceJson.SINGLETON.dynamicDomains[i];
				var dm = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-core#DomainModel', URI: ld.domainURI});
				dm.set('name', ld.name);
				dm.set('domainOWLHash', ld.domainOWLHash);
				dm.set('versionInfo', ld.version);
				localDomains[dm.URI] = dm;
				localDomainsList.push(dm);
			}
			
			if(failIfListElementsDifferent) {
				
				var localURIs = Object.keys(localDomains);
				var serverURIs = Object.keys(serverDomains);
				
				//remove all
//				localURIs.removeAll(serverURIs)
				for(var i = 0; i < serverURIs.length; i++) {
					var su = serverURIs[i];
					var index = localURIs.indexOf(su);
					if(index >= 0) {
						localURIs.splice(index, 1);
					}
				}
				
				if(localURIs.length > 0) {
					callback("The following domains are loaded only locally: " + localURIs.join(", "));
					return 
				}
				
				localURIs = Object.keys(localDomains);
//				serverURIs.removeAll(localURIs)
				for(var i = 0 ; i < localURIs.length; i++) {
					var lu = localURIs[i];
					var index = serverURIs.indexOf(lu);
					if(index >= 0) {
						serverURIs.splice(index, 1);
					}
				}
				
				if(serverURIs.length > 0) {
					callback("The following domains are loaded only on the server: " + serverURIs.join(", "));
					return 
				}
				 
			}
			
			
			var differentDomains = [];
			
			for(var i = 0 ; i < localDomainsList.length; i++) {
				
				var localDomain = localDomainsList[i];
				
				var serverDomain = serverDomains[localDomain.URI];
				
				if(!failIfListElementsDifferent && serverDomain == null) {
					continue;
				}

				var hash1 = localDomain.get('domainOWLHash');
				var hash2 = serverDomain.get('domainOWLHash');
				var v1 = localDomain.get('versionInfo');
				var v2 = serverDomain.get('versionInfo');

				if(hash1 != null && hash1 != hash2) {
					differentDomains.push(localDomain.URI + " local hash: " + hash1 + " remote hash: " + hash2);
					continue;
				}			

				if(v1 != null && v1 != v2) {
					differentDomains.push(localDomain.URI + " local version: " + v1 + " remote version: " + v2);
					continue;
				}		
				
				
			}
			
			if(differentDomains.length > 0) {
				callback("Different domains detected [" + differentDomains.length + "]: " + differentDomains.join(", "));
				return;
			}
			
			callback(null);
			
		} catch(e) {
			_this.logger.error(e);
			callback("Internal error: " + e);
		}
		
	});
	
}

/**
 * Takes care of file upload in response to a File Question
 * @param haleySession
 * @param fileQuestionMessage [QuestionMessage, FileQuestion]
 * @param fileObject, an object 
 * 	{ 
 * 		file: <from file inputfile>,
 * 		accountURIs: <list of additional accountsURIs to be added to file node>,
 *      fileNodeClass: optional fileNodeClass, default: 'http://vital.ai/ontology/vital#FileNode',
 *      parentNodeURI: optional parent of the filenode, defaults to accountURI,
 *      progressListener: optional progress listener that is called with (loaded, total) bytes
 *  }
 *  selected in some form
 * @param callback (error, fileNode)
 */
HaleyAPI.prototype.uploadFileInBrowser = function(haleySession, fileQuestionMessage, fileObject, callback) {
	this.impl.uploadFileInBrowser(haleySession, fileQuestionMessage, fileObject, callback);
}

/**
 * Takes care of file upload in response to a File Question in cordova
 * @param haleySession
 * @param fileQuestionMessage [QuestionMessage, FileQuestion]
 * @param fileObject, an object 
 * 	{ 
 * 		file: <from file inputfile>,
 * 		accountURIs: <list of additional accountsURIs to be added to file node>,
 *      fileNodeClass: optional fileNodeClass, default: 'http://vital.ai/ontology/vital#FileNode',
 *      parentNodeURI: optional parent of the filenode, defaults to accountURI,
 *      progressListener: optional progress listener that is called with (loaded, total) bytes
 *  }
 *  selected in some form
 * @param callback (error, fileNode)
 */
HaleyAPI.prototype.uploadFileInCordova = function(haleySession, fileQuestionMessage, fileObject, callback) {
	this.impl.uploadFileInCordova(haleySession, fileQuestionMessage, fileObject, callback);
}

/**
 * Uploads file in non-browser (nodejs) environment in response to a File Question
 * @param haleySession
 * @param fileQuestionMessage [QuestionMessage, FileQuestion]
 * @param fileObject, an object 
 * 	{ 
 * 		filePath: pathToLocalFile,
 * 		accountURIs: <list of additional accountsURIs to be added to file node>,
 *      fileNodeClass: optional fileNodeClass, default: 'http://vital.ai/ontology/vital#FileNode',
 *      parentNodeURI: optional parent of the filenode, defaults to accountURI
 *  }
 *  selected in some form
 * @param callback (error, fileNode)
 */
HaleyAPI.prototype.uploadFile = function(haleySession, fileQuestionMessage, fileObject, callback) {
	this.impl.uploadFile(haleySession, fileQuestionMessage, fileObject, callback);
}

/**
 * Cancels a spawned file upload
 * @param haleySession
 * @param fileQuestionMessage
 * @param callback
 */
HaleyAPI.prototype.cancelFileUpload = function(haleySession, fileQuestionMessage, callback) {
	this.impl.cancelFileUpload(haleySession, fileQuestionMessage, callback);
}


/**
 * Returns the download URL for given file node. Private URLs contain sessionID.
 */
HaleyAPI.prototype.getFileNodeDownloadURL = function(haleySession, fileNode) {
	return this.impl.getFileNodeDownloadURL(haleySession, fileNode);
}

/**
 * Returns the download URL for given file node URI
 */
HaleyAPI.prototype.getFileNodeURIDownloadURL = function(haleySession, fileNodeURI) {
	return this.impl.getFileNodeURIDownloadURL(haleySession, fileNodeURI);
}


/**
 * add a listener notified with (error, haleySession, aimpMessage, payload)
 * returns true if added, false if already added
 */
HaleyAPI.prototype.addAIMPMessageSentListener = function(listener) {
	return this.impl.addAIMPMessageSentListener(listener);
}

/**
 * remove an AIMP message sent listener
 * returns true if removed, false if was not added 
 */
HaleyAPI.prototype.removeAIMPMessageSentListener = function(listener) {
	return this.impl.removeAIMPMessageSentListener(listener);
} 


/**
 * False by default. When enabled the client attempts to re-authenticate if current session was expired/not found.
 */
HaleyAPI.prototype.setCredentialsCacheEnabled = function(enabled) {
	this.impl.credentialsCacheEnabled = enabled;
}

HaleyAPI.prototype.isCredentialsCacheEnabled = function() {
	return this.impl.credentialsCacheEnabled;
}

//nodejs specific
if(typeof(module) !== 'undefined') {
//	module.exports = {
//		HaleySession: HaleySession,
//		HaleyAPI: HaleyAPI
//	}; 
	module.exports = HaleyAPI;
};
HaleyAPIVitalServiceImpl = function(vitalService) {
	if(HaleyAPIVitalServiceImpl.SINGLETON != null) throw "only single instance of HaleyAPIVitalServiceImpl allowed";
	HaleyAPIVitalServiceImpl.SINGLETON = this;
	this.vitalService = vitalService;
	this.haleySessionSingleton = null;
	this.streamName = 'haley';
	
	//default logger
	this.logger = console; 
	
	this.handlers = [];
	
	//requestURI -> callback
	this.requestHandlers = {};
	
	this.defaultHandler = null;
	
	this.handlerFunction = null;

	this.logEnabled = true;
	
	//classesURIs is an object for better efficiency
	//{ callback, primaryURIs, classesURIs } 
	
	this.reconnectListeners = [];
	
	var _this = this;
	
	this.vitalService.impl.reconnectHandler = function(){
	
		if(_this.logEnabled) {
			
			_this.logger.info("Notifying " + _this.reconnectListeners.length + ' reconnect listener(s)');
			
		}
		
		for(var i = 0 ; i < _this.reconnectListeners.length; i++) {
				
			_this.reconnectListeners[i]();
				
		}
		
	};
	
	//this timestamp is updated when a new non-hearbeat or non-loggedin/out message is sent
	this.lastActivityTimestamp = null; 
	
	this.credentialsCacheEnabled = false;
	this.cachedCredentials = {};
	
	
	//from vital service url
	this.saasServerURL = null;
	
	if( !this.vitalService.impl.url ) {
		throw "No eventbusURL available in vitalService object";
		return;
	}
	
	var protocol = null;
	var host = null;
	//port ?
	
	if(typeof(module) === 'undefined') {
		
		var parser  = document.createElement("a");
		parser.href = this.vitalService.impl.url;
		
		protocol = parser.protocol;
		host = parser.host;
		
	} else {
		
		var url = require('url').parse(this.vitalService.impl.url);

		protocol = url.protocol;
		host = url.host;
		
	}

	this.saasServerURL = protocol + '//' + host;

	this.aimpMessageSentListeners = [];
	
}

HaleyAPIVitalServiceImpl.SINGLETON = null;

HaleyAPIVitalServiceImpl.prototype.initialize = function(syncdomains, callback) {
	if(syncdomains) {
		callback('sync domains not supported yet in this implementation');
		return;
	}
	
	//ok
	callback();
	
}

HaleyAPIVitalServiceImpl.prototype._checkSession = function(haleySession) {
	
	if(this.haleySessionSingleton == null) return 'no active haley session found';
	
	if(this.haleySessionSingleton != haleySession) return 'unknown haley session';
	
	return null;
	
}

HaleyAPIVitalServiceImpl.prototype._cleanup = function() {
	
	this.handlers = [];
	this.requestHandlers = {};
	this.defaultHandler = null;
	
}

/* SESSION RELATED CALLS */
HaleyAPIVitalServiceImpl.prototype.isAuthenticated = function(haleySession) {
	
	var e = this._checkSession(haleySession);
	if(e) throw e;
	
	//check if vital
	return this.vitalService.getAppSessionID() != null;
	
}

HaleyAPIVitalServiceImpl.prototype.getAuthSessionID = function(haleySession) {

	var e = this._checkSession(haleySession);
	if(e) throw e;
	
	//check if vital
	return this.vitalService.getAppSessionID();
	
}

HaleyAPIVitalServiceImpl.prototype.getSessionID = function(haleySession) {
	
	var e = this._checkSession(haleySession);
	if(e) throw e;
	
	return this.vitalService.impl.sessionID;
	
}

HaleyAPIVitalServiceImpl.prototype.getAuthAccount = function(haleySession) {
	
	var e = this._checkSession(haleySession);
	if(e) throw e;
	
	return this.vitalService.getCurrentLogin();
	
}


/* END OF SESSION RELATED CALLS */


HaleyAPIVitalServiceImpl.prototype.authenticateSession = function(haleySession, username, password, callback) {
	this.authenticateSessionWithAccountID(haleySession, username, password, null, callback);
}
HaleyAPIVitalServiceImpl.prototype.authenticateSessionWithAccountID = function(haleySession, username, password, accountID, callback) {
	
	var e = this._checkSession(haleySession);
	if(e) {
		callback(e);
		return;
	}
	
	if(haleySession.isAuthenticated()) {
		callback('session already authenticated');
		return;
	}
	
	var _this = this;
	
	this.vitalService.callFunction(VitalServiceWebsocketImpl.vitalauth_login, {loginType: 'Login', username: username, password: password, accountID: accountID}, function(loginSuccess){
			
		if(_this.logEnabled) {
			_this.logger.info("auth success: ", loginSuccess);
		}

		var sessionID = haleySession.getSessionID();

		if(_this.credentialsCacheEnabled) {
			_this.cachedCredentials[sessionID] = {username: username, password: password, accountID: accountID};
		}
		
		_this._sendLoggedInMsg(function(error){

			if(_this.logEnabled) {
				_this.logger.info("loggedin msg sent");
			}
			
			if(error) {
				callback(error);
				return;
			}
			
			//success
			callback(null, loginSuccess.first());
			
		});
		
			
	}, function(loginError) {
			
		_this.logger.error("Login error: ", loginError);
		
		callback(loginError);
	});
		
}


HaleyAPIVitalServiceImpl.prototype.closeAllSessions = function(callback) {

	
	if(this.haleySessionSingleton == null) {
		callback();
		return;
	}
	
	this.closeSession(haleySession, callack);
	
}

HaleyAPIVitalServiceImpl.prototype.close = function(callback) {
	
	var _this = this;
	
	this.vitalService.close(function(){
		
		_this.logger.info("haley api closed");
		
		callback(null);
		
	}, function(error){
		
		_this.logger.error(error);
		
		callback(error);
		
	});
	
}

HaleyAPIVitalServiceImpl.prototype.closeSession = function(haleySession, callack) {
	
	var e = this._checkSession(haleySession);
	if(e) throw e;
	
	var _this = this;
	
	var afterUnsubscribed = function() {
		
		//first register stream handler
		_this.vitalService.callFunction(VitalService.JS_UNREGISTER_STREAM_HANDLER, {streamName: _this.streamName, handlerFunction: _this.handlerFunction}, function(succsessObj){
			
			if(_this.logEnabled) {
				_this.logger.info('unregistered handler for stream ' + _this.streamName, succsessObj);
			}
			
			_this.haleySessionSingleton = null;
			
			_this._cleanup();
			callack();
			
			
		}, function(error){

			_this.logger.error('couldn\'t deregister messages handler', error);
			
			callback(error);
			
		});
		
	};
	
	var afterUnauth = function(){
		
		//unsubscribe first
		_this.vitalService.callFunction(VitalService.VERTX_STREAM_UNSUBSCRIBE, {streamName: _this.streamName}, function(succsessObj){
			
			if(_this.logEnabled) {
				_this.logger.info("unsubscribed from stream " + _this.streamName, succsessObj); 
			}
			
			afterUnsubscribed();
			
		}, function(errorObj) {
			
			_this.logger.error("Error when unsubscribing from stream", errorObj);
			
			callack(errorObj);
			
		});
		
		//do nothing
		
	}; 
	
	if(haleySession.isAuthenticated()) {
		
		//logout current user
		this.unauthenticateSession(haleySession, function(error){
			
			if(error) {
				_this.logger.error(error);
			}

			afterUnauth();
			
		});
		
	} else {
		
		afterUnauth();
		
		
	}

	
}


/**
 * Deregisters given callback based on function equality. request, types and default callback. 
 * @param haleySession
 * @param callback
 * @returns true if a callback was removed, false if not found
 */
HaleyAPIVitalServiceImpl.prototype.deregisterCallback = function(haleySession, callback) {
	
	var e = this._checkSession(haleySession);
	if(e) {
		throw e
	}
	
	if(this.defaultHandler != null && this.defaultHandler == callback) {
		this.defaultHandler = null;
		return true;
	}
	
	for( var i = 0 ; i < this.handlers.length; i++ ) {
		
		var h = this.handlers[i];
		
		if(h.callback == callback) {
			
			this.handlers.splice(i, 1);
			
			return true;
		}
		
	}
	
	//request handlers are stored in a map for efficient access
	this.requestHandlers.prototype
	
	for (var requestURI in this.requestHandlers) {
	    if (this.requestHandlers.hasOwnProperty(requestURI)) {
	        // do stuff
	    	var cb = this.requestHandlers[requestURI];
	    	if(cb == callback) {
	    		delete this.requestHandlers[requestURI];
	    		return true;
	    	}
	    }
	}
	
	return false;
	
}


/**
 * Returns current default callback for this session
 * @returns current callback
 */
HaleyAPIVitalServiceImpl.prototype.getDefaultCallback = function(haleySession) {
	var e = this._checkSession(haleySession);
	if(e) {
		throw e
	}
	return this.defaultHandler;
}

//downloadBinary(HaleySession, String, Channel)
//downloadBinary(HaleySession, String, Channel, HaleyCallback)
//getActiveThreadCount()
HaleyAPIVitalServiceImpl.prototype.getSessions = function() {
	var l = [];
	if(this.haleySessionSingleton != null) {
		l.push(this.haleySessionSingleton);
	}
	return l;
}

//isQuiescent()

HaleyAPIVitalServiceImpl.prototype._streamHandler = function(msgRL) {

	if(this.logEnabled) {
		this.logger.info("Stream " + this.streamName + "received message: ", msgRL);
	}
	
	var m = msgRL.first();
	
//	var payload = [];
//	
//	for(var i = 1 ; i < msgRL.results.length; i++) {
//		
//		payload.push(msgRL.results[i].graphObject);
//		
//	}
	
	var c = 0;
	
	var type = m.type;
	
	//requestURI handler
	var requestURI = m.get('requestURI');
	
	if(requestURI != null) {
		
		var h = this.requestHandlers[requestURI];
		
		if(h != null) {
			
			if(this.logEnabled) {
				this.logger.info("Notifying requestURI handler", requestURI);
			}
			
			var cbRes = h(msgRL);
			
			if(cbRes != null && cbRes == false) {
				
				if(this.logEnabled) {
					this.logger.info("RequestURI handler returned false, unregistering");
				}
				
				delete this.requestHandlers[requestURI];
				
			} else {
				
				if(this.logEnabled) {
					
					this.logger.info("RequestURI handler returned non-false, still regsitered");
					
				} 
					
				
			}
			
			return;
			
		}
		
	}
	
	
	//primary classes
	for(var i = 0 ; i < this.handlers.length; i++) {
		
		var h = this.handlers[i];
		
		if(h.primaryURIs[type] == true) {
			if(this.logEnabled) {
//				this.logger.info("Notifying primary type handler: ", h.primaryURIs);
			}
			h.callback(msgRL);
			c++;
			return;
		}
		
		
	}
	
	for(var i = 0 ; i < this.handlers.length; i++) {
		
		var h = this.handlers[i];
		
		if(h.classesURIs[type] == true) {
			
			if(this.logEnabled) {
//				this.logger.info("Notifying secondary type handler: ", h.classesURIs);
			}
			h.callback(msgRL);
			c++;
			return;
			
		}
		
	}
	
	if(this.defaultHandler != null) {
		
		if(this.logEnabled) {
//			this.logger.info("Notifying default handler");
		}
		
		this.defaultHandler(msgRL);
		
		return;
	}
	
	
	if(this.logEnabled) {
		this.logger.info("Notified " + c + " msg handlers");
	}
	
	//notify handlers if found
}

HaleyAPIVitalServiceImpl.prototype._sendLoggedInMsg = function(callback) {
	
	var _this = this;
	
	var msg = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#UserLoggedIn'});
	
	this.sendMessage(this.haleySessionSingleton, msg, [], function(error){
		
		if(error) {
			_this.logger.error("Error when sending loggedin message: ", error);
			callback(error);
		} else {
			callback(null);
		}
		
	});
}


HaleyAPIVitalServiceImpl.prototype.listCallbacks = function(haleySession) {
	var e = this._checkSession(haleySession);
	if(e) {
		throw e
	}
	
	var l = [];
	
	for (var requestURI in this.requestHandlers) {
	    if (this.requestHandlers.hasOwnProperty(requestURI)) {
	        // do stuff
	    	var cb = this.requestHandlers[requestURI];
	    	l.push({
	    		type:'request',
	    		callback: cb,
	    		requestURI: requestURI
	    	});
	    }
	}
	
	for(var i = 0 ; i < this.handlers.length; i++) {
		
		var h = this.handlers[i];
		
		l.push({
			type:'type', 
			callback: h.callback, 
			primaryURIs: h.primaryURIs,
			classesURIs: h.classesURIs
		});
		
	}

	if(this.defaultHandler != null) {
		
		l.push({
			type: 'default',
			callback: this.defaultHandler
		});
		
	}
	
	return l;
}


HaleyAPIVitalServiceImpl.prototype.listChannels = function(haleySession, callback) {
	
	var e = this._checkSession(haleySession);
	if(e) {
		callback(e);
		return;
	}
	
	//prepare channel message
	var msg = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#ListChannelsRequestMessage'});
	msg.URI = this._randomURI();
	
//	@param callback a closure (ResultList message)
	
	var requestCallback = function(message){
		
		callback(null, message);
		
		//remove it always!
		return false;
		
	}
	
	if( ! this.registerRequestCallback(haleySession, msg, requestCallback) ) {
		callback('couldn\'t register request callback');
		return;
	}
	
	var _this = this;
	
//	this.sendMessageWithRequestCallback(haleySession, aimpMessage, graphObjectsList, callback, requestCallback)
	
	this.sendMessage(this.haleySessionSingleton, msg, [], function(error){
		
		if(error) {
			
			_this.logger.error("Error when sending list channel request message: ", error);
			
			callback(error);
			
			_this.deregisterCallback(haleySession, requestCallback);
		}
		
	});
	
}


HaleyAPIVitalServiceImpl.prototype.openSession = function(callback) {
	
	if(this.haleySessionSingleton != null) {
		callback('active session already detected');
		return;
	}
	
	if(this.logEnabled) {
		this.logger.info('subscribing to stream ', this.streamName);
	}
	
	var _this = this;

	this.handlerFunction = function(msgRL){
		_this._streamHandler(msgRL);
	}
	
	//first register stream handler
	this.vitalService.callFunction(VitalService.JS_REGISTER_STREAM_HANDLER, {streamName: this.streamName, handlerFunction: this.handlerFunction}, function(succsessObj){
		
		if(_this.logEnabled) {
			_this.logger.info('registered handler to ' + _this.streamName, succsessObj);
		}
		
		_this.vitalService.callFunction(VitalService.VERTX_STREAM_SUBSCRIBE, {streamName: _this.streamName}, function(succsessObj){
			
			if(_this.logEnabled) {
				_this.logger.info("subscribed to stream " + _this.streamName, succsessObj); 
			}
			
			//session opened
			_this.haleySessionSingleton = new HaleySession(_this);
			
			if(_this.haleySessionSingleton.isAuthenticated()) {
				
				_this._sendLoggedInMsg(function(error){
					
					if(_this.logEnabled) {
						_this.logger.info("LoggedIn msg sent successfully");
					}
					
					if(error) {
						callback(error);
					} else {
						callback(null, _this.haleySessionSingleton);
					}
					
				});
				
			} else {
				
				callback(null, _this.haleySessionSingleton);
				
			}
			
			
			
		}, function(errorObj) {
			
			_this.logger.error("Error when subscribing to stream", errorObj);
			
			callback(errorObj);
			
		});

		
	}, function(error){

		_this.logger.error('couldn\'t register messages handler', error);
		
		callback(error);
		
	});
	
}


/**
 * callback is a closure (AIMP_Message, List<GraphObject>)
 */
HaleyAPIVitalServiceImpl.prototype.registerCallback = function(haleySession, classURIorList, subclasses, callback) {
	
	var e = this._checkSession(haleySession);
	if(e) {
		throw e
	}
	
	for( var i = 0 ; i < this.handlers.length; i++ ) {
		
		if( this.handlers[i].callback == callback ) {
			this.logger.warn("handler already registered ", callback);
			return false;
		}
	}
	
	var primaryURIs = {};
	
	var classesURIs = {};
	
	var inputuris = [];
	
	if(typeof(classURIorList) === 'string') {
		inputuris.push(classURIorList);
	} else {
		inputuris = classURIorList;
	}

	if(inputuris.length == 0) {
		throw "input classes URIs list must not be empty";
	}
	
	
	for(var i = 0 ; i < inputuris.length; i++) {
		
		var classURI = inputuris[i];
		
		if( ! vitaljs.isSubclassOf(classURI, 'http://vital.ai/ontology/vital-aimp#AIMPMessage')) {
			
			throw "" + classURI + " class is not a subclass of http://vital.ai/ontology/vital-aimp#AIMPMessage";
			
		}
		
		primaryURIs[classURI] = true;
		
		classesURIs[classURI] = true;
		
		
		if(subclasses) {
			
			var subclasses = vitaljs.getSubclasses({URI: classURI}, false);
			
			for(var j = 0 ; j < subclasses.length; j++) {
				
				var u = subclasses[j].URI;
				
				classesURIs[u] = true;
				
			}
			
		}
		
	}
	
	//validate if 
	
	this.handlers.push({
		callback: callback,
		primaryURIs: primaryURIs,
		classesURIs: classesURIs
	});
	
	return true;
}



HaleyAPIVitalServiceImpl.prototype.registerDefaultCallback = function(haleySession, callback) {

	var e = this._checkSession(haleySession);
	if(e) {
		throw e
	}
	
	if(callback == null) {
		if(this.defaultHandler == null) {
			return false;
		} else {
			this.defaultHandler = null;
			return true;
		}
	}
	
	if(this.defaultHandler != null && this.defaultHandler == callback) {
		return false;
	} else {
		this.defaultHandler = callback;
		return true;
	}
	
}

HaleyAPIVitalServiceImpl.prototype.registerRequestCallback = function(haleySession, aimpMessage, callback) {

	var e = this._checkSession(haleySession);
	if(e) {
		throw e
	}
	
	if(aimpMessage == null) throw "null aimpMessage";
	if(aimpMessage.URI == null) throw "null aimpMessage.URI";
	if(callback == null) throw "null callback";
	var currentCB = this.requestHandlers[aimpMessage.URI];
	
	if(currentCB == null || currentCB != callback) {
		this.requestHandlers[aimpMessage.URI] = callback;
		return true;
	} else {
		return false;
	}
	
}

//registerDefaultCallback(HaleyCallback)

HaleyAPIVitalServiceImpl.prototype._randomURI = function() {
	return 'http://vital.ai/message/msg-'+ new Date().getTime() + Math.floor(Math.random() * 100000);
}

HaleyAPIVitalServiceImpl.prototype.sendMessage = function(haleySession, aimpMessage, graphObjectsListOrCallback, callback) {
	
	var graphObjectsList = null;
	
	if(arguments.length == 3) {
		callback = graphObjectsListOrCallback;
	} else if(arguments.length == 4) {
		//ok
		graphObjectsList = graphObjectsListOrCallback;
	} else {
		this.logger.error("expected 3 or 4 arguments");
		callback("expected 3 or 4 arguments");
		return;
	}
	
	if(typeof(callback) !== 'function') {
		this.logger.error("callback param must be a function");
		callback("callback param must be a function");
		return;
	}
	
	if(aimpMessage == null) {
		callback("aimpMessage must not be null");
		return;
	}
	
	this.sendMessageImpl(haleySession, aimpMessage, graphObjectsList, 0, callback);
	
}
	
HaleyAPIVitalServiceImpl.prototype.sendMessageImpl = function(haleySession, aimpMessage, graphObjectsList, retryCount, callback) {
	
	if(!vitaljs.isSubclassOf(aimpMessage.type, 'http://vital.ai/ontology/vital-aimp#AIMPMessage')) {
		callback("aimpMessage must be an instance of AIMPMessage class, type: " + aimpMessage.type);
		return;
	}
	
	if(aimpMessage.URI == null) {
		aimpMessage.URI = this._randomURI();
	}
	
	if(aimpMessage.get('channelURI') == null && haleySession.defaultChannelURI != null) {
		aimpMessage.set('channelURI', haleySession.defaultChannelURI);
	}
	
	if(aimpMessage.get('endpointURI') == null && haleySession.defaultEndpointURI != null ) {
		aimpMessage.set('endpointURI', haleySession.defaultEndpointURI);
	}
	
	var updateTimestamp = true;
	
	var msgType = aimpMessage.type;
	
	if(msgType == 'http://vital.ai/ontology/vital-aimp#UserLoggedIn'
		|| msgType == 'http://vital.ai/ontology/vital-aimp#UserLoggedOut'
		|| msgType == 'http://vital.ai/ontology/vital-aimp#UserLeftApp') {
		updateTimestamp = false;
	} else if(msgType == 'http://vital.ai/ontology/vital-aimp#HeartbeatMessage') {
		updateTimestamp = false;
		if(this.lastActivityTimestamp != null) {
			aimpMessage.set('lastActivityTime', this.lastActivityTimestamp);
		}
	}
	
	var sessionID = haleySession.getSessionID();

	var authAccount = haleySession.getAuthAccount();
	
	
	if( authAccount != null ) {
		
		var userID = aimpMessage.get('userID');
		
		var authUserID = authAccount.get('username');

		var masterUserID = aimpMessage.get('masterUserID');
		
		if(masterUserID != null) {

			if(masterUserID != authUserID) {
				callback("aimp masterUserID must be equal to current user userID: " + masterUserID + " vs " + authUserID);
				return;
			}
			
			if(userID == null) {
				callback('aimp message userID is required when tunneling the message with masterUserID');
				return;
			}

			
			if(masterUserID == userID) {
				callback('masterUserID cannot be equal to userID: ' + masterUserID);
				return;
			}
				
		} else {
		
			if(userID == null) {
				aimpMessage.set('userID', authUserID);
			} else {
				if(userID != authUserID) {
					callback('auth userID ' + authUserID + ' does not match one set in message: ' + userID);
					return;
				}
			}
			
			var n = authAccount.get('name');
			aimpMessage.set('userName', n != null ? n : authAccount.get('username'));
			
		}
		
		
		
		
	} else {
		
		
		if( haleySession.tunnelEnabled == true ) {
			callback('tunnel must not be enabled for anonymous sessions');
			return;
		} 
//		this.defaultUserID = null;
//		//default userName for output messages
//		this.defaultUserName = null;
//		//with tunnelEnabled option the message masterUserID will be set 
//		//allowing for different userID set in the message
//		this.tunnelEnabled = false;
		
		if(aimpMessage.get('userID') == null && haleySession.defaultUserID != null) {
			aimpMessage.set('userID', haleySession.defaultUserID);
		}
		
		if(aimpMessage.get('userName') == null && haleySession.defaultUserName != null) {
			aimpMessage.set('userName', haleySession.defaultUserName);
		}
	
		
	}
	
	
	var sid = aimpMessage.get('sessionID');
	if(sid == null) {
		aimpMessage.set('sessionID', sessionID);
	} else {
		if(sid != sessionID) {
			callback('auth sessionID ' + sessionID + " does not match one set in message: " + sid);
		}
	}
	
	var rl = vitaljs.resultList();
	rl.addResult(aimpMessage);
	
	if(graphObjectsList != null) {
		for(var i = 0 ; i < graphObjectsList.length; i++) {
			rl.addResult(graphObjectsList[i]);
		}
	}
	
//	this.vi
	var currentLogin = this.vitalService.getCurrentLogin();
	
	var method = currentLogin != null ? 'haley-send-message' : 'haley-send-message-anonymous';
	
	var _this = this;
	
	this.vitalService.callFunction(method, {message: rl}, function(successRL){
		
		if(_this.logEnabled) {
			_this.logger.info("message sent successfully", successRL);
		}
		
		if(updateTimestamp) {
			_this.lastActivityTimestamp = new Date().getTime();
		}
		
		for(var i = 0 ; i < _this.aimpMessageSentListeners.length; i++) {
			var listener = _this.aimpMessageSentListeners[i];
			listener(haleySession, aimpMessage, graphObjectsList);
		}
		
		callback();
		
	}, function(error){
		
		_this.logger.error("error when sending message: " + error);
		
		if( retryCount == 0 && error && ( 
				error.indexOf('error_denied') == 0 
				|| error.indexOf('Session not found') >= 0
		)) {
			
			var cachedCredentials = _this.credentialsCacheEnabled == true ? _this.cachedCredentials[sessionID] : null; 
			
			if(cachedCredentials != null) {
				
				_this.logger.info("Session not found, re-authenticating...");
				
				//this info updated in vitalservice instance
//				haleySession.authAccount = null
//				haleySession.authenticated = false
//				haleySession.authSessionID = null
//				vitalService.appSessionID = null
				
				_this.authenticateSessionWithAccountID(haleySession, cachedCredentials.username, cachedCredentials.password, cachedCredentials.accountID, function(authError, login){
			
					if(! authError ) {
						_this.logger.info("Successfully reauthenticated the session, sending the message");
						_this.sendMessageImpl(haleySession, aimpMessage, graphObjectsList, retryCount + 1, callback);
						
					} else {
						
						_this.logger.error("Reauthentication attempt failed: ", authError);
						
						callback(error);
						
						return
						
					}
					
				});
				
				return;
				
			}
			
		}
		
		callback(error);
		
	});
	
}

HaleyAPIVitalServiceImpl.prototype.sendMessageWithRequestCallback = function(haleySession, aimpMessage, graphObjectsList, callback, requestCallback) {

	var resp = this.registerRequestCallback(haleySession, aimpMessage, requestCallback);
	
	this.sendMessage(haleySession, aimpMessage, graphObjectsList, callback);
	
	return resp;
	
}

HaleyAPIVitalServiceImpl.prototype.unauthenticateSession = function(haleySession, callback) {

	var e = this._checkSession(haleySession);
	if(e) {
		callback(e);
		return;
	}
	
	var sessionID = haleySession.getSessionID();
	if(sessionID != null) {
		delete this.cachedCredentials[sessionID];
	}
	
	if(!haleySession.isAuthenticated()) {
		callback('session not authenticated');
		return;
	}

	
	//first send logged out message
	var msg = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#UserLoggedOut'});

	var _this = this;
	
	this.sendMessage(haleySession, msg, [], function(error){
		if(error) {
			_this.logger.error("Error when sending logged out msg");
			callback(error);
			return;
		}
		
		_this.vitalService.callFunction(VitalServiceWebsocketImpl.vitalauth_logout, {}, function(logoutSuccess){
			
			if(_this.logEnabled) {
				_this.logger.info("Logout function success", logoutSuccess);
			}
			
			callback();
			
		}, function(logoutError) {
			
			_this.logger.error("Logout function error", logoutError);
			
			callback(logoutError);
			
		});
		
		
	});
	
	

}

//uploadBinary(HaleySession, Channel)
//uploadBinary(HaleySession, Channel, HaleyCallback)




HaleyAPIVitalServiceImpl.prototype.addReconnectListener = function(reconnectListener) {


	if(this.reconnectListeners.indexOf(reconnectListener) >= 0) {
		if(this.logEnabled) this.logger.info("Reconnect listner already added");
		return false;
		
	} else {
		
		if(this.logEnabled) this.logger.info("New reconnect listener added");
		
		this.reconnectListeners.push(reconnectListener);
		
		return true;
		
	}
	
}


HaleyAPIVitalServiceImpl.prototype.removeReconnectListener = function(reconnectListener) {

	var indexOf = this.reconnectListeners.indexOf(reconnectListener);
	
	if(indexOf < 0) {
		return false;
	}
	
	this.reconnectListeners.splice(indexOf, 1);
	
	return true;
	
}

HaleyAPIVitalServiceImpl.prototype._listServerDomainModelsJQueryImpl = function(callback) {
	
	var _this = this;
	
	this.logger.info("Getting server domains list from saas server");

	if(typeof(document) === 'undefined') {
		callback("No document object - client side listServerDomainModels not available");
		return;
	}
	
	if(typeof(jQuery) === 'undefined') {
		callback("No jQuery object - client side listServerDomainModels not available");
		return;
	}
	
    var parser  = document.createElement("a");
    parser.href = this.vitalService.impl.url;
    
    var domainsURL = parser.protocol + '//' + parser.host + '/domains';
    
	//Load the request module
	var jqxhr = $.ajax( { method: 'GET', url: domainsURL, cache: false} )
	.done(function(body) {
		try {
			_this.logger.info("domains objects", body);
			var parsed = body;
   			var domainsList = [];
   			for(var i = 0 ; i < parsed.length; i++) {
   				var obj = parsed[i];
   				domainsList.push(vitaljs.graphObject(obj));
   			}
    			
			callback(null, domainsList);
				
   		} catch(e) {
   			callback("error when parsing domains json: " + e, null);
   		}
	}).fail(function(jqXHR, textStatus) {
		_this.logger.error("domains check failed: " + textStatus);
    	callback(textStatus, null);
	});
		
}

HaleyAPIVitalServiceImpl.prototype.listServerDomainModels = function(callback) {

	var _this = this;
	
	this.logger.info("Getting server domains list");
	
	if(typeof(module) === 'undefined') {
//		callback("No module object - listServerDomainModels is only available in nodejs context");
//		return;
		this._listServerDomainModelsJQueryImpl(callback);
		return;
	}
	
	if(typeof(require) === 'undefined') {
		callback("No require object - listServerDomainModels is only available in nodejs context");
		return;
	}
	
	var domainsURL = this.saasServerURL + '/domains';

	//Load the request module
	var request = require('request');

	
	request({
	    url: domainsURL,
	    qs: {}, //Query string data
	    method: 'GET'
	}, function(error, response, body){
	    if(error) {
	    	_this.logger.error("Error when getting user profile data", error);
	    	callback(error, null);
	    } else {
	    	if(response.statusCode == 200) {
	    		
	    		_this.logger.info(response.statusCode, ( body && body.length > 100 ) ? ( body.substring(0, 97) + "...") : body);
	    		
	    		try {
	    			
	    			var parsed = JSON.parse(body);
	    			var domainsList = [];
	    			for(var i = 0 ; i < parsed.length; i++) {
	    				var obj = parsed[i];
	    				domainsList.push(vitaljs.graphObject(obj));
	    			}
	    			
    				callback(null, domainsList);
    				
	    		} catch(e) {
	    			callback("error when parsing domains json: " + e, null);
	    		}
	    	} else {
	    		_this.logger.error("Error when getting domains data " + response.statusCode, body);
	    	}
	    }
	});
	
}


HaleyAPIVitalServiceImpl.prototype.uploadFileInBrowser = function(haleySession, fileQuestionMessage, fileObject, callback) {
	this._uploadFileImpl(true, false, haleySession, fileQuestionMessage, fileObject, callback);
}	
HaleyAPIVitalServiceImpl.prototype.uploadFile = function(haleySession, fileQuestionMessage, fileObject, callback) {
	this._uploadFileImpl(false, false, haleySession, fileQuestionMessage, fileObject, callback);
}

HaleyAPIVitalServiceImpl.prototype.uploadFileInCordova = function(haleySession, fileQuestionMessage, fileObject, callback) {
	this._uploadFileImpl(false, true, haleySession, fileQuestionMessage, fileObject, callback);
}

HaleyAPIVitalServiceImpl.prototype._uploadFileImpl = function(isBrowser, isCordova, haleySession, fileQuestionMessage, fileObject, callback) {	
	
	var _this = this;
	
	var progressListener = fileObject.progressListener;
	
	if(isBrowser) {
		
		if( fileObject.file == null ) {
			callback("no form 'file' object in fileObject param");
			return;
		}
		
	} else {
		
		//cordova and nodejs
		
		if( fileObject.filePath == null || fileObject.filePath.length == 0 ) {
			callback("no 'filePath' string in  fileObject param");
			return;
		}
		
	}
	
	if(fileQuestionMessage == null || fileQuestionMessage.length < 2) {
		callback("expected at least two elements in fileQuestionMessage");
		return;
	}
	
	var questionMessage = fileQuestionMessage[0];
	if(questionMessage.type != 'http://vital.ai/ontology/vital-aimp#QuestionMessage') {
		callback("expected a QuestionMessage: " + questionMessage.type);
		return;
	}
	
	var fileQuestion = fileQuestionMessage[1];
	if(fileQuestion.type != 'http://vital.ai/ontology/vital-aimp#FileQuestion') {
		callback("not a FileQuestion: " + fileQuestion.type);
		return;
	}
	
	var scope = fileQuestion.get('fileScope');
	if(!scope) {
		callback("no file scope: " + scope);
		return;
	}
	
	var accountURIs = fileObject.accountURIs;
    
    
    var fileNodeClass = fileObject.fileNodeClass;
    if(!fileNodeClass) {
    	fileNodeClass = 'http://vital.ai/ontology/vital#FileNode';
    }
    var parentNodeURI = fileObject.parentNodeURI;
    
    var url = this.saasServerURL + '/fileupload/';
    
//    url += '?fileNodeClass=' + encodeURIComponent(fileNodeClass);
    url += '?temporary=true'
//    url += '&scope=' + scope;
    
    var currentLogin = this.vitalService.getCurrentLogin();
    
    if(currentLogin != null) {
    	
    	url += '&authSessionID=' + encodeURIComponent(this.getAuthSessionID(haleySession));
    	
    } else {
    	
    	//anonymous upload?
    	url += '&sessionID=' + encodeURIComponent(this.getSessionID(haleySession));
    	
    }
    
    
    
//    if(accountURIs != null && accountURIs.length > 0) {
//    	url += '&accountURIs=' + encodeURIComponent(accountURIs.join(','))
//    }
//
//    if(parentNodeURI) {
//    	url += '&parentNodeURI=' + encodeURIComponent(parentNodeURI); 
//    }
//    
    
    
    this.logger.info('upload URL: ' + url);
    
    //old way
	var onFileNodeURI = function(fileNodeURI, newFileNode){
		
		//file node URI created, assemble response
		
		var am = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#AnswerMessage'});
		am.URI = _this._randomURI();
		am.set('replyTo', questionMessage.URI);
		am.set('channelURI', questionMessage.get('channelURI'))
		am.set('endpointURI', questionMessage.get('endpointURI'));
		

		var fa = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#FileAnswer'});
		fa.URI = _this._randomURI();
		fa.set('fileNodeURI', fileNodeURI)
		
		_this.sendMessage(_this.haleySessionSingleton, am, [fa], function(error){
			
			if(error) {
				
				var errMsg = "Error when sending file answer: " + error;
				
				_this.logger.error(errMsg);
				
				callback(errMsg);
				
			} else {
				
				//answer accepted
				callback(null, newFileNode);
				
			}
			
		});
		
		//the dialog has to answer with a filenode now
		
		
	};
	
	var onFileDataResponse = function(data) {
	
		_this.logger.info('file data received: ', data);
	
		var am = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#AnswerMessage'});
		am.URI = _this._randomURI();
		am.set('replyTo', questionMessage.URI);
		am.set('channelURI', questionMessage.get('channelURI'))
		am.set('endpointURI', questionMessage.get('endpointURI'));
		
//		var fileName.fileName

		var fa = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#FileAnswer'});
		fa.URI = _this._randomURI();
		fa.set('fileNodeClassURI', fileNodeClass);
		fa.set('parentObjectURI', parentNodeURI);
		fa.set('url', data.url);
		fa.set('fileName', data.fileName);
		fa.set('fileType', data.fileType);
		fa.set('fileLength', data.fileLength);
		fa.set('deleteOnSuccess', true);
		
		_this.sendMessageWithRequestCallback(_this.haleySessionSingleton, am, [fa], function(error){
			
			if(error) {
				
				var errMsg = "Error when sending file answer: " + error;
				
				_this.logger.error(errMsg);
				
//				callback(errMsg);
				
			} else {
				
				_this.logger.info('file upload answer sent');
				//answer accepted
//				callback(null, newFileNode);
				
			}
			
		}, function(msgRL){
			
			var msg = msgRL.first();
			
			_this.logger.info('file upload response:', msg);
			
			if(msg.type != 'http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage') {
				return true;
			}
			
			var status = msg.get('status');
			
			if(status != 'ok') {
				var statusMessage = msg.get('statusMessage');
				if(!statusMessage) statusMessage = 'unknow file upload error';
				callback(statusMessage);
				return false;
			}
			
			var fileNode = null;
			
			var fileNodes = msgRL.iterator('http://vital.ai/ontology/vital#FileNode');
			
			if(fileNodes.length > 0) {
				fileNode = fileNodes[0];
			}
			
			if(fileNode == null) {
				callback('no file node in the response');
				return false;
			}
			
			callback(null, fileNode);
			
			return false;
			
		});
		
		
	}
	
	if(isBrowser) {
		
	    var xhr = new XMLHttpRequest();
	    _this.logger.info('default timeout: ', xhr.timeout);
		
	    var multipart = true;
	    
		// progress bar
	    if(xhr.upload && progressListener != null) {
	    	xhr.upload.addEventListener("progress", function(e) {
	    		progressListener(e.loaded, e.total);
//	    		var pc = parseInt(100 - (e.loaded / e.total * 100));
//	    		progress.style.backgroundPosition = pc + "% 0";
	    	}, false);
	    	
	    	multipart = false;
	    	
	    	url += '&multipart=false&fileName=' + encodeURIComponent(fileObject.file.name);
	    	
	    }
	    
		xhr.open("POST", url, true);
		xhr.onreadystatechange = function() {
			
			if (xhr.readyState == 4) {
				
				var error = null;
				
				var r = null;
				
//				var fileNodeURI = null;
//				
//				var newFileNode = null;
				
				var fileData = null;
				
				if(xhr.status == 200) {
					
					try {
						
						r = JSON.parse(xhr.responseText)
						
						if(r.error) {
							error = r.error
						} else {
							
							if(r.temporary == true) {
								
								fileData = r;
								
							} else {
								
								error = 'only temporary response accepted';
								
//								fileNodeURI = r.fileNodeURI;
//								
//								newFileNode = vitaljs.graphObject( r.fileNode );
								
							}
							
							
							
						}
						
					} catch(e) {
						
						error = 'response error: ' + e.message;
						
					}
					//parse json
					
				} else {
					
					error = 'HTTP status ' + xhr.status + ' - ' + xhr.responseText
					
				}

				if(error) {
					
					callback(error);

				} else {
					
//					onFileNodeURI(fileNodeURI, newFileNode);
					
					onFileDataResponse(fileData);
					
				}

			}

		};

		if(multipart) {
			
			var fd = new FormData();
			fd.append('upload_file', fileObject.file);
			xhr.send(fd);
			
		} else {
			
			xhr.send(fileObject.file);
			
		}
		
	} else if(isCordova) {
		
		if(typeof( window.FileTransfer ) === 'undefined') {
			
			callback('No FileTransfer class - cordova-plugin-file-transfer may not be installed', null);
			return;
			
		}
		
		
		function win(r) {
			
			var body = r.response;
		    console.log("FileUpload Code: " + r.responseCode);
		    console.log("FileUpload Response: " + body);
		    console.log("FileUpload BytesSent: " + r.bytesSent);
		    
		    var error = null;
			
			try {
				
				r = JSON.parse(body);
				
				if(r.error) {
					error = r.error
				} else {
					
					if(r.temporary == true) {
						
						fileData = r;
						
					} else {
						
						error = 'only temporary response accepted';
						
					}
					
				}
				
			} catch(e) {
				
				error = 'response error: ' + e.message;
				
			}
			
			if(error) {
				
				callback(error);

			} else {
				
				onFileDataResponse(fileData);
				
			}
		    
		}

		function fail(error) {
/*
 * 1 = FileTransferError.FILE_NOT_FOUND_ERR
2 = FileTransferError.INVALID_URL_ERR
3 = FileTransferError.CONNECTION_ERR
4 = FileTransferError.ABORT_ERR
5 = FileTransferError.NOT_MODIFIED_ERR
 */
			console.error("file upload error", error);
			
			var errorMsg = "Error occurred: Code = " + error.code + ' HTTP status: ' + error.http_status + ' body ' + error.body;

			callback(errorMsg, null);
			
		}

		var fileURL = fileObject.filePath;
		
		var options = new FileUploadOptions();
		options.fileKey="upload_file";
		options.fileName=fileURL.substr(fileURL.lastIndexOf('/')+1);
		//TODO MIME TYPE
//		options.mimeType="text/plain";

//		var headers={'headerParam':'headerValue'};
//		options.headers = headers;

		var ft = new FileTransfer();
		if(progressListener != null) {
			ft.onprogress = function(progressEvent) {
			    if (progressEvent.lengthComputable) {
			    	progressListener(progressEvent.loaded, progressEvent.total);
//			        loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
			    } else {
//			        loadingStatus.increment();
			    }
			};
		}
		
		ft.upload(fileURL, url, win, fail, options);
		
	} else {
		
		var fs = require('fs');
		
		var request = require('request');
		
		var formData = {};
		
		try {
			_this.logger.info("uploading file from location: " + fileObject.filePath);
			var rs = fs.createReadStream(fileObject.filePath);
			_this.logger.info("readstream", rs);
			formData['upload_file'] = rs;
		} catch(e) {
			_this.logger.error("error when starting upload: ", e);
			callback("error when starting upload: " + e.message);
			return;
		}
		
		var req = request.post({url:url, formData: formData}, function (err, resp, body) {
		  
			if (err) {
				_this.logger.error(err);
				callback("Error when uploading file: " + err);
				return;
			}
			
			_this.logger.info('Server response: ' + body);
			
			var fileData = null;
			
			var error = null;
			
			try {
				
				r = JSON.parse(body);
				
				if(r.error) {
					error = r.error
				} else {
					
					if(r.temporary == true) {
						
						fileData = r;
						
					} else {
						
						error = 'only temporary response accepted';
						
					}
					
				}
				
			} catch(e) {
				
				error = 'response error: ' + e.message;
				
			}
			
			if(error) {
				
				callback(error);

			} else {
				
				onFileDataResponse(fileData);
				
			}
			
		});
		
	}
	
}


HaleyAPIVitalServiceImpl.prototype.cancelFileUpload = function(haleySession, fileQuestionMessage, callback) {

	var _this = this;
	
	var questionMessage = fileQuestionMessage[0];
	
	//file node URI created, assemble response
	var am = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#AnswerMessage'});
	am.URI = this._randomURI();
	
	
	am.set('replyTo', questionMessage.URI);
	am.set('channelURI', questionMessage.get('channelURI'))
	am.set('endpointURI', questionMessage.get('endpointURI'));
	am.set('answerSkipped', true);

	var fa = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#FileAnswer'});
	fa.URI = this._randomURI();
	fa.set('fileNodeURI', null)
	
	this.sendMessage(this.haleySessionSingleton, am, [fa], function(error){
		
		if(error) {
			
			var errMsg = "Error when sending file answer skip: " + error;
			
			_this.logger.error(errMsg);
			
			callback(errMsg);
			
		} else {
			
			//answer skip accepted
			callback(null);
			
		}
		
	});
	
}


HaleyAPIVitalServiceImpl.s3URLPattern = /^s3\:\/\/([^\/]+)\/(.+)$/;

HaleyAPIVitalServiceImpl.prototype.getFileNodeDownloadURL = function(haleySession, fileNode) {

	var scope = fileNode.get('fileScope');
	
	if(!scope) scope = 'public';
	
	if('PRIVATE' === scope.toUpperCase()) {
			
		return this.getFileNodeURIDownloadURL(haleySession, fileNode.URI);
		
	} else {
		
		//just convert s3 to public https link
		var fileURL = fileNode.get('fileURL');
		var res = HaleyAPIVitalServiceImpl.s3URLPattern.exec(fileURL);
		if(res != null) {
			
			var bucket = res[1];
			var key = res[2];
		
			var keyEscaped = key.replace(new RegExp('%', 'g'), '%25')
			
			return 'https://' + bucket + '.s3.amazonaws.com/' + keyEscaped;
			
		}
		
		return fileURL;
		
	}
	
	
}

/**
 * Returns the download URL for given file node URI
 */
HaleyAPIVitalServiceImpl.prototype.getFileNodeURIDownloadURL = function(haleySession, fileNodeURI) {

	var url = this.saasServerURL + '/filedownload?fileURI=' + encodeURIComponent(fileNodeURI);
	
	if(haleySession.isAuthenticated()) {
		
		url += '&authSessionID=' + encodeURIComponent(this.getAuthSessionID(haleySession));
	    
	} else {
		
		url += '&sessionID=' + encodeURIComponent(this.getSessionID(haleySession));
		
	}
	
	return url;
	
	
}

/**
 * add a listener notified with (error, haleySession, aimpMessage, payload)
 * returns true if added, false if already added
 */
HaleyAPIVitalServiceImpl.prototype.addAIMPMessageSentListener = function(listener) {
	if( this.aimpMessageSentListeners.indexOf(listener) >= 0) return false;
	this.aimpMessageSentListeners.push(listener);
	return true;
}

/**
 * remove an AIMP message sent listener
 * returns true if removed, false if was not added 
 */
HaleyAPIVitalServiceImpl.prototype.removeAIMPMessageSentListener = function(listener) {
	var index = this.aimpMessageSentListeners.indexOf(listener);
	if(index < 0) return false;
	this.aimpMessageSentListeners.splice(index, 1);
	return true;
} 


if(typeof(module) !== 'undefined') {

//	if(typeof(VitalService) === 'undefined') {

		//VitalService = require(__dirname + '/../vitalservice-js/vitalservice-0.2.304.js');
		
//	}
	
//	if(typeof(VitalServiceWebsocketImpl) === 'undefined') {
		
		//VitalServiceWebsocketImpl = require(__dirname + '/../vitalservice-js/vitalservice-0.2.304.js');
		
//	}
	
	
	module.exports = HaleyAPIVitalServiceImpl;
	
};
//helper constants

var VITAL_AIMP_NS = 'http://vital.ai/ontology/vital-aimp#';

var Message_UserLoggedOut = VITAL_AIMP_NS + 'UserLoggedOut';

//not used
var Message_UserLoggedIn = VITAL_AIMP_NS + 'UserLoggedIn';

var Message_UserLeftApp = VITAL_AIMP_NS + 'UserLeftApp';



var HaleyTextMessage = VITAL_AIMP_NS + 'HaleyTextMessage';


var AIMP_Choice = VITAL_AIMP_NS + 'Choice';

var AIMP_AnswerMessage = VITAL_AIMP_NS + 'AnswerMessage';

var AIMP_FormPageAnswersMessage = VITAL_AIMP_NS + 'FormPageAnswersMessage'; 

var AIMP_QuestionMessage = VITAL_AIMP_NS + 'QuestionMessage';

var AIMP_RemoveQuestionMessage = VITAL_AIMP_NS + 'RemoveQuestionMessage';

var AIMP_QuestionsPageMessage = VITAL_AIMP_NS + 'QuestionsPageMessage';

var AIMP_AnswerMessage = VITAL_AIMP_NS + 'AnswerMessage';

var AIMP_QuestionsPageNavigationMessage = VITAL_AIMP_NS + 'QuestionsPageNavigationMessage';

var AIMP_Answer = VITAL_AIMP_NS + 'Answer';

var AIMP_ChoiceAnswer = VITAL_AIMP_NS + 'ChoiceAnswer';

var AIMP_TrueFalseAnswer = VITAL_AIMP_NS + 'TrueFalseAnswer';

var AIMP_FileAnswer = VITAL_AIMP_NS + 'FileAnswer';

var AIMP_Question = VITAL_AIMP_NS + 'Question';

var AIMP_MultiChoiceQuestion = VITAL_AIMP_NS + 'MultiChoiceQuestion';

var AIMP_TrueFalseQuestion = VITAL_AIMP_NS + 'TrueFalseQuestion';

var AIMP_FileQuestion = VITAL_AIMP_NS + 'FileQuestion';

var AIMP_PaymentQuestion = VITAL_AIMP_NS + 'PaymentQuestion';


var AIMP_CurrentBotMessage = VITAL_AIMP_NS + 'CurrentBotMessage';

var AIMP_DialogStatusMessage = VITAL_AIMP_NS + 'DialogStatusMessage';

var AIMP_ContextChangedMessage = VITAL_AIMP_NS + 'ContextChangedMessage';

var AIMP_DialogPageElementMessage = VITAL_AIMP_NS+ 'DialogPageElementMessage';

var AIMP_DialogButton = VITAL_AIMP_NS + 'DialogButton';

var AIMP_DialogTextCard = VITAL_AIMP_NS + 'DialogTextCard';

var AIMP_DialogButtonClickedMessage = VITAL_AIMP_NS + 'DialogButtonClickedMessage';

var AIMP_NotificationMessage = VITAL_AIMP_NS + 'NotificationMessage';

var AIMP_SwitchEnclosingPageToURL = VITAL_AIMP_NS + 'SwitchEnclosingPageToURL';

var AIMP_EnclosingPageNotification = VITAL_AIMP_NS + 'EnclosingPageNotification';

var AIMP_CloseIFrame = VITAL_AIMP_NS + 'CloseIFrame';

var AIMP_OpenIFrame = VITAL_AIMP_NS + 'OpenIFrame';

var AIMP_SessionExpiredMessage = VITAL_AIMP_NS + 'SessionExpiredMessage';

var AIMP_IFrameEventMessage = VITAL_AIMP_NS + 'IFrameEventMessage';

var AIMP_IntentMessage = VITAL_AIMP_NS + 'IntentMessage';

var AIMP_HeartbeatMessage = VITAL_AIMP_NS + 'HeartbeatMessage';

var AIMP_CloseSessionMessage = VITAL_AIMP_NS + 'CloseSessionMessage';;
/**
 * Simple file question element, has two states
 * @param parentEl
 * @param fileNodeURI
 * @param fileUploadURL
 * @param fileDownloadURL
 * @param getFileNodeFunction - this method accepts fileNodeURI, function(error, fileNode) callback 
 * @param removeFileFunction - this method accepts fileNodeURI, function(error) callback
 * @param onFileRemoved  - notification for parent when file is deleted
 * @param onFileUploaded - notification for parent of a new file - it accept fileNodeURI
 * @returns
 */
FileQuestionElement = function(parentEl, fileNodeURI, fileUploadURL, fileDownloadURL, getFileNodeFunction, removeFileFunction, onFileRemoved, onFileUploaded) {
	this.parentEl = parentEl;
	this.fileNodeURI = fileNodeURI;
	this.fileUploadURL = fileUploadURL;
	this.fileDownloadURL = fileDownloadURL;
	this.getFileNodeFunction = getFileNodeFunction;
	this.removeFileFunction = removeFileFunction;
	this.onFileRemoved = onFileRemoved;
	this.onFileUploaded = onFileUploaded;
	
	
	//optional properties
	this.maxFileLength = null;
	this.fileTypeConstraint = null;
	
	this.uploadButtonClass = "";
	this.fileNameClass = "";
	this.fileLengthClass = "";
	this.fileTypeClass = "";
	this.downloadLinkClass = "";
	this.deleteFileButtonClass = "";
	this.devMode = false;
	
	
	
} 

//https://stackoverflow.com/a/18650828/5342585
FileQuestionElement.formatBytes = function(a,b){ if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f] };

FileQuestionElement.prototype.render = function() {
	
	var _this = this;
	
	this.parentEl.empty();
	
	if(this.fileNodeURI != null) {
		
		this.parentEl.text('Loading file info ...');
		
		this.getFileNodeFunction(this.fileNodeURI, function(error, fileNode){
			
			if(error) {
				var err = " Error when getting file node: " + error;
				console.error(err);
				_this.parentEl.append($('<span>', {'class': 'text-danger'}).text(err));
				return;
			}
			
			//just display info and remove button
			//fileNode.get('name') + ' '
			_this.parentEl.empty();
			var len = fileNode.get('fileLength');
			_this.parentEl.append(
			[
			 $('<span>', {'class': _this.fileNameClass}).text( fileNode.get('fileName') ), 
			 document.createTextNode(' '), 
			 $('<span>', {'class': _this.fileLengthClass}).text( FileQuestionElement.formatBytes(len) ), 
			 document.createTextNode(' '), 
			 $('<span>', {'class': _this.fileTypeClass}).text(fileNode.get('fileType')),
			 document.createTextNode(' ') 
			]);
			
			
			var fileDownloadURL = _this.fileDownloadURL + '&fileURI=' + encodeURIComponent(_this.fileNodeURI);
			
			var downloadButton = $('<a>', {'class': 'btn btn-primary ' + _this.downloadLinkClass, href: fileDownloadURL, target: '_blank'}).text('Download');
			
			var removeButton = $('<button>', {'class': 'btn btn-danger ' + _this.deleteFileButtonClass}).text('X').click(function(){
				console.log('removing fact...');
				removeButton.attr('disabled', 'disabled');
				_this.removeFileFunction(_this.fileNodeURI, function(error){
					
					if(error) {
						console.error("Error when removing file answer: ", error);
						removeButton.removeAttr('disabled');
						return;
					} 
					
					console.log("file node removed - refreshing form.");
					
					_this.onFileRemoved(_this.fileNodeURI);
					
					_this.fileNodeURI = null;
					
					
					_this.render();
					
//					console.log()
				});
				
			});
			
			_this.parentEl.append(downloadButton);
			_this.parentEl.append($('<span>').text(' '));
			_this.parentEl.append(removeButton);
			
		});
		
		return;
	}
	
	//just render file input and submit button
	this.parentEl.append($('<div>').append($('<input>', {type: 'file', 'class': 'form-control upload-active input-file', name: 'file'})));
	if(this.maxFileLength != null || this.fileTypeConstraint != null) {
		var tDiv = $('<div>');
		if(this.fileTypeConstraint != null) {
			tDiv.append(
			[
			 $('<span>').text("File type:"),
			 document.createTextNode(' '),
			 $('<span>', {'class': 'file-type-constraint'}).text(this.fileTypeConstraint),
			 document.createTextNode(' ')
			]);
		}
		if(this.maxFileLength != null) {
			tDiv.append(
			[
			 $('<span>').text('Max file length:'),
			 document.createTextNode(' '),
			 $('<span>', {'class': 'max-file-length-value'}).text(FileQuestionElement.formatBytes(this.maxFileLength)),
			 document.createTextNode(' ')
			]);
		}
		this.parentEl.append(tDiv);
	}
	var uploadButton = $('<button>', {'class': 'btn btn-primary upload-active ' + this.uploadButtonClass}).text('Upload');
	
	this.parentEl.append($('<div>').append(
	 [
	  $('<span>', {'class': 'status-message success-message text-success'}),
	  $('<span>').html('&nbsp'),
	  $('<span>', {'class': 'status-message error-message text-danger'})
	 ]));
	
	var statusMessage = this.parentEl.find('.status-message');
	
	var errorMessage = this.parentEl.find('.error-message');
	
	var successMessage = this.parentEl.find('.success-message');
	
	var formEls = this.parentEl.find('.upload-active');
	
	var fileEl = this.parentEl.find('.input-file');
	
	fileEl.change(function(){
		statusMessage.empty();
	});
	
	this.parentEl.append(uploadButton);
	
	uploadButton.click(function(){
		
		var di = fileEl[0];
		
		console.log("file upload: " , di.files);
		
		if(di.files.length == 0) {
			statusMessage.empty();
			errorMessage.text('no file selected');
			return false;
		}
		
		var fileObject = di.files[0];
		
		 if( _this.fileTypeConstraint != null) {
			 var regex = new RegExp(_this.fileTypeConstraint);
			 if( ! fileObject.type.match(regex)) {
				 statusMessage.empty();
				 errorMessage.text("File type does not match pattern '" + _this.fileTypeConstraint +"': " + fileObject.type);
				 return false;
			 }
		 }
		
		 if(_this.maxFileLength != null && fileObject.size > _this.maxFileLength) {
			 statusMessage.empty();
			 errorMessage.text("File length limit " + FileQuestionElement.formatBytes(_this.maxFileLength) + " exceeded: " + FileQuestionElement.formatBytes(fileObject.size));
			 return false;
		 }
		
		
		statusMessage.text('');
		
		formEls.attr('disabled', 'disabled');
		
		if(_this.devMode) {
			console.log("dev file upload"); 
			_this.fileNodeURI = "dev:fileNodeURI";
			successMessage.text('File uploaded successfully');
			setTimeout(function(){
				_this.onFileUploaded(_this.fileNodeURI);
				_this.render();
			}, 1000);
			return;
		}
		
//		var url = SERVER_URL + '/fileupload?sessionID=' + vitalservice.getAppSessionID();
		var url = _this.fileUploadURL;
		
		var xhr = new XMLHttpRequest();

		console.log('default timeout: ', xhr.timeout);
		
		var fd = new FormData();
		xhr.open("POST", url, true);
		xhr.onreadystatechange = function() {
			
			if (xhr.readyState == 4) {
				
				var error = null;
				
				var r = null;
				
				var newFileNodeURI = null;
				
				if(xhr.status == 200) {
					
					try {
						
						r = JSON.parse(xhr.responseText)
						
						if(r.error) {
							error = r.error
						} else {
							newFileNodeURI = r.fileNodeURI
							if(newFileNodeURI == null || newFileNodeURI.length == 0) {
								error = "no file node uri in response"
							}
						}
						
					} catch(e) {
						
						error = 'response error: ' + e.message;
						
					}
					//parse json
					
				} else {
					error = 'HTTP status ' + xhr.status + ' - ' + xhr.responseText
				}

				if(error) {
					errorMessage.text(error);
					formEls.removeAttr('disabled');
				} else {
					console.log("new file node uri:", newFileNodeURI); 
					_this.fileNodeURI = newFileNodeURI;
					successMessage.text('File uploaded successfully');
					setTimeout(function(){
						_this.onFileUploaded(_this.fileNodeURI);
						_this.render();
					}, 1000);

				}

			}

		};

		fd.append("upload_file", fileObject);

		xhr.send(fd);
		
	});

}

;
//global variable

//SET BY WIDGET
//var stripePublishableApiKey = null;
//make sure the old stripe api is disabled
window.LASTFORM_STRIPE_DISABLED = true;

var lfForm = {
    "title": "Lastform - Affordable Typeform alternative",
    "description": "If you want to instantly increase your form conversion rate in 200-300% just by clicking \"activate\" plugin, then you need to try Lastform",
    "labelPlacement": "top_label",
    "descriptionPlacement": "above",
    "button": {
        "type": "text",
        "text": "Submit",
        "imageUrl": ""
    },
    "fields": [],
    "version": "2.2.3",
    "id": 4,
    "useCurrentUserAsAuthor": true,
    "postContentTemplateEnabled": false,
    "postTitleTemplateEnabled": false,
    "postTitleTemplate": "",
    "postContentTemplate": "",
    "lastPageButton": null,
    "pagination": null,
    "firstPageCssClass": null,
    "lastform": {
        "welcomeEnabled": "1",
        "welcomeImageUrl": "http:\/\/com-meydjer-demo.s3.amazonaws.com\/wp-content\/uploads\/sites\/756\/2016\/09\/21194434\/lastform-themeforest-icon.svg",
        "welcomeText": "If you want to instantly increase your form conversion rate in 200-300%<br \/>\r\njust by clicking \"activate\" plugin, then you need to try Lastform",
        "welcomeStartButtonText": "Start exploring",
        "questionColor": "#07588A",
        "answerColor": "#6AC1B8",
        "buttonColor": "#6AC1B8",
        "bgColor": "#FFFFFF",
        "warningColor": "#FF7600",
        "bgImageUrl": "/img/simple-gray-repeating-background-5.jpg",
        "bgImageScaling": "repeat",
        "bgLuminosity": "lighter",
        "bgLuminosityLevel": "50",
        "googleFontCode": "Source+Sans+Pro:300,300i,600,600i",
        "fontFamilyName": "Source Sans Pro",
        "progressBoxType": "proportional",
        "uncofusedFieldsTransparencyLevel": "80",
        "faviconUrl": "",
        "customHtmlCode": "",
        "customCssCode": "#input_4_37 .lf-choice-img img { max-width: 129px; }",
        "customJsCode": ""
    },
    "subLabelPlacement": "below",
    "cssClass": "",
    "enableHoneypot": false,
    "enableAnimation": false,
    "save": {
        "enabled": 0,
        "button": {
            "type": "link",
            "text": "Save and continue later"
        }
    },
    "limitEntries": false,
    "limitEntriesCount": "",
    "limitEntriesPeriod": "",
    "limitEntriesMessage": "",
    "scheduleForm": false,
    "scheduleStart": "",
    "scheduleStartHour": "",
    "scheduleStartMinute": "",
    "scheduleStartAmpm": "",
    "scheduleEnd": "",
    "scheduleEndHour": "",
    "scheduleEndMinute": "",
    "scheduleEndAmpm": "",
    "schedulePendingMessage": "",
    "scheduleMessage": "",
    "requireLogin": false,
    "requireLoginMessage": "",
    "notifications": {
        "57e2d8b86e56f": {
            "id": "57e2d8b86e56f",
            "to": "{admin_email}",
            "name": "Admin Notification",
            "event": "form_submission",
            "toType": "email",
            "subject": "New submission from {form_title}",
            "message": "{all_fields}"
        }
    },
    "confirmations": {
        "57e2d8b86ec2e": {
            "id": "57e2d8b86ec2e",
            "name": "Default Confirmation",
            "isDefault": true,
            "type": "message",
            "message": "Thanks for trying Lastform!\r\n<br\/><br\/>\r\nTo get Lastform just click the button bellow.\r\n<br\/><br\/>\r\nYou will be redirected to Lastform's CodeCanyon page.\r\n<br\/><br\/>\r\n<a class=\"gform_button button\" href=\"https:\/\/codecanyon.net\/item\/lastform-affordable-typeform-alternative\/17870313?ref=meydjer\">Go to Lastform product page<\/a>",
            "url": "",
            "pageId": 0,
            "queryString": "",
            "disableAutoformat": false,
            "conditionalLogic": []
        }
    },
    "i18n": {
        "multichoiceTip": "Choose as many as you like and <strong> press ENTER <\/strong>",
        "multichoiceTipMobile": "Choose as many as you like",
        "hintKey": "Key",
        "textareaTip": "To add a paragraph, press <strong> SHIFT + ENTER <\/strong>",
        "uploadButton": "Upload",
        "allowedExtensions": "Allowed file extensions:",
        "rejectedFiles": "Rejected files:",
        "pressEnter": "press <strong>ENTER<\/strong> for Next",
        "checkboxTip": "Choose as many as you like",
        "multiselectTip": "Press <strong> SHIFT + ENTER <\/strong> and choose as many as you like",
        "progressPercentage": "$1 completed",
        "progressProportional": "$1 of $2 answered",
        "pageProgress": "Step $1 of $2",
        "submit": "Submit",
        "sendEmail": "Send Email",
        "selectFile": "Select file",
        "selectFiles": "Select files",
        "dropFilesHere": "Drop files here or",
        "today": "Today",
        "or": "or",
        "prev": "Previous",
        "next": "Next",
        "select": "Select",
        "yes": "Yes",
        "no": "No",
        "price": "Price",
        "quantity": "Quantity",
        "errors": {
            "reviewIsNeeded": "Some fields needs to be reviewed.",
            "required": "You forgot to fill out this field.",
            "reviewFields": "Review Fields",
            "noDuplicates": "It already exists.",
            "invalidUrl": "Enter a valid Website URL, like $1",
            "rangeNotBetween": "Enter a value between $1 and $2.",
            "rangeBelowExpected": "Enter a value greater than or equal to $1.",
            "rangeAboveExpected": "Enter a value less than or equal to $1.",
            "invalidEmail": "Please enter a valid email address.",
            "emailsDoNotMatch": "Your emails do not match.",
            "maxReached": "Maximum number of files reached",
            "fileExceedsLimit": "File exceeds size limit",
            "invalid_file": "There was an problem while verifying your file.",
            "illegal_extension": "Sorry, this file extension is not permitted for security reasons.",
            "illegal_type": "Sorry, this file type is not permitted for security reasons.",
            "unknown_error": "There was a problem while saving the file on the server"
        }
    },
    "ajaxurl": "http:\/\/demo.meydjer.com\/lastform\/wp-admin\/admin-ajax.php",
    "gfUploadUrl": "http:\/\/demo.meydjer.com\/lastform\/?gf_page=d78e8e5e89d16b5",
    "wpnonce": "ecf79d0250",
    "renderWelcome": true,
    "state": "WyJ7XCIzOS4xXCI6XCIwNTBmZjBkNjBiMDRkMGVlNmRlMTM5YTJmNGQ2MDQ4ZlwiLFwiMzkuMlwiOlwiNmI3MDE5YWI1MmYzOGYzYjJlYzczODU1YWVjM2Q3MTRcIixcIjQwLjFcIjpcImE4NmU4NjgyYzk0YjY2ZjAzYzJjMGZmYzNjNmY3MmMzXCIsXCI0MC4yXCI6XCJiYTM1Y2JhNWY2OTRmNTI0OTU0NGY5MTFhNzI0YzdmNlwiLFwiNDAuM1wiOlwiYjliNDhmODRmNGY4NWNmNzdlYzg5OWRiMzUzNGQxYTBcIixcIjQwLjRcIjpcImM1MzI3ZTQxNTBmNWI3M2JjYzFiOTY4ZTgyNjVjMWZmXCIsXCI0MVwiOltcIjY5MWE3NTIyMzRiYTE3YTVhYjRkZGNjMTlkYzllNzY2XCIsXCI2ZGVmZTZjNTUxZmQwYjVlZTkyNGZiOGVjOGE3OTA4NlwiXX0iLCIxNjJiMjI0ZTNjYjYyMDE0YmM3OGE1NTBiNmJmY2I2MCJd",
    "captchaPublicKey": "6Lc9vygTAAAAAHLj0G62rnjkWTa99VlDVvH9xLLv"
};

window.LASTFORM_startForm = function() {
	console.log('LASTFORM_startForm');
	
	if( LastformWidget.singleton == null ) {
		throw "Lastform widget singleton not available";
	}

	LastformWidget.singleton.onStartForm();
	
}

window.LASTFORM_submitPanelCreated = function(lastformCtx) {
	console.log('LASTFORM_submitPanelCreated', lastformCtx);
	
	if(LastformWidget.singleton == null) {
		throw "Lastform widget singleton not available";
	}
	
	LastformWidget.singleton.onSubmitPanelCreated(lastformCtx);
	
}

window.LASTFORM_visibilityChangedListener = function(id, res) {
	
	console.log("LASTFORM_visibilityChangedListener " + id, res);
	
	if(LastformWidget.singleton == null) {
		throw "Lastform widget singleton not available";
	}
	
	setTimeout(function(){
		LastformWidget.singleton.onElementVisibilityChanged(id, res);
	}, 1);
	
	
}

var windowEventListeners = [];
var documentEventListeners = [];

var clearLastformEvents = function(){
	for(var i = 0; i < documentEventListeners.length; i++) {
		var el = documentEventListeners[i];
		document.removeEventListener(el.eventType, el.listener, el.useCapture);
	}
	documentEventListeners = [];
	
	for(var i = 0 ; i < windowEventListeners.length; i++) {
		var el = windowEventListeners[i];
		window.removeEventListener(el.eventType, el.listener, el.useCapture);
	}
	windowEventListeners = [];
}

window.LASTFORM_instance = null;

document.addEventListenerTracked = function(eventType, listener, useCapture) {
	if(useCapture == null) {
		useCapture = false;
	}
	document.addEventListener(eventType, listener, useCapture);
	documentEventListeners.push({eventType: eventType, listener: listener, useCapture: useCapture});
}

window.addEventListenerTracked = function(eventType, listener, useCapture) {
	if(useCapture == null) {
		useCapture = false;
	}
	window.addEventListener(eventType, listener, useCapture);
	windowEventListeners.push({eventType: eventType, listener: listener, useCapture: useCapture});
}


/**
 * @param data is FormData object
 * @param callback (error)
 */
window.LASTFORM_postFormData = function(data, callback) {
		
	console.log("LASTFORM_postFormData ", data);
	
	
	//take care of proper data serialization into array
	var formData = [];
	
	// Display the key/value pairs
	var entries = data.entries2();
	var keys = Object.keys(entries);
	
	var isPrevious = data.isPrevious;
	
//	for (var pair of data.entries()) {
//		var k = pair[0];
//		var v = pair[1];
//	
	
	for(var j = 0 ; j < keys.length; j++) {
	
		var k = keys[j];
		var v = entries[k];
		
		console.log(k, v);
		
		if(k.indexOf('input_') != 0) {
			console.warn("skipping form key", k);
			continue;
		}
		
		k = k.substring('input_'.length);
		
		var underscore = k.indexOf('_');
		
		var index = null;

		var subindex = null;
		
		if(underscore > 0) {
			
			index = parseInt(k.substring(0, underscore));
			
			subindex = parseInt(k.substring(underscore + 1));
			
		} else {
			
			index = parseInt(k);
			
		}
		
		while(formData.length <= index) {
			formData.push(null);
		}
		
		
		//fill in nulls
		if(subindex != null) {

			var existing = formData[index];
			if(existing == null) {
				existing = [];
				formData[index] = existing;
			}

			if(v) existing.push(v);
				
		} else {
			
			if(v) {
				formData[index] = v;
			}
			
		}
		
	}
	
	if( LastformWidget.singleton == null ) {
		throw "Lastform widget singleton not available";
	}

	LastformWidget.singleton.onSubmit(formData, callback, isPrevious);
	
}
	
;
LastformWidget = function(parentEl) {
	
	this.devMode = false;
	
	if(LastformWidget.singleton != null) {
		throw "Lastform widget must be a singleton!";
	}
	
	LastformWidget.singleton = this;
	
	var _this = this;
	
	this.parentEl = parentEl;
	
	this.lastformContext = null;
	
	//flag set when last form script has completed
	this.lastformLoaded = false;
	
	this.pageRequestTimeout = null;
	
	if(!this.parentEl.hasClass('dialog-button-active')) {
		this.parentEl.on('click', '.dialog-button', function(){
			
			var buttonID = $(this).attr('data-id');
			console.log("button clicked:", buttonID);
			
			
			if(buttonID == 'local:close') {
				
				var m = {source: 'haley', action: 'closeIFrame', endpointURI: ENDPOINT_URI, purgeSession: false, targetEndpointURI: ENDPOINT_URI};
				console.log('Notifying parent with message', m);
				window.top.postMessage(m, '*');

			} else {
				
				//notify parent window?
				var buttonClickedMessage = vitaljs.graphObject({type: AIMP_DialogButtonClickedMessage});
				buttonClickedMessage.set('id', buttonID);
				buttonClickedMessage.set('channelURI', _this.channelURI);
				buttonClickedMessage.set('endpointURI', _this.endpointURI);
				
				_this.haleyApi.sendMessage(_this.haleySession, buttonClickedMessage, [], function(error){
					
					if(error) {
						
						console.error('error when sending dialog button clicked message', error);
						
					} else {
						
						console.log('dialog button clicked message sent');
						
					}
				});
				
			}
			

			
//			if(_this.dialogButtonClickHandler != null) {
//				console.log("notifying dialog button click handler");
//				_this.dialogButtonClickHandler(q);
//			}

		});
		
		this.parentEl.addClass('dialog-button-active');
	}
	
	this.channelURI = null;
	//for outgoing messages
	this.endpointURI = null;
	
	this.fileDownloadURL = null;
	this.fileUploadURL = null;

	this.sessionExpiredHandler = null;

//	function(error, fileNode) callback
	this.vitalservice = null;
	this.haleyApi = null;
	this.haleySession = null;
	
	
	this.getFileNodeFunction = function(fileNodeURI, callback) {
		if(_this.vitalservice == null) {
			callback('vitalservice not set');
			return;
		}
		
		var appSessionID = _this.vitalservice.getSessionID();
		
		var fname = appSessionID != null ? 'files.get' : 'anon-files.get';
		
		var params = {fileNodeURI: fileNodeURI};
		if(appSessionID == null) {
			params.anonymousSessionID = _this.vitalservice.impl.sessionID;
		}
		
		_this.vitalservice.callFunction(fname, params, function(rl){
			var fileNode = rl.first();
			console.log('file node', fileNode);
			callback(null, fileNode);
		}, function(error){
			console.error("Error when getting file:", error);
			callback(error);
		});
	};
	
//	- this method accepts fileNodeURI, function(error) callback 
	this.removeFileFunction = function(fileNodeURI, callback) {
		if(_this.vitalservice == null) {
			callback('vitalservice not set');
			return;
		}
		
		var appSessionID = _this.vitalservice.getSessionID();
		
		var fname = appSessionID != null ? 'files.delete' : 'anon-files.delete';
		
		var params = {fileNodeURI: fileNodeURI};
		if(appSessionID == null) {
			params.anonymousSessionID = _this.vitalservice.impl.sessionID;
		}
		
		_this.vitalservice.callFunction(fname, params, function(rl){
			console.log('file deleted', fileNodeURI);
			callback(null);
		}, function(error){
			console.log('error when deleting file node', error);
			callback(error);
		});
	}
	
	
	this.currentPageMsg = null;
	this.pageElementsCount = -1; 
	
	this.questionElements = [];
	this.fileUploadElements = {};
	this.index2QuestionElement = {};

	
	this.submitCallback = null;
	
	this.formEnded = false;
	this.formEndedEl = null;
	
	this.activePaymentQuestionURI = null;
	this.activePaymentQuestionAction = null;
	this.stripePublishableApiKey = null;
	
	this.initialPageRequestSent = false;
	
	
	//window listener
	this.windowMessageListener = function(event) {

		console.log("MSG", event);
		
		var data = event.data;
		
	    // IMPORTANT: Check the origin of the data!
	    if ( event.origin == WEBSITE_URL && data.origin == WEBSITE_URL) {
	        // The data has been sent from your site

	        // The data sent with postMessage is stored in event.data

	    	/*
	    	if(data.action == 'onChatClosed') {

	    		console.log('onChatClosed - external iframe close button clicked');
	    		
	    		//treat it as a button that
				var buttonID = 'close-iframe';
				
				//notify parent window?
				var buttonClickedMessage = vitaljs.graphObject({type: AIMP_DialogButtonClickedMessage});
				buttonClickedMessage.set('channelURI', _this.channelURI);
				buttonClickedMessage.set('endpointURI', _this.endpointURI);
				buttonClickedMessage.set('id', buttonID);
				
				_this.haleyApi.sendMessage(_this.haleySession, buttonClickedMessage, [], function(error){
					
					if(error) {
						
						console.error('error when sending dialog button clicked message', error);
						
					} else {
						
						console.log('dialog button clicked message sent');
						
					}
				});
	    		
				_this.parentEl.empty();
				_this.activePaymentQuestionAction = null;
				_this.currentPageM = null;
				_this.questionURI2MsgRL = {};
				_this.questionURI2QuestionMsg = {};
				
	    	} else if(data.action == 'sendIFrameEvent') {

	    		var eventType = data.eventType;
	    		var eventValue = data.eventValue;
	    		
	    		console.log('sendIFrameEvent eventType: ' + eventType  + ' eventValue: ' + eventValue);
	    		
				//this is assumed to be non-spa
				var msg = vitaljs.graphObject({type: AIMP_IFrameEventMessage});
				msg.set('channelURI', _this.channelURI);
				msg.set('endpointURI', _this.endpointURI);
				msg.set('eventType', eventType);
				msg.set('propertyValue', eventValue);
				
				_this.haleyApi.sendMessage(_this.haleySession, msg, [], function(error){
					
					if(error) {
						
						console.error("error when sending iframeevent message: ", error);
						
					} else {
						
						console.log("iframeevent message sent");
						
					}
				});
				
	    	} else 
	    	*/if(data.action == 'sendIntent') {

	    		var intent = data.intent;
	    		var propertyValue = data.propertyValue;
	    		
	    		console.log("sendIntent intent: " + intent + " propertyValue: " + propertyValue);
	    	
				//this is assumed to be non-spa
				var msg = vitaljs.graphObject({type: AIMP_IntentMessage});
				msg.set('channelURI', _this.channelURI);
				msg.set('endpointURI', _this.endpointURI);
				msg.set('intent', intent);
				msg.set('propertyValue', propertyValue);
			
				_this.haleyApi.sendMessage(_this.haleySession, msg, [], function(error){
					
					if(error) {
						
						console.error("error when sending intent message: ", error);
						
					} else {
						
						console.log("intent message sent");
						
					}
					
				});
				
	    	} else if(data.action == 'onChatOpen') {

	    		console.log('onChatOpen, initial request sent ?', _this.initialPageRequestSent);
	    		
	    		if( ! _this.initialPageRequestSent ) {
	    			_this.initialPageRequestSent = true;
	    			_this.sendCurrentPageRequest();
	    		}
	    		
	    		if( window.LASTFORM_instance != null ) {
	    			
//	    			console.log("Rewinding to first question:");
	    			
//	    			window.LASTFORM_instance.changeActiveField(0);
	    			
	    		}
	    		
	    		
	    		if(window.LASTFORM_scrollToFirstVisibleField != null) {
//	    			console.log("SCROLLING TO FIRST VISIBLE FIELD");
//	    			window.LASTFORM_scrollToFirstVisibleField();
//	                }, this.prevQuestion = function() {
//	                    if (e.state.isScrollingAuto) return null;
//	                    var t = (e.props.formStore, e.state.activeFieldSwipeableIndex);
//	                    t > 0 && (e.changeActiveField(t - 1), e.toIndexQuestion(t - 1))
//	                }, this.nextQuestion = function() {
//	                    if (e.state.isScrollingAuto) return null;
//	                    var t = e.props.formStore,
//	                        n = e.state.activeFieldSwipeableIndex;
//	                    n < t.totalVisiblePlusSubmit && (e.changeActiveField(n + 1), e.toIndexQuestion(n + 1))
//	                }, this.toIndexQuestion = function(t) {
//	                    var n = void 0,
//	                        r = e.props.formStore;
//	                    e.changeActiveField(t), lfIsMobile || (t <= Object.keys(r.visibleFieldsSwipeableToAllIndex).length - 1 ? (n = r.fields[r.visibleFieldsSwipeableToAllIndex[t]], e.scrollToField(n)) : e.scrollToSubmit())
//	                }, this.reviewNextQuestion = function() {
//	                    var t = e.props.formStore,
//	                        n = t.fieldsWithErrorsSwipeableIndex,
//	                        r = n[n.length - 1],
//	                        o = (e.state.visibleFieldsSwipeableToAllIndex, e.state.activeFieldSwipeableIndex);
//	                    if (t.updateReviewButtonDisplay(!1), o >= t.totalVisible) e.toIndexQuestion(n[0]);
//	                    else if (o >= r) e.toIndexQuestion(t.totalVisible);
//	                    else
//	                        for (var i = o + 1; i <= r; i++)
//	                            if (n.indexOf(i) >= 0) {
//	                                e.toIndexQuestion(i);
//	                                break
//	                            }
//	                }, this.handleEnter = function(t, n) {
//	                    "submit" == t ? (e.setState({
//	                        submitWaypointIsActive: !0
//	                    }), e.state.isScrollingAuto || e.changeActiveField(Object.keys(e.props.formStore.visibleFieldsSwipeableToAllIndex).length)) : e.state.isScrollingAuto || (t.activateWaypoint(), e.changeActiveField(e.getVisibleIndexByTotalIndex(t.index)))
//	                }, this.handleLeave = function(t, n) {
//	                    "submit" == t ? e.setState({
//	                        submitWaypointIsActive: !1
//	                    }) : t.deactivateWaypoint()
//	                }, this.getVisibleIndexByTotalIndex = function(t) {
//	                    var n = e.props.formStore.visibleFieldsSwipeableToAllIndex;
//	                    for (var r in (0, v.toJS)(n))
//	                        if (n[r] == t) return parseInt(r)
//	                };
	    			
	    			
//	    			console.log("BODY CLICK!");
//	    			$('body').click();
	    		}
	    		
	    	} else {
	    		
	    		console.warn("unhandled iframe action: " + data.action);
	    		
	    	}

	    } else {
	        // The data hasn't been sent from your site!
	        // Be careful! Do not use it.
	        return;
	    }
	}
	
	window.addEventListener('message', this.windowMessageListener);
	
	
	this.goodByePageKeyboardListener = function (e) {
	    var key = e.which || e.keyCode;
	    if (key === 13) { // 13 is enter
	      // code special enter listener
	      var buttons = $('.dialog-button[data-id="local:close"]');
	      if(buttons.length == 1) {
	    	  buttons.click();
	      } else {
	    	  
	    	  //check if we have other buttons, if exactly one click it ot
	    	  var buttons2 = $('.dialog-button');
	    	  if(buttons2.length == 1) {
	    		  buttons2.click();
	    	  }
	    	  
	      }
	    }
	};
	
	
}

LastformWidget.singleton = null;

LastformWidget.uriCounter = 0;

LastformWidget.prototype.render = function() {
	
}

LastformWidget.prototype.onAIMPMessage = function(msgRL) {
	
	console.log("onAIMPMessage", msgRL.iterator());
	
	var msg = msgRL.first();
	
	var channelURI = msg.get('channelURI');
	
	if(channelURI == null || channelURI != this.channelURI) {
		console.log("lastform panel ignoring message not for this channel (" + this.channelURI + "), message channel: " + channelURI);
		return;
	}
	
	var type = msg.type;
	
	if(type == AIMP_QuestionsPageMessage) {
		
		this.onNewQuestionPage(msgRL);
		
		return;
		
	}
	
	if(type == AIMP_QuestionMessage) {
		
		this.onNewQuestion(msgRL);
		
		return;
		
	}
	
	if(type == AIMP_DialogPageElementMessage) {
		
		this.onNewQuestion(msgRL);
		
		return;
		
	}
	
	if(type == AIMP_DialogStatusMessage) {
		
		console.log('dialog status message', msg);
		
//		if(this.dialogStatusMessageHandler != null) {
//			console.log("notifying dialogstatus message handler");
//			this.dialogStatusMessageHandler(msg);
//		}
		
		return;
		
	}
	
	if(type == HaleyTextMessage) {
		
//		this.persistMessage(msgRL);
//		
//		this.textMessages.text(msgRL.first().get('text'));
//		
		return;
		
	}
	
	if(type == AIMP_RemoveQuestionMessage) {
		
//		this.persistMessage(msgRL);
//		
//		this.onRemoveQuestionMessage(msgRL);
		
		return;
		
	}
	
	if(type == AIMP_NotificationMessage) {
		
//		this.persistMessage(msgRL);
//		
		this.onNotificationMessage(msgRL);
		
		return;
		
	}

	if( type == AIMP_SessionExpiredMessage ) {

		if(this.sessionExpiredHandler != null) {
			console.log("Notifying session expired handler");
			this.sessionExpiredHandler(msgRL);
		} else {
			console.warn("Session expired but no handler available");
		}
		
		return;
		
	}
	
	
}

LastformWidget.prototype.onNotificationMessage = function(msgRL) {
	
	var payload = msgRL.iterator();
	
	for(var i = 1; i < payload.length; i++) {
		
		var obj = payload[i];
		
		console.log("Processing notification object", obj);
		
		if(obj.type == AIMP_SwitchEnclosingPageToURL) {

			//render it as a button
			
			var urlToOpen = obj.get('url')
			
			//notify parent iframe of changing the current url
			var m = {source: 'haley', action: 'switchToURL', url: urlToOpen, endpointURI: this.endpointURI};
			console.log('Notifying parent with message', m);
			window.top.postMessage(m, '*');
					
			return [button];
			
		} else if(obj.type == AIMP_EnclosingPageNotification) {
			
			var notificationJsonBody = obj.get('notificationJsonBody');
			
			var notificationData = {};
			
			try {
				
				notificationData = JSON.parse(notificationJsonBody);
				
			} catch(e) {
				notificationData = {error: e.message};
			}
			
			//notify parent iframe of changing the current url

			var m = {source: 'haley', action: 'notificationCard', notification: notificationData, endpointURI: this.endpointURI};
			console.log('Notifying parent with message', m);
			window.top.postMessage(m, '*');
			
		} else if(obj.type == AIMP_CloseIFrame) {

			var targetEndpointURI = obj.get('endpointURI');
				
			var m = {source: 'haley', action: 'closeIFrame', endpointURI: ENDPOINT_URI, purgeSession: obj.get('purgeSession'), targetEndpointURI: targetEndpointURI};
			console.log('Notifying parent with message', m);
			window.top.postMessage(m, '*');
				
		} else if(obj.type == AIMP_OpenIFrame) {
			
			var targetEndpointURI = obj.get('endpointURI');
			var m = {source: 'haley', action: 'openIFrame', endpointURI: ENDPOINT_URI, purgeSession: mainObj.get('purgeSession'), targetEndpointURI: targetEndpointURI};
			console.log('Notifying parent with message', m);
			window.top.postMessage(m, '*');
			
		} else {
			
			console.warn("Unknown notification card: ", obj);
			
		}
		
	}
	
}

LastformWidget.prototype.conditionalLogic = function(value) {
	
//	console.log('conditional input:' , value);
	
	if(! value) return null;
	
	try {
		
		var regex = /\{\{(\d+)\}\}/g;
		
		var out = '';
		
		var lastIndex = 0;
		
		var myArray;
		while ((myArray = regex.exec(value)) !== null) {
			
			out += value.substring(lastIndex, myArray.index);

			var s = value.substring(myArray.index + 2, regex.lastIndex - 2);
			
//			console.log('conditional input sub: ' + s + " " + myArray.index + ' ' + regex.lastIndex);
			
			var qIndex = parseInt(s, 10);

			var elIndex = this.index2QuestionElement[qIndex];
			if (elIndex == null) {
				console.error("Element index not found for qIndex: " + qIndex);
				return null;
			}

			out += elIndex;
			
			lastIndex = regex.lastIndex;

		}
		
		out += value.substring(lastIndex);
		
//		console.log("conditional input processed", out);
		
		var conditionalLogic = JSON.parse(out);
		if($.isPlainObject(conditionalLogic)) return conditionalLogic;
	} catch(e) {
		
	}
	return null
	
}

LastformWidget.prototype.onFormQuestionsReady = function() {

	var _this = this;
	
	console.log("complete questions page ready");

	//sort question elements by index
	this.questionElements.sort(function(rl1, rl2){
		var qmsg1 = rl1.first();
		var index1 = qmsg1.get('index');
		if(index1 == null) index1 = -1;
		
		var qmsg2 = rl2.first();
		var index2 = qmsg2.get('index');
		if(index2 == null) index2 = -1;
		return index1 - index2;
	});
	
	var dialogButtonsCount = 0;
	
	for(var i = 0 ; i < this.questionElements.length; i++ ) {
		var index = this.questionElements[i].first().get('index');
		if(index != null) {
			this.index2QuestionElement[index] = i;
		}
		
	}
	
	
	//convert questions to fields
	for(var i = 0 ; i < this.questionElements.length; i++) {
		
		var rl = this.questionElements[i];
		
		var qmsg = rl.first();
		console.log('new question/element msg', qmsg);

		var dpURI = qmsg.get('dialogPageURI');
		
		if(dpURI == null) {
			console.warn('no dialogPageURI - skipping question');
			continue;
		}
		
		if(dpURI != this.currentPageMsg.get('dialogPageURI')) {
			console.warn("dialogPageURI is different: " + dpURI + " current page: " + this.currentPageMsg.get('dialogPageURI'));
			continue;
		}
		
		
		var msgType = qmsg.type; 
		
		//render page according to
		var q = rl.results[1].graphObject;
		
		var parentQuestionURI = null;
		
		var previousAnswer = null;
		
		var label = null;
		
		var description = null;
		
		var shortDescription = null;
		
		if(msgType == AIMP_QuestionMessage) {
			
			parentQuestionURI = qmsg.get('parentQuestionURI');
			
			previousAnswer = qmsg.get('previousAnswer');
			
			label = q.get('text');
			
		}
		
		var conditionalLogic = null;
		
		var questionType = null;
		
		var required = null;

		var placeholder = null;
		
		if(vitaljs.isSubclassOf(q.type, AIMP_Question)) {
			description = q.get('description');
			shortDescription = q.get('shortDescription');
			
			var clString = q.get('conditionalLogic');
			if(clString == null) {
				clString = q.get('debugMessageBefore');
			}
			
			conditionalLogic = this.conditionalLogic(clString);
			
			console.log('conditionalLogic', conditionalLogic);
			
			questionType = q.get('questionType');
			
			required = q.get('skippable') == false;
			
			placeholder = q.get('placeholder');
			if(placeholder == null) {
				placeholder = q.get('debugMessageAfter');
			}
			
		} else if(q.type == AIMP_DialogButton || q.type == AIMP_DialogTextCard) {
			
			var clString = q.get('conditionalLogic');
			
			conditionalLogic = this.conditionalLogic(clString);
			
			console.log('conditionalLogic', conditionalLogic);
		}
		
		if(shortDescription == null) shortDescription = '';
		
//		this.questionURI2QuestionMsg[qmsg.URI] = qmsg;
//		this.questionURI2MsgRL[qmsg.URI] = newQuestionRL;
		
		var isAutosize = false;

		var questionURI = qmsg.URI;
		
		if(q.type == AIMP_Question && q.get('questionType') == 'textarea') {
			isAutosize = true;
		}
		
		
		if(q.type == AIMP_MultiChoiceQuestion) {
			
			var mv = q.get('multivalue');
			
			if(mv == null) mv = false;
			
			var choices = [];
			
			var inputs = [];
			
			var prevAnswersArray = null;
			if(mv && previousAnswer != null) {
				prevAnswersArray = previousAnswer.split(',');
			}
				
			for(var j = 2; j < rl.results.length; j++) {
					
				var choice = rl.results[j].graphObject;
					
				var cValue = choice.get('choiceValue');
				var cLabel = choice.get('choiceLabel');
				
				var imageURL = choice.get('imageURL');
				
				if(mv) {
					//repeat question URI
						
					//analyze previous answer
					var checked = prevAnswersArray != null ? prevAnswersArray.indexOf(cValue) >= 0 : false;
					
					choices.push({
			            "text": cLabel,
			            "value": cValue,
			            "isSelected": checked,
			            "price": "",
			            lfImg: imageURL
					});
					
					inputs.push({
			            "id": "" + i + "." + (j-1),
			            "label": cLabel,
			            "name": ""
					});
					
//					choices.push({value: value, label: label, checked: checked, questionURI: qmsg.URI});
					
				} else {
					
					choices.push({
			            "text": cLabel,
			            "value": cValue,
			            "isSelected": previousAnswer == cValue,
			            "price": "",
			            lfImg: imageURL
//			            "lfImg": "http:\/\/com-meydjer-demo.s3.amazonaws.com\/wp-content\/uploads\/sites\/756\/2017\/05\/27192001\/astronaut.png"
					});
					
//					choices.push({value: value, label: label, selected: previousAnswer == value, questionURI: qmsg.URI});
					
				}
					
//				choicesList.push(choice);
					
			}
			
			if(mv) {
				
				if(questionType == 'dropdown') {
					
					lfForm.fields.push({
				        "type": "multiselect",
				        "id": i,
				        "label": label,
				        "adminLabel": "",
				        "isRequired": required,
				        "size": "medium",
				        "errorMessage": "",
				        "inputs": null,
				        "choices": choices,
				        "formId": 4,
				        "description": shortDescription,
				        "popoverText": description,
				        "allowsPrepopulate": false,
				        "inputMask": false,
				        "inputMaskValue": "",
				        "inputType": "",
				        "labelPlacement": "",
				        "descriptionPlacement": "",
				        "subLabelPlacement": "",
				        "placeholder": "",
				        "cssClass": "",
				        "inputName": "",
				        "noDuplicates": false,
				        "defaultValue": "",
				        "conditionalLogic": conditionalLogic,
				        "enableEnhancedUI": false,
				        "productField": "",
				        "multiSelectSize": "",
				        "enablePrice": "",
				        "pageNumber": 1,
				        "displayOnly": "",
				        "multipleFiles": false,
				        "maxFiles": "",
				        "calculationFormula": "",
				        "calculationRounding": "",
				        "enableCalculation": "",
				        "disableQuantity": false,
				        "displayAllCategories": false,
				        "useRichTextEditor": false,
				        "visibility": "visible",
				        "storageType": "",
				        "value": []
				    });
					
					
				} else {
					
					lfForm.fields.push({
				        "type": "checkbox",
				        "id": i,
				        "label": label,
				        "adminLabel": "",
				        "isRequired": required,
				        "size": "medium",
				        "errorMessage": "",
				        "choices": choices,
				        "inputs": inputs,
				        "formId": 4,
				        "description": shortDescription,
				        "popoverText": description,
				        "allowsPrepopulate": false,
				        "inputMask": false,
				        "inputMaskValue": "",
				        "inputType": "",
				        "labelPlacement": "",
				        "descriptionPlacement": "",
				        "subLabelPlacement": "",
				        "placeholder": "",
				        "cssClass": "",
				        "inputName": "",
				        "noDuplicates": false,
				        "defaultValue": "",
				        "conditionalLogic": conditionalLogic,
				        "productField": "",
				        "enablePrice": "",
				        "pageNumber": 1,
				        "displayOnly": "",
				        "multipleFiles": false,
				        "maxFiles": "",
				        "calculationFormula": "",
				        "calculationRounding": "",
				        "enableCalculation": "",
				        "disableQuantity": false,
				        "displayAllCategories": false,
				        "useRichTextEditor": false,
				        "visibility": "visible",
				        "value": ""
				    });
					
				}
				
				
							
			} else {

				if(questionType == 'dropdown') {
					
					lfForm.fields.push({
				        "type": "select",
				        "id": i,
				        "label": label,
				        "adminLabel": "",
				        "isRequired": required,
				        "size": "medium",
				        "errorMessage": "",
				        "inputs": null,
				        "choices": choices,
				        "formId": 4,
				        "description": shortDescription,
				        "popoverText": description,
				        "allowsPrepopulate": false,
				        "inputMask": false,
				        "inputMaskValue": "",
				        "inputType": "",
				        "labelPlacement": "",
				        "descriptionPlacement": "",
				        "subLabelPlacement": "",
				        "placeholder": "",
				        "cssClass": "",
				        "inputName": "",
				        "noDuplicates": false,
				        "defaultValue": "",
				        "conditionalLogic": conditionalLogic,
				        "productField": "",
				        "enablePrice": "",
				        "multipleFiles": false,
				        "maxFiles": "",
				        "calculationFormula": "",
				        "calculationRounding": "",
				        "enableCalculation": "",
				        "disableQuantity": false,
				        "displayAllCategories": false,
				        "useRichTextEditor": false,
				        "pageNumber": 1,
				        "displayOnly": "",
				        "visibility": "visible",
				        "value": ""
				    });
					
				} else {
					
					lfForm.fields.push({
				        "type": "radio",
				        "id": i,
				        "label": label,
				        "adminLabel": "",
				        "isRequired": required,
				        "size": "medium",
				        "errorMessage": "",
				        "inputs": null,
				        "choices": choices,
				        "formId": 4,
				        "description": shortDescription,
				        "popoverText": description,
				        "allowsPrepopulate": false,
				        "inputMask": false,
				        "inputMaskValue": "",
				        "inputType": "",
				        "labelPlacement": "",
				        "descriptionPlacement": "",
				        "subLabelPlacement": "",
				        "placeholder": "",
				        "cssClass": "",
				        "inputName": "",
				        "noDuplicates": false,
				        "defaultValue": "",
				        "conditionalLogic": conditionalLogic,
				        "productField": "",
				        "enableOtherChoice": "",
				        "enablePrice": "",
				        "multipleFiles": false,
				        "maxFiles": "",
				        "calculationFormula": "",
				        "calculationRounding": "",
				        "enableCalculation": "",
				        "disableQuantity": false,
				        "displayAllCategories": false,
				        "useRichTextEditor": false,
				        "pageNumber": 1,
				        "displayOnly": "",
				        "visibility": "visible",
				        "value": previousAnswer ? previousAnswer : ""
				    });
					
				}
				

				
			}
			
		} else if(q.type == AIMP_TrueFalseQuestion) {

			var trueLabel = q.get('trueLabel');
			if(trueLabel == null) trueLabel = 'Yes';
			
			var falseLabel = q.get('falseLabel');
			if(falseLabel == null) falseLabel = 'No';
			
			
			var trueChoice = {
	            "text": trueLabel,
	            "value": "true",
	            "isSelected": previousAnswer == 'true'//,					
			};
			
			var falseChoice = {
	            "text": falseLabel,
	            "value": "false",
	            "isSelected": previousAnswer == 'false',
	            "price": ""
			};
			
			lfForm.fields.push({
		        "type": "radio",
		        "id": i,
		        "label": label,
		        "adminLabel": "",
		        "isRequired": required,
		        "size": "medium",
		        "errorMessage": "",
		        "inputs": null,
		        "inputType": "radio",
		        "enablePrice": true,
		        "formId": 4,
		        "description": shortDescription,
		        "popoverText": description,
		        "allowsPrepopulate": false,
		        "inputMask": false,
		        "inputMaskValue": "",
		        "labelPlacement": "",
		        "descriptionPlacement": "",
		        "subLabelPlacement": "",
		        "placeholder": "",
		        "cssClass": "",
		        "inputName": "",
		        "visibility": "visible",
		        "noDuplicates": false,
		        "defaultValue": "",
		        "choices": [trueChoice, falseChoice],
		        "conditionalLogic": conditionalLogic,
		        "basePrice": "$0.00",
		        "productField": "",
		        "multipleFiles": false,
		        "maxFiles": "",
		        "calculationFormula": "",
		        "calculationRounding": "",
		        "enableCalculation": "",
		        "disableQuantity": false,
		        "displayAllCategories": false,
		        "useRichTextEditor": false,
		        "pageNumber": 1,
		        "displayOnly": "",
		        "value": "",
		        "enableOtherChoice": ""
		    });
			
			
		} else if(q.type == AIMP_FileQuestion) {

			/*
			lfForm.fields.push({
		        "type": "fileupload",
		        "id": i,
		        "label": label,
		        "adminLabel": "",
		        "isRequired": required,
		        "size": "medium",
		        "errorMessage": "",
		        "inputs": null,
		        "formId": 4,
		        "description": "Multiple files with preview.",
		        "allowsPrepopulate": false,
		        "inputMask": false,
		        "inputMaskValue": "",
		        "inputType": "",
		        "labelPlacement": "",
		        "descriptionPlacement": "",
		        "subLabelPlacement": "",
		        "placeholder": "",
		        "cssClass": "",
		        "inputName": "",
		        "noDuplicates": false,
		        "defaultValue": "",
		        "choices": "",
		        "conditionalLogic": "",
		        "maxFileSize": 1,
		        "maxFiles": 1,
		        "multipleFiles": false,
		        "allowedExtensions": "jpg, png, jpef, gif",
		        "productField": "",
		        "calculationFormula": "",
		        "calculationRounding": "",
		        "enableCalculation": "",
		        "disableQuantity": false,
		        "displayAllCategories": false,
		        "useRichTextEditor": false,
		        "pageNumber": 1,
		        "displayOnly": "",
		        "visibility": "visible",
		        "value": "",
		        "accept": "image\/jpeg,image\/png,,image\/gif"
			});
			continue;
			*/
			
			var fileNodeURI = null
			
			if(previousAnswer != null && previousAnswer.length > 0) {
				
				fileNodeURI = previousAnswer;
				
			}
			console.log('previous file node', fileNodeURI);
			
			var qEl = $('<div>').append($('<div>', {'class': 'form-group', 'data-question-uri': questionURI}).append([
				$('<div>', {'class': 'lf-question'}).append(
				[
				 $('<i class="lfi-asterisk lf-question-icon-required"></i>'),
				 $('<i class="lfi-arrow_forward lf-question-icon-arrow"></i>'),
				 $('<span>').text(label)
				]),
				$('<div>', {'class': 'file-download-element'})
			]));
			
			var qURI = qmsg.URI;
			
			var sendFileAnswer = function(newFileNodeURI) {
				
				console.log('sending new file node URI value', newFileNodeURI);
				
				var m = vitaljs.graphObject({type: AIMP_AnswerMessage});
				m.set('text', newFileNodeURI);
				m.set('replyTo', qURI);
				m.set('channelURI', _this.channelURI);
				m.set('endpointURI', _this.endpointURI);
				//send aimp message

				var a = vitaljs.graphObject({type: AIMP_FileAnswer});
				a.URI = 'urn:answer-' + new Date().getTime() + '_' + LastformWidget.uriCounter++; 
				a.set('fileNodeURI', newFileNodeURI);
				a.set('name', q.get('propertyName'));
				
				_this.haleyApi.sendMessage(_this.haleySession, m, [a], function(error){
					
					if(error) {
						
						console.error('error when sending file answer message', error);
						
					} else {
						
						console.log('file answer page message sent');
						
					}
					
				});

			};
			
			var onFileUploaded = function(newFileNodeURI){

				sendFileAnswer(newFileNodeURI);
							
			};
			
			var onFileRemoved = function(removedFileNodeURI){
				
				sendFileAnswer(null);
				
			};
			
			
			//just create file element
			var uploadURL = this.fileUploadURL;
			var downloadURL = this.fileDownloadURL;
			
			var appSessionID = this.vitalservice.getSessionID();
//			this.vitalservice.impl.sessionID
//			var appSessionID = this.vitalservice.getSessionID();

			if(appSessionID != null) {
				uploadURL += '?authSessionID=' + encodeURIComponent(appSessionID);
				downloadURL += '?authSessionID=' + encodeURIComponent(appSessionID);
			} else {
				//anonymous version, always public files!
				var sessionID = this.vitalservice.impl.sessionID;
				uploadURL += '?sessionID=' + encodeURIComponent(sessionID);
				uploadURL += '&scope=public';
				downloadURL += '?sessionID=' + encodeURIComponent(sessionID);
				
			}
			
			lfForm.fields.push({
		        "type": "html",
		        "id": i,
		        "label": "FILE UPLOAD",
		        "adminLabel": "",
		        "isRequired": required,
		        "size": "medium",
		        "errorMessage": "",
		        "inputs": null,
		        "displayOnly": true,
		        "formId": 4,
		        "description": shortDescription,
		        "popoverText": description,
		        "allowsPrepopulate": false,
		        "inputMask": false,
		        "inputMaskValue": "",
		        "inputType": "",
		        "labelPlacement": "",
		        "descriptionPlacement": "",
		        "subLabelPlacement": "",
		        "placeholder": placeholder ? placeholder : "",
		        "cssClass": "",
		        "inputName": "",
		        "noDuplicates": false,
		        "defaultValue": "",
		        "choices": "",
		        "conditionalLogic": conditionalLogic,
		        "content": qEl.html(),
		        "productField": "",
		        "multipleFiles": false,
		        "maxFiles": "",
		        "calculationFormula": "",
		        "calculationRounding": "",
		        "enableCalculation": "",
		        "disableQuantity": false,
		        "displayAllCategories": false,
		        "useRichTextEditor": false,
		        "pageNumber": 1,
		        "visibility": "visible",
		        "value": ""
//			        "logicDependentFields": 23
		    });
			
			var fqe = new FileQuestionElement(null, fileNodeURI, uploadURL, downloadURL, _this.getFileNodeFunction, _this.removeFileFunction, onFileRemoved, onFileUploaded);
			fqe.uploadButtonClass = "lf-submit-button-text";
			fqe.fileNameClass = "file-name";
			fqe.fileLengthClass = "file-length";
			fqe.downloadLinkClass = "lf-submit-button-text download-file-link";
			fqe.deleteFileButtonClass = "lf-submit-button-text delete-file-button";
			fqe.maxFileLength = q.get('maxFileLength'); 
			fqe.fileTypeConstraint = q.get('fileTypeConstraint'); 
			fqe.devMode = _this.devMode;
			
			_this.fileUploadElements[questionURI] = fqe;
			
		} else if(q.type == AIMP_PaymentQuestion || ( q.type == AIMP_Question && questionType != null && questionType.indexOf('payment ') == 0) ) {
			
			var paymentService = null;
			
			var publishableKey = null;
			
			_this.activePaymentQuestionURI = questionURI;
			
			if(q.type == AIMP_PaymentQuestion) {
				
				paymentService = q.get('provider');
				
				publishableKey = q.get('publicKey');
				
			} else {
				

				//payment question detected
				var cols = questionType.split(' ');
				if(cols.length != 3) {
					console.error("Expected 3 column payment question type value:", questionType);
					return;
				}
				
				paymentService = cols[1];
				publishableKey = cols[2];
				
			}
			
			if(paymentService == 'stripe') {
				
				var stripeContent = '<div class="" data-stripe-question="' + i + '">' +
					'<div class="lf-question"><i class="lfi-asterisk lf-question-icon-required"></i><i class="lfi-arrow_forward lf-question-icon-arrow"></i><span>' + label + '</span></div>' +
					'<div class="stripe-cc" id="card-element"></div>' +
					'<div class="lf-field-errors" id="card-errors"></div>' +
					'</div>'
				
				
				//set once
				_this.stripePublishableApiKey = publishableKey;
				
				lfForm.fields.push({
			        "type": "html",
			        "id": i,
			        "label": "STRIPE",
			        "adminLabel": "",
			        "isRequired": required,
			        "size": "medium",
			        "errorMessage": "",
			        "inputs": null,
			        "displayOnly": true,
			        "formId": 4,
			        "description": shortDescription,
			        "popoverText": description,
			        "allowsPrepopulate": false,
			        "inputMask": false,
			        "inputMaskValue": "",
			        "inputType": "",
			        "labelPlacement": "",
			        "descriptionPlacement": "",
			        "subLabelPlacement": "",
			        "placeholder": placeholder ? placeholder : "",
			        "cssClass": "",
			        "inputName": "",
			        "noDuplicates": false,
			        "defaultValue": "",
			        "choices": "",
			        "conditionalLogic": conditionalLogic,
			        "content": stripeContent,
			        "productField": "",
			        "multipleFiles": false,
			        "maxFiles": "",
			        "calculationFormula": "",
			        "calculationRounding": "",
			        "enableCalculation": "",
			        "disableQuantity": false,
			        "displayAllCategories": false,
			        "useRichTextEditor": false,
			        "pageNumber": 1,
			        "visibility": "visible",
			        "value": ""
//				        "logicDependentFields": 23
			    });
				
			} else {
				console.error("UNHANDLED PAYMENT SERVICE:", paymentService);
				continue;
			}

			continue;
			
		} else if(q.type == AIMP_Question) {
			
			if(questionType == 'tabular') {

				
				var cdefs = LastformWidget.processColumnsDefinitions(q.get('columnsDefinition'));

				var prevAnswersList = LastformWidget.processTabularAnswer(cdefs, previousAnswer);
				
//				cdefs = [{
//		            "text": "Column 1",
//		            "value": "Column 1",
//		            "isSelected": false,
//		            "price": ""
//		        }, {
//		            "text": "Column 2",
//		            "value": "Column 2",
//		            "isSelected": false,
//		            "price": ""
//		        }, {
//		            "text": "Column 3",
//		            "value": "Column 3",
//		            "isSelected": false,
//		            "price": ""
//		        }];
				
//				prevAnswersList =  [{
//		            "Column 1": "x",
//		            "Column 2": "y",
//		            "Column 3": "z"
//		        }];
				
				lfForm.fields.push({
			        "type": "list",
			        "id": i,
			        "label": label,
			        "adminLabel": "",
			        "isRequired": required,
			        "size": "medium",
			        "errorMessage": "",
			        "inputs": null,
			        "formId": 4,
			        "description": shortDescription,
			        "popoverText": description,
			        "allowsPrepopulate": false,
			        "inputMask": false,
			        "inputMaskValue": "",
			        "inputType": "",
			        "labelPlacement": "",
			        "descriptionPlacement": "",
			        "subLabelPlacement": "",
			        "placeholder": placeholder ? placeholder : "",
			        "cssClass": "",
			        "inputName": "",
			        "noDuplicates": false,
			        "defaultValue": "",
			        "choices": cdefs,
			        "conditionalLogic": conditionalLogic,
			        "maxRows": 0,
			        "productField": "",
			        "pageNumber": 1,
			        "displayOnly": "",
			        "multipleFiles": false,
			        "maxFiles": "",
			        "calculationFormula": "",
			        "calculationRounding": "",
			        "enableCalculation": "",
			        "disableQuantity": false,
			        "displayAllCategories": false,
			        "useRichTextEditor": false,
			        "enableColumns": true,
			        "visibility": "visible",
			        "value": prevAnswersList
			    });
				
				continue;
			}
			
			if(questionType == 'datepicker') {
				lfForm.fields.push({
			        "type": "date",
			        "id": i,
			        "label": label,
			        "adminLabel": "",
			        "isRequired": required,
			        "size": "medium",
			        "errorMessage": "",
			        "inputs": "",
			        "dateType": "datepicker",
			        "calendarIconType": "calendar",
			        "formId": 4,
			        "description": shortDescription,
			        "popoverText": description,
			        "allowsPrepopulate": false,
			        "inputMask": false,
			        "inputMaskValue": "",
			        "inputType": "",
			        "labelPlacement": "",
			        "descriptionPlacement": "",
			        "subLabelPlacement": "",
			        "placeholder": placeholder ? placeholder : "Click to pick",
			        "cssClass": "",
			        "inputName": "",
			        "noDuplicates": false,
			        "defaultValue": "",
			        "choices": "",
			        "conditionalLogic": conditionalLogic,
			        "calendarIconUrl": "",
			        "dateFormat": "mdy",
			        "productField": "",
			        "multipleFiles": false,
			        "maxFiles": "",
			        "calculationFormula": "",
			        "calculationRounding": "",
			        "enableCalculation": "",
			        "disableQuantity": false,
			        "displayAllCategories": false,
			        "useRichTextEditor": false,
			        "pageNumber": 1,
			        "displayOnly": "",
			        "visibility": "visible",
			        "value": previousAnswer ? previousAnswer : ''
			    });
				
				continue;
				
			}

			if(questionType == 'dateentry') {
				lfForm.fields.push({
			        "type": "date",
			        "id": i,
			        "label": label,
			        "adminLabel": "",
			        "isRequired": required,
			        "size": "medium",
			        "errorMessage": "",
			        "inputs": [{
			            "id": i + ".1",
			            "label": "MM",
			            "name": "",
			            "defaultValue": "",
			            "placeholder": ""
			        }, {
			            "id": i + ".2",
			            "label": "DD",
			            "name": "",
			            "defaultValue": "",
			            "placeholder": ""
			        }, {
			            "id": i + ".3",
			            "label": "YYYY",
			            "name": "",
			            "defaultValue": "",
			            "placeholder": ""
			        }],
			        "dateType": "datefield",
			        "calendarIconType": "none",
			        "formId": 4,
			        "description": shortDescription,
			        "popoverText": description,
			        "allowsPrepopulate": false,
			        "inputMask": false,
			        "inputMaskValue": "",
			        "inputType": "",
			        "labelPlacement": "",
			        "descriptionPlacement": "",
			        "subLabelPlacement": "",
			        "placeholder": placeholder ? placeholder : "",
			        "cssClass": "",
			        "inputName": "",
			        "noDuplicates": false,
			        "defaultValue": "",
			        "choices": "",
			        "conditionalLogic": conditionalLogic,
			        "calendarIconUrl": "",
			        "dateFormat": "mdy",
			        "productField": "",
			        "multipleFiles": false,
			        "maxFiles": "",
			        "calculationFormula": "",
			        "calculationRounding": "",
			        "enableCalculation": "",
			        "disableQuantity": false,
			        "displayAllCategories": false,
			        "useRichTextEditor": false,
			        "pageNumber": 1,
			        "displayOnly": "",
			        "visibility": "visible",
			        "value": previousAnswer ? previousAnswer : ''
			    });
				continue;
			}
			
			if(questionType == 'timepicker') {
				
				
//				value = value[0] + ':' + value[1] + ' ' + value[2];
				
				var value = "";
				
				if(previousAnswer) {
					try {
						
						var cols1 = previousAnswer.split(":");
						if(cols1.length != 2) throw "Expected 2 colon separated columns hh:mm a";
						var h = cols1[0];
						var cols2 = cols1[1].split(" ");
						if(cols2.length != 2) throw "Expected 2 space separated columns hh:mm a";
						var m = cols2[0];
						var a = cols2[1];
						
						value = [h, m, a];
						
					} catch(e) {
						console.error("Parse time error: " + e, previousAnswer);
					}
				}
				
				lfForm.fields.push({
			        "type": "time",
			        "id": i,
			        "label": label,
			        "adminLabel": "",
			        "isRequired": required,
			        "size": "medium",
			        "errorMessage": "",
			        "inputs": [{
			            "id": i + ".1",
			            "label": "HH",
			            "name": ""
			        }, {
			            "id": i + ".2",
			            "label": "MM",
			            "name": ""
			        }, {
			            "id": i + ".3",
			            "label": "AM\/PM",
			            "name": ""
			        }],
			        "formId": 4,
			        "description": shortDescription,
			        "popoverText": description,
			        "allowsPrepopulate": false,
			        "inputMask": false,
			        "inputMaskValue": "",
			        "inputType": "",
			        "labelPlacement": "",
			        "descriptionPlacement": "",
			        "subLabelPlacement": "",
			        "placeholder": placeholder ? placeholder : "",
			        "cssClass": "",
			        "inputName": "",
			        "noDuplicates": false,
			        "defaultValue": "",
			        "choices": "",
			        "conditionalLogic": conditionalLogic,
			        "timeFormat": "12",
			        "productField": "",
			        "multipleFiles": false,
			        "maxFiles": "",
			        "calculationFormula": "",
			        "calculationRounding": "",
			        "enableCalculation": "",
			        "disableQuantity": false,
			        "displayAllCategories": false,
			        "useRichTextEditor": false,
			        "pageNumber": 1,
			        "displayOnly": "",
			        "visibility": "visible",
			        "value": value
			    });
			
				continue;
			}
			
			if(questionType == 'number' || questionType == 'currency') {
				
				lfForm.fields.push({
			        "type": "number",
			        "id": i,
			        "label": label,
			        "adminLabel": "",
			        "isRequired": required,
			        "size": "medium",
			        "errorMessage": "",
			        "inputs": null,
			        "numberFormat": questionType == 'currency' ? 'currency' :  "decimal_dot",
			        "formId": 4,
			        "description": shortDescription,
			        "popoverText": description,
			        "allowsPrepopulate": false,
			        "inputMask": false,
			        "inputMaskValue": "",
			        "inputType": "",
			        "labelPlacement": "",
			        "descriptionPlacement": "",
			        "subLabelPlacement": "",
			        "placeholder": "",
			        "cssClass": "",
			        "inputName": "",
			        "noDuplicates": false,
			        "defaultValue": "",
			        "choices": "",
			        "conditionalLogic": conditionalLogic,
			        "enableCalculation": false,
			        "rangeMin": "",
			        "productField": "",
			        "rangeMax": "",
			        "multipleFiles": false,
			        "maxFiles": "",
			        "calculationFormula": "",
			        "calculationRounding": "",
			        "disableQuantity": false,
			        "displayAllCategories": false,
			        "useRichTextEditor": false,
			        "pageNumber": 1,
			        "displayOnly": "",
			        "visibility": "visible",
			        "value": previousAnswer ? previousAnswer : ''
			    });
				
				continue;
				
			}
			
			if(questionType == 'download') {
					
				var fileNode = rl.results[2].graphObject;
				
				var fileDownloadURL = _this.haleyApi.getFileNodeDownloadURL(_this.haleySession, fileNode);

				var downloadButton = $('<a>', {'class': 'btn btn-primary lf-submit-button-text download-file-link', href: fileDownloadURL, target: '_blank'}).text('Download');
				
				var el = $('<div>', {'class': 'file-download-element'}); 
				var len = fileNode.get('fileLength');
				var ftype = fileNode.get('fileType')
				el.append(
				[
				 $('<span>', {'class': _this.fileNameClass}).text( fileNode.get('fileName') ), 
				 document.createTextNode(' '), 
				 $('<span>', {'class': _this.fileLengthClass}).text( len != null ? FileQuestionElement.formatBytes(len) : '' ), 
				 document.createTextNode(' '), 
				 $('<span>', {'class': _this.fileTypeClass}).text(ftype != null ? ftype: ''),
				 document.createTextNode(' '),
				 downloadButton
				]);
				
				var t = $('<div>').append(
				[ 
				 $('<div>', {'class': 'lf-question'}).append(
					[
					 $('<i class="lfi-asterisk lf-question-icon-required"></i>'),
					 $('<i class="lfi-arrow_forward lf-question-icon-arrow"></i>'),
					 $('<span>').text(label)
					]), 
				 el
				]).html();
				
				lfForm.fields.push({
			        "type": "html",
			        "id": i,
			        "label": t,
			        "adminLabel": "",
			        "isRequired": false,
			        "size": "medium",
			        "errorMessage": "",
			        "inputs": null,
			        "displayOnly": true,
			        "formId": 4,
			        "description": shortDescription,
			        "popoverText": description,
			        "allowsPrepopulate": false,
			        "inputMask": false,
			        "inputMaskValue": "",
			        "inputType": "",
			        "labelPlacement": "",
			        "descriptionPlacement": "",
			        "subLabelPlacement": "",
			        "placeholder": "",
			        "cssClass": "",
			        "inputName": "",
			        "noDuplicates": false,
			        "defaultValue": "",
			        "choices": "",
			        "conditionalLogic": conditionalLogic,
			        "content": t,
			        "productField": "",
			        "multipleFiles": false,
			        "maxFiles": "",
			        "calculationFormula": "",
			        "calculationRounding": "",
			        "enableCalculation": "",
			        "disableQuantity": false,
			        "displayAllCategories": false,
			        "useRichTextEditor": false,
			        "pageNumber": 1,
			        "visibility": "visible",
			        "value": ""
//				        "logicDependentFields": 23
			    });
				
				continue;
			}
			

			if(isAutosize) {
				
				lfForm.fields.push( {
			        "type": "textarea",
			        "id": i,
			        "label": label,
			        "adminLabel": "",
			        "isRequired": required,
			        "size": "medium",
			        "errorMessage": "",
			        "inputs": null,
			        "formId": 4,
			        "description": shortDescription,
			        "popoverText": description,
			        "allowsPrepopulate": false,
			        "inputMask": false,
			        "inputMaskValue": "",
			        "inputType": "",
			        "labelPlacement": "",
			        "descriptionPlacement": "",
			        "subLabelPlacement": "",
			        "placeholder": placeholder ? placeholder : "",
			        "cssClass": "",
			        "inputName": "",
			        "noDuplicates": false,
			        "defaultValue": "",
			        "choices": "",
			        "conditionalLogic": conditionalLogic,
			        "productField": "",
			        "form_id": "",
			        "useRichTextEditor": false,
			        "pageNumber": 1,
			        "displayOnly": "",
			        "multipleFiles": false,
			        "maxFiles": "",
			        "calculationFormula": "",
			        "calculationRounding": "",
			        "enableCalculation": "",
			        "disableQuantity": false,
			        "displayAllCategories": false,
			        "visibility": "visible",
			        "value": previousAnswer ? previousAnswer : ""
			    });
				
			} else {
				
				lfForm.fields.push({
			        "type": "text",
			        "id": i,
			        "label": label,
			        "adminLabel": "",
			        "isRequired": required,
			        "size": "medium",
			        "errorMessage": "",
			        "inputs": null,
			        "formId": 4,
			        "description": shortDescription,
			        "popoverText": description,
			        "allowsPrepopulate": false,
			        "inputMask": false,
			        "inputMaskValue": "",
			        "inputType": "",
			        "labelPlacement": "",
			        "descriptionPlacement": "",
			        "subLabelPlacement": "",
			        "placeholder": placeholder ? placeholder : "",
			        "cssClass": "",
			        "inputName": "",
			        "noDuplicates": false,
			        "defaultValue": "",
			        "choices": "",
			        "conditionalLogic": conditionalLogic,
			        "productField": "",
			        "enablePasswordInput": "",
			        "maxLength": "",
			        "multipleFiles": false,
			        "maxFiles": "",
			        "calculationFormula": "",
			        "calculationRounding": "",
			        "enableCalculation": "",
			        "disableQuantity": false,
			        "displayAllCategories": false,
			        "useRichTextEditor": false,
			        "pageNumber": 1,
			        "displayOnly": "",
			        "visibility": "visible",
			        "value": previousAnswer ? previousAnswer : ""
			    });
				
			}
			
			
		} else if(q.type == AIMP_DialogTextCard) {

			var t = q.get('text');
			
			lfForm.fields.push({
		        "type": "html",
		        "id": i,
		        "label": t,
		        "adminLabel": "",
		        "isRequired": false,
		        "size": "medium",
		        "errorMessage": "",
		        "inputs": null,
		        "displayOnly": true,
		        "formId": 4,
		        "description": shortDescription,
		        "popoverText": description,
		        "allowsPrepopulate": false,
		        "inputMask": false,
		        "inputMaskValue": "",
		        "inputType": "",
		        "labelPlacement": "",
		        "descriptionPlacement": "",
		        "subLabelPlacement": "",
		        "placeholder": "",
		        "cssClass": "",
		        "inputName": "",
		        "noDuplicates": false,
		        "defaultValue": "",
		        "choices": "",
		        "conditionalLogic": conditionalLogic,
		        "content": t,
		        "productField": "",
		        "multipleFiles": false,
		        "maxFiles": "",
		        "calculationFormula": "",
		        "calculationRounding": "",
		        "enableCalculation": "",
		        "disableQuantity": false,
		        "displayAllCategories": false,
		        "useRichTextEditor": false,
		        "pageNumber": 1,
		        "visibility": "visible",
		        "value": ""
//		        "logicDependentFields": 23
		    });
			
		} else if(q.type == AIMP_DialogButton) { 


			var qEl = $('<div>').append( $('<button>', {'data-question-index': "" + i, 'class': 'dialog-button lf-submit-button-text', style: 'padding: 5px;', 'data-id': q.get('id')}).text(q.get('name')) );
			
			dialogButtonsCount++;
			
//			.click(function(){
//						
//						var buttonID = $(this).attr('data-id');
//						console.log("button clicked:", buttonID);
//						//notify parent window?
//						var buttonClickedMessage = vitaljs.graphObject({type: AIMP_DialogButtonClickedMessage});
//						buttonClickedMessage.set('id', buttonID);
//						buttonClickedMessage.set('channelURI', _this.channelURI);
//						buttonClickedMessage.set('endpointURI', _this.endpointURI);
//						
//						_this.haleyApi.sendMessage(_this.haleySession, buttonClickedMessage, [], function(error){
//							
//							if(error) {
//								
//								console.error('error when sending dialog button clicked message', error);
//								
//							} else {
//								
//								console.log('dialog button clicked message sent');
//								
//							}
//						});
//						
//						if(_this.dialogButtonClickHandler != null) {
//							console.log("notifying dialog button click handler");
//							_this.dialogButtonClickHandler(q);
//						}
//
//					})
//				);
			

			lfForm.fields.push({
		        "type": "html",
		        "id": i,
		        "label": t,
		        "adminLabel": "",
		        "isRequired": false,
		        "size": "medium",
		        "errorMessage": "",
		        "inputs": null,
		        "displayOnly": true,
		        "formId": 4,
		        "description": shortDescription,
		        "popoverText": description,
		        "allowsPrepopulate": false,
		        "inputMask": false,
		        "inputMaskValue": "",
		        "inputType": "",
		        "labelPlacement": "",
		        "descriptionPlacement": "",
		        "subLabelPlacement": "",
		        "placeholder": "",
		        "cssClass": "",
		        "inputName": "",
		        "noDuplicates": false,
		        "defaultValue": "",
		        "choices": "",
		        "conditionalLogic": conditionalLogic,
		        "content": qEl.html(),
		        "productField": "",
		        "multipleFiles": false,
		        "maxFiles": "",
		        "calculationFormula": "",
		        "calculationRounding": "",
		        "enableCalculation": "",
		        "disableQuantity": false,
		        "displayAllCategories": false,
		        "useRichTextEditor": false,
		        "pageNumber": 1,
		        "visibility": "visible",
		        "value": ""
//		        "logicDependentFields": 23
		    });
			
			
			continue;
			
		} else if(q.type == AIMP_SwitchEnclosingPageToURL) {
			
			console.error("TODO switch enclosing page to URL");
			
			continue;
			
			//render it as a button
			
		} else {
			console.error("unhandled question type: " + q.type);
			
		}
		
		
//		if(isAutosize) {
//			//autosize
//			// from a jQuery collection
//			autosize(qEl.find('textarea'));
//			
//		}

	}
	
	
//	var url = PREFIX + 'js/lastform/lastform-public.unminified-2.1.0.27.js';
	var url = 'js/lastform/dist/lastform-public.unminified-2.1.0.27.min.js';
//	var url = PREFIX + 'js/lastform/lastform-public.unminified-2.1.1.6.js';
	
	var qPage = this.currentPageMsg;
	var total = qPage.get('totalPages');
	var page = qPage.get('page');
	
	if(page < total) {
		lfForm.button.text = "Next";
		lfForm.i18n.pressEnter = "press <strong>ENTER<\/strong> for Next";
	} else {
		lfForm.button.text = "Submit";
		lfForm.i18n.pressEnter = "press <strong>ENTER<\/strong> for Submit";
	}
	
	var onSuccess = function() {

		console.log("lastform loaded");
		
		
		if( lfForm.lastform.welcomeEnabled != "1") {
			//no welcome screen - trit
			_this.onStartForm();
			
			
		}
		
		//deferred set loading in order ignore timeout out visibility notification in initial sequence 
		setTimeout(function(){
			_this.lastformLoaded = true;
		}, 10);
		
		
//		$('#lastform').prepend($('<div>', {'style': 'height: 100px; background-color: red;'}).text('TEST'));
		
//		setTimeout(function(){
////			var e = jQuery.Event("keypress");
////			e.which = 13; //choose the one you want
////			e.keyCode = 13;
////			$('body').trigger(e);
//			$('.lf-nav-inner-continue').click();
//		}, 1000);
	
	};
	
	
	$.ajax({
		url: CDN_PREFIX + url,
		dataType: "script",
		cache: true,
		success: onSuccess,
		error: function(){
			
			$.ajax({
				url: PREFIX + url,
				dataType: "script",
				cache: true,
				success: onSuccess
			});
			
		}
		
	});
	
	
	
}

LastformWidget.prototype.onSubmitError = function(error) {
	
	var submitPanel = $('#lf-submit');
	
	var errorObj = null;
	
	if(error == null) error = '';
	error = $.trim(error);
	if(error.indexOf('{') == 0) {
		try {
			var parsed = JSON.parse(error);
			if(typeof(parsed) === 'object') {
				errorObj = parsed;
			} else {
				throw new Error( "Not an error object: " + ( typeof(parsed) ) );
			}
		} catch(e) {
			console.error("Error when parsing error object", e);
		}
	}
	
	if(errorObj != null) {
		error = errorObj.message;
		//mute the message
		error = '';
//		if(error == null) error = '';
		
		var outFields = [];
		
		for(var i = 0 ; i < errorObj.fields.length; i++) {
			var f = errorObj.fields[i];

			var qIndex = parseInt(f.id, 10);
			
			var elIndex = this.index2QuestionElement[qIndex];

			if (elIndex == null) {
				console.error("Element index not found for qIndex: " + qIndex);
				continue;
			}
			
			outFields.push({id: '' + elIndex, validationMessage: f.error});
		}
		
		var data = {
			code: "invalid",
			fields: outFields
		};
		
		errorObj = {
			data: data
		};
		
	}
	
	if(submitPanel.length > 0) {
		
		var errorPanel = submitPanel.find('.error-message');
		if(errorPanel.length == 0) {
			errorPanel = $('<div>', {'class': "error-message", 'style': "color: red;"});
			submitPanel.append(errorPanel);
		}
		
		errorPanel.text(error);
		
	}
	
	if(this.submitCallback != null) {
		this.submitCallback(errorObj != null ? errorObj : error);
	}
	
	this.submitCallback = null;
	
}

LastformWidget.prototype.onNewQuestionPage = function(msgRL) {
	
	this.clearPageCheckTimer();

	var qPage = msgRL.first();
	
	var status = qPage.get('status');
	
	if(status == 'error') {
		
		var error = qPage.get('text');

		this.onSubmitError(error);
		
		return;
	}
	
	var goodbyePage = qPage.get('goodbyePage') == true;

	if(this.submitCallback != null) {
		//do not notify, just proceed
		this.submitCallback = null;
	}
	
	this.lastformLoaded = false;
	
	this.activePaymentQuestionURI = null;
	this.activePaymentQuestionAction = null;
	this.stripePublishableApiKey = null;
	
	$('#form-loading-label').remove();
	
	lfForm.fields = [];
	lfForm.lastform.welcomeEnabled = "0";
	
	//clear any active lastform event listeners
	clearLastformEvents();
	
	if(goodbyePage) {

		window.LASTFORM_instance = null;
		
		this.formEnded = true;
		
		//destroy the panel;
		this.currentPageMsg = null;
		
		this.parentEl.empty().html('<div data-reactroot="" class="lf-main lf-is-not-touch lf-needs-review lf-welcome-large lf-confirmation-screen"><div class="lf-confirmation"></div></div>');
		
		this.formEndedEl = this.parentEl.find('.lf-confirmation');
		
//		lfForm.fields = [];
//		lfForm.lastform.welcomeEnabled = "0";
		
	} else {
		
		this.formEnded = false;
		
		this.parentEl.empty();

		//try refreshing the lastform
		
		var page = qPage.get('page');

		//always disable form
//		lfForm.lastform.welcomeEnabled = page == 1 ? "1" : "0";
//		lfForm.lastform.welcomeEnabled = "0";
		
	}
	
	this.currentPageMsg = qPage;

	this.questionElements = [];
	this.fileUploadElements = {};
	this.index2QuestionElement = {};
	
	var staticQuestionsList = qPage.get('staticQuestionsList');
	
	if(staticQuestionsList) {
		
		var objects = msgRL.iterator();
		
		var lastObjs = null;
		
		var toVirtualMsg = function(msgType, _objList, _randomCounter){
			var rl = vitaljs.resultList();
			var msgObj = vitaljs.graphObject({type: msgType});
			msgObj.set('dialogPageURI', qPage.get('dialogPageURI'));
			msgObj.URI = _objList[0].URI;
			rl.addResult(msgObj);
			for(var i = 0 ; i < _objList.length; i++) {
				rl.addResult(_objList[i]);
			}
			var firstObj = _objList[0];
			msgObj.set('index', firstObj.get('index'));
			if(vitaljs.isSubclassOf(firstObj.type, AIMP_Question)) {
				msgObj.set('previousAnswer', firstObj.get('previousAnswer'));
			}
			return rl;
		};
		
		var randomCounter = 0;
		
		var newQuestionsMsgs = [];
		
		for(var i = 1 ; i < objects.length; i++) {
			
			var obj = objects[i];
			
			if(vitaljs.isSubclassOf(obj.type, AIMP_Question)) {
			
				if(lastObjs != null) {
					newQuestionsMsgs.push( toVirtualMsg(AIMP_QuestionMessage, lastObjs, randomCounter++) );
				}
				
				lastObjs = [obj];
				
			} else if(obj.type == AIMP_DialogButton || obj.type == AIMP_DialogTextCard) {
				
				
				if(lastObjs != null) {
					newQuestionsMsgs.push( toVirtualMsg(AIMP_QuestionMessage, lastObjs, randomCounter++) );
					lastObjs = null;
				}
				
				newQuestionsMsgs.push( toVirtualMsg(AIMP_DialogPageElementMessage, [obj], randomCounter++) );
				
			} else {
				
				if(lastObjs == null) {
					console.error("Unexpected elements sequence, oprhan object: ", obj);
					continue;
				}
				
				lastObjs.push(obj);
				
			}
			
		}
		
		if(lastObjs != null) {
			newQuestionsMsgs.push( toVirtualMsg(AIMP_QuestionMessage, lastObjs, randomCounter++) );
		}
		
		this.pageElementsCount = newQuestionsMsgs.length;
		
		//artificial timeout to get rid of lastform input related exceptions
		for(var i = 0 ; i < newQuestionsMsgs.length; i++) {
			this.onNewQuestion(newQuestionsMsgs[i]);
		}
		
		if(this.formEnded) {
			//append 
			var buttons = $('.dialog-button[data-id="local:close"]');
			if(buttons.length == 1) {
				buttons.closest('.dialog-button-wrapper').append(
					$('<div>', {'class': 'close-button-label'}).append([document.createTextNode('press '), $('<strong>').text('ENTER'), document.createTextNode(' to Close')])
				);
			} else {
	    	  
				//check if we have other buttons, if exactly one click it ot
				var buttons2 = $('.dialog-button');
				if(buttons2.length == 1) {
					buttons2.closest('.dialog-button-wrapper').append(
						$('<div>', {'class': 'close-button-label'}).append([document.createTextNode('press '), $('<strong>').text('ENTER')])
					);
				}
	    	  
			}
				
		}
		
	} else {
		
		var degree = this.currentPageMsg.get('degree');
		if(degree == null || degree < 1) {
			console.error("No page elements count available");
			return;
		}
		
		this.pageElementsCount = degree;
		
	}
	

	
	
}

LastformWidget.prototype.onNewQuestion = function(msgRL) {
	
	var _this = this;
	
	var msg = msgRL.first();
	
	var t = msg.type;
	
	if(this.formEnded) {
	
		//form ended just render text and buttons
		
		//render page according to
		var q = msgRL.results[1].graphObject;
	
		if(q.type == AIMP_DialogTextCard) {

			var t = q.get('text');
		
			this.formEndedEl.append($('<div>').html(t));
			
		} else if(q.type == AIMP_DialogButton) { 

			var btnId = q.get('id');
			
			var btn = $('<button>', {'class': 'dialog-button lf-submit-button-text', 'style': 'padding: 5px; margin: 15px;', 'data-id': btnId}).text(q.get('name'));
			
			var qEl = $('<div>', {'class': 'dialog-button-wrapper'}).append( btn );

			this.formEndedEl.append(qEl);
			
			//add tracked listener
			document.removeEventListener('keypress', this.goodByePageKeyboardListener);
			document.addEventListenerTracked('keypress', this.goodByePageKeyboardListener);
		
		} else if(q.type == AIMP_SwitchEnclosingPageToURL) {
		
			console.error("TODO switch enclosing page to URL");
		
			//render it as a button
		
		} else {
			
			console.warn("form ended, ignoring card of type: " + q.type);
			
		}
		
		return;
		
	}
	
	if(this.currentPageMsg == null) {
		console.warn("No active question - ignoring ", t);
		return;
	}
	
	
	
	
	this.questionElements.push(msgRL);
	
	if(this.questionElements.length == this.pageElementsCount) {
		
		this.onFormQuestionsReady();
		
	}
	
	
	
	
}

LastformWidget.prototype.sendCurrentPageRequest = function(cb) {
	
	var m = vitaljs.graphObject({type: AIMP_QuestionsPageNavigationMessage});
	m.set('requestedPage', 'current');
	m.set('channelURI', this.channelURI);
	m.set('endpointURI', this.endpointURI);
	//send aimp message
	
	this.startPageCheckTimer();
	
	this.haleyApi.sendMessage(this.haleySession, m, [], function(error){
		
		if(error) {
			
			console.error('error when sending current page request', error);
			
		} else {
			
			console.log('current page request sent');
			
		}
		
		if(cb != null) {
			cb(error);
		}
		
	});
	
}


LastformWidget.prototype.onSubmit = function(formData, callback, isPrevious) {

	if(this.submitCallback != null) {
		console.warn("Submit callback already set, ignoring this event");
		return;
	}
	
	this.onSubmitError('');
	
	this.submitCallback = callback;
	
	//enqueue messages to be sent
	this.messagesToSend = [];
	
	console.log("formData", formData);
	console.log("isPrevious", isPrevious);
	
	//AIMP_FormPageAnswersMessage test
	var answersList = [];

	for(var i = 0 ; i < this.questionElements.length; i++) {

		var value = formData[i];
		
		var msgRL = this.questionElements[i];
		
		var qmsg = msgRL.first();
		
		var qPayload = qmsg.get('payload');
		
		var msgType = qmsg.type;
		
		var q = msgRL.results[1].graphObject;
		
		var parentQuestionURI = null;
		
		var questionURI = qmsg.URI;
		
		var questionType = null;
		
		if(msgType == AIMP_QuestionMessage) {
			parentQuestionURI = qmsg.get('parentQuestionURI');
		}
		
		var propertyName = null;
		
		if( vitaljs.isSubclassOf(q.type, AIMP_Question) ) {
			propertyName = q.get('propertyName');
			questionType = q.get('questionType');
		}
		
		if(q.type == AIMP_MultiChoiceQuestion) {
			
			var mv = q.get('multivalue');
			if(mv == null) mv = false;

			var m = vitaljs.graphObject({type: AIMP_AnswerMessage});
			m.set('replyTo', questionURI);
			m.set('channelURI', this.channelURI);
			m.set('endpointURI', this.endpointURI);
			m.set('payload', qPayload);
			
			
			var ca = vitaljs.graphObject({type: AIMP_ChoiceAnswer});
			ca.URI = 'urn:ca-' + new Date().getTime() + '_' + LastformWidget.uriCounter++;
			ca.set('name', propertyName);
			
			var outMsg = [m, ca];
			
			answersList.push(ca);
			
			var choiceValues = [];
			
			if(mv) {
				
				if(value != null) {
					if(!$.isArray( value )) throw "multivalue answer value must be an array";
					choiceValues = value;
				}
				
			} else {
				if(value != null) {
					choiceValues.push(value);
				}
			}
			
			m.set('text', '[' + choiceValues.join(', ') + ']');
			
			var choices = msgRL.iterator(AIMP_Choice);
			
			for(var j = 0 ; j < choiceValues.length; j++) {
				
				var c = null;
				
				for(var k = 0 ; k < choices.length; k++) {
					if(choiceValues[j] == choices[k].get('choiceValue')) {
						c = choices[k];
						break;
					}
				}
				
				if(c == null) throw "choice not found: " + choiceValues[j];
				
				outMsg.push(c);
				answersList.push(c);
				
			}

//			this.messagesToSend.push(outMsg);
			
		} else if(q.type == AIMP_TrueFalseQuestion) {
			

			var answerChoice = vitaljs.graphObject({type: AIMP_TrueFalseAnswer});
			answerChoice.URI = 'http://vital.ai/answerchoice/choice-' + new Date().getTime() + '_' + LastformWidget.uriCounter++;
			answerChoice.set('booleanValue', value != null ? (value == 'true') : null);
			answerChoice.set('text', value);
			answerChoice.set('name', propertyName);
			
			var m = vitaljs.graphObject({type: AIMP_AnswerMessage});
			m.set('text', '' + value);
			m.set('replyTo', questionURI);
			m.set('channelURI', this.channelURI);
			m.set('endpointURI', this.endpointURI);
			m.set('payload', qPayload);
			
//			this.messagesToSend.push([m, answerChoice]);
			answersList.push(answerChoice);
			
		} else if(q.type == AIMP_FileQuestion) {

//			var fileAnswer = vitaljs.graphObject({type: AIMP_FileAnswer});
//			fileAnswer.URI = 'http://vital.ai/fileanswer/answer-' + new Date().getTime() + '_' + LastformWidget.uriCounter++;
//			fileAnswer.set('name', propertyName);
//			fileAnswer.set('fileNodeURI', value);
//			
//			answersList.push(fileAnswer);
			
			//sent separately
			
		} else if(q.type == AIMP_Question) {

			//q.questionType = 'payment ' + nextQuestion.paymentService.name() + ' ' + nextQuestion.publishableKey
			if(questionType != null && questionType.indexOf('payment ') == 0) {
				//skip payment question, token already provided
				continue;
			}
			
			if(questionType == 'tabular') {
				
				var cdefs = LastformWidget.processColumnsDefinitions(q.get('columnsDefinition'));

				var ccount = cdefs.length;
				
				var a = [];
				
				if(value != null) {
					if($.isArray(value)) {
						a = value;
					} else {
						a = [value];
					}
				}
				
				
				var records = [];
				var currentRecord = null;
				for(var ci = 0; ci < a.length; ci++) {
					var li = ci % ccount;
					if(li == 0) {
						currentRecord = [];
						records.push(currentRecord);
					}
					var cdef = cdefs[li]; 
					currentRecord.push({name: cdef.name, value: a[ci]});
				}

				value = JSON.stringify(records);
				
			} else if(questionType == 'timepicker') {
				
				if($.isArray(value) && value.length == 3) {
					
					value = value[0] + ':' + value[1] + ' ' + value[2];
					
				}
				
			}
			
			var m = vitaljs.graphObject({type: AIMP_AnswerMessage});
			m.set('text', value ? value : '');
			m.set('replyTo', questionURI);
			m.set('channelURI', this.channelURI);
			m.set('endpointURI', this.endpointURI);
			m.set('payload', qPayload);
			//send aimp message

			var a = vitaljs.graphObject({type: AIMP_Answer});
			a.URI = 'urn:answer-' + new Date().getTime() + '_' + LastformWidget.uriCounter++; 
			a.set('text', value ? value : '');
			a.set('name', propertyName);

//			this.messagesToSend.push([m, a]);
			answersList.push(a);
			
		} else {
			
			console.log("ignoring question of type: " + q.type);
			
			continue;
			
		}
		
	}
	
	if(answersList.length > 0) {
		
		var m = vitaljs.graphObject({type: AIMP_FormPageAnswersMessage});
		m.set('dialogPageURI', this.currentPageMsg.get('dialogPageURI'));
		m.set('channelURI', this.channelURI);
		m.set('endpointURI', this.endpointURI);
		//send aimp message
		
		var arr = [m];
		
		for(var i = 0 ; i < answersList.length; i++) {
			var o = answersList[i];
			arr.push(o);
		}
		
		this.messagesToSend.push(arr);
		
	}
	
	//first generate the payment token if stripe api is there
	if( isPrevious != true && this.activePaymentQuestionAction != null ) {
		
		var _this = this;
		
		this.activePaymentQuestionAction(function(error){
			
			if(error) {
				console.error('Cannot submit the form due payment question error: ', error);
				_this.onSubmitError(error);
				return;
			}
			
			_this.sendNextQuestionMessage(isPrevious);
			
		});
		
	} else {
		
		this.sendNextQuestionMessage(isPrevious);
		
	}
	
	
}

LastformWidget.prototype.initPopovers = function(){
	
	var els = this.parentEl.find('[data-popover-text]');
	
	els.each(function(index){
		
		var el = $(this);
		
		var txt = el.attr('data-popover-text');
		if(txt == null) txt = '';
		txt = $.trim(txt);

		if(txt.length == 0) {
			return;
		}

		var button = $('<button>', {
			'class': 'more-info-button',
			'data-container': 'body',
			'data-content': txt,
			'data-toggle': 'popover',
			'data-placement': 'bottom',
			'data-html': "true",
			'data-trigger': 'manual'
		}).text('More Info').click(function(){
			$(this).popover('toggle');
		});
		
		el.append([ document.createTextNode(' '), button]);
		el.popover();
		
	});
	
//	this.parentEl.on('click', '[data-popover-text]', function(){
//		var el = $(this);
//		
//		var txt = el.attr('data-popover-text');
//		
//		//convert it into bootstrap popover
//		if(txt) {
//			el.addClass('lastform-popover');
//			el.removeAttr('data-popover-text');
//			el.attr('data-content', txt);
//			el.attr('data-toggle', 'popover');
//			el.attr('data-placement', 'bottom');
////			el.attr('data-trigger', 'focus');
//			el.popover(/*{delay: { "show": 500, "hide": 500 }}*/).popover('show'); 
//		}
//		
//	});

//	this.parentEl.on('click', function(e){
//		if( $(e.target).closest('.lastform-popover').length == 0 ) {
//			$('.lastform-popover').popover('hide');
//		}
//	}); 
}

LastformWidget.prototype.onStartForm = function() {
	
	this.initPopovers();
	
	var _this = this;
	
	this.onSubmitPanelCreated();
	
	/*
	var qPage = this.currentPageMsg;
	var total = qPage.get('totalPages');
	var page = qPage.get('page');

	var wrapper = null;
	
	if(page > 1) {
		
		//add previous button
		wrapper = $('.lf-submit-button-wrapper');
		
		var previousButton = $('<button>', {'class': 'lf-submit-button lf-previous-button lf-submit-button-text'}).append(
		[
		 document.createTextNode('Previous'),
		 $('<div>', {'class': "lf-loader"}).text('Loading...')
		]);
		
		previousButton.click(function(){
			
			$('.lf-main').addClass('lf-form-submited');
			
			var m = vitaljs.graphObject({type: AIMP_QuestionsPageNavigationMessage});
			m.set('requestedPage', 'previous');
			m.set('channelURI', _this.channelURI);
			m.set('endpointURI', _this.endpointURI);
			
			//send aimp message
			_this.haleyApi.sendMessage(_this.haleySession, m, [], function(error){
					
				if(error) {
						
					console.error('error when sending submit page request', error);
						
				} else {
						
					console.log('submit page request sent');
						
				}
				
			});
			
		});
		
		wrapper.prepend(previousButton);
		
	}
	if(total > 1) {
		
		if(wrapper == null) {
			wrapper = $('.lf-submit-button-wrapper');
		}
		
		wrapper.append($('<span>').text("Page " + page + " of " + total));
		
	}
	 */
	
	this.initPaymentQuestions();
	this.initFileUploadQuestions();
	
}

LastformWidget.prototype.onSubmitPanelCreated = function(lastformContext){

	//the context may be null
	if(lastformContext != null) {
		this.lastformContext = lastformContext;
	}
	
	var wrapper = $('.lf-submit-button-wrapper');
	if(wrapper.length == 0) return;

	if(wrapper.hasClass('initialized')) return;
	
	//do not augment Review case
	if(wrapper.find('.lf-submit-warning-text').length > 0) {
		return;
	}
	
	wrapper.addClass('initialized');
	
	var _this = this;
	
	var qPage = this.currentPageMsg;
	var total = qPage.get('totalPages');
	var page = qPage.get('page');

	if(page > 1) {
		
		//add previous button
		wrapper = $('.lf-submit-button-wrapper');
		
		var previousButton = $('<button>', {'class': 'lf-submit-button lf-previous-button lf-submit-button-text'}).append(
		[
		 document.createTextNode('Previous'),
		 $('<div>', {'class': "lf-loader"}).text('Loading...')
		]);
		
		previousButton.click(function(){
			
			$('.lf-main').addClass('lf-form-submited');

			var onAnswersPersisted = function(){
				
				var m = vitaljs.graphObject({type: AIMP_QuestionsPageNavigationMessage});
				m.set('requestedPage', 'previous');
				m.set('channelURI', _this.channelURI);
				m.set('endpointURI', _this.endpointURI);
				
				_this.startPageCheckTimer();
				
				//send aimp message
				_this.haleyApi.sendMessage(_this.haleySession, m, [], function(error){
					if(error) {
						console.error('error when sending submit page request', error);
					} else {
						console.log('submit page request sent');
					}
				});
				
			};
			
			if( _this.currentPageMsg.get('saveAnswersOnGoingBack') == true && _this.lastformContext != null ) {
				
				_this.lastformContext.submitFields(null, true);
				
			} else {
				
				onAnswersPersisted();
				
			}
			

			
		});
		
		wrapper.prepend(previousButton);
		
	}
	if(total > 1) {
		
		if(wrapper == null) {
			wrapper = $('.lf-submit-button-wrapper');
		}
		
		wrapper.append($('<span>').text("Page " + page + " of " + total));
		
	}
	
}

LastformWidget.prototype.initFileUploadQuestions = function() {
	
	var fuUris = Object.keys(this.fileUploadElements);
	
	for(var i = 0 ; i < fuUris.length; i++) {
		
		var _quri = fuUris[i];
		var fqe = this.fileUploadElements[_quri];
		var _el = $('[data-question-uri="' + _quri + '"]');
		
		if(_el.length == 0) {
			console.log("file upload element not visible: ", _quri);
			continue;
		}
		
		if(_el.attr('data-initialized') == 'true' ) {
			console.log("file upload element already initialized: ", _quri);
			continue;
		}
		
		_el.attr('data-initialized', 'true');
		
		fqe.parentEl = _el.find('.file-download-element');
		fqe.render();
		
	}
	
}

LastformWidget.prototype.initPaymentQuestions = function() {
	
	var _this = this;
	
	var paymentQuestions = $('[data-stripe-question]');
	if(paymentQuestions.length == 0) {
		return;
	}
	
	if(paymentQuestions.length > 1) {
		console.error("More than 1 active payment question detected - cannot render it");
		return;
	}
	
	
	if( paymentQuestions.attr('data-initialized') == 'true' ) {
		console.log("payment question already initialized.");
		return;
	}
	
	paymentQuestions.attr('data-initialized', 'true');
	
	
	var ce = $('#card-element');
	if(ce.length == 0) {
		return;
	}
	
	//init stripe API
	var onStripeScriptReady = function(){
		
		console.log('initializing stripe API object');
		
		// Create a Stripe client
		var stripe = Stripe(_this.stripePublishableApiKey);
		
		
//		/* latin */
//		@font-face {
//		  font-family: 'Source Sans Pro';
//		  font-style: normal;
//		  font-weight: 300;
//		  src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGOode0-EuMkY--TSyExeINg.woff2) format('woff2');
//		  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
//		}
		
		// Create an instance of Elements
		// Create an instance of Elements
		var elements = stripe.elements({
			fonts:
			[{
			 family: "Source Sans Pro",
			 src: "local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGOode0-EuMkY--TSyExeINg.woff2) format('woff2')",
			 weight: 300,
			 style: 'italic', //'normal',
			 unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
			}]
		 });
		
		// Custom styling can be passed to options when creating an Element.
		// (Note that this demo uses a wider set of styles than the guide below.)
		
		var baseStyle = { 
			color: 'rgba(65, 179, 255, 0.9)',//'#6AC1B8',
			fontFamily: '"Source Sans Pro", Helvetica Neue, Helvetica, Arial, sans-serif',
			fontSmoothing: 'antialiased',
			fontStrech: 'condensed',
			'::placeholder': {
				color: 'rgba(106, 193, 184, 0.4)'
			}
		}
		
		baseStyle.lineHeight = '1.8em';
		
		if(!lfIsMobile) {
			baseStyle.fontSize = lfIsMobile ? '16px' : '30px';
		}
		
		var style = {
			base: baseStyle,
			invalid: {
				color: '#fa755a',
				iconColor: '#fa755a'
			}
		};
		
		//errors are displayed as form validation
		
		// Create an instance of the card Element
		var card = elements.create('card', {style: style});
		
		// Add an instance of the card Element into the `card-element` <div>
		card.mount(ce[0]);
		
		var cardErrors = $('#card-errors');
		
		// Handle real-time validation errors from the card Element.
		card.addEventListener('change', function(event) {
		  if (event.error) {
			  cardErrors.text(event.error.message);
		  } else {
			  cardErrors.empty();
		  }
		});
		
		card.addEventListener('blur', function(event){
			ce.css('border-color', '');
		});
		
		card.addEventListener('focus', function(event){
			ce.css('border-color', 'rgba(65, 179, 255, 0.9)');
		});
		
		// Handle form submission
		
		var activeEls = $('#payment-form').find('input, textarea, button');

		_this.activePaymentQuestionAction = function(callback) {
			
			cardErrors.empty();
			
			stripe.createToken(card).then(function(result) {
				
				if(result.error) {
					
					cardErrors.text(result.error.message);
					callback(result.error.message);
					
				} else {
					
					var v  = JSON.stringify(result.token);
					
					var m = vitaljs.graphObject({type: AIMP_AnswerMessage});
					m.set('text', v);
					m.set('replyTo', _this.activePaymentQuestionURI);
					m.set('channelURI', _this.channelURI);
					m.set('endpointURI', _this.endpointURI);
					//send aimp message

					var a = vitaljs.graphObject({type: AIMP_Answer})
					a.URI = 'urn:answer-' + new Date().getTime() + '_' + LastformWidget.uriCounter++; 
					a.set('text', v);
					
					console.log("Stripe token", result.token);

					_this.haleyApi.sendMessage(_this.haleySession, m, [a], function(error){
						
						if(error) {
							
							console.error('error when sending answer message', error);
							
							cardErrors.text(error);
							
							callback(error);
							
						} else {
							
							console.log('answer page message sent');
							
							callback(null);
							
						}
					});
					
				}
				
			});
			
		}
		
//		var form = document.getElementById('payment-form');
//		form.addEventListener('submit', function(event) {
//		  event.preventDefault();
//		
//		  activeEls.attr('disabled', 'disabled');
//		  
//		  stripe.createToken(card).then(function(result) {
//		    if (result.error) {
//		      // Inform the user if there was an error
//		      var errorElement = document.getElementById('card-errors');
//		      errorElement.textContent = result.error.message;
//		      activeEls.removeAttr('disabled');
//		    } else {
//		      // Send the token to your server
//		      _this.onStripeTokenObtained(result.token);
//		    }
//		  });
//		});
		
		
	};

	if(typeof(Stripe) === 'undefined') {
		
		console.log("loading stripe script asynchronously...");
		
		$.getScript("https://js.stripe.com/v3/", onStripeScriptReady);
		
	} else {
		
		console.log("Stripe API already loaded");
		
		setTimeout(onStripeScriptReady, 10);
		
	}
	
}

LastformWidget.prototype.sendNextQuestionMessage = function(isPrevious) {
	
	var _this = this;
	
	if( this.messagesToSend.length == 0 ) {
		
		console.log("No more messages to send, sending page submit messsage");

		var qPage = this.currentPageMsg;
		var total = qPage.get('totalPages');
		var page = qPage.get('page');
		
		var m = vitaljs.graphObject({type: AIMP_QuestionsPageNavigationMessage});
		m.set('requestedPage', isPrevious ? 'previous' : ( total == page ? 'submit' : 'next') );
		m.set('channelURI', _this.channelURI);
		m.set('endpointURI', _this.endpointURI);
		
		this.startPageCheckTimer();
		
		//send aimp message
		_this.haleyApi.sendMessage(_this.haleySession, m, [], function(error){
				
			if(error) {
					
				console.error('error when sending submit page request', error);
					
			} else {
					
				console.log('submit page request sent');
					
			}
			
		});
		
		
		return;
		
		
	}

	var msg = this.messagesToSend[0];
	this.messagesToSend.splice(0, 1);
	
	
	var m = msg[0];
	var payload = msg.slice(1);
	
	//send aimp message
	this.haleyApi.sendMessage(_this.haleySession, m, payload, function(error){
		
		if(error) {
			
			console.error('error when sending answer message', error);
		
			_this.onSubmitError(error);
			
		} else {
			
			console.log('answer page message sent');
			
			_this.sendNextQuestionMessage(isPrevious);
			
		}
		
		
		
	});
	
}

LastformWidget.processColumnsDefinitions = function(cd) {
	
	if(!cd) throw new Error("no columns definition property");
		
	var columnsParsed = JSON.parse(cd);
		
	if(!$.isArray(columnsParsed)) throw new Error("must be an array: " + cd);
	if(columnsParsed.length == 0) throw new Error("array must not be empty: " + cd);
	
	for(var i = 0 ; i < columnsParsed.length; i++) {
		
		var c = columnsParsed[i];
		var t = c.type;
		if(!c.name) throw new Error("column " + i + ": no name");
		if(!c.label) throw new Error("column " + i + ": no label");
		if(!t) throw new Error("column " + i + ": no type");
		if(!(t == 'text' || t == 'integer')) throw new Error("column " + i + ": unknown type: " + t);
		
		//lastform specific fields
		c.text = c.label;
		c.value = c.name;
		c.isSelected = false,
		c.price = "";
		
	}
	
	return columnsParsed;
	
	
}

LastformWidget.processTabularAnswer = function(cdefs, previousAnswer) {

	var answers = LastformWidget._processTabularAnswer(cdefs, previousAnswer);
	
	return LastformWidget._postProcessTabularAnswer(answers, cdefs, previousAnswer);

}

LastformWidget._processTabularAnswer = function(cdefs, previousAnswer) {
	var answers = [];
	
	if(!previousAnswer) return answers;
	
	var parsedList = JSON.parse(previousAnswer)
	
	if(!$.isArray(parsedList)) {
		console.error("answers expected to be an array:", previousAnswer);
		return answers;
	}

	var cdefsMap = {};
	
	for(var i = 0; i < cdefs.length; i++) {
		var cd = cdefs[i];
		cdefsMap[cd.name] = cd;
	}
	
	for(var i = 0; i < parsedList.length; i++) {
		var a = {};
		var ra = parsedList[i];
		if(!$.isArray(ra)) {
			console.error("row #" + i + ' must be an array of objects:', r);
			continue;
		}
		
		var valsMap = {};
		
		for(var j = 0 ; j < ra.length; j++) {
		
			var r = ra[j];
			
			var name = r.name;
			var value = r.value;
			if(value == null) value = '';
			if(!name) {
				console.error("row #" + i + " no name property");
				continue;
			}
			var cd = cdefsMap[name];
			if(cd == null) {
				console.error("row #" + i + " no column def found for name: " + name);
				continue;
			}
			
//				var type = cd.type;
			//TODO types support
			valsMap[name] = value;
		}

		//fill in empty records
		for(var j = 0 ; j < cdefs.length; j++) {
			var cd = cdefs[j];
			var v = valsMap[cd.name];
			if(v == null) v = "";
//			if(a[cd.name] == null) a[cd.name] = "XXX";
			a[cd.name] = v;
		}
		
		answers.push(a);
		
	}
	
	return answers;

	
}



LastformWidget._postProcessTabularAnswer = function(answers, cdefs, previousAnswer) {


	if(answers.length == 0) {
		var a = {};
		for(var i = 0 ; i < cdefs.length; i++) {
			var cd = cdefs[i];
			a[cd.name] = "";
		}
		answers.push(a);
	}
	
	return answers;
	
}
	
LastformWidget.prototype.destroy = function() {

	
	if(this.windowMessageListener != null) {
		window.removeEventListener('message', this.windowMessageListener);
	}
	
	window.LASTFORM_instance = null;
	
	clearLastformEvents();
	
	this.clearPageCheckTimer();
	
}

LastformWidget.prototype.clearPageCheckTimer = function(){
	if(this.pageRequestTimeout != null) {
		clearTimeout(this.pageRequestTimeout);
	}
	this.pageRequestTimeout = null;
}

LastformWidget.prototype.startPageCheckTimer = function(){

	var _this = this;
	
	this.clearPageCheckTimer();
	
	this.pageRequestTimeout = setTimeout(function(){
		console.error("Page request timed out");
		_this.onBrokenSessionDetected();
	}, 20000);
}

LastformWidget.prototype.onBrokenSessionDetected = function() {
	
	var dialog = $('#purge-session-modal');
	dialog.modal();
	
}

LastformWidget.prototype.onElementVisibilityChanged = function(id, res) {

	if(!this.lastformLoaded) {
		return;
	}
	
	var stripeElements = $('[data-stripe-question]');

	if(stripeElements.length == 0) {
		this.activePaymentQuestionAction = null;
	} else {
		this.initPaymentQuestions();
	}

	this.initFileUploadQuestions();
	
	
};
SessionWatchdog = function(haleyAPI, haleySession, channel) {

	this.haleyAPI = haleyAPI;
	this.haleySession = haleySession;
	this.channel = channel;
	
	this.userID = null;
	this.endpointURI = null; 
	this.userName = null;
	
	this.el = $('#connection-status');

	this.circlesAndStatus = this.el.find('.fa-circle, .status-label, .connection-status');
	this.statusLabels = this.el.find('.status-label');
	this.statusTitles = this.el.find('.status-title');
	this.statusMessage = this.el.find('.status-message');
	this.lastPingTime = this.el.find('.last-ping-time');
	this.lastResponseTime = this.el.find('.last-response-time');

	this.running = false;
	
	this.timer = null;

	this.lastTimestamp = null;
	
	//send heartbeat once per 30 seconds
	this.interval = 30 * 1000; 

//	var _this = this;
//	
//	$(document).bind(HaleyCommandMessage, function(event, msgRL){
//			
//		var msg = msgRL.first();
//		if( msg.get('command') == 'check-session-response') {
//			
//			_this.lastTimestamp = new Date().getTime();
//			_this.lastResponseTime.text(_this.formatTime(new Date()));
//			
//			_this.refreshUI();
//			
//		}
//			
//	});
	
	
		
}

SessionWatchdog.prototype.onAIMPMessage = function(msgRL) {
	
	var msg = msgRL.first();
	
//	if(msg.type == HaleyCommandMessage && msg.get('command') == 'check-session-response') {
	
	if(msg.type == AIMP_HeartbeatMessage && msg.get('channelURI') == this.channel.URI) {
		
		this.lastTimestamp = new Date().getTime();
		this.lastResponseTime.text(this.formatTime(new Date()));
		
		this.refreshUI();
		
	}
	
}

SessionWatchdog.prototype.start = function(timeout) {
	
	if(this.running == true) return;
	this.running = true;
	this._run(timeout);
	
}	

SessionWatchdog.prototype._run = function(timeout) {
	
	if(timeout == null) timeout = this.interval;
	
	var _this = this;
	
	if(this.lastTimestamp == null) {
		this.lastTimestamp = new Date().getTime();
	}
	
	if(this.timer != null) {
		clearInterval(this.timer);
	}
	
	this.timer = setInterval(function(){

		console.log("session watchdog, sending ping message");
		
		if(_this.timer != null) {
			clearInterval(_this.timer);
			_this.timer = null;
		}
		
//		var msg = vitaljs.graphObject({type: UserCommandMessage});
//		msg.set('command', 'check-session');
//		msg.set('channelURI', _this.channel.URI);
		
		var dateFormatted = _this.formatTime(new Date());
		
		var msg = vitaljs.graphObject({type: AIMP_HeartbeatMessage});
		if(_this.userID != null) {
			msg.set('userID', _this.userID);
		}
		if(_this.userName != null) {
			msg.set('userName', _this.userName);
		}
		if(_this.endpointURI != null) {
			msg.set('endpointURI', _this.endpointURI);
		}
		msg.set('channelURI', _this.channel.URI);
		msg.set('text', dateFormatted);
		msg.set('distribute', false);
		
		_this.lastPingTime.text(dateFormatted);
		
		try {
			if(_this.haleyAPI != null) {
			
				_this.haleyAPI.sendMessage(_this.haleySession, msg, [], function(error){
					
					if(error) {
						console.error('ping command message error', error);
					} else {
						console.log('check-session command message sent');
						
					}
					
				});

			} else {

				messagesEngine.sendNewMessage([msg], function(){

				}, function(error){
					console.error('ping command message error', error);
				});
			
			}
			
		} catch(e) {
			console.error('error when sending ping msg', e);
		}

		_this.timer = null;
		_this._run();
		
		_this.refreshUI();
		
		
	}, timeout);
	
} 

SessionWatchdog.prototype.refreshUI = function() {

	var _this = this;
	
	var status = null;
	
	var statusMessage = null;
	
	var diff = new Date().getTime() - _this.lastTimestamp;
	if(diff <= 20000) {
		status = 'ok';
		statusMessage = '';
	} else if (diff > 20000 && diff <= 60000) {
		status = 'warning';
		statusMessage = 'No response for over 20 seconds';
	} else if(diff >= 60000) {
		status = 'error';
		statusMessage = 'No response for over 1 minute';
	}
	
	var mainClass = 'text-green';
	var toRemove = 'text-danger text-orange';
	var statusLabel = 'OK'
	if(status == 'ok') {
		
	} else if(status == 'warning') {
		mainClass = 'text-orange';
		toRemove = 'text-danger text-green';
		statusLabel = 'WARNING'
	} else if(status == 'error') {
		mainClass = 'text-danger';
		toRemove = 'text-orange text-green';
		statusLabel = 'ERROR'
	}
	
	_this.circlesAndStatus.addClass(mainClass).removeClass(toRemove);
	_this.statusLabels.text(statusLabel);
	_this.statusTitles.attr('title', 'Connection status: ' + statusLabel);
	_this.statusMessage.text(statusMessage);
	
}

SessionWatchdog.prototype.formatTime = function(date){
	
	var h = date.getHours();
	var amPm = h < 12 ? 'am' : 'pm';
	if(h == 0) h = 12
	if(h > 12) h = h-12;
	
	var m = date.getMinutes();
	if(m < 10) m = '0' + m;
	
	var s = date.getSeconds();
	if(s < 10) s = '0' + s;
	
	return '' + h + ':' + m + ':' + s + ' ' + amPm;
	
}

SessionWatchdog.prototype.stop = function() {
	
	console.log("stopping session watchdog");
	
	this.running = false;
	
	if(this.timer != null) {
		
		clearInterval(this.timer);
		this.timer = null;
		
	}
	
}

;
/*!

 handlebars v4.0.5

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(2);

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = __webpack_require__(21);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(22);

	var _handlebarsCompilerCompiler = __webpack_require__(27);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(28);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(25);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(20);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(4);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(18);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(6);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(19);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(20);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(7);

	var _decorators = __webpack_require__(15);

	var _logger = __webpack_require__(17);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.5';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(8);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(9);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(10);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(11);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(12);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(13);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(14);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(16);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(4);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    options.data = _base.createFrame(options.data);
	    partialBlock = options.data['partial-block'] = options.fn;

	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.parse = parse;

	var _parser = __webpack_require__(23);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(24);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(26);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(5);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _whitespaceControl2['default'](options);
	  return strip.accept(_parser2['default'].parse(input));
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	/* istanbul ignore next */
	/* Jison generated parser */
	"use strict";

	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
	        /**/) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [$$[$0]];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
	        /**/) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports.__esModule = true;
	exports['default'] = handlebars;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(25);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substr(1, token.length - 2);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0,
	      depthString = '';

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	        depthString += '../';
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _ast = __webpack_require__(21);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      'helperMissing': true,
	      'blockHelperMissing': true,
	      'each': true,
	      'if': true,
	      'unless': true,
	      'with': true,
	      'log': true,
	      'lookup': true
	    };
	    if (knownHelpers) {
	      for (var _name in knownHelpers) {
	        /* istanbul ignore else */
	        if (_name in knownHelpers) {
	          options.knownHelpers[_name] = knownHelpers[_name];
	        }
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(4);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _codeGen = __webpack_require__(29);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[', JSON.stringify(name), ']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend('var decorators = container.decorators;\n');
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: [], types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var index = this.matchExistingProgram(child);

	      if (index == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	      } else {
	        child.index = index;
	        child.name = 'program' + index;

	        this.useDepths = this.useDepths || child.useDepths;
	        this.useBlockParams = this.useBlockParams || child.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return i;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : {}');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;;
this["JST"] = this["JST"] || {};

this["JST"]["templates/lastform/home.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"lastform\" class=\"lastform \"></div>";
},"useData":true});;
AbstractPanel = function(){
	this.menu = null;
}

AbstractPanel.prototype.getBreadcrumbs = function(){
	//empty array means top level panel
	return [];
}

AbstractPanel.prototype.getMenu = function() {
	return null;
}

/*

AbstractPanel.prototype.onOpen = function() {
	
}

//called when panel is destroyed
AbstractPanel.prototype.onDestroy = function() {
	
}
*/;
/*
HomePanel.prototype.parent = AbstractPanel.prototype;

HomePanel.prototype.onOpen = function(){
	
	
	
} 
*/

HomePanel = function(parentEl) {
	this.parentEl = parentEl;
	this.title = 'Home';
	
	this.lastFormWidget = null;
	
}

HomePanel.prototype = new AbstractPanel();
HomePanel.prototype.constructor = HomePanel;

HomePanel.prototype.getBreadcrumbs = function(){return null;}


HomePanel.prototype.render = function() {
	
	
	var t = JST["templates/lastform/home.hbs"];
	
	var html = t({});
	
	$($.parseHTML( html )).appendTo( this.parentEl );
	
//	var div = $('<div>').html(compiledModal);
	
//	this.parentEl.append(div.children());
	
	var parentEl = $('#lastform');
	
	var newForm = this.lastFormWidget == null;
	
	var _this = this;
	
	//no history
	if( LastformWidget.singleton != null ) {
		console.log("destroyinh previous lastform instance ...");
		LastformWidget.singleton.destroy();
		LastformWidget.singleton = null;
	}
	var lastformWidget = new LastformWidget(parentEl);

	this.lastFormWidget = lastformWidget;
	
	
	if(newForm) {
		
		$(document).bind(
				AIMP_QuestionsPageMessage + ' ' +
				AIMP_QuestionMessage + ' ' +
				AIMP_DialogPageElementMessage + ' ' + 
				AIMP_DialogStatusMessage + ' ' +
				HaleyTextMessage + ' ' + 
				AIMP_RemoveQuestionMessage + ' ' +
				AIMP_NotificationMessage + ' ' +
				AIMP_CloseSessionMessage
				, function(event, msgRL){
			
			console.log("document event" , event);
			
			if( msgRL.first().type == AIMP_CloseSessionMessage) {
				
				console.log('received close session request - stopping haley api...');
				
				//check if the session matches?
				console.warn("received close session message, passing it to parent window and closing the session")
				HALEY_API.close(function(closeError){
					if(closeError) {
						console.error("Error when closing haley api", closeError);
					} else {
						console.log("Haley api closed")
					}
					
					if(window.AUTO_RECONNECT == true) {
						
						console.log("auto-reconnecting...");
						
						connectVitalService();
						
					}
					
				}); 

				if(sessionWatchdog != null) {
					sessionWatchdog.stop();
					sessionWatchdog = null;
				}
				
				
				if(window.AUTO_RECONNECT == true) {
					
					console.log("session kicked, auto-reconnecting after session cleanup");
					
				} else {
				
					$('#reconnect-session-button').removeAttr('disabled');
					
					var dialog = $('#reconnect-modal');
					dialog.modal();
				
				}
				
				return;
				
			}
					
			_this.lastFormWidget.onAIMPMessage(msgRL);
			
		});
		
	}

	
	lastformWidget.vitalservice = vitalservice;
	lastformWidget.haleyApi = HALEY_API;
	lastformWidget.haleySession = HALEY_SESSION;
	
	lastformWidget.fileUploadURL = '/fileupload/';
	lastformWidget.fileDownloadURL = '/filedownload';
	lastformWidget.endpointURI = ENDPOINT_URI;
	lastformWidget.channelURI = CHANNEL_URI;
	
	//XXX as a temp fix do not send the logged in message as it will break the text elements
	//send current login request immediately
//	haleyStartSession();

	//notify parent of changing the current url
	
	if(newForm) {

		var m = {source: 'haley', action: 'haleyReady', endpointURI: ENDPOINT_URI, channelID: window.CHANNEL_ID};
		console.log('Notifying parent with message', m);
		window.top.postMessage(m, '*');
		
	} else {
	
		lastformWidget.sendCurrentPageRequest(function(error){
			
			if(error) {
				console.error("Error when sending current page request state: ", error);
				return;
			}
			
			console.log("current page request sent successfully");
			
		});
		
	}
	
	/* current page request should be sent after initial intents!
	lastformWidget.sendCurrentPageRequest(function(error){
		
		if(error) {
			console.error("Error when sending current page request state: ", error);
			return;
		}
		
		if(newForm) {

			//notify parent of changing the current url
			var m = {source: 'haley', action: 'haleyReady', endpointURI: ENDPOINT_URI, channelID: window.CHANNEL_ID};
			console.log('Notifying parent with message', m);
			window.top.postMessage(m, '*');
			
		} else {
			
			console.warn("already rendered");
			
		}
		
	});
	*/
	
}
;
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Navigo", [], factory);
	else if(typeof exports === 'object')
		exports["Navigo"] = factory();
	else
		root["Navigo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var PARAMETER_REGEXP = /([:*])(\w+)/g;
	var WILDCARD_REGEXP = /\*/g;
	var REPLACE_VARIABLE_REGEXP = '([^\/]+)';
	var REPLACE_WILDCARD = '(?:.*)';
	var FOLLOWED_BY_SLASH_REGEXP = '(?:\/|$)';
	
	function clean(s) {
	  if (s instanceof RegExp) return s;
	  return s.replace(/\/+$/, '').replace(/^\/+/, '/');
	}
	
	function regExpResultToParams(match, names) {
	  if (names.length === 0) return null;
	  if (!match) return null;
	  return match.slice(1, match.length).reduce(function (params, value, index) {
	    if (params === null) params = {};
	    params[names[index]] = value;
	    return params;
	  }, null);
	}
	
	function replaceDynamicURLParts(route) {
	  var paramNames = [],
	      regexp;
	
	  if (route instanceof RegExp) {
	    regexp = route;
	  } else {
	    regexp = new RegExp(clean(route).replace(PARAMETER_REGEXP, function (full, dots, name) {
	      paramNames.push(name);
	      return REPLACE_VARIABLE_REGEXP;
	    }).replace(WILDCARD_REGEXP, REPLACE_WILDCARD) + FOLLOWED_BY_SLASH_REGEXP);
	  }
	  return { regexp: regexp, paramNames: paramNames };
	}
	
	function findMatchedRoutes(url) {
	  var routes = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	  return routes.map(function (route) {
	    var _replaceDynamicURLPar = replaceDynamicURLParts(route.route);
	
	    var regexp = _replaceDynamicURLPar.regexp;
	    var paramNames = _replaceDynamicURLPar.paramNames;
	
	    var match = url.match(regexp);
	    var params = regExpResultToParams(match, paramNames);
	
	    return match ? { match: match, route: route, params: params } : false;
	  }).filter(function (m) {
	    return m;
	  });
	}
	
	function match(url, routes) {
	  return findMatchedRoutes(url, routes)[0] || false;
	}
	
	function root(url, routes) {
	  var matched = findMatchedRoutes(url, routes.filter(function (route) {
	    var u = clean(route.route);
	
	    return u !== '' && u !== '*';
	  }));
	  var fallbackURL = clean(url);
	
	  if (matched.length > 0) {
	    return matched.map(function (m) {
	      return clean(url.substr(0, m.match.index));
	    }).reduce(function (root, current) {
	      return current.length < root.length ? current : root;
	    }, fallbackURL);
	  }
	  return fallbackURL;
	}
	
	function isPushStateAvailable() {
	  return !!(typeof window !== 'undefined' && window.history && window.history.pushState);
	}
	
	function Navigo(r, useHash) {
	  this._routes = [];
	  this.root = useHash && r ? r.replace(/\/$/, '/#') : r || null;
	  this._useHash = useHash;
	  this._paused = false;
	  this._destroyed = false;
	  this._lastRouteResolved = null;
	  this._ok = !useHash && isPushStateAvailable();
	  this._listen();
	  this.updatePageLinks();
	}
	
	Navigo.prototype = {
	  helpers: {
	    match: match,
	    root: root,
	    clean: clean
	  },
	  navigate: function navigate(path, absolute) {
	    var to;
	
	    path = path || '';
	    if (this._ok) {
	      to = (!absolute ? this._getRoot() + '/' : '') + clean(path);
	      to = to.replace(/([^:])(\/{2,})/g, '$1/');
	      history[this._paused ? 'replaceState' : 'pushState']({}, '', to);
	      this.resolve();
	    } else if (typeof window !== 'undefined') {
	      window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
	    }
	    return this;
	  },
	  on: function on() {
	    if (arguments.length >= 2) {
	      this._add(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
	    } else if (_typeof(arguments.length <= 0 ? undefined : arguments[0]) === 'object') {
	      for (var route in arguments.length <= 0 ? undefined : arguments[0]) {
	        this._add(route, (arguments.length <= 0 ? undefined : arguments[0])[route]);
	      }
	    } else if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'function') {
	      this._add('', arguments.length <= 0 ? undefined : arguments[0]);
	    }
	    return this;
	  },
	  resolve: function resolve(current) {
	    var handler, m;
	    var url = (current || this._cLoc()).replace(this._getRoot(), '');
	
	    if (this._paused || url === this._lastRouteResolved) return false;
	    if (this._useHash) {
	      url = url.replace(/^\/#/, '/');
	    }
	    m = match(url, this._routes);
	
	    if (m) {
	      this._lastRouteResolved = url;
	      handler = m.route.handler;
	      m.route.route instanceof RegExp ? handler.apply(undefined, _toConsumableArray(m.match.slice(1, m.match.length))) : handler(m.params);
	      return m;
	    }
	    return false;
	  },
	  destroy: function destroy() {
	    this._routes = [];
	    this._destroyed = true;
	    clearTimeout(this._listenningInterval);
	    typeof window !== 'undefined' ? window.onpopstate = null : null;
	  },
	  updatePageLinks: function updatePageLinks() {
	    var self = this;
	
	    if (typeof document === 'undefined') return;
	
	    this._findLinks().forEach(function (link) {
	      if (!link.hasListenerAttached) {
	        link.addEventListener('click', function (e) {
	          var location = link.getAttribute('href');
	
	         
	          if (!self._destroyed) {
	            e.preventDefault();
	            self.navigate(clean(location));
	          }
	        });
	         link.hasListenerAttached = true;
	      }
	    });
	  },
	  generate: function generate(name) {
	    var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    return this._routes.reduce(function (result, route) {
	      var key;
	
	      if (route.name === name) {
	        result = route.route;
	        for (key in data) {
	          result = result.replace(':' + key, data[key]);
	        }
	      }
	      return result;
	    }, '');
	  },
	  link: function link(path) {
	    return this._getRoot() + path;
	  },
	  pause: function pause(status) {
	    this._paused = status;
	  },
	  disableIfAPINotAvailable: function disableIfAPINotAvailable() {
	    if (!isPushStateAvailable()) {
	      this.destroy();
	    }
	  },
	  _add: function _add(route) {
	    var handler = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	    if ((typeof handler === 'undefined' ? 'undefined' : _typeof(handler)) === 'object') {
	      this._routes.push({ route: route, handler: handler.uses, name: handler.as });
	    } else {
	      this._routes.push({ route: route, handler: handler });
	    }
	    return this._add;
	  },
	  _getRoot: function _getRoot() {
	    if (this.root !== null) return this.root;
	    this.root = root(this._cLoc(), this._routes);
	    return this.root;
	  },
	  _listen: function _listen() {
	    var _this = this;
	
	    if (this._ok) {
	      window.onpopstate = function () {
	        _this.resolve();
	      };
	    } else {
	      (function () {
	        var cached = _this._cLoc(),
	            current = undefined,
	            _check = undefined;
	
	        _check = function check() {
	          current = _this._cLoc();
	          if (cached !== current) {
	            cached = current;
	            _this.resolve();
	          }
	          _this._listenningInterval = setTimeout(_check, 200);
	        };
	        _check();
	      })();
	    }
	  },
	  _cLoc: function _cLoc() {
	    if (typeof window !== 'undefined') {
	      return window.location.href;
	    }
	    return '';
	  },
	  _findLinks: function _findLinks() {
	    return [].slice.call(document.querySelectorAll('[data-navigo]'));
	  }
	};
	
	exports.default = Navigo;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
;
//global navigo router
var router = null;

//router is activated after the vitalservice is connected

var mc = $('#main-content');

var currentPanel = null;

var homePanel = new HomePanel(mc);

//a better way to use navigo links, no need to refresh
$(document).on('click', '[data-navigo2]', function(event){

	var href = $(this).attr('href');
		
	router.navigate(href);
		
	return false;
	
});

function initRouter() {
	
	var port = '' + window.location.port;
	
	if(port.length > 0) port = ':' + port;
		
	var urlPrefix = PREFIX;
	
	if(urlPrefix.substring(urlPrefix.length -1, urlPrefix.length ) === '/') {
		urlPrefix = urlPrefix.substring(0, urlPrefix.length -1);
	}
	
	var rootURL = window.location.protocol + '//' + window.location.hostname + port + urlPrefix;
	console.log('root URL: ', rootURL);
	
	router = new Navigo(rootURL, false);
		
	router.on({
		
		'/' : function(params) {
			
			console.log("Navigate: /");
			
			openPanel(homePanel);
			
		},
		
		
		'*': function (params) {
			  
			console.log('Navigate: *');
			  
		}
		
	});
	
	router.resolve();
	
}

function openPanel(newPanel) {
	
	mc.empty();
	
	currentPanel = newPanel;
	
	newPanel.render();
	
};
//make sure cookie is set for entire domain
VITAL_COOKIE_ATTRS = {path: '/'};
VITAL_LOGGING = true;

//use random endpoint id to avoid conflicts with other vital apps
if(typeof(IFRAME_ID) !== 'undefined') {
	VITAL_COOKIE_PREFIX = IFRAME_ID;
} else {
	VITAL_COOKIE_PREFIX = '';
}


//set on sucessful login/authentication
var userID = USER_ID;

var userName = USER_ID;

//with auth
var ENDPOINT = 'endpoint.' + APP_ID;


var evenbusPrefix = '';

var EVENTBUS_URL = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + evenbusPrefix + '/eventbus';

var vitalservice = null;

var sessionWatchdog = null;

console.log("eventbus URL: ", EVENTBUS_URL);
console.log("endpoint: ", ENDPOINT);

var HALEY_API = null;

var HALEY_SESSION = null;

var makeUUID = function(){
	return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    	.replace(/[xy]/g,function(a,b){return b=Math.random()*16,(a=="y"?b&3|8:b|0).toString(16)})
}

$(window).bind('beforeunload', function(){

	var msg = vitaljs.graphObject({type: Message_UserLeftApp});
	haleySendMessage([msg], null);
	
});

$(function(){
	
//	//always new ID
//	console.log("Generating new anonymous user ID ...");
//		
//	userID = makeUUID();
//		
//	console.log("Generated userID ...", userID );
//	
//	userName = userID;
	
	$('#reconnect-session-button').click(function(){
		
		$(this).attr('disabled', 'disabled');
		
		connectVitalService();
		
	});
	
	$('#purge-session-button').click(function(){
		
		$(this).attr('disabled', 'disabled');
		
		//notify that we want to purge the 
		var m = {source: 'haley', action: 'openIFrame', purgeSession: true, endpointURI: ENDPOINT_URI, channelID: window.CHANNEL_ID};
		console.log('Notifying parent with message', m);
		window.top.postMessage(m, '*');
		
	});
	
	connectVitalService();
	
});


function connectVitalService() {
	
	var _vitalservice = new VitalService(ENDPOINT, EVENTBUS_URL, function(){
		
		vitalservice = _vitalservice;
		
		
		console.log('connected to endpoint, sessionID: ' + vitalservice.impl.sessionID);
		
		onVitalServiceReady();
		
	}, function(error){
		
		console.error('couldn\'t connect to vertx endpoint -' + error);
		
	}, { logger: console, loggingEnabled: true, disconnectOnWebsocketLimitExceeded: true } );
	
}


function onVitalServiceReady() {
	
	HaleyAPIVitalServiceImpl.SINGLETON = null;
	var impl = new HaleyAPIVitalServiceImpl(vitalservice);
	
	console.log("initializing haley api ...");

	new HaleyAPI(impl, false, function(error, instance){

		if(error) {
			console.error("Error when initializing Haley API: " + error);
			return;
		}
		
		var haleyAPI = instance;
		
		HALEY_API = haleyAPI;
		
		console.log("haley api ready ");

		//initially no session opened
		
		console.log("current sessions: ", haleyAPI.getSessions());
		
		haleyAPI.openSession(function(error, haleySession){
			
			if(error) {
				console.error("Error when checking session: " + error);
				
				return;
			}
			
			HALEY_SESSION = haleySession;
			if(typeof(ENDPOINT_URI) !== 'undefined') {
				console.log('Fixed ENDPOINT_URI: ' + ENDPOINT_URI);
				HALEY_SESSION.defaultEndpointURI = ENDPOINT_URI;
			} else {
				console.error("No ENDPOINT_URI");
				return;
			}
			
			if(typeof(CHANNEL_URI) !== 'undefined') {
				console.log("Fixed CHANNEL_URI: " + CHANNEL_URI);
				HALEY_SESSION.defaultChannelURI = CHANNEL_URI;
			} else {
				console.error("No CHANNEL_URI");
				return;
			}
			
			if(typeof(USER_ID) !== 'undefined') {
				console.log('Fixed USER_ID: ' + USER_ID);
				HALEY_SESSION.defaultUserID = USER_ID;
				HALEY_SESSION.defaultUserName = USER_ID;
			} else {
				console.error("No USER_ID");
				return;
			}
			
			
			if( haleySession.isAuthenticated() ) {

				console.error("This session should not be authenticated - ERROR");
				
			} else {


				onHaleySessionReady();

				
			}
			
		});
		

	});
	
	//initRouter();
	
}

function messagesHandler(msgRL) {
	
	var msg = msgRL.first();
	
	var t = msg.type; 
	
	/*
	if( t == 'http://vital.ai/ontology/vital-aimp#CloseSessionMessage' ) {
		
		//check if the session matches?
		console.warn("received close session message, passing it to parent window and closing the session")
		HALEY_API.close(function(closeError){
			if(closeError) {
				console.error("Error when closing haley api", closeError);
			} else {
				console.log("Haley api closed")
			}
		}); 
		
		var m = { source: 'haley', action: 'closeIFrame', endpointURI: ENDPOINT_URI, purgeSession: true };
		console.log('Notifying parent with message', m);
		window.top.postMessage(m, '*');
		
		return;
		
	}
	*/
	
	console.log("Haley api received message: " + t, msgRL);
	
	try { console.log("INPUT: " + msg.get('text')); } catch(e) {}
	
	$(document).trigger(t, msgRL);
	
	
}

function onHaleySessionReady() {

	if(typeof(ENDPOINT_URI) !== 'undefined') {
		console.log('Fixed ENDPOINT_URI: ' + ENDPOINT_URI);
		HALEY_SESSION.defaultEndpointURI = ENDPOINT_URI;
	} else {
		console.error("No ENDPOINT_URI");
		return;
	}
	
	if(typeof(CHANNEL_URI) !== 'undefined') {
		console.log("Fixed channelURI: " + CHANNEL_URI);
		HALEY_SESSION.defaultChannelURI = CHANNEL_URI;
	} else {
		console.error("No CHANNEL_URI");
		return;
	}
	
	if(typeof(USER_ID) !== 'undefined') {
		console.log('Fixed USER_ID: ' + USER_ID);
		HALEY_SESSION.defaultUserID = USER_ID;
		HALEY_SESSION.defaultUserName = USER_ID;
	} else {
		console.error("No USER_ID");
		return;
	}
	
	try {
		
		var r = HALEY_API.registerCallback(HALEY_SESSION, 'http://vital.ai/ontology/vital-aimp#AIMPMessage', true, messagesHandler);
		
		if(!r) throw "Messages handler not registered!";
		
		console.log("Messages handler registered");
		
	} catch(e) {
		console.error("Couldn't register handler: " + e);
	}
	

	if(sessionWatchdog == null) {
		console.log("starting session watchdog");
		var channelObj = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#Channel', URI: CHANNEL_URI});
		sessionWatchdog = new SessionWatchdog(HALEY_API, HALEY_SESSION, channelObj);
		sessionWatchdog.userID = userID;
		sessionWatchdog.userName = userName;
		sessionWatchdog.endpointURI = ENDPOINT_URI;
		sessionWatchdog.start(10000);
	}
	
	$('#reconnect-modal').modal('hide');
	
	//defer sending the logged in message until home is loaded
	initRouter();
	
	
}


function haleyStartSession(cb) {

	var msg = vitaljs.graphObject({type: Message_UserLoggedIn});
	haleySendMessage([msg], function(){
		
//		onHaleyInitialized();
		
		//notify parent of changing the current url
		var m = {source: 'haley', action: 'haleyReady', endpointURI: ENDPOINT_URI, channelID: window.CHANNEL_ID};
		console.log('Notifying parent with message', m);
		window.top.postMessage(m, '*');
		
		
		if(cb != null) {
			cb();
		}
		
	});

	
}

function haleySendMessage(objects, cb) {
	
	var msg = objects[0];
	
	HALEY_API.sendMessage(HALEY_SESSION, msg, objects.slice(0), function(error){
		
		if(error) {
			
			console.error("ERROR when sending message: ", error);
			
		} else {
			
			console.log("Sent message", msg.type);

			if(cb != null) {
				cb();
			}
			
		}
		
	});
	
}

function onHaleyInitialized() {
	
	initRouter();
	
}