
//project-page

$('.project-page__slider-control').click(function(e) {
  e.preventDefault();

  $('.project-page__slider-item').removeClass('active');
  $('.project-page__slider-control').not(this).addClass('fade');

  $('#'+$(this).attr('data-id')).addClass('active');
  $(this).removeClass('fade');

});

//OUR SERVICES

$(document).ready(function(){
  $('.slider-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    },
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
})
// $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
//  $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
});



//slider-page
$(document).ready(function(){
  $('.slider-2').owlCarousel({
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
