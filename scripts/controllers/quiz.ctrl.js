quizApp.controller('quizCtrl',function($scope,quizMetricsFact,dataServices){
	 var vm = this;
	 vm.quizMetricFactObj = quizMetricsFact; // assign factoryObj
   vm.quizDataObj = dataServices.questionData;
	 vm.activeQuestionCount = 0;
	 var numQuestionsAnswered = 0;
	 vm.questionAnsweredFn = function(){
		 if(vm.quizDataObj[vm.activeQuestionCount].selected !== null){
			 	vm.numQuestionsAnswered++;
		 }
		 vm.setActiveQuestion();
	 };

	 function setActiveQuestion(){
		 var quizLength	 = vm.quizDataObj.length - 1;
		 var breakOut = false;
		 console.log('yess');
		 while(!breakOut){
       if(vm.activeQuestionCount < quizLength){
				 		vm.activeQuestionCount++;
			 }else {
			 			vm.activeQuestionCount = 0;
			 }

			 if(vm.quizDataObj[vm.activeQuestionCount].selected === null){
				 breakOut = true;
			 }
		 }
	 }
});
