quizApp.controller('quizCtrl',function($scope,quizMetricsFact,dataServices){
	 var vm = this;
	 vm.quizMetricFactObj = quizMetricsFact; // assign factoryObj
  	 vm.quizDataObj = dataServices.questionData;
	 vm.activeQuestionCount = 0;
	 var numQuestionsAnswered = 0;
	 vm.questionAnsweredFn = function(){
	 	//debugger
		 if(vm.quizDataObj[vm.activeQuestionCount].selected !== null){
			 	vm.numQuestionsAnswered++;
		 }
		 vm.setActiveQuestion();
	 };

	 vm.setActiveQuestion = function(){
		 var quizLength	 = vm.quizDataObj.length - 1;
		 var breakOut = false;

		 while(!breakOut){
       		if(vm.activeQuestionCount != quizLength){
       			console.log('innnnn')
				 		vm.activeQuestionCount++; // increment
			 }else {
			 			vm.activeQuestionCount = 0; // last position
			 }

			 if(vm.quizDataObj[vm.activeQuestionCount].selected === null){
				 breakOut = true;
			 }
		 }
	 }
});
