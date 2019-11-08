const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function(tweet) {
  let ago = timeSince(tweet.created_at);
  return (`<article  class='tweet'>
              <header class="tweetlibraryheader">               
                <div class="displayname"> 
                    <img class= "displayimage" src=${escape(tweet.user.avatars)}> 
                    ${escape(tweet.user.name)}
                </div>
                <div class="tweeterhandle">
                ${escape(tweet.user.handle)}
                </div>
              </header>
              <div class="tweeterlibrarytweet"><div class="tweet-display"> ${escape(tweet.content.text)} </div></div>
              <footer class="tweetlibraryfooter"> 
                <div class="tweetdate">
                ${ago} ago
                </div>
                <div class="frl">
                <i class="fa fa-flag"></i> <i class="fa fa-retweet"></i> <i class="fa fa-heart"></i>
                </div>
              </footer>
              </article>`
  );
};

function renderTweets(tweets) {
  const articles = $('#tweets-container');
  tweets.reverse();
  tweets.forEach((tweet) => {
    articles.append(createTweetElement(tweet));
  });
}

const ifError = function() {
  if (document.getElementsByClassName("error").length === 0) {
    return true;
  } else {
    return false;
  }
};

$(function() {
  const $button = $('#tweet-form');
  $button.on('submit', function(event) {
    let tweetfield = $('#twittertext').val();
    event.preventDefault();
    $(".error").remove();
    if (tweetfield === "" || tweetfield === null) {
      if (ifError() === true) {
        $("#new-tweet").prepend(`<p class="error"> <i class="fa fa-exclamation-triangle"></i> You didn't type anything! <i class="fa fa-exclamation-triangle"></i> </p>`);
      }
    }
    if (tweetfield.length > 140) {
    // tweetfield does not empty if tweet is too long so user doesn't lose their input!
      if (ifError() === true) {
        $("#new-tweet").prepend(`<p class="error"> <i class="fa fa-exclamation-triangle"></i> Easy Shakespeare! You're over your character count! <i class="fa fa-exclamation-triangle"></i></p>`);
      }
    } else {
      let tweetinput = $("#twittertext").serialize();
      $.ajax({
        type:"POST",
        url: "/tweets",
        data: tweetinput,
        // dataType: {},
        success: function(res) {
          $('#tweets-container').prepend(createTweetElement(res));
        }
      });
      $('#twittertext').val("");
      $('#counter').replaceWith(`<span id="counter" class="counter">140</span>`);
    }
  });
  $.ajax({
    url: "/tweets",
    success: (tweetinput => renderTweets(tweetinput))
  });
});

$(document).ready(function() {
  $('#new-tweet').hide();
});

$(".subspan").click(function() {
  $('#new-tweet').slideToggle("fast");
  $('#twittertext').focus();
  $("#dancingarrow").slideToggle("fast");
});


const timeSince = function(date) {
  // source =====> https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site

  let seconds = Math.floor((new Date() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};