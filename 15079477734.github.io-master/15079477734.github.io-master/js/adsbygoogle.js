(function(){var n=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return p.apply(null,arguments)};var u=(new Date).getTime();var da=function(){},v=function(a,b,c){switch(typeof b){case "string":ea(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var g="",h=0;h<d;h++)c.push(g),v(a,b[h],c),g=",";c.push("]");break}c.push("{");d="";for(g in b)b.hasOwnProperty(g)&&(h=b[g],"function"!=typeof h&&(c.push(d),ea(g,c),c.push(":"),v(a,h,c),d=
","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},x={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,ea=function(a,b){b.push('"');b.push(a.replace(fa,function(a){if(a in x)return x[a];var b=a.charCodeAt(0),g="\\u";16>b?g+="000":256>b?g+="00":4096>b&&(g+="0");return x[a]=g+b.toString(16)}));b.push('"')};var ga=/&/g,ha=/</g,ia=/>/g,ja=/"/g,ka=/'/g,la=/\x00/g,y={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},D={"'":"\\'"};var E=function(a){E[" "](a);return a};E[" "]=function(){};var F=function(a){try{var b;if(b=!!a&&null!=a.location.href)t:{try{E(a.foo);b=!0;break t}catch(c){}b=!1}return b}catch(d){return!1}},G=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var d=new Uint16Array(1);window.crypto.getRandomValues(d);c=d[0]/65536}catch(g){c=Math.random()}return a[Math.floor(c*a.length)]}}return null};var ma=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(g){b=c}}return b};var na=document,H=window;var I=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},J=function(a){return!!a&&"function"==typeof a&&!!a.call},oa=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},pa=function(a){a.google_unique_id?++a.google_unique_id:a.google_unique_id=1},K=function(a){a=a.google_unique_id;return"number"==typeof a?a:0},qa=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&
4294967295;return 0<c?c:4294967296+c},L=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},ra=/(^| )adsbygoogle($| )/;var sa={google_analytics_domain_name:!0,google_analytics_uacct:!0},ta=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];I(a,function(a,d){if(null!=a){var g;try{var h=[];v(new da,a,h);g=h.join("")}catch(f){}g&&oa(b,d,"=",g,";")}});return b.join("")};var M=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},N=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},ua=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,va=function(a,b){if(!a)return b;var c=a.match(ua);return c?c[0]:b};var wa=M("0.15"),xa=M("0.01"),ya=M("0.01"),za=M(""),Aa=M("0.01"),Ba=M("1.0"),Ca=M("0.0"),O=N("false",!1),Da=M("0.0"),Ea=M("0.001"),Fa=M("0.2"),
Ga=N("true",!0),Ha=M("0.05"),Ia=parseInt("100",10),Ja=isNaN(Ia)?100:Ia;var Ka=N("false",!1);var La=!!window.google_async_iframe_id,Ma=function(a,b,c){var d=["<iframe"],g;for(g in a)a.hasOwnProperty(g)&&oa(d,g+"="+a[g]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");a=a.id;b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins id="',a+"_expand",'" style="display:inline-table;',b,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var P=!0,Na={},Qa=function(a,b,c,d){var g=Oa,h,f=P;try{h=b()}catch(e){try{var k=ma(e);b="";e.fileName&&(b=e.fileName);var l=-1;e.lineNumber&&(l=e.lineNumber);f=g(a,k,b,l,c)}catch(r){try{var z=ma(r);a="";r.fileName&&(a=r.fileName);c=-1;r.lineNumber&&(c=r.lineNumber);Oa("pAR",z,a,c,void 0,void 0)}catch(B){Pa({context:"mRE",msg:B.toString()+"\n"+(B.stack||"")},void 0)}}if(!f)throw e;}finally{if(d)try{d()}catch(C){}}return h},Oa=function(a,b,c,d,g,h){var f={};if(g)try{g(f)}catch(e){}f.context=a;f.msg=
b.substring(0,512);c&&(f.file=c);0<d&&(f.line=d.toString());f.url=na.URL.substring(0,512);f.ref=na.referrer.substring(0,512);Ra(f);Pa(f,h);return P},Pa=function(a,b){try{if(Math.random()<(b||.01)){var c="/pagead/gen_204?id=jserror"+Sa(a),d="http"+("http:"==H.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+c,d=d.substring(0,2E3);H.google_image_requests||(H.google_image_requests=[]);var g=H.document.createElement("img");g.src=d;H.google_image_requests.push(g)}}catch(h){}},Ra=function(a){var b=
a||{};I(Na,function(a,d){b[d]=H[a]})},Ta=function(a,b){return function(){var c=arguments;return Qa(a,function(){return b.apply(void 0,c)},void 0,void 0)}},Q=function(a,b){return Ta(a,b)},Sa=function(a){var b="";I(a,function(a,d){if(0===a||a)b+="&"+d+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};var R=null,Ua=function(){if(!R){for(var a=window,b=a,c=0;a!=a.parent;)if(a=a.parent,c++,F(a))b=a;else break;R=b}return R};var Va={H:"google_instream_debug",I:"google_anchor_debug",J:"google_ia_debug",N:"google_ia_debug_spa",M:"google_ia_debug_scr",O:"google_ladder_debug",P:"google_resize_debug",K:"google_ia_debug_fb",L:"google_ia_debug_fr"};var Wa=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body).clientHeight},S=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body).clientWidth},Ya=function(a){var b=!1;I(Va,function(c){Xa(a,c)&&(b=!0)});return b},Xa=function(a,b){if(!a||!a.indexOf)return!1;if(-1!=a.indexOf(b))return!0;var c=Za(b);return-1!=a.indexOf(c)?!0:!1},Za=function(a){var b="";I(a.split("_"),function(a){b+=a.substr(0,2)});return b};var $a={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var ab=/^([0-9.]+)px$/,bb=/^([0-9.]+)$/,cb=function(a){return(a=ab.exec(a))?Number(a[1]):null},db=function(a){return(a=cb(a))?Math.round(a):null},T=function(a,b,c){for(var d=0;d<c.length;d++){var g="google_ad_"+c[d];if(!b.hasOwnProperty(g)){var h=db(a[c[d]]);null!=h&&(b[g]=h)}}},eb=function(a){var b=a.style.width;a.style.width="100%";var c=a.offsetWidth;a.style.width=b;return c},fb=function(a,b){var c=b.document.documentElement;try{var d=c.getBoundingClientRect();return a.getBoundingClientRect().top-
d.top}catch(g){return 0}};var gb={rectangle:1,horizontal:2,vertical:4},hb=[{width:970,height:90,format:2},{width:728,height:90,format:2},{width:468,height:60,format:2},{width:336,height:280,format:1},{width:320,height:50,format:2},{width:300,height:600,format:4},{width:300,height:250,format:1},{width:250,height:250,format:1},{width:234,height:60,format:2},{width:200,height:200,format:1},{width:180,height:150,format:1},{width:160,height:600,format:4},{width:125,height:125,format:1},{width:120,height:600,format:4},{width:120,
height:240,format:4}],ib=function(a,b){return b.width-a.width||b.height-a.height},jb={B:"ECOMB",A:"CCOMB"};P=!N("false",!1);Na={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};var kb=function(a,b,c){c||(c=Ka?"https":"http");return[c,"://",a,b].join("")};var U=null;var V=function(a){this.j=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:p(this.v,this)});this.s=a.google_iframe_oncopy},lb;var W="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(W)&&(-1!=W.indexOf("&")&&(W=W.replace(ga,"&amp;")),-1!=W.indexOf("<")&&(W=W.replace(ha,"&lt;")),-1!=W.indexOf(">")&&(W=W.replace(ia,"&gt;")),-1!=W.indexOf('"')&&(W=W.replace(ja,"&quot;")),-1!=W.indexOf("'")&&(W=W.replace(ka,"&#39;")),-1!=W.indexOf("\x00")&&(W=W.replace(la,"&#0;")));lb=W;V.prototype.set=function(a,b){this.s.handlers[a]=b;this.j.addEventListener&&this.j.addEventListener("load",p(this.t,this,a),!1)};
V.prototype.t=function(a){a=this.j.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};V.prototype.v=function(a,b){var c=mb("rx",a),d;t:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break t}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var mb=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var X;t:{var nb=n.navigator;if(nb){var ob=nb.userAgent;if(ob){X=ob;break t}}X=""};var pb=-1!=X.indexOf("Opera")||-1!=X.indexOf("OPR"),qb=-1!=X.indexOf("Trident")||-1!=X.indexOf("MSIE"),rb=-1!=X.indexOf("Gecko")&&-1==X.toLowerCase().indexOf("webkit")&&!(-1!=X.indexOf("Trident")||-1!=X.indexOf("MSIE")),sb=-1!=X.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(pb&&n.opera)return a=n.opera.version,"function"==aa(a)?a():a;rb?b=/rv\:([^\);]+)(\)|;)/:qb?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:sb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(X))?a[1]:"");return qb&&(b=(b=n.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var tb=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var Y,Z=function(a){this.k=[];this.j=a||window;this.i=0;this.l=null;this.m=0},ub=function(a,b){this.u=a;this.r=b};Z.prototype.C=function(a,b){0!=this.i||0!=this.k.length||b&&b!=window?this.p(a,b):(this.i=2,this.o(new ub(a,window)))};Z.prototype.p=function(a,b){this.k.push(new ub(a,b||this.j));vb(this)};Z.prototype.D=function(a){this.i=1;if(a){var b=Q("sjr::timeout",p(this.n,this,!0));this.l=this.j.setTimeout(b,a)}};
Z.prototype.n=function(a){a&&++this.m;1==this.i&&(null!=this.l&&(this.j.clearTimeout(this.l),this.l=null),this.i=0);vb(this)};Z.prototype.F=function(){return!(!window||!Array)};Z.prototype.G=function(){return this.m};Z.prototype.nq=Z.prototype.C;Z.prototype.nqa=Z.prototype.p;Z.prototype.al=Z.prototype.D;Z.prototype.rl=Z.prototype.n;Z.prototype.sz=Z.prototype.F;Z.prototype.tc=Z.prototype.G;var vb=function(a){var b=Q("sjr::tryrun",p(a.w,a));a.j.setTimeout(b,0)};
Z.prototype.w=function(){if(0==this.i&&this.k.length){var a=this.k.shift();this.i=2;var b=Q("sjr::run",p(this.o,this,a));a.r.setTimeout(b,0);vb(this)}};Z.prototype.o=function(a){this.i=0;a.u()};
var wb=function(a){try{return a.sz()}catch(b){return!1}},xb=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&wb(a)&&J(a.nq)&&J(a.nqa)&&J(a.al)&&J(a.rl)},yb=function(){if(Y&&wb(Y))return Y;var a=Ua(),b=a.google_jobrunner;return xb(b)?Y=b:a.google_jobrunner=Y=new Z(a)},zb=function(a,b){yb().nq(a,b)},Ab=function(a,b){yb().nqa(a,b)};var Bb=La?1==K(H):!K(H),Cb=function(){var a=E("script"),b;b=va("","pagead2.googlesyndication.com");return["<",a,' src="',kb(b,"/pagead/js/r20150106/r20141212/show_ads_impl.js",""),'"></',a,">"].join("")},Db=function(a,b,c,d){return function(){var g=!1;d&&yb().al(3E4);var h=a.document.getElementById(b);h&&!F(h.contentWindow)&&3==
a.google_top_js_status&&(a.google_top_js_status=6);try{if(F(a.document.getElementById(b).contentWindow)){var f=a.document.getElementById(b).contentWindow,e=f.document;e.body&&e.body.firstChild||(e.open(),f.google_async_iframe_close=!0,e.write(c))}else{var k=a.document.getElementById(b).contentWindow,l;h=c;h=String(h);if(h.quote)l=h.quote();else{f=['"'];for(e=0;e<h.length;e++){var r=h.charAt(e),z=r.charCodeAt(0),B=e+1,C;if(!(C=y[r])){var t;if(31<z&&127>z)t=r;else{var m=r;if(m in D)t=D[m];else if(m in
y)t=D[m]=y[m];else{var w=m,q=m.charCodeAt(0);if(31<q&&127>q)w=m;else{if(256>q){if(w="\\x",16>q||256<q)w+="0"}else w="\\u",4096>q&&(w+="0");w+=q.toString(16).toUpperCase()}t=D[m]=w}}C=t}f[B]=C}f.push('"');l=f.join("")}k.location.replace("javascript:"+l)}g=!0}catch(A){k=Ua().google_jobrunner,xb(k)&&k.rl()}g&&(g=mb("google_async_rrc",c),(new V(a)).set(b,Db(a,b,g,!1)))}},Eb=function(a){var b=["<iframe"];I(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},Gb=function(a,
b,c){Fb(a,b,c,function(a,b,h){a=a.document;for(var f=b.id,e=0;!f||a.getElementById(f);)f="aswift_"+e++;b.id=f;b.name=f;f=Number(h.google_ad_width);e=Number(h.google_ad_height);16==h.google_reactive_ad_format?(h=a.createElement("div"),h.innerHTML=Ma(b,f,e),c.appendChild(h.firstChild)):c.innerHTML=Ma(b,f,e);return b.id})},Fb=function(a,b,c,d){var g=E("script"),h={},f=b.google_ad_height;h.width='"'+b.google_ad_width+'"';h.height='"'+f+'"';h.frameborder='"0"';h.marginwidth='"0"';h.marginheight='"0"';
h.vspace='"0"';h.hspace='"0"';h.allowtransparency='"true"';h.scrolling='"no"';h.allowfullscreen='"true"';h.onload='"'+lb+'"';d=d(a,h,b);var h=b.google_override_format||!$a[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used?G(["c","e"],Fa):null,e=b.google_ad_output,f=b.google_ad_format;f||"html"!=e&&null!=e||(f=b.google_ad_width+"x"+b.google_ad_height,"e"==h&&(f+="_as"));e=!b.google_ad_slot||b.google_override_format||!$a[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;
f=f&&e?f.toLowerCase():"";b.google_ad_format=f;for(var f=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],e=[],k=0,l=c;l&&25>k;l=l.parentNode,++k)e.push(9!=l.nodeType&&l.id||"");(e=e.join())&&f.push(e);b.google_ad_unit_key=qa(f.join(":")).toString();f=a.google_adk2_experiment=a.google_adk2_experiment||G(["C","E"],Ea)||"N";if("E"==f){f=[];for(e=0;c&&25>e;++e){k=(k=9!=c.nodeType&&c.id)?"/"+k:"";t:{if(c&&c.nodeName&&c.parentElement)for(var l=c.nodeName.toLowerCase(),
r=c.parentElement.childNodes,z=0,B=0;B<r.length;++B){var C=r[B];if(C.nodeName&&C.nodeName.toLowerCase()==l){if(c==C){l="."+z;break t}++z}}l=""}f.push((c.nodeName&&c.nodeName.toLowerCase())+k+l);c=c.parentElement}c=f.join()+":";f=a;e=[];if(f)try{for(var t=f.parent,k=0;t&&t!=f&&25>k;++k){for(var m=t.frames,l=0;l<m.length;++l)if(f==m[l]){e.push(l);break}f=t;t=f.parent}}catch(w){}b.google_ad_unit_key_2=qa(c+e.join()).toString()}else"C"==f&&(b.google_ad_unit_key_2="ctrl");var t=ta(b),q;b=b.google_ad_client;
if(m=Bb){if(!U)r:{c=[H.top];m=[];for(f=0;e=c[f++];){m.push(e);try{if(e.frames)for(var A=e.frames.length,k=0;k<A&&1024>c.length;++k)c.push(e.frames[k])}catch(Sb){}}for(A=0;A<m.length;A++)try{if(q=m[A].frames.google_esf){U=q;break r}}catch(Tb){}U=null}m=!U}m?(q={style:"display:none"},q["data-ad-client"]=tb(b),q.id="google_esf",q.name="google_esf",q.src=kb(va("","googleads.g.doubleclick.net"),"/pagead/html/r20150106/r20141212/zrt_lookup.html"),
q=Eb(q)):q="";A=(new Date).getTime();b=a.google_top_experiment;if(m=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=void 0;c=a.google_always_use_delayed_impressions_experiment;f=a.google_auto_width_experiment;e=a.google_floating_ads_js_experiment;h=["<!doctype html><html><body>",q,"<",g,">",t,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',u,";",b?'google_top_experiment="'+b+'";':"",m?'google_async_for_oa_experiment="'+
m+'";':"",c?'google_always_use_delayed_impressions_experiment="'+c+'";':"",h?'google_append_as_for_format_override="'+h+'";':"",f?'google_auto_width_experiment="'+f+'";':"",e?'google_floating_ads_js_experiment="'+e+'";':"","google_bpp=",A>u?A-u:1,";google_async_rrc=0;</",g,">",Cb(),"</body></html>"].join("");(a.document.getElementById(d)?zb:Ab)(Db(a,d,h,!0))},Hb=function(){if(void 0===window.google_auto_width_experiment){var a=["C","E"],b=xa;window.google_auto_width_experiment=G(a,b);if(window.google_auto_width_experiment)return window.google_auto_width_experiment;
b=ya;a=["CI","EI"];window.google_auto_width_experiment=G(a,b);return window.google_auto_width_experiment}return""},Ib=Math.floor(1E6*Math.random()),Jb=function(a){for(var b=a.data.split("\n"),c={},d=0;d<b.length;d++){var g=b[d].indexOf("=");-1!=g&&(c[b[d].substr(0,g)]=b[d].substr(g+1))}b=c[3];if(c[1]==Ib&&(window.google_top_js_status=4,a.source==top&&0==b.indexOf(a.origin)&&(window.google_top_values=c,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();
window.google_top_js_callbacks.length=0}},Kb=function(a,b){var c=navigator;if(Ga&&a&&b&&c){var d=a.document,c=d.createElement("script"),g=tb(b);c.async=!0;c.type="text/javascript";c.src=kb("www.gstatic.com","/pub-config/"+g+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)}};var Lb=function(a){return ra.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},Nb=function(a,b,c){pa(c);Mb(a,b,c);var d=L(a,c);if(!d||"none"!=d.display||"on"==b.google_adtest||0<b.google_reactive_ad_format){1==K(c)&&Kb(c,b.google_ad_client);I(sa,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";if((d=b.google_ad_output)&&"html"!=d)throw Error("No support for google_ad_output="+d);Qa("aa::main",function(){Gb(c,b,a)})}else c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag"))},
Mb=function(a,b,c){for(var d=a.attributes,g=d.length,h=0;h<g;h++){var f=d[h];if(/data-/.test(f.nodeName)){var e=f.nodeName.replace("data","google").replace(/-/g,"_");b.hasOwnProperty(e)||(f=f.nodeValue,"google_reactive_ad_format"==e&&(f=+f,f=isNaN(f)?null:f),null===f||(b[e]=f))}}Ya(c.location.hash)&&(b.google_adtest="on");if(b.google_enable_content_recommendations&&1==b.google_reactive_ad_format)b.google_ad_width=S(c),void 0===window.google_floating_ads_js_experiment&&(window.google_floating_ads_js_experiment=
G(["4091000","4091001"],Ha)),"4091001"==window.google_floating_ads_js_experiment?b.google_ad_height=Ja:b.google_ad_height=50,a.style.display="none";else if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=50,a.style.display="none";else if(8==b.google_reactive_ad_format)b.google_ad_width=S(c),b.google_ad_height=Wa(c),a.style.display="none",Xa(c.location.hash,"google_ia_debug_spa")&&(b.google_vignette_manual_trigger=!0);else if(d=b.google_ad_format,"auto"==d||/^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d)){void 0===
b.google_responsive_combined_experiment&&(d=["CCOMB","ECOMB"],g=O?Ca:Ba,b.google_responsive_combined_experiment=488>S(c)?G(d,g):"-");d=["IC","IEA","IEB"];g=a.offsetWidth;d=320==S(window)&&300<=g&&320>g?G(d,Da):null;b.google_responsive_optimization_experiment=d||G(["SC","SE"],Aa)||"-";var d=a.offsetWidth,g=b.google_ad_format,k;if("auto"==g)k=S(c),k=Math.min(1200,k),k=.25>=d/k?4:3;else{h=0;for(k in gb)-1!=g.indexOf(k)&&(h|=gb[k]);k=h}b&&(b.google_responsive_formats=k);t:{h=hb.sort(ib);if(e=a&&488>S(c))e=
Math.min(Wa(c),16*S(c)/9),e=fb(a,c)<e-100;for(f=0;f<h.length;f++){var l=h[f];if(h[f].width<=d&&l.format&k){var r=jb,z=(b||{}).google_responsive_combined_experiment;if(e&&250<=l.height&&(b&&(b.q=!0),O?z!=r.A:z==r.B))continue;k=l;break t}}k=null}e=k;if(!e)throw Error("Cannot find a responsive size for a container of width="+d+"px and data-ad-format="+g);k=b.google_responsive_optimization_experiment;("SC"==k||"SE"==k?e.width!=(300<d&&300<e.height?e.width:1200<d?1200:Math.round(d)):"IC"!=k&&"IEA"!=k&&
"IEB"!=k||234==e.width&&60==e.height)||(b.google_responsive_optimization_experiment=void 0);k=b.google_responsive_combined_experiment;g=b.q;b.q=void 0;if("CCOMB"!=k&&"ECOMB"!=k||!(g||320==e.width&&50==e.height))b.google_responsive_combined_experiment=void 0;k=b.google_responsive_optimization_experiment;h=b.google_responsive_combined_experiment;g="SE"==k?e.width:300<d&&300<e.height?e.width:1200<d?1200:Math.round(d);h=(O?"CCOMB"!=h:"ECOMB"==h)&&320==e.width&&50==e.height?100:e.height;if(e=234==e.width&&
60==e.height&&"IEA"==k||"IEB"==k){e=S(c);if(!(d=!(320==e&&300<=d&&320>d)))r:{d=a;for(f=0;10>f&&d.parentElement;f++){d=d.parentElement;l=L(d,c);if(!l)break;l=l.overflowX||l.overflow;if("hidden"==l||"scroll"==l||"auto"==l)break;if(d.clientWidth>=e){d=!1;break r}}d=!0}d?e=!1:(c=L(a,c),d=a.getBoundingClientRect(),c&&d?(d=d.left,0>=d?e=!1:(e-=d+a.offsetWidth,"rtl"!=c.direction?(c=cb(c.marginLeft)||0,a.style.marginLeft=c-d+"px"):(c=cb(c.marginRight)||0,a.style.marginRight=c-e+"px"),e=!0)):e=!1)}e&&(g=320,
h="IEA"==k?50:100);b.google_ad_width=g;b.google_ad_height=h;a.style.height=b.google_ad_height+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else if(!bb.test(b.google_ad_width)&&!ab.test(a.style.width)||!bb.test(b.google_ad_height)&&!ab.test(a.style.height))c=L(a,c),a.style.width=c.width,a.style.height=c.height,T(c,b,["width","height"]),b.google_loader_features_used=256;else if("E"==Hb()||Ob(c))d="CI"!=c.google_auto_width_experiment,k=a.style,T(k,b,["height"]),
g=eb(a),h=db(k.width),e=db(k.height),!e||!h||50>e||120>g||$a[h+"x"+e]?(T(k,b,["width"]),b=!1):(g=Math.min(1200,g),300<e&&(g=Math.min(300,g)),g<=h?(T(k,b,["width"]),b=!1):(d?(b.google_ad_width=g,b.google_original_width=h,a.style.width=g+"px"):(b.google_ad_width=h,b.google_available_width=g),b=!0)),!b&&Ob(c)&&(c.google_auto_width_experiment=null);else{T(a.style,b,["width","height"]);t:{if(!(b.google_ad_output&&"html"!=b.google_ad_output||300!=b.google_ad_width||250!=b.google_ad_height)&&(d=Wa(c),fb(a,
c)>1.5*d&&(c=G(["C","E"],za)))){"E"==c&&(a=eb(a),b.google_available_width=a);a=c;break t}a=void 0}b.google_efmwe=a}},Ob=function(a){a=a.google_auto_width_experiment;return"EI"==a||"CI"==a},Pb=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<b.length;d=b[++c])if(Lb(d)&&(!a||d.id==a))return d;return null},Qb=function(a){var b=a.element;a=a.params||{};if(b){if(!Lb(b)&&(b=b.id&&Pb(b.id),!b))throw Error("adsbygoogle: 'element' has already been filled.");if(!("innerHTML"in b))throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");
}else if(b=Pb(),!b)throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");var c=window;b.setAttribute("data-adsbygoogle-status","done");Nb(b,a,c)},Rb=function(){if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:F(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=H.top.frames.google_top_static_frame?!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=G(["jp_c","jp_zl",
"jp_wfpmr","jp_zlt","jp_wnt"],wa),"jp_c"!==window.google_top_experiment){a=window;a.addEventListener?a.addEventListener("message",Jb,!1):a.attachEvent&&a.attachEvent("onmessage",Jb);window.google_top_js_status=3;a={0:"google_loc_request",1:Ib};b=[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=20;(a=d.shift())&&0<b--;)try{Qb(a)}catch(g){throw window.setTimeout(Rb,0),
g;}window.adsbygoogle={push:Qb}};Rb();})();
