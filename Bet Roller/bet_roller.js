// NOTE TO SELF: Debug for infinite winning amounts and invalid types


/*    
 ABOUT THIS PROGRAM:
     1.   A rollover in sports betting involves staking a 'starting capital' or base amount on a fixed number of odds or price, 
          then restaking the profits made repeatedly. A technique used to 'grow' the money. Usually done for a fixed number of repitions. 

     2.   This program calculates the final amount after a fixed number of rollovers (iterations), given the starting capital, 
          a fixed number of odds, and the number of iterations.This program is designed to ensure there is a fixed upper limit if iterations.

     3.   This program will also store each potential winning amount at every step of the iteration in an array.

     4.   This progarm is able to retrieve select potential winnings on demand based on a given iteration number (accessible using array indexes).

     5.   This program will ensure to catch type errors in the input parameters and will also prevent infinite winning amounts.

     5.   This program will also calculate the total amount of money staked at each iteration.

     5.   This program will also calculate the total amount of money staked in the process. 
*/
const winnings = []; // Array to hold  all potential winnings at each iteration.
class Rolling {
     constructor (startingAmount, totalOdds, totalBets, winIndex) {
          this.startingAmount  = startingAmount;  //  Starting capital or initial stake.
          this.totalOdds = totalOdds;   //  Total odds or price.
          this.totalBets = totalBets;   //  Total number of bet iterations. Intended to be a fixed maximun amount.
          this.winIndex = winIndex;     //   Index of the winning amount in the array.
     };
     rollBet = function() { 
          for (let i = 1; i <= this.totalBets; i++) {  //  Loop from he first iteration to the intended  number of iterations. Or max iterations.
               this.startingAmount = Math.floor(this.startingAmount * this.totalOdds);    // Calculates the new amount after each iteration.
               winnings.push(`${i}. ₦${this.startingAmount}`);    //  Stores the new amount in the array.
          }          
          return winnings;
     };
     findWinAt = function() { 
          const nullInput =   //   Intended to catch output errors resulting through wrong input types (inc. strings, null, undefined, negative numbers) and no inputs at all.
          this.startingAmount <  0 || this.startingAmount == undefined || this.startingAmount == null || _.isString(this.startingAmount) == true ||
          this.totalOdds <= 0 || this.totalOdds == undefined || this.totalOdds == null || _.isString(this.totalOdds) == true ||    
          this.totalBets < 0 || this.totalBets == undefined ||  this.totalBets == null || _.isString(this.totalBets) == true ||    
          this.winIndex <= 0 || this.winIndex == undefined  || this.winIndex == null || _.isString(this.winIndex) == true;                         
     
          if (nullInput) {
               return "ERROR: Invalid / Incomplete Input Value";
          }
          else if (this.totalBets >= 0 && this.winIndex <= this.totalBets) {
                    return winnings.at(this.winIndex - 1);
          } else {
               return `ERROR:  Max Number of bets (${this.totalBets}) is less than ${this.winIndex}`;
          }
     };
     findTotalStakes = function() { // When called, should find the grand total of all stakes to be made across all iterations.
        
     }
}
let roll = new Rolling(6000, 3, 1, 4); // (startingAmount, odds, MaxBets, winAmountAt) 
console.log(roll.rollBet())
console.log(roll.findWinAt()); 