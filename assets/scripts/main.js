import { handleOperand } from "./functions/displayCalculation.js";
import { handleOperations } from "./functions/displayOperation.js";
import { handleRemove } from "./functions/removeAll.js";
import { handleDelete } from "./functions/deleteOneSimpleValue.js";
import { handleResult } from "./functions/displayResult.js";
import {
    switchIntoTheme1,
    switchIntoTheme2,
    switchIntoTheme3
} from "./functions/switchTheme.js";

handleOperand();
handleOperations();
handleDelete();
handleRemove();
handleResult();
switchIntoTheme1();
switchIntoTheme2();
switchIntoTheme3();
