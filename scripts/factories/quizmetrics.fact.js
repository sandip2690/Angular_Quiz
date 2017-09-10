quizApp.factory('quizMetricsFact',function(dataServices){

	        var quizObj = {};
	        quizObj.isShowQuiz = false;
	        quizObj.resultsActive  = false;
	        quizObj.correctAnswers = [];
		    quizObj.numCorrect = 0;
            quizObj.submitAnswer  = function(currentQueIndex){
                if(dataServices.correctAnswers[currentQueIndex] === dataServices.questionData[currentQueIndex].selected){
                   dataServices.questionData[currentQueIndex].correct = true;
                   quizObj.numCorrect++;
                }
                else{
                    dataServices.questionData[currentQueIndex].correct = false;
                }
            };
            quizObj.showResult = false;
            return quizObj;

    }); 

    // function fnChangeState(metric, state){
    //   if(metric === "quiz"){
    //     quizObj.isShowQuiz = state;
    // }else if(metric === "results"){
    //     quizObj.resultsActive = state;
    // }else{
    //     return false;
    // }
    // }
  
