$(document).on('click', '.jItem', function (e) {
	$('.jItem').removeClass('active');
	$(this).addClass('active');

   const _target = $(this).data('target');
   $('.content').removeClass('active');
   $('#'+_target).addClass('active');
});
