// Taken from http://css-tricks.com/snippets/jquery/shuffle-dom-elements/
(function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
 
})(jQuery);


$('.filter-menu input[type=radio]').on('change', function() {
  setTimeout(function() {
    $('.content .component').shuffle();
    $('.filter-menu').hide();
  }, 200);
});

$('.filter-menu input[type=checkbox]').on('change', function(e) {
  $checkbox = $(e.target);
  type = $checkbox.attr('id').split('-')[1];
  checked = $checkbox.is(':checked');

  $matchedContent = $('.content .card--' + type);

  if (checked) {
    $matchedContent.show();
  } else {
    $matchedContent.hide();
  }
});
