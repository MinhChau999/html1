$(document).on('click', '.signup', function() {
   $('body').addClass('Popup');
})

$(document).on('click', '.exit', function() {
   $('body').removeClass('Popup');
})

$(document).on('submit', '.jForm' , function(e) {
   // let _email = $('input[name="email"]').val();
   // let _phone = $('input[name="phone"]').val();
   // let _cmnd = $('input[name="cmnd"]').val();
   // let _sex = $('select[name="sex"]').val();
   // if (_email == '' || _phone == '' || _cmnd == '' || _sex == '') {
   //    alert('Vui lòng nhập đầy đủ '+_label);
   // }


   $(this).find('input').each(function() {
      let _value = $(this).val();
      let _label = $(this).closest('.inputBox').find('h5').text();
      let _type = $(this).data('type');
      if(_value==''){ 
         alert('Vui lòng nhập '+_label);
         return false;
      }else if(_type=='email'){
         let _regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
         if(!_regex.test(_value)){
            alert('Vui lòng nhập đúng định dạng '+_label);
            return false;
         }
      }
   });

   return false;
})