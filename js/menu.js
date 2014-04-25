$(function(){
  hammertime = Hammer(document.body, { swipeVelocityX: 0.2 }).on('dragright, swiperight', function(event) {
    $('.main-navigation').addClass('main-navigation--open');
  })

  hammertime = Hammer(document.body, { swipeVelocityX: 0.2 }).on('dragleft, swipeleft', function(event) {
    $('.main-navigation').removeClass('main-navigation--open');
  })

  Hammer($('.app-icon')[0]).on('tap', function(event) {
    $('.main-navigation').toggleClass('main-navigation--open');
  })
})
