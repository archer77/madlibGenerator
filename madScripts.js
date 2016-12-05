//madScripts.js
//Author:Alexander Corley

var story;

$(document).ready(function(){
  $(".nav > ul > ul > li").click(function(){
    setCookie("madLib", this.innerHTML, .5);
    window.location = "madLibs.html";
  });
  if (window.location == "madLibs.html") {
    story = madLibs[getCookie("madLib")];
    var inputBox = $("#getWords");
    if (story == undefined) {
      inputBox.innerHTML = "Whoa how did you get here without a story? Click a story on the side to load a new story";
    }
  }
});

/**
 * @brief   save a cookie
 * @source  http://www.w3schools.com/js/js_cookies.asp
 */
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * @brief   get a cookie from saved cookies
 * @source  http://www.w3schools.com/js/js_cookies.asp
 */
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length,c.length);
    }
  }
  return "";
}
