/* ******************************************** */
/* Style Switcher js */
/* *************************************** */  

$(document).ready(function() {
	$('.style-switcher').styleSwitcher({
		preview:false
	});
});

/* ******************************************** */
/* Navigation Menu js */
/* *************************************** */  

$(function(){ 
	var $navMain = $(".navbar-collapse");
	
	$(window).resize(function(){
		if($(window).width() <= 765){
			$navMain.on("click", "a", null, function () {
				$navMain.collapse('hide');
			});
		}
	});
 });
        	 
/* *************************************** */  
/* Way Points JS */
/* *************************************** */  

$(document).ready(function(){
	
	// Hero Way Points
	$('.hero').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeIn');
	}, { 
		offset: '100%' 
	});
	
	// Objective Way Points
	$('.objective').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeIn');
	}, { 
		offset: '100%' 
	});
	
	// Work Way Points
	$('.work-item').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('bounceIn');
	}, { 
		offset: '80%' 
	});
	
	// Experience Way Points
	$('.skill .exp-item').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('flipInY');
	}, { 
		offset: '90%' 
	});
	
	// Testimonial Way Points
	$('.testimonial-item').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('slideInRight');
	}, { 
		offset: '90%' 
	});
	
	// Profile Way Points
	$('.profile-content').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { 
		offset: '90%' 
	});
	
	// Contact Way Points
	$('.contact-form').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeIn');
	}, { 
		offset: '100%' 
	});
	
	// Contact Way Points
	$('.contact-widget').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('flipInY');
	}, { 
		offset: '90%' 
	});
});

/* *************************************** */ 
/* Progress Bar JS */
/* *************************************** */  

$('.exp-progress').waypoint(function(down) {
	
	if(!$(this).hasClass('progress-stop')){
		
		setTimeout(function(){

			$('.progress .progress-bar').each(function() {
				var me = $(this);
				var perc = me.attr("data-end");
				var current_perc = 0;
				var progress = setInterval(function() {

					if (current_perc>=perc) {
						clearInterval(progress);
					} else {
						current_perc +=1;
						me.css('width', (current_perc)+'%');
						me.children('span').html(current_perc+'%');
					}
					
				}, 40);

			});

		},40);  
		
		$(this).addClass('progress-stop');
	}
	
},{ offset: '100%' });

/* *************************************** */ 
/* Pretty Photo JS */
/* *************************************** */  		

$(".work-photo").prettyPhoto({
   overlay_gallery: false, social_tools: false
});

/* *************************************** */ 
/* Knob JS */
/* *************************************** */  

$(document).ready(function(){

	$(".knob").knob({
		'min':0,
		'max':100,
		'readOnly': true,
		'dynamicDraw': true,
		'thickness': 0.2,
	});  
	
	// Knob Way Points
	$('.knob').waypoint(function(down){
		
		// First knob script
		if($('.knob-one').val() == 0){	
		
			$({value: 0}).animate({value: $('.knob-one').attr("data-end")}, {
				duration: 3000,
				easing:'swing',
				step: function() 
				{
					$('.knob-one').val(Math.ceil(this.value)).trigger('change');
				}
			})
		}
		
		// Second knob script
		if($('.knob-two').val() == 0){	
		
			$({value: 0}).animate({value: $('.knob-two').attr("data-end")}, {
				duration: 3000,
				easing:'swing',
				step: function() 
				{
					$('.knob-two').val(Math.ceil(this.value)).trigger('change');
				}
			})
		}
		
		// Third Knob script
		if($('.knob-three').val() == 0){	
		
			$({value: 0}).animate({value: $('.knob-three').attr("data-end")}, {
				duration: 3000,
				easing:'swing',
				step: function() 
				{
					$('.knob-three').val(Math.ceil(this.value)).trigger('change');
				}
			})
		}
		
		// Fourth knob script
		if($('.knob-four').val() == 0){	
		
			$({value: 0}).animate({value: $('.knob-four').attr("data-end")}, {
				duration: 3000,
				easing:'swing',
				step: function() 
				{
					$('.knob-four').val(Math.ceil(this.value)).trigger('change');
				}
			})
		}
				  
	}, { 
		offset: '90%' 
	});
});

/* *************************************** */ 
/* Scroll to Top */
/* *************************************** */  
	 
$(".scroll-to-top").hide();

$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop()>300)
		{
			$('.scroll-to-top').fadeIn();
		} 
		else
		{
			$('.scroll-to-top').fadeOut();
		}
	});

	$('.scroll-to-top a').click(function(e) {
		e.preventDefault();
		$('body,html').animate({scrollTop: 0}, 800);
	});
});

/* *************************************** */ 