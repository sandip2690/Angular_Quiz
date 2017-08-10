/*
 * IIFE to avoid polution of the global namespace.
 */
(function(){
    /*
     * Creating List controller and attaching it to the main turtleFacts module
     */
    angular
        .module("turtleFacts")
        .controller("listCtrl", ListController);


    /*
     * Definition for the List controller. quizMetrics is a
     * services that is created in js/factory/quiz.js
     */
    function ListController(){
        var vm = this;

    }

})();
