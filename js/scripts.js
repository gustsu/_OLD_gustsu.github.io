//  Scripts

















//my code for the lightbox - thanks to Andrew Chalkley at teamtreehouse.com

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $("<p></p>");
//var $cap2 = $("<p id='smallcapt'>Click the image again to view fullscreen</p>");
$overlay.append($caption);
$overlay.append($image);
//$overlay.append($cap2);


$("body").append($overlay);


$(".gallink").click( function(event) {
    event.preventDefault();
    var loc = $(this).attr("href");
    
    $image.attr("src", loc);
    //console.log(href);
    //$overlay.slideDown(500);
    //$overlay.show();
    $overlay.fadeIn(300);
    var curcap = $(this).attr("alt");
    $caption.text(curcap);
});

$image.click(function(){
    //alert($(this).attr("src"));
    //window.location.href = "./" + $image.attr("src");
    window.location.replace($image.attr("src"));
});


$overlay.click(function(){
    $(this).fadeOut(500);
    //$(this).hide();

});






//code for back to top button

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 125,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 520,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
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