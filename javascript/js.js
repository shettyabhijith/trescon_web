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
        // autoplay:true,
        // touchDrag: false,
        //  mouseDrag: false,
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


var showText = function (target, message, index, interval) {   
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, 40);
    }
    else {
        $(this).hide();
    }
}



//  window.setInterval(function(){
//     var text1 = "THE WORLD'S FASTEST GROWING B2B EVENTS COMPANY";
//     showText("#text1", text1, 0, 50);  
//    }, 1000);

//    $("#text1").hide();

// $(function () {
    
// });

// window.setInterval(function(){
//     var text2 = $('#text2').text().trim();
//     showText("#text2", text2, 0, 50);   
//   }, 5000);




// Go through a sentence, wrap its characters with spans
function setUpCharacters() {
    var $sentences = $('.sentence');
  
    // Run for each sentence
    $sentences.each(function() {
      var $sentence = $(this);
      var newContent = '';
  
      // Go through all characters of the sentence
      for (i = 0; i < $sentence.text().length; i++) {
        var substring = $sentence.text().substr(i, 1);
  
        // If we have a character, wrap it
        if (substring != " ") {
          newContent += '<span>' + substring + '</span>';
        } else {
          newContent += substring;
        } 
      }
  
      // Replace content
      $sentence.html(newContent); 
    });
  }
  
  setUpCharacters();
  

  // Go through a sentence and trigger activate state
function triggerCharacters() {
    var sentenceCounter = 0;
    var sentenceDelay = 600;
    var interval = 5000;
    $('.sentence').each(function() {
      var $sentence = $(this);
  
      // Trigger for each sentence
      setTimeout(function() {
        var $spans = $sentence.find('span');
        var spanCounter = 0;
        var spanDelay = 75;
  
        // Loop through all spans and activate
        $spans.each(function() {
          var $span = $(this);
  
          // Trigger a timeout so each span is offset
          setInterval(() => {
            $span.toggleClass('active');
          }, (spanCounter * spanDelay), interval);
          
        //   setTimeout(function() {
        //     $span.toggleClass('active');
        //   }, (spanCounter * spanDelay));
  
          spanCounter++; 
        });
      }, (sentenceCounter * sentenceDelay));
  
      sentenceCounter++;
      
    });
   
  }
  
  // For our example, trigger character animations on button click
 
    triggerCharacters();

    
    var $text = $("#text");
    var numbers = ["THE WORLD'S FASTEST GROWING B2B EVENTS COMPANY",
                    "EXPLORING NEW AND EXCITING AVENUES IN THE EVENTS INDUSTRY",
                    " CREATING BENCHMARKS IN HIGH-LEVEL GATHERINGS",
                    "FASTEST COMPANY TO HOST HIGHEST NUMBER OF VIRTUAL EVENTS DURING THE COVID-19 PANDEMIC",
                    "SETTING NEW BENCHMARKS IN THE VIRTUAL EVENTS SPACE",
                    "EXPERTS IN BESPOKE AND IN-HOUSE EVENTS",
                    "Seventh",
                    "Eighth",
                    "Ninth",
                    "Tenth"];

    

    $(function abc(){

  
    for (i = 1; i <= 9; i++) {
        
            (function a(index) {
                setTimeout(function() { 
                  $text.html(numbers[index-1]);
                }, i * 1000);
              })(i);
              
    }   
    // if(i>8){
    //   i=1;

     
    // }
    // else {
      
    // }
  });
