import{_ as O,f as Ur,d as N,a as ee,b as D,g as Nt,i as w,h as Gt,c as Kr,j as xe}from"./_getPrototype-DSx75BAr.js";import{g as Ie,r as W}from"./index-Cu9bd8lq.js";function Ft(){this.__data__=[],this.size=0}var Bt=Ft;function Ut(e,r){return e===r||e!==e&&r!==r}var Oe=Ut,Kt=Oe;function Ht(e,r){for(var t=e.length;t--;)if(Kt(e[t][0],r))return t;return-1}var re=Ht,qt=re,zt=Array.prototype,Wt=zt.splice;function Zt(e){var r=this.__data__,t=qt(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():Wt.call(r,t,1),--this.size,!0}var Xt=Zt,Yt=re;function Jt(e){var r=this.__data__,t=Yt(r,e);return t<0?void 0:r[t][1]}var Qt=Jt,Vt=re;function en(e){return Vt(this.__data__,e)>-1}var rn=en,tn=re;function nn(e,r){var t=this.__data__,n=tn(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}var an=nn,sn=Bt,on=Xt,cn=Qt,ln=rn,un=an;function G(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}G.prototype.clear=sn;G.prototype.delete=on;G.prototype.get=cn;G.prototype.has=ln;G.prototype.set=un;var te=G,fn=te;function pn(){this.__data__=new fn,this.size=0}var gn=pn;function dn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}var vn=dn;function hn(e){return this.__data__.get(e)}var yn=hn;function $n(e){return this.__data__.has(e)}var _n=$n,bn=O,mn=bn["__core-js_shared__"],An=mn,fe=An,Ye=function(){var e=/[^.]+$/.exec(fe&&fe.keys&&fe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Tn(e){return!!Ye&&Ye in e}var Sn=Tn,Cn=Function.prototype,xn=Cn.toString;function In(e){if(e!=null){try{return xn.call(e)}catch{}try{return e+""}catch{}}return""}var Hr=In,On=Ur,wn=Sn,Pn=N,En=Hr,Mn=/[\\^$.*+?()[\]{}|]/g,Ln=/^\[object .+?Constructor\]$/,jn=Function.prototype,Dn=Object.prototype,Rn=jn.toString,kn=Dn.hasOwnProperty,Nn=RegExp("^"+Rn.call(kn).replace(Mn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Gn(e){if(!Pn(e)||wn(e))return!1;var r=On(e)?Nn:Ln;return r.test(En(e))}var Fn=Gn;function Bn(e,r){return e==null?void 0:e[r]}var Un=Bn,Kn=Fn,Hn=Un;function qn(e,r){var t=Hn(e,r);return Kn(t)?t:void 0}var R=qn,zn=R,Wn=O,Zn=zn(Wn,"Map"),we=Zn,Xn=R,Yn=Xn(Object,"create"),ne=Yn,Je=ne;function Jn(){this.__data__=Je?Je(null):{},this.size=0}var Qn=Jn;function Vn(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var ea=Vn,ra=ne,ta="__lodash_hash_undefined__",na=Object.prototype,aa=na.hasOwnProperty;function ia(e){var r=this.__data__;if(ra){var t=r[e];return t===ta?void 0:t}return aa.call(r,e)?r[e]:void 0}var sa=ia,oa=ne,ca=Object.prototype,la=ca.hasOwnProperty;function ua(e){var r=this.__data__;return oa?r[e]!==void 0:la.call(r,e)}var fa=ua,pa=ne,ga="__lodash_hash_undefined__";function da(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=pa&&r===void 0?ga:r,this}var va=da,ha=Qn,ya=ea,$a=sa,_a=fa,ba=va;function F(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}F.prototype.clear=ha;F.prototype.delete=ya;F.prototype.get=$a;F.prototype.has=_a;F.prototype.set=ba;var ma=F,Qe=ma,Aa=te,Ta=we;function Sa(){this.size=0,this.__data__={hash:new Qe,map:new(Ta||Aa),string:new Qe}}var Ca=Sa;function xa(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}var Ia=xa,Oa=Ia;function wa(e,r){var t=e.__data__;return Oa(r)?t[typeof r=="string"?"string":"hash"]:t.map}var ae=wa,Pa=ae;function Ea(e){var r=Pa(this,e).delete(e);return this.size-=r?1:0,r}var Ma=Ea,La=ae;function ja(e){return La(this,e).get(e)}var Da=ja,Ra=ae;function ka(e){return Ra(this,e).has(e)}var Na=ka,Ga=ae;function Fa(e,r){var t=Ga(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}var Ba=Fa,Ua=Ca,Ka=Ma,Ha=Da,qa=Na,za=Ba;function B(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}B.prototype.clear=Ua;B.prototype.delete=Ka;B.prototype.get=Ha;B.prototype.has=qa;B.prototype.set=za;var Pe=B,Wa=te,Za=we,Xa=Pe,Ya=200;function Ja(e,r){var t=this.__data__;if(t instanceof Wa){var n=t.__data__;if(!Za||n.length<Ya-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new Xa(n)}return t.set(e,r),this.size=t.size,this}var Qa=Ja,Va=te,ei=gn,ri=vn,ti=yn,ni=_n,ai=Qa;function U(e){var r=this.__data__=new Va(e);this.size=r.size}U.prototype.clear=ei;U.prototype.delete=ri;U.prototype.get=ti;U.prototype.has=ni;U.prototype.set=ai;var Ee=U;function ii(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var si=ii,oi=R,ci=function(){try{var e=oi(Object,"defineProperty");return e({},"",{}),e}catch{}}(),li=ci,Ve=li;function ui(e,r,t){r=="__proto__"&&Ve?Ve(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var qr=ui,fi=qr,pi=Oe,gi=Object.prototype,di=gi.hasOwnProperty;function vi(e,r,t){var n=e[r];(!(di.call(e,r)&&pi(n,t))||t===void 0&&!(r in e))&&fi(e,r,t)}var Me=vi,hi=Me,yi=qr;function $i(e,r,t,n){var o=!t;t||(t={});for(var s=-1,u=r.length;++s<u;){var c=r[s],f=n?n(t[c],e[c],c,t,e):void 0;f===void 0&&(f=e[c]),o?yi(t,c,f):hi(t,c,f)}return t}var ie=$i;function _i(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var bi=_i,mi=ee,Ai=D,Ti="[object Arguments]";function Si(e){return Ai(e)&&mi(e)==Ti}var Ci=Si,er=Ci,xi=D,zr=Object.prototype,Ii=zr.hasOwnProperty,Oi=zr.propertyIsEnumerable,wi=er(function(){return arguments}())?er:function(e){return xi(e)&&Ii.call(e,"callee")&&!Oi.call(e,"callee")},Wr=wi,Y={exports:{}};function Pi(){return!1}var Ei=Pi;Y.exports;(function(e,r){var t=O,n=Ei,o=r&&!r.nodeType&&r,s=o&&!0&&e&&!e.nodeType&&e,u=s&&s.exports===o,c=u?t.Buffer:void 0,f=c?c.isBuffer:void 0,p=f||n;e.exports=p})(Y,Y.exports);var Le=Y.exports,Mi=9007199254740991,Li=/^(?:0|[1-9]\d*)$/;function ji(e,r){var t=typeof e;return r=r??Mi,!!r&&(t=="number"||t!="symbol"&&Li.test(e))&&e>-1&&e%1==0&&e<r}var je=ji,Di=9007199254740991;function Ri(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Di}var De=Ri,ki=ee,Ni=De,Gi=D,Fi="[object Arguments]",Bi="[object Array]",Ui="[object Boolean]",Ki="[object Date]",Hi="[object Error]",qi="[object Function]",zi="[object Map]",Wi="[object Number]",Zi="[object Object]",Xi="[object RegExp]",Yi="[object Set]",Ji="[object String]",Qi="[object WeakMap]",Vi="[object ArrayBuffer]",es="[object DataView]",rs="[object Float32Array]",ts="[object Float64Array]",ns="[object Int8Array]",as="[object Int16Array]",is="[object Int32Array]",ss="[object Uint8Array]",os="[object Uint8ClampedArray]",cs="[object Uint16Array]",ls="[object Uint32Array]",m={};m[rs]=m[ts]=m[ns]=m[as]=m[is]=m[ss]=m[os]=m[cs]=m[ls]=!0;m[Fi]=m[Bi]=m[Vi]=m[Ui]=m[es]=m[Ki]=m[Hi]=m[qi]=m[zi]=m[Wi]=m[Zi]=m[Xi]=m[Yi]=m[Ji]=m[Qi]=!1;function us(e){return Gi(e)&&Ni(e.length)&&!!m[ki(e)]}var fs=us;function ps(e){return function(r){return e(r)}}var Re=ps,J={exports:{}};J.exports;(function(e,r){var t=Nt,n=r&&!r.nodeType&&r,o=n&&!0&&e&&!e.nodeType&&e,s=o&&o.exports===n,u=s&&t.process,c=function(){try{var f=o&&o.require&&o.require("util").types;return f||u&&u.binding&&u.binding("util")}catch{}}();e.exports=c})(J,J.exports);var ke=J.exports,gs=fs,ds=Re,rr=ke,tr=rr&&rr.isTypedArray,vs=tr?ds(tr):gs,Zr=vs,hs=bi,ys=Wr,$s=w,_s=Le,bs=je,ms=Zr,As=Object.prototype,Ts=As.hasOwnProperty;function Ss(e,r){var t=$s(e),n=!t&&ys(e),o=!t&&!n&&_s(e),s=!t&&!n&&!o&&ms(e),u=t||n||o||s,c=u?hs(e.length,String):[],f=c.length;for(var p in e)(r||Ts.call(e,p))&&!(u&&(p=="length"||o&&(p=="offset"||p=="parent")||s&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||bs(p,f)))&&c.push(p);return c}var Xr=Ss,Cs=Object.prototype;function xs(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||Cs;return e===t}var Ne=xs,Is=Gt,Os=Is(Object.keys,Object),ws=Os,Ps=Ne,Es=ws,Ms=Object.prototype,Ls=Ms.hasOwnProperty;function js(e){if(!Ps(e))return Es(e);var r=[];for(var t in Object(e))Ls.call(e,t)&&t!="constructor"&&r.push(t);return r}var Ds=js,Rs=Ur,ks=De;function Ns(e){return e!=null&&ks(e.length)&&!Rs(e)}var Yr=Ns,Gs=Xr,Fs=Ds,Bs=Yr;function Us(e){return Bs(e)?Gs(e):Fs(e)}var se=Us,Ks=ie,Hs=se;function qs(e,r){return e&&Ks(r,Hs(r),e)}var zs=qs;function Ws(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Zs=Ws,Xs=N,Ys=Ne,Js=Zs,Qs=Object.prototype,Vs=Qs.hasOwnProperty;function eo(e){if(!Xs(e))return Js(e);var r=Ys(e),t=[];for(var n in e)n=="constructor"&&(r||!Vs.call(e,n))||t.push(n);return t}var ro=eo,to=Xr,no=ro,ao=Yr;function io(e){return ao(e)?to(e,!0):no(e)}var Ge=io,so=ie,oo=Ge;function co(e,r){return e&&so(r,oo(r),e)}var lo=co,Q={exports:{}};Q.exports;(function(e,r){var t=O,n=r&&!r.nodeType&&r,o=n&&!0&&e&&!e.nodeType&&e,s=o&&o.exports===n,u=s?t.Buffer:void 0,c=u?u.allocUnsafe:void 0;function f(p,h){if(h)return p.slice();var y=p.length,$=c?c(y):new p.constructor(y);return p.copy($),$}e.exports=f})(Q,Q.exports);var uo=Q.exports;function fo(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}var po=fo;function go(e,r){for(var t=-1,n=e==null?0:e.length,o=0,s=[];++t<n;){var u=e[t];r(u,t,e)&&(s[o++]=u)}return s}var vo=go;function ho(){return[]}var Jr=ho,yo=vo,$o=Jr,_o=Object.prototype,bo=_o.propertyIsEnumerable,nr=Object.getOwnPropertySymbols,mo=nr?function(e){return e==null?[]:(e=Object(e),yo(nr(e),function(r){return bo.call(e,r)}))}:$o,Fe=mo,Ao=ie,To=Fe;function So(e,r){return Ao(e,To(e),r)}var Co=So;function xo(e,r){for(var t=-1,n=r.length,o=e.length;++t<n;)e[o+t]=r[t];return e}var Qr=xo,Io=Qr,Oo=Kr,wo=Fe,Po=Jr,Eo=Object.getOwnPropertySymbols,Mo=Eo?function(e){for(var r=[];e;)Io(r,wo(e)),e=Oo(e);return r}:Po,Vr=Mo,Lo=ie,jo=Vr;function Do(e,r){return Lo(e,jo(e),r)}var Ro=Do,ko=Qr,No=w;function Go(e,r,t){var n=r(e);return No(e)?n:ko(n,t(e))}var et=Go,Fo=et,Bo=Fe,Uo=se;function Ko(e){return Fo(e,Uo,Bo)}var rt=Ko,Ho=et,qo=Vr,zo=Ge;function Wo(e){return Ho(e,zo,qo)}var Zo=Wo,Xo=R,Yo=O,Jo=Xo(Yo,"DataView"),Qo=Jo,Vo=R,ec=O,rc=Vo(ec,"Promise"),tc=rc,nc=R,ac=O,ic=nc(ac,"Set"),tt=ic,sc=R,oc=O,cc=sc(oc,"WeakMap"),lc=cc,_e=Qo,be=we,me=tc,Ae=tt,Te=lc,nt=ee,K=Hr,ar="[object Map]",uc="[object Object]",ir="[object Promise]",sr="[object Set]",or="[object WeakMap]",cr="[object DataView]",fc=K(_e),pc=K(be),gc=K(me),dc=K(Ae),vc=K(Te),L=nt;(_e&&L(new _e(new ArrayBuffer(1)))!=cr||be&&L(new be)!=ar||me&&L(me.resolve())!=ir||Ae&&L(new Ae)!=sr||Te&&L(new Te)!=or)&&(L=function(e){var r=nt(e),t=r==uc?e.constructor:void 0,n=t?K(t):"";if(n)switch(n){case fc:return cr;case pc:return ar;case gc:return ir;case dc:return sr;case vc:return or}return r});var oe=L,hc=Object.prototype,yc=hc.hasOwnProperty;function $c(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&yc.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var _c=$c,bc=O,mc=bc.Uint8Array,at=mc,lr=at;function Ac(e){var r=new e.constructor(e.byteLength);return new lr(r).set(new lr(e)),r}var Be=Ac,Tc=Be;function Sc(e,r){var t=r?Tc(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Cc=Sc,xc=/\w*$/;function Ic(e){var r=new e.constructor(e.source,xc.exec(e));return r.lastIndex=e.lastIndex,r}var Oc=Ic,ur=xe,fr=ur?ur.prototype:void 0,pr=fr?fr.valueOf:void 0;function wc(e){return pr?Object(pr.call(e)):{}}var Pc=wc,Ec=Be;function Mc(e,r){var t=r?Ec(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Lc=Mc,jc=Be,Dc=Cc,Rc=Oc,kc=Pc,Nc=Lc,Gc="[object Boolean]",Fc="[object Date]",Bc="[object Map]",Uc="[object Number]",Kc="[object RegExp]",Hc="[object Set]",qc="[object String]",zc="[object Symbol]",Wc="[object ArrayBuffer]",Zc="[object DataView]",Xc="[object Float32Array]",Yc="[object Float64Array]",Jc="[object Int8Array]",Qc="[object Int16Array]",Vc="[object Int32Array]",el="[object Uint8Array]",rl="[object Uint8ClampedArray]",tl="[object Uint16Array]",nl="[object Uint32Array]";function al(e,r,t){var n=e.constructor;switch(r){case Wc:return jc(e);case Gc:case Fc:return new n(+e);case Zc:return Dc(e,t);case Xc:case Yc:case Jc:case Qc:case Vc:case el:case rl:case tl:case nl:return Nc(e,t);case Bc:return new n;case Uc:case qc:return new n(e);case Kc:return Rc(e);case Hc:return new n;case zc:return kc(e)}}var il=al,sl=N,gr=Object.create,ol=function(){function e(){}return function(r){if(!sl(r))return{};if(gr)return gr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}(),cl=ol,ll=cl,ul=Kr,fl=Ne;function pl(e){return typeof e.constructor=="function"&&!fl(e)?ll(ul(e)):{}}var gl=pl,dl=oe,vl=D,hl="[object Map]";function yl(e){return vl(e)&&dl(e)==hl}var $l=yl,_l=$l,bl=Re,dr=ke,vr=dr&&dr.isMap,ml=vr?bl(vr):_l,Al=ml,Tl=oe,Sl=D,Cl="[object Set]";function xl(e){return Sl(e)&&Tl(e)==Cl}var Il=xl,Ol=Il,wl=Re,hr=ke,yr=hr&&hr.isSet,Pl=yr?wl(yr):Ol,El=Pl,Ml=Ee,Ll=si,jl=Me,Dl=zs,Rl=lo,kl=uo,Nl=po,Gl=Co,Fl=Ro,Bl=rt,Ul=Zo,Kl=oe,Hl=_c,ql=il,zl=gl,Wl=w,Zl=Le,Xl=Al,Yl=N,Jl=El,Ql=se,Vl=Ge,eu=1,ru=2,tu=4,it="[object Arguments]",nu="[object Array]",au="[object Boolean]",iu="[object Date]",su="[object Error]",st="[object Function]",ou="[object GeneratorFunction]",cu="[object Map]",lu="[object Number]",ot="[object Object]",uu="[object RegExp]",fu="[object Set]",pu="[object String]",gu="[object Symbol]",du="[object WeakMap]",vu="[object ArrayBuffer]",hu="[object DataView]",yu="[object Float32Array]",$u="[object Float64Array]",_u="[object Int8Array]",bu="[object Int16Array]",mu="[object Int32Array]",Au="[object Uint8Array]",Tu="[object Uint8ClampedArray]",Su="[object Uint16Array]",Cu="[object Uint32Array]",b={};b[it]=b[nu]=b[vu]=b[hu]=b[au]=b[iu]=b[yu]=b[$u]=b[_u]=b[bu]=b[mu]=b[cu]=b[lu]=b[ot]=b[uu]=b[fu]=b[pu]=b[gu]=b[Au]=b[Tu]=b[Su]=b[Cu]=!0;b[su]=b[st]=b[du]=!1;function Z(e,r,t,n,o,s){var u,c=r&eu,f=r&ru,p=r&tu;if(t&&(u=o?t(e,n,o,s):t(e)),u!==void 0)return u;if(!Yl(e))return e;var h=Wl(e);if(h){if(u=Hl(e),!c)return Nl(e,u)}else{var y=Kl(e),$=y==st||y==ou;if(Zl(e))return kl(e,c);if(y==ot||y==it||$&&!o){if(u=f||$?{}:zl(e),!c)return f?Fl(e,Rl(u,e)):Gl(e,Dl(u,e))}else{if(!b[y])return o?e:{};u=ql(e,y,c)}}s||(s=new Ml);var a=s.get(e);if(a)return a;s.set(e,u),Jl(e)?e.forEach(function(g){u.add(Z(g,r,t,g,e,s))}):Xl(e)&&e.forEach(function(g,d){u.set(d,Z(g,r,t,d,e,s))});var l=p?f?Ul:Bl:f?Vl:Ql,i=h?void 0:l(e);return Ll(i||e,function(g,d){i&&(d=g,g=e[d]),jl(u,d,Z(g,r,t,d,e,s))}),u}var xu=Z;function Iu(e){return e}var Ou=Iu,wu="__lodash_hash_undefined__";function Pu(e){return this.__data__.set(e,wu),this}var Eu=Pu;function Mu(e){return this.__data__.has(e)}var Lu=Mu,ju=Pe,Du=Eu,Ru=Lu;function V(e){var r=-1,t=e==null?0:e.length;for(this.__data__=new ju;++r<t;)this.add(e[r])}V.prototype.add=V.prototype.push=Du;V.prototype.has=Ru;var ct=V;function ku(e,r){for(var t=-1,n=e==null?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1}var Nu=ku;function Gu(e,r){return e.has(r)}var lt=Gu,Fu=ct,Bu=Nu,Uu=lt,Ku=1,Hu=2;function qu(e,r,t,n,o,s){var u=t&Ku,c=e.length,f=r.length;if(c!=f&&!(u&&f>c))return!1;var p=s.get(e),h=s.get(r);if(p&&h)return p==r&&h==e;var y=-1,$=!0,a=t&Hu?new Fu:void 0;for(s.set(e,r),s.set(r,e);++y<c;){var l=e[y],i=r[y];if(n)var g=u?n(i,l,y,r,e,s):n(l,i,y,e,r,s);if(g!==void 0){if(g)continue;$=!1;break}if(a){if(!Bu(r,function(d,v){if(!Uu(a,v)&&(l===d||o(l,d,t,n,s)))return a.push(v)})){$=!1;break}}else if(!(l===i||o(l,i,t,n,s))){$=!1;break}}return s.delete(e),s.delete(r),$}var ut=qu;function zu(e){var r=-1,t=Array(e.size);return e.forEach(function(n,o){t[++r]=[o,n]}),t}var Wu=zu;function Zu(e){var r=-1,t=Array(e.size);return e.forEach(function(n){t[++r]=n}),t}var Ue=Zu,$r=xe,_r=at,Xu=Oe,Yu=ut,Ju=Wu,Qu=Ue,Vu=1,ef=2,rf="[object Boolean]",tf="[object Date]",nf="[object Error]",af="[object Map]",sf="[object Number]",of="[object RegExp]",cf="[object Set]",lf="[object String]",uf="[object Symbol]",ff="[object ArrayBuffer]",pf="[object DataView]",br=$r?$r.prototype:void 0,pe=br?br.valueOf:void 0;function gf(e,r,t,n,o,s,u){switch(t){case pf:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case ff:return!(e.byteLength!=r.byteLength||!s(new _r(e),new _r(r)));case rf:case tf:case sf:return Xu(+e,+r);case nf:return e.name==r.name&&e.message==r.message;case of:case lf:return e==r+"";case af:var c=Ju;case cf:var f=n&Vu;if(c||(c=Qu),e.size!=r.size&&!f)return!1;var p=u.get(e);if(p)return p==r;n|=ef,u.set(e,r);var h=Yu(c(e),c(r),n,o,s,u);return u.delete(e),h;case uf:if(pe)return pe.call(e)==pe.call(r)}return!1}var df=gf,mr=rt,vf=1,hf=Object.prototype,yf=hf.hasOwnProperty;function $f(e,r,t,n,o,s){var u=t&vf,c=mr(e),f=c.length,p=mr(r),h=p.length;if(f!=h&&!u)return!1;for(var y=f;y--;){var $=c[y];if(!(u?$ in r:yf.call(r,$)))return!1}var a=s.get(e),l=s.get(r);if(a&&l)return a==r&&l==e;var i=!0;s.set(e,r),s.set(r,e);for(var g=u;++y<f;){$=c[y];var d=e[$],v=r[$];if(n)var _=u?n(v,d,$,r,e,s):n(d,v,$,e,r,s);if(!(_===void 0?d===v||o(d,v,t,n,s):_)){i=!1;break}g||(g=$=="constructor")}if(i&&!g){var T=e.constructor,S=r.constructor;T!=S&&"constructor"in e&&"constructor"in r&&!(typeof T=="function"&&T instanceof T&&typeof S=="function"&&S instanceof S)&&(i=!1)}return s.delete(e),s.delete(r),i}var _f=$f,ge=Ee,bf=ut,mf=df,Af=_f,Ar=oe,Tr=w,Sr=Le,Tf=Zr,Sf=1,Cr="[object Arguments]",xr="[object Array]",z="[object Object]",Cf=Object.prototype,Ir=Cf.hasOwnProperty;function xf(e,r,t,n,o,s){var u=Tr(e),c=Tr(r),f=u?xr:Ar(e),p=c?xr:Ar(r);f=f==Cr?z:f,p=p==Cr?z:p;var h=f==z,y=p==z,$=f==p;if($&&Sr(e)){if(!Sr(r))return!1;u=!0,h=!1}if($&&!h)return s||(s=new ge),u||Tf(e)?bf(e,r,t,n,o,s):mf(e,r,f,t,n,o,s);if(!(t&Sf)){var a=h&&Ir.call(e,"__wrapped__"),l=y&&Ir.call(r,"__wrapped__");if(a||l){var i=a?e.value():e,g=l?r.value():r;return s||(s=new ge),o(i,g,t,n,s)}}return $?(s||(s=new ge),Af(e,r,t,n,o,s)):!1}var If=xf,Of=If,Or=D;function ft(e,r,t,n,o){return e===r?!0:e==null||r==null||!Or(e)&&!Or(r)?e!==e&&r!==r:Of(e,r,t,n,ft,o)}var pt=ft,wf=Ee,Pf=pt,Ef=1,Mf=2;function Lf(e,r,t,n){var o=t.length,s=o,u=!n;if(e==null)return!s;for(e=Object(e);o--;){var c=t[o];if(u&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++o<s;){c=t[o];var f=c[0],p=e[f],h=c[1];if(u&&c[2]){if(p===void 0&&!(f in e))return!1}else{var y=new wf;if(n)var $=n(p,h,f,e,r,y);if(!($===void 0?Pf(h,p,Ef|Mf,n,y):$))return!1}}return!0}var jf=Lf,Df=N;function Rf(e){return e===e&&!Df(e)}var gt=Rf,kf=gt,Nf=se;function Gf(e){for(var r=Nf(e),t=r.length;t--;){var n=r[t],o=e[n];r[t]=[n,o,kf(o)]}return r}var Ff=Gf;function Bf(e,r){return function(t){return t==null?!1:t[e]===r&&(r!==void 0||e in Object(t))}}var dt=Bf,Uf=jf,Kf=Ff,Hf=dt;function qf(e){var r=Kf(e);return r.length==1&&r[0][2]?Hf(r[0][0],r[0][1]):function(t){return t===e||Uf(t,e,r)}}var zf=qf,Wf=ee,Zf=D,Xf="[object Symbol]";function Yf(e){return typeof e=="symbol"||Zf(e)&&Wf(e)==Xf}var Ke=Yf,Jf=w,Qf=Ke,Vf=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ep=/^\w*$/;function rp(e,r){if(Jf(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||Qf(e)?!0:ep.test(e)||!Vf.test(e)||r!=null&&e in Object(r)}var He=rp,vt=Pe,tp="Expected a function";function qe(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(tp);var t=function(){var n=arguments,o=r?r.apply(this,n):n[0],s=t.cache;if(s.has(o))return s.get(o);var u=e.apply(this,n);return t.cache=s.set(o,u)||s,u};return t.cache=new(qe.Cache||vt),t}qe.Cache=vt;var np=qe,ap=np,ip=500;function sp(e){var r=ap(e,function(n){return t.size===ip&&t.clear(),n}),t=r.cache;return r}var op=sp,cp=op,lp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,up=/\\(\\)?/g,fp=cp(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(lp,function(t,n,o,s){r.push(o?s.replace(up,"$1"):n||t)}),r}),pp=fp;function gp(e,r){for(var t=-1,n=e==null?0:e.length,o=Array(n);++t<n;)o[t]=r(e[t],t,e);return o}var dp=gp,wr=xe,vp=dp,hp=w,yp=Ke,$p=1/0,Pr=wr?wr.prototype:void 0,Er=Pr?Pr.toString:void 0;function ht(e){if(typeof e=="string")return e;if(hp(e))return vp(e,ht)+"";if(yp(e))return Er?Er.call(e):"";var r=e+"";return r=="0"&&1/e==-$p?"-0":r}var _p=ht,bp=_p;function mp(e){return e==null?"":bp(e)}var Ap=mp,Tp=w,Sp=He,Cp=pp,xp=Ap;function Ip(e,r){return Tp(e)?e:Sp(e,r)?[e]:Cp(xp(e))}var ce=Ip,Op=Ke,wp=1/0;function Pp(e){if(typeof e=="string"||Op(e))return e;var r=e+"";return r=="0"&&1/e==-wp?"-0":r}var q=Pp,Ep=ce,Mp=q;function Lp(e,r){r=Ep(r,e);for(var t=0,n=r.length;e!=null&&t<n;)e=e[Mp(r[t++])];return t&&t==n?e:void 0}var ze=Lp,jp=ze;function Dp(e,r,t){var n=e==null?void 0:jp(e,r);return n===void 0?t:n}var yt=Dp;const Sv=Ie(yt);function Rp(e,r){return e!=null&&r in Object(e)}var kp=Rp,Np=ce,Gp=Wr,Fp=w,Bp=je,Up=De,Kp=q;function Hp(e,r,t){r=Np(r,e);for(var n=-1,o=r.length,s=!1;++n<o;){var u=Kp(r[n]);if(!(s=e!=null&&t(e,u)))break;e=e[u]}return s||++n!=o?s:(o=e==null?0:e.length,!!o&&Up(o)&&Bp(u,o)&&(Fp(e)||Gp(e)))}var qp=Hp,zp=kp,Wp=qp;function Zp(e,r){return e!=null&&Wp(e,r,zp)}var Xp=Zp,Yp=pt,Jp=yt,Qp=Xp,Vp=He,eg=gt,rg=dt,tg=q,ng=1,ag=2;function ig(e,r){return Vp(e)&&eg(r)?rg(tg(e),r):function(t){var n=Jp(t,e);return n===void 0&&n===r?Qp(t,e):Yp(r,n,ng|ag)}}var sg=ig;function og(e){return function(r){return r==null?void 0:r[e]}}var cg=og,lg=ze;function ug(e){return function(r){return lg(r,e)}}var fg=ug,pg=cg,gg=fg,dg=He,vg=q;function hg(e){return dg(e)?pg(vg(e)):gg(e)}var yg=hg,$g=zf,_g=sg,bg=Ou,mg=w,Ag=yg;function Tg(e){return typeof e=="function"?e:e==null?bg:typeof e=="object"?mg(e)?_g(e[0],e[1]):$g(e):Ag(e)}var Cv=Tg;function Sg(e,r,t,n){for(var o=e.length,s=t+(n?1:-1);n?s--:++s<o;)if(r(e[s],s,e))return s;return-1}var Cg=Sg;function xg(e){return e!==e}var Ig=xg;function Og(e,r,t){for(var n=t-1,o=e.length;++n<o;)if(e[n]===r)return n;return-1}var wg=Og,Pg=Cg,Eg=Ig,Mg=wg;function Lg(e,r,t){return r===r?Mg(e,r,t):Pg(e,Eg,t)}var jg=Lg,Dg=jg;function Rg(e,r){var t=e==null?0:e.length;return!!t&&Dg(e,r,0)>-1}var kg=Rg;function Ng(e,r,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(t(r,e[n]))return!0;return!1}var Gg=Ng;function Fg(){}var Bg=Fg,de=tt,Ug=Bg,Kg=Ue,Hg=1/0,qg=de&&1/Kg(new de([,-0]))[1]==Hg?function(e){return new de(e)}:Ug,zg=qg,Wg=ct,Zg=kg,Xg=Gg,Yg=lt,Jg=zg,Qg=Ue,Vg=200;function ed(e,r,t){var n=-1,o=Zg,s=e.length,u=!0,c=[],f=c;if(t)u=!1,o=Xg;else if(s>=Vg){var p=r?null:Jg(e);if(p)return Qg(p);u=!1,o=Yg,f=new Wg}else f=r?[]:c;e:for(;++n<s;){var h=e[n],y=r?r(h):h;if(h=t||h!==0?h:0,u&&y===y){for(var $=f.length;$--;)if(f[$]===y)continue e;r&&f.push(y),c.push(h)}else o(f,y,t)||(f!==c&&f.push(y),c.push(h))}return c}var rd=ed,td=xu,nd=1,ad=4;function id(e){return td(e,nd|ad)}var sd=id;const xv=Ie(sd);var od=Me,cd=ce,ld=je,Mr=N,ud=q;function fd(e,r,t,n){if(!Mr(e))return e;r=cd(r,e);for(var o=-1,s=r.length,u=s-1,c=e;c!=null&&++o<s;){var f=ud(r[o]),p=t;if(f==="__proto__"||f==="constructor"||f==="prototype")return e;if(o!=u){var h=c[f];p=n?n(h,f,c):void 0,p===void 0&&(p=Mr(h)?h:ld(r[o+1])?[]:{})}od(c,f,p),c=c[f]}return e}var pd=fd,gd=ze,dd=pd,vd=ce;function hd(e,r,t){for(var n=-1,o=r.length,s={};++n<o;){var u=r[n],c=gd(e,u);t(c,u)&&dd(s,vd(u,e),c)}return s}var Iv=hd,yd=rd;function $d(e){return e&&e.length?yd(e):[]}var _d=$d;const Ov=Ie(_d);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},j.apply(this,arguments)}const bd=["children","options"];var Lr,jr;(function(e){e.blockQuote="0",e.breakLine="1",e.breakThematic="2",e.codeBlock="3",e.codeFenced="4",e.codeInline="5",e.footnote="6",e.footnoteReference="7",e.gfmTask="8",e.heading="9",e.headingSetext="10",e.htmlBlock="11",e.htmlComment="12",e.htmlSelfClosing="13",e.image="14",e.link="15",e.linkAngleBraceStyleDetector="16",e.linkBareUrlDetector="17",e.linkMailtoDetector="18",e.newlineCoalescer="19",e.orderedList="20",e.paragraph="21",e.ref="22",e.refImage="23",e.refLink="24",e.table="25",e.tableSeparator="26",e.text="27",e.textBolded="28",e.textEmphasized="29",e.textEscaped="30",e.textMarked="31",e.textStrikethroughed="32",e.unorderedList="33"})(Lr||(Lr={})),function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(jr||(jr={}));const Dr=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,r)=>(e[r.toLowerCase()]=r,e),{for:"htmlFor"}),Rr={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},md=["style","script"],Ad=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,Td=/mailto:/i,Sd=/\n{2,}$/,$t=/^(\s*>[\s\S]*?)(?=\n{2,})/,Cd=/^ *> ?/gm,xd=/^ {2,}\n/,Id=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,_t=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,bt=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,Od=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,wd=/^(?:\n *)*\n/,Pd=/\r\n?/g,Ed=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,Md=/^\[\^([^\]]+)]/,Ld=/\f/g,jd=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,Dd=/^\s*?\[(x|\s)\]/,mt=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,At=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,Tt=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,Se=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,Rd=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,St=/^<!--[\s\S]*?(?:-->)/,kd=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,Ce=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,Nd=/^\{.*\}$/,Gd=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,Fd=/^<([^ >]+@[^ >]+)>/,Bd=/^<([^ >]+:\/[^ >]+)>/,Ud=/-([a-z])?/gi,Ct=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,Kd=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,Hd=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,qd=/^\[([^\]]*)\] ?\[([^\]]*)\]/,zd=/(\[|\])/g,Wd=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Zd=/\t/g,Xd=/(^ *\||\| *$)/g,Yd=/^ *:-+: *$/,Jd=/^ *:-+ *$/,Qd=/^ *-+: *$/,le="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",Vd=new RegExp(`^([*_])\\1${le}\\1\\1(?!\\1)`),ev=new RegExp(`^([*_])${le}\\1(?!\\1|\\w)`),rv=new RegExp(`^==${le}==`),tv=new RegExp(`^~~${le}~~`),nv=/^\\([^0-9A-Za-z\s])/,av=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,iv=/^\n+/,sv=/^([ \t]*)/,ov=/\\([^\\])/g,kr=/ *\n+$/,cv=/(?:^|\n)( *)$/,We="(?:\\d+\\.)",Ze="(?:[*+-])";function xt(e){return"( *)("+(e===1?We:Ze)+") +"}const It=xt(1),Ot=xt(2);function wt(e){return new RegExp("^"+(e===1?It:Ot))}const lv=wt(1),uv=wt(2);function Pt(e){return new RegExp("^"+(e===1?It:Ot)+"[^\\n]*(?:\\n(?!\\1"+(e===1?We:Ze)+" )[^\\n]*)*(\\n|$)","gm")}const Et=Pt(1),Mt=Pt(2);function Lt(e){const r=e===1?We:Ze;return new RegExp("^( *)("+r+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+r+" (?!"+r+" ))\\n*|\\s*\\n*$)")}const jt=Lt(1),Dt=Lt(2);function Nr(e,r){const t=r===1,n=t?jt:Dt,o=t?Et:Mt,s=t?lv:uv;return{match(u,c,f){const p=cv.exec(f);return p&&(c.list||!c.inline&&!c.simple)?n.exec(u=p[1]+u):null},order:1,parse(u,c,f){const p=t?+u[2]:void 0,h=u[0].replace(Sd,`
`).match(o);let y=!1;return{items:h.map(function($,a){const l=s.exec($)[0].length,i=new RegExp("^ {1,"+l+"}","gm"),g=$.replace(i,"").replace(s,""),d=a===h.length-1,v=g.indexOf(`

`)!==-1||d&&y;y=v;const _=f.inline,T=f.list;let S;f.list=!0,v?(f.inline=!1,S=g.replace(kr,`

`)):(f.inline=!0,S=g.replace(kr,""));const x=c(S,f);return f.inline=_,f.list=T,x}),ordered:t,start:p}},render:(u,c,f)=>e(u.ordered?"ol":"ul",{key:f.key,start:u.type==="20"?u.start:void 0},u.items.map(function(p,h){return e("li",{key:h},c(p,f))}))}}const fv=new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`),pv=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Rt=[$t,_t,bt,mt,Tt,At,St,Ct,Et,jt,Mt,Dt],gv=[...Rt,/^[^\n]+(?:  \n|\n{2,})/,Se,Ce];function dv(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function vv(e){return Qd.test(e)?"right":Yd.test(e)?"center":Jd.test(e)?"left":null}function Gr(e,r,t,n){const o=t.inTable;t.inTable=!0;let s=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((c,f)=>(f.trim()==="|"?c.push(n?{type:"26"}:{type:"27",text:f}):f!==""&&c.push.apply(c,r(f,t)),c),[]);t.inTable=o;let u=[[]];return s.forEach(function(c,f){c.type==="26"?f!==0&&f!==s.length-1&&u.push([]):(c.type!=="27"||s[f+1]!=null&&s[f+1].type!=="26"||(c.text=c.text.trimEnd()),u[u.length-1].push(c))}),u}function hv(e,r,t){t.inline=!0;const n=e[2]?e[2].replace(Xd,"").split("|").map(vv):[],o=e[3]?function(u,c,f){return u.trim().split(`
`).map(function(p){return Gr(p,c,f,!0)})}(e[3],r,t):[],s=Gr(e[1],r,t,!!o.length);return t.inline=!1,o.length?{align:n,cells:o,header:s,type:"25"}:{children:s,type:"21"}}function Fr(e,r){return e.align[r]==null?{}:{textAlign:e.align[r]}}function E(e){return function(r,t){return t.inline?e.exec(r):null}}function M(e){return function(r,t){return t.inline||t.simple?e.exec(r):null}}function I(e){return function(r,t){return t.inline||t.simple?null:e.exec(r)}}function H(e){return function(r){return e.exec(r)}}function yv(e,r,t){if(r.inline||r.simple||t&&!t.endsWith(`
`))return null;let n="";e.split(`
`).every(s=>!Rt.some(u=>u.test(s))&&(n+=s+`
`,s.trim()));const o=n.trimEnd();return o==""?null:[n,o]}function k(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch{return null}return e}function Br(e){return e.replace(ov,"$1")}function X(e,r,t){const n=t.inline||!1,o=t.simple||!1;t.inline=!0,t.simple=!0;const s=e(r,t);return t.inline=n,t.simple=o,s}function $v(e,r,t){const n=t.inline||!1,o=t.simple||!1;t.inline=!1,t.simple=!0;const s=e(r,t);return t.inline=n,t.simple=o,s}function _v(e,r,t){const n=t.inline||!1;t.inline=!1;const o=e(r,t);return t.inline=n,o}const ve=(e,r,t)=>({children:X(r,e[1],t)});function he(){return{}}function ye(){return null}function bv(...e){return e.filter(Boolean).join(" ")}function $e(e,r,t){let n=e;const o=r.split(".");for(;o.length&&(n=n[o[0]],n!==void 0);)o.shift();return n||t}function mv(e="",r={}){r.overrides=r.overrides||{},r.slugify=r.slugify||dv,r.namedCodesToUnicode=r.namedCodesToUnicode?j({},Rr,r.namedCodesToUnicode):Rr;const t=r.createElement||W.createElement;function n(a,l,...i){const g=$e(r.overrides,`${a}.props`,{});return t(function(d,v){const _=$e(v,d);return _?typeof _=="function"||typeof _=="object"&&"render"in _?_:$e(v,`${d}.component`,d):d}(a,r.overrides),j({},l,g,{className:bv(l==null?void 0:l.className,g.className)||void 0}),...i)}function o(a){a=a.replace(jd,"");let l=!1;r.forceInline?l=!0:r.forceBlock||(l=Wd.test(a)===!1);const i=h(p(l?a:`${a.trimEnd().replace(iv,"")}

`,{inline:l}));for(;typeof i[i.length-1]=="string"&&!i[i.length-1].trim();)i.pop();if(r.wrapper===null)return i;const g=r.wrapper||(l?"span":"div");let d;if(i.length>1||r.forceWrapper)d=i;else{if(i.length===1)return d=i[0],typeof d=="string"?n("span",{key:"outer"},d):d;d=null}return W.createElement(g,{key:"outer"},d)}function s(a){const l=a.match(Ad);return l?l.reduce(function(i,g,d){const v=g.indexOf("=");if(v!==-1){const _=function(A){return A.indexOf("-")!==-1&&A.match(kd)===null&&(A=A.replace(Ud,function(C,P){return P.toUpperCase()})),A}(g.slice(0,v)).trim(),T=function(A){const C=A[0];return(C==='"'||C==="'")&&A.length>=2&&A[A.length-1]===C?A.slice(1,-1):A}(g.slice(v+1).trim()),S=Dr[_]||_,x=i[S]=function(A,C){return A==="style"?C.split(/;\s?/).reduce(function(P,ue){const Xe=ue.slice(0,ue.indexOf(":"));return P[Xe.trim().replace(/(-[a-z])/g,kt=>kt[1].toUpperCase())]=ue.slice(Xe.length+1).trim(),P},{}):A==="href"||A==="src"?k(C):(C.match(Nd)&&(C=C.slice(1,C.length-1)),C==="true"||C!=="false"&&C)}(_,T);typeof x=="string"&&(Se.test(x)||Ce.test(x))&&(i[S]=W.cloneElement(o(x.trim()),{key:d}))}else g!=="style"&&(i[Dr[g]||g]=!0);return i},{}):null}const u=[],c={},f={0:{match:I($t),order:1,parse:(a,l,i)=>({children:l(a[0].replace(Cd,""),i)}),render:(a,l,i)=>n("blockquote",{key:i.key},l(a.children,i))},1:{match:H(xd),order:1,parse:he,render:(a,l,i)=>n("br",{key:i.key})},2:{match:I(Id),order:1,parse:he,render:(a,l,i)=>n("hr",{key:i.key})},3:{match:I(bt),order:0,parse:a=>({lang:void 0,text:a[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(a,l,i)=>n("pre",{key:i.key},n("code",j({},a.attrs,{className:a.lang?`lang-${a.lang}`:""}),a.text))},4:{match:I(_t),order:0,parse:a=>({attrs:s(a[3]||""),lang:a[2]||void 0,text:a[4],type:"3"})},5:{match:M(Od),order:3,parse:a=>({text:a[2]}),render:(a,l,i)=>n("code",{key:i.key},a.text)},6:{match:I(Ed),order:0,parse:a=>(u.push({footnote:a[2],identifier:a[1]}),{}),render:ye},7:{match:E(Md),order:1,parse:a=>({target:`#${r.slugify(a[1])}`,text:a[1]}),render:(a,l,i)=>n("a",{key:i.key,href:k(a.target)},n("sup",{key:i.key},a.text))},8:{match:E(Dd),order:1,parse:a=>({completed:a[1].toLowerCase()==="x"}),render:(a,l,i)=>n("input",{checked:a.completed,key:i.key,readOnly:!0,type:"checkbox"})},9:{match:I(r.enforceAtxHeadings?At:mt),order:1,parse:(a,l,i)=>({children:X(l,a[2],i),id:r.slugify(a[2]),level:a[1].length}),render:(a,l,i)=>n(`h${a.level}`,{id:a.id,key:i.key},l(a.children,i))},10:{match:I(Tt),order:0,parse:(a,l,i)=>({children:X(l,a[1],i),level:a[2]==="="?1:2,type:"9"})},11:{match:H(Se),order:1,parse(a,l,i){const[,g]=a[3].match(sv),d=new RegExp(`^${g}`,"gm"),v=a[3].replace(d,""),_=(T=v,gv.some(C=>C.test(T))?_v:X);var T;const S=a[1].toLowerCase(),x=md.indexOf(S)!==-1,A={attrs:s(a[2]),noInnerParse:x,tag:(x?S:a[1]).trim()};return i.inAnchor=i.inAnchor||S==="a",x?A.text=a[3]:A.children=_(l,v,i),i.inAnchor=!1,A},render:(a,l,i)=>n(a.tag,j({key:i.key},a.attrs),a.text||l(a.children,i))},13:{match:H(Ce),order:1,parse:a=>({attrs:s(a[2]||""),tag:a[1].trim()}),render:(a,l,i)=>n(a.tag,j({},a.attrs,{key:i.key}))},12:{match:H(St),order:1,parse:()=>({}),render:ye},14:{match:M(pv),order:1,parse:a=>({alt:a[1],target:Br(a[2]),title:a[3]}),render:(a,l,i)=>n("img",{key:i.key,alt:a.alt||void 0,title:a.title||void 0,src:k(a.target)})},15:{match:E(fv),order:3,parse:(a,l,i)=>({children:$v(l,a[1],i),target:Br(a[2]),title:a[3]}),render:(a,l,i)=>n("a",{key:i.key,href:k(a.target),title:a.title},l(a.children,i))},16:{match:E(Bd),order:0,parse:a=>({children:[{text:a[1],type:"27"}],target:a[1],type:"15"})},17:{match:(a,l)=>l.inAnchor?null:E(Gd)(a,l),order:0,parse:a=>({children:[{text:a[1],type:"27"}],target:a[1],title:void 0,type:"15"})},18:{match:E(Fd),order:0,parse(a){let l=a[1],i=a[1];return Td.test(i)||(i="mailto:"+i),{children:[{text:l.replace("mailto:",""),type:"27"}],target:i,type:"15"}}},20:Nr(n,1),33:Nr(n,2),19:{match:I(wd),order:3,parse:he,render:()=>`
`},21:{match:yv,order:3,parse:ve,render:(a,l,i)=>n("p",{key:i.key},l(a.children,i))},22:{match:E(Kd),order:0,parse:a=>(c[a[1]]={target:a[2],title:a[4]},{}),render:ye},23:{match:M(Hd),order:0,parse:a=>({alt:a[1]||void 0,ref:a[2]}),render:(a,l,i)=>c[a.ref]?n("img",{key:i.key,alt:a.alt,src:k(c[a.ref].target),title:c[a.ref].title}):null},24:{match:E(qd),order:0,parse:(a,l,i)=>({children:l(a[1],i),fallbackChildren:l(a[0].replace(zd,"\\$1"),i),ref:a[2]}),render:(a,l,i)=>c[a.ref]?n("a",{key:i.key,href:k(c[a.ref].target),title:c[a.ref].title},l(a.children,i)):n("span",{key:i.key},l(a.fallbackChildren,i))},25:{match:I(Ct),order:1,parse:hv,render(a,l,i){const g=a;return n("table",{key:i.key},n("thead",null,n("tr",null,g.header.map(function(d,v){return n("th",{key:v,style:Fr(g,v)},l(d,i))}))),n("tbody",null,g.cells.map(function(d,v){return n("tr",{key:v},d.map(function(_,T){return n("td",{key:T,style:Fr(g,T)},l(_,i))}))})))}},27:{match:H(av),order:4,parse:a=>({text:a[0].replace(Rd,(l,i)=>r.namedCodesToUnicode[i]?r.namedCodesToUnicode[i]:l)}),render:a=>a.text},28:{match:M(Vd),order:2,parse:(a,l,i)=>({children:l(a[2],i)}),render:(a,l,i)=>n("strong",{key:i.key},l(a.children,i))},29:{match:M(ev),order:3,parse:(a,l,i)=>({children:l(a[2],i)}),render:(a,l,i)=>n("em",{key:i.key},l(a.children,i))},30:{match:M(nv),order:1,parse:a=>({text:a[1],type:"27"})},31:{match:M(rv),order:3,parse:ve,render:(a,l,i)=>n("mark",{key:i.key},l(a.children,i))},32:{match:M(tv),order:3,parse:ve,render:(a,l,i)=>n("del",{key:i.key},l(a.children,i))}};r.disableParsingRawHTML===!0&&(delete f[11],delete f[13]);const p=function(a){let l=Object.keys(a);function i(g,d){let v=[],_="";for(;g;){let T=0;for(;T<l.length;){const S=l[T],x=a[S],A=x.match(g,d,_);if(A){const C=A[0];g=g.substring(C.length);const P=x.parse(A,i,d);P.type==null&&(P.type=S),v.push(P),_=C;break}T++}}return v}return l.sort(function(g,d){let v=a[g].order,_=a[d].order;return v!==_?v-_:g<d?-1:1}),function(g,d){return i(function(v){return v.replace(Pd,`
`).replace(Ld,"").replace(Zd,"    ")}(g),d)}}(f),h=(y=function(a,l){return function(i,g,d){const v=a[i.type].render;return l?l(()=>v(i,g,d),i,g,d):v(i,g,d)}}(f,r.renderRule),function a(l,i={}){if(Array.isArray(l)){const g=i.key,d=[];let v=!1;for(let _=0;_<l.length;_++){i.key=_;const T=a(l[_],i),S=typeof T=="string";S&&v?d[d.length-1]+=T:T!==null&&d.push(T),v=S}return i.key=g,d}return y(l,a,i)});var y;const $=o(e);return u.length?n("div",null,$,n("footer",{key:"footer"},u.map(function(a){return n("div",{id:r.slugify(a.identifier),key:a.identifier},a.identifier,h(p(a.footnote,{inline:!0})))}))):$}const wv=e=>{let{children:r="",options:t}=e,n=function(o,s){if(o==null)return{};var u,c,f={},p=Object.keys(o);for(c=0;c<p.length;c++)s.indexOf(u=p[c])>=0||(f[u]=o[u]);return f}(e,bd);return W.cloneElement(mv(r,t),n)};export{cg as $,uo as A,Lc as B,po as C,gl as D,Ee as E,Xp as F,ze as G,Re as H,pt as I,ce as J,q as K,xu as L,wv as M,bi as N,Sv as O,pd as P,ct as Q,lt as R,kg as S,Gg as T,_d as U,jg as V,sd as W,pp as X,Ap as Y,vo as Z,dp as _,Cv as a,Cg as a0,Me as a1,Iv as b,Zo as c,xv as d,Yr as e,Ou as f,si as g,qp as h,Ke as i,Ds as j,se as k,oe as l,Wr as m,Le as n,Ne as o,Zr as p,cl as q,Qr as r,li as s,rd as t,Ov as u,Oe as v,je as w,Ge as x,qr as y,ie as z};