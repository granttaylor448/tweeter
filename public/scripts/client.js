/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


 const createTweetElement = function (tweet) {
   console.log(tweet)
    return (`<article  class='tweet'>
              <header class="tweetlibraryheader">               
                <div class="displayname"> 
                    <img class= "displayimage" src=${tweet.user.avatars}> 
                    ${tweet.user.name}
                </div>
                <div class="tweeterhandle">
                ${tweet.user.handle}
                </div>
              </header>
              <p class="tweeterlibrarytweet"> ${tweet.content.text}</p>
              <footer class="tweetlibraryfooter"> 
                <div class="tweetdate">
                ${tweet.created_at}
                </div>
                <div class="frl">
                  Flag, RT, Like
                </div>
              </footer>
              </article>`
            
            );

}
// $(document).ready(function() {
// const $tweet = createTweetElement(tweet);
// console.log($tweet);
// $('#tweets-container').append($tweet);
// 
// });

function renderTweets (tweets) {
  const articles = $('#tweets-container')
  tweets.forEach((tweet) => {
    articles.append(createTweetElement(tweet))
  });
}
$(document).ready(function() {
renderTweets(data);
});







// const $tweet = $("<article>").addClass("tweet");


// Test / driver code (temporary). Eventually will get this from the server.









// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); 


// const createTweetElement = function (object) {
  // let $tweet = $('<article>').addClass('tweet');
  // let newObj = {}
  // let username = object.user.name
  // let handle = object.user.handle
  // let tweet = object.content.text
  // let date = object.created_at
// 
  // $tweet[tweet] = {username: username, handle: handle, tweet: tweet, date: date }
  // return newObj
  // return $tweet;
// }