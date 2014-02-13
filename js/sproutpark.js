// Custom JS

$(function() {

	// Hide/show top nav
	$(".toggle-hide").click(function(e) {
		e.preventDefault();
		$(".navbar-nav").toggleClass("hide");
		$(this).toggleClass("opened");
	});

	/*$('.toggle-box').click(function(e){
		e.preventDefault();

		if ( $( ".panel-foldout-down" ).is( ":hidden" ) ) {
			$(".panel-foldout-down" ).slideDown( "slow" );
		} else {
			$( ".panel-foldout-down" ).slideUp("slow" );
		}
	});*/

});