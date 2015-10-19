/*-----------------------------------------------------------------------------------*/
/*  scrollTop button
/*-----------------------------------------------------------------------------------*/
 $(document).ready(function(){   
      //fade in/out based on scrollTop value
      $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
          $('#ubar').fadeIn();
        } else {
          $('#ubar').fadeOut();
        }
      });
     
      // scroll body to 0px on click
      $('#ubar').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 400);
        return false;
      });
    });
/*-----------------------------------------------------------------------------------*/
/*  PopUp
/*-----------------------------------------------------------------------------------*/
 //Функция отображения PopUp
      function PopUpShow(){
        $(".darken").fadeIn();
        $("#popup").fadeIn();
        }
        
        //Функция скрытия PopUp
        function PopUpHide(){
        $(".darken").fadeOut(300);
        $("#popup").fadeOut(300); 
        }
         