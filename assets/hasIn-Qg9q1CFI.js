import{c as t,t as f}from"./_baseFlatten-Cnj1GpOk.js";import{i as e,a as h,b as m}from"./_initCloneObject-CKdTzPLh.js";import{a as g}from"./isArray-ggc3KxVp.js";function x(n,r){return n!=null&&r in Object(n)}function I(n,r,u){r=t(r,n);for(var s=-1,a=r.length,i=!1;++s<a;){var l=f(r[s]);if(!(i=n!=null&&u(n,l)))break;n=n[l]}return i||++s!=a?i:(a=n==null?0:n.length,!!a&&e(a)&&h(l,a)&&(g(n)||m(n)))}function P(n,r){return n!=null&&I(n,r,x)}export{I as a,P as h};