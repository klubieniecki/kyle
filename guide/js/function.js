$(document).ready(function(){
	$('.steps li').click(nav_steps);
	$('.next-step').click(nav_steps);

});

var nav_steps = function(){
	$object = $('.steps li[rel="'+$(this).attr('rel')+'"]');

	$('.steps li').removeClass('focus');
	$object.addClass('focus');

	$('.step').hide();
	$('section[rel="'+$object.attr('rel')+'"]').show();
	$("html, body").scrollTop(0);
}