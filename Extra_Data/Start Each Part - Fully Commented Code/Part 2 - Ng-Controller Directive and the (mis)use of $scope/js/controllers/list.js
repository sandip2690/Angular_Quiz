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


})();
