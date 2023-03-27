$(document).on('click', '.signup', function () {
	$('body').addClass('Popup');
});

$(document).on('click', '.exit', function () {
	$('body').removeClass('Popup');
});

$(document).on('submit', '.jForm', function (e) {
	$(this)
		.find('input')
		.each(function () {
			let _parent = $(this).closest('.inputBox');
			let _value = $(this).val();
			let _label = $(this).closest('.inputBox').find('h5').text();
			let _type = $(this).data('type');
			let _error = $(this).closest('.inputBox').find('.error').find('span');
         if (_value == '') {
				_error.text('Vui lòng nhập ' + _label);
				_parent.addClass('showError');
				return false;
			} else if (_type == 'email') {
				let _regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
				if (!_regex.test(_value)) {
					_error.text('Vui lòng nhập đúng định dạng ' + _label);
					_parent.addClass('showError');
					return false;
				} else {
					_parent.removeClass('showError');
				}
			} else if (_type == 'phone') {
				let _regex = /^0\d{9,10}$/i;
				if (!_regex.test(_value)) {
					_error.text('Vui lòng nhập đúng định dạng ' + _label);
					_parent.addClass('showError');
					return false;
				} else {
					_parent.removeClass('showError');
				}
			} else if (_type == 'password') {
				let _regexMin6 = /^.{6,}$/i;
				let _regexMax20 = /^.{6,20}$/i;


				if (!_regexMin6.test(_value)) {
					_error.text(_label + " không được nhỏ hơn 6 ký tự");
					_parent.addClass('showError');
					return false;
            }  else if (!_regexMax20.test(_value)) {
               _error.text(_label + " không được lớn hơn 20 ký tự");
               _parent.addClass('showError');
               return false;
            }
            else {
					_parent.removeClass('showError');
				}
			} else {
				_parent.removeClass('showError');
			}
		});
	return false;
});
