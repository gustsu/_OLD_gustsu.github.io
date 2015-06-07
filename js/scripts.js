//  Scripts

//code for back to top button

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 1,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 520,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 400,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});




//Code for Animsition (page transitions) 
$(document).ready(function() {
  
  $(".animsition").animsition({
  
    inClass               :   'fade-in-right-sm',
    outClass              :   'fade-out-left-sm',
    inDuration            :    1200,
    outDuration           :    700,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
    overlay               :   false,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });
});