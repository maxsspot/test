function navback () {
	document.getElementById ("nav").style.display = "block";
        document.getElementById ("navigation").style.marginLeft = "-100%";
        document.getElementById ("nav2").style.display = "none";
}	

function opennav () {
   	document.getElementById ("nav").style.display = "none";
        document.getElementById ("navigation").style.marginLeft = "0px";
        document.getElementById ("nav2").style.display = "block";
}	


$('#nav').click(opennav);
$('#nav2').click(navback);
