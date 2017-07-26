// JavaScript Document
jQuery(document).ready(function($) {
  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - 60}, 500);
    // 60 is the offset
  });
});
