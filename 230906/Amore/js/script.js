$(document).ready(function() {
  //menu
  $('.nav ul li, .nav_each').hover(function() {
    $(this).find('.nav_each').stop().fadeIn(200);
  }, function() {
    $(this).find('.nav_each').stop().fadeOut(200);
  });

  $( ".accordion" ).accordion({
    heightStyle: "content",
    collapsible: true, active: false
  });

  /*accordion*/ 
  var state = true;

  $('.menu_btn, .accordion_bg').stop().click(function(){
    if (state) {
      $('.accordion_wrap').stop().animate({ left : '0' });
      $('.accordion_bg').stop().css({ display : 'block' });
      $('.wrap').stop().css({height : '900px', overflow: 'hidden' })
    }else {
      $('.accordion_wrap').stop().animate({ left : '-250px' });
      $('.accordion_bg').stop().css({ display : 'none' });
      $('.wrap').stop().css({height : 'auto', overflow: 'auto' })
    }

    state = !state;
  })



  $('.archite_img_box').hover(function() {
    $(this).stop().animate({backgroundColor:'#031b57'}, 150);
    $(this).find('.archite_img_title').stop().animate({'color':'fff'}, 100)
  },function() {
    $(this).stop().animate({backgroundColor:'#f1f0f0'}, 150)
    $(this).find('.archite_img_title').stop().animate({'color':'#000'}, 100)
  })




  $('.story_right_box').hover(function() {
    $(this).stop().animate({backgroundColor:'#999'}, 150)
  },function() {
    $(this).stop().animate({backgroundColor:'#031b57'}, 150)
  })

/**/ 
  $('.news_img_box').hover(function() {
    $(this).find('.news_img img').stop().animate({ width:'106%', height:'106%',left:'-3%',top:'-3%' }, 200)
  }, function() {
    $(this).find('.news_img img').stop().animate({ width:'100%',height:'100%',left:'0', top:'0' }, 200)
  })  


  $('.sustain_img_box').hover(function() {
    $(this).find('.sustain_img').stop().animate({backgroundSize:'105%'}, 200)
  }, function() {
    $(this).find('.sustain_img').stop().animate({backgroundSize:'100%'}, 200)
  })







});