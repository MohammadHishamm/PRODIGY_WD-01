let links = document.querySelectorAll('.nav-links li');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e) {
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove('active');
    }
    e.target.classList.add('active');
  });
}

let headerHeight = $("nav").height();

 $('a[href*="#"]')
  
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      var scrollToPosition = $(target).offset().top - headerHeight;
     
      if (target.length) {
       
        event.preventDefault();
        $('html, body').animate({
          scrollTop: scrollToPosition
        }, 750, function() {
          
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });