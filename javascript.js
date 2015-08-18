//javaScript for the mobile menu
//javascript for the mobile menu

$("#mobile-menu").click(function(){
	var visible = true;
	if (visible = true) {
		$("#nav-list").slideToggle(300);
	}
});

$(window).resize(function(){
	if(window.innerWidth > 768) {
		$("#nav-list").removeAttr("style");
	}
});
















