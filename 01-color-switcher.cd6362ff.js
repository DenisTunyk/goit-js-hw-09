const t={body:document.querySelector("body"),start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};let e;t.start.addEventListener("click",(function(){t.stop.disabled=!1,t.start.disabled=!0,e=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.body.style.background=e}),1e3)})),t.stop.addEventListener("click",(function(){t.start.disabled=!1,t.stop.disabled=!0,clearInterval(e)})),t.stop.disabled=!1;
//# sourceMappingURL=01-color-switcher.cd6362ff.js.map
