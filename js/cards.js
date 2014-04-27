$(document).ready(function() {
  $('.card').on('click', function() {
    $(this).find('.card__overlay').toggleClass('card__overlay--hidden');
  }).find('.card__overlay__content').on('click', function(event) {
    event.stopPropagation();
  });

  $('.card__overlay__section--like, .card__overlay__section--dislike').on('click', function() {
    verb = $(this).hasClass('card__overlay__section--like') ? "Like" : "Dislike"
    rated = $(this).hasClass('js-rated');
    $(this).toggleClass('js-rated');
    $(this).toggleClass('card__overlay__social-stat--active');
    stat = $(this).find('.card__overlay__social-stat');
    rating = parseInt(stat.text());
    if (rated) {
      rating--;
      var toast = new fries.Toast({ content: "Removed " + verb + " from this!" });
    }
    else {
      rating++;
      var toast = new fries.Toast({ content: verb + "d this!." });
    }
    stat.text(rating);

    // Hides overlay after 250ms
    $(this).closest('.card__overlay').delay(250).queue(function(){
      $(this).addClass('card__overlay--hidden');
      $(this).dequeue();
    });
  })
});
