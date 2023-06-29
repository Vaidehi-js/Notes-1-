$(document).ready(function() {
    // Add effect to the title input field
    $('#titleInput').focus(function() {
      $(this).addClass('highlight');
    }).blur(function() {
      $(this).removeClass('highlight');
    });

    // Add effect to the comment textarea
    $('#commentTextarea').focus(function() {
      $(this).addClass('highlight');
    }).blur(function() {
      $(this).removeClass('highlight');
    });

    // Add effect to the save button
    $('#saveButton').click(function() {
      $(this).fadeOut('fast').fadeIn('fast');
    });
  });