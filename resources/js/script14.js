
$(document)
.on('click', '.jNumber', function(e) {
   const _value = $(this).text();
   $('.jInput').val($('.jInput').val()+_value);
})
.on('click', '.jMethod', function(e) {
   const _method = $(this).text();
   if (_method == "=") {
      $('.jInput').val(eval($('.jInput').val()));
   } else if (_method == "AC") {
      $('.jInput').val("");
   } else {
      $('.jInput').val($('.jInput').val()+_method);
   }
})