quizApp.controller('quizCtrl',function($scope,quizMetricsFact,dataServices){
	 var vm = this;
	 vm.quizMetricFactObj = quizMetricsFact; // assign factoryObj
  	vm.quizDataObj = dataServices.questionData;
	 vm.activeQuestionCount = 0;
	 vm.error = false; 
	 var numQuestionsAnswered = 0;
	 vm.questionAnsweredFn = function(){
	 	//debugger
		 if(vm.quizDataObj[vm.activeQuestionCount].selected !== null){
			 	vm.numQuestionsAnswered++;
		 }
		 vm.setActiveQuestion();
	 };

	 vm.setActiveQuestion = function(index){

  if(index === undefined){
	 	 var quizLength	 = vm.quizDataObj.length - 1;
		 var breakOut = false;

		 while(!breakOut){
       		if(vm.activeQuestionCount != quizLength){
						 		vm.activeQuestionCount++; // increment
					 }else {
					 			vm.activeQuestionCount = 0; // last position
					 }

			 if(vm.quizDataObj[vm.activeQuestionCount].selected === null){
				 breakOut = true;
			 }

			 if(vm.activeQuestionCount === 0){
			 		vm.error = true;
	 			}
		 }
	 }
	 else{
		 vm.activeQuestionCount = index;
	 }
	 };
	 vm.selectAnswerFn = function(selectedIndex){
		 	vm.quizDataObj[vm.activeQuestionCount].selected =  selectedIndex;
	 };
});
