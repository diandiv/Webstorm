/*! scripts/antispam/beacon.js */
var $=jQuery;window.onload=function(g){function k(){return{language:navigator.language||navigator.browserLanguage,languages:navigator.languages||[],user_agent:navigator.userAgent,screen_width:window.screen.width,screen_height:window.screen.height,color_depth:window.screen.colorDepth,headless_browser:h(),online:navigator.onLine,cookies_enabled:navigator.cookieEnabled,plugins:a(),window_res:window.outerWidth+"x"+window.outerHeight,platform:navigator.platform,app_version:navigator.appVersion,images_enabled:j(),flash_enabled:b(),time_zone_offset:new Date().getTimezoneOffset(),timestamp:new Date().getTime(),javascript_enabled:true}}function h(){return(!!window._phantom||!!window.Buffer||!!window.callPhantom||!!window.domAutomation||!!window.domAutomationController||!!window.emit||!!window.spawn||!!window.webdriver)}function a(){var e=[];for(i=0;i<navigator.plugins.length;i++){e.push(navigator.plugins[i].name)}return e}function j(){var e=document.getElementById("clp_image");return !!e&&e.width>0}function b(){var m=false;try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(n){m=navigator.mimeTypes["application/x-shockwave-flash"]&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin}return !!m}var l=$("#form_key").attr("content");var f=$("#session_id").attr("content");var d=k();var c=$.ajax({url:"/svc/clp",type:"POST",dataType:"json",data:{form_key:l,session_id:f,attributes:JSON.stringify(d)}})};