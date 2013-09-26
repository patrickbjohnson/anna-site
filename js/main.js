$(document).ready(function(){
	$(function(){
	    $.fn.center = function () {
	         this.css("position","absolute");
	         this.css("top", ( $(window).height() - this.height() ) / 2  + "px");
	         this.css("left", ( $(window).width() - this.width() ) / 2 + "px");
	         return this;
	    }
	    $(".name").center();   			// on page load div will be entered                                               
	    $(window).resize(function(){ 	// whatever the screen size this
	         $(".name").center();       // this will make it center when
	    });                          	// window resize happens
	  });
});
