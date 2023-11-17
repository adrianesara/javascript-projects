const whoWon = require("../RPS.js");

describe("whoWon", function(){
    test("return TIE if both players choose the same", function(){
        let output = whoWon("rock","rock")
        expect(output).toBe('TIE!')
})
    test("return Player 2 won if player 2 chose paper and player 1 chose rock", function(){
        let output = whoWon("rock","paper")
        expect(output).toBe('Player 2 wins!')
})
    test("return Player 2 won if player 2 chose scissors and player 1 chose paper",function(){
        let output = whoWon("paper","scissors")
        expect(output).toBe('Player 2 wins!')
})
    test("return Player 2 won if player 2 chose rock and player 1 chose scissors",function(){
        let output = whoWon("scissors","rock")
        expect(output).toBe('Player 2 wins!')
})
    test("return an error if any other word is entered besides paper, rock, scissors",function(){
        let output = whoWon("paperclip","napkin")
        expect(output).toBe("Error: not a valid choice")
    })
    
   // test("return Player 1 won if player 1 chose paper and player 2 chose rock",function(){
     //  let output = whoWon("paper","rock")
       //expect(output).toBe("Player 1 wins!")

})
