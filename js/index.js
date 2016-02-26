$(document).ready(function() {
  $('#share').hide();
  $('#generate').on('click', function() {
    $('#share').show();
    $.ajax({
      jsonp: "jsonp",
      dataType: "jsonp",
      url: 'http://api.forismatic.com/api/1.0/',
      contentType: 'application/jsonp',
      data: {
        lang: "en",
        method: "getQuote",
        format: "jsonp"
      },
      success: function(data) {
        var response = '<p>' + data.quoteText + '</p><small><cite title="Source Title">' + data.quoteAuthor + '</cite></small>';
        $('.quote').html(response);
        $('#share').off('click');
        $('#share').on('click', function() {
          var win = window.open('https://twitter.com/intent/tweet?hashtags=' + data.quoteAuthor + '&related=ChakravartiS&text=' + data.quoteText , '_blank');
          if (win) {
            //Browser has allowed it to be opened
            win.focus();
          } else {
            //Broswer has blocked it
            alert('Please allow popups for this site');
          }
        });
      }
    });
  });

});