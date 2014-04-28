$(document).ready(function() {

  var reportedContent = null;

  if ($('#reportDialog').length) {
    var dialog = new fries.Dialog({
      selector: '#reportDialog',
      callbackOk: function () {
        reportedContent.remove();
        var toast = new fries.Toast({ content: "Content reported! The mods will take a look." });
        this.hide();
      },
      callbackCancel: function () {
        this.hide();
      }
    });
  }
  else {
    var dialog = false;
  }

  $('.card__overlay__section--report').on('click', function() {
    reportedContent = $(this).closest('.card');
    dialog.show();
  });

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
      var toast = new fries.Toast({ content: verb + "d this!" });
    }
    stat.text(rating);

    // Hides overlay after 250ms
    $(this).closest('.card__overlay').delay(250).queue(function(){
      $(this).addClass('card__overlay--hidden');
      $(this).dequeue();
    });
  });
});
