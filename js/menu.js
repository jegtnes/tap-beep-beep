$(function(){
  hammertime = Hammer(document.body, { swipeVelocityX: 0.2 }).on('dragright, swiperight', function(event) {
    $('.main-navigation').addClass('main-navigation--open');
  })

  hammertime = Hammer(document.body, { swipeVelocityX: 0.2 }).on('dragleft, swipeleft', function(event) {
    $('.main-navigation').removeClass('main-navigation--open');
  })

  Hammer($('#menu-toggle')[0]).on('tap', function() {
    $('.main-navigation').toggleClass('main-navigation--open');
  });

  $('.filter-menu').hide();

  $('.toggle-filter-menu').on('click', function() {
    $('.filter-menu').toggle();
  });
})
