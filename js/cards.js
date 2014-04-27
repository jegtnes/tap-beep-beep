$(document).ready(function() {
  $('.card').on('click', function() {
    $(this).find('.card__overlay').toggleClass('card__overlay--hidden');
  }).find('.card__overlay__content').on('click', function(event) {
    event.stopPropagation();
  });
});
