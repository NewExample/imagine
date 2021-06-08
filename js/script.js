/* overlay menu */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


jQuery(function($){
	$(document).on( "submit", "form", function() {
		fbq('track', 'Lead');
	});
});