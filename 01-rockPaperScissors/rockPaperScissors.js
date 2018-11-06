/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (n) {

        var result = [];
        var arr = ['rock', 'paper', 'scissors'];

        for(var r = 0; r < 3; r++){
                for(var p = 0; p < 3; p++){
                        for(var s = 0; s < 3; s++){
                                result.push([arr[r], arr[p], arr[s]]);
                        }
                }
        }
        
        return result;

};
