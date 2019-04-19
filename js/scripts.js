var today = new Date();
var year = today.getFullYear();
var $container = $("html, body"),
  $scrollTo = $(".case-study");

console.log(today);

$(".year").text(year);

$(function() {
  $(".lazy").Lazy({
    // your configuration goes here
    scrollDirection: "vertical",
    effect: "fadeIn",
    effectTime: 2000,
    threshold: 0,
    visibleOnly: true,
    onError: function(element) {
      console.log("There's been an error loading " + element.data("src"));
    }
  });
});


function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

$('.reveal-case-study').click(function() {
  $(this).toggleClass("active");
  if ( $(this).hasClass( "active" ) ) {
    $(this).text( "collapse case study" );
  } else {
    $(this).text( "reveal case study" );
  }
});

//  $(function() {
//    // $(document).ready shorthand
//    $("#about").fadeIn( 100 );
//  });

$(document).ready(function() {
  /* Every time the window is scrolled ... */
  $(window).scroll(function() {
    /* Check the location of each desired element */
    $(".hideme").each(function(i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 600);
      }
    });
  });
});

$.extend($.featherlight.defaults, {
   closeOnClick:   'anywhere', 
});

console.log(
  "Once there were mountains on mountains / And once there were sun birds to soar with / And once I could never be down"
);
