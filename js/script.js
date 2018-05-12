
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
    document.getElementById("myMenu").style.height = "3em";
    var x = document.getElementById("myMenu")
    x.className = "menu";
    var but = document.getElementById('openButton');
	but.setAttribute("onclick","openNav()")
}

window.onresize = function(event) {
    document.getElementById("myMenu").style.height = "3em";
    var x = document.getElementById("myMenu")
    x.className = "menu";
    var but = document.getElementById('openButton');
    but.setAttribute("onclick","openNav()")
};

var imagesArray = ["../img/imac_pro_01_large.png","../img/imac_pro_02_large.png","../img/imac_pro_03_large.png","../img/imac_pro_04_large.png","../img/imac_pro_05_large.png","../img/imac_pro_06_large.png"]
$(document).ready(function(){
	var num = Math.floor(Math.random() *6);
	document.getElementById("iMacImg").src= imagesArray[num];
})
