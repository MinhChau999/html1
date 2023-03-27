window.addEventListener('scroll', function() {
   var html = document.querySelector('html');
   if (window.pageYOffset > 100) {
      html.classList.add('fixed');
   } else {
      html.classList.remove('fixed');
   }
 });

 $(document).on('click', '.btnMenuMobile', function() {
   $('body').addClass('showMenu');
})

$(document).on('click', '.bam', function() {
   $('body').addClass('Popup');
})

$(document).on('click', '.exit', function() {
   $('body').removeClass('Popup');
})