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
     * function defintion of the quiz controller with quizMetrics as args. 
     */
    function QuizController(){

        var vm = this;

    }

})();
