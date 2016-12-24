//fix header
$(window).load(function () {
    $("#primary-header").fixedHeader({
      contentElement: ".page-wrapper",
      class: "fixed-header"
    });
  });
//slider
(function($){
  var ico = $('<i class="fa fa-caret-right"></i>');
  $('nav#menu li:has(ul) > a').append(ico);
  
  $('nav#menu li:has(ul)').on('click',function(){
    $(this).toggleClass('open');
  });
  
  $('a#toggle').on('click',function(e){
    $('html').toggleClass('open-menu');
    return false;
  });
  
  
  $('div#overlay').on('click',function(){
    $('html').removeClass('open-menu');
  })
  
})(jQuery)
//owl slider
$(document).ready(function() {
  $("#owl-demo").owlCarousel({
	autoPlay: 3000,
	items : 5,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3]
  });

});

    $(document).ready(function() {

      var owl = $("#owl-demo2");

      owl.owlCarousel({

        // Define custom and unlimited items depending from the width
        // If this option is set, itemsDeskop, itemsDesktopSmall, itemsTablet, itemsMobile etc. are disabled
        // For better preview, order the arrays by screen size, but it's not mandatory
        // Don't forget to include the lowest available screen size, otherwise it will take the default one for screens lower than lowest available.
        // In the example there is dimension with 0 with which cover screens between 0 and 450px
        
        itemsCustom : [
          [0, 1],
          [480, 1],
          [640, 1],
          [800, 1],
          [1024, 3],
          [1200, 4],
          [1400, 4],
          [1600, 4]
        ],
        navigation : true

      });



    });

