quizApp.factory('quizMetricsFact',function(){

	  var quizObj = {
	        isShowQuiz : false,
	        changeState: fnChangeState
	  };
      return quizObj;

    function fnChangeState(state){
      quizObj.isShowQuiz = state;
    }
});
