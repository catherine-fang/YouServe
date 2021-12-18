function showHideSection(section){
  var x = document.getElementById(section);
    if (x.style.display === 'none') {
        x.style.display = "block";
        document.getElementById("showHide").innerHTML = "Add a Review"
    } else {
        x.style.display = "none";
        document.getElementById("showHide").innerHTML = "Exit Out"
    }
