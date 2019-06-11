
Template.navbar.onRendered(function() {

  $('body').scrollspy({
    target: '#sideNav'
  });
});

Template.navbar.events({ 
    'a.js-scroll-trigger[href*="#"]:not([href="#"])': function (event, template) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
      },
    
      'click .js-scroll-trigger': function (event, template) {
        $('.navbar-collapse').collapse('hide');
    
      },
});