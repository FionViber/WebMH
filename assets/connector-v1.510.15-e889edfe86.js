(function(){const isTemporaryPurchaseId=function(a){return`${a}`.startsWith("tmp")};var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b,c){if(!c||null!=a){c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]}};$jscomp.polyfill=function(a,b,c,d){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,d):$jscomp.polyfillUnisolated(a,b,c,d))};
$jscomp.polyfillUnisolated=function(a,b,c,d){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))return;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,d){var e=a.split(".");a=1===e.length;d=e[0];d=!a&&d in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var f=0;f<e.length-1;f++){var g=e[f];if(!(g in d))return;d=d[g]}e=e[e.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?d[e]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==c&&(void 0===$jscomp.propertyToPolyfillSymbol[e]&&(c=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(e):$jscomp.POLYFILL_PREFIX+c+"$"+e),$jscomp.defineProperty(d,$jscomp.propertyToPolyfillSymbol[e],{configurable:!0,writable:!0,value:b})))};
$jscomp.polyfill("String.prototype.replaceAll",function(a){return a?a:function(b,c){if(b instanceof RegExp&&!b.global)throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");return b instanceof RegExp?this.replace(b,c):this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c)}},"es_2021","es3");
window.CONNECTOR_ADJUST={};window.CONNECTOR_PRODUCTS={};window.CONNECTOR_CONFIG={"adsense":false,"business":"cleverapps","terms":{"slimmerbits":{"privacy":"","terms":"","company":{"name":"SlimmerBits","legalName":"SlimmerBits LLC-FZ","address":"AL ABBAS BLDG.2, Mankhool, Office AA2, Dubai, UAE","registration":"1043319","jurisdiction":"UAE","privacyEmail":"help.zareefgaming+privacy@gmail.com","supportEmail":"vtbelo+support@gmail.com"}},"zareef":{"privacy":"","terms":"","company":{"name":"Clever Apps","legalName":"Clever Apps Pte. Ltd.","address":"8 Marina Boulevard #11-00 Marina Bay Financial Centre Singapore 018981","registration":"201706967K","jurisdiction":"Singapore","privacyEmail":"help.cleverapps+privacy@gmail.com","supportEmail":"vtbelo+support@gmail.com"}},"cleverapps":{"privacy":"","terms":"","company":{"name":"Clever Apps","legalName":"Clever Apps Pte. Ltd.","address":"8 Marina Boulevard #11-00 Marina Bay Financial Centre Singapore 018981","registration":"201706967K","jurisdiction":"Singapore","privacyEmail":"help.cleverapps+privacy@gmail.com","supportEmail":"vtbelo+support@gmail.com"}},"vanuplay":{"privacy":"","terms":"","company":{"name":"VanuPlay Innovations","legalName":"VanuPlay Innovations Inc.","address":"Tropicana Area, Korman, Port Vila, Vanuatu","registration":"700739","jurisdiction":"Republic of Vanuatu","privacyEmail":"info@vanuplay.com","supportEmail":"vtbelo+support@gmail.com"}}},"title":"Merge Haven","orientation":"both","deployment":"","debugMode":0,"testPlatform":false,"manualPermissions":true,"manualStartMetrics":true,"migrateLocalStorage":true,"cloudStorage":false,"notificationsApiURL":"","multiApiURL":"","syncApiURL":"","payApiURL":"","ruPayApiURL":"","restApiURL":"","ruRestApiURL":"","ruSyncApiURL":"","metricsApiURL":"","ruMetricsApiURL":"","ruNotificationsApiURL":"","ruMultiApiURL":"","remoteConfigURL":"","ruRemoteConfigURL":"","crmApiURL":"","ruCrmApiURL":"","source":"offline","firebase":false,"nologin":true,"norest":true,"noLogEvents":true,"sendLoadingTime":false,"paymentsDisabled":true,"platformsync":false,"disableReconnect":true,"xsolla":false,"ruDeployment":""};window.CONNECTOR_ECPM={};const connector={};window.connector=connector;connector.SDK_NAME="connector";connector.AMAZON="amazon";connector.ANDROID="android";connector.APPLE="apple";connector.CLEVERAPPS="cleverapps";connector.LABSYSTECH="labsystech";connector.CRAZY="crazy";connector.DRAUGIEM="draugiem";connector.FACEBOOK="facebook";connector.FOTOSTRANA="fotostrana";connector.GDCOM="gdcom";connector.COOLMATHGAMES="coolmath";connector.GPG="gpg";connector.INSTANT="instant";connector.IOS="ios";connector.KONGREGATE="kongregate";
connector.MACOS="macos";connector.MICROSOFT="microsoft";connector.MSIX="msix";connector.G5WINDOWS="g5windows";connector.MOBAGE="mbga";connector.SP_MOBAGE="sp_mbga";connector.MSSTART="msstart";connector.MYGAMES="mygames";connector.MM="mm";connector.OK="ok";connector.OKBRIDGE="okbridge";connector.DIGITAL="digital";connector.DIGITALWEB="digitalweb";connector.EPICGAMES="epicgames";connector.PLINGA="plng";connector.PWA="pwa";connector.RUSTORE="rustore";connector.ONESTORE="onestore";connector.SAMSUNG="samsung";
connector.TEST="test";connector.VK="vk";connector.WECHAT="wechat";connector.XIAOMI="xiaomi";connector.YANDEX="yandex";connector.YOUTUBE="youtube";connector.GAMESNACK="gamesnack";connector.DISCORD="discord";connector.TELEGRAM="telegram";connector.MSPWA="mspwa";connector.REDDIT="reddit";connector.TIKTOK="tiktok";connector.ARKADIUM="arkadium";connector.ADDICTINGGAMES="addicting";connector.XSOLLA="xsolla";connector.IAP="iap";connector.YOOKASSA="yookassa";connector.ROBOKASSA="robokassa";
connector.AD_MOB="ad_mob";connector.APP_LOVIN="app_lovin";connector.GOOGLE_ADS="google_ads";connector.CLEVERAPPS_GOOGLE_ADS="cleverapps_google_ads";connector.PORTAL_YANDEX_ADS="portal_yandex_ads";connector.MULTI_ADS="multi_ads";connector.YANDEX_APP_ADS="yandex_app_ads";connector.YANDEX_WEB_ADS="yandex_web_ads";connector.MULTI_SOCIAL="multi_social";connector.NONE="none";connector.version="1.0.26";const ERRORS=connector.ERRORS={NOT_CONNECTED:"not_connected",NOT_SIGNED_IN:"not_signed_in"};ERRORS.SHOW_REWARDED={NOT_SUPPORTED:"rewarded_not_supported",NO_ADS:"rewarded_not_found",NOT_CONFIGURED:"rewarded_not_configured",AD_BLOCK:"rewarded_ad_block",THROTTLED:"rewarded_throttled",AD_ALREADY_RUNNING:"ad_already_running",CLOSED_BY_USER:"closed_by_user",AD_EXPIRED:"rewarded_expired_error",UNKNOWN:"rewarded_unknown_error"};
ERRORS.SHOW_INTERSTITIAL={NOT_SUPPORTED:"interstitial_not_supported",NO_ADS:"interstitial_not_found",NOT_CONFIGURED:"interstitial_not_configured",AD_BLOCK:"interstitial_ad_block",THROTTLED:"interstitial_throttled",AD_ALREADY_RUNNING:"ad_already_running",CLOSED_BY_USER:"closed_by_user",UNKNOWN:"interstitial_unknown_error"};
ERRORS.SHOW_STICKY={NOT_SUPPORTED:"sticky_not_supported",NO_STICKY:"sticky_not_found",NOT_CONFIGURED:"sticky_not_configured",AD_BLOCK:"sticky_ad_block",TIMEOUT:"show_sticky_timeout",UNKNOWN:"show_sticky_unknown_error"};ERRORS.CLOSE_STICKY={TIMEOUT:"close_sticky_timeout",UNKNOWN:"close_sticky_unknown_error"};
ERRORS.PURCHASE={INSUFFICIENT_FUNDS:"purchase_insufficient_funds",ALREADY_OPEN:"purchase_already_open",PRODUCT_NOT_FOUND:"product_not_found",LOGIN_FAILED:"login_failed",EMAIL_REQUIRED:"email_required",INVALID_EMAIL:"invalid_email",TIMEOUT:"purchase_timeout",CANCEL:"purchase_canceled_by_user",PENDING:"purchase_pending",UNKNOWN:"purchase_unknown_error"};ERRORS.CONSUME={UNKNOWN:"consume_unknown_error"};ERRORS.SWITCH_GAME={CANCEL:"switch_game_canceled_by_user",UNKNOWN:"switch_game_unknown_error"};
ERRORS.STORAGE={NOT_READY:"storage_not_ready",LOAD:{UNKNOWN:"storage_load_unknown_error"},SAVE:{UNKNOWN:"storage_save_unknown_error"},SET:{UNKNOWN:"storage_set_unknown_error"}};connector.CODE_SUCCEED=0;connector.CODE_FAILED=1;connector.CODE_CANCELLED=2;connector.CODE_PENDING=3;connector.STATUS_CONNECTED="connected";connector.STATUS_DISCONNECTED="disconnected";connector.STATUS_DISABLED="disabled";
connector.utils={INTERVALS:{second:1,minute:60,hour:3600,day:86400,week:604800,month:2592E3},parseInterval:function(a){const b=connector.utils.INTERVALS,c=1E3*parseInt(a);for(const d in b)if(-1!==a.indexOf(d))return c*b[d];return c},once:function(a){return function(...b){if(a){const c=a;a=void 0;return c.call(this,...b)}}},waitNoMore:function(a,b){let c=setTimeout(()=>{c=void 0;b()},a);return function(...d){void 0!==c&&(clearTimeout(c),c=void 0,b.call(this,...d))}},accumulate:function(a,b){let c=
void 0,d,e;return function(...f){d=this;e=f;void 0===c&&(c=setTimeout(()=>{clearTimeout(c);c=void 0;const g=d,h=e;e=d=void 0;b.call(g,...h)},a))}},postpone:function(a,b){let c,d,e;return function(...f){c=this;d=f;clearTimeout(e);e=setTimeout(()=>{b.call(c,...d)},a)}},wait:function(a,b){if(0===a)b();else{var c=0;return function(){c++;c===a&&b()}}},timeredThrottle:function(a,b){let c,d,e;const f=function(){if(!e&&d){e=setTimeout(()=>{e=void 0;f()},a);var g=c,h=d;d=c=void 0;b.call(g,...h)}};return function(...g){c=
this;d=g;f()}},loadSdk:function(a,b){if(b&&b.onFailure)b.onFailure();},getCurrentScript:function(){if(document.currentScript)return document.currentScript;const a=document.getElementsByTagName("script");for(let b=0;b<a.length;b++)if(a[b].src&&-1!==a[b].src.indexOf(connector.SDK_NAME))return a[b]},
getRequestParameters:function(a,b){const c={};if(a=a||window.location.search){a=a.substr(1);a=a.split("&");for(let e=0;e<a.length;e++){var d=a[e].split("=");const f=d[0];d=d[1]||"";if(!b)try{d=decodeURIComponent(d.replace(/\+/g," "))}catch(g){console.error(`getRequestParameters decodeURIComponent - ${d}`)}c[f]=d}}return c},stringify:function(a){try{if("object"===typeof a&&!(a instanceof Error))return JSON.stringify(a)}catch(b){}return String(a)},isIFrame:function(){return window.top!==window.self},
clone:function(a,b){if(null===a)return null;if("object"!==typeof a)return a;let c;if(Array.isArray(a)){c=[];for(var d=0;d<a.length;d++)b?c.push(connector.utils.clone(a[d],!0)):c.push(a[d]);return c}c={};for(d in a)c[d]=b?connector.utils.clone(a[d],!0):a[d];return c},setUrlHash:function(a){const b=connector.utils.getRequestParameters(window.location.hash);for(const c in a){const d=a[c];void 0===d?delete b[c]:b[c]=d}window.location.hash=Object.keys(b).map(c=>`${c}=${b[c]}`).join("&")},formatAmount:function(a){if(1E3>
a)return a;const b=Math.floor(a/1E3);a-=1E3*b;10>a?a=`00${a}`:100>a&&(a=`0${a}`);return b+" "+a},substract:function(a,b,c){c=c||function(e){return e};a=a||[];b=b||[];const d={};b.forEach(e=>{d[c(e)]=!0});return a.filter(e=>void 0===d[c(e)])},loadBase64:function(a,b){if(a.startsWith("data:image"))b(a);else{var c=new Image;c.crossOrigin="anonymous";c.src=a;c.onload=function(){const d=document.createElement("canvas");d.height=c.naturalHeight;d.width=c.naturalWidth;d.getContext("2d").drawImage(c,0,0);
b(d.toDataURL("image/jpg"))};c.onerror=function(d){console.log(`[connector] Error loading image:${a}`,d);b()}}},addSearchParams:function(a,b){a=new URL(a);for(const c in b)a.searchParams.set(c,b[c]);return a.toString()},hashCode:function(a){if(void 0===a||null===a||"number"===typeof a&&isNaN(a))return 0;a+="";let b=0;for(let c=0;c<a.length;c++)b=(b<<5)-b+a.charCodeAt(c);return b},throwAsync:function(a,b){"object"===typeof a&&a.group?a=`REPORT: ${a.group.toUpperCase()} ${a.message}`:(b=(b||Error()).stack,
a=`${connector.utils.stringify(a)}${b?` ${JSON.stringify(b)}`:""}`);try{a=decodeURIComponent(a)}catch(c){console.error(`[connector] throwAsync decodeURIComponent - ${a}`)}if(connector.platform.oneOf(connector.WECHAT))window.onerror(a);else setTimeout(()=>{throw a;},0)}};const ConnectorErrorHandler={lastSend:0,onError:function(a){if(!this.needIgnore(a)){var b=this.needSend();b&&this.send(a);window.dispatchEvent(new CustomEvent("connector:globalError",{detail:{needSend:b,originalEvent:a}}))}},send:function(){this.lastSend=Date.now();connector._metrics&&connector._metrics.logEvent(connector.EVENTS.STATS.ERROR_AMOUNT)},needIgnore:function(a){const b=[a.message,`Line: ${a.lineno}`,`Column: ${a.colno}`,"string"===typeof a.error&&a.error,a.error&&a.error.message,a.error&&
a.error.stack,a.filename].filter(Boolean).join(" - "),c=connector.info.source;return ConnectorErrorHandler.IGNORED_ERRORS.some(d=>b.includes(d))||0===a.lineno&&0===a.colno&&ConnectorErrorHandler.MUTED_SCRIPT_ERROR_SOURCES.includes(c)||1===a.lineno&&"samsung"===c&&b.includes("missing ) after argument list")},needSend:function(){return this.lastSend+ConnectorErrorHandler.SEND_INTERVAL<Date.now()}};ConnectorErrorHandler.SEND_INTERVAL=connector.utils.parseInterval("1 hour");
ConnectorErrorHandler.IGNORED_ERRORS=["html5.api.gamedistribution.com","hadronid.net/hadron.js","app.mbga-platform.jp/gadgets/js/auth-refresh","safari-extension://","eval (eval at  anonymous  (eval at buildCode (:606:31))"];ConnectorErrorHandler.MUTED_SCRIPT_ERROR_SOURCES="gdcom coolmath msstart kongregate mymailru ok spmobage draugiem samsung addicting".split(" ");window.addEventListener("error",a=>ConnectorErrorHandler.onError(a));Error.stackTraceLimit=30;class ConnectorTimeouts{constructor(){this.uid=1;this.listeners=Object.create(null);this.tickTime=this.pauseTime=0;connector.platform.on("pause",()=>this.updateTickInterval());connector.platform.on("resume",()=>this.updateTickInterval());this.updateTickInterval()}updateTickInterval(){if(connector.platform.isPaused)void 0!==this.tickInterval&&(clearInterval(this.tickInterval),this.tickInterval=void 0),this.pauseTime=performance.now();else if(void 0===this.tickInterval){if(this.tickTime<this.pauseTime)this.onTick(this.pauseTime-
this.tickTime);this.tickTime=performance.now();this.tickInterval=setInterval(()=>{const a=performance.now();this.onTick(a-this.tickTime);this.tickTime=a},ConnectorTimeouts.INTERVAL)}}onTick(a){for(const b in this.listeners){const c=this.listeners[b];if(c){if(c.timeLeft-=a,0>=c.timeLeft){void 0===c.interval?delete this.listeners[b]:c.timeLeft=c.interval;try{c.callback()}catch(d){connector.utils.throwAsync(d,d)}}}else delete this.listeners[b]}}setTimeout(a,b,c){a={uid:this.uid,callback:a,timeLeft:b||
0};c&&c.interval&&(a.interval=b||0);this.listeners[this.uid]=a;this.uid+=1;return a}setInterval(a,b){return this.setTimeout(a,b,{interval:!0})}clearTimeout(a){a&&a.uid&&delete this.listeners[a.uid]}clearInterval(a){this.clearTimeout(a)}}ConnectorTimeouts.INTERVAL=1E3;const HtmlLocalStorage=function(){try{var a=window.localStorage;a.setItem("storage","");a.removeItem("storage");this.supported=!0}catch(b){a=function(){console.warn("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option")},a={getItem:a,setItem:a,removeItem:a,clear:a},this.supported=!1}this.localStorage=a};connector.HtmlLocalStorage=HtmlLocalStorage;
HtmlLocalStorage.prototype.getItem=function(a){a=this.localStorage.getItem(a);if(!connector.platform.oneOf(connector.WECHAT)||""!==a)return a};HtmlLocalStorage.prototype.setItem=function(a,b){this.localStorage.setItem(a,b)};HtmlLocalStorage.prototype.removeItem=function(a){this.localStorage.removeItem(a)};
HtmlLocalStorage.prototype.getData=function(a){const b={};try{Object.keys(this.localStorage).forEach(c=>{0===c.indexOf(a)&&(b[c]=this.getItem(c))})}catch(c){console.error("DataLoader.getData cant read all data",c)}return b};HtmlLocalStorage.prototype.clearData=function(a){try{for(const b in this.localStorage)0===b.indexOf(a)&&(console.log("[connector] clearing local storage key",b),this.localStorage.removeItem(b))}catch(b){console.error("[connector] error clearing local storage",b)}};const SimpleDataLoader=function(){this.localStorage=new HtmlLocalStorage;this.data={};this.enabled=!0};SimpleDataLoader.prototype.setEnabled=function(a){this.enabled=!!a};SimpleDataLoader.prototype.getLocalStorage=function(){return this.localStorage};SimpleDataLoader.prototype.load=function(a){this.data.hasOwnProperty(a)||(this.data[a]=this.localStorage.getItem(a));a=this.data[a];if(null!==a&&void 0!==a&&"undefined"!==a)return JSON.parse(a)};
SimpleDataLoader.prototype.save=function(a,b){b=JSON.stringify(b);this.data[a]=b;this.enabled&&this.localStorage.setItem(a,b)};SimpleDataLoader.prototype.remove=function(a){delete this.data[a];this.enabled&&this.localStorage.removeItem(a)};SimpleDataLoader.prototype.cleanAll=function(){this.data={};const a=SimpleDataLoader.GetLocalStoragePrefix();this.localStorage.clearData(a)};SimpleDataLoader.GetLocalStoragePrefix=function(){return`pc_${connector.config.projectId}${connector.platform.getPlugin().getLocalStoragePrefix()}`};
SimpleDataLoader.InitTypes=function(){const a=SimpleDataLoader.GetLocalStoragePrefix();Object.keys(SimpleDataLoader.TYPES).forEach(b=>{SimpleDataLoader.TYPES[b]=a+SimpleDataLoader.TYPES[b]})};SimpleDataLoader.GetOldLocalStoragePrefix=function(){return connector.config.projectId+connector.platform.getPlugin().getLocalStoragePrefix()};
SimpleDataLoader.Migrate=function(){const a=SimpleDataLoader.GetLocalStoragePrefix(),b=SimpleDataLoader.GetOldLocalStoragePrefix(),c=d=>{var e=d.replace(a,b);if(connector.dataLoader.load(e)&&!connector.dataLoader.load(d))return e=connector.dataLoader.load(e),connector.dataLoader.save(d,e),!0};c(SimpleDataLoader.TYPES.USER_ID)&&Object.values(SimpleDataLoader.TYPES).forEach(c);c(SimpleDataLoader.TYPES.MULTIPLE_CONVERSIONS_INFO);c(SimpleDataLoader.TYPES.PUSHES);c(SimpleDataLoader.TYPES.SYNC)};
SimpleDataLoader.TYPES={USER_ID:"_user_id",METRICS:"_metrics",MULTIPLE_CONVERSIONS_INFO:"_multiple_conversions_info",MULTIPLE_PREDICTIONS_INFO:"_multiple_predictions_info",SHORTCUT_CREATED:"_instant_shortcut_created",HOME_SCREEN_ADDED:"_home_screen_added",DRAUGIEM_AUTH_DATA:"_draugiem_auth_data",XSOLLA_ACCESS_TOKEN:"_xsolla_access_token",APPLE_SOCIAL:"_apple_social",MS_SOCIAL:"_ms_social",TIKTOK_AUTH_DATA:"_tiktok_auth_data",PAYMENTS_COUNTRY:"_payments_country",XSOLLA2_PAYMENTS_AUTH:"_xsolla2_payments_auth",
ROBOKASSA:"_robokassa",PAYMENTS:"_payments",ARKADIUM_PAYMENTS:"_arkadium_payments",TESTPAYMENTS:"_test_payments",PUSHES:"_local_pushes",SYNC_SESSION:"_sync_session",SYNC:"_sync",SYNC_TRANSPORT:"_sync_transport"};const BucketsLocalStorage=function(a,b=128){this.localStorage=a||new HtmlLocalStorage;this.buckets=b;this.prefix=SimpleDataLoader.GetLocalStoragePrefix();this.data={};this.dirty={};this.queue=new Map;this.flush=connector.utils.accumulate(1E3,()=>this._flush())};BucketsLocalStorage.prototype.initialize=function(a){(new ConnectorActionPlayer([b=>{this.localStorage.initialize?this.localStorage.initialize(b):b()},b=>this._initialize(b)])).play(a)};
BucketsLocalStorage.prototype._initialize=function(a){const b=Date.now(),c=Array.from({length:this.buckets},(d,e)=>this.getBucketForIndex(e)).map(d=>this.getLocalStorageItemAsync(d).then(e=>{this.data[d]=e}));c.push(this.loadQueueAsync());Promise.all(c).then(()=>console.log(`[connector] local storage initialize ${Date.now()-b}ms`)).catch(d=>console.error("[connector] local storage initialize error",d)).finally(()=>{this.migrateBuckets();a()})};
BucketsLocalStorage.prototype.getItem=function(a){if(this.queue.has(a))return this.queue.get(a);var b=this.getBucketForKey(a);return(b=this.data[b])&&b[a]};BucketsLocalStorage.prototype.setItem=function(a,b){this.queue.set(a,b);this.flush()};BucketsLocalStorage.prototype.removeItem=function(a){this.queue.set(a,void 0);this.flush()};BucketsLocalStorage.prototype.getData=function(a=""){return this.getAllKeys(a).reduce((b,c)=>{const d=this.getItem(c);void 0!==d&&(b[c]=d);return b},{})};
BucketsLocalStorage.prototype.clearData=function(a=""){this.getAllKeys(a).forEach(b=>this.removeItem(b))};BucketsLocalStorage.prototype.getAllKeys=function(a=""){const b=Object.values(this.data).flatMap(c=>Object.keys(c)).concat([...this.queue.keys()]).filter(c=>c.startsWith(a));return[...(new Set(b))]};BucketsLocalStorage.prototype._flush=function(){this.processQueue();this.saveQueue();this.saveBuckets()};
BucketsLocalStorage.prototype.processQueue=function(){if(this.queue.size>=BucketsLocalStorage.PROCESS_QUEUE_THRESHOLD||(this.lastProcessQueueTime||0)+BucketsLocalStorage.PROCESS_QUEUE_TIMEOUT<Date.now()){this.lastProcessQueueTime=Date.now();for(const a of this.queue.keys()){const b=this.getBucketForKey(a);this.data[b]=this.data[b]||{};this.data[b][a]=this.queue.get(a);this.dirty[b]=!0}this.queue.clear()}};
BucketsLocalStorage.prototype.loadQueueAsync=function(){const a=this.getBucketForIndex("queue");return this.getLocalStorageItemAsync(a).then(b=>{for(const [c,d]of Object.entries(b))this.queue.set(c,null===d?void 0:d)})};
BucketsLocalStorage.prototype.saveQueue=function(){var a=[...this.queue].map(([c,d])=>[c,void 0===d?null:d]);const b=this.getBucketForIndex("queue");a=JSON.stringify(Object.fromEntries(a));this.setLocalStorageItemAsync(b,a).catch(c=>{console.error("[connector] local storage save error",c)})};
BucketsLocalStorage.prototype.saveBuckets=function(){const a=Object.keys(this.dirty).map(b=>this.setLocalStorageItemAsync(b,JSON.stringify(this.data[b])).catch(c=>{this.dirty[b]=!0;throw c;}));Promise.all(a).catch(b=>{console.error("[connector] local storage flush error",b)});this.dirty={}};BucketsLocalStorage.prototype.getBucketForKey=function(a){a=(connector.utils.hashCode(a)%this.buckets+this.buckets)%this.buckets;return this.getBucketForIndex(a)};
BucketsLocalStorage.prototype.getBucketForIndex=function(a){return`${this.prefix}_bucket_${a}`};BucketsLocalStorage.prototype.migrateBuckets=function(){for(const a of Object.keys(this.data)){const b=this.data[a];for(const c of Object.keys(b)){if(this.getBucketForKey(c)===a)continue;const d=b[c];delete b[c];this.dirty[a]=!0;this.setItem(c,d)}}};
BucketsLocalStorage.prototype.getLocalStorageItemAsync=function(a){return(this.localStorage.getItemAsync?this.localStorage.getItemAsync(a):Promise.resolve(this.localStorage.getItem(a))).then(b=>{if(b)try{return JSON.parse(b)}catch(c){console.error(`[connector] cant parse ${a}`,c)}return{}})};BucketsLocalStorage.prototype.setLocalStorageItemAsync=function(a,b){return this.localStorage.setItem?(this.localStorage.setItem(a,b),Promise.resolve(!0)):this.localStorage.setItemAsync(a,b)};
BucketsLocalStorage.PROCESS_QUEUE_THRESHOLD=100;BucketsLocalStorage.PROCESS_QUEUE_TIMEOUT=connector.utils.parseInterval("5 minutes");(function(){return "";})();const ConnectorRestClient={METHODS:{GET:"GET",POST:"POST",DELETE:"DELETE"}};var ConnectorActionPlayer=function(a){this.options=a=a||{};Array.isArray(a)?a={actions:a}:"function"===typeof a&&(a={actions:[a]});this.actions=[];this.add(a.actions||[])};ConnectorActionPlayer.prototype.add=function(a){Array.isArray(a)?a.forEach(function(b){this.add(b)}.bind(this)):a&&this.actions.push(a)};
ConnectorActionPlayer.prototype._playNext=function(){this.actionTimeout&&(clearTimeout(this.actionTimeout),this.actionTimeout=void 0);if(!this._stopped)if(this.index===this.actions.length)this._stopped=!0,this.onCompleteListener&&this.onCompleteListener.call(null),this.onSuccessListener&&this.onSuccessListener.call(null);else{var a=!0,b=function(){a&&(a=!1,this._playNext.apply(this,arguments))}.bind(this),c=function(){a&&(a=!1,this.stop.apply(this,arguments))}.bind(this);this.options.actionTimeout&&
(this.actionTimeout=setTimeout(c,this.options.actionTimeout));this.actions[this.index++](b,c)}};ConnectorActionPlayer.prototype.onSuccess=function(a){this.onSuccessListener=a};ConnectorActionPlayer.prototype.onFailure=function(a){this.onFailureListener=a};ConnectorActionPlayer.prototype.onComplete=function(a){this.onCompleteListener=a};ConnectorActionPlayer.prototype.play=function(a){this.index=0;if(a)this.onSuccess(a);this._playNext()};
ConnectorActionPlayer.prototype.stop=function(){this._stopped||(this._stopped=!0,this.onCompleteListener&&this.onCompleteListener.call(null),this.onFailureListener&&this.onFailureListener.apply(null,arguments))};ConnectorActionPlayer.prototype.isStopped=function(){return this._stopped};ConnectorActionPlayer.prototype.isRunning=function(){return!this.isStopped()};const ConnectorEventEmitter=function(){this.bindings={}};ConnectorEventEmitter.prototype.once=function(a,b){var c=this.on(a,function(){c.clear();b.apply(this,arguments)}.bind(this));return c};ConnectorEventEmitter.prototype.on=function(a,b){this.bindings[a]||(this.bindings[a]=[]);this.bindings[a].push(b);return{clear:function(){if(this.bindings[a]){const c=this.bindings[a].indexOf(b);0<=c&&this.bindings[a].splice(c,1)}}.bind(this)}};
ConnectorEventEmitter.prototype.off=function(a){this.bindings[a]=void 0};ConnectorEventEmitter.prototype.purge=function(){this.bindings={}};ConnectorEventEmitter.prototype.trigger=function(){const a=[];for(var b=0;b<arguments.length;b++)a.push(arguments[b]);this.proxyBus&&this.proxyBus.trigger.apply(this.proxyBus,arguments);b=a.shift();this.bindings[b]&&this.bindings[b].slice().forEach(function(c){c.apply(this,a)})};ConnectorEventEmitter.prototype.setProxy=function(a){this.proxyBus=a};const PaymentsDetector=function(){return NoPayments;};const AdsDetector=function(){return NoAdsPlugin;};const SocialDetector=function(){return NoSocial;};const PlatformDetector=function(){return Platform;};connector.EXCHANGE_RATES={USD:1,EUR:.87,RUB:80,GBP:.74,DEM:1.7,JPY:157,INR:95,FRF:5.7,CAD:1.4,AUD:1.43,BEF:35.1,CNY:6.77,SGD:1.28,PLN:3.74,KRW:1430,COP:3155,HUF:316,ARS:1493,KZT:474,IQD:1312,ISK:123,TRY:47.55,CLP:930,NOK:9.54,UAH:45,DKK:6.48,MYR:4.09,THB:33.4,ZAR:16.52,EGP:50.26,BRL:5.07,NZD:1.7,SEK:9.55,TWD:32.34,SAR:3.75,HKD:7.84,CZK:21.01,MXN:17.32,CHF:.81,JOD:.71,ILS:3.05,RON:4.55,OMR:.38,mygames:{RUB:30},wechat:{CNY:5},yookassa:{RUB:50},robokassa:{RUB:50},rustore:{RUB:50}};
connector.VIRTUAL_EXCHANGE_RATES={FM:1,MC:100,KG:10,MLK:30,OK:30,VK_GOLOS:4.275,WECHAT_GEMS:10,YAN:30,XTR:43,ARKADIUM_GEMS:30,BEANS:100,RDT:25};connector.VIRTUAL_CURRENCY_UNIT_VALUE={FM:{rub:30},OK:{rub:1},VK_GOLOS:{rub:7},MLK:{rub:1},YAN:{rub:1},ARKADIUM_GEMS:{usd:.025},RDT:{usd:.02}};const CountryManager=function(){ConnectorEventEmitter.call(this);this.country=CountryManager.UNKONWN;connector.platform.getPlugin().needsCountry&&(this.load(),this.update(),connector.platform.oneOf(connector.CLEVERAPPS,connector.MSSTART,connector.ANDROID,connector.INSTANT)&&this.updateIpCode())};CountryManager.prototype=Object.create(ConnectorEventEmitter.prototype);CountryManager.prototype.constructor=CountryManager;
CountryManager.prototype.updateIpCode=function(){this.setIpCode("ZZ");};CountryManager.prototype.setCurrency=function(a){a&&this.currency!==a&&(this.currency=a,this.save(),this.update())};CountryManager.prototype.setIpCode=function(a){a&&this.ipCode!==a&&(this.ipCode=a,this.save(),this.update())};CountryManager.prototype.forceCountry=function(a){this.forcedCountry!==a&&(this.forcedCountry=a,this.update())};
CountryManager.prototype.update=function(){const a=this.calculateCode();console.log(`[connector] update country: ${a}, current: ${this.country}`);this.country!==a&&(this.country=a,this.trigger("changed"))};CountryManager.prototype.calculateCode=function(){return this.forcedCountry?this.forcedCountry:this.currency&&this.currency===CountryManager.RUB?CountryManager.RU:this.ipCode?this.ipCode:this.currency?CountryManager.OTHER:CountryManager.UNKONWN};
CountryManager.prototype.load=function(){const a=connector.dataLoader.load(SimpleDataLoader.TYPES.PAYMENTS_COUNTRY)||{};this.currency=a.currency;this.ipCode=a.ipCode};CountryManager.prototype.save=function(){connector.dataLoader.save(SimpleDataLoader.TYPES.PAYMENTS_COUNTRY,{currency:this.currency,ipCode:this.ipCode})};CountryManager.RUB="RUB";CountryManager.RU="RU";CountryManager.OTHER="OTHER";CountryManager.UNKONWN="UNKNOWN";const SdkManager=function(){ConnectorEventEmitter.call(this);this.ready={};this.loading={}};SdkManager.prototype=Object.create(ConnectorEventEmitter.prototype);SdkManager.prototype.constructor=SdkManager;
SdkManager.prototype.loadSdk=function(a,b){if(b)b(connector.CODE_FAILED);};SdkManager.timeout=function(a,b){return function(c,d){setTimeout(d,a);b(c,d)}};SdkManager.once=function(a){return function(b,...c){if(a){const d=a;a=void 0;d.call(this,b,...c)}else b()}};SdkManager.load=function(){return function(a,b){if(b)b();};};
SdkManager.SDK_TEST="test";SdkManager.SDK_CRAZY="crazy";SdkManager.SDK_DRAUGIEM="draugiem";SdkManager.SDK_FOTOSTRANA="fotostrana";SdkManager.SDK_GDCOM="gdcom";SdkManager.SDK_INSTANT="instant";SdkManager.SDK_KONGREGATE="kongregate";SdkManager.SDK_MSSTART="msstart";SdkManager.SDK_MYMAILRU="mymailru";SdkManager.SDK_OK="ok";SdkManager.SDK_PLINGA="plinga";SdkManager.SDK_SAMSUNG="samsung";SdkManager.SDK_SPMOBAGE="spmobage";SdkManager.SDK_VK="vk";SdkManager.SDK_YANDEX="yandex";SdkManager.SDK_XSOLLA="xsolla";
SdkManager.SDK_GOOGLE_ADS="google_ads";SdkManager.SDK_YANDEX_WEB_ADS="yandex_web_ads";SdkManager.SDK_DISCORD="discord";SdkManager.SDK_TELEGRAM="telegram";SdkManager.SDK_REDDIT="reddit";SdkManager.SDK_TIKTOK="tiktok";SdkManager.SDK_ARKADIUM="arkadium";SdkManager.SDK_ADDICTINGGAMES="addicting";SdkManager.LOADERS={};SdkManager.LOADERS[SdkManager.SDK_TEST]=undefined;
SdkManager.LOADERS[SdkManager.SDK_CRAZY]=undefined;SdkManager.LOADERS[SdkManager.SDK_DRAUGIEM]=undefined;
SdkManager.LOADERS[SdkManager.SDK_FOTOSTRANA]=undefined;
SdkManager.LOADERS[SdkManager.SDK_GDCOM]=undefined;SdkManager.LOADERS[SdkManager.SDK_REDDIT]=undefined;SdkManager.LOADERS[SdkManager.SDK_INSTANT]=undefined;
SdkManager.LOADERS[SdkManager.SDK_KONGREGATE]=undefined;SdkManager.LOADERS[SdkManager.SDK_MSSTART]=undefined;SdkManager.LOADERS[SdkManager.SDK_TELEGRAM]=undefined;
SdkManager.LOADERS[SdkManager.SDK_MYMAILRU]=undefined;
SdkManager.LOADERS[SdkManager.SDK_OK]=undefined;
SdkManager.LOADERS[SdkManager.SDK_PLINGA]=undefined;SdkManager.LOADERS[SdkManager.SDK_SAMSUNG]=undefined;
SdkManager.LOADERS[SdkManager.SDK_SPMOBAGE]=undefined;
SdkManager.LOADERS[SdkManager.SDK_VK]=undefined;
SdkManager.LOADERS[SdkManager.SDK_YANDEX]=undefined;SdkManager.LOADERS[SdkManager.SDK_XSOLLA]=undefined;
SdkManager.LOADERS[SdkManager.SDK_GOOGLE_ADS]=undefined;
SdkManager.LOADERS[SdkManager.SDK_YANDEX_WEB_ADS]=undefined;SdkManager.LOADERS[SdkManager.SDK_DISCORD]=undefined;
SdkManager.LOADERS[SdkManager.SDK_TIKTOK]=undefined;
SdkManager.LOADERS[SdkManager.SDK_ADDICTINGGAMES]=undefined;
SdkManager.LOADERS[SdkManager.SDK_ARKADIUM]=undefined;var PlayerManager=function(){connector.social.whenConnected(this.refresh.bind(this));this.bus=new ConnectorEventEmitter;this.isReady=!1;this.id=this.avatar=this.lastName=this.firstName=this.name=""};PlayerManager.prototype.whenReady=function(a){if(this.isReady)a();else this.bus.once("ready",a)};
PlayerManager.prototype.refresh=function(){connector.social.isLoggedIn()&&connector.social.getPlugin()._aboutMe(function(a,b){a!==connector.CODE_SUCCEED||!b||this.isReady&&b.id===this.id&&b.name===this.name&&b.avatar===this.avatar||(b.currency&&connector.payments.getPlugin().setCurrency(b.currency),this.name=b.name||"",this.firstName=b.firstName||"",this.lastName=b.lastName||"",this.avatar=b.avatar||"",this.id=b.id||"",this.isReady||(this.isReady=!0,this.bus.trigger("ready")),this.bus.trigger("changed"))}.bind(this))};const PlatformStorage=function(){this.isLoading=this.isReady=!1;this.data=void 0;this.bus=new ConnectorEventEmitter};PlatformStorage.prototype.start=function(){this.isSupported()&&(this.initializeInterval=setInterval(this.initialize.bind(this),5E3),connector.platform.whenConnected(this.initialize.bind(this)))};PlatformStorage.prototype.whenReady=function(a){if(this.isReady)a();else this.bus.once("ready",a)};
PlatformStorage.prototype.isSupported=function(){return connector.platform.oneOf(connector.MSSTART)?!connector.info.isMobile:connector.platform.oneOf(connector.SAMSUNG,connector.YANDEX,connector.VK,connector.OK,connector.INSTANT,connector.TEST)};PlatformStorage.prototype.initialize=function(){this.isReady||this.isLoading||!connector.platform.isConnected()||this.load().then(a=>{if(this.isReady=a)clearInterval(this.initializeInterval),this.bus.trigger("ready")})};
PlatformStorage.prototype.load=function(){if(this.isLoading)return this.loadingPromise;this.isLoading=!0;return connector.platform.isConnected()?this.loadingPromise=new Promise(a=>{connector.platform.getPlugin().loadData().then(b=>{this.data=b||{};this.isLoading=!1;a(!0)}).catch(b=>{this.isLoading=!1;console.log("[connector] Error retrieving platform data",b);this.bus.trigger("error:load",ERRORS.STORAGE.LOAD.UNKNOWN);a(!1)})}):(this.isLoading=!1,this.bus.trigger("error:load",ERRORS.NOT_CONNECTED),
Promise.resolve(!1))};PlatformStorage.prototype.set=function(a,b){const c=connector.platform.getPlugin();if(!this.isReady)return this.bus.trigger("error:set",ERRORS.STORAGE.NOT_READY),Promise.resolve(!1);void 0===b&&(b=null);this.data[a]=b;return new Promise(d=>{c.setData(a,b).then(()=>{d(!0)}).catch(e=>{console.log("[connector] Error setting data",e);this.bus.trigger("error:set",ERRORS.STORAGE.SET.UNKNOWN);d(!1)})})};
PlatformStorage.prototype.get=function(a){if(this.isReady)return this.data[a];this.bus.trigger("error:get",ERRORS.STORAGE.NOT_READY)};PlatformStorage.prototype.getKeys=function(){if(this.isReady)return Object.keys(this.data);this.bus.trigger("error:getKeys",ERRORS.STORAGE.NOT_READY)};const CloudStorage=function(){this.bus=new ConnectorEventEmitter;this.conflict=!1;this.enabled=!0};
CloudStorage.prototype.initialize=function(done){this.localStorage=connector.dataLoader.localStorage;this.initialized=true;if(done)done();};
CloudStorage.prototype.detectPlugin=function(){};
CloudStorage.prototype.connect=function(done){if(done)done();};
CloudStorage.prototype.synchronize=function(){};
CloudStorage.prototype.resolve=function(){};CloudStorage.prototype.hasConflict=function(){return this.conflict};CloudStorage.prototype.setConflict=function(a){this.conflict!==a&&(this.conflict=a,console.log(`cloud conflict - ${a}`),this.conflict?(this.bus.trigger("conflict"),connector.metrics.logEvent(connector.EVENTS.CLOUD_STORAGE.CONFLICT)):connector.metrics.logEvent(connector.EVENTS.CLOUD_STORAGE.CONFLICT_RESOLVED))};CloudStorage.prototype.isEnabled=function(){return this.enabled};
CloudStorage.prototype.setEnabled=function(a){this.enabled!==a&&(this.enabled=a,console.log(`cloud enabled - ${a}`),this.enabled||this.bus.trigger("disable"))};CloudStorage.prototype.copyStorage=function(a,b){const c=CloudStorage.GetLocalStoragePrefixes(),d={};c.forEach(e=>{Object.assign(d,a.getData(e))});for(const e of c)b.clearData(e);for(const e in d)b.setItem(e,d[e]);connector.config.debugMode&&console.log("cloud - data copied");connector.config.debugMode&&console.log("cloud",d)};
CloudStorage.prototype.isStoragesEquals=function(a,b){return CloudStorage.GetLocalStoragePrefixes().every(c=>{const d=a.getData(c);c=b.getData(c);connector.config.debugMode&&console.log("cloud compare storages",d,c);const e=Object.keys(d).sort(),f=Object.keys(c).sort();if(e.length!==f.length)return connector.config.debugMode&&console.log("cloud not equals keys length",e.length,f.length),!1;for(let g=0;g<e.length;g++){if(e[g]!==f[g])return connector.config.debugMode&&console.log("cloud not equals keys",
e[g],f[g]),!1;if(d[e[g]]!==c[f[g]])return connector.config.debugMode&&console.log("cloud not equals data",e[g],d[e[g]],c[f[g]]),!1}return!0})};CloudStorage.prototype.getLocalStorage=function(){return this.localStorage};CloudStorage.prototype.getCloudStorage=function(){return undefined;};CloudStorage.prototype.getItem=function(a){return this.localStorage.getItem(a)};
CloudStorage.prototype.setItem=function(key,value){if(this.enabled!==false)this.localStorage.setItem(key,value);};CloudStorage.prototype.removeItem=function(key){if(this.enabled!==false)this.localStorage.removeItem(key);};CloudStorage.prototype.getData=function(a=""){return this.localStorage.getData(a)};
CloudStorage.prototype.clearData=function(prefix){if(this.enabled!==false)this.localStorage.clearData(prefix||"");};CloudStorage.GetLocalStoragePrefixes=function(){return[SimpleDataLoader.GetLocalStoragePrefix(),connector.config.projectId+connector.platform.getPlugin().getLocalStoragePrefix()]};




const CommonInterface=function(){const a=new ConnectorEventEmitter;let b=void 0;return{_refreshPlugin:function(){const c=this._detectPlugin();!c||b&&b.constructor===c||(this._installPlugin(new c),this.connect())},_installPlugin:function(c){this._removePlugin();b=c;console.log("[connector] create plugin",b.pluginType,b.pluginName);b.onCreated();b.bus.setProxy(a);a.trigger("pluginChanged")},_removePlugin:function(){b&&(console.log("[connector] remove plugin",b.pluginType,b.pluginName),b.disconnect(),
b.onRemoved(),b.bus.setProxy(void 0),b=void 0)},getPlugin:function(){return b},getName:function(){if(b)return b.pluginName},on:function(c,d){return a.on(c,d)},once:function(c,d){return a.once(c,d)},oneOf:function(c){return b&&b.oneOf(Array.isArray(c)?c:Array.prototype.slice.call(arguments))},getStatus:function(){return b?b.status||connector.STATUS_DISCONNECTED:connector.STATUS_DISABLED},connect:function(){b&&b.connect()},disconnect:function(){b&&b.disconnect()},isConnected:function(){return b?b.isConnected():
!1},whenConnected:function(c){if(b&&b.isConnected())c();else var d=a.on("changeStatus",e=>{e===connector.STATUS_CONNECTED&&(d.clear(),c())})}}};const PlatformInterface=function(){return Object.assign({get isPaused(){return this.getPlugin().isPaused()},get isAudioEnabled(){return this.getPlugin().isAudioEnabled()},get hasAudioControls(){return this.getPlugin().hasAudioControls()},get hasNativeLoadingScreen(){return!(!this.getPlugin()||!this.getPlugin().reportLoadingProgress)}},CommonInterface(),{_detectPlugin:PlatformDetector,getUserID:function(){return this.getPlugin().getUserID()},setUserID:function(a){this.getPlugin().setUserID(a)},withTmpID:function(){const a=
connector.platform.getUserID();return a?a.startsWith("__"):!1},withDeviceID:function(){const a=connector.platform.getUserID(),b=connector.info.deviceID;return b?a===b:!1},listShareChannels:function(){return connector._socialManager.listShareChannels()},isShareCheckBoxAvailable:function(){return this.getPlugin().isShareCheckBoxAvailable()},share:function(a){return new Promise(b=>{this.shareCallback(a,b)})},shareCallback:function(a,b){connector._socialManager.share(a,b)},inviteFriends:function(a,b,
c){connector._socialManager.inviteFriends(a,b,c)},checkInvitees:function(a){connector._socialManager.checkInvitees(a)},getAccessToken:function(){return connector.platform.withDeviceID()?this.getPlugin().getAccessToken():connector.social.getPlugin().getAccessToken()},pause:function(){this.getPlugin().pause()},resume:function(){this.getPlugin().resume()},isPageHidden:function(){return this.getPlugin().isPageHidden()},callNative:function(a,b,c){this.getPlugin().callNative(a,b,c)},subscribeNative:function(a,
b){this.getPlugin().nativeEventListeners[a]=b},unsubscribeNative:function(a){delete this.getPlugin().nativeEventListeners[a]},isTester:function(){return this.getPlugin().isTester()},openUrl:function(a){this.getPlugin().openUrl(a)},hasVibration:function(){return this.getPlugin().hasVibration()},vibrate:function(a){this.getPlugin().vibrate(a)},locationReload:function(){this.getPlugin().locationReload()},parsePayload:function(a){this.getPlugin().parsePayload(a)},calcPromo:function(a){this.parsePayload(b=>
{(b=b&&b.promo)?a(b):this.parseOtherWays(a)})},parseOtherWays:function(a){this.getPlugin().parseOtherWays(a)},hasCloseApplication:function(){return this.getPlugin().closeApplication},closeApplication:function(){this.getPlugin().closeApplication&&this.getPlugin().closeApplication()},isFullscreenAvailable:function(){return this.getPlugin().isFullscreenAvailable()},toggleFullScreen:function(){this.isFullscreenAvailable()&&this.getPlugin().toggleFullScreen&&this.getPlugin().toggleFullScreen()},isExitFullscreenAvailable:function(){return this.getPlugin().isExitFullscreenAvailable()},
exitFullscreen:function(a){this.isExitFullscreenAvailable()&&this.getPlugin().exitFullscreen&&this.getPlugin().exitFullscreen(a)},reportLoadingProgress:function(a){this.getPlugin()&&this.getPlugin().reportLoadingProgress&&this.getPlugin().reportLoadingProgress(a)},startGame:function(){return new Promise(a=>{this.startGameCallback(a)})},startGameCallback:function(a){this.getPlugin().startGame?this.getPlugin().startGame(a):a()},getSafePadding:function(){return this.getPlugin().getSafePadding()},getFrameSize:function(){return this.getPlugin().getFrameSize()},
getLocalStoragePrefix:function(){return this.getPlugin().getLocalStoragePrefix()},canReview:function(){return this.getPlugin().canReview()},requestReview:function(){return new Promise(a=>{this.requestReviewCallback(b=>{a(b===connector.CODE_SUCCEED)})})},requestReviewCallback:function(a){this.getPlugin().requestReview(a)},canCreateShortcut:function(){return this.getPlugin().canCreateShortcut()},canCreateShortcutAsync:function(){return new Promise(a=>{this.canCreateShortcutCallback(b=>{a(b)})})},canCreateShortcutCallback:function(a){return this.getPlugin().canCreateShortcutAsync(a)},
createShortcut:function(){return new Promise(a=>{this.createShortcutCallback(b=>{a(b===connector.CODE_SUCCEED)})})},createShortcutCallback:function(a){this.getPlugin().createShortcut(a)},getShortcutMissionReward:function(a){this.getPlugin().getShortcutMissionReward(a)},canStartEntranceMission:function(){return this.getPlugin().canStartEntranceMission()},startEntranceMission:function(){return new Promise(a=>{this.startEntranceMissionCallback(b=>{a(b===connector.CODE_SUCCEED)})})},startEntranceMissionCallback:function(a){this.getPlugin().startEntranceMission(a)},
getEntranceMissionReward:function(a){this.getPlugin().getEntranceMissionReward(a)},notifyGameReady:function(){this.getPlugin().notifyGameReady&&!this.getPlugin().notifyGameReadyDone&&(this.getPlugin().notifyGameReadyDone=!0,connector.platform.whenConnected(()=>{this.getPlugin().notifyGameReady()}))},isGameplayActive:function(){return!!this.gameplayActive},gameplayStart:function(a){if(!this.gameplayActive){this.gameplayActive=!0;var b=this.getPlugin();b.gameplayStart&&b.gameplayStart(a)}},gameplayStop:function(a){if(this.gameplayActive){this.gameplayActive=
!1;var b=this.getPlugin();b.gameplayStop&&b.gameplayStop(a)}},listGames:function(){const a=this.getPlugin();return a.listGames&&a.isConnected()?a.listGames():Promise.resolve([])},canPassPayload:function(){return this.getPlugin().canPassPayload()},hasPublisherPlayerId:function(){return this.getPlugin().hasPublisherPlayerId()},canSwitchGame:function(){return this.getPlugin().canSwitchGame()},switchGame:function(a,b,c){this.getPlugin().switchGame(a,b,c)},getGameUrl:function(a){return Platform.getGameUrl(a)},
getRateUrl:function(){return Platform.getRateUrl()},getExternalUrl:function(a){return Platform.getExternalUrl(a)}})};const SocialInterface=function(){return Object.assign({get isSupportsNativeRequest(){return this.getPlugin().isSupportsNativeRequest()},get isSupportsNativeCommunityJoin(){return this.getPlugin().isSupportsNativeCommunityJoin()},get canJoinCommunity(){return connector.platform.oneOf(connector.OK,connector.OKBRIDGE,connector.INSTANT,connector.VK,connector.MM,connector.MOBAGE,connector.SP_MOBAGE,connector.DRAUGIEM,connector.DRAUGIEM,connector.FOTOSTRANA)}},CommonInterface(),{_detectPlugin:SocialDetector,
needWindowForLogin:!1,isLoggedIn:function(a){return this.getPlugin().isLoggedIn(a)},login:function(a){return new Promise(b=>{connector.social.loginCallback(b,a)})},loginCallback:function(a,b){this.getPlugin().login(a,b)},logout:function(){this.getPlugin().logout()},hasLeaderBoard:function(){return this.getPlugin().hasLeaderBoard()},showLeaderBoard:function(a,b){const c=this.getPlugin();c&&c.isConnected()?c.showLeaderBoard(a,b):b(connector.CODE_FAILED)},joinCommunity:function(){return new Promise(a=>
{this.joinCommunityCallback(a)})},joinCommunityCallback:function(a){connector._socialManager.joinCommunity(a)},joinCommunityNativeCallback:function(a){connector._socialManager.joinCommunity(a,!0)},request:function(a){return new Promise(b=>{this.requestCallback(a,b)})},requestCallback:function(a,b){connector._socialManager.request(a,b)},askFriendsPermission:function(a){const b=this.getPlugin();b.askFriendsPermission&&b.isConnected()?b.askFriendsPermission(a):a(connector.CODE_FAILED)},listFriends:function(a){this.getPlugin().listFriends(a)},
canCheckInvitees:function(){return this.getPlugin().canCheckInvitees()},listInvitableFriends:function(a){this.getPlugin().listInvitableFriends(a)},aboutUser:function(a,b){this.getPlugin().aboutUser(a,b)},sendActivity:function(a,b){const c=this.getPlugin();c.sendActivity&&c.isConnected()?c.sendActivity(a,b):b(connector.CODE_FAILED)},markAchievement:function(a){const b=this.getPlugin();b.markAchievement&&b.isConnected()&&b.markAchievement(a)},invalidateAccessToken:function(){const a=this.getPlugin();
a.invalidateAccessToken&&a.invalidateAccessToken()},listAvailable:function(){return this.getPlugin().listAvailable()},notifyActive:function(){this.getPlugin().notifyActive()}})};const PaymentsInterface=function(){return Object.assign({get products(){return connector._paymentsManager.getLocalizedCatalog()},get isAvailable(){return connector.payments.getStatus()!==connector.STATUS_DISABLED},get isLoginRequired(){return connector._paymentsManager.isLoginRequired()},get isEmailRequired(){return connector.payments.oneOf(connector.YOOKASSA,connector.ROBOKASSA)},get isSubscriptionsAvailable(){return connector._paymentsManager.isSubscriptionsAvailable()}},CommonInterface(),{_detectPlugin:PaymentsDetector,
purchase:function(a){return new Promise(b=>{connector.payments.purchaseCallback(a,b)})},purchaseCallback:function(a,b){connector._paymentsManager.purchase(a,b)},consume:function(a){return new Promise(b=>{connector.payments.consumeCallback(a,b)})},consumeCallback:function(a,b){connector._paymentsManager.consume(a,b)},stopCurrentPurchase:function(){connector._paymentsManager.stopPurchasePlayer()},getInfo:function(){return connector._paymentsManager.getInfo()},updateInfo:function(a){connector._paymentsManager.updateInfo(a)},
getPaymentContext:function(a){return connector._paymentsManager.getPaymentContext(a)},isConsumed:function(a){return connector._paymentsManager.isConsumed(a&&a.paymentId)},getProduct:function(a){return connector._paymentsManager.getLocalizedProduct(a)},getPurchaseState:function(){return this.getPlugin().getPurchaseState()},loadProductsThrottled:function(){connector.payments.isConnected()&&connector._paymentsManager.tryLoadProductsThrottled()},getTextPrice:function(a){return this.getPlugin().getTextPrice(a)},
convertPrice:function(a){return this.getPlugin().convertPrice(a)},getExchangeRate:function(){return this.getPlugin().getExchangeRate()},restore:function(){return new Promise(a=>{connector.payments.restoreCallback(a)})},restoreCallback:function(a){connector._paymentsManager.restore(a)},restoreSubscriptions:function(a){const b=this.getPlugin();b.restoreSubscriptions?b.restoreSubscriptions(a):a()},isVirtualCurrency:function(){return this.getPlugin().isVirtualCurrency()},getSubscriptionStatus:function(a,
b){this.getPlugin().getSubscriptionStatus(a,b)},notifyActive:function(){this.getPlugin().notifyActive()}})};const AdsInterface=function(){return Object.assign({get isRewardedSupported(){return this.getPlugin().isRewardedSupported()},get isRewardedAvailable(){return connector._adsManager.getRewardedStatus()===connector.CODE_SUCCEED},get isRewardedPlaying(){return this.getPlugin().isPlaying(AdsPlugin.REWARDED)},get isInterstitialSupported(){return this.getPlugin().isInterstitialSupported()},get isInterstitialAvailable(){return connector._adsManager.getInterstitialStatus()===connector.CODE_SUCCEED},get isInterstitialPlaying(){return this.getPlugin().isPlaying(AdsPlugin.INTERSTITIAL)},
get isStickySupported(){return this.getPlugin().isStickySupported()},get isStickyAvailable(){return connector._adsManager.getStickyStatus()===connector.CODE_SUCCEED},get isStickyPlaying(){return connector._adsManager.isStickyPlaying()},get isAdBlockEnabled(){return connector._adsManager.isAdBlockEnabled}},CommonInterface(),{_detectPlugin:AdsDetector,isNoAdsProductAvailable:function(){return this.getPlugin().isNoAdsProductAvailable()},checkAdBlock:function(){return new Promise(a=>{this.checkAdBlockCallback(a)})},
checkAdBlockCallback:function(a){connector._adsManager.checkAdBlock(a)},showRewardedVideo:function(){return new Promise(a=>{this.showRewardedVideoCallback(a)})},showRewardedVideoCallback:function(a){connector._adsManager.showRewarded(b=>{a(b===connector.CODE_SUCCEED)})},showInterstitial:function(){return new Promise(a=>{this.showInterstitialCallback(a)})},showInterstitialCallback:function(a){connector._adsManager.showInterstitial(b=>{a(b===connector.CODE_SUCCEED||b===connector.ERRORS.SHOW_INTERSTITIAL.CLOSED_BY_USER)})},
askPermission:function(a){connector._adsManager.askPermission(a)},finishAd:function(a,b){const c=this.getPlugin();c&&c.finishAd(a,b)},showSticky:function(a){return new Promise(b=>{this.showStickyCallback(a,b)})},showStickyCallback:function(a,b){connector._adsManager.enableSticky(a,()=>{b&&b()})},refreshSticky:function(){return new Promise(a=>{this.refreshStickyCallback(a)})},refreshStickyCallback:function(a){connector._adsManager.refreshSticky(()=>{a&&a()})},closeSticky:function(){return new Promise(a=>
{this.closeStickyCallback(a)})},closeStickyCallback:function(a){connector._adsManager.disableSticky(()=>{a&&a()})}})};const StorageInterface=function(){return{get ready(){return new Promise(a=>{connector._platformStorage.whenReady(a)})},on:function(a,b){return connector._platformStorage.bus.on(a,b)},once:function(a,b){return connector._platformStorage.bus.once(a,b)},get isSupported(){return connector._platformStorage.isSupported()},set:function(a,b){return connector._platformStorage.set(a,b)},get:function(a){return connector._platformStorage.get(a)},getKeys:function(){return connector._platformStorage.getKeys()},
load:function(){return connector._platformStorage.load()}}};const ConversionsInterface=function(){return{trackEvent:function(a,b={}){connector._conversions.trackEvent(a,b)},trackPurchase:function(a,b,c){connector._conversions.trackPurchase(a,b,c)},trackAdRevenue:function(a,b,c){connector._conversions.trackAdRevenue(a,b,c)},trackUserId:function(){connector._conversions.trackUserId()}}};const MetricsInterface=function(){return{getDaysSinceRegistration:function(a){return connector._metrics.getDaysSinceRegistration(a)},setChannel:function(a){connector._metrics.setChannel(a)},logEvent:function(a,b={}){connector._metrics.logEvent(a,b)},on:function(a,b){connector._metrics.on(a,b)}}};const CloudStorageInterface=function(){return{resolve:function(a="equals"){connector._cloudStorage.resolve(a)},hasConflict:function(){return connector._cloudStorage.hasConflict()},isEnabled:function(){return connector._cloudStorage.isEnabled()},on:function(a,b){connector._cloudStorage.bus.on(a,b)},getLocalStorage:function(){return connector._cloudStorage.getLocalStorage()},getCloudStorage:function(){return connector._cloudStorage.getCloudStorage()}}};const Info={nativePlatforms:"microsoft gpg mygames macos wechat msix g5windows".split(" "),nativeMobilePlatforms:"android amazon ios digital rustore onestore epicgames".split(" "),bus:new ConnectorEventEmitter,initialize:function(){connector.info.source=this._detectSource();connector.info.isMobile=this._detectMobile();connector.info.isNative=this._detectNative()},_detectLanguage:function(){return "en";},_detectMobile:function(){if(Info.nativeMobilePlatforms.includes(connector.info.source))return!0;const a=window.navigator.userAgent.toLowerCase();return/mobile|android|iphone|ipad/.test(a)},_detectNative:function(){return Info.nativePlatforms.includes(connector.info.source)||Info.nativeMobilePlatforms.includes(connector.info.source)},_detectOS:function(){const a=window.navigator;var b=a.userAgent.toLowerCase();if(/android/i.test(b)||/android/i.test(a.platform))return connector.OS_ANDROID;
if(/(iPad|iPhone|iPod)/i.test(b)||/(iPhone|iPad|iPod)/i.test(a.platform))return connector.OS_IOS;b=connector.OS_UNKNOWN;-1!==a.appVersion.indexOf("Win")||a.platform.startsWith("Win")?b=connector.OS_WINDOWS:a.platform.startsWith("Mac")?b=connector.OS_OSX:-1!==a.appVersion.indexOf("Mac")?b=connector.OS_OSX:-1!==a.appVersion.indexOf("X11")&&-1===a.appVersion.indexOf("Linux")?b=connector.OS_UNIX:-1!==a.appVersion.indexOf("Linux")&&(b=connector.OS_LINUX);return b},_isBot:function(){return/bot|crawler|spider|headless|lighthouse|phantomjs|facebookexternalhit/i.test(window.navigator.userAgent||
"")},_detectSource:function(){return "offline";}};const InfoInterface=function(){return{on:function(a,b){Info.bus.on(a,b)},source:"",isMobile:!1,isNative:!1,os:Info._detectOS(),isInApp:!1,language:Info._detectLanguage(),deviceName:"",deviceVersion:"",deviceID:"",changeLanguage:function(a){connector.info.language=a;Info.bus.trigger("changeLanguage",a)}}};connector.OS_UNKNOWN="Unknown";connector.OS_WINDOWS="Windows";connector.OS_IOS="iOS";connector.OS_OSX="OS X";connector.OS_UNIX="Unix";connector.OS_ANDROID="Android";connector.OS_LINUX="Linux";
connector.LANGUAGE_ENGLISH="en";connector.LANGUAGE_CHINESE="zh";connector.LANGUAGE_FRENCH="fr";connector.LANGUAGE_ITALIAN="it";connector.LANGUAGE_GERMAN="de";connector.LANGUAGE_SPANISH="es";connector.LANGUAGE_DUTCH="nl";connector.LANGUAGE_RUSSIAN="ru";connector.LANGUAGE_KOREAN="ko";connector.LANGUAGE_JAPANESE="ja";connector.LANGUAGE_HUNGARIAN="hu";connector.LANGUAGE_PORTUGUESE="pt";connector.LANGUAGE_ARABIC="ar";connector.LANGUAGE_NORWEGIAN="no";connector.LANGUAGE_POLISH="pl";
connector.LANGUAGE_LATVIAN="lv";connector.LANGUAGE_TURKISH="tr";const PlayerInterface=function(){return{on:function(a,b){return connector._playerManager.bus.on(a,b)},once:function(a,b){return connector._playerManager.bus.once(a,b)},get ready(){return new Promise(a=>{connector._playerManager.whenReady(a)})},whenReady:function(a){connector._playerManager.whenReady(a)},get name(){return connector._playerManager.name},get firstName(){return connector._playerManager.firstName},get lastName(){return connector._playerManager.lastName},get id(){return connector.platform.getUserID()},
get avatar(){return connector._playerManager.avatar}}};const AdsManager=function(){this.isAdBlockEnabled=this._isStickyEnabled=this._isStickyPlaying=!1;connector.ads.on("changeStatus",()=>{connector.ads.isConnected()&&(this.checkCacheQueue(),this.checkAdBlock());this._isStickyEnabled&&this._refreshStickyInner()});connector._countryManager.on("changed",()=>{this.whenIdle(()=>{connector.ads._refreshPlugin()})});connector.ads.on("pluginChanged",()=>{this._isStickyPlaying=!1});connector.timeouts.setInterval(()=>this.checkCacheQueue(),AdsPlugin.CHECK_CACHE_INTERVAL)};
AdsManager.prototype.getAdStatus=function(a){if(a===AdsPlugin.REWARDED)return this.getRewardedStatus();if(a===AdsPlugin.INTERSTITIAL)return this.getInterstitialStatus();if(a===AdsPlugin.STICKY)return this.getStickyStatus()};
AdsManager.prototype.getRewardedStatus=function(){const a=connector.ads.getPlugin();return a.isConnected()?a.isRewardedSupported()?a.isAdCached(AdsPlugin.REWARDED)?a.isRewardedConfigured()?connector.CODE_SUCCEED:ERRORS.SHOW_REWARDED.NOT_CONFIGURED:ERRORS.SHOW_REWARDED.NO_ADS:ERRORS.SHOW_REWARDED.NOT_SUPPORTED:ERRORS.NOT_CONNECTED};
AdsManager.prototype.getInterstitialStatus=function(){const a=connector.ads.getPlugin();return a.isConnected()?a.isInterstitialSupported()?a.isAdCached(AdsPlugin.INTERSTITIAL)?a.isInterstitialConfigured()?connector.CODE_SUCCEED:ERRORS.SHOW_INTERSTITIAL.NOT_CONFIGURED:ERRORS.SHOW_INTERSTITIAL.NO_ADS:ERRORS.SHOW_INTERSTITIAL.NOT_SUPPORTED:ERRORS.NOT_CONNECTED};
AdsManager.prototype.getStickyStatus=function(){const a=connector.ads.getPlugin();return a.isConnected()?a.isStickySupported()?a.isStickyConfigured()?a.isStickyAvailable()?connector.CODE_SUCCEED:ERRORS.SHOW_STICKY.NO_STICKY:ERRORS.SHOW_STICKY.NOT_CONFIGURED:ERRORS.SHOW_STICKY.NOT_SUPPORTED:ERRORS.NOT_CONNECTED};
AdsManager.prototype.showRewarded=function(a){this.playAd(AdsPlugin.REWARDED,(b,c={})=>{const d=connector.ads.getPlugin();c=c.pluginName||d.pluginName;b&&b!==ERRORS.SHOW_REWARDED.CLOSED_BY_USER&&(d.bus.trigger("error:showRewarded",b),connector.metrics.logEvent(connector.EVENTS.ADS.ERROR_REWARDED,{plugin:c,error:b}));b===ERRORS.SHOW_REWARDED.CLOSED_BY_USER&&connector.metrics.logEvent(connector.EVENTS.ADS.CLOSED+AdsPlugin.REWARDED,{itemId:c});b===connector.CODE_SUCCEED&&connector.metrics.logEvent(`${connector.EVENTS.ADS.FINISH+
AdsPlugin.REWARDED}_${c}`);a(b)})};
AdsManager.prototype.showInterstitial=function(a){this.playAd(AdsPlugin.INTERSTITIAL,(b,c={})=>{const d=connector.ads.getPlugin();c=c.pluginName||d.pluginName;b&&b!==ERRORS.SHOW_INTERSTITIAL.CLOSED_BY_USER&&(d.bus.trigger("error:showInterstitial",b),connector.metrics.logEvent(connector.EVENTS.ADS.ERROR_INTERSTITIAL,{plugin:c,error:b}));b===ERRORS.SHOW_INTERSTITIAL.CLOSED_BY_USER&&connector.metrics.logEvent(connector.EVENTS.ADS.CLOSED+AdsPlugin.INTERSTITIAL,{itemId:c});b===connector.CODE_SUCCEED&&
connector.metrics.logEvent(`${connector.EVENTS.ADS.FINISH+AdsPlugin.INTERSTITIAL}_${c}`);a(b)})};AdsManager.prototype.isStickyPlaying=function(){return this._isStickyPlaying};AdsManager.prototype.enableSticky=function(a,b){this._isStickyEnabled?b():(this._isStickyEnabled=!0,this._updateRefreshInterval(),this.showSticky(b,a))};AdsManager.prototype.disableSticky=function(a){this._isStickyEnabled?(this._isStickyEnabled=!1,this._updateRefreshInterval(),this.closeSticky(a)):a()};
AdsManager.prototype.showSticky=function(a,b){const c=connector.ads.getPlugin(),d=function(f){c.bus.trigger("error:showSticky",f);a(f)},e=this.getAdStatus(AdsPlugin.STICKY);e?d(e):c.showSticky((f,g)=>{f?d(f):(this._isStickyPlaying=!0,c.bus.trigger("sticky:start",g),a(f))},b)};
AdsManager.prototype._refreshStickyInner=function(a){if(this._refreshingSticky)a&&a(connector.CODE_FAILED);else{this._refreshingSticky=!0;var b=connector.ads.getPlugin(),c=function(d){this._refreshingSticky=!1;this._isStickyEnabled?(d&&b.bus.trigger("error:refreshSticky",d),b.bus.trigger("sticky:refresh"),a&&a(d)):(a&&a(d),this.closeSticky())}.bind(this);this._isStickyPlaying&&!connector.ads.isStickyAvailable?this.closeSticky(c):!this._isStickyPlaying&&connector.ads.isStickyAvailable?this.showSticky(c):
b.refreshSticky?b.refreshSticky(d=>{d&&this.closeSticky();c(connector.CODE_SUCCEED)}):c(connector.CODE_SUCCEED)}};
AdsManager.prototype._updateRefreshInterval=function(){var a=this._isStickyEnabled;a||void 0===this._refreshInterval?a&&void 0===this._refreshInterval&&(a=connector.ads.getPlugin().stickyRefreshInterval||AdsManager.REFRESH_STICKY_INTERVAL,this._refreshInterval=connector.timeouts.setInterval(()=>this._refreshStickyInner(),a)):(connector.timeouts.clearInterval(this._refreshInterval),this._refreshInterval=void 0)};AdsManager.prototype.refreshSticky=function(a){this._refreshStickyInner(a)};
AdsManager.prototype.closeSticky=function(a){const b=connector.ads.getPlugin();this._isStickyPlaying?b.closeSticky(c=>{c?b.bus.trigger("error:closeSticky",c):(this._isStickyPlaying=!1,b.bus.trigger("sticky:close"));a&&a(c)}):a&&a(connector.CODE_SUCCEED)};AdsManager.prototype.onStickyRestored=function(a){this._isStickyPlaying=!0;connector.ads.getPlugin().bus.trigger("sticky:start",a)};AdsManager.prototype.onStickyClosedByUser=function(){this._isStickyPlaying=!1;connector.ads.getPlugin().bus.trigger("sticky:close")};
AdsManager.prototype.isAdSupported=function(a){if(a===AdsPlugin.REWARDED)return connector.ads.isRewardedSupported;if(a===AdsPlugin.INTERSTITIAL)return connector.ads.isInterstitialSupported;if(a===AdsPlugin.STICKY)return connector.ads.isStickySupported};
AdsManager.prototype.checkAdBlock=function(a){const b=connector.ads.getPlugin(),c=function(e){this.isAdBlockEnabled=e;a&&a(e)}.bind(this);if(connector.info.isNative||connector.info.isInApp)c(!1);else if(b.checkAdBlock)b.isConnected()?b.checkAdBlock(c):c(!1);else{var d=document.createElement("div");d.className="adsbox ad-banner advertisement pub_300x250 google_ads text-ad sponsored";d.id="ad-banner";d.innerHTML="&nbsp;";Object.assign(d.style,{width:"10px",height:"10px",position:"absolute",top:"-9999px",
left:"-9999px",pointerEvents:"none"});document.body.appendChild(d);setTimeout(()=>{var e=window.getComputedStyle(d);e=null===d.parentNode||null===d.offsetParent||0===d.offsetHeight||0===d.clientHeight||"none"===e.display||"hidden"===e.visibility||0===parseFloat(e.opacity);c(e);d.parentNode&&d.parentNode.removeChild(d)},150)}};
AdsManager.prototype.whenIdle=function(a){const b=connector.ads.getPlugin();if(b)if(b.isIdle())a();else{const c=b.bus.on("changeVideoState",()=>{b.isIdle()&&(a(),c.clear())})}else a()};AdsManager.prototype.checkCacheQueue=function(){if(connector.ads.isConnected()){const a=connector.ads.getPlugin();a.cantLoadInParallel?AdsPlugin.TYPES.slice().reverse().reduce((b,c)=>function(){a.cacheAd(c,b)},()=>{})():AdsPlugin.TYPES.forEach(b=>{a.cacheAd(b)})}};
AdsManager.prototype.askPermission=function(a){connector.ads.getPlugin().askPermission(()=>{connector.ads.connect();a&&a()})};
AdsManager.prototype.playAd=function(a,b){b=b||function(){};const c=this.getAdStatus(a);if([connector.CODE_SUCCEED,ERRORS.SHOW_INTERSTITIAL.NO_ADS,ERRORS.SHOW_REWARDED.NO_ADS].includes(c)){var d=connector.ads.getPlugin();d.bus.trigger(`${a}:loading`,d.pluginName);d.cacheAd(a,e=>{d.bus.trigger(`${a}:loaded`,e===connector.CODE_SUCCEED,d.pluginName);e!==connector.CODE_SUCCEED?a===AdsPlugin.REWARDED?b(ERRORS.SHOW_REWARDED.NO_ADS):b(ERRORS.SHOW_INTERSTITIAL.NO_ADS):(d.playAd(a,(f,g)=>{AdsPlugin.TYPES.forEach(h=>
{const k=h===a&&d.cantLoadAfterPlay?AdsPlugin.LOAD_AFTER_PLAY_TIME:0;setTimeout(d.cacheAd.bind(d,h),k)});b(f,g)}),d.cacheAd(a))})}else b(c)};AdsManager.prototype.loadECPMConfig=function(){const a=window.CONNECTOR_ECPM;a.remote&&a.remote.startsWith("remoteconfig://")&&connector.config.remoteConfigURL&&!this.ecpmConfigLoading&&(this.ecpmConfigLoading=!0,connector._loadConfig(a.remote,b=>{window.CONNECTOR_ECPM=b||window.CONNECTOR_ECPM;this.ecpmConfigLoading=!1}))};
AdsManager.REFRESH_STICKY_INTERVAL=connector.utils.parseInterval("60 seconds");const PaymentsManager=function(){this.pending=[];this.consumed=[];this.logged=[];this.load();this.productsConfigsCallbacks=[];this.productsConfig=void 0;this.productsConfigLoading=!1;this.restoreThrottled=connector.utils.timeredThrottle(1E4,this.restore.bind(this));this.tryLoadProductsThrottled=connector.utils.timeredThrottle(1E4,this.tryLoadProducts.bind(this));connector.timeouts.setInterval(()=>this.tryLoadProductsThrottled(),connector.utils.parseInterval("2 minutes"));connector.timeouts.setInterval(()=>
this.restoreThrottled(),connector.utils.parseInterval(connector.config.debugMode?"1 minute":"10 minutes"));connector.payments.on("changeStatus",a=>{a===connector.STATUS_CONNECTED&&(this.tryLoadProductsThrottled(),this.restoreThrottled(),["30 seconds","1 minute","5 minutes"].forEach(b=>{connector.timeouts.setTimeout(()=>this.restoreThrottled(),connector.utils.parseInterval(b))}),["20 seconds","40 seconds","60 seconds","90 seconds"].forEach(b=>{connector.timeouts.setTimeout(()=>this.tryLoadProductsThrottled(),
connector.utils.parseInterval(b))}))});if(connector.platform.oneOf(connector.MSSTART,connector.EPICGAMES))connector.social.on("login",()=>this.tryLoadProductsThrottled());connector._countryManager.on("changed",()=>{this.whenIdle(()=>{connector.payments._refreshPlugin()})})};
PaymentsManager.prototype.loadProductsConfig=function(a){if(this.productsConfig)a(this.productsConfig);else if(this.productsConfigsCallbacks.push(a),!this.productsConfigLoading)if(this.productsConfigLoading=!0,a=function(d){this.productsConfigLoading=!1;this.productsConfig=d;const e=this.productsConfigsCallbacks;this.productsConfigsCallbacks=[];e.forEach(f=>{f(d)})}.bind(this),connector.utils.getRequestParameters(window.location.hash).stopProductsLoadingDebug)a(void 0);else{var b=window.CONNECTOR_PRODUCTS,
c;b&&b.remote&&b.remote.startsWith("remoteconfig://")&&connector.config.remoteConfigURL?c=b.remote:connector.config.payApiURL&&(c=`${connector.config.payApiURL}/products.json`);c?connector._loadConfig(c,connector.utils.waitNoMore(BasePlugin.CONNECT_TIMEOUT,a)):a(void 0)}};PaymentsManager.prototype.getLocalizedCatalog=function(){return connector.payments.getPlugin().listProducts().map(this.localizeProduct.bind(this))};
PaymentsManager.prototype.whenIdle=function(a){const b=connector.payments.getPlugin();if(b)if(b.isIdle())a();else b.bus.once("paymentClosed",a);else a()};PaymentsManager.prototype.stop=function(){this.stopLoadProductsPlayer();this.stopRestorePlayer();this.stopPurchasePlayer()};PaymentsManager.prototype.stopRestorePlayer=function(){this.restorePlayer&&(this.restorePlayer.stop(),delete this.restorePlayer)};
PaymentsManager.prototype.restore=function(a){a=a||function(){};if(!connector.payments.isConnected()||!connector.payments.getPlugin().isRestoreAvailable()||this.isPurchaseRunning()||this.isRestoreRunning())a();else{var b,c,d=this.restorePlayer=new ConnectorActionPlayer({actionTimeout:connector.utils.parseInterval("1 minute"),actions:[function(e,f){connector.payments.getPlugin().restore((g,h)=>{g===connector.CODE_SUCCEED?(h.restore=!0,b=h,console.log("[connector] Restore purchase",JSON.stringify({...h,
payload:void 0})),e()):f()})},function(e,f){this.isConsumed(b.paymentId)?(this.consume(b),f()):connector.payments.getPlugin().validate(b,g=>{g===connector.CODE_SUCCEED?e():(g===connector.CODE_FAILED&&this.consume(b),f())})}.bind(this),function(e){c={...this.findPendingPurchaseContext(b),...b};e()}.bind(this)]});d.onSuccess(()=>{connector.payments.getPlugin().bus.trigger("restore",c);this.logPurchase(c);a(c)});d.onFailure(()=>{a()});d.play()}};
PaymentsManager.prototype.load=function(){const a=connector.dataLoader.load(SimpleDataLoader.TYPES.PAYMENTS);a&&(this.pending=(a.pending||[]).slice(),this.consumed=(a.consumed||[]).slice(),this.logged=(a.logged||[]).slice())};PaymentsManager.prototype.save=function(a){connector.dataLoader.save(SimpleDataLoader.TYPES.PAYMENTS,this.getInfo());!a&&connector.synchronizer&&connector.synchronizer.addSendTask("payments")};
PaymentsManager.prototype.getInfo=function(){return{pending:this.pending.slice(-PaymentsManager.PENDING_STORAGE_LIMIT),consumed:this.consumed.slice(-PaymentsManager.CONSUMED_STORAGE_LIMIT),logged:this.logged.slice(-PaymentsManager.LOGGED_STORAGE_LIMIT)}};PaymentsManager.prototype.updateInfo=function(a){a=a||{};this.pending=(a.pending||[]).slice();this.consumed=(a.consumed||[]).slice();this.logged=(a.logged||[]).slice();this.save(!0)};
PaymentsManager.prototype.savePendingPurchaseContext=function(a,b){a={productId:a,context:b};this.pending.push(a);this.save();return a};PaymentsManager.prototype.attachPendingPaymentId=function(a,b){(b=b&&b.paymentId)&&!isTemporaryPurchaseId(b)&&a.paymentId!==b&&(a.paymentId=b,this.save())};
PaymentsManager.prototype.indexOfPendingPurchaseContext=function(a){const b=isTemporaryPurchaseId(a.paymentId)?void 0:a.paymentId;let c=-1;for(let d=this.pending.length-1;0<=d;--d){const e=this.pending[d];if(b&&e.paymentId===b)return d;-1!==c||e.productId!==a.productId||e.paymentId&&b||(c=d)}return c};PaymentsManager.prototype.removePendingPurchaseContext=function(a){a=this.indexOfPendingPurchaseContext(a);-1!==a&&(this.pending.splice(a,1),this.save())};
PaymentsManager.prototype.findPendingPurchaseContext=function(a){a=this.indexOfPendingPurchaseContext(a);if(-1!==a)return this.pending[a]};PaymentsManager.prototype.getPaymentContext=function(a){return a.context?a.context:(a=this.findPendingPurchaseContext(a))&&a.context};PaymentsManager.prototype.isConsumed=function(a){return a&&this.consumed.includes(a)};
PaymentsManager.prototype.consume=function(a,b){b=b||function(){};const c=a.restore;this._consumeInner(a,d=>{const e=connector.payments.getPlugin();var f=connector.payments.getProduct(a.productId);f={purchase:a,product:f};d?(e.bus.trigger("error:consume",d),b()):(e.bus.trigger("consume",f),b(f))});c&&this.restoreThrottled()};
PaymentsManager.prototype._consumeInner=function(a,b){a.state=a.restore?4:2;delete a.restore;b=connector.utils.once(b);a.paymentId&&!this.consumed.includes(a.paymentId)&&(this.removePendingPurchaseContext(a),this.consumed.push(a.paymentId),this.save());const c=connector.payments.getProduct(a.productId);"nonConsumable"===c.type&&connector.payments.oneOf(connector.SAMSUNG)?b(ERRORS.CONSUME.UNKNOWN):connector.payments.getPlugin().consume(a,b);"subscription"===c.type||connector.payments.getPlugin()instanceof
RestPayments||(b=`/payments/add/${connector.info.source}/${encodeURIComponent(connector.platform.getUserID())}`,connector.payments.oneOf(connector.IAP)&&delete a.payload.receipt,connector.config.payApiURL&&!connector.config.norest&&(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(d=>{connector.payments.getPlugin().bus.trigger("stream:error",`Error adding payments ${d.status} ${d.errorMessage} ${JSON.stringify(a)}`)}))};
PaymentsManager.prototype.localizeProduct=function(a){if(!a)return a;a=connector.utils.clone(a,!0);a.title=void 0!==a.title[connector.info.language]?a.title[connector.info.language]:a.title.en;a.description=void 0!==a.description[connector.info.language]?a.description[connector.info.language]:a.description.en;return a};PaymentsManager.prototype.getLocalizedProduct=function(a){a=connector.payments.getPlugin().getProduct(a);return this.localizeProduct(a)};
PaymentsManager.prototype.isLoginRequired=function(){return connector.payments.oneOf(connector.XSOLLA)&&connector.platform.oneOf(connector.CRAZY)?!0:!connector.payments.oneOf(connector.MICROSOFT,connector.PLINGA,connector.IAP,connector.RUSTORE,connector.ONESTORE,connector.YANDEX,connector.TEST,connector.YOOKASSA,connector.ROBOKASSA,connector.XSOLLA)};
PaymentsManager.prototype.purchase=function(a,b){a=a||{};this._purchaseInner(a,(c,d,e)=>{const f=connector.payments.getPlugin();if(c){f.bus.trigger("error:purchase",c,a);const g=connector.payments.getProduct(a.id||a.tag)||{};e={productId:g.itemId,textPrice:g.textPrice,method:f.pluginName,error:e&&void 0!==e.error?String(e.error):void 0,details:e&&e.message?{raw:connector.utils.stringify(e.message).substring(0,200)}:void 0};c===ERRORS.PURCHASE.CANCEL?connector.metrics.logEvent(connector.EVENTS.STATS.PAYMENTS_CANCEL,
e):connector.metrics.logEvent(connector.EVENTS.STATS.PAYMENTS_ERROR+c,e)}else f.bus.trigger("purchase",d),this.logPurchase(d.purchase);b(d)})};
PaymentsManager.prototype.logPurchase=function(a){const b=a.paymentId;if(!b||!this.logged.includes(b)){var c=connector.payments.getPlugin().getProduct(a.productId);connector.config.manualLogPayments||connector.metrics.logEvent(connector.EVENTS.STATS.PAYMENTS,{productId:c.itemId,price:a.realPrice,textPrice:`${a.price} ${a.currency}`,paymentId:a.paymentId,episode:-1,level:-1});connector._predictionManager.processPrediction(connector.EVENTS.PREDICTIONS.PAYMENTS,a.realPrice);connector.metrics.logEvent(connector.EVENTS.STATS.PURCHASE);
var d=a.price,e=a.currency;connector.payments.isVirtualCurrency()&&(d=a.realPrice,e="USD");connector.conversions.trackPurchase(c,a,{transactionId:a.paymentId,price:d,currency:e});connector.conversions.trackEvent(connector.EVENTS.CONVERSIONS.PAYMENT,{value:a.realPrice,nickname:"d180a_payments,d7a_payments,day7_payment,d14a_payments,d30a_payments"});b&&(this.logged.push(b),this.save())}};
PaymentsManager.prototype.getVirtualCurrencyUSDCoef=function(a){const b=connector.VIRTUAL_EXCHANGE_RATES[a];a=connector.VIRTUAL_CURRENCY_UNIT_VALUE[a];return b&&a?b*(void 0!==a.usd?a.usd:a.rub/connector.EXCHANGE_RATES.RUB):1};PaymentsManager.prototype.calcRealUSDPrice=function(a){var b=a.currency;const c=a.price;a=a.priceUSD;return connector.payments.isVirtualCurrency()?Math.round(a*this.getVirtualCurrencyUSDCoef(b)*100)/100:(b=connector.EXCHANGE_RATES[b])&&1!==b&&c!==a?Math.round(c/b*100)/100:a};
PaymentsManager.prototype._purchaseInner=function(a,b){a=a||{};b=connector.utils.once(b);const c=connector.payments.getProduct(a.id||a.tag);if(c&&c.productId){var d,e;if(this.isPurchaseRunning())b(ERRORS.PURCHASE.ALREADY_OPEN);else if(connector.payments.isConnected())if(connector.payments.isEmailRequired&&!a.email)b(ERRORS.PURCHASE.EMAIL_REQUIRED);else{var f=this.purchasePlayer=new ConnectorActionPlayer([function(g,h){connector.payments.isLoginRequired?connector._socialManager.enforceLogin(k=>{k?
h(k):g()}):g()},function(g,h){console.log("PaymentsManager purchase start",c.productId,c.itemId);e=this.savePendingPurchaseContext(c.productId,a.context);connector.payments.getPlugin().setPurchaseState(PaymentsManager.STATE_PURCHASE);connector.payments.getPlugin().purchase(c,connector.utils.once((k,l,m)=>{d=l;console.log("PaymentsManager purchase result",c.productId,c.itemId,k);console.log("PaymentsManager purchase",JSON.stringify(d));this.attachPendingPaymentId(e,d);a.testRestore&&(k=ERRORS.PURCHASE.UNKNOWN);
k===ERRORS.PURCHASE.CANCEL&&this.removePendingPurchaseContext(e);k!==connector.CODE_SUCCEED||f.isRunning()?k!==connector.CODE_SUCCEED?h(k,m):this.isConsumed(d.paymentId)?(connector.platform.oneOf(connector.AMAZON)&&connector.config.debugMode&&connector.payments.getPlugin().bus.trigger("stream:console",`AMAZON_PAYMENTS Error: purchase already consumed - ${d.paymentId}`),this.consume(d),h()):g():connector.timeouts.setTimeout(()=>this.restoreThrottled(),15E3)}),{email:a.email})}.bind(this),function(g,
h){connector.payments.getPlugin().setPurchaseState(PaymentsManager.STATE_VALIDATE);console.log("PaymentsManager validate start",c.productId,c.itemId);connector.payments.getPlugin().validate(d,k=>{console.log("PaymentsManager validate result",c.productId,c.itemId,k);this.attachPendingPaymentId(e,d);k!==connector.CODE_SUCCEED?(k===connector.CODE_FAILED&&this.consume(d),h(k===connector.CODE_CANCELLED?ERRORS.PURCHASE.PENDING:k)):g()})}.bind(this)]);f.onComplete(()=>{connector.payments.getPlugin().setPurchaseState(void 0)});
f.onSuccess(()=>{b(connector.CODE_SUCCEED,{purchase:d,product:c})});f.onFailure((g,h)=>{g=g||ERRORS.PURCHASE.UNKNOWN;b(g,void 0,h)});f.play()}else b(ERRORS.NOT_CONNECTED)}else b(ERRORS.PURCHASE.PRODUCT_NOT_FOUND)};PaymentsManager.prototype.isPurchaseRunning=function(){return this.purchasePlayer&&this.purchasePlayer.isRunning()};PaymentsManager.prototype.isRestoreRunning=function(){return this.restorePlayer&&this.restorePlayer.isRunning()};
PaymentsManager.prototype.isSubscriptionsAvailable=function(){if(connector.platform.oneOf(connector.ANDROID)&&connector.payments.oneOf(connector.YOOKASSA,connector.RUSTORE))return!1;const a=connector.payments.getPlugin();return a.isSubscriptionsAvailable?a.isSubscriptionsAvailable():connector.platform.oneOf(connector.OK,connector.ANDROID,connector.IOS,connector.MACOS,connector.TEST)};PaymentsManager.prototype.stopPurchasePlayer=function(){this.purchasePlayer&&(this.purchasePlayer.stop(),delete this.purchasePlayer)};
PaymentsManager.prototype.stopLoadProductsPlayer=function(){this.loadProductsPlayer&&(this.loadProductsPlayer.stop(),delete this.loadProductsPlayer)};
PaymentsManager.prototype.tryLoadProducts=function(){console.log("[connector] Try load products");if(connector.payments.isConnected()&&(!this.loadProductsPlayer||!this.loadProductsPlayer.isRunning())){var a=this.loadProductsPlayer=new ConnectorActionPlayer({actionTimeout:connector.utils.parseInterval("60 seconds"),actions:[(b,c)=>{console.log("[connector] Start load products");connector.payments.getPlugin().loadProducts(d=>{console.log("[connector] Load products:",d);d===connector.CODE_SUCCEED?b():
c()})},(b,c)=>{connector.payments.getPlugin().loadSubscriptions(d=>{d===connector.CODE_SUCCEED?(this.restoreThrottled(),b()):c()})},function(b,c){connector.payments.getPlugin().loadSubscriptionsTokens(d=>{d===connector.CODE_SUCCEED?b():c()})}]});a.onFailure(()=>{connector.payments.getPlugin().bus.trigger("failedTryLoadProducts")});a.play()}};PaymentsManager.STATE_PURCHASE="purchase";PaymentsManager.STATE_VALIDATE="validate";PaymentsManager.PENDING_STORAGE_LIMIT=30;
PaymentsManager.CONSUMED_STORAGE_LIMIT=30;PaymentsManager.LOGGED_STORAGE_LIMIT=30;const EVENTS={STATS:{REGISTERED:"registered",TRANSIT:"transit",DAU:"dau",MAU:"mau",RETENTION_1:"retention_1",RETENTION_2:"retention_2",RETENTION_3:"retention_3",RETENTION_7:"retention_7",RETENTION_14:"retention_14",RETENTION_30:"retention_30",ACTIVE_TIME:"atime",SESSION_TIME:"stime",PAYMENTS:"c_payments",PAYMENTS_ERROR:"c_payments_error_",PAYMENTS_CANCEL:"c_payments_cancel",PURCHASE:"c_purchase",PAYMENTS_MISSING_PRODUCTS_RECOVERED:"payments_missing_products_recovered-",SAMSUNG_LOAD_PRODUCTS:"samsung_load_products",
SAMSUNG_LOAD_PRODUCTS_SUCCESS:"samsung_load_products_success",SAMSUNG_LOAD_PRODUCTS_FAILURE:"samsung_load_products_failure",INSTANT_PAYMENT:"instant_payment-",INSTANT_PAYMENT_DISABLED_READY:"instant_payment-disabled_ready",INSTANT_SUBSCRIPTION_SUPPORTED:"instant_subscription_supported",CONNECTOR_VERSION:"connector_version_",CONNECTOR_INITIALIZE:"connector_initialize",ERROR_AMOUNT:"error_amount",UPDATE_DEVICE_ID:"update_device_id"},ADS:{START:"ad_start_",FINISH:"ad_finish_",CLOSED:"ad_closed_",TYPE_COST:"adcost-",
AD_UNEXPECTED_PAID:"adunexpectedpaid-",ERROR_REWARDED:"ad_error_r",ERROR_INTERSTITIAL:"ad_error_i"},CONVERSIONS:{VISIT:"visit",LEVEL_REACH:"levelreach",LEVEL_UP:"levelup",PAYMENT:"payment",SESSION_TIME:"sessiontime",EARN_SOFT:"earnsoft",EARN_HARD:"earnhard"},CLOUD_STORAGE:{CONNECT:"cloud_connect-start",CONNECT_RESULT:"cloud_connect-",CONNECT_SUCCESS:"cloud_connect-success",LOAD:"cloud_load",LOAD_SUCCESS:"cloud_load_success",SAVE:"cloud_save",SAVE_SUCCESS:"cloud_save_success",DATA_SIZE_BUCKET:"cloud_data_size_bucket-",
RESOLVE:"cloud_resolve-",RESOLVE_INITIALIZE:"cloud_resolve_init-",RESOLVE_DISABLE:"cloud_resolve_disable-",RESOLVE_EQUALS_DATA:"cloud_resolve-equalsdata",CONFLICT:"cloud_conflict",CONFLICT_RESOLVED:"cloud_conflict_resolved"},SYNC_STORAGE:{LOAD:"sync_load",LOAD_SUCCESS:"sync_load_success",SAVE:"sync_save",SAVE_SUCCESS:"sync_save_success",SAVE_SESSION:"sync_save_session",SAVE_SESSION_SUCCESS:"sync_save_session_success",DATA_SIZE_BUCKET:"sync_data_size_bucket-",RESOLVE:"sync_resolve-"},PREDICTIONS:{PAYMENTS:[{conversion_window:1,
accumulate:"sum"},{conversion_window:3,accumulate:"sum"},{conversion_window:7,accumulate:"sum"},{conversion_window:14,accumulate:"sum"},{conversion_window:30,accumulate:"sum"},{conversion_window:90,accumulate:"sum"},{conversion_window:180,accumulate:"sum"},{conversion_window:365,accumulate:"sum"}],AD_REVENUE:[{conversion_window:1,accumulate:"sum"},{conversion_window:3,accumulate:"sum"},{conversion_window:7,accumulate:"sum"},{conversion_window:14,accumulate:"sum"},{conversion_window:30,accumulate:"sum"},
{conversion_window:90,accumulate:"sum"},{conversion_window:180,accumulate:"sum"},{conversion_window:365,accumulate:"sum"}],AD_REWARDED:[{conversion_window:1,accumulate:"count"},{conversion_window:3,accumulate:"count"},{conversion_window:7,accumulate:"count"}],AD_INTERSTITIAL:[{conversion_window:1,accumulate:"count"},{conversion_window:3,accumulate:"count"},{conversion_window:7,accumulate:"count"}]}};"undefined"===typeof connector&&(module.exports=EVENTS);const Metrics=function(){this.batch=void 0;this.batches=[];this.flushThrottled=connector.utils.timeredThrottle(connector.utils.parseInterval("10 seconds"),()=>this.flush());this.addBatch=connector.utils.accumulate(0,()=>this._addBatch());this.sendEvents=connector.utils.accumulate(0,()=>this._sendEvents());this.start=connector.utils.once(()=>this._start());this.bus=new ConnectorEventEmitter};
Metrics.prototype._start=function(){this.visited===this.registered&&(this.onStartDay(),this.onStartSession());this._onActivity();connector.platform.on("pause",()=>{this._accumulateActiveTime();this.lastTick=void 0;this.save()});this.lastTick=connector.platform.isPaused?void 0:Date.now();connector.timeouts.setInterval(()=>this._accumulateActiveTime(),connector.utils.parseInterval(Metrics.ACTIVE_TIME_TICK));connector.timeouts.setInterval(()=>this.flushThrottled(),connector.utils.parseInterval(Metrics.FLUSH_INTERVAL));
this.flushThrottled();connector.timeouts.setInterval(()=>this.sendEvents(),connector.utils.parseInterval(Metrics.SEND_EVENTS_INTERVAL));this.sendEvents();for(const a of[5,10,15,30,60])connector.timeouts.setTimeout(()=>{connector.conversions.trackEvent(connector.EVENTS.CONVERSIONS.SESSION_TIME+a)},6E4*a)};
Metrics.prototype.load=function(a){let b=connector.dataLoader.load(SimpleDataLoader.TYPES.METRICS);const c=Date.now();a?b={registered:c,visited:c,session:0}:b||(b={registered:Date.now()-26784E5,visited:Date.now()-864E5});void 0===b.session&&(b.session=10);this.registered=b.registered;this.visited=b.visited;this.session=b.session;this.sessionStart=b.sessionStart||c;this.activeTime=b.timeSpent||b.activeTime||0;this.activeMs=b.activeMs||0;this.lastTick=this.lastInput=c;this.channel=b.channel||"";this.baseParameters=
b.baseParameters||{};this.lastReportMau=b.lastReportMau||0;this.lastReportDeviceId=b.lastReportDeviceId;this.batches=b.batches||[];a=b.events||{};for(const [d,e]of Object.entries(a))this.logEvent(d,e)};
Metrics.prototype.save=function(){connector.dataLoader.save(SimpleDataLoader.TYPES.METRICS,{registered:this.registered,visited:this.visited,session:this.session,activeTime:this.activeTime,activeMs:this.activeMs,sessionStart:this.sessionStart,channel:this.channel,baseParameters:this.baseParameters||{},lastReportMau:this.lastReportMau,lastReportDeviceId:this.lastReportDeviceId,batches:this.batches})};Metrics.prototype.on=function(a,b){return this.bus.on(a,b)};
Metrics.prototype.setRegistered=function(a){this.registered=a;10<this.getDaysSinceRegistration()&&(this.session=Math.max(this.session,10));this.save()};Metrics.prototype.setVisited=function(a){this.visited!==a&&(this.sessionStart=Date.now());this.visited=a;this.save()};Metrics.prototype.setChannel=function(a){this.channel=a;this.save()};
Metrics.prototype._onActivity=function(){const a=Date.now(),b=this.getDaysSinceRegistration(this.visited)===this.getDaysSinceRegistration(),c=a-this.visited<connector.utils.parseInterval(Metrics.SESSION_TIMEOUT);b&&c||this.flush();b||(this.onFinishDay(this.visited),this.onStartDay());c||(this.onFinishSession(),this.onStartSession());this.visited=a;this.bus.trigger("updateVisited",this.visited);this.save()};Metrics.prototype.registerInput=function(){this.lastInput=Date.now()};
Metrics.prototype._accumulateActiveTime=function(){var a=Date.now(),b=this.lastTick;this.lastTick=a;void 0!==b&&(b=a-b,0>=b||b>connector.utils.parseInterval(Metrics.MAX_ENGAGED_CHUNK)||a-this.lastInput>connector.utils.parseInterval(Metrics.AFK_TIMEOUT)||(this.activeMs+=b,a=Math.floor(this.activeMs/6E4),0<a&&(this.activeMs-=6E4*a,this._addActiveTime(a))))};Metrics.prototype._addActiveTime=function(a){this._onActivity();this.activeTime+=a;this.bus.trigger("updateTimeIncrement");this.save()};
Metrics.prototype.flush=function(){const a=this.getDayStart(this.visited);this.activeTime&&(this.logEvent(connector.EVENTS.STATS.ACTIVE_TIME,{value:this.activeTime,event:a}),this.logEvent(connector.EVENTS.STATS.SESSION_TIME,{value:this.activeTime,event:this.sessionStart}));this.bus.trigger("flush",{sessionStart:this.sessionStart,session:this.session,dayStart:a,activeTime:this.activeTime});this.activeTime=0;this.save()};Metrics.prototype.onFinishDay=function(a){this.bus.trigger("finishDay",{date:this.getDayStart(a)})};
Metrics.prototype.onStartDay=function(){var a=this.getDaysSinceRegistration();this.logEvent(connector.EVENTS.STATS.DAU);this.logEvent(connector.EVENTS.STATS.CONNECTOR_VERSION+connector.version);(this.lastReportMau||0)+connector.utils.parseInterval("30 day")<Date.now()&&(this.logEvent(connector.EVENTS.STATS.MAU),this.lastReportMau=Date.now());!connector.info.deviceID||0!==a%10&&this.lastReportDeviceId===connector.info.deviceID||(this.logEvent(connector.EVENTS.STATS.UPDATE_DEVICE_ID,{itemId:connector.info.deviceID}),
this.lastReportDeviceId=connector.info.deviceID);this.save();this.logEvent(`${connector.EVENTS.STATS.ACTIVE_TIME}_count`,{event:this.getDayStart()});0===a&&(this.logEvent(connector.EVENTS.STATS.REGISTERED,{conversion:!0}),this.logEvent(connector.EVENTS.STATS.TRANSIT,{conversion:!0}),connector.timeouts.setTimeout(()=>{this.logEvent(connector.EVENTS.STATS.TRANSIT,{value:-1,conversion:!0})},connector.utils.parseInterval("5 minutes")),connector._predictionManager.logDay1Dau());(a=connector.EVENTS.STATS[`RETENTION_${a}`])&&
this.logEvent(a,{event:this.registered,conversion:!0});connector.conversions.trackEvent(connector.EVENTS.CONVERSIONS.VISIT,{nickname:"d180a_visit,d7a_visit"});this.bus.trigger("startDay")};Metrics.prototype.onFinishSession=function(){this.bus.trigger("finishSession",{session:this.session});this.session++};Metrics.prototype.onStartSession=function(){this.sessionStart=Date.now();this.logEvent(`${connector.EVENTS.STATS.SESSION_TIME}_count`,{event:this.sessionStart});this.bus.trigger("startSession",{session:this.session})};
Metrics.prototype.getDaysSinceRegistration=function(a){return Math.floor(((a||Date.now())-this.registered)/1E3/24/60/60)};Metrics.prototype.getDayStart=function(a){a=this.getDaysSinceRegistration(a);return this.registered+connector.utils.parseInterval("1 day")*a};
Metrics.prototype.logEvent=function(a,b={}){connector.config.metricsApiURL&&!connector.config.norest&&(50<a.length&&(console.error(`[connector] Event name length is more than 50 characters: ${a}`),a=a.substring(0,50)),this.batch=this.batch||{names:[],params:[]},this.batch.names.push(a),this.batch.params.push(b),this.addBatch(),(Metrics.IMPORTANT_EVENTS.includes(a)||0===this.session)&&this.sendEvents())};
Metrics.prototype._addBatch=function(){const a=this.batch;this.batch=void 0;const b=a.names.join(",");console.log(`Sending events - ${b}`);const c=this.getBaseParameters();c.events=b;c.params=a.params;c.event=Date.now();this.batches.push(c);this.save();100<=this.batches.reduce((d,e)=>d+e.params.length,0)&&this.sendEvents()};
Metrics.prototype._sendEvents=function(){const a=this.batches;0!==a.length&&((function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{console.log("[connector] Failed to send metrics",a)}),this.batches=[],this.save())};Metrics.prototype.getBaseParameters=function(){return{...this.baseParameters,id:connector.platform.getUserID(),source:connector.info.source,registered:this.registered,channel:this.channel,language:connector.info.language,platform:connector.info.platform}};
Metrics.prototype.setBaseParameters=function(a){this.baseParameters=a;this.save()};Metrics.SESSION_TIMEOUT="1 hour";Metrics.FLUSH_INTERVAL="5 minutes";Metrics.SEND_EVENTS_INTERVAL="1 minute";Metrics.ACTIVE_TIME_TICK="10 seconds";Metrics.MAX_ENGAGED_CHUNK="1 minute";Metrics.AFK_TIMEOUT="3 minutes";Metrics.IMPORTANT_EVENTS=[EVENTS.STATS.PAYMENTS];const PredictionManager=function(){this.load();this.initPredictionsEvents(connector.EVENTS.PREDICTIONS)};PredictionManager.prototype.load=function(){const a=connector.dataLoader.load(SimpleDataLoader.TYPES.MULTIPLE_PREDICTIONS_INFO)||connector.dataLoader.load(SimpleDataLoader.TYPES.MULTIPLE_CONVERSIONS_INFO)||{};this.events=a.events||a};PredictionManager.prototype.save=function(){connector.dataLoader.save(SimpleDataLoader.TYPES.MULTIPLE_PREDICTIONS_INFO,this.getData())};
PredictionManager.prototype.getData=function(){return{events:this.events}};
PredictionManager.prototype.processPrediction=function(a,b){if(Array.isArray(a))a.forEach(function(d){this.processPrediction(d,b)},this);else if(!(connector.metrics.getDaysSinceRegistration()>=a.conversion_window)){var c=`d${a.conversion_window}`;a.reach&&a.reach.includes(b)&&this.logReachEvent(`${c}r_${a.name}_${b}`);a.accumulate&&(this.logReachEvent(`${c}a_${a.name}#`),this.logAccumulateEvent(`${c}a_${a.name}`,"count"===a.accumulate?1:b))}};
PredictionManager.prototype.logReachEvent=function(a){this.events[a]||(this.events[a]=1,this.save(),connector.metrics.logEvent(a,{event:connector._metrics.registered,channel:connector._metrics.channel,value:1,conversion:!0}))};PredictionManager.prototype.logAccumulateEvent=function(a,b){connector.metrics.logEvent(a,{event:connector._metrics.registered,channel:connector._metrics.channel,value:b,conversion:!0})};
PredictionManager.prototype.logDay1Dau=function(){connector.platform.oneOf(connector.MICROSOFT)&&connector._metrics.channel&&connector.platform.getPlugin().bus.trigger("stream:console","MICROSOFT_CHANNEL",`${connector.config.name} ${connector.platform.getUserID()} ${connector._metrics.channel} trigger d1_dau`);connector.metrics.logEvent("d1_dau",{event:connector._metrics.registered,channel:connector._metrics.channel,value:1,conversion:!0})};
PredictionManager.prototype.initPredictionsEvents=function(a){const b=(c,d)=>{Array.isArray(c)?c.forEach(e=>b(e,d)):c&&"object"===typeof c&&(c.name=d)};for(const [c,d]of Object.entries(a))a=c.toLowerCase().replace(/_/g,""),b(d,a)};connector.sdk=new SdkManager;connector.player=PlayerInterface();connector.info=InfoInterface();connector.platform=PlatformInterface();connector.social=SocialInterface();connector.payments=PaymentsInterface();connector.ads=AdsInterface();connector.storage=StorageInterface();connector.conversions=ConversionsInterface();connector.metrics=MetricsInterface();connector.cloudStorage=CloudStorageInterface();connector._playerManager=new PlayerManager;connector._platformStorage=new PlatformStorage;
connector.onNativeEvent=function(a,b){const c=connector.platform.getPlugin();c&&c.nativeEvent(a,b)};connector.notifyActive=function(){this.payments.notifyActive();this.social.notifyActive();this._metrics.registerInput()};connector.EVENTS=EVENTS;
connector.initialize=function(){connector.config=Object.assign({},window.CONNECTOR_CONFIG,{projectId:document.ccConfig.name||'garden',source:'offline',norest:true,paymentsDisabled:true,cloudStorage:false,platformsync:false,migrateLocalStorage:false,manualStartMetrics:true,disableReconnect:true,hybrid:false});if(document.body)connector._initialize();else document.addEventListener('DOMContentLoaded',()=>connector._initialize(),{once:true});};
connector.calcBaseUrl=function(){return this.config.payApiURL.substring(0,this.config.payApiURL.lastIndexOf("/")+1)};
connector._loadConfig=function(a,b,c={}){const d=void 0!==c.attempt?c.attempt:1,e=void 0!==c.attempts?c.attempts:1;a.startsWith("remoteconfig://")&&(a=a.replace("remoteconfig://",`${connector.config.remoteConfigURL||""}/`));const f=()=>connector._loadConfig(a,b,{...c,attempt:d+1});(function(f){if(typeof f==="function")f(undefined,{errorMessage:"This feature is unavailable in the local edition",offline:true});})((g,h)=>{if(!g||h)d<e?(console.log(`[connector] failed to load ${a}, retry ${d+1}/${e}`),setTimeout(f,1E3)):b();else{try{g=JSON.parse(g)}catch(k){console.error("failed to parse",a,k);b();return}b(g)}})};
connector._initialize=function(){this.dataLoader=new SimpleDataLoader;Info.initialize();connector._cloudStorage=new CloudStorage;const a=new (connector.platform._detectPlugin());connector.platform._installPlugin(a);connector.timeouts=new ConnectorTimeouts;this._metrics=new Metrics;(new ConnectorActionPlayer([b=>{window.connectorInitStarted=!0;window.onConnectorInitStart&&setTimeout(window.onConnectorInitStart,0);b()},b=>a.initialize(b),b=>{connector.platform.connect();SimpleDataLoader.InitTypes();
b()},b=>{const c=connector.dataLoader.localStorage;c.initialize?c.initialize(b):b()},b=>connector._cloudStorage.initialize(b)])).play(()=>{connector.config.migrateLocalStorage&&SimpleDataLoader.Migrate();var b=a.loadUserId();this._predictionManager=new PredictionManager;this._metrics.load(b);this._conversions=new Conversions;this._countryManager=new CountryManager;this._paymentsManager=new PaymentsManager;this._adsManager=new AdsManager;this._socialManager=new SocialManager;this._platformStorage.start();
(b=connector.social._detectPlugin())&&connector.social._installPlugin(new b);(b=connector.payments._detectPlugin())&&connector.payments._installPlugin(new b);(b=connector.ads._detectPlugin())&&connector.ads._installPlugin(new b);connector.notifications&&connector.notifications.initialize();connector.synchronizer&&(connector.synchronizer.initialize(),connector.synchronizer.connect());window.connectorInited=!0;window.onConnectorInit&&setTimeout(window.onConnectorInit,0);connector.social.connect();connector.payments.connect();
connector.ads.connect();a.subscribeToBrowserEvents();connector.config.manualStartMetrics||connector.platform.whenConnected(connector.utils.waitNoMore(1E4,()=>{this._metrics.start()}));connector.metrics.logEvent(connector.EVENTS.STATS.CONNECTOR_INITIALIZE);const c=connector.utils.timeredThrottle(1E4,()=>{connector.config.disableReconnect||(connector.platform.connect(),connector.social.connect(),connector.payments.connect(),connector.ads.connect())});connector.platform.on("resume",c);connector.timeouts.setInterval(c,
connector.utils.parseInterval("1 minute"));["20 seconds","40 seconds","90 seconds"].forEach(d=>{connector.timeouts.setTimeout(c,connector.utils.parseInterval(d))})})};const BasePlugin=function(a,b,c){c=c||{};this.bus=new ConnectorEventEmitter;this.pluginType=a;this.pluginName=b;this.sdk=c.sdk;this.status=void 0};BasePlugin.prototype.onCreated=function(){};BasePlugin.prototype.onRemoved=function(){};BasePlugin.prototype.canConnect=function(){return!0};
BasePlugin.prototype.connect=function(){if(!this.connecting&&!this.isConnected()&&this.canConnect()){this.connecting=!0;console.log("[connector] connecting",this.pluginType,this.pluginName);var a=this._listConnectTasks(),b=connector.STATUS_CONNECTED,c,d=connector.utils.wait(a.length,()=>{this.connecting=!1;this.setStatus(b,c);if(b===connector.STATUS_CONNECTED)this.onConnected()}),e=function(f,g){f=f||connector.STATUS_DISCONNECTED;f!==connector.STATUS_CONNECTED&&(b=f);c=g||c;d(b,c)};a.forEach(f=>{f(e)})}};
BasePlugin.prototype.loadSdkAndConnect=function(a){this.sdk?(this.sdkEventHandler||(this.sdkEventHandler=connector.sdk.on(this.sdk,this.onSdkEvent.bind(this))),connector.sdk.loadSdk(this.sdk,b=>{b===connector.CODE_SUCCEED?this._connect(connector.utils.waitNoMore(BasePlugin.CONNECT_TIMEOUT,a)):a(connector.STATUS_DISCONNECTED)})):this._connect(connector.utils.waitNoMore(BasePlugin.CONNECT_TIMEOUT,a))};BasePlugin.prototype._listConnectTasks=function(){return[this.loadSdkAndConnect.bind(this)]};
BasePlugin.prototype._connect=function(a){a(connector.STATUS_CONNECTED)};BasePlugin.prototype.onConnected=function(){};BasePlugin.prototype.disconnect=function(){this.setStatus(connector.STATUS_DISCONNECTED)};
BasePlugin.prototype.setStatus=function(a,b){this.status!==a&&(console.log("[connector] setStatus",this.pluginType,this.pluginName,a),this.status=a,this.status===connector.STATUS_DISCONNECTED&&this.sdkEventHandler&&(this.sdkEventHandler.clear(),this.sdkEventHandler=void 0),this.bus.trigger("changeStatus",this.status,b))};BasePlugin.prototype.isConnected=function(){return this.status===connector.STATUS_CONNECTED};
BasePlugin.prototype.whenConnected=function(a){if(this.isConnected())a();else{const b=this.bus.on("changeStatus",c=>{c===connector.STATUS_CONNECTED&&(b.clear(),a())});return b}};BasePlugin.prototype.onSdkEvent=function(){};BasePlugin.prototype.oneOf=function(a,...b){a=Array.isArray(a)?a:[a,...b];if(a.some(c=>!c||"string"!==typeof c))throw"Invalid plugin name";return a.includes(this.pluginName)};BasePlugin.CONNECT_TIMEOUT=connector.utils.parseInterval("10 seconds");const Social=function(a,b){BasePlugin.call(this,"social",a,b)};Social.prototype=Object.create(BasePlugin.prototype);Social.prototype.constructor=Social;Social.prototype.isLoggedIn=function(){return!1};Social.prototype._getUserID=function(){};Social.prototype.getAccessToken=function(){};Social.prototype.isShareSupported=function(){return!1};Social.prototype.isInviteSupported=function(){return!1};Social.prototype.isSupportsNativeRequest=function(){return!1};
Social.prototype.isSupportsNativeCommunityJoin=function(){return!1};Social.prototype.canJoinCommunity=function(a){a(!1)};Social.prototype.onConnected=function(){if(this.isLoggedIn())this.onLogin();else{const a=connector.info.deviceID;a&&connector.platform.oneOf(connector.MICROSOFT,connector.RUSTORE,connector.G5WINDOWS,connector.MSIX)&&connector.platform.setUserID(a)}};
Social.prototype.onLogin=function(){const a=connector.platform.getUserID(),b=this._getUserID();console.log("Social.onLogin",a,b);b&&(connector.platform.setUserID(b),this.deleteAllRequests(),connector._playerManager.refresh(),this.bus.trigger("login",{oldId:a,newId:b}))};Social.prototype.login=function(a,b){console.log("Social.login");this._login(()=>{this.isLoggedIn()?(console.log("Social.login success"),this.onLogin(),a(!0)):(console.log("Social.login fail"),a(!1))},b)};Social.prototype._login=function(a){a()};
Social.prototype.logout=function(){};Social.prototype.invite=function(a,b){b(connector.CODE_FAILED)};Social.prototype.request=function(a,b){b(connector.CODE_FAILED)};Social.prototype.share=function(a,b){b(connector.CODE_FAILED)};Social.prototype.listFriends=function(a){connector.social.isConnected()?this._listFriends((b,c)=>{b===connector.CODE_SUCCEED&&c.forEach(d=>{d.inApp=!0});a(b,c)}):a(connector.CODE_FAILED)};Social.prototype._listFriends=function(a){a(connector.CODE_FAILED)};
Social.prototype.canCheckInvitees=function(){return this._listFriends!==Social.prototype._listFriends};Social.prototype.listInvitableFriends=function(a){connector.social.isConnected()?this._listInvitableFriends((b,c)=>{b===connector.CODE_SUCCEED&&c.forEach(d=>{d.inApp=!1});a(b,c)}):a(connector.CODE_FAILED)};Social.prototype._listInvitableFriends=function(a){a(connector.CODE_FAILED)};Social.prototype.hasLeaderBoard=function(){return!1};Social.prototype._aboutMe=function(a){this.aboutUser("me",a)};
Social.prototype.aboutUser=function(a,b){connector.social.isConnected()?this._aboutUser(a,b):b(connector.CODE_FAILED)};Social.prototype._aboutUser=function(a,b){b(connector.CODE_FAILED)};Social.prototype.deleteAllRequests=function(){};Social.prototype.setNotifyActiveListener=function(a){this.notifyActiveListener=a};Social.prototype.notifyActive=function(){this.notifyActiveListener&&(console.log("Social notifyActive"),this.notifyActiveListener(),delete this.notifyActiveListener)};
Social.prepareId=function(a){return`${a}`};Social.prototype.listAvailable=function(){return[this.pluginName]};Social.MAX_INVITE_RANDOM_FRIENDS=10;const SocialManager=function(){};SocialManager.prototype.listShareChannels=function(){return Object.keys(SocialManager.SHARE_CHANNELS).filter(a=>SocialManager.SHARE_CHANNELS[a].isAvailable())};
SocialManager.prototype.share=function(a,b){const c=function(f){f=f===connector.CODE_SUCCEED;connector.platform.getPlugin().bus.trigger("share",f,a.channel);b(f)},d=this.listShareChannels();if(a.channel&&!d.includes(a.channel))console.error(`[connector] provided share channel not available - ${a.channel}`),c(connector.CODE_FAILED);else if(a.channel=a.channel||d[0],a.channel){a=this.formatShareData(a);var e=connector.platform.oneOf(connector.INSTANT,connector.TEST);(new ConnectorActionPlayer([function(f){SocialManager.SHARE_CHANNELS[a.channel].needsLogin?
this.enforceLogin(g=>{g?c(g):f()}):f()}.bind(this),function(f){a.image&&e?connector.utils.loadBase64(a.image,g=>{g?(a.image=g,f()):c(connector.CODE_FAILED)}):f()},function(){connector.platform.getPlugin().bus.trigger("share:start",a.channel);SocialManager.SHARE_CHANNELS[a.channel].share(a,c)}])).play()}else console.error("[connector] no available share channels"),c(connector.CODE_FAILED)};
SocialManager.prototype.enforceLogin=function(a){connector.social.isLoggedIn({strict:!0})?a():connector.social.loginCallback(b=>{b?a():a(ERRORS.PURCHASE.LOGIN_FAILED)})};
SocialManager.prototype.joinCommunity=function(a,b){const c=connector.social.getPlugin(),d=function(e){e=e===connector.CODE_SUCCEED;c.bus.trigger("joinCommunity",e);a&&a(e)};connector.social.isSupportsNativeCommunityJoin?connector.social.isConnected()?c.canJoinCommunity(e=>{e?c.joinCommunity(d):b?d(connector.CODE_FAILED):(this.openCommunityUrl(),d(connector.CODE_SUCCEED))}):d(connector.CODE_FAILED):b?d(connector.CODE_FAILED):(this.openCommunityUrl(),d(connector.CODE_SUCCEED))};
SocialManager.prototype.openCommunityUrl=function(){connector.platform.openUrl(Platform.getGroupUrl())};SocialManager.prototype.request=function(a,b){const c=connector.social.getPlugin(),d=function(e,f){const g=e===connector.CODE_SUCCEED;e&&c.bus.trigger("error:request",e);c.bus.trigger("request",g);b(e,f)};connector.social.isConnected()?connector.social.isSupportsNativeRequest?c.request(a,(e,f)=>{d(e,f)}):d(connector.CODE_FAILED):d(connector.CODE_FAILED)};
SocialManager.prototype.chooseInviteChannel=function(){const a=this.listShareChannels();return a.includes("invite")?"invite":a.length?a[Math.floor(Math.random()*a.length)]:"invite"};
SocialManager.prototype.inviteFriends=function(a,b,c){b=b||function(){};c=c||{};const d=this.chooseInviteChannel(),e=!(!SocialManager.SHARE_CHANNELS[d]||!SocialManager.SHARE_CHANNELS[d].needsLogin);(new ConnectorActionPlayer([function(f,g){e&&c.login?c.login(h=>{h===connector.CODE_SUCCEED?f():(b(!1),g())}):f()},function(f){connector.platform.isExitFullscreenAvailable()?connector.platform.exitFullscreen(f):f()},function(){this.share({...a,channel:d},b)}.bind(this)])).play()};
SocialManager.prototype.checkInvitees=function(a){connector.social.listFriends((b,c)=>{if(b===connector.CODE_SUCCEED&&Array.isArray(c)){var d=String(connector.platform.getUserID());b=c.map(e=>e&&void 0!==e.id&&null!==e.id?String(e.id):"").filter((e,f,g)=>e&&e!==d&&g.indexOf(e)===f);a(connector.CODE_SUCCEED,b)}else a(b===connector.CODE_SUCCEED?connector.CODE_FAILED:b,[])})};
SocialManager.prototype.formatShareData=function(a){a||(a={});a.title=a.title||document.title;a.url=a.url||connector.utils.guessPlatformURL();return a};
SocialManager.SHARE_CHANNELS={shareNative:{isAvailable:function(){const a=connector.platform.getPlugin();return a.isConnected()&&a.isShareSupported()},share:function(a,b){connector.platform.getPlugin().shareNative(a,b)}},share:{needsLogin:!0,isAvailable:function(){const a=connector.social.getPlugin();return a.isConnected()&&a.isShareSupported()},share:function(a,b){connector.social.getPlugin().share(a,b)}},invite:{needsLogin:!0,isAvailable:function(){const a=connector.social.getPlugin();return a.isConnected()&&
a.isInviteSupported()},share:function(a,b){connector.social.getPlugin().invite(a,b)}}};const Platform=function(a,b){BasePlugin.call(this,"platform",a,b);this._pageHidden=this.paused=!1;this._windowFocused=!0;this.callbacks={};this.nativeEventListeners={}};Platform.prototype=Object.create(BasePlugin.prototype);Platform.prototype.constructor=Platform;Platform.prototype.initialize=function(a){this._initialize(a)};Platform.prototype.subscribeToBrowserEvents=function(){this._pageVisibilitySubscribe();this._windowFocusSubscribe();this._safePaddingSubscribe();this._notifyActiveSubscribe()};
Platform.prototype._pageVisibilitySubscribe=function(){document.hidden&&this._togglePageHide(!0);"undefined"!==typeof document.hidden&&["visibilitychange","webkitvisibilitychange"].forEach(a=>{document.addEventListener(a,()=>{this._togglePageHide(document.hidden)},!1)});window.addEventListener("pagehide",()=>{this._togglePageHide(!0)},!1);window.addEventListener("pageshow",()=>{this._togglePageHide(!1)},!1)};
Platform.prototype._togglePageHide=function(a){"undefined"!==typeof document.hidden&&document.hidden&&(a=!0);this._pageHidden!==a&&((this._pageHidden=a)?this.pause():(this._syncWindowFocus(),this.resume()))};Platform.prototype.isPageHidden=function(){return this._pageHidden};Platform.prototype._initialize=function(a){a()};
Platform.prototype._windowFocusSubscribe=function(){connector.info.isMobile||(window.addEventListener("focus",()=>{this._toggleWindowFocus(!0)},!1),window.addEventListener("blur",()=>{this._toggleWindowFocus(!1)},!1),["pointerdown","keydown"].forEach(a=>{document.addEventListener(a,()=>{this._toggleWindowFocus(!0)},!0)}),this._syncWindowFocus())};Platform.prototype._syncWindowFocus=function(){connector.info.isMobile||"function"!==typeof document.hasFocus||document.hasFocus()||this._toggleWindowFocus(!1)};
Platform.prototype._toggleWindowFocus=function(a){this._windowFocused!==a&&(this._windowFocused=a,this.bus.trigger(a?"windowFocus":"windowBlur"))};Platform.prototype._notifyActiveSubscribe=function(){const a=()=>{connector.notifyActive()};document.addEventListener("pointerdown",a,!0);document.addEventListener("keydown",a,!0)};Platform.prototype._safePaddingSubscribe=function(){window.addEventListener("resize",()=>{this._triggerSafePadding()},!1)};
Platform.prototype.setSafePadding=function(a){this.safePadding=a;this._triggerSafePadding()};Platform.prototype._triggerSafePadding=function(){const a=JSON.stringify(this.getSafePadding());this._lastSafePadding!==a&&(this._lastSafePadding=a,this.bus.trigger("updateSafePadding"))};
Platform.getGroupUrl=function(){return "";};Platform.getGameUrl=function(a){return connector.utils.guessPlatformURL({source:a})};
Platform.getRateUrl=function(){switch(connector.info.source){case "test":return connector.utils.guessPlatformURL({source:"android"});case "android":return`market://details?id=${connector.config.android.package}`;case "amazon":return`amzn://apps/android?p=${connector.config.amazon.package}`;case "macos":case "ios":return`itms-apps://itunes.apple.com/app/id${connector.config.ios.id}`}};
Platform.getExternalUrl=function(a){"/"===a[0]&&(a=a.substr(1));return connector.platform.oneOf(connector.INSTANT,connector.TEST)||a.startsWith("http")?a:`${connector.config.deployment}/${a}`};Platform.prototype.openUrl=function(){};Platform.prototype.hasVibration=function(){return"undefined"!==typeof navigator&&"function"===typeof navigator.vibrate&&connector.info.isMobile};
Platform.prototype.vibrate=function(a){"undefined"!==typeof navigator&&"function"===typeof navigator.vibrate&&navigator.vibrate(a.pattern)};Platform.prototype.isShareSupported=function(){return!1};Platform.prototype.isShareCheckBoxAvailable=function(){return!0};Platform.prototype.shareNative=function(a,b){this.callNative("MessagesPlugin.inviteFriends",{title:a.title,message:a.text,link:a.url},b)};
Platform.prototype.loadUserId=function(){this._userID=connector.dataLoader.load(SimpleDataLoader.TYPES.USER_ID);(this.isNewUser=!this._userID)&&this.setUserID(this.generateTmpId());return this.isNewUser};Platform.prototype.setUserID=function(a){if(this._userID!==a){console.log("Platform.setUserID",this._userID,a);var b=this._userID;this._userID=a;connector.dataLoader.save(SimpleDataLoader.TYPES.USER_ID,this._userID);this.bus.trigger("userIdChanged",{oldId:b,newId:a})}};
Platform.prototype.getUserID=function(){return this._userID};Platform.prototype.generateTmpId=function(){return`__${Math.floor(1E15*Math.random())}`};Platform.prototype.canReview=function(){return!1};Platform.prototype.getLocalStoragePrefix=function(){return""};Platform.prototype.hasAudioControls=function(){return!1};Platform.prototype.isFullscreenAvailable=function(){return this.oneOf(connector.DRAUGIEM)&&!!this._getFullscreener()};
Platform.prototype.isExitFullscreenAvailable=function(){return this.oneOf(connector.DRAUGIEM)&&!!this._getFullscreener()};Platform.prototype.toggleFullScreen=function(){if(this._isFullScreen())this.exitFullscreen();else{const a=this._getFullscreener();a&&a()}};
Platform.prototype.exitFullscreen=function(a){this._isFullScreen()?(document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen&&document.mozCancelFullScreen(),a&&setTimeout(a,100)):a&&a()};
Platform.prototype._getFullscreener=function(){const a=document.documentElement,b=a.requestFullscreen||a.webkitRequestFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;if(b)return b.bind(a)};Platform.prototype._isFullScreen=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement||document.mozFullScreenElement};Platform.prototype.isAudioEnabled=function(){};
Platform.prototype.requestReview=function(a){this.isConnected()?this._requestReview(a):a(connector.CODE_FAILED)};Platform.prototype._requestReview=function(a){a(connector.CODE_FAILED)};Platform.prototype.canCreateShortcut=function(){return this.isConnected()?this._canCreateShortcut():!1};Platform.prototype._canCreateShortcut=function(){return!1};Platform.prototype.canCreateShortcutAsync=function(a){this.isConnected()?this._canCreateShortcutAsync(a):a(!1)};
Platform.prototype._canCreateShortcutAsync=function(a){a(this._canCreateShortcut())};Platform.prototype.createShortcut=function(a){a&&a(connector.CODE_FAILED)};Platform.prototype.getShortcutMissionReward=function(a){this.isConnected()?this._getShortcutMissionReward(a):a(!1)};Platform.prototype._getShortcutMissionReward=function(a){a(!1)};Platform.prototype.canStartEntranceMission=function(){return this.isConnected()&&this._canStartEntranceMission()};Platform.prototype._canStartEntranceMission=function(){return!1};
Platform.prototype.startEntranceMission=function(a){a&&a(connector.CODE_FAILED)};Platform.prototype.getEntranceMissionReward=function(a){this.isConnected()?this._getEntranceMissionReward(a):a(!1)};Platform.prototype._getEntranceMissionReward=function(a){a(!1)};Platform.prototype.getAccessToken=function(){};Platform.DecodeWebViewData=function(a){if(a)try{return decodeURIComponent(a)}catch(b){}return a};
Platform.prototype.parsePayload=function(a){this.payloadCallbacks?this.payloadCallbacks.push(a):(this.payloadCallbacks=[a],this._parsePayload(b=>{const c=this.payloadCallbacks;delete this.payloadCallbacks;b=Platform.stripSecretKeys(b);c.forEach(d=>d(b))}))};Platform.SECRET_KEY_REGEXP=/token|secret|sig|key|session|(^|_)(sid|hash)(_|$)/i;Platform.stripSecretKeys=function(a){if(!a||"object"!==typeof a)return a;const b={};Object.keys(a).forEach(c=>{Platform.SECRET_KEY_REGEXP.test(c)||(b[c]=a[c])});return b};
Platform.prototype._parsePayload=function(a){connector.info.isNative?a():a(connector.utils.getRequestParameters())};Platform.prototype.parseOtherWays=function(a){a()};
Platform.prototype.nativeEvent=function(a,b){this.oneOf(connector.RUSTORE,connector.ONESTORE,connector.AMAZON,connector.ANDROID,connector.GPG,connector.DIGITAL,connector.EPICGAMES,connector.IOS,connector.MACOS,connector.MICROSOFT,connector.G5WINDOWS,connector.MSIX)&&(b=(b=Platform.DecodeWebViewData(b))&&JSON.parse(b));console.log(`Platform.nativeEvent ${a}: ${JSON.stringify(b)}`);const c=a.split(".")[0];a=a.split(".")[1];if(this.nativeEventListeners[c])this.nativeEventListeners[c](a,b)};
Platform.prototype.callNative=function(a,b,c){c||"function"!==typeof b||(c=b,b=void 0);this.callbacks[a]&&(console.log(`Platform.callNative - second call to method ${a}`),this.callCallback(a,connector.CODE_FAILED));const d=b||{};d._hasOptions=!!b;d._hasCallback=!!c;this.callbacks[a]=c;this._callNative(a,d)};Platform.prototype._callNative=function(){};
Platform.prototype.callCallback=function(a,b,c){this.oneOf(connector.RUSTORE,connector.ONESTORE,connector.AMAZON,connector.ANDROID,connector.GPG,connector.DIGITAL,connector.EPICGAMES,connector.IOS,connector.MACOS,connector.MICROSOFT,connector.G5WINDOWS,connector.MSIX)&&(c=(c=Platform.DecodeWebViewData(c))?JSON.parse(c):{});console.log(`Platform.callCallback ${a} - ${b} - ${JSON.stringify(c)}`);const d=this.callbacks[a];d&&(delete this.callbacks[a],d(b,c))};
Platform.prototype.isTester=function(){var a=connector.config.testers&&connector.config.testers[connector.info.source];if(!a)return!1;const b=a.ids;a=a.deviceIds;const c=this.getUserID(),d=connector.info.deviceID;return c&&b&&b.includes(c)||d&&a&&a.includes(d)};Platform.prototype.locationReload=function(){connector.ads.closeStickyCallback(connector.utils.waitNoMore(1E3,()=>{window.location.reload()}))};Platform.prototype.isPaused=function(){return this.paused};
Platform.prototype.pause=function(){this.paused||(this.paused=!0,this.bus.trigger("pause"))};Platform.prototype.resume=function(){this.paused&&(this.paused=!1,this.bus.trigger("resume"))};Platform.prototype.canPassPayload=function(){return!1};Platform.CROSSPROMO_PAYLOAD_FIELDS=["promo","crossId","invitedBy","from","payerTier"];Platform.prototype.hasPublisherPlayerId=function(){return!1};Platform.prototype.canSwitchGame=function(){return!1};Platform.prototype.switchGame=function(a){connector.platform.openUrl(a)};
Platform.prototype.getSafePadding=function(){this.safeAreaDiv||(this.safeAreaDiv=document.createElement("div"),this.safeAreaDiv.style.position="absolute",this.safeAreaDiv.style.top="env(safe-area-inset-top)",this.safeAreaDiv.style.bottom="env(safe-area-inset-bottom)",this.safeAreaDiv.style.left="env(safe-area-inset-left)",this.safeAreaDiv.style.right="env(safe-area-inset-right)",document.body.appendChild(this.safeAreaDiv));const a=function(b){return"undefined"!==typeof window.getComputedStyle?parseInt(window.getComputedStyle(this.safeAreaDiv).getPropertyValue(b))||
0:"undefined"!==typeof this.safeAreaDiv.currentStyle?parseInt(this.safeAreaDiv.currentStyle[b])||0:0}.bind(this);return{top:a("top"),bottom:a("bottom"),left:a("left"),right:a("right")}};Platform.prototype.getFrameSize=function(){const a=document.body.getBoundingClientRect();return a.width&&a.height?cc.size(a.width,a.height):cc.size(window.innerWidth,window.innerHeight)};const AdsPlugin=function(a,b){b=b||{};BasePlugin.call(this,"ads",a,b);this.cantLoadInParallel=b.cantLoadInParallel;this.cantLoadAndPlayInParallel=b.cantLoadAndPlayInParallel;this.cantLoadAfterPlay=b.cantLoadAfterPlay;this.customImpressionEvent=b.customImpressionEvent;this.expirationPeriod=b.expirationPeriod;this.cached={};this.cachedTime={};this.cachedErrorTime={};this.cachedErrorCode={};this.loadGen={};this.pendingLoad={};this.playCallbacks={};this.loaderState={};this.videoState={};this.finishTime=
{};this.permissionAsked=!1;AdsPlugin.TYPES.forEach(c=>{this.loaderState[c]=AdsPlugin.LOADER_STATE.IDLE;this.videoState[c]=AdsPlugin.VIDEO_STATE.IDLE})};AdsPlugin.prototype=Object.create(BasePlugin.prototype);AdsPlugin.prototype.constructor=AdsPlugin;AdsPlugin.prototype.canConnect=function(){return this.permissionAsked};AdsPlugin.prototype._listConnectTasks=function(){return[a=>this.loadSdkAndConnect(a),a=>{connector._adsManager.loadECPMConfig();a(connector.STATUS_CONNECTED)}]};
AdsPlugin.prototype.askPermission=function(a){this.permissionAsked?a():this._askPermission(()=>{this.permissionAsked=!0;a()})};AdsPlugin.prototype._askPermission=function(a){a()};AdsPlugin.prototype.onCreated=function(){connector.config.manualPermissions||connector._adsManager.askPermission()};AdsPlugin.prototype.setLoaderState=function(a,b){console.log(this.pluginName,"setLoaderState",a,b);this.loaderState[a]=b;this.bus.trigger(`${a}:refresh`)};
AdsPlugin.prototype.setVideoState=function(a,b){console.log(this.pluginName,"setVideoState",a,b);this.videoState[a]=b;this.bus.trigger("changeVideoState",a,b)};AdsPlugin.prototype.isAnyLoading=function(){for(const a in this.loaderState)if(this.isAdLoading(a))return!0;return!1};AdsPlugin.prototype.whichIsPlaying=function(){for(const a in this.videoState)if(this.videoState[a]===AdsPlugin.VIDEO_STATE.PLAYING)return a};AdsPlugin.prototype.isPlaying=function(a){return this.videoState[a]===AdsPlugin.VIDEO_STATE.PLAYING};
AdsPlugin.prototype._connect=function(a){a(connector.STATUS_CONNECTED)};AdsPlugin.prototype.isStickyAvailable=function(){return!0};AdsPlugin.prototype.isRewardedSupported=function(){return!0};AdsPlugin.prototype.isInterstitialSupported=function(){return!0};AdsPlugin.prototype.isStickySupported=function(){return!1};AdsPlugin.prototype.isNoAdsProductAvailable=function(){return!1};AdsPlugin.prototype.isRewardedConfigured=function(){return!0};AdsPlugin.prototype.isInterstitialConfigured=function(){return!0};
AdsPlugin.prototype.isStickyConfigured=function(){return!0};AdsPlugin.prototype.isAdLoading=function(a){return this.loaderState[a]===AdsPlugin.LOADER_STATE.LOADING};AdsPlugin.prototype.isAdCached=function(a){return this.loaderState[a]===AdsPlugin.LOADER_STATE.READY};AdsPlugin.prototype.isAdRunning=function(a){return this.videoState[a]===AdsPlugin.VIDEO_STATE.PLAYING};AdsPlugin.prototype.isIdle=function(){return AdsPlugin.TYPES.every(function(a){return!this.isAdRunning(a)},this)};
AdsPlugin.prototype.canCache=function(a){if(!this.isConnected()||!connector._adsManager.isAdSupported(a)||this.cantLoadInParallel&&this.isAnyLoading()||this.cantLoadAndPlayInParallel&&this.isAdRunning(a))return!1;const b=this.finishTime[a]||0;return this.cantLoadAfterPlay&&b+AdsPlugin.LOAD_AFTER_PLAY_TIME>Date.now()||this.pendingLoad[a]||(this.cachedErrorTime[a]||0)+AdsPlugin.getLoadErrorTimeout(this.cachedErrorCode[a])>Date.now()?!1:!0};
AdsPlugin.prototype.cacheAd=function(a,b){b=b||function(){};if(this.isAdLoading(a))this.bus.once(`${a}:cached`,b);else this.canCache(a)?this.isAdCached(a)&&!this.isAdExpired(a)?b(connector.CODE_SUCCEED):this.cacheAdInner(a,b):b(connector.CODE_FAILED)};
AdsPlugin.prototype.cacheAdInner=function(a,b){this.setLoaderState(a,AdsPlugin.LOADER_STATE.LOADING);this.bus.trigger(`${a}:caching`,this.pluginName);const c=this.loadGen[a]=(this.loadGen[a]||0)+1;let d=!1,e=!1;const f=setTimeout(()=>{d=!0;this.pendingLoad[a]=!0;this.setLoaderState(a,AdsPlugin.LOADER_STATE.IDLE);this.bus.trigger(`${a}:cached`,AdsPlugin.ERROR_LOADING_TIMEOUT,this.pluginName);b(AdsPlugin.ERROR_LOADING_TIMEOUT)},AdsPlugin.TRY_LOADING_TIMEOUT),g=setTimeout(()=>{this.loadGen[a]++;this.pendingLoad[a]=
!1;this.cachedErrorTime[a]=Date.now();this.cachedErrorCode[a]=AdsPlugin.ERROR_LOADING_ABANDONED;this._abandonAd(a);this.bus.trigger(`${a}:cached`,AdsPlugin.ERROR_LOADING_ABANDONED,this.pluginName)},AdsPlugin.ABANDON_LOADING_TIMEOUT);this._cacheAd(a,(h,k)=>{e||c!==this.loadGen[a]||(e=!0,clearTimeout(f),clearTimeout(g),this.pendingLoad[a]=!1,h===connector.CODE_SUCCEED?(this.cached[a]=k,this.cachedTime[a]=Date.now(),this.cachedErrorTime[a]=void 0,this.setLoaderState(a,AdsPlugin.LOADER_STATE.READY)):
(this.cachedErrorTime[a]=Date.now(),this.cachedErrorCode[a]=h,this.setLoaderState(a,AdsPlugin.LOADER_STATE.IDLE)),this.bus.trigger(`${a}:cached`,h,this.pluginName),d||(d=!0,b(h)))})};AdsPlugin.prototype._cacheAd=function(a,b){b(connector.CODE_SUCCEED,!0)};AdsPlugin.prototype._abandonAd=function(){};AdsPlugin.prototype.isAdExpired=function(){return!1};
AdsPlugin.prototype.consumeCachedAd=function(a){const b=this.cached[a];this.cached[a]=void 0;this.cachedTime[a]=void 0;this.cachedErrorTime[a]=void 0;return b};AdsPlugin.prototype.whenCached=function(a,b){if(this.isAdCached(a))b(connector.CODE_SUCCEED);else if(this.isAdLoading(a)||this.pendingLoad[a])this.bus.once(`${a}:cached`,b);else this.cacheAdInner(a,b)};
AdsPlugin.prototype.playAd=function(a,b){b=b||function(){};const c=this.cachedTime[a]+this.expirationPeriod<=Date.now(),d=this.consumeCachedAd(a);this.setLoaderState(a,AdsPlugin.LOADER_STATE.IDLE);this.setVideoState(a,AdsPlugin.VIDEO_STATE.PLAYING);this.bus.trigger(`${a}:start`,this.pluginName);c&&this.bus.trigger(`${a}:start:expired`,this.pluginName);connector.metrics.logEvent(`${connector.EVENTS.ADS.START+a}_${this.pluginName}`);this.playCallbacks[a]=connector.utils.once(f=>{this.playCallbacks[a]=
void 0;this.finishTime[a]=Date.now();this.setVideoState(a,AdsPlugin.VIDEO_STATE.IDLE);const g=f===connector.CODE_SUCCEED;this.bus.trigger(`${a}:close`,g,this.pluginName);a===AdsPlugin.REWARDED&&g&&this.bus.trigger("rewarded:reward",this.pluginName);c&&this.bus.trigger(`${a}:close:expired`,this.pluginName);b(f)});if(this._testNoCallback)delete this._testNoCallback;else{var e=connector.utils.once(f=>{if(!this.customImpressionEvent&&[connector.CODE_SUCCEED,ERRORS.SHOW_REWARDED.CLOSED_BY_USER,ERRORS.SHOW_INTERSTITIAL.CLOSED_BY_USER].includes(f))this.onImpressionEvent(a);
if(this.playCallbacks[a])this.playCallbacks[a](f)});this._playAd(a,d,f=>{if([ERRORS.SHOW_REWARDED.AD_EXPIRED,ERRORS.SHOW_REWARDED.UNKNOWN,ERRORS.SHOW_REWARDED.NO_ADS,ERRORS.SHOW_INTERSTITIAL.UNKNOWN,ERRORS.SHOW_INTERSTITIAL.NO_ADS].includes(f)){const g=`${f}`.replace("error","e").replace("rewarded","r").replace("interstitial","i");console.log("[connector] Ad error, trying again",f);this.whenCached(a,h=>{console.log("[connector] Ad cached after error result:",h===connector.CODE_SUCCEED);const k=`${h}`.replace("ads_loading_",
"");this.bus.trigger("stream:logs",`ad_retry_c_${g}__${k}`);h===connector.CODE_SUCCEED?(h=this.consumeCachedAd(a),this.setLoaderState(a,AdsPlugin.LOADER_STATE.IDLE),this.setVideoState(a,AdsPlugin.VIDEO_STATE.PLAYING),this._playAd(a,h,l=>{const m=`${l}`.replace("error","e").replace("rewarded","r").replace("interstitial","i");this.bus.trigger("stream:logs",`ad_retry_p_${g}__${m}`);e(l)})):a===AdsPlugin.REWARDED?e(ERRORS.SHOW_REWARDED.NO_ADS):e(ERRORS.SHOW_INTERSTITIAL.NO_ADS)})}else e(f)})}};
AdsPlugin.prototype._playAd=function(a,b,c){c(connector.CODE_SUCCEED)};AdsPlugin.prototype.finishAd=function(a,b){if(this.playCallbacks[a])this.playCallbacks[a](b)};
AdsPlugin.prototype.onImpressionEvent=function(a,b){void 0===b&&(b=this.getECPM(a)/1E3);b&&(this.bus.trigger(`${a}:impression`,b,this.pluginName),connector.metrics.logEvent(connector.EVENTS.ADS.TYPE_COST+a,{value:b}),connector._predictionManager.processPrediction(connector.EVENTS.PREDICTIONS.AD_REVENUE,b),connector.conversions.trackAdRevenue(a,b,{source:this.pluginName}),a===AdsPlugin.REWARDED?connector._predictionManager.processPrediction(connector.EVENTS.PREDICTIONS.AD_REWARDED,1):a===AdsPlugin.INTERSTITIAL&&
connector._predictionManager.processPrediction(connector.EVENTS.PREDICTIONS.AD_INTERSTITIAL,1))};AdsPlugin.prototype.getECPM=function(a){var b=window.CONNECTOR_ECPM;b=b[this.pluginName]&&b[this.pluginName][a];if(!b&&connector.config.debugMode)throw`No eCPM for ${this.pluginName} ${a}`;"object"===typeof b&&(b=b[connector._countryManager.country]||b.default);"string"===typeof b&&(a=b.split(" "),b=Math.round(parseFloat(a[0])/connector.EXCHANGE_RATES[a[1]]*1E3)/1E3);return b||.1};
AdsPlugin.LOADER_STATE={IDLE:"idle",LOADING:"loading",READY:"ready"};AdsPlugin.VIDEO_STATE={IDLE:"idle",PLAYING:"playing"};AdsPlugin.REWARDED="rewarded";AdsPlugin.INTERSTITIAL="interstitial";AdsPlugin.STICKY="sticky";AdsPlugin.TYPES=[AdsPlugin.INTERSTITIAL,AdsPlugin.REWARDED];AdsPlugin.ERROR_LOADING_UNKNOWN="ads_loading_unknown";AdsPlugin.ERROR_LOADING_FAILED="ads_loading_failed";AdsPlugin.ERROR_LOADING_NO_ADS="ads_loading_no_ads";AdsPlugin.ERROR_LOADING_ADBLOCK="ads_loading_adblock";
AdsPlugin.ERROR_LOADING_ALREADY_LOADING="ads_loading_already_loading";AdsPlugin.ERROR_LOADING_TIMEOUT="ads_loading_timeout";AdsPlugin.ERROR_LOADING_ABANDONED="ads_loading_abandoned";AdsPlugin.TRY_LOADING_TIMEOUT=connector.utils.parseInterval("10 seconds");AdsPlugin.ABANDON_LOADING_TIMEOUT=connector.utils.parseInterval("90 seconds");AdsPlugin.CHECK_CACHE_INTERVAL=connector.utils.parseInterval("30 seconds");AdsPlugin.LOAD_AFTER_PLAY_TIME=connector.utils.parseInterval("15 seconds");
AdsPlugin.LOAD_AFTER_ERROR_TIME=connector.utils.parseInterval("2 minutes");AdsPlugin.LOAD_ERROR_TIMEOUTS={ads_loading_abandoned:connector.utils.parseInterval("30 seconds"),ads_loading_network_failure:connector.utils.parseInterval("15 seconds"),ads_loading_ads_frequent_load:connector.utils.parseInterval("3 minutes"),ads_loading_ads_too_many_instances:connector.utils.parseInterval("3 minutes")};AdsPlugin.getLoadErrorTimeout=function(a){a=AdsPlugin.LOAD_ERROR_TIMEOUTS[a];return void 0!==a?a:AdsPlugin.LOAD_AFTER_ERROR_TIME};const Payments=function(a,b){BasePlugin.call(this,"payments",a,b);this.currency=this.getDefaultCurrency();this.products={};this.productsById={};this.productsLoaded=!1;this.bus.on("changeStatus",c=>{c!==connector.STATUS_CONNECTED&&(this.productsLoaded=!1,this.missingProductsLoadAttempt=0)})};Payments.prototype=Object.create(BasePlugin.prototype);Payments.prototype.constructor=Payments;Payments.prototype._listConnectTasks=function(){return[this.loadSdkAndConnect.bind(this),this.loadProductsConfig.bind(this)]};
Payments.prototype.loadProductsConfig=function(a){window.CONNECTOR_PRODUCTS&&this.createProducts(window.CONNECTOR_PRODUCTS);connector._paymentsManager.loadProductsConfig(b=>{b&&this.createProducts(b);!b&&window.CONNECTOR_PRODUCTS&&console.log("[connector] Failed to load products, falling back to local products");b||window.CONNECTOR_PRODUCTS?a(connector.STATUS_CONNECTED):a(connector.STATUS_DISCONNECTED)})};Payments.prototype.getDefaultCurrency=function(){return"USD"};
Payments.prototype.createProducts=function(a){this.products={};this.productsById={};for(const b in a){const c=this.createProduct(b,a[b]);c&&(this.products[c.itemId]=c,this.productsById[c.productId]=c)}};
Payments.prototype.createProduct=function(a,b){if("object"===typeof b){var c=b.draft;if(!(!0===c||"string"===typeof c&&c.split(",").map(g=>g.trim()).includes(connector.info.source))&&(c=this.getProductId(b),null!==c)){void 0===c&&(c=a);var d=b.price,e=this.convertPrice(d),f=this.getTextPrice(e);a={itemId:a,type:b.type||"consumable",title:b.title,description:b.description,image:b.image,productId:`${c}`,price:e,currency:this.currency,priceUSD:d,textPrice:f};"subscription"===a.type&&(a.trial=b.trial,
a.period=b.period);b.currencyImage&&(a.currencyImage=b.currencyImage);return a}}};Payments.prototype.getProduct=function(a){return this.products[a]||this.productsById[a]};Payments.prototype.listProducts=function(){return Object.values(this.products)};Payments.prototype.listProductIdsOfType=function(a){a=Array.isArray(a)?a:[a];return this.listProducts().filter(b=>a.includes(b.type)).map(b=>b.productId)};Payments.prototype.isVirtualCurrency=function(){return void 0!==connector.VIRTUAL_EXCHANGE_RATES[this.currency]};
Payments.prototype.getExchangeRate=function(){let a;this.isVirtualCurrency()?a=connector.VIRTUAL_EXCHANGE_RATES[this.currency]:(a=connector.EXCHANGE_RATES[this.currency],connector.EXCHANGE_RATES[this.pluginName]&&connector.EXCHANGE_RATES[this.pluginName][this.currency]&&(a=connector.EXCHANGE_RATES[this.pluginName][this.currency]));return a};Payments.prototype.convertPrice=function(a){const b=this.getExchangeRate();return 1===b?a:Math.max(Math.floor(a*b+.01),1)};
Payments.prototype.getPriceToBePaid=function(a){a=a.price;if(connector.config.debugMode||connector.platform.isTester())a=1;return a};Payments.prototype.getTextPrice=function(a,b){b=b||this.currency;b=Payments.CURRENCY_SIGNS[b]||b;return"USD GBP CNY SGD KRW TWD".split(" ").includes(this.currency)?b+a:`${a} ${b}`};Payments.prototype.getProductId=function(){};
Payments.prototype.setCurrency=function(a){if((connector.EXCHANGE_RATES[a]||connector.VIRTUAL_EXCHANGE_RATES[a])&&a!==this.currency){this.currency=a;for(const b in this.products){const c=this.products[b];c.price=this.convertPrice(c.priceUSD);c.currency=a;c.textPrice=this.getTextPrice(c.price)}}};Payments.prototype.onRemoved=function(){connector._paymentsManager.stop()};Payments.prototype.setPurchaseState=function(a){this.purchaseState!==a&&(this.purchaseState=a,void 0===this.purchaseState&&this.bus.trigger("paymentClosed"))};
Payments.prototype.isIdle=function(){return void 0===this.purchaseState};Payments.prototype.getPurchaseState=function(){return this.purchaseState};Payments.prototype.restore=function(a){a(connector.CODE_FAILED)};Payments.prototype.consume=function(a,b){b(connector.CODE_SUCCEED)};Payments.prototype.purchase=function(a,b){b(connector.CODE_FAILED)};Payments.prototype.validate=function(a,b){b(connector.CODE_SUCCEED,a)};
Payments.prototype.createPurchase=function(a,b,c){b={userId:String(connector.platform.getUserID()).replace("sb.mbga.jp:","").replace("mbga.jp:","").replace("FS_",""),productId:b.productId,source:connector.info.source,method:this.pluginName,price:this.getPriceToBePaid(b),realPrice:connector._paymentsManager.calcRealUSDPrice(b),currency:b.currency||"USD",type:b.type,payload:c||{}};a&&(b.paymentId=String(a));return b};
Payments.prototype.getSubscriptionStatus=function(a,b){const c=connector.info.source;["android","ios","macos"].includes(c)&&0===Object.keys(a.tokens).length||connector.platform.withTmpID()&&"ok"===c||(a={source:c,tokens:a.tokens},void 0)};
Payments.prototype.loadProducts=function(a){if(this.productsLoaded)a(connector.CODE_SUCCEED);else{var b=this.oneOf(connector.INSTANT,connector.SAMSUNG);this._loadProducts((c,d)=>{if(c!==connector.CODE_SUCCEED||0===d.length)a(connector.CODE_FAILED),this.bus.trigger("productsFailed");else{var e=this._getMissingProducts(["consumable","nonConsumable"],d);0<e.length&&b&&(this.missingProductsLoadAttempt||0)<Payments.MISSING_PRODUCTS_LOAD_ATTEMPTS?(this.missingProductsLoadAttempt=(this.missingProductsLoadAttempt||
0)+1,a(connector.CODE_FAILED),this.bus.trigger("productsFailed")):(0===e.length&&this.missingProductsLoadAttempt&&connector.metrics.logEvent(connector.EVENTS.STATS.PAYMENTS_MISSING_PRODUCTS_RECOVERED+this.missingProductsLoadAttempt),this.productsLoaded=!0,this.verifyLoadedProducts(d),this.bus.trigger("productsLoaded"),a(c))}})}};Payments.prototype._loadProducts=function(a){const b=this.listProductIdsOfType(["consumable","nonConsumable"]);a(connector.CODE_SUCCEED,b)};
Payments.prototype.loadSubscriptions=function(a){this.subscriptionsLoaded?a(connector.CODE_SUCCEED):0===this.listProductIdsOfType("subscription").length?(this.subscriptionsLoaded=!0,a(connector.CODE_SUCCEED)):this._loadSubscriptions((b,c)=>{b===connector.CODE_SUCCEED&&(0<c.length&&(this.subscriptionsLoaded=!0),this.verifyLoadedSubscriptions(c));a(b)})};Payments.prototype._loadSubscriptions=function(a){const b=this.listProductIdsOfType("subscription");a(connector.CODE_SUCCEED,b)};
Payments.prototype.loadSubscriptionsTokens=function(a){this.subscriptionsTokensLoaded?a(connector.CODE_SUCCEED):0===this.listProductIdsOfType("subscription").length?(this.subscriptionsTokensLoaded=!0,a(connector.CODE_SUCCEED)):this._loadSubscriptionsTokens(b=>{b===connector.CODE_SUCCEED&&(this.subscriptionsTokensLoaded=!0);a(b)})};Payments.prototype._loadSubscriptionsTokens=function(a){a(connector.CODE_SUCCEED)};
Payments.prototype.verifyLoadedSubscriptions=function(a){a=this._getMissingProducts("subscription",a);0<a.length&&this.bus.trigger("error:unknownSubscriptions",a)};Payments.prototype.verifyLoadedProducts=function(a){const b=this._getMissingProducts(["consumable","nonConsumable"],a);0<b.length&&0<a.length&&this.bus.trigger("error:unknownProducts",b)};Payments.prototype._getMissingProducts=function(a,b){a=this.listProductIdsOfType(a);return connector.utils.substract(a,b)};
Payments.prototype.isRestoreAvailable=function(){return connector.payments.isConnected()};Payments.prototype.notifyActive=function(){};Payments.CURRENCY_SIGNS={USD:"$",EUR:"\u20ac",GBP:"\u00a3",RUB:"\u20bd",CNY:"\uffe5",SGD:"S$",KRW:"\u20a9",TWD:"NT$",PLN:"z\u0142",MLK:"\u043c\u043b\u043a",FM:"\u0424\u041c"};Payments.ERROR_INVALID_EMAIL="INVALID_EMAIL";Payments.MISSING_PRODUCTS_LOAD_ATTEMPTS=2;



const NoSocial=function(){Social.call(this,connector.NONE)};NoSocial.prototype=Object.create(Social.prototype);NoSocial.prototype.constructor=NoSocial;NoSocial.prototype._connect=function(a){a(connector.STATUS_CONNECTED)};const NoAdsPlugin=function(){AdsPlugin.call(this,connector.NONE)};NoAdsPlugin.prototype=Object.create(AdsPlugin.prototype);NoAdsPlugin.prototype.constructor=NoAdsPlugin;NoAdsPlugin.prototype._connect=function(a){a(connector.STATUS_DISABLED)};NoAdsPlugin.prototype.isRewardedSupported=function(){return!1};NoAdsPlugin.prototype.isInterstitialSupported=function(){return!1};NoAdsPlugin.prototype.isStickySupported=function(){return!1};const NoPayments=function(){Payments.call(this,connector.NONE)};NoPayments.prototype=Object.create(Payments.prototype);NoPayments.prototype.constructor=NoPayments;NoPayments.prototype._connect=function(a){a(connector.STATUS_DISABLED)};const Pinger=function(a){this.interval=a.interval||Pinger.INTERVAL;this.finishTime=Date.now()+(a.timeout||Pinger.TIMEOUT);this.maxAttempts=a.attempts||1E6;this.backoff=a.backoff||Pinger.BACKOFF;this.timeoutCode=a.timeoutCode||connector.CODE_FAILED;this.callback=a.callback||function(){};this.action=a.action;this.attempt=0};
Pinger.prototype.ping=function(){Date.now()>this.finishTime||this.attempt>this.maxAttempts?(this.callback(this.timeoutCode),this.stop()):(this.player=new ConnectorActionPlayer([function(a){a=connector.utils.waitNoMore(1E4,a);this.action(function(b){[connector.CODE_SUCCEED,connector.CODE_FAILED,connector.CODE_CANCELLED].includes(b)?(this.callback.apply(this,arguments),this.stop()):a()}.bind(this))}.bind(this),function(a){const b=Math.min(this.interval*Math.pow(this.backoff,this.attempt),Pinger.MAX_INTERVAL);
this.timeout=setTimeout(this.ping.bind(this),Math.round(b));this.attempt++;a()}.bind(this)]),this.player.play())};Pinger.prototype.start=function(){this.ping()};Pinger.prototype.stop=function(){this.timeout&&(clearTimeout(this.timeout),delete this.timeout);this.player&&(this.player.stop(),delete this.player)};Pinger.BACKOFF=1.4;Pinger.INTERVAL=connector.utils.parseInterval("2 seconds");Pinger.MAX_INTERVAL=connector.utils.parseInterval("1 minute");Pinger.TIMEOUT=connector.utils.parseInterval("30 minutes");const Conversions=function(){this.initLoggers();this.trackPurchase=this.loggersApply.bind(this,"trackPurchase");this.trackAdRevenue=this.loggersApply.bind(this,"trackAdRevenue");this.trackUserId=this.loggersApply.bind(this,"trackUserId")};
Conversions.prototype.initLoggers=function(){this.loggers={};};
Conversions.prototype.trackEvent=function(a,b={}){"number"===typeof b&&(b={value:b});b=b||{};if(a){var c=864E5*connector.metrics.getDaysSinceRegistration();for(const d in this.loggers){const e=this.loggers[d];if(!(!e.trackEvent||b.loggers&&!b.loggers.includes(d)||c>=connector.utils.parseInterval(b[d]&&b[d].lifetime||b.lifetime||e.config.lifetime))&&(e.trackEvent(a,b),b.nickname&&!e.metrics)){const f=b.nickname.split(",");for(const g of f)e.trackEvent(g,b)}}}else console.error("analytics logEvent: empty name")};
Conversions.prototype.loggersApply=function(a,...b){for(const c in this.loggers){const d=this.loggers[c];d[a]&&d[a].call(d,...b)}};










































































































































































































































































































































const Notifications=function(){ConnectorEventEmitter.call(this);this.queue={};this.onInitCallbacks=[];this.permitted=this.initialized=!1};Notifications.prototype=Object.create(ConnectorEventEmitter.prototype);Notifications.prototype.constructor=Notifications;
Notifications.prototype.initialize=function(){this.initialized=true;this.permitted=false;this.queue={};this.plannedPushes={};this.onInitCallbacks.forEach(fn=>fn());this.onInitCallbacks=[];};Notifications.prototype.processQueue=function(){};
Notifications.prototype.askPermission=function(done){if(done)done();};Notifications.prototype.isPermitted=function(){return false;};
Notifications.prototype.setPermitted=function(){};Notifications.prototype.initSender=function(){};Notifications.prototype.cancelAll=function(){};
Notifications.prototype.load=function(){};
Notifications.prototype.save=function(){};
Notifications.prototype.send=function(){};
Notifications.prototype.cancel=function(){};
Notifications.prototype.isClientSender=function(){return false;};Notifications.prototype.onNativeEvent=function(){};Notifications.ONE_MINUTE=connector.utils.parseInterval("1 minute");
Notifications.TIMEOUT_THRESHOLD=connector.utils.parseInterval("3 minutes");Notifications.REQUEST_INTERVAL=connector.utils.parseInterval("7 days");connector.notifications=new Notifications;const MultiBots=function(){connector.player.on("changed",this._post.bind(this))};MultiBots.prototype.get=function(a,b){(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{b()})};MultiBots.prototype._post=function(){const a=connector.player.name,b=connector.player.avatar;a&&b&&(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{})};const Cups=function(){};Cups.prototype.join=function(a,b,c,d){(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{d()})};Cups.prototype.get=function(a,b,c){b=encodeURIComponent(b);(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{c(!1)})};Cups.prototype.getTop=function(a,b,c){b=encodeURIComponent(b);(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{c()})};
Cups.prototype.postScore=function(a,b,c,d){(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{d(!1)})};Cups.prototype.updateProfile=function(a,b,c,d=()=>{}){(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{d(!1)})};
Cups.prototype.addFakePlayers=function(a,b,c){(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{c(!1)})};const MultiLeagues=function(){};MultiLeagues.prototype.postRating=function(a,b,c=()=>{}){connector.player.name&&connector.player.avatar&&!connector.player.avatar.startsWith("#avatars")&&(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{c(!1)})};
MultiLeagues.prototype.get=function(a,b=()=>{}){(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{b()})};const MultiplayerRequests=function(){ConnectorEventEmitter.call(this)};MultiplayerRequests.prototype=Object.create(ConnectorEventEmitter.prototype);MultiplayerRequests.prototype.constructor=MultiplayerRequests;
MultiplayerRequests.prototype.send=function(a,b,c,d=()=>{}){const e=connector.config.projectId;a=encodeURIComponent(a);(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(f=>{this.trigger("error:send",`api_error_${f.status}_${f.errorMessage}`,c);d(!1)})};
MultiplayerRequests.prototype.get=function(a=()=>{}){const b=connector.config.projectId,c=encodeURIComponent(connector.platform.getUserID());(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{a()})};MultiplayerRequests.prototype.delete=function(a,b=()=>{}){(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{b(!1)})};const MultiRewardedPromo=function(){this.pending={};this.sendTimeout=void 0};MultiRewardedPromo.prototype.loadData=function(a,b=()=>{}){(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(c=>{b(c)})};
MultiRewardedPromo.prototype.updateData=function(a,b){const c=function(d,e){for(const f of Object.keys(e)){const g=e[f];g&&"object"===typeof g&&!Array.isArray(g)&&d[f]&&"object"===typeof d[f]&&!Array.isArray(d[f])?c(d[f],g):d[f]=g}return d};this.pending[a]||(this.pending[a]={});c(this.pending[a],b);this.sendTimeout||(this.sendTimeout=setTimeout(()=>{this.sendTimeout=void 0;this.flush()},500))};
MultiRewardedPromo.prototype.flush=function(){this.sendTimeout&&(clearTimeout(this.sendTimeout),this.sendTimeout=void 0);const a=this.pending;this.pending={};Object.keys(a).forEach(b=>{(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{})})};const Multiplayer=function(){this.cups=new Cups;this.bots=new MultiBots;this.leagues=new MultiLeagues;this.requests=new MultiplayerRequests;this.rewardedpromo=new MultiRewardedPromo};Multiplayer.prototype.getCountry=function(a){(function(f){if(typeof f==="function")f({errorMessage:"This feature is unavailable in the local edition",offline:true});})(()=>{a(!1)})};connector.multi=new Multiplayer;;;;;;;;;;;












const Synchronizer=function(){ConnectorEventEmitter.call(this);this.setStatus(SYNC_STATUS.INIT);this.adapters={}};Synchronizer.prototype=Object.create(ConnectorEventEmitter.prototype);Synchronizer.prototype.constructor=Synchronizer;Synchronizer.prototype.initialize=function(){this.reset();};
Synchronizer.prototype.detectTransport=function(){};Synchronizer.prototype.usesRestTransport=function(){return false;};Synchronizer.prototype.connect=function(){};
Synchronizer.prototype.start=function(){this.disable();};Synchronizer.prototype.load=function(){const a=(connector.dataLoader.load(SimpleDataLoader.TYPES.SYNC_SESSION)||{}).session;return null!==a&&void 0!==a?a:connector.dataLoader.localStorage.getItem(`${SimpleDataLoader.GetOldLocalStoragePrefix()}_session`)};Synchronizer.prototype.save=function(){connector.dataLoader.save(SimpleDataLoader.TYPES.SYNC_SESSION,{session:this.session})};Synchronizer.prototype.disable=function(){this.reset();};
Synchronizer.prototype.reset=function(){this.session="a";this.started=false;this.setStatus(SYNC_STATUS.DISABLE);};Synchronizer.prototype.addAdapter=function(a,b){this.adapters[a]=b};Synchronizer.prototype.addSendTask=function(){};
Synchronizer.prototype.send=function(){};Synchronizer.prototype.syncOut=function(){};
Synchronizer.prototype.checkSession=function(){};Synchronizer.prototype.resolveConflict=function(){};Synchronizer.prototype.getLocalSnapshot=function(){const a={};for(const b of Object.keys(this.adapters))this.adapters[b].getInfo&&(a[b]=this.adapters[b].getInfo());return a};
Synchronizer.prototype.push=function(){};
Synchronizer.prototype.pull=function(){};Synchronizer.prototype.setStatus=function(a){this.status!==a&&(this.status=a,this.trigger("changeStatus",a))};const SYNC_STATUS={INIT:"init",IDLE:"idle",CONFLICT:"conflict",PULL:"pull",PUSH:"push",DISABLE:"disable",WAIT:"wait",NEED_LOGIN:"needLogin",ERROR:"error"};connector.SYNC_STATUS=SYNC_STATUS;connector.synchronizer=new Synchronizer;/*
 * Merge Haven 1.510.15 static local adapter.
 * Insert INSIDE the original connector IIFE, immediately BEFORE its single
 * trailing `connector.initialize();` call. Keep the downloaded file unchanged.
 * These are the publisher's existing no-ad / no-payment / no-social classes;
 * no advertisement or purchase is reported as successful.
 */
(() => {
    // Separate from all MSN/test saves. Origin is already isolated by browser
    // storage; a stable deployment-base hash also separates GitHub Pages repos.
    const pagePath = new URL(document.baseURI || location.href).pathname;
    const basePath = pagePath.endsWith('/') ? pagePath : pagePath.slice(0, pagePath.lastIndexOf('/') + 1);
    let baseHash = 2166136261;
    for (let i = 0; i < basePath.length; i++) baseHash = Math.imul(baseHash ^ basePath.charCodeAt(i), 16777619) >>> 0;
    const saveNamespace = 'local_20261029_v1_' + baseHash.toString(16).padStart(8, '0');
    const saveSuffix = '_' + saveNamespace;
    document.ccConfig.localSaveNamespace = saveNamespace;
    const connectorScript = connector.utils.getCurrentScript();
    if (connectorScript) {
        Object.assign(connectorScript.dataset, {
            source: "offline",
            norest: "true",
            paymentsDisabled: "true",
            payApiUrl: "",
            metricsApiUrl: "",
            notificationsApiUrl: "",
            multiApiUrl: "",
            syncApiUrl: "",
            remoteConfigUrl: ""
        });
    }

    // This platform has no SDK or remote host. The native save implementation
    // is retained, using a new namespace that cannot read old MSN test saves.
    function OfflinePlatform() {
        Platform.call(this, "offline");
    }
    OfflinePlatform.prototype = Object.create(Platform.prototype);
    OfflinePlatform.prototype.constructor = OfflinePlatform;
    OfflinePlatform.prototype.getLocalStoragePrefix = () => saveSuffix;
    OfflinePlatform.prototype.openUrl = () => {};
    OfflinePlatform.prototype.switchGame = () => {};
    connector.platform._detectPlugin = () => OfflinePlatform;
    connector.social._detectPlugin = () => NoSocial;
    connector.ads._detectPlugin = () => NoAdsPlugin;
    connector.payments._detectPlugin = () => NoPayments;
    Info._detectSource = () => "offline";
    connector.info.language = 'en';
    Info._detectLanguage = () => 'en';

    Object.assign(window.CONNECTOR_CONFIG, {
        source: "offline",
        cloudStorage: false,
        migrateLocalStorage: false,
        platformsync: false,
        norest: true,
        paymentsDisabled: true,
        disableReconnect: true,
        manualStartMetrics: true,
        testPlatform: false,
        debugMode: false,
        adsense: false,
        facebookLogin: false,
        xsolla: false,
        remote: undefined
    });

    // Preserve session clocks / registration dates used by normal game logic,
    // but never initialize analytics providers or collect outbound event data.
    Conversions.prototype.initLoggers = function(){this.loggers={};};
    Metrics.prototype.logEvent = function () {};
    Metrics.prototype._sendEvents = function () { this.batches = []; };

    // Retain the synchronizer object and its expected interface, with its
    // existing DISABLE state; local persistence is a separate implementation.
    const initializeSynchronizer = Synchronizer.prototype.initialize;
    Synchronizer.prototype.initialize = function(){this.reset();};
    Synchronizer.prototype.connect = function(){};
    Synchronizer.prototype.start = function(){this.disable();};

    const gameConfig = document.ccConfig;
    if (gameConfig) {
        gameConfig.source = "offline";
        gameConfig.nologin = true;
        gameConfig.norest = true;
        gameConfig.firebase = false;
        gameConfig.languages = ['en', 'zh'];
        const unavailable = [
            "INVITE_FRIENDS_ICON", "CREATE_SHORTCUT", "JOIN_GROUP", "RATE_WINDOW",
            "SHARED_CHECKBOX", "SUBSCRIPTION", "CHECK_CONNECTION", "RESTORE_PROGRESS",
            "CROSS_PROMO"
        ];
        gameConfig.availables = gameConfig.availables || {};
        unavailable.forEach(key => { gameConfig.availables[key] = { disabled: true }; });
    }

    // An invariant guard at the start of actual initialization (after the
    // connector has parsed HTML attributes and selected its bundled config).
    const initializeConnector = connector._initialize;
    connector._initialize = function () {
        Object.assign(this.config, {
            source: "offline", norest: true, paymentsDisabled: true,
            cloudStorage: false, platformsync: false, disableReconnect: true,
            migrateLocalStorage: false,
            payApiURL: "", metricsApiURL: "", notificationsApiURL: "",
            multiApiURL: "", syncApiURL: "", remoteConfigURL: ""
        });
        // A newly opened tab must not initialize a fresh native player while
        // another tab is between the remove/write phases of a save import.
        const lockKey = '__haven_' + saveNamespace + '_lock';
        let lock;
        try { lock = JSON.parse(window.localStorage.getItem(lockKey) || 'null'); } catch (_) {}
        if (lock && lock.expires > Date.now()) {
            const waitForUnlock = () => {
                let active;
                try { active = JSON.parse(window.localStorage.getItem(lockKey) || 'null'); } catch (_) {}
                if (!active || active.expires <= Date.now()) location.reload();
                else setTimeout(waitForUnlock, 100);
            };
            setTimeout(waitForUnlock, 100);
            return;
        }
        initializeConnector.call(this);
    };
})();

connector.initialize();
}.call(this));