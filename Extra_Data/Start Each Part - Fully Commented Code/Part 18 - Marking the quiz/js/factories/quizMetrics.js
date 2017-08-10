/*
 * IIFE to avoid global namespace pollution and keep code safe.
 */
(function(){

    /*
     * creating a factory called quizMetrics and attaching that to the 
     * turtleFacts module. 
     *
     * This factories job is to hold all the data the pertains to the quiz. 
     * This could be:
     *          -the questions themselves. What kind of question it is(text or 
     *              image)
     *          -Whether the current question has been answered or is still 
     *              blank. 
     *          -Hold data to show if quiz is active, results are active or 
     *              neither
     *          -Method to change the state of the quiz and results (active or
     *              inactive)
     *          -Hold what the actual correct answers are
     *          -Method to mark the answers
     *          -hold how many correct answers the user gave
     *          
     */
    angular
        .module("turtleFacts")
        .factory("quizMetrics", QuizMetrics);

        /*
         * function definition for the factory
         */
        function QuizMetrics(){

            /*
             * quizObj is an object that will hold all of the above mentioned 
             * properties and methods and will be the return value of the 
             * factory
             *
             * As per pattern used in the controllers, the methods will 
             * reference named functions that are at the bottom of this function
             */
            var quizObj = {
                quizActive: false,
                resultsActive: false,
                changeState: changeState, // changeState is a named function below
            };

            /*
             * Return the quizObj. This is done near the top of the function to
             * allow a quick glance above the fold in the code to see 
             * functionality. Implementation of that functionality can then be
             * seen by scrolling down.
             */
            return quizObj;

            /*
             * Function to change the state of either the quiz or the results.
             *
             * It accepts two arguments, one is which metric to change (quiz or
             * results) and the other is what to change the state too.
             */
            function changeState(metric, state){
                if(metric === "quiz"){
                    quizObj.quizActive = state;
                }else if(metric === "results"){
                    quizObj.resultsActive = state;
                }else{
                    return false;
                }
            }

        }

})();
