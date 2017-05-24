$(document).ready(function() {
  var navbarStartingPosition = 0;
  var currentPosition = $('nav').offset().top;
  var navbar = $('.navbar-custom');
  var brand = $('.navbar-brand');
  var navbarLinks = $('.navbar-collapse');
  var hamburgerMenu = $('.icon-bar');

  function makeNavbarWhite() {
    navbar.addClass('navbar-white');
    brand.removeClass('brand-name').addClass('brand-name-inverse');
    navbarLinks.removeClass('nav-links').addClass('nav-links-inverse');
    hamburgerMenu.addClass('icon-bar-inverse');
  }

  function makeNavbarTransparent()  {
    navbar.removeClass('navbar-white');
    brand.addClass('brand-name');
    navbarLinks.addClass('nav-links');
    hamburgerMenu.removeClass('icon-bar-inverse');
  }

  (currentPosition !== navbarStartingPosition) ? makeNavbarWhite() : makeNavbarTransparent();

  $(document).scroll(function() {
    var currentPosition = $('nav').offset().top;
    (currentPosition !== navbarStartingPosition) ? makeNavbarWhite() : makeNavbarTransparent();
  });
});
