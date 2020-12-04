$('.close-menu-mobile').click(function(){
	$('.navbar-collapse.collapse').removeClass('show');
});


$('.btn-test').click(function(){
	$(this).hide();
	$('.panel-search').addClass("visible");
});
