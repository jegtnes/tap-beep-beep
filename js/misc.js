$(document).ready(function() {
  $('#tapInToBegin, #tapInExplanation').on('click', function() {
    $('#tapInExplanation').toggleClass('explanation-hidden')
  });

  $('.action-overflow-hidden').removeClass('action-overflow-hidden');

<<<<<<< HEAD
  $('#file-button').on('click', function() {
    $('input[type=file]')[0].click();
  });
=======
  query = $.parseQuery();
  if (query.upload === 'photo') {
    var toast = new fries.Toast({ content: "Thanks! Your photo will be uploaded shortly." });
  }
  else if (query.upload === 'text') {
    var toast = new fries.Toast({ content: "Thanks! Your post will be uploaded shortly." });
  }
>>>>>>> master
});
