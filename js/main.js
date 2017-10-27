 // sticky menu
 $(document).ready(function() {
     var navY = $('.nav').offset().top;

     var stickyNav = function() {
         var scrollY = $(window).scrollTop();

         if (scrollY > navY) {
             $('.nav').addClass('sticky');
             $('.nav').removeClass('nav_start');
         } else {
             $('.nav').removeClass('sticky');
             $('.nav').addClass('nav_start');
         }
     };

     stickyNav();

     $(window).scroll(function() {
         stickyNav();

     });

     // hamburger menu


     function toggleSidebar() {
         $(".sidebar").toggleClass("active");
         $(".sidebar").toggleClass("active2");
     }

     $(".button").on("click tap", function() {
         toggleSidebar();
     });

     $(".img").on("click tap", function() {
         toggleSidebar();
     });

     $(document).keyup(function(e) {
         if (e.keyCode === 27) {
             toggleSidebar();
         }
     });

     // price

     function togglePrice1() {
         $(".individual").removeClass("dispFlex");
         $(".individual").addClass("dispNone");
         $(".company").removeClass("dispNone");
         $(".company").addClass("dispFlex");
         $(".btn_individual").removeClass("active");
         $(".btn_company").addClass("active");
     }

     function togglePrice2() {
         $(".company").removeClass("dispFlex");
         $(".company").addClass("dispNone");
         $(".individual").removeClass("dispNone");
         $(".individual").addClass("dispFlex");
         $(".btn_company").removeClass("active");
         $(".btn_individual").addClass("active");
     }

     $(".btn_individual").on("click tap", function() {
         togglePrice2();
     });

     $(".btn_company").on("click tap", function() {
         togglePrice1();
     });

     wow = new WOW({
         boxClass: 'wow', // default
         animateClass: 'animated', // default
         offset: 0, // default
         mobile: true, // default
         live: true // default
     });
     wow.init();

     var modal = document.getElementsByClassName("modal")[0];
     var button = document.getElementsByClassName("watch")[0];
     var close = document.getElementsByClassName("close")[0];

     // włączenie okienka poprzez kliknięcie
     button.onclick = function() {
         modal.style.display = "block";
     };

     // wyłączenie okienka poprzez kliknięcie w krzyżyk
     close.onclick = function() {
         modal.style.display = "none";
     };

     // wyłączenie okienka poprzez kliknięcie w pusty obszar
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     };
 });