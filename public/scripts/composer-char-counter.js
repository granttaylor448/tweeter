let count = 0
$("#twittertext").keyup(function() {
  count = $(this).val().length

  if (count > 140) {
    count = 140 - count;
    $(this).next().children().eq(1).css("color", "red")
  }else {
    count = 140 - count;
    $(this).next().children().eq(1).css("color", "black")
  }
  $(this).next().children().eq(1).empty().append(count); 
});

