// Establish date, for copyright byline

var today = new Date();
var year = today.getFullYear();

var $container = $("html, body"),
  $scrollTo = $(".case-study");

console.log(today);

// Log "year" variable, for troubleshooting purpose

$(".year").text(year);

// Lazy loading initialization and config

$(function() {
  $(".lazy").Lazy({
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

// Orphan check, prevents typographic orphans most of the time.

$("p").each(function() {
  var string = $(this).html();
  string = string.replace(/ ([^ ]*)$/, "&nbsp;$1");
  $(this).html(string);
});

// Case study reveal button
// Currently not in use

// function toggle_visibility(id) {
//        var e = document.getElementById(id);
//        if(e.style.display == 'block')
//           e.style.display = 'none';
//        else
//           e.style.display = 'block';
//     }

// $('.reveal-case-study').click(function() {
//   $(this).toggleClass("active");
//   if ( $(this).hasClass( "active" ) ) {
//     $(this).text( "collapse case study" );
//  } else {
//     $(this).text( "reveal case study" );
//   }
// });

//  $(function() {
//    // $(document).ready shorthand
//    $("#about").fadeIn( 100 );
//  });

// About me text fade-in

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

(function(h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function() {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 1265298, hjsv: 6 };
  a = o.getElementsByTagName("head")[0];
  r = o.createElement("script");
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");

// Featherlight config

$.extend($.featherlight.defaults, {
  closeOnClick: "anywhere"
});

// Error check

console.log(
  "Once there were mountains on mountains / And once there were sun birds to soar with / And once I could never be down"
);
