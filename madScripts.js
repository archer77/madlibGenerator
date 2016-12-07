//madScripts.js
//Author:Alexander Corley

var story;

/**
 * @brief   prepare the page for 
 */
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
    var inputBox = document.getElementById("getWords");
    if (story == undefined) {
      var error = document.createTextNode("some error message");
      inputBox.setAttribute("style", "text-align:center;");
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
  butt.setAttribute("onclick", "fillMadLib();");
  inputBox.appendChild(butt);
    
}

/**
 * @brief   fill in the mad lib for the user and display it
 */
function fillMadLib() {
  var storyArray = story.Story.split("[Word Not Submitted]");
  var outputBox = document.getElementById("displayLib");
  var spann;
  var textt;
  for (var i = 0; i < storyArray.length; i++) {
    textt = document.createTextNode(storyArray[i]);
    outputBox.appendChild(textt);
    if (i == storyArray.length-1) {
      break;
    }
    spann = document.createElement("span");
    spann.classList.add("wordOutputs");
    outputBox.appendChild(spann);
  }
  
  var storyText = document.createTextNode(story.Story);
  var inputs = document.getElementsByClassName("wordInputs");
  var outputs = document.getElementsByClassName("wordOutputs");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() != "")
      outputs[i].innerHTML = inputs[i].value;
    else outputs[i].innerHTML = "Word Not Submitted";
  }
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
