/*!
 * Stript To Load Js tab After document is loaded in sololearn
 * Creator: Arnav Kumar
 * Date of Creation: 10/05/2021
 * All Rights Reserved by Arnav Kumar
 * Give proper credits to me for using this code snippet
 */
var es = document.querySelector("#js-tab") || document.createElement("script");
var code = es.innerHTML;
var nes = document.createElement("script");
nes.innerHTML = code;
nes.setAttribute("type","text/javascript");
es.replaceWith(nes);
/* End */
