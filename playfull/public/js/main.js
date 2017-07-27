// $(window).scroll(function(){
//     $("#top").css("opacity", $(window).scrollTop() / 1000);
//   });

// $(window).scroll(function() { 
// 	if ($(this).scrollTop() > 700) { 
// 		$('.purpose').fadeIn(); 
// 	}
// });

// $(window).scroll(function () {

//     /* Check the location of each desired element */
//     $('.business').each(function (i) {

//         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//         var bottom_of_window = $(window).scrollTop() + $(window).height();

//         /* If the object is completely visible in the window, fade it it */
//         if (bottom_of_window > bottom_of_object) {

//             $(this).animate({
//                 'opacity': '1'
//             }, 500);

//          }
//      });
// });

// $('.purpose').css({'opacity':( 100-$(window).scrollTop() )/100});

jQuery(document).ready(function ($) {
    $("#scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });

    $("#become_partner").submit(function (event) {
        event.preventDefault();
        $.post(
            "https://dev.beplayfull.com/grant/website_contact/",
            $("#become_partner").serialize()
        ).done(function () {
            $('#form_success').show().fadeIn();
        }).fail(function () {
            alert("There was an error submiting your request. Try again soon or contact us at support@beplayfull.com");
        });
    });
});
