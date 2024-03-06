
var links = document.querySelectorAll('.nav-links li');


links.forEach(function(link) {
  link.addEventListener('click', function(e) {
    
    links.forEach(function(link) {
      link.classList.remove('active');
    });
   
    e.target.classList.add('active');
  });
});


var headerHeight = document.querySelector("nav").offsetHeight;


var anchorLinks = document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"])');


anchorLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    var target = document.querySelector(this.hash);
    target = target ? target : document.querySelector('[name=' + this.hash.slice(1) + ']');

    var scrollToPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
    target.focus();
  });
});
