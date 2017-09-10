quizApp.controller('quizCtrl', function($scope, quizMetricsFact, dataServices) {
        var vm = this;
        vm.quizMetricFactObj = quizMetricsFact;
        vm.quizDataObj = dataServices.questionData;
        vm.activeQuestionCount = 0;
        vm.selectedFlags = false;
        vm.contBtnClick = function(){
            
            if(vm.quizDataObj[vm.activeQuestionCount].selected !== null){
               vm.quizMetricFactObj.submitAnswer(vm.activeQuestionCount);

               vm.activeQuestionCount++; 
            }
            else{
                vm.selectedFlags = true;
            }
            if(vm.activeQuestionCount === vm.quizDataObj.length){
                vm.quizMetricFactObj.showResult = true;     
            }

        }
        vm.currentAnsOptfn = function(index){
            vm.quizDataObj[vm.activeQuestionCount].selected = index;
            vm.selectedFlags = false;
        }

    });