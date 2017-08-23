quizApp.controller('listCtrl',function($scope,quizMetricsFact,dataServices){
    var vm = this;
    vm.data = dataServices.data;
    vm.search = "";
    vm.learMoreBtnClk = function(currentObj){
        vm.activeTurtleObj = currentObj;
    };
    vm.startQuizBtnClk = function(){
       quizMetricsFact.changeState(true)
    };
     vm.quizMetricFactObj = quizMetricsFact; // assign factoryObj to scope
    });
