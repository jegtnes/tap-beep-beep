$(document).ready(function() {
  $('#tapInToBegin, #tapInExplanation').on('click', function() {
    $('#tapInExplanation').toggleClass('explanation-hidden')
  });

  $('.action-overflow-hidden').removeClass('action-overflow-hidden');

  $('#file-button').on('click', function() {
    $('input[type=file]')[0].click();
  });
});
