$( document ).ready(function(){
	  $( ".left" ).click(function(){
	    $( "div" ).animate({
	      right: "+=50px",
	      borderWidth: "-=2px"
	      }, "linear");
	  });
	  $( ".right" ).click(function(){
	    $( "div" ).animate({
	      right: "-=50px",
	      borderWidth: "+=2px"
	      }, "linear");
	  });
	});