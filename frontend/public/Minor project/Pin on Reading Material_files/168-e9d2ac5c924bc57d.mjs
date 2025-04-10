"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[168],{720687:(e,t,n)=>{n.d(t,{default:()=>o});var i=n(934980);let a=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,o={css:(0,i.Ll)([a]),animation:"pulsing 2s infinite"}},934980:(e,t,n)=>{n.d(t,{CC:()=>a,Ll:()=>r,XF:()=>o});let i=(e,t,n)=>({x:Math.floor(e*Math.cos(n)),y:Math.floor(t*Math.sin(n))}),a=(e,t)=>i(t/2,e/2,2*Math.random()*Math.PI),o=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,r=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},31723:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var i=n(667294),a=n(883119),o=n(573706),r=n(986782);function l(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let s={},m=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class u{constructor(){l(this,"idMap",new Map),l(this,"objMap",new WeakMap)}get(e){let t=m(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=m(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=m(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}function p(e,t){return"number"==typeof e?e:"_lg1"===t?e[t]??e.lg??1:e[t]??1}var d=n(587435),c=n(39260),h=n(876594),g=n(720687),y=n(512541),f=n(785893);let{css:_,animation:x}=g.default,b={backgroundColor:h._VP,animation:x,borderRadius:h.Ev2};function v({data:e}){let{height:t}=e;return(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(y.Z,{unsafeCSS:_}),(0,f.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:b},"data-test-id":"skeleton-pin",children:(0,f.jsx)(a.xu,{height:t})})]})}var w=n(679482),M=n(297728),C=n(730212),k=n(410150),$=n(415787),j=n(855746);function S(e){let{align:t,cacheKey:n,id:l,isFetching:m,isGridCentered:h=!0,items:g,layout:_,loadItems:x,masonryRef:b,optOutFluidGridExperiment:S=!1,renderItem:A,scrollContainerRef:E,virtualize:W=!0,_getColumnSpanConfig:R,_getResponsiveModuleConfigForSecondItem:I,_dynamicHeights:F,useLoadingState:G,isLoadingAccessibilityLabel:P,isLoadedAccessibilityLabel:O}=e,L=(0,k.ZP)(),{isAuthenticated:N,isRTL:V}=(0,C.B)(),{logContextEvent:B}=(0,o.v)(),D=(0,M.F)(),H="desktop"===L,X=(0,j.MM)(),Z=((0,i.useRef)(g.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),H&&!S),{experimentalColumnWidth:T,experimentalGutter:z}=(0,d.Z)(Z),Q=e.serverRender??!!H,q="flexible"===_||"uniformRowFlexible"===_||"desktop"!==L||Z,K=(q&&_?.startsWith("uniformRow")?"uniformRowFlexible":void 0)??(Q?"serverRenderedFlexible":"flexible"),U=e.columnWidth??T??w.yF;q&&(U=Math.floor(U));let J=e.gutterWidth??z??(H?w.oX:1),Y=e.minCols??w.yc,ee=((0,i.useRef)(0),U+J),et=function(e){if(null==e)return;let t=function(e){let t=s[e];return t&&t.screenWidth===window.innerWidth||(s[e]={screenWidth:window.innerWidth}),s[e]}(e);return t.measurementCache||(t.measurementCache=new u),t.measurementCache}(n),en=(0,i.useCallback)(()=>E?.current||window,[E]),ei=(0,i.useRef)(!0),{anyEnabled:ea}=F?D.checkExperiment("dynamic_heights_v2"):{anyEnabled:!1},{anyEnabled:eo}=D.checkExperiment("web_masonry_enable_dynamic_heights_for_all"),{anyEnabled:er}=D.checkExperiment("web_masonry_pin_overlap_calculation_and_logging"),{anyEnabled:el,group:es}=D.checkExperiment("web_masonry_multicolumn_position_algov2"),em=h&&ei.current?"centered":"",{className:eu,styles:ep}=function(e){let t=`m_${Object.keys(e).sort().reduce((t,n)=>{let i=e[n];return null==i||"object"==typeof i||"function"==typeof i?t:"boolean"==typeof i?t+(i?"t":"f"):t+i},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:i,isRTL:a,itemWidth:o,maxColumns:r,minColumns:l,items:s,_getColumnSpanConfig:m,_getResponsiveModuleConfigForSecondItem:u}=e,d=m?s.map((e,t)=>({index:t,columnSpanConfig:m(e)??1})).filter(e=>1!==e.columnSpanConfig):[],c=o+i,h=Array.from({length:r+1-l},(e,t)=>t+l).map(e=>{let h,g;let y=e===l?0:e*c,f=e===r?null:(e+1)*c-.01;m&&u&&s.length>1&&(h=m(s[0]),g=u(s[1]));let{styles:_,numberOfVisibleItems:x}=d.reduce((a,r)=>{let{columnSpanConfig:l}=r,m=Math.min(function({columnCount:e,columnSpanConfig:t,firstItemColumnSpanConfig:n,isFlexibleWidthItem:i,secondItemResponsiveModuleConfig:a}){let o=e<=2?"sm":e<=4?"md":e<=6?"_lg1":e<=8?"lg":"xl",r=p(t,o);if(i){let t=p(n,o);r="number"==typeof a?a:a?Math.max(a.min,Math.min(a.max,e-t)):1}return r}({columnCount:e,columnSpanConfig:l,isFlexibleWidthItem:!!g&&r===s[1],firstItemColumnSpanConfig:h??1,secondItemResponsiveModuleConfig:g??1}),e),u=null!=r.index&&a.numberOfVisibleItems>=m+r.index,d=n?100/e*m:o*m+i*(m-1),{numberOfVisibleItems:c}=a;return u?c-=m-1:r.index<c&&(c+=1),{styles:a.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:i,width:a,flexible:o}){let r="number"==typeof n?n:btoa(JSON.stringify(n));return o?`
      .${e} .static[data-column-span="${r}"]:nth-child(${t+1}) {
        visibility: ${i?"visible":"hidden"} !important;
        position: ${i?"inherit":"absolute"} !important;
        width: ${a}% !important;
      }`:`
      .${e} .static[data-column-span="${r}"]:nth-child(${t+1}) {
        visibility: ${i?"visible":"hidden"} !important;
        position: ${i?"inherit":"absolute"} !important;
        width: ${a}px !important;
      }`}({className:t,index:r.index,columnSpanConfig:l,visible:u,width:d,flexible:n})),numberOfVisibleItems:c}},{styles:"",numberOfVisibleItems:e}),b=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*c}px;
      }

      .${t} .static {
        width: ${o}px !important;
      }
    `;return{minWidth:y,maxWidth:f,styles:`
      .${t} .static:nth-child(-n+${x}) {
        position: static !important;
        visibility: visible !important;
        float: ${a?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${i/2}px;
      }

      ${b}

      ${_}
    `}}),g=h.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),y=h.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),f=`
    ${g.join("")}
    @supports not (container-type: inline-size) {
      ${y.join("")}
    }
  `;return{className:t,styles:`
  .masonryContainer {
      container-type: inline-size;
    }

    .masonryContainer > .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${f}
  `}}({gutterWidth:J,flexible:q,items:g,isRTL:V,itemWidth:U,maxColumns:e.maxColumns??Math.max(g.length,w.g5),minColumns:Y,_getColumnSpanConfig:R,_getResponsiveModuleConfigForSecondItem:I}),ed=`${em} ${eu}`.trim(),{anyEnabled:ec,expName:eh,group:eg,isMeasureAllEnabled:ey}=(0,c.Z)(),ef=((0,i.useRef)(),(0,i.useRef)(g.length)),e_=(0,i.useRef)(0),ex=(0,i.useRef)(null);(0,i.useEffect)(()=>{ef.current=g.length,e_.current+=1},[g]),(0,i.useEffect)(()=>{ei.current&&(ei.current=!1)},[]),(0,i.useEffect)(()=>()=>{},[]);let eb=(0,i.useCallback)(e=>{let t=e.reduce((e,t)=>e+t),n=t/e.length;(0,$.S0)("webapp.masonry.multiColumnWhitespace.average",n,{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",multicolumnLayoutAlgoV2Group:es||"unknown",handlerId:X,isAuthenticated:N,multiColumnItemSpan:e.length}}),(0,$.S0)("webapp.masonry.twoColWhitespace",n,{sampleRate:1,tags:{columnWidth:U,minCols:Y}}),B({event_type:15878,component:14468,aux_data:{total_whitespace_px:t}}),B({event_type:16062,component:14468,aux_data:{average_whitespace_px:n}}),B({event_type:16063,component:14468,aux_data:{max_whitespace_px:Math.max(...e)}}),e.forEach(t=>{t>=50&&((0,$.nP)("webapp.masonry.multiColumnWhitespace.over50",{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",multicolumnLayoutAlgoV2Group:es||"unknown",handlerId:X,isAuthenticated:N,multiColumnItemSpan:e.length}}),B({event_type:16261,component:14468})),t>=100&&((0,$.nP)("webapp.masonry.multiColumnWhitespace.over100",{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",multicolumnLayoutAlgoV2Group:es||"unknown",handlerId:X,isAuthenticated:N,multiColumnItemSpan:e.length}}),B({event_type:16262,component:14468}))}),(0,$.nP)("webapp.masonry.multiColumnWhitespace.count",{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",multicolumnLayoutAlgoV2Group:es||"unknown",handlerId:X,isAuthenticated:N,multiColumnItemSpan:e.length}})},[U,B,Y,N,X,eg,es]),{_items:ev,_renderItem:ew}=function({initialLoadingStatePinCount:e=50,infiniteScrollPinCount:t=10,isFetching:n,items:a=[],renderItem:o,useLoadingState:r}){let l=a.filter(e=>"object"==typeof e&&null!==e&&"type"in e&&"closeup_module"===e.type).length>0,s=r&&n&&0===a.length,m=r&&n&&l&&1===a.length,u=r&&n&&a.length>(l?1:0),p=(0,i.useMemo)(()=>Array.from({length:u?t:e}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236,key:`skeleton-pin-${n}`,isSkeleton:!0}],[]),[e,t,u]);return{_items:(0,i.useMemo)(()=>m||u?[...a,...p]:s?p:a,[s,u,m,a,p]),_renderItem:(0,i.useMemo)(()=>r?e=>{let{itemIdx:t,data:n}=e;return t>=a.length&&n&&"object"==typeof n&&"key"in n&&"height"in n?(0,f.jsx)(v,{data:n},n.key):o(e)}:o,[r,o,a.length])}}({useLoadingState:G,items:g,renderItem:(0,i.useCallback)(e=>(0,f.jsx)(r.Z,{name:"MasonryItem",children:A(e)}),[A]),isFetching:m}),eM=G&&m;return(0,i.useEffect)(()=>{er&&requestAnimationFrame(()=>{let e=Array.from(ex.current?.querySelectorAll("[data-grid-item-idx]")??[]);if(0===e.length)return;let t=e.map(e=>{let t=e.getAttribute("data-grid-item-idx");return{rect:e.getBoundingClientRect(),itemIdx:t}}),n=0,i=0,a=0,o=0,r=0;for(let e=0;e<t.length;e+=1){let l=t[e]?.rect;for(let s=e+1;s<t.length;s+=1){let e=t[s]?.rect;if(l&&e&&l.right>=e.left&&l.left<=e.right&&l.bottom>=e.top&&l.top<=e.bottom&&l.height>0&&e.height>0){n+=1;let t=Math.max(0,Math.min(l.right,e.right)-Math.max(l.left,e.left))*Math.max(0,Math.min(l.bottom,e.bottom)-Math.max(l.top,e.top));t>100?(i+=1,a+=1,o+=1,r+=1):t>50?(i+=1,a+=1,o+=1):t>20?(i+=1,a+=1):t>10&&(i+=1)}}}n>0&&(0,$.QX)("webapp.masonry.pinOverlapHits",n,{tags:{isAuthenticated:N,isDesktop:H,experimentalMasonryGroup:eg||"unknown"}}),i>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over10",i,{tags:{isAuthenticated:N,isDesktop:H,experimentalMasonryGroup:eg||"unknown"}}),a>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over20",a,{tags:{isAuthenticated:N,isDesktop:H,experimentalMasonryGroup:eg||"unknown"}}),o>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over50",o,{tags:{isAuthenticated:N,isDesktop:H,experimentalMasonryGroup:eg||"unknown"}}),r>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over100",r,{tags:{isAuthenticated:N,isDesktop:H,experimentalMasonryGroup:eg||"unknown"}})})},[U,eg,N,H,er,g]),(0,f.jsxs)(i.Fragment,{children:[G&&!ei.current&&(0,f.jsx)(a.xu,{"aria-live":"polite",display:"visuallyHidden",children:eM?P:O}),(0,f.jsx)("div",{ref:ex,"aria-busy":G?!!eM:void 0,className:"masonryContainer","data-test-id":"masonry-container",id:l,style:Z?{padding:`0 ${J/2}px`}:void 0,children:(0,f.jsxs)("div",{className:ed,children:[Q&&ei.current?(0,f.jsx)(y.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:ep}):null,(0,f.jsx)(a.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?ee*e.maxColumns:void 0,children:ec?(0,f.jsx)(a.GX,{ref:e=>{b&&(b.current=e)},_dynamicHeights:eo||F,_dynamicHeightsV2Experiment:ea,_getColumnSpanConfig:R,_getResponsiveModuleConfigForSecondItem:I,_logTwoColWhitespace:eb,_measureAll:ey,_multiColPositionAlgoV2:el,align:t,columnWidth:U,gutterWidth:J,items:ev,layout:q?K:_??"basic",loadItems:x,measurementStore:et,minCols:Y,renderItem:ew,scrollContainer:en,virtualBufferFactor:.3,virtualize:W}):(0,f.jsx)(a.Rk,{ref:e=>{b&&(b.current=e)},_dynamicHeights:eo||F,_dynamicHeightsV2Experiment:ea,_getColumnSpanConfig:R,_getResponsiveModuleConfigForSecondItem:I,_logTwoColWhitespace:eb,_multiColPositionAlgoV2:el,align:t,columnWidth:U,gutterWidth:J,items:ev,layout:q?K:_??"basic",loadItems:x,measurementStore:et,minCols:Y,renderItem:ew,scrollContainer:en,virtualBufferFactor:.3,virtualize:W})})]})})]})}},587435:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e=!0){let t=e?16:void 0,n=t?Math.floor(t/4):void 0;return{experimentalColumnWidth:e?221:void 0,experimentalGutter:t,experimentalGutterBoints:n}}},39260:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(297728),a=n(730212),o=n(855746);function r(e){let{isAuthenticated:t}=(0,a.B)(),{expName:n,anyEnabled:r,group:l}=function({experimentsClient:e,handlerId:t,isAuthenticated:n,skipActivation:i}){let{checkExperiment:a}=e,o=a(n?"web_masonry_v2_auth":"web_masonry_v2_unauth",{dangerouslySkipActivation:i});return o.group?{expName:n?"web_masonry_v2_auth":"web_masonry_v2_unauth",...o}:"www/[username]/[slug].js"!==t||n?"www/pin/[id].js"!==t||n?{expName:"",anyEnabled:!1,group:""}:{expName:"web_masonry_v2_unauth_pin",...a("web_masonry_v2_unauth_pin",{dangerouslySkipActivation:i})}:{expName:"web_masonry_v2_unauth_board",...a("web_masonry_v2_unauth_board",{dangerouslySkipActivation:i})}}({experimentsClient:(0,i.F)(),handlerId:(0,o.MM)(),isAuthenticated:t,skipActivation:e?.skipActivation??!1});return{expName:n,anyEnabled:r,group:l,isMeasureAllEnabled:"enabled_measure_all"===l||"enabled_measure_all_impression_fix"===l,isImpressionFixEnabled:"control_impression_fix"===l||"enabled_impression_fix"===l||"enabled_measure_all_impression_fix"===l}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/168-e9d2ac5c924bc57d.mjs.map