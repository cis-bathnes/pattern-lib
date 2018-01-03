// menu.js
// Adapted from https://www.w3schools.com/howto/howto_js_toggle_class.asp
function showHideMenu(){
  var element = document.getElementById("navigation-primary");

  if (element.classList) {
      element.classList.toggle("navigation-primary--active");
  } else {
      // For IE9
      var classes = element.className.split(" ");
      var i = classes.indexOf("navigation-primary--active");

      if (i >= 0)
          classes.splice(i, 1);
      else
          classes.push("navigation-primary--active");
          element.className = classes.join(" ");
  }
}
