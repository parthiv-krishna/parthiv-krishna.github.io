function showdiv_resume(divName) {
    var divs = ["education", "work-experience", "organizations", "teaching"];
    showdiv(divName, divs);
}

function showdiv_projects(divName) {
    var divs = ["drone-research", "pupper", "hopper", "cs107e", "frc"];
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