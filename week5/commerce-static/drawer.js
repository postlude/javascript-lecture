$(function () {  
  $('.shopping-cart-btn').click(function () {
        $('.offcanvas').toggleClass('open');        
  });
  $('.drawer-close').click(function () {
        $('.offcanvas').removeClass('open');
  });
});