$(document).ready(function() {
  
    $('.js-section').waypoint(function(direction) {
        if (direction=="down") {
            $('nav').addClass('sticky');
        }
        else  {
            $('nav').toggleClass('sticky');
        }
    }, {    
        
  offset: '60px;'
    });
    
    /*scroll on button */
    /*+gHK
    $('.js-scroll-plans').click(function(){
        var targetOffset = $('#plans').offset().top;
        $('html','body').animate({scrollTop: targetOffset},3000);
      });
    
    */
    
    /*NAvigation scroll*/
    
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



/*Animations on Scroll*/

$('.wp-1').waypoint(function(direction){
   $('.wp-1').addClass('animated fadeIn'); 
},{
    offset:'50%'
});
    
$('.wp-2').waypoint(function(direction){
   $('.wp-2').addClass('animated fadeInUp'); 
},{
    offset:'50%'
});
    
$('.wp-3').waypoint(function(direction){
   $('.wp-3').addClass('animated fadeIn'); 
},{
    offset:'50%'
});
    
$('.wp-4').waypoint(function(direction){
   $('.wp-4').addClass('animated pulse'); 
},{
    offset:'50%'
});

    
/*Mobile Navigation*/    
$('.js-mob-nav').click(function(){
    var nav = $('.js-main-nav');
    var icon= $('.js-mob-nav i');
    var menu= 'ion-navicon-round';
    var close= 'ion-close-round';
    
    nav.slideToggle(200);
    
    if(icon.hasClass(menu)) {
        icon.addClass(close);
        icon.removeClass(menu);
    }
    else {
        icon.addClass(menu);
        icon.removeClass(close);
    }
});
 
/*Maps*/
    
var map=new GMaps({
  div: '.map',
  lat: 38.720305,
  lng: -9.070942,
  zoom: 12
});

map.addMarker({
  lat: 38.7436057,
  lng: -9.2,
  title: 'Lisbon',
  infoWindow: {
  content: '<p>Our Lisbon HQ</p>'
}
});

});