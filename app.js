
$("#nextBtn").click(function(){
  console.log("Clicked");
  var currentSlide = $(".sliders.active");
  var nextSlide = currentSlide.next();

  currentSlide.fadeOut(300).removeClass("active");
  nextSlide.fadeIn(300).addClass("active");
 if(nextSlide.length == 0){
   $(".sliders").first().fadeIn(300).addClass("active");
 }

});

$("#prevBtn").click(function(){
  console.log("Clicked");
  var currentSlide = $(".sliders.active");
  var prevSlide = currentSlide.prev();

  currentSlide.fadeOut(300).removeClass("active");
  prevSlide.fadeIn(300).addClass("active");
 if(prevSlide.length == 0){
   $(".sliders").last().fadeIn(300).addClass("active");
 }

});
