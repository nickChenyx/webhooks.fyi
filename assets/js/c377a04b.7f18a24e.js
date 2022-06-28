"use strict";(self.webpackChunkwebhooks_fyi=self.webpackChunkwebhooks_fyi||[]).push([[971],{3905:function(t,a,e){e.d(a,{Zo:function(){return k},kt:function(){return u}});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function m(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),o=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},k=function(t){var a=o(t.components);return n.createElement(p.Provider,{value:a},t.children)},d={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=m(t,["components","mdxType","originalType","parentName"]),s=o(e),u=r,g=s["".concat(p,".").concat(u)]||s[u]||d[u]||l;return e?n.createElement(g,i(i({ref:a},k),{},{components:e})):n.createElement(g,i({ref:a},k))}));function u(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=s;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var o=2;o<l;o++)i[o]=e[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}s.displayName="MDXCreateElement"},1269:function(t,a,e){e.r(a),e.d(a,{assets:function(){return k},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return d}});var n=e(7462),r=e(3366),l=(e(7294),e(3905)),i=["components"],m={sidebar_position:1,slug:"/",title:"Introduction"},p="Webhooks.fyi",o={unversionedId:"index",id:"index",title:"Introduction",description:"HMAC Providers",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/ngrok/webhooks.fyi/edit/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Aftership",permalink:"/HMAC/aftership"}},k={},d=[{value:"HMAC Providers",id:"hmac-providers",level:2}],s={toc:d};function u(t){var a=t.components,e=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"webhooksfyi"},"Webhooks.fyi"),(0,l.kt)("h2",{id:"hmac-providers"},"HMAC Providers"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Provider"),(0,l.kt)("th",{parentName:"tr",align:null},"Provider"),(0,l.kt)("th",{parentName:"tr",align:null},"Hash Algorithm"),(0,l.kt)("th",{parentName:"tr",align:null},"Encode"),(0,l.kt)("th",{parentName:"tr",align:null},"Zero Downtime Rotation"),(0,l.kt)("th",{parentName:"tr",align:null},"Forward compatibility"),(0,l.kt)("th",{parentName:"tr",align:null},"Timestamp"),(0,l.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/aftership.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/aftership"},"Aftership")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developers.aftership.com/reference/check-signatures"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/microsoft.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/microsoft-teams"},"Microsoft Teams")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-outgoing-webhook?tabs=verifyhmactoken%2Cdotnet"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/box.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/box"},"Box")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.box.com/guides/webhooks/v2/signatures-v2/"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/calendly.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/calendly"},"Calendly")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.calendly.com/api-docs/ZG9jOjM2MzE2MDM4-webhook-signatures"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/circleci.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/circleci"},"CircleCI")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://circleci.com/docs/2.0/webhooks/"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/mongodb.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/mongodb"},"MongoDB")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.mongodb.com/docs/realm/endpoints/#payload-signature-verification"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/graphcms.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/graphcms"},"GraphCMS")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://graphcms.com/docs/api-reference/basics/webhooks"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/heroku.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/heroku"},"Heroku")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://devcenter.heroku.com/articles/app-webhooks"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/mux.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/mux"},"Mux")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.mux.com/guides/video/verify-webhook-signatures"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/sentry.io",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/sentry"},"Sentry")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.sentry.io/product/integrations/integration-platform/webhooks/#sentry-hook-signature"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/tiktokus.info",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/tiktok"},"Tiktok")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developers.tiktok.com/doc/webhooks-verification"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/typeform.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/typeform"},"Typeform")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.typeform.com/webhooks/secure-your-webhooks/"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/brex.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/brex"},"Brex")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.brex.com/docs/webhooks/"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/pusher.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/pusher"},"Pusher")),(0,l.kt)("td",{parentName:"tr",align:null},"sha1"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pusher.com/docs/beams/concepts/webhooks/"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/autodesk.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/autodesk-forge"},"Autodesk Forge")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://buildkite.com/docs/apis/webhooks"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/bolt.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/bolt"},"Bolt")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://help.bolt.com/developers/guides/webhooks/hook-verification/"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/buildkite.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/buildkite"},"Buildkite")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://buildkite.com/docs/apis/webhooks"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/castle.io",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/castle"},"Castle")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.castle.io/docs/subscribe-to-webhooks"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/coinbase.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/coinbase"},"Coinbase")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.cloud.coinbase.com/commerce/docs/webhooks-fields-and-security"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/chargify.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/chargify"},"Chargify")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://chargify.zendesk.com/hc/en-us/articles/4407905415963-Webhooks-Reference#webhook-signature"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/trendmicro.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/trendmicro-conformity"},"TrendMicro Conformity")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://cloudone.trendmicro.com/docs/conformity/webhook-communication/"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/contentful.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/contentful"},"Contentful")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.contentful.com/developers/docs/extensibility/app-framework/request-verification/"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/docusign.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/docusign"},"Docusign")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developers.docusign.com/platform/webhooks/connect/hmac/"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/dropbox.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/dropbox"},"Dropbox")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.dropbox.com/developers/reference/webhooks"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/frame.io",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/frame.io"},"Frame.io")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.frame.io/docs/automations-webhooks/webhooks-overview"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/intercom.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/intercom"},"Intercom")),(0,l.kt)("td",{parentName:"tr",align:null},"sha1"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developers.intercom.com/intercom-api-reference/v1.0/reference/signed-notifications"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/bitbucket.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/bitbucket"},"Bitbucket")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://confluence.atlassian.com/bitbucketserver/manage-webhooks-938025878.html#Managewebhooks-webhooksecrets"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/facebook.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/facebook-messenger"},"Facebook Messenger")),(0,l.kt)("td",{parentName:"tr",align:null},"sha1"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developers.facebook.com/docs/messenger-platform/webhook/#security"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/facebook.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/facebook-graph-api"},"Facebook Graph API")),(0,l.kt)("td",{parentName:"tr",align:null},"sha1"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developers.facebook.com/docs/graph-api/webhooks/getting-started/#verification-requests"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/github.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/github"},"GitHub")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/hubspot.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/hubspot-v1"},"HubSpot V1")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developers.hubspot.com/docs/api/webhooks/validating-requests"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/hubspot.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/hubspot-v2"},"HubSpot V2")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developers.hubspot.com/docs/api/webhooks/validating-requests"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/hubspot.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/hubspot-v3"},"HubSpot V3")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developers.hubspot.com/docs/api/webhooks/validating-requests"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/launchdarkly.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/launchdarkly"},"LaunchDarkly")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.launchdarkly.com/home/connecting/webhooks"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/mailchimp.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/mailchimp"},"Mailchimp")),(0,l.kt)("td",{parentName:"tr",align:null},"sha1"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mailchimp.com/developer/transactional/guides/track-respond-activity-webhooks/#authenticating-webhook-requests"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/sonatype.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/sonatype-nexus"},"Sonatype Nexus")),(0,l.kt)("td",{parentName:"tr",align:null},"sha1"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://help.sonatype.com/repomanager3/integrations/webhooks/working-with-hmac-payloads"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/pagerduty.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/pagerduty"},"PagerDuty")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.pagerduty.com/docs/ZG9jOjExMDI5NTkz-verifying-signatures"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/pinwheel.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/pinwheel"},"Pinwheel")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.pinwheelapi.com/docs/webhook-signature-verification"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/shopify.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/shopify"},"Shopify")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://shopify.dev/apps/webhooks/configuration/https#step-5-verify-the-webhook"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/moderntreasury.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/modern-treasury"},"Modern Treasury")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moderntreasury.com/docs/verifying-webhooks"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/signalsciences.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/signal-sciences"},"Signal Sciences")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.fastly.com/signalsciences/integrations/generic-webhooks/"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/slack.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/slack"},"Slack")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://api.slack.com/authentication/verifying-requests-from-slack"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/square.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/square"},"Square")),(0,l.kt)("td",{parentName:"tr",align:null},"sha1"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.squareup.com/docs/webhooks/step3validate"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/twilio.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/twilio"},"Twilio")),(0,l.kt)("td",{parentName:"tr",align:null},"sha1"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.twilio.com/docs/usage/security#validating-requests"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/airship.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/airship"},"Airship")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"hex"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.airship.com/hc/en-us/articles/360032501831-Implementing-a-Signature-Hash-and-Validating-an-Open-Channel-Webhook"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/xero.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/xero"},"Xero")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.xero.com/documentation/guides/webhooks/configuring-your-server#intent-to-receive"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"https://logo.clearbit.com/zendesk.com",size:"120x120"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hmac/zendesk"},"Zendesk")),(0,l.kt)("td",{parentName:"tr",align:null},"sha256"),(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.zendesk.com/documentation/event-connectors/webhooks/verifying/"},"Link"))))))}u.isMDXComponent=!0}}]);