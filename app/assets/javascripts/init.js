$(document).ready(function(){
  var currentTime = new Date();
  currentTime.getSeconds();

  console.log(currentTime);

  var dateString = Date.parse(currentTime);
  var birthday   = Date.parse("4/13/2015");

  if(dateString <= birthday){
    $(".Answer").append("Yes");
    $(".Body").css("background-color", "#25A30F");
  }
  else{
    $(".Answer").append("No");
    $(".Body").css("background-color", "#D40D0D");
  }
});

