(e=document.createElement("div")).setAttribute("class","avodevtools"),e.setAttribute("id","avodevtools"),e.setAttribute("contenteditable","false"),document.getElementsByTagName("body")[0].appendChild(e);var e=document.getElementById("avodevtools");(t=document.createElement("div")).setAttribute("id","avonavbar"),e.appendChild(t);var t=document.getElementById("avonavbar"),n=document.createElement("button");n.innerText="Edit",n.setAttribute("class","avoedit"),n.setAttribute("onclick","if(document.body.contentEditable !== 'true') {    document.body.contentEditable = 'true'; document.designMode='on'; void 0} else {    document.body.contentEditable = 'false'; document.designMode='off'; void 0}"),t.appendChild(n);var o=document.createElement("button");o.innerText="X-Ray",o.setAttribute("class","avoxray"),o.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);}())"),t.appendChild(o);var r=document.createElement("button");r.innerText="Elements",r.setAttribute("class","avoelements avoactive"),r.setAttribute("onclick","avogoelements()"),t.appendChild(r);var c=document.createElement("button");c.innerText="Console",c.setAttribute("class","avoconsole"),c.setAttribute("onclick","avogoconsole()"),t.appendChild(c);var a=document.createElement("button");a.innerText="Other",a.setAttribute("class","avoother"),a.setAttribute("onclick","othergo()"),t.appendChild(a);var s=document.createElement("button");s.innerText="X",s.setAttribute("class","avoclosebtn"),s.setAttribute("onclick","avoclosedevtools()"),t.appendChild(s),async function(){var t,n=await fetch(window.location);t=await n.text();var o=document.createElement("div");o.innerText=t,o.setAttribute("class","avothecode"),e.appendChild(o)}();var i=document.createElement("div");i.setAttribute("id","avologs"),e.appendChild(i);var l=document.createElement("div");l.setAttribute("class","avologinput2"),e.appendChild(l);var d=document.createElement("div");d.setAttribute("class","avologinputbefore"),d.innerText=">",l.appendChild(d);var p=document.createElement("input");p.setAttribute("id","avologinput"),p.setAttribute("autofocus",""),p.setAttribute("autocomplete","off"),l.appendChild(p);var u=document.createElement("script");u.id="avoscript";var m=document.createElement("div"),v=document.createElement("br"),g=document.createElement("br"),b=document.createElement("br"),h=document.createElement("br"),x=document.createElement("br"),y=document.createElement("br"),f=document.createElement("br"),E=document.createElement("br"),C=document.createElement("br"),k=document.createElement("br"),T=document.createElement("br");m.innerText="Other Features:";var A=document.createElement("button");A.setAttribute("onclick","greyscale()"),A.setAttribute("class","obtn"),A.innerText="Toggle Greyscale";var j=document.createElement("button");j.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/gh.min.js';document.body.appendChild(script);avoclosedevtools()}())"),j.setAttribute("class","obtn"),j.innerText="Game Hub";var B=document.createElement("button");B.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/tc.min.js';document.body.appendChild(script)}())"),B.setAttribute("class","obtn"),B.innerText="Tab Cloak";var w=document.createElement("button");w.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/ugly.min.js';document.body.appendChild(script);avoclosedevtools()}())"),w.setAttribute("class","obtn"),w.innerText="Uglify";var N=document.createElement("button");N.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/piano.min.js';document.body.appendChild(script);avoclosedevtools()}())"),N.setAttribute("class","obtn"),N.innerText="Piano";var z=document.createElement("button");z.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/tri.min.js';document.body.appendChild(script);avoclosedevtools()}())"),z.setAttribute("class","obtn"),z.innerText="TriView";var I=document.createElement("button");I.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/mlight.min.js';document.body.appendChild(script);avoclosedevtools()}())"),I.setAttribute("class","obtn"),I.innerText="MouseLight";var L=document.createElement("button");L.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/dark.min.js';document.body.appendChild(script);avoclosedevtools()}())"),L.setAttribute("class","obtn"),L.innerText="Dark Mode";var V=document.createElement("button");V.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/autoclicker.min.js';document.body.appendChild(script);avoclosedevtools()}())"),V.setAttribute("class","obtn"),V.innerText="Autoclicker";var H=document.createElement("button");H.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/tic.min.js';document.body.appendChild(script);avoclosedevtools()}())"),H.setAttribute("class","obtn"),H.innerText="Ultimate Tic-Tac-Toe";var G=document.createElement("button");G.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/weird.js';document.body.appendChild(script);avoclosedevtools()}())"),G.setAttribute("class","obtn"),G.innerText="Weird Characters (WIP)";var P=document.createElement("button");P.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/edpuzzle.min.js';document.body.appendChild(script);avoclosedevtools()}())"),P.setAttribute("class","obtn"),P.innerText="Skipper";var M=document.createElement("button");M.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/blooketaac.min.js';document.body.appendChild(script);avoclosedevtools()}())"),M.setAttribute("class","obtn"),M.innerText="AAC (Blooket)";var W=document.createElement("button");W.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/blooketantiban.min.js';document.body.appendChild(script);avoclosedevtools()}())"),W.setAttribute("class","obtn"),W.innerText="Anti-Ban (Blooket)";var U=document.createElement("button");U.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js';document.body.appendChild(script);avoclosedevtools()}())"),U.setAttribute("class","obtn"),U.innerText="Answers";var R=document.createElement("button");R.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/quizizzpts.js';document.body.appendChild(script);avoclosedevtools()}())"),R.setAttribute("class","obtn"),R.innerText="Point Giver (Quizizz)";var S=document.createElement("button");S.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/historyflood.min.js';document.body.appendChild(script);avoclosedevtools()}())"),S.setAttribute("class","obtn"),S.innerText="Flood History";var F=document.createElement("button");F.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/nukegame.js';document.body.appendChild(script);avoclosedevtools()}())"),F.setAttribute("class","obtn"),F.innerText="Nuke (Game)";var K=document.createElement("button");K.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/cell.js';document.body.appendChild(script);avoclosedevtools()}())"),K.setAttribute("class","obtn"),K.innerText="Cell Cursor";var O=document.createElement("button");O.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/snow.js';document.body.appendChild(script);avoclosedevtools()}())"),O.setAttribute("class","obtn"),O.innerText="Snow";var X=document.createElement("button");X.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/crooked.js';document.body.appendChild(script);avoclosedevtools()}())"),X.setAttribute("class","obtn"),X.innerText="Crooked Page";var q=document.createElement("button");q.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/panic.js';document.body.appendChild(script);avoclosedevtools()}())"),q.setAttribute("class","obtn"),q.innerText="Panic";var D=document.createElement("button");D.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/upper.js';document.body.appendChild(script);avoclosedevtools()}())"),D.setAttribute("class","obtn"),D.innerText="Uppercase";var Q=document.createElement("button");Q.setAttribute("onclick","javascript: (function () { document.body.style.filter = 'blur(5px)'; })();"),Q.setAttribute("class","obtn"),Q.innerText="Blur";var _=document.createElement("button");_.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/unblocker.js';document.body.appendChild(script);avoclosedevtools()}())"),_.setAttribute("class","obtn"),_.innerText="Blur";var J=document.createElement("button");J.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/kahootnamegenbypass.min.js';document.body.appendChild(script);avoclosedevtools()}())"),J.setAttribute("class","obtn"),J.innerText="Name-Gen Bypass (Kahoot)";var Y=document.createElement("button");Y.setAttribute("onclick","javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/kahootnamefilterbypass.min.js';document.body.appendChild(script);avoclosedevtools()}())"),Y.setAttribute("class","obtn"),Y.innerText="Name Profanity Bypass (Kahoot)";var Z=document.createElement("button");Z.setAttribute("class","obtn"),Z.innerHTML="<a href='https://github.com/cheeselicker100/specialveng' target='_blank' style='text-decoration:none; color:#f7812d;'>Github <i class='fa fa-github'></i></a>",m.setAttribute("class","avotheother"),e.appendChild(m),m.appendChild(v),m.appendChild(j),m.appendChild(g),m.appendChild(B),m.appendChild(b),m.appendChild(V),m.appendChild(h),m.appendChild(L),m.appendChild(x),m.appendChild(N),m.appendChild(y),m.appendChild(z),m.appendChild(f),m.appendChild(I),m.appendChild(E),m.appendChild(w),m.appendChild(C),m.appendChild(A),m.appendChild(k),m.appendChild(H),m.appendChild(T),m.appendChild(G),m.appendChild(P),m.appendChild(M),m.appendChild(W),m.appendChild(U),m.appendChild(R),m.appendChild(S),m.appendChild(F),m.appendChild(K),m.appendChild(O),m.appendChild(X),m.appendChild(q),m.appendChild(D),m.appendChild(Q),m.appendChild(_),m.appendChild(J),m.appendChild(Y);var $=document.createElement("style");$.id="avostyle",$.innerText="@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');",$.innerText+=".avodevtools {font-family: Roboto;}",$.innerText+=".avodevtools {position: fixed; right: 8px; top: 8px; bottom: 8px; width: 500px; background: #630932; color: white; border-radius: 10px; text-align: center; z-index: 9999999999;}",$.innerText+=".avoelements {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; margin: 0; margin-top: 10px; border-right: none; border-left: none;}",$.innerText+=".avoelements:hover {background: #1f1840;}",$.innerText+=".avothecode {border: 1px solid white; margin: 5px; margin-top: 10px; border-radius: 10px; padding: 5px; overflow: scroll; text-align: left; height: 90%;}",$.innerText+=".avotheother {border: 1px solid white; margin: 5px; margin-top: 10px; border-radius: 10px; padding: 5px; overflow: scroll; text-align: left; height: 90%; display: none;}",$.innerText+=".avoedit {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; border-radius: 10px 0 0 10px; margin: 0; margin-top: 10px; margin-left: 5px;}",$.innerText+=".avoedit:hover {background: #1f1840;}",$.innerText+=".obtn {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; border-radius: 10px; margin: 0; margin-top: 10px; margin-left: 5px;} .obtn:hover {background: #630932;}",$.innerText+="#greybtn:hover {background: #1f1840;}",$.innerText+=".avoxray {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; margin: 0; margin-top: 10px; border-left: none;}",$.innerText+=".avoxray:hover {background: #1f1840;}",$.innerText+=".avoconsole {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; border-right: none; margin: 0; margin-top: 10px;}",$.innerText+=".avoconsole:hover {background: #1f1840;}",$.innerText+=".avoother {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; border-radius: 0 10px 10px 0; margin: 0; margin-top: 10px;}",$.innerText+=".avoother:hover {background: #1f1840;}",$.innerText+=".avoclosebtn {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; border-radius: 10px; margin-right: 10px; margin-top: 10px; float: right;}",$.innerText+=".avoclosebtn:hover {background: #1f1840;}",$.innerText+=".avoactive {background: #ff9369; color: purple;}",$.innerText+=".avoactive:hover {background: #1f1840;}",$.innerText+="#avologinput {outline: none; border: none; width: 100%; font-size: 15px;background:#f7812d;color:orange;}",$.innerText+=".avologinput2 {display: flex; font-size: 15px;margin: 10px; display: none;}",$.innerText+=".avolog {padding: 2.5px; border-radius: 10px; font-size: 15px;margin: 10px; text-align: left;}",$.innerText+="#avologs {max-height: 89%; overflow: scroll;display: none;}",$.innerText+=".avoerror {color: red; background: lightpink; padding: 2.5px; border-radius: 10px; font-size: 15px;margin: 10px; text-align: left;}",$.innerText+=".avowarn {color: #ff9369; background: orange; padding: 2.5px; border-radius: 5px; font-size: 15px;margin: 10px; text-align: left;}",$.innerText+="::-webkit-scrollbar {display: none;}",document.getElementsByTagName("body")[0].appendChild($),u.innerText+='console.log = function(text) {var log = document.createElement("p");log.innerText = text;log.className = "avolog";document.getElementById("avologs").appendChild(log);var logs = document.getElementById("avologs");logs.scrollTop = logs.scrollHeight;};',u.innerText+='console.warn = function(text) {var log = document.createElement("p");log.innerText = text;log.className = "avowarn";document.getElementById("avologs").appendChild(log);var logs = document.getElementById("avologs");logs.scrollTop = logs.scrollHeight;};',u.innerText+='console.error = function(text) {var log = document.createElement("p");log.innerText = text;log.className = "avoerror";document.getElementById("avologs").appendChild(log);var logs = document.getElementById("avologs");logs.scrollTop = logs.scrollHeight;};',u.innerText+='console.clear = function() {document.getElementById("avologs").innerText = "";console.log("Console was cleared");};',u.innerText+='window.onerror = function (err, url, line) {var log = document.createElement("p");if (url == "") {url = "<anonymous>"};log.innerText = err + " at " + url + ":" + line;log.className = "avoerror";document.getElementById("avologs").appendChild(log);var logs = document.getElementById("avologs");logs.scrollTop = logs.scrollHeight;};',u.innerText+="function runcode(code) {var res = eval(code);console.log(res);};",u.innerText+='loginput = document.getElementById("avologinput");loginput.addEventListener("keyup", function onEvent(e) {;if (e.keyCode === 13) {;if (this.value !== "") {;if (!this.value.startsWith("console.log") && !this.value.startsWith("console.warn") && !this.value.startsWith("console.error")) {console.log(this.value)};var code = this.value;this.value = "";runcode(code);};};});',u.innerText+='function avogoconsole() {var logs = document.getElementById("avologs"); var loginput2 = document.getElementsByClassName("avologinput2")[0]; var thecode = document.getElementsByClassName("avothecode")[0]; logs.style.display = "inherit"; loginput2.style.display = "flex"; thecode.style.display = "none"; document.getElementById("avologinput").focus(); var elements = document.getElementsByClassName("avoelements")[0]; var console = document.getElementsByClassName("avoconsole")[0];var otherstuff = document.getElementsByClassName("avotheother")[0];otherstuff.style.display = "none";elements.classList.remove("avoactive");other.classList.remove("avoactive");console.classList.add("avoactive");}',u.innerText+='function othergo() {var logs = document.getElementById("avologs"); var loginput2 = document.getElementsByClassName("avologinput2")[0]; var thecode = document.getElementsByClassName("avothecode")[0]; var otherstuff = document.getElementsByClassName("avotheother")[0];logs.style.display = "none"; loginput2.style.display = "none";thecode.style.display = "none";otherstuff.style.display = "inherit";document.getElementById("avologinput").focus(); var elements = document.getElementsByClassName("avoelements")[0]; var console = document.getElementsByClassName("avoconsole")[0];other.classList.add("avoactive");elements.classList.remove("avoactive");console.classList.remove("avoactive");}',u.innerText+='function avogoelements() {var logs = document.getElementById("avologs"); var loginput2 = document.getElementsByClassName("avologinput2")[0]; var thecode = document.getElementsByClassName("avothecode")[0]; var otherstuff = document.getElementsByClassName("avotheother")[0];  logs.style.display = "none"; otherstuff.style.display = "none"; loginput2.style.display = "none"; thecode.style.display = "inherit"; document.getElementById("avologinput").focus(); var elements = document.getElementsByClassName("avoelements")[0]; var console = document.getElementsByClassName("avoconsole")[0]; elements.classList.add("avoactive");other.classList.remove("avoactive");console.classList.remove("avoactive");}',u.innerText+='function avoclosedevtools() {var devtools = document.getElementById("avodevtools"); document.body.removeChild(devtools);var devtools = document.getElementById("avostyle"); document.body.removeChild(devtools);var devtools = document.getElementById("avoscript"); document.body.removeChild(devtools)}',u.innerText+='function greyscale(){if (clicked) {clicked = false;document.body.style.filter = "grayscale(0%)";} else {clicked = true;document.body.style.filter = "grayscale(100%)";}}',document.getElementsByTagName("body")[0].appendChild(u);
