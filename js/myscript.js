
    $(document).ready(() =>{
        //find if window width less than 777px then remove class
        let lastWidth = $(window).width();
        $(window).resize(function(){
          if($(window).width()!=lastWidth){

              lastWidth = $(window).width();
              
              if(lastWidth < 777){
                $(".carousel-infor").hide();
              }else{
                $(".carousel-infor").show();
              }
          }
        });

        //if user scroll page to bottom > 240px then show button scroll to top in 800 milisecon
          $(window).scroll(function(){
            if ($(this).scrollTop() > 240){
              $('#myBtn').show();
            } 
            else{
              $('#myBtn').hide();
            }
          });

          $('#myBtn').click(function(){

            $("html, body").animate({scrollTop : 0},800);
            //return false;
          });

    });