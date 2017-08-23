quizApp.controller('listCtrl',function(){
    var vm = this;
    vm.data = turtlesData;
    vm.activeTurtleObj = {};
    vm.search = "";
    vm.isShowQuiz = false;
    vm.learMoreBtnClk = function(index){
        vm.activeTurtleObj = index;
    };
    vm.startQuizBtnClk = function(){
       vm.isShowQuiz = true;
    };
});
