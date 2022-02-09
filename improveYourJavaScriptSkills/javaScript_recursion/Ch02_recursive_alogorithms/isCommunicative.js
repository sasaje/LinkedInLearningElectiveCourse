function division(firstOperand, secondOperand){
    return firstOperand / secondOperand;
}

function isCommunicative(testFunction, testOperandOne, testOperandTwo){
    const firstResult = testFunction(testOperandOne, testOperandTwo);
    const secondResult = testFunction(testOperandTwo, testOperandOne);

    return firstResult == secondResult;
}

isCommunicative( division, 4, 7);