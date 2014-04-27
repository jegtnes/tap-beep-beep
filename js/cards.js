$(document).ready(function() {
  $('.card').on('click', function() {
    $(this).find('.card__overlay').toggleClass('card__overlay--hidden');
  }).find('.card__overlay__content').on('click', function(event) {
    event.stopPropagation();
  });

  $('.card__overlay__section--like,
  .card__overlay__section--dislike').on('click', function() {
    stat = $(this).find('.card__overlay__social-stat');
    rating = parseInt(stat.text());
    newRating = rating + 1;
    stat.text('' + newRating);

    $(this).addClass('card__overlay__social-stat--active');

    $(this).closest('.card__overlay').delay(250).queue(function(){
      $(this).addClass('card__overlay--hidden');
      $(this).dequeue();
    });
  })
});
