const input=document.getElementById("inputField"),button=document.getElementById("searchButton");function isUrl(a=""){return!!(/^http(s?):\/\//.test(a)||a.includes(".")&&" "!==a.substr(0,1))}button.addEventListener("click",async a=>{a.preventDefault(),window.navigator.serviceWorker.register("../sw.js",{scope:__uv$config.prefix}).then(()=>{let a=input.value.trim();if(isUrl(a)?a.startsWith("https://")||a.startsWith("http://")||(a="http://"+a):a="https://www.google.com/search?q="+a,"dip"===localStorage.proxySelect){if("true"===localStorage.aboutBlankCloaking){let d=window.location.origin+`${__DIP$config.prefix+__DIP$config.encodeUrl(a)}`;(win=window.open()).document.body.style.margin="0",win.document.body.style.height="100vh";let b=win.document.createElement("iframe");b.style.border="none",b.style.width="100%",b.style.height="100%",b.style.margin="0",b.src=d,win.document.body.appendChild(b)}else location.assign(window.__DIP.config.prefix+window.__DIP.encodeURL(a))}else if("true"===localStorage.aboutBlankCloaking){let e=window.location.origin+`${__uv$config.prefix+__uv$config.encodeUrl(a)}`;(win=window.open()).document.body.style.margin="0",win.document.body.style.height="100vh";let c=win.document.createElement("iframe");c.style.border="none",c.style.width="100%",c.style.height="100%",c.style.margin="0",c.src=e,win.document.body.appendChild(c)}else window.location.href=__uv$config.prefix+__uv$config.encodeUrl(a)})})