
/* Open */
function openNav() {
    document.getElementById("myMenu").style.height = "100%";
    var x = document.getElementById("myMenu")
    if(x.className === "menu"){
		x.className += " responsive";
	}
	var but = document.getElementById('openButton');
	but.setAttribute("onclick","closeNav()")
}

/* Close */
function closeNav() {
    document.getElementById("myMenu").style.height = "2.72em";
    var x = document.getElementById("myMenu")
    x.className = "menu";
    var but = document.getElementById('openButton');
	but.setAttribute("onclick","openNav()")
}