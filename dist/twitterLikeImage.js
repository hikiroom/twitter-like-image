!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.TwitterLikeImage=e():t.TwitterLikeImage=e()}(this,(function(){return(()=>{"use strict";var t={627:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.style=void 0,e.style={".twitter-like-image":{width:"100%",borderRadius:"20px",position:"relative",overflow:"hidden"},".twitter-like-image::before":{content:"''",display:"block",width:"100%",paddingTop:"50%"},".content":{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",position:"absolute",width:"100%",height:"100%",left:"0",top:"0",gridGap:"4px",listStyle:"none",margin:"0",padding:"0"},".item":{width:"100%",height:"100%",overflow:"hidden"},".item:nth-last-child(1)":{gridColumn:"1/3",gridRow:"1/3"},".item:nth-last-child(2)":{gridColumn:"1",gridRow:"1/3"},".item:nth-last-child(2) + .item":{gridColumn:"2",gridRow:"1/3"},".item:nth-last-child(3)":{gridColumn:"1",gridRow:"1"},".item:nth-last-child(3) + .item":{gridColumn:"1",gridRow:"2"},".item:nth-last-child(3) + .item + .item":{gridColumn:"2",gridRow:"1/3"},".item:nth-last-child(4)":{gridColumn:"1/2",gridRow:"1/2"},".item:nth-last-child(4) + .item":{gridColumn:"2/3",gridRow:"1/2"},".item:nth-last-child(4) + .item + .item":{gridColumn:"1/2",gridRow:"2/3"},".item:nth-last-child(4) + .item + .item + .item":{gridColumn:"2/3",gridRow:"2/3"},".item button":{display:"block",border:"0",padding:"0",background:"transparent",width:"100%",height:"100%"},".item img":{width:"100%",height:"100%",display:"block",objectFit:"cover"},".backdrop":{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",overflow:"hidden",background:"rgba(0, 0, 0, 0.7)",transition:"opacity 0.2s, visibility 0.2s",position:"fixed",top:"0",left:"0",zIndex:100},".backdrop.is-hide":{opacity:"0",visibility:"hidden"},".backdrop-content":{display:"flex",alignItems:"center",width:"100%",listStyle:"none",margin:"0",padding:"0"},".backdrop-content.is-animation":{transition:"0.4s cubic-bezier(0.33, 0.98, 0.77, 0.98)"},".backdrop-item":{display:"flex",height:"100%",minWidth:"100%",alignItems:"center",justifyContent:"center",overflow:"hidden"},".backdrop-item img":{width:"100%",height:"100%",objectFit:"contain"},".backdrop-caption":{minHeight:"80px",width:"100%",background:"rgba(0, 0, 0, 0.5)",position:"absolute",bottom:"0",left:"0",padding:"10px 15px",color:"white",boxSizing:"border-box",margin:"0"},".backdrop-next,.backdrop-prev":{display:"flex",alignItems:"center",height:"100%",paddingLeft:"10px",paddingRight:"10px",position:"absolute",top:"0",border:"0",background:"transparent",overflow:"hidden"},".backdrop-next.is-hide,.backdrop-prev.is-hide":{display:"none"},".backdrop-next:focus,.backdrop-prev:focus":{outline:"none"},".backdrop-next:focus::before,.backdrop-prev:focus::before":{border:"2px solid rgba(255, 255, 255, 0.4)"},".backdrop-next:hover::before,.backdrop-prev:hover::before":{background:"rgba(255, 255, 255, 0.1)"},".backdrop-next::before,.backdrop-prev::before":{content:"''",display:"block",width:"38px",height:"38px",borderRadius:"50%",background:"rgba(0, 0, 0, 0.1)",transition:"0.3s",border:"2px solid transparent"},".backdrop-next::after,.backdrop-prev::after":{content:"''",display:"block",width:"8px",height:"8px",position:"absolute",top:"calc(50% - 5px)"},".backdrop-prev":{left:"0"},".backdrop-prev::after":{borderLeft:"2px solid rgba(255, 255, 255, 0.6)",borderTop:"2px solid rgba(255, 255, 255, 0.6)",transform:"rotate(-45deg)",right:"calc(50% - 6px)"},".backdrop-next":{right:"0"},".backdrop-next::after":{borderTop:"2px solid rgba(255, 255, 255, 0.6)",borderRight:"2px solid rgba(255, 255, 255, 0.6)",transform:"rotate(45deg)",left:"calc(50% - 6px)"},".backdrop-close":{display:"block",width:"38px",height:"38px",borderRadius:"50%",background:"rgba(0, 0, 0, 0.1)",position:"absolute",overflow:"hidden",top:"20px",left:"10px",transition:"0.3s",border:"2px solid transparent"},".backdrop-close:hover":{background:"rgba(255, 255, 255, 0.1)"},".backdrop-close:focus":{outline:"none",border:"2px solid rgba(255, 255, 255, 0.4)"},".backdrop-close::before,.backdrop-close::after":{content:"''",display:"block",width:"16px",height:"2px",background:"rgba(255, 255, 255, 0.6)",position:"absolute",top:"calc(50% - 1px)",left:"calc(50% - 8px)"},".backdrop-close::before":{transform:"rotate(45deg)"},".backdrop-close::after":{transform:"rotate(-45deg)"}}},605:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.LockAt=e.windowUnLock=e.windowLock=e.createElement=e.lowerCamelCaseToKebabCase=e.styleStringToStyleElement=e.styleObjectToStyleString=e.FOCUSABLE_ELEMENTS=void 0,e.FOCUSABLE_ELEMENTS='button:not(.is-hide), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])',e.styleObjectToStyleString=t=>{let o="";for(const[i,r]of Object.entries(t)){o+=`${i} {`;for(const[t,i]of Object.entries(r))o+=`${e.lowerCamelCaseToKebabCase(t)}: ${i};`;o+="}"}return o},e.styleStringToStyleElement=t=>{const e=document.createElement("style");return e.insertAdjacentText("beforeend",t),e},e.lowerCamelCaseToKebabCase=t=>t.replace(/(?!=[A-Z]|^.)([A-Z])/g,(t=>`-${t.charAt(0).toLowerCase()}`)),e.createElement=(t,e,o)=>{const i=document.createElement(t);for(const[t,o]of Object.entries(e))i.setAttribute(t,o);return o&&o.length>0&&o.forEach((t=>{i.append(t)})),i},e.windowLock=()=>{const t=document.body,e=window.pageYOffset;t.style.width="100%",t.style.position="fixed",t.style.top=`-${e}px`},e.windowUnLock=t=>{const e=document.body;e.style.width="",e.style.position="",e.style.top="",window.scrollTo(0,t)},e.LockAt=class{constructor(t){this.loopEvent=this.focusLoop.bind(this),this.wrapperElement=t,this.focusableElements=t.querySelectorAll(e.FOCUSABLE_ELEMENTS),this.firstElement=this.focusableElements[0],this.lastElement=this.focusableElements[this.focusableElements.length-1],this.addEvents()}resetFocusableElements(){this.removeEvents(),this.focusableElements=this.wrapperElement.querySelectorAll(e.FOCUSABLE_ELEMENTS),this.firstElement=this.focusableElements[0],this.lastElement=this.focusableElements[this.focusableElements.length-1],this.addEvents()}addEvents(){this.firstElement.addEventListener("keydown",this.loopEvent),this.lastElement.addEventListener("keydown",this.loopEvent)}removeEvents(){this.firstElement.removeEventListener("keydown",this.loopEvent),this.lastElement.removeEventListener("keydown",this.loopEvent)}focusLoop(t){const e="Tab"===t.key,o=t.shiftKey,i=t.target,r=i===this.firstElement,n=i===this.lastElement;e&&o&&r?(t.preventDefault(),this.lastElement.focus()):e&&!o&&n&&(t.preventDefault(),this.firstElement.focus())}}}},e={};function o(i){var r=e[i];if(void 0!==r)return r.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,o),n.exports}var i={};return(()=>{const t=o(627),e=o(605);class i extends HTMLElement{constructor(){super(),this.init=!1,this.content=null,this.backdrop=null,this.backdropContent=null,this.backdropCaption=null,this.backdropPrev=null,this.backdropNext=null,this.backdropClose=null,this.items=null,this.srcArr=[],this.altArr=[],this.activeItemIdx=-1,this.lockPoint=0,this.attachShadow({mode:"open"}),this.appendTemplateToShadowDom()}connectedCallback(){this.init||(this.init=!0,this.setElementsToThis(),this.appendItemElements(),this.setEventOfBackdropElements(),this.closeBackDrop())}appendTemplateToShadowDom(){var o;const i=document.createElement("template");i.innerHTML='\n            <div class="twitter-like-image">\n            <ul class="content"></ul>\n            <div class="backdrop" tabindex="-1">\n            <ul class="backdrop-content"></ul>\n            <p class="backdrop-caption"></p>\n            <button class="backdrop-prev" aria-label="previous"></button>\n            <button class="backdrop-next" aria-label="next"></button>\n            <button class="backdrop-close" aria-label="close"></button>\n            </div>\n            </div>\n        ';const r=i.content.cloneNode(!0),n=e.styleStringToStyleElement(e.styleObjectToStyleString(t.style));null===(o=this.shadowRoot)||void 0===o||o.append(r,n)}setElementsToThis(){var t,e,o,i,r,n,s;const a=this.getHostAttrArr("src"),d=this.getHostAttrArr("alt"),l=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".content"),c=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".backdrop"),h=null===(o=this.shadowRoot)||void 0===o?void 0:o.querySelector(".backdrop-content"),p=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".backdrop-caption"),b=null===(r=this.shadowRoot)||void 0===r?void 0:r.querySelector(".backdrop-prev"),m=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(".backdrop-next"),u=null===(s=this.shadowRoot)||void 0===s?void 0:s.querySelector(".backdrop-close");if(!(c&&l&&h&&p&&b&&m&&u))throw new Error("structure elements do not exist.");this.altArr=d,this.srcArr=a,this.content=l,this.backdrop=c,this.backdropContent=h,this.backdropCaption=p,this.backdropPrev=b,this.backdropNext=m,this.backdropClose=u}appendItemElements(){const{content:t,backdropContent:o,srcArr:i,altArr:r}=this;if(!t||!o)throw new Error("Either content or backdrop-content does not exist.");i.forEach(((i,n)=>{var s,a;const d=e.createElement("img",{src:i,alt:null!==(s=r[n])&&void 0!==s?s:""}),l=e.createElement("button",{type:"button","aria-label":"画像を拡大表示する"},[d]),c=e.createElement("li",{class:"item"},[l]);l.addEventListener("click",this.openBackDrop.bind(this,n)),t.append(c);const h=e.createElement("img",{src:i,alt:null!==(a=r[n])&&void 0!==a?a:""}),p=e.createElement("li",{class:"backdrop-item"},[h]);o.append(p)}))}setEventOfBackdropElements(){const{backdrop:t,backdropPrev:e,backdropNext:o,backdropClose:i}=this;if(!(t&&e&&o&&i))throw new Error("");t.addEventListener("transitionend",this.readyBackdropContent.bind(this)),t.addEventListener("click",this.closeBackDropIfMe.bind(this)),e.addEventListener("click",this.switchTargetImageToPrevious.bind(this)),o.addEventListener("click",this.switchTargetImageToNext.bind(this)),i.addEventListener("click",this.closeBackDrop.bind(this))}readyBackdropContent(t){const{backdropContent:e}=this;if(!e)throw new Error("Either content or backdrop-content does not exist.");t.target===t.currentTarget&&"opacity"===t.propertyName&&(e.classList.contains("is-animation")?e.classList.remove("is-animation"):e.classList.add("is-animation"))}getHostAttrArr(t){var e,o;const i=null===(o=null===(e=this.shadowRoot)||void 0===e?void 0:e.host.getAttribute(t))||void 0===o?void 0:o.replace(/\s/g,"").split(",");if(!i||i.length<1||i.length>4)throw new Error(`Something is wrong of ${t} attribute.`);return i}openBackDrop(t){const{backdrop:o}=this;if(!o)throw new Error("");this.switchTargetImageTo(t),o.classList.remove("is-hide"),this.lockPoint=window.pageYOffset,e.windowLock()}closeBackDrop(){const{backdrop:t}=this;if(!t)throw new Error("");this.switchTargetImageTo(-1),t.classList.add("is-hide"),e.windowUnLock(this.lockPoint),this.lockPoint=0}closeBackDropIfMe(t){t.target===t.currentTarget&&this.closeBackDrop()}switchTargetImageTo(t){var e;this.activeItemIdx=t,this.translateTo(t),this.changeStateOfBackdropPrevBtn(0===t),this.changeStateOfBackdropNextBtn(t>=this.srcArr.length-1),this.setCaption(null!==(e=this.altArr[t])&&void 0!==e?e:"")}switchTargetImageToPrevious(){this.switchTargetImageTo(this.activeItemIdx-1)}switchTargetImageToNext(){this.switchTargetImageTo(this.activeItemIdx+1)}changeStateOfBackdropPrevBtn(t){var e,o;t?null===(e=this.backdropPrev)||void 0===e||e.classList.add("is-hide"):null===(o=this.backdropPrev)||void 0===o||o.classList.remove("is-hide")}changeStateOfBackdropNextBtn(t){var e,o;t?null===(e=this.backdropNext)||void 0===e||e.classList.add("is-hide"):null===(o=this.backdropNext)||void 0===o||o.classList.remove("is-hide")}translateTo(t){const{backdropContent:e}=this;if(!e)throw new Error("");e.style.transform=`translateX(-${100*t}%)`}setCaption(t){const{backdropCaption:e}=this;if(!e)throw new Error("");e.innerText=t}}customElements.define("tl-img",i)})(),i.default})()}));