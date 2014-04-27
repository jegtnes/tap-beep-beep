$(document).ready(function() {
  $('.card').on('click', function() {
    $(this).find('.card__overlay').toggleClass('card__overlay--hidden');
  }).find('.card__overlay__content').on('click', function(event) {
    event.stopPropagation();
  });

  $('.card__overlay__section--like,
  .card__overlay__section--dislike').on('click', function() {
    rated = $(this).hasClass('js-rated');
    $(this).toggleClass('js-rated');
    $(this).toggleClass('card__overlay__social-stat--active');

    stat = $(this).find('.card__overlay__social-stat');
    rating = parseInt(stat.text());
    if (rated) {
      rating--;
      var toast = new fries.Toast({ content: "Removed sentiment from content." });
    }
    else {
      rating++;
      var toast = new fries.Toast({ content: "Added sentiment to content." });
    }
    stat.text(rating);

    // Hides overlay after 250ms
    $(this).closest('.card__overlay').delay(250).queue(function(){
      $(this).addClass('card__overlay--hidden');
      $(this).dequeue();
    });
  })
});
