var bLazy = new Blazy({ });	
$(window).one('scroll', function(){
	if(jQuery(document).scrollTop() >= 100){
		bLazy.revalidate();
	}
});
(function(jQuery) {
	jQuery(document).ready(function() {
		if(Cookies.get('form-promo-webinar')!=1 && Cookies.get('form-promo-webinar')!='submit'){
			open_popup('form-promo-webinar');
			Cookies.set('form-promo-webinar', '1', { expires: 1 });
		}
	});
})(jQuery.noConflict());
(function(jQuery) {
	jQuery(document).ready(function() {
		jQuery('#getting-started').countdown('2019/08/12', function(event) {
			jQuery('#count-days1').html(event.strftime('%D').substring(0,1));
			jQuery('#count-days2').html(event.strftime('%D').substring(1,2));
			jQuery('#count-hours1').html(event.strftime('%H').substring(0,1));
			jQuery('#count-hours2').html(event.strftime('%H').substring(1,2));
			jQuery('#count-minutes1').html(event.strftime('%M').substring(0,1));
			jQuery('#count-minutes2').html(event.strftime('%M').substring(1,2));
			jQuery('#count-seconds1').html(event.strftime('%S').substring(0,1));
			jQuery('#count-seconds2').html(event.strftime('%S').substring(1,2));
		});
	});
})(jQuery.noConflict());
(function(jQuery) {
	jQuery('body').on('click','.mobile-nav-trigger',function(event) {
		event.preventDefault();
		jQuery(this).toggleClass('active');
		jQuery('.header-center').toggleClass('active');
	});
	jQuery('body').on('click','.header-center.active a',function(event) {
		event.preventDefault();
		jQuery('.mobile-nav-trigger').toggleClass('active');
		jQuery('.header-center').toggleClass('active');
		console.log('click');
	});
})(jQuery.noConflict());
(function(jQuery) {
	jQuery(document).ready(function() {
		jQuery(".fancybox").fancybox({
			toolbar: false,
			infobar : false,
			arrows: false,
		});
	});
})(jQuery.noConflict());
(function(jQuery) {
  jQuery('.accordion .accordion-title').click(function(event) {
    event.preventDefault();
    if(jQuery(this).parent().hasClass('active')){
    	jQuery(this).parent().removeClass('active');
    }else{
    	jQuery(this).parent().addClass('active');
    }
  });
})(jQuery.noConflict());
(function(jQuery) {
    jQuery('a[href*=\\#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
    		if(this.hash.slice(1)){
    			 var jQuerytarget = jQuery(this.hash);
	            jQuerytarget = jQuerytarget.length && jQuerytarget || jQuery('[name=' + this.hash.slice(1) +']');
	            if (jQuerytarget.length) {
	            	bLazy.destroy();
	                var targetOffset = jQuerytarget.offset().top - 73;
	                jQuery('html,body').animate({scrollTop: targetOffset}, 1000);
	                setTimeout(function blazy_revalid(){bLazy.revalidate();} , 1000);
	                jQuery('.header-center').removeClass('active');
	                jQuery('.mobile-nav-trigger').removeClass('active');
	                return false;
	            }

    		}
        }
    });
})(jQuery.noConflict());
(function(jQuery) {
	jQuery('body').on('click', '.play-ico', function(event){
		event.preventDefault();
		jQuery(this).parent().find('video').trigger('play');
		jQuery(this).parent().find('video').attr('controls', 'controls');
		jQuery(this).hide('fast');
		jQuery(this).parent().find("iframe")[0].src += "&autoplay=1";
	});
})(jQuery.noConflict());
function open_popup(popup_class){
	jQuery('body').css('overflow', 'hidden');
	console.log('click'+popup_class)
	jQuery('.'+popup_class).slideDown('fast').addClass('opened');
	bLazy.load(jQuery('.'+popup_class+' img'), true);
	setTimeout(function(){
		jQuery('.'+popup_class).find('.popup-content').css({opacity: 1});
	}, 200);
}
(function(jQuery) {
	jQuery('body').on('click', '.popup-trigger', function(event){
		event.preventDefault();
		popup_class = jQuery(this).attr('popup');
		open_popup(popup_class);
	});
	jQuery('body').on('click', '.close-popup', function(event){
		event.preventDefault();
		jQuery('body').css('overflow', 'visible');
		jQuery('.popup.opened').find('.popup-content').css({opacity: 0});
		jQuery('.popup.opened').slideUp('fast').removeClass('opened');
	});
})(jQuery.noConflict());
(function(jQuery) {
	jQuery('.fancybox-video').fancybox({
	  youtube : {
	    controls : 0,
	    showinfo : 0
	  },
	  vimeo : {
	    color : 'f00'
	  }
	});
})(jQuery.noConflict());
(function(jQuery) {
	var owl = jQuery('.owl-gallery');
	owl.owlCarousel({
	     margin:0,
	    loop:true,
	    autoWidth:true,
	    items:5,
	    nav:true,
	})
})(jQuery.noConflict());
