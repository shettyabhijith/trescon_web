// number counting
// function animateValue(id, start, end, duration) {
//     if (start === end) return;
//     var range = end - start;
//     var current = start;
//     var increment = end > start? 1 : -1;
//     var stepTime = Math.abs(Math.floor(duration / range));
//     var obj = document.getElementById(id);
//     var timer = setInterval(function() {
//         current += increment;
//         obj.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
// }

// animateValue("value", 0, 100, 1000);


$(function(){
    $("#ms_video_header_carousel").owlCarousel({
        autoplay:true,
        loop:true,
        smartSpeed:300,
        autoplayTimeout:4000,
        autoplaySpeed:2000,
        responsiveRefreshRate : 10,

        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
    
            },
            1000:{
                items:1
            }
        }

    });
});



//ms content change

var activeDiv = 1;
showDiv(activeDiv); // show first one because all are hidden by default
var timer = setInterval(changeDiv, 10000);

function changeDiv() {
    activeDiv++;

    if (activeDiv == 5) {
        activeDiv = 1;
    }


    showDiv(activeDiv);
}

function showDiv(num) {
    
    var i = 0;
    var txt = $(".ms_headers1a").text();
    var speed = 50;


  function typeWriter() {
    if (i < txt.length) {
        


        // $(".ms_headers1a").text().innerHTML += txt.charAt(i);
      document.getElementsByClassName("ms_headers1a").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);

     
    }
  }

  typeWriter();

  



//   function sss(){
//   if (i < z.length) {
//     $('#ms_conent_id' + num).innerHTML += z.charAt(i);
//       i++;
//      setTimeout(sss(), speed);
//     }
//   }

//   sss();
//       $('div.ms_content_part1').hide(); // hide all
//       $('#ms_conent_id' + num).fadeIn(000); // show active

  }


  $(function(){
      $('#business_platform_carousel').owlCarousel({
    autoPlay: true,
    loop: true,
    margin: 0,
    nav:true,
    smartSpeed: 300,
    autoplaySpeed: 400,
    autoplayTimeout: 200,
    responsiveRefreshRate: 10,
    
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:1,
        },
        1000:{
            items:2
        }
    }

  });
  $( ".owl-prev").html('<i class="bp_left_arrow" aria-hidden="true">←</i>');
  $( ".owl-next").html('<i class="bp_right_arrow" aria-hidden="true">→</i>');

  });


  //map footer

  //hover 1

  $(".loc1").hover(function(){
    $('.map_address_1').css('visibility', 'visible');},
    function(){

    $('.map_address_1').css('visibility', 'hidden');
});

$(".map_address_1").hover(function(){
    $(this).css('visibility', 'visible');},
    function(){

    $(this).css('visibility', 'hidden');
});


  //hover 2
  $(".loc2").hover(function(){
    $('.map_address_2').css('visibility', 'visible');},
    function(){

    $('.map_address_2').css('visibility', 'hidden');
});

$(".map_address_2").hover(function(){
    $(this).css('visibility', 'visible');},
    function(){

    $(this).css('visibility', 'hidden');
});




  //hover 3
  $(".loc3").hover(function(){
    $('.map_address_3').css('visibility', 'visible');},
    function(){

    $('.map_address_3').css('visibility', 'hidden');
});

$(".map_address_3").hover(function(){
    $(this).css('visibility', 'visible');},
    function(){

    $(this).css('visibility', 'hidden');
});




  //hover 4
  $(".loc4").hover(function(){
    $('.map_address_4').css('visibility', 'visible');},
    function(){

    $('.map_address_4').css('visibility', 'hidden');
});

$(".map_address_4").hover(function(){
    $(this).css('visibility', 'visible');},
    function(){

    $(this).css('visibility', 'hidden');
});



  //hover 5
  $(".loc5").hover(function(){
    $('.map_address_5').css('visibility', 'visible');},
    function(){

    $('.map_address_5').css('visibility', 'hidden');
});

$(".map_address_5").hover(function(){
    $(this).css('visibility', 'visible');},
    function(){

    $(this).css('visibility', 'hidden');
});

//map footer ends here 

$(function(){
    $("#other_partner_carousel").owlCarousel({
        // autoplay:true,
        loop:true,
        smartSpeed:200,
        autoplayTimeout:2000,
        autoplaySpeed:2000,
        responsiveRefreshRate : 10,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
    
            },
            1000:{
                items:5
            }
        }

    });
    $( ".owl-prev").html('<i class="bp_left_arrow" aria-hidden="true">←</i>');
  $( ".owl-next").html('<i class="bp_right_arrow" aria-hidden="true">→</i>');

});


// $('.go_up').on("click",function(){
//     $(window).scrollTop(0);
// });

  
$('.go_up').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
    return false;
});

$("i.fa.fa-bars.mbl_bar1a").click(function(){
    $(".nav_bar_mbl_1a").slideToggle();
})