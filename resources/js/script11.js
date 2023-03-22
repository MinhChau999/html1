window.addEventListener('scroll', function() {
   var html = document.querySelector('html');
   if (window.pageYOffset > 100) {
      html.classList.add('fixed');
   } else {
      html.classList.remove('fixed');
   }
 });