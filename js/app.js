var question = new Object();
question.text="There's been a problem loading";
question.correctAnswer="none";

$(function() {
});

$(document).ready(function(){
  loadFromAPI();
  $("#buttonOK").click(function(){
    answer = $("#answer").val();
    console.log("Got to here");
    if(answer == question.correctAnswer) {
      console.log("Correct answer!");
    }
    var feedback=question.feedbacks["_default_"];
    for (a in question.feedbacks) {
      if(a == answer){
	feedback = question.feedbacks[a];
      }
    }
    $("#feedback").html(feedback);
  });
});

function load(){
  q = new Object();
  q.text="Does this work?";
  q.correctAnswer="yes";
  return q;
}

function loadFromAPI(){
  var xhr = new XMLHttpRequest({mozSystem: true});
  xhr.open("GET", "http://localhost/nalu/api.php?action=get_question", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      console.log(xhr.responseText);
      question = JSON.parse(xhr.responseText);
      console.log(question.text);
      $("#question").html(question.text);
    }
  }
  xhr.send();
}