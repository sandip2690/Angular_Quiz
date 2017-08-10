/*
 * Immediately Invoked Function Expression (IIFE) to avoid creating global 
 * variables and keep code safe
 */
(function(){

    /*
     * Call the angular module called turtleFacts that was created in js/app.js
     * then attach the controller quizCtrl to it.
     *
     * The quiz controller is added as a named function instead of an anon func
     * to keep the code clean and readable.
     */
    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);

    /*
     * Angular dependency injection to avoid issues when uglifying the code
     * Passing the dependencies as strings avoids them being changed when 
     * uglified.
     */
    QuizController.$inject = ['quizMetrics'];

    /*
     * function defintion of the quiz controller with quizMetrics as args. 
     *
     * quizMetrics is a service we created that
     * is defined in js/factory/quiz.js
     */
    function QuizController(quizMetrics){

        var vm = this;

        /*
         * All the properties and methods that will be exposed to the view are 
         * declared below. Declaring them like this allows you to take a quick 
         * look at the code and be able to see what this controller does 
         * without having to scroll through all the code.
         *
         * Any methods declared below are done so by using named functions. 
         * These functions are then defined further down the page
         */
        vm.quizMetrics = quizMetrics;

    }

})();
