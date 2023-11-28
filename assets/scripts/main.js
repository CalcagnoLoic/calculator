import { handleOperand } from "./functions/displayCalculation.js";
import { handleOperations } from "./functions/displayOperation.js";
import { handleRemove } from "./functions/removeAll.js";
import { handleDelete } from "./functions/deleteOneSimpleValue.js";

handleOperand();
handleOperations();
handleDelete();
handleRemove();

// const calculateResult = () => {
//     let firstNumber = parseFloat(currentDataValue);
//     let secondNumber = parseFloat(previousDataValue);
//     let result;

//     switch (operation) {
//         case "+":
//             result = firstNumber + secondNumber;
//             break;
//         case "-":
//             result = firstNumber - secondNumber;
//             break;
//         case "*":
//             result = firstNumber * secondNumber;
//             break;
//         case "/":
//             result = firstNumber / secondNumber;
//             break;
//     }
// };
