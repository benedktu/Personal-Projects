// let Output = [];

// class Maths {
//     constructor (x, n) {
//         this.x = x;
//         this.n = n;
//     }
//     doMath() {
//         this.doModulo();
//         this.doPower();
//         return this;
//     }
//     doModulo() {
//         let sol = this.x % this.n;
//         Output.push(`The Mod is: ${sol} `);
//     }
//     doPower() {
//         let power = this.x;
//         for  (let i = 0; i < this.n; i++) {
//         //    if (this.x > 0) {
//            return power = power  * this.x;
//         //    }
//         }

//     }
// }



// console.log(someOperation.doMath(4, 5));

  console.log(17 ** 7);
  


function Math(x, n) {
  
        this.x = x,
        this.n = n,
        Output = [],

    doMath =  function() {

    },
    doModulo = function(x, n) {
        let sol = this.x % this.n;
        return `The Mod is: ${sol} `;
        }
    // doPower = function() {
    //     let power = this.x;
    //     for  (let i = 0; i < this.n; i++) {
    //         return power = power  * this.x;
    //     }
    //  }
}

const someOperation = new Math();
someOperation.doModulo(4, 2);