quizApp.controller('listCtrl',function(quizMetricsFact){
    var vm = this;
    vm.data = turtlesData;
    vm.activeTurtle = {};
    vm.search = "";
    vm.quizActive = false;
    vm.changeActiveTurtle = function(index){
        vm.activeTurtle = index;
    };
    vm.activateQuiz = function(){
      // vm.quizActive = true;
      quizMetricsFact.changeState = true;
    };
});
