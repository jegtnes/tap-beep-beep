if ($('form').length) {
  window.onbeforeunload = function() {
    return "Leaving this page will discard your post.";
  }

  $('a.action.create').on('click', function() {
    window.onbeforeunload = null;
  });
}
