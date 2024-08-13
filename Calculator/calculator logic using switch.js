function calcApp() {
    
    // Defining Variables and receiving user input:    
    const askingMessage = confirm("Calculate something?"),  
        num1 = Number(prompt("First number:", "0")),
        num2 = Number(prompt("Second number:", "0"));
    
    // Logic defining what mathematical operation is performed according to user input:  
    switch (prompt("What operation do you want to perform?", "Type 'add', 'subtract', 'multiply', 'divide' or 'mod' " )) {
        case "add":
             Operation.doAddition();
            break;
    
        case "subtract":
            Operation.doSubtraction();
            break;
    
        case "multiply":
            Operation.doMultiplication();
            break;
    
        case "divide":
            Operation.doDivision();
            break;
    
        case "modulo":
            Operation.doModulo();
            break;
            
        default:
            alert("Incorrect Operation");
    }
    
    // The Operator Object holding the logic for the arithmetic operations:
    const Operation = {
    
        // This method will add any two numbers.
        doAddition: function () {
            let result = num1 + num2
            alert(result);
        },
    
        // This method will only subtract the smaller number from the larger number:
        doSubtraction: function () {
            if (num1 >= num2) {
                alert(num1 - num2);
            } else if (num2 > num1) {
                alert(num2 - num1);
            }
        },
    
        // This method multiplies any two numbers:
        doMultiplication: function () {
            alert(num1 * num2);
        },
    
        // This method will only divide the larger number by the smaller number:
        doDivision: function () {  
            if (num1 >= num2) {
                alert(num1 / num2);
            } else {
                alert(num2 / num1);
            }
        },
    
        // This function will only give the modular remmainder of larger number divided by smaller number 
        // OR equal numbers; 'null' if otherwise.
        doModulo: function () { 
            alert(num1 % num2);
        } 
    }
}  


