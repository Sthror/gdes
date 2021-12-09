
document.addEventListener('DOMContentLoaded', function(){

  const navbar = document.querySelector('.navbar');

  function navbarScrolling(){
    if(window.pageYOffset > 50){
      navbar.classList.add('scrolling');
    } else {
      navbar.classList.remove('scrolling');
    }
  }
  
  navbarScrolling();

  document.addEventListener("scroll", function(){
    navbarScrolling();
  })

  document.addEventListener("click", function(e){
    if(e.target.classList.contains('navbar-nav__mobile-burger')){
      navbar.classList.toggle('is-open');
    }
    if(document.documentElement.clientWidth < 1100){
      if(e.target.classList.contains('navbar-nav__link')){
        navbar.classList.remove('is-open');
      }
    }
  })

});