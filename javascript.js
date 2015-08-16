//javaScript for the index page

$("#mobile-menu").click(function(){
	$('#nav-list').toggle();
})






//javaScript for the form on the contact page

$("input").click(function(){
	$(this).css({"border": "solid", "border-width": "3px", "border-color": "#66FF99"});
	if ( $("input").not( (this) ) ) {
		$("input").(this).css({"border-width": "1px", "border-color": "black"});
	}
})




