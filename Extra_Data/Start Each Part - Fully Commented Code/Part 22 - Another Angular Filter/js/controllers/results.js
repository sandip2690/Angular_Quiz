/*
 * IIFE to encapsulate code and avoid global variables
 */
(function(){

    /*
     * attaching results controller function to the turtleFacts module 
     */
    angular
        .module("turtleFacts")
        .controller("resultsCtrl", ResultsController);

    /*
     * injecting the custom service quizMetrics into the results controller 
     * using the $inject method.
     *
     * Injecting dependencies like this is done so as to avoid issues when 
     * uglifying the code. Function arguments will get shortened during the 
     * uglify process but strings will not. Therefore by injecting the argument
     * as strings in an array using the $inject method we can be sure angular 
     * still knows what we want to do.
     */
    ResultsController.$inject = ['quizMetrics', 'DataService'];

    /*
     * definition of the results controller function itself. Taking 
     * quizMetrics as an argument
     */
    function ResultsController(quizMetrics, DataService){
        var vm = this;

        /*
         * The pattern used in the controllers in this app puts all the 
         * properties and methods available to the view at the top of the 
         * function. Any methods are referenced as named functions which are 
         * defined at the bottom.
         *
         * This allows the interface of the controller to be seen at a glance. 
         * Which is not usually the case when defining methods as anon 
         * functions inline.
         */
        vm.quizMetrics = quizMetrics; // binding the object from factory to vm 
        vm.dataService = DataService;
        vm.getAnswerClass = getAnswerClass; // named function defined below
        vm.activeQuestion = 0;

        function getAnswerClass(index){
            /*
             * returning the class to style the answer depending on whether it 
             * is right or wrong. quizMetrics can be referenced here without 
             * vm. as the object is passed by reference. We can manipulate 
             * the object directly here. vm. is only needed when it is being
             * manipulated by the view as the view does not have direct access
             * to the quizMetrics service. But as we are in the controller
             * we can directly manipulate it
             */
            if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
                return "bg-success";
            }else if(index === DataService.quizQuestions[vm.activeQuestion].selected){
                return "bg-danger";
            }
        }

    }

})();
