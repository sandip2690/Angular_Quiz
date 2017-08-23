quizApp.factory('quizMetricsFact',function(){
  quizActive = true;
  var quizObj = {
        quizActive :true,
        changeState: changeState
  };
      return quizObj;

    function changeState(state){
      quizObj.changeState = state;
    }
});
