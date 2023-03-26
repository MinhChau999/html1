$(document).on('click', '.jLable', function () {
	const _parent = $(this).closest('.jItem');
   const _text = $(this).data('text');
   const _content = _parent.find('.jContent');


	if (_parent.hasClass('active')) {
		_parent.removeClass('active');
      _content.slideDown();
	} 
   else {
		$('.jItem').removeClass('active').find('.jContent').slideUp();
		_parent.addClass('active');
      _content.slideDown();
	}
});
