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


  $("#main123").t({
      beep:true,
      caret:'<span style="color:pink;">.<span>',
      typing:function(elm,chr){
          if(chr.match(/\-trigger/))
          $('#pow-txt').show().delay(500).fadeout(0);
      }
  });





