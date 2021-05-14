!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.TwitterLikeImage=e():t.TwitterLikeImage=e()}(this,(function(){return(()=>{"use strict";var t={627:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.style=void 0,e.style={".twitter-like-image":{width:"100%",borderRadius:"20px",position:"relative",overflow:"hidden"},".twitter-like-image::before":{content:"''",display:"block",width:"100%",paddingTop:"50%"},".content":{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",position:"absolute",width:"100%",height:"100%",left:"0",top:"0",gridGap:"4px",listStyle:"none",margin:"0",padding:"0"},".item":{width:"100%",height:"100%",overflow:"hidden"},".item:nth-last-child(1)":{gridColumn:"1/3",gridRow:"1/3"},".item:nth-last-child(2)":{gridColumn:"1",gridRow:"1/3"},".item:nth-last-child(2) + .item":{gridColumn:"2",gridRow:"1/3"},".item:nth-last-child(3)":{gridColumn:"1",gridRow:"1"},".item:nth-last-child(3) + .item":{gridColumn:"1",gridRow:"2"},".item:nth-last-child(3) + .item + .item":{gridColumn:"2",gridRow:"1/3"},".item:nth-last-child(4)":{gridColumn:"1/2",gridRow:"1/2"},".item:nth-last-child(4) + .item":{gridColumn:"2/3",gridRow:"1/2"},".item:nth-last-child(4) + .item + .item":{gridColumn:"1/2",gridRow:"2/3"},".item:nth-last-child(4) + .item + .item + .item":{gridColumn:"2/3",gridRow:"2/3"},".item button":{display:"block",border:"0",padding:"0",background:"transparent",width:"100%",height:"100%"},".item img":{width:"100%",height:"100%",display:"block",objectFit:"cover"},".backdrop":{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",overflow:"hidden",background:"rgba(0, 0, 0, 0.7)",transition:"opacity 0.2s, visibility 0.2s",position:"fixed",top:"0",left:"0",zIndex:100},".backdrop.is-hide":{opacity:"0",visibility:"hidden"},".backdrop-content":{display:"flex",alignItems:"center",width:"100%",listStyle:"none",margin:"0",padding:"0"},".backdrop-content.is-animation":{transition:"0.4s cubic-bezier(0.33, 0.98, 0.77, 0.98)"},".backdrop-item":{display:"flex",height:"100%",minWidth:"100%",alignItems:"center",justifyContent:"center",overflow:"hidden"},".backdrop-item img":{width:"100%",height:"100%",objectFit:"contain"},".backdrop-caption":{minHeight:"80px",width:"100%",background:"rgba(0, 0, 0, 0.5)",position:"absolute",bottom:"0",left:"0",padding:"10px 15px",color:"white",boxSizing:"border-box",margin:"0"},".backdrop-next,.backdrop-prev":{display:"flex",alignItems:"center",height:"100%",paddingLeft:"10px",paddingRight:"10px",position:"absolute",top:"0",border:"0",background:"transparent",overflow:"hidden"},".backdrop-next.is-hide,.backdrop-prev.is-hide":{display:"none"},".backdrop-next:focus,.backdrop-prev:focus":{outline:"none"},".backdrop-next:focus::before,.backdrop-prev:focus::before":{border:"2px solid rgba(255, 255, 255, 0.4)"},".backdrop-next:hover::before,.backdrop-prev:hover::before":{background:"rgba(255, 255, 255, 0.1)"},".backdrop-next::before,.backdrop-prev::before":{content:"''",display:"block",width:"38px",height:"38px",borderRadius:"50%",background:"rgba(0, 0, 0, 0.1)",transition:"0.3s",border:"2px solid transparent"},".backdrop-next::after,.backdrop-prev::after":{content:"''",display:"block",width:"8px",height:"8px",position:"absolute",top:"calc(50% - 5px)"},".backdrop-prev":{left:"0"},".backdrop-prev::after":{borderLeft:"2px solid rgba(255, 255, 255, 0.6)",borderTop:"2px solid rgba(255, 255, 255, 0.6)",transform:"rotate(-45deg)",right:"calc(50% - 6px)"},".backdrop-next":{right:"0"},".backdrop-next::after":{borderTop:"2px solid rgba(255, 255, 255, 0.6)",borderRight:"2px solid rgba(255, 255, 255, 0.6)",transform:"rotate(45deg)",left:"calc(50% - 6px)"},".backdrop-close":{display:"block",width:"38px",height:"38px",borderRadius:"50%",background:"rgba(0, 0, 0, 0.1)",position:"absolute",overflow:"hidden",top:"20px",left:"10px",transition:"0.3s",border:"2px solid transparent"},".backdrop-close:hover":{background:"rgba(255, 255, 255, 0.1)"},".backdrop-close:focus":{outline:"none",border:"2px solid rgba(255, 255, 255, 0.4)"},".backdrop-close::before,.backdrop-close::after":{content:"''",display:"block",width:"16px",height:"2px",background:"rgba(255, 255, 255, 0.6)",position:"absolute",top:"calc(50% - 1px)",left:"calc(50% - 8px)"},".backdrop-close::before":{transform:"rotate(45deg)"},".backdrop-close::after":{transform:"rotate(-45deg)"}}},605:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.LookAt=e.FOCUSABLE_ELEMENTS=e.windowUnLock=e.windowLock=e.getAttrStrArr=e.createElement=e.lowerCamelCaseToKebabCase=e.styleStringToStyleElement=e.styleObjectToStyleString=void 0,e.styleObjectToStyleString=t=>{let o="";for(const[r,i]of Object.entries(t)){o+=`${r} {`;for(const[t,r]of Object.entries(i))o+=`${e.lowerCamelCaseToKebabCase(t)}: ${r};`;o+="}"}return o},e.styleStringToStyleElement=t=>{const e=document.createElement("style");return e.insertAdjacentText("beforeend",t),e},e.lowerCamelCaseToKebabCase=t=>t.replace(/(?!=[A-Z]|^.)([A-Z])/g,(t=>`-${t.charAt(0).toLowerCase()}`)),e.createElement=(t,e,o)=>{const r=document.createElement(t);for(const[t,o]of Object.entries(e))r.setAttribute(t,o);return o&&o.length>0&&o.forEach((t=>{r.append(t)})),r},e.getAttrStrArr=(t,e)=>{var o;const r=null===(o=t.getAttribute(e))||void 0===o?void 0:o.replace(/\s/g,"").split(",");if(!r||r.length<1||r.length>4)throw new Error(`Something is wrong of ${e} attribute.`);return r},e.windowLock=()=>{const t=document.body,e=window.pageYOffset;t.style.width="100%",t.style.position="fixed",t.style.top=`-${e}px`},e.windowUnLock=()=>{const t=document.body,e=t.style.top?Math.abs(parseInt(t.style.top,10)):0;t.style.width="",t.style.position="",t.style.top="",window.scrollTo(0,e)},e.FOCUSABLE_ELEMENTS='button:not(.is-hide), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])',e.LookAt=class{constructor(t){this.loopEvent=this.focusLoop.bind(this),this.wrapperElement=t,this.mutationObserver=new MutationObserver(this.reset.bind(this)),this.focusableElements=this.wrapperElement.querySelectorAll(e.FOCUSABLE_ELEMENTS),this.firstElement=this.focusableElements[0],this.lastElement=this.focusableElements[this.focusableElements.length-1],this.focusableElements.forEach((t=>{this.mutationObserver.observe(t,{attributes:!0})}))}reset(){this.resetEvents(),this.resetFocusableElements()}resetFocusableElements(){this.focusableElements=this.wrapperElement.querySelectorAll(e.FOCUSABLE_ELEMENTS),this.firstElement=this.focusableElements[0],this.lastElement=this.focusableElements[this.focusableElements.length-1]}resetEvents(){this.removeEvents(),this.addEvents()}addEvents(){this.firstElement.addEventListener("keydown",this.loopEvent),this.lastElement.addEventListener("keydown",this.loopEvent)}removeEvents(){this.firstElement.removeEventListener("keydown",this.loopEvent),this.lastElement.removeEventListener("keydown",this.loopEvent)}focusLoop(t){const e="Tab"===t.key,o=t.shiftKey,r=t.target,i=r===this.firstElement,s=r===this.lastElement;e&&o&&i?(t.preventDefault(),this.lastElement.focus()):e&&!o&&s&&(t.preventDefault(),this.firstElement.focus())}}}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,o),s.exports}var r={};return(()=>{const t=o(627),e=o(605);class r extends HTMLElement{constructor(){super(),this.init=!1,this.content=null,this.backdrop=null,this.backdropContent=null,this.backdropCaption=null,this.backdropPrev=null,this.backdropNext=null,this.backdropClose=null,this.item=null,this.backdropContentItem=null,this.srcArr=[],this.altArr=[],this.activeItemIdx=-1,this.lookAt=null,this.attachShadow({mode:"open"}),this.appendTemplateToShadowDom()}connectedCallback(){this.init||(this.init=!0,this.setElementsToThis(),this.appendItemElements(),this.setEventListener(),this.closeBackdrop())}appendTemplateToShadowDom(){var o;const r=document.createElement("template");r.innerHTML='\n            <div class="twitter-like-image">\n            <ul class="content"></ul>\n            <div class="backdrop" tabindex="-1">\n            <ul class="backdrop-content"></ul>\n            <p class="backdrop-caption"></p>\n            <button class="backdrop-prev" aria-label="previous"></button>\n            <button class="backdrop-next" aria-label="next"></button>\n            <button class="backdrop-close" aria-label="close"></button>\n            </div>\n            </div>\n        ';const i=r.content.cloneNode(!0),s=e.styleStringToStyleElement(e.styleObjectToStyleString(t.style));null===(o=this.shadowRoot)||void 0===o||o.append(i,s)}setElementsToThis(){const{shadowRoot:t}=this;if(!t)throw new Error("shadowRoot is not found.");const o=e.getAttrStrArr(t.host,"src"),r=e.getAttrStrArr(t.host,"alt"),i=t.querySelector(".content"),s=t.querySelector(".backdrop"),n=t.querySelector(".backdrop-content"),a=t.querySelector(".backdrop-caption"),c=t.querySelector(".backdrop-prev"),d=t.querySelector(".backdrop-next"),l=t.querySelector(".backdrop-close");if(!(s&&i&&n&&a&&c&&d&&l))throw new Error("structure elements are wrong.");this.altArr=r,this.srcArr=o,this.content=i,this.backdrop=s,this.backdropContent=n,this.backdropCaption=a,this.backdropPrev=c,this.backdropNext=d,this.backdropClose=l,this.item=o.map(((t,o)=>{var i;const s=e.createElement("img",{src:t,alt:null!==(i=r[o])&&void 0!==i?i:""}),n=e.createElement("button",{type:"button","aria-label":"画像を拡大表示する"},[s]);return e.createElement("li",{class:"item"},[n])})),this.backdropContentItem=o.map(((t,o)=>{var i;const s=e.createElement("img",{src:t,alt:null!==(i=r[o])&&void 0!==i?i:""});return e.createElement("li",{class:"backdrop-item"},[s])})),this.lookAt=new e.LookAt(s)}appendItemElements(){const{content:t,backdropContent:e,item:o,backdropContentItem:r}=this;if(!(t&&e&&o&&r))throw new Error("Either content or backdrop-content does not exist.");t.append(...o),e.append(...r)}setEventListener(){const{backdrop:t,backdropPrev:e,backdropNext:o,backdropClose:r,item:i}=this;if(!(t&&e&&o&&r&&i))throw new Error("Either backdrop or backdropPrev or backdropNext or backdropClose or item are wrong.");i.forEach(((t,e)=>{const o=t.querySelector("button");if(!o)throw new Error("button is wrong.");o.addEventListener("click",this.openBackdrop.bind(this,e))})),t.addEventListener("transitionend",this.readyBackdropContent.bind(this)),t.addEventListener("click",this.closeBackdropIfMe.bind(this)),e.addEventListener("click",this.switchTargetImageToPrevious.bind(this)),o.addEventListener("click",this.switchTargetImageToNext.bind(this)),r.addEventListener("click",this.closeBackdrop.bind(this))}readyBackdropContent(t){const{backdropContent:e}=this;if(!e)throw new Error("Either content or backdrop-content are wrong.");t.target===t.currentTarget&&"opacity"===t.propertyName&&(e.classList.contains("is-animation")?e.classList.remove("is-animation"):(e.classList.add("is-animation"),this.focusBackdropBtnAssociatedWithActiveItemIdx()))}focusItemButton(t){var e,o;const{item:r}=this;if(!r)throw new Error("item is wrong.");null===(o=null===(e=r[t])||void 0===e?void 0:e.querySelector("button"))||void 0===o||o.focus()}focusBackdropBtnAssociatedWithActiveItemIdx(){const{backdropPrev:t,backdropNext:e}=this;if(!t||!e)throw new Error("Either backdropPrev or backdropNext are wrong.");this.activeItemIdx===this.srcArr.length-1?t.focus():e.focus()}openBackdrop(t){const{backdrop:o}=this;if(!o)throw new Error("backdrop is wrong.");e.windowLock(),this.switchTargetImageTo(t),o.classList.remove("is-hide")}closeBackdrop(){const{backdrop:t}=this;if(!t)throw new Error("backdrop is wrong.");e.windowUnLock(),this.focusItemButton(this.activeItemIdx),this.switchTargetImageTo(-1),t.classList.add("is-hide")}closeBackdropIfMe(t){t.target===t.currentTarget&&this.closeBackdrop()}switchTargetImageTo(t){var e;this.activeItemIdx=t,this.translateTo(t),this.changeStateOfBackdropPrevBtn(0===t,this.focusBackdropBtnAssociatedWithActiveItemIdx.bind(this)),this.changeStateOfBackdropNextBtn(t===this.srcArr.length-1,this.focusBackdropBtnAssociatedWithActiveItemIdx.bind(this)),this.setCaption(null!==(e=this.altArr[t])&&void 0!==e?e:"")}switchTargetImageToPrevious(){this.switchTargetImageTo(this.activeItemIdx-1)}switchTargetImageToNext(){this.switchTargetImageTo(this.activeItemIdx+1)}changeStateOfBackdropPrevBtn(t,e){var o,r,i;t?(null===(o=this.backdropPrev)||void 0===o||o.classList.add("is-hide"),e&&e()):!t&&(null===(r=this.backdropPrev)||void 0===r?void 0:r.classList.contains("is-hide"))&&(null===(i=this.backdropPrev)||void 0===i||i.classList.remove("is-hide"))}changeStateOfBackdropNextBtn(t,e){var o,r,i;t?(null===(o=this.backdropNext)||void 0===o||o.classList.add("is-hide"),e&&e()):!t&&(null===(r=this.backdropNext)||void 0===r?void 0:r.classList.contains("is-hide"))&&(null===(i=this.backdropNext)||void 0===i||i.classList.remove("is-hide"))}translateTo(t){const{backdropContent:e}=this;if(!e)throw new Error("backdropContent is wrong.");e.style.transform=`translateX(-${100*t}%)`}setCaption(t){const{backdropCaption:e}=this;if(!e)throw new Error("backdropCaption is wrong.");e.innerText=t}}customElements.define("tl-img",r)})(),r.default})()}));