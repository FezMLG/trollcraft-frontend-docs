import $ from 'jquery';

function liveEditing() {
  var input = $('.liveSource');
  var label = $(`.liveView`);

  input.bind('keydown keypress', function() {
    setTimeout(function() {
        label.text(input.val());
    }, 0);
  });
}

export default liveEditing