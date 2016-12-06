//madScripts.js
//Author:Alexander Corley

var story;

$(document).ready(function(){
  $(".nav > ul > ul > li").click(function(){
    setCookie("madLib", this.innerHTML, .5);
    window.location = "madLibs.html";
  });
  var sPath = window.location.pathname;
  var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
  if (sPage == "madLibs.html") {
    var title = getCookie("madLib");
    story = getMadLib(title);
    var inputBox = document.getElementById("getWords");//$("#getWords");
    if (story == undefined) {
      var error = document.createTextNode("some error message");
      inputBox.appendChild(error);
    }
    else {
      fillInputBox(title, inputBox);
    }
  }
});

function fillInputBox(title, inputBox) {
  var para;
  var wordIn;
  var textNode;
  for (var index = 0; index < story.words.length; index++) {
    para = document.createElement("p");
    wordIn = document.createElement("input");
    para.appendChild(document.createTextNode(story.words[index]));
    wordIn.classList.add("wordInputs");
    wordIn.setAttribute("placeholder", "Enter a word HERE");
    para.appendChild(wordIn);
    inputBox.appendChild(para);
  }
  var butt = document.createElement("button");
  butt.appendChild(document.createTextNode("Mad-Lib"));
  butt.classList.add("submitButton");
  butt.click(fillMadLib());
  inputBox.appendChild(butt);
    
}

/**
 * @brief   fill in the mad lib for the user and display it
 */
function fillMadLib() {
  
}

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
