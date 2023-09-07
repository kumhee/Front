$(document).ready(function() {
//main_img
  $("#section0").animate({opacity: '1', top: '0'},700, function() {
    $(".main_title_box").delay(300).animate({opacity: '1', top: '0'},250, function(){
      $(".m_article").animate({opacity: '1', top: '0'},150, function() {
        $(".main_btn").animate({opacity: '1', top: '0'},150)
      });
    });
  }); 

/*
  $(".main_title_box, #section0").delay(500).animate({opacity: '1', top: '0'},400, function() {
    $(".m_article").animate({opacity: '1', top: '0'},250, function(){
      $(".main_btn").animate({opacity: '1', top: '0'},150);
    });
  }); 
*/

//sustain
  $('.s_pics_box').hover(function() {
    $(this).find('img').stop().animate({width:'476px', height:'476px', left:'-15px',top:'-15px' }, 200)
  }, function() {
    $(this).find('img').stop().animate({width:'100%', height:'100%', left:'0', top:'0' }, 200)
  })

//live
  $('.l_text_box').delay(300).animate({opacity:'1', right:'0'},400, function() {
    $(".l_video").animate({opacity: '1', left: '0'},400,);
  });














})
















