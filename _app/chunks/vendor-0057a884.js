function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function i(t){t.forEach(o)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function u(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function f(t,n,e,o,r,i){if(r){const c=l(n,e,o,i);t.p(c,r)}}function d(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}const h="undefined"!=typeof window;let p=h?()=>window.performance.now():()=>Date.now(),m=h?t=>requestAnimationFrame(t):t;const _=new Set;function g(t){_.forEach((n=>{n.c(t)||(_.delete(n),n.f())})),0!==_.size&&m(g)}let $=!1;function b(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function y(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n.host?n:document}function x(t){const n=N("style");return function(t,n){!function(t,n){t.appendChild(n)}(t.head||t,n)}(y(t),n),n}function v(t,n){if($){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let a=0;a<n.length;a++){const t=n[a].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:b(1,r,(t=>n[e[t]].claim_order),t))-1;o[a]=e[i]+1;const c=i+1;e[c]=a,r=Math.max(c,r)}const i=[],c=[];let s=n.length-1;for(let a=e[r]+1;0!=a;a=o[a-1]){for(i.push(n[a-1]);s>=a;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let a=0,l=0;a<c.length;a++){for(;l<i.length&&c[a].claim_order>=i[l].claim_order;)l++;const n=l<i.length?i[l]:null;t.insertBefore(c[a],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function w(t,n,e){$&&!e?v(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function E(t){t.parentNode.removeChild(t)}function N(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function k(){return S(" ")}function A(){return S("")}function F(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function C(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function j(t){return Array.from(t.childNodes)}function B(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function T(t,n,e,o){return B(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):N(n)))}function z(t,n){return B(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>S(n)),!0)}function M(t){return z(t," ")}function O(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function R(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function D(t,n,e){t.classList[e?"add":"remove"](n)}const L=new Set;let P,q=0;function I(t,n,e,o,r,i,c,s=0){const a=16.666/o;let l="{\n";for(let _=0;_<=1;_+=a){const t=n+(e-n)*i(_);l+=100*_+`%{${c(t,1-t)}}\n`}const u=l+`100% {${c(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${s}`,d=y(t);L.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=x(t).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,q+=1,f}function W(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),q-=r,q||m((()=>{q||(L.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),L.clear())})))}function H(t){P=t}function G(){if(!P)throw new Error("Function called outside component initialization");return P}function J(t){G().$$.on_mount.push(t)}function K(t){G().$$.after_update.push(t)}function Q(t,n){G().$$.context.set(t,n)}const U=[],V=[],X=[],Y=[],Z=Promise.resolve();let tt=!1;function nt(t){X.push(t)}let et=!1;const ot=new Set;function rt(){if(!et){et=!0;do{for(let t=0;t<U.length;t+=1){const n=U[t];H(n),it(n.$$)}for(H(null),U.length=0;V.length;)V.pop()();for(let t=0;t<X.length;t+=1){const n=X[t];ot.has(n)||(ot.add(n),n())}X.length=0}while(U.length);for(;Y.length;)Y.pop()();tt=!1,et=!1,ot.clear()}}function it(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(nt)}}let ct;function st(t,n,e){t.dispatchEvent(function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(`${n?"intro":"outro"}${e}`))}const at=new Set;let lt;function ut(){lt={r:0,c:[],p:lt}}function ft(){lt.r||i(lt.c),lt=lt.p}function dt(t,n){t&&t.i&&(at.delete(t),t.i(n))}function ht(t,n,e,o){if(t&&t.o){if(at.has(t))return;at.add(t),lt.c.push((()=>{at.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const pt={duration:0};function mt(e,o,r,s){let a=o(e,r),l=s?0:1,u=null,f=null,d=null;function h(){d&&W(e,d)}function $(t,n){const e=t.b-l;return n*=Math.abs(e),{a:l,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function b(o){const{delay:r=0,duration:c=300,easing:s=n,tick:b=t,css:y}=a||pt,x={start:p()+r,b:o};o||(x.group=lt,lt.r+=1),u||f?f=x:(y&&(h(),d=I(e,l,o,c,r,s,y)),o&&b(0,1),u=$(x,c),nt((()=>st(e,o,"start"))),function(t){let n;0===_.size&&m(g),new Promise((e=>{_.add(n={c:t,f:e})}))}((t=>{if(f&&t>f.start&&(u=$(f,c),f=null,st(e,u.b,"start"),y&&(h(),d=I(e,l,u.b,u.duration,0,s,a.css))),u)if(t>=u.end)b(l=u.b,1-l),st(e,u.b,"end"),f||(u.b?h():--u.group.r||i(u.group.c)),u=null;else if(t>=u.start){const n=t-u.start;l=u.a+u.d*s(n/u.duration),b(l,1-l)}return!(!u&&!f)})))}return{run(t){c(a)?(ct||(ct=Promise.resolve(),ct.then((()=>{ct=null}))),ct).then((()=>{a=a(),b(t)})):b(t)},end(){h(),u=f=null}}}function _t(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],s=n[i];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[i]=s}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function gt(t){return"object"==typeof t&&null!==t?t:{}}function $t(t){t&&t.c()}function bt(t,n){t&&t.l(n)}function yt(t,n,e,r){const{fragment:s,on_mount:a,on_destroy:l,after_update:u}=t.$$;s&&s.m(n,e),r||nt((()=>{const n=a.map(o).filter(c);l?l.push(...n):i(n),t.$$.on_mount=[]})),u.forEach(nt)}function xt(t,n){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function vt(t,n){-1===t.$$.dirty[0]&&(U.push(t),tt||(tt=!0,Z.then(rt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function wt(n,e,o,c,s,a,l,u=[-1]){const f=P;H(n);const d=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:r(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};l&&l(d.root);let h=!1;if(d.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&vt(n,t)),e})):[],d.update(),h=!0,i(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){$=!0;const t=j(e.target);d.fragment&&d.fragment.l(t),t.forEach(E)}else d.fragment&&d.fragment.c();e.intro&&dt(n.$$.fragment),yt(n,e.target,e.anchor,e.customElement),$=!1,rt()}H(f)}class Et{$destroy(){xt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Nt=[];function St(n,e=t){let o;const r=new Set;function i(t){if(s(n,t)&&(n=t,o)){const t=!Nt.length;for(const e of r)e[1](),Nt.push(e,n);if(t){for(let t=0;t<Nt.length;t+=2)Nt[t][0](Nt[t+1]);Nt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,s=t){const a=[c,s];return r.add(a),1===r.size&&(o=e(i)||t),c(n),()=>{r.delete(a),0===r.size&&(o(),o=null)}}}}function kt(t){const n=t-1;return n*n*n+1}function At(t,{delay:n=0,duration:e=400,easing:o=kt}={}){const r=getComputedStyle(t),i=+r.opacity,c=parseFloat(r.height),s=parseFloat(r.paddingTop),a=parseFloat(r.paddingBottom),l=parseFloat(r.marginTop),u=parseFloat(r.marginBottom),f=parseFloat(r.borderTopWidth),d=parseFloat(r.borderBottomWidth);return{delay:n,duration:e,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*i};height: ${t*c}px;padding-top: ${t*s}px;padding-bottom: ${t*a}px;margin-top: ${t*l}px;margin-bottom: ${t*u}px;border-top-width: ${t*f}px;border-bottom-width: ${t*d}px;`}}export{J as A,e as B,St as C,a as D,f as E,d as F,u as G,v as H,t as I,nt as J,mt as K,D as L,F as M,At as N,R as O,Et as S,j as a,C as b,T as c,E as d,N as e,w as f,z as g,O as h,wt as i,$t as j,k,A as l,bt as m,M as n,yt as o,_t as p,gt as q,ut as r,s,S as t,ht as u,xt as v,ft as w,dt as x,Q as y,K as z};