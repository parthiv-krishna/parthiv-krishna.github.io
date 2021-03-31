function showdiv_resume(divName) {
    var divs = ["education", "work-experience", "organizations", "teaching"];
    showdiv(divName, divs);
}

function showdiv(targetDiv, divs) {
    for (var i = 0; i < divs.length; i++) {
        var div = document.getElementById(divs[i]);
        if (div.id == targetDiv) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}