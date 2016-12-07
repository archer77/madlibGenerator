//madScripts.js
//Author:Alexander Corley

var story;

/**
 * @brief   prepare the page for 
 */
$(document).ready(function(){
  var sPath = window.location.pathname;
  var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
  if (sPage == "madLibs.html") {
    var title = getCookie("madLib");
    story = getMadLib(title);
    fillNavBox();
    var inputBox = document.getElementById("getWords");
    if (story == undefined) {
      var error = document.createElement("p");
      error.appendChild(document.createTextNode("Looks like you came here out of order... try clicking one of the stories on the side to fix this and move on."));
      var errorImg = document.createElement("img");
      errorImg.setAttribute("src", "error-512.png");
      errorImg.setAttribute("alt", "a picture of something broken");
      errorImg.setAttribute("style", "width:50%;")
      inputBox.setAttribute("style", "text-align:center;");
      inputBox.appendChild(error);
      inputBox.appendChild(errorImg);
    }
    else {
      fillInputBox(title, inputBox);
      document.getElementById("title").innerHTML = story.title + " Mad Lib&#8482;";
    }
  } else fillNavBox();
});

function fillNavBox() {
  var nav = document.getElementById("nav");
  var list1 = document.createElement("ul");
  var listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode("Stories"));
  list1.appendChild(listItem);
  var list2 = document.createElement("ul");
  madLibs.sort(compareTo);
  for (var i = 0; i < madLibs.length; i++) {
    listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(madLibs[i].title));
    if (story != undefined && story.title == madLibs[i].title) listItem.classList.add("active");
    listItem.setAttribute("onclick", "setCookie(\"madLib\", this.innerHTML, .5);window.location = \"madLibs.html\";");
    list2.appendChild(listItem);
  }
  list1.appendChild(list2);
  listItem = document.createElement("li");
  var linkk = document.createElement("a");
  if (story != undefined) linkk.setAttribute("href", "index.html");
  else linkk.setAttribute("href", "#");
  linkk.appendChild(document.createTextNode("Home"));
  listItem.appendChild(linkk);
  list1.appendChild(listItem);
  nav.appendChild(list1);
}

/**
 * @brief   generate the input boxes for the user to enter words into
 */
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
