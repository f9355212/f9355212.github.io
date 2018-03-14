       $(function () {

           $('a[href*=#]:not([href=#])').click(function() {

               var target = $(this.hash);

               $('html,body').animate({

                   scrollTop: target.offset().top -40

               }, 1000);

               return false;

           });

 

       });