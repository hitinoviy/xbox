$(document).ready(function(){
    $('.menu_list').hover(
      function() {
        $( this ).addClass('active');
      }, function() {
        $( this ).removeClass('active');
      }
    );
  });