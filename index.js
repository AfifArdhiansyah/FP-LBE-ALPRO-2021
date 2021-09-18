function openPageSkill(pageName, titleName) {
  var i, tabcontent, tabcontent2, tablinks;
  tabcontent = document.getElementsByClassName("skill-content");
  tabcontent2 = document.getElementsByClassName("skill-title");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }

  document.getElementById(pageName).style.display = "block";
  document.getElementById(titleName).style.display = "block";
}
document.getElementById("defaultOpenSkill").click();
document.getElementById("defaultOpenSkill").click();

function openPageExp(pageName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("exp-content");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpenExp").click();

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "NavBar") {
    x.className += " responsive";
  } else {
    x.className = "NavBar";
  }
}

function myFunctionSkill() {
  var x = document.getElementById("tab-skill-id");
  if (x.className === "tab-skill") {
    x.className = "tab-skill responsive2";
  } else {
    x.className = "tab-skill";
  }
}

function myFunctionAlert() {
  var x = document.getElementById("alert-form");
  x.className = "alert submit";
}

function closeAlert() {
  var x = document.getElementById("alert-form");
  x.className = "alert";
}
