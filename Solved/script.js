var SAVE_TEXT_TO_LOCAL = "SaveText";
var datekeyguy = null; // use as part of the date key.

// this method saved to localStorage
function ButtonClickedMethod($event) {
  var hourgotten = $event.target.id.substring(13, 14); // get the number that was put there on screen start-up
  var idtext = "#" + "textareaguy" + hourgotten; // concatenate # with text with number
  var $textgottencontrol = $(idtext); // get the control
  var $textreceived = $textgottencontrol.val(); // get the value
  localStorage.setItem(datekeyguy + hourgotten, JSON.stringify($textreceived)); // 
}

// if you're on a phone, do make the hour show more leftware
function reportWindowSize($event) {
  if (window.matchMedia("(max-width: 767px)").matches) {
    $(".hour").removeClass("justify-content-end");
  }
  else {
    $(".hour").addClass("justify-content-end");
  }
}