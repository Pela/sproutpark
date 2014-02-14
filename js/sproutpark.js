// Custom JS

$(function() {

	// Hide/show top nav
	$(".toggle-hide").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("opened");
		$('li.content').toggle('slide', {
			direction: 'right'
		}, 100);
	});

	// Toggle company expand effects
	$('.toggle-box').click(function(e){
		e.preventDefault();
		var $this = $(this);

		$('.toggle-box').not($this).prev().slideUp("fast");
		$('.toggle-box').not($this).next().slideUp("fast");
		$('.toggle-box').not($this).parent().find('.company-logo').removeClass('top-pos', 200);

		$this.prev().slideToggle("fast");
		$this.next().slideToggle("fast");
		$this.parent().find('.company-logo').toggleClass('top-pos', 200);
	});

	/* Smooth scroll to anchor */
	$(".scroll").click(function(e){
    	e.preventDefault();
    	//calculate destination place
    	var dest=0;
    	if( $(this.hash).offset().top > $(document).height()-$(window).height() ) {
    	     dest=$(document).height()-$(window).height();
    	} else {
    	    dest=$(this.hash).offset().top;
    	}
    	//go to destination
    	$('html,body').animate({scrollTop:dest}, 1000,'swing');
  	});

});