var bLazy = new Blazy({ });	
$(window).one('scroll', function(){
	bLazy.revalidate();
});
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
	                //var targetOffset = jQuerytarget.offset().top - (jQuery(".main-header").outerHeight(true));
	                var targetOffset = jQuerytarget.offset().top - 73;
	                jQuery('html,body').animate({scrollTop: targetOffset}, 1000);
	                setTimeout(function blazy_revalid(){bLazy.revalidate();} , 1000);
	                return false;
	            }

    		}
        }
    });
})(jQuery.noConflict());
(function(jQuery) {
	jQuery('body').on('click', '.play-ico', function(event){
		event.preventDefault();
		jQuery('.anim-items').addClass('rotate');
		jQuery(this).parent().find('video').trigger('play');
		jQuery(this).parent().find('video').attr('controls', 'controls');
		jQuery(this).hide('fast');
		jQuery(this).parent().find("iframe")[0].src += "&autoplay=1";
	});
})(jQuery.noConflict());
(function(jQuery) {
	jQuery(document).ready(function(){
	    jQuery( ".anim-items span" ).each(function( index ) {
			animateDiv(this);
		});
	});
	function makeNewPosition(){
	    var h = jQuery(".anim-items").height() + 5;
	    var w = jQuery(".anim-items").width() + 5;
	    var nh = Math.floor(Math.random() * h);
	    var nw = Math.floor(Math.random() * w);
	    return [nh,nw];     
	}
	function animateDiv(myclass){
	    var newq = makeNewPosition();
	    jQuery(myclass).animate({ top: newq[0], left: newq[1] }, 5000,   function(){
	      animateDiv(myclass);        
	    }); 
	};
})(jQuery.noConflict());
(function(jQuery) {
	jQuery('body').on('click', '.popup-trigger', function(event){
		event.preventDefault();
		popup_class = jQuery(this).attr('popup');
		console.log('click'+popup_class)
		jQuery('.'+popup_class).slideDown('fast').addClass('opened');
		bLazy.load(jQuery('.'+popup_class+' img'), true);
		setTimeout(function(){
			jQuery('.'+popup_class).find('.popup-content').css({opacity: 1});
		}, 200);
	});
	jQuery('body').on('click', '.close-popup', function(event){
		event.preventDefault();
		jQuery('.popup.opened').find('.popup-content').css({opacity: 0});
		jQuery('.popup.opened').slideUp('fast').removeClass('opened');
	});
})(jQuery.noConflict());