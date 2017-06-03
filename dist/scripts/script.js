
//project-page

$('.project-page__slider-control').click(function(e) {
  e.preventDefault();

  $('.project-page__slider-item').removeClass('active');
  $('.project-page__slider-control').not(this).addClass('fade');

  $('#'+$(this).attr('data-id')).addClass('active');
  $(this).removeClass('fade');

});





//slider-page
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});
