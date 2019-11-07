$(document).ready(function() {
  console.log("document ready!")
});

// document.addEventListener("click", (event) => {
  // console.log("click!!!!!!!");
// });

// let element = document.getElementById("twittertext");
// 
// 
// element.addEventListener("keyup", function (callback) {
  // console.log("It returns ->", this.value);
// });

// $("twittertext").on("keyup", function (){
  // console.log("It returns ->", this)
// })
// let count = $("#twittertext".val().length);
let count = 0
$("#twittertext").keyup(function() {
  // count ++;
  // if(e.keyCode == 8) {
    // counter --;
  // }
  count = $(this).val().length
  console.log(count);
  if (count > 140) {
    count = 140 - count;
    $(this).next().children().eq(1).css("color", "red")
  } else {
    $(this).next().children().eq(1).css("color", "black")
  }
  // console.log( $(this).next().children().eq(1))
  $(this).next().children().eq(1).empty().append(count);
  
});

$(document).ready(function() {
  $('#new-tweet').hide()
});
$("#dancingarrow").click(function() {
  $(this).animate({ padding: "0em" }, 'fast')
  $(this).animate({ opacity: "1"}, "fast")
  $('#new-tweet').slideToggle("fast");
  // $("#new-tweet").animate({marginTop: "+=50px"})
  
  $(this).animate({ padding: "0.5em"}, 'fast')
  $(this).animate({ opacity: ".5"}, "fast")
  
});
// $("#dancingarrow").click(function() {
  // $('#new-tweet').show()
// }, function () {
  // $('#new-tweet').show()
// });

// $("#dancingarrow").click(function() {
  // $("new-tweet".css(
    // 
  // )
// });

// $(".tweet").hover(
  // function(){
    // $(this).css("box-shadow", "10px 5px 5px rgb(128, 142, 226")
    // $(this).children().children().eq(1).empty().append("@Twitter Handle")
  // }, function (){
    // $(this).css("box-shadow", "none")
    // $(this).children().children().eq(1).empty()
  // }
// )

// $("#counter").val(count);
// $("#form-footer .counter")

console.log(count)