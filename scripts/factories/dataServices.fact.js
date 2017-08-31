quizApp.factory('dataServices',function(){
  var dataObj = {
      turtleData : turtlesData,
      questionData : quizQuestions
  };
  return dataObj;
});
