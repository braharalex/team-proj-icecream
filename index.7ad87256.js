!function(){var e,t,o,s,n;function r(e){var t=document.getElementById(e);this.sldrRoot=t||document.querySelector(".sim-slider"),this.sldrList=this.sldrRoot.querySelector(".sim-slider-list"),this.sldrElements=this.sldrList.querySelectorAll(".sim-slider-element"),this.sldrElemFirst=this.sldrList.querySelector(".sim-slider-element"),this.leftArrow=this.sldrRoot.querySelector("div.sim-slider-arrow-left"),this.rightArrow=this.sldrRoot.querySelector("div.sim-slider-arrow-right"),this.indicatorDots=this.sldrRoot.querySelector("div.sim-slider-dots"),this.options=r.defaults,r.initialize(this)}new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!1},speed:500,effect:"fade",fadeEffect:{crossFade:!0}}),e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),s=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",s),o.addEventListener("click",s),e.querySelectorAll("a").forEach((function(t){t.addEventListener("click",(function(){e.classList.remove("is-open")}))})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),"function"!=typeof(n=window.Element.prototype).matches&&(n.matches=n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),s=0;o[s]&&o[s]!==t;)++s;return Boolean(o[s])}),"function"!=typeof n.closest&&(n.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.remove("is-hidden"),t.classList.remove("is-hidden"),document.body.classList.add("is-not-overflow")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.add("is-hidden"),t.classList.add("is-hidden"),document.body.classList.remove("is-not-overflow")}))}))})),r.defaults={loop:!0,auto:!0,interval:5e3,arrows:!0,dots:!0},r.prototype.elemPrev=function(e){e=e||1;var t=this.currentElement;this.currentElement-=e,this.currentElement<0&&(this.currentElement=this.elemCount-1),this.options.loop||(0==this.currentElement&&(this.leftArrow.style.display="none"),this.rightArrow.style.display="block"),this.sldrElements[this.currentElement].style.opacity="1",this.sldrElements[t].style.opacity="0",this.options.dots&&(this.dotOn(t),this.dotOff(this.currentElement))},r.prototype.elemNext=function(e){e=e||1;var t=this.currentElement;this.currentElement+=e,this.currentElement>=this.elemCount&&(this.currentElement=0),this.options.loop||(this.currentElement==this.elemCount-1&&(this.rightArrow.style.display="none"),this.leftArrow.style.display="block"),this.sldrElements[this.currentElement].style.opacity="1",this.sldrElements[t].style.opacity="0",this.options.dots&&(this.dotOn(t),this.dotOff(this.currentElement))},r.prototype.dotOn=function(e){this.indicatorDotsAll[e].style.cssText="background-color:#BBB; cursor:pointer;"},r.prototype.dotOff=function(e){this.indicatorDotsAll[e].style.cssText="background-color:#556; cursor:default;"},r.initialize=function(e){e.elemCount=e.sldrElements.length,e.currentElement=0;var t=o();function o(){return(new Date).getTime()}function s(){e.autoScroll=setInterval((function(){var s=o();s-t+10>e.options.interval&&(t=s,e.elemNext())}),e.options.interval)}if(e.elemCount<=1&&(e.options.auto=!1,e.options.arrows=!1,e.options.dots=!1,e.leftArrow.style.display="none",e.rightArrow.style.display="none"),e.elemCount>=1&&(e.sldrElemFirst.style.opacity="1"),e.options.loop?e.options.auto&&(s(),e.sldrList.addEventListener("mouseenter",(function(){clearInterval(e.autoScroll)}),!1),e.sldrList.addEventListener("mouseleave",s,!1)):(e.leftArrow.style.display="none",e.options.auto=!1),e.options.arrows?(e.leftArrow.addEventListener("click",(function(){var s=o();s-t>1e3&&(t=s,e.elemPrev())}),!1),e.rightArrow.addEventListener("click",(function(){var s=o();s-t>1e3&&(t=s,e.elemNext())}),!1)):(e.leftArrow.style.display="none",e.rightArrow.style.display="none"),e.options.dots){for(var n,r=function(s){e.indicatorDotsAll[s].addEventListener("click",(function(){n=Math.abs(s-e.currentElement),s<e.currentElement?(t=o(),e.elemPrev(n)):s>e.currentElement&&(t=o(),e.elemNext(n))}),!1)},i="",l=0;l<e.elemCount;l++)i+='<span class="sim-dot"></span>';e.indicatorDots.innerHTML=i,e.indicatorDotsAll=e.sldrRoot.querySelectorAll("span.sim-dot");for(var c=0;c<e.elemCount;c++)r(c);e.dotOff(0);for(var d=1;d<e.elemCount;d++)e.dotOn(d)}},new r}();
//# sourceMappingURL=index.7ad87256.js.map