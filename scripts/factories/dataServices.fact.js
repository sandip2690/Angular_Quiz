quizApp.factory('dataServices',function(){
  var dataObj = {
      turtleData : turtlesData,
      questionData : quizQuestions,
      correctAnswers: correctAnswers
  };
  return dataObj;
});
