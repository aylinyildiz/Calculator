class Calculator {
  calculateArr(params) {
    const ruleArray = ["+", "-", "/", "*", "(", ")"];
    const processArray = [];
    const numberArray = [];
    let number = 0;

    //sayı olduğu sürece ekleyecek aritmetik işarete kadar. 123 gibi
    for (let i = 0; i < params.length; i++) {
      if (!ruleArray.includes(params[i])) {
        number += params[i]; //"123"
      } else {
        processArray.push(params[i]);
        numberArray.push(parseInt(number));
        number = "";
      }
    }

    let n1, n2;
    for (let i = 0; i < numberArray.length - 1; i++) {
      if (i === 0) {
        n1 = numberArray[i];
      }

      n2 = numberArray[i + 1];
      let process = processArray[i];

      switch (process) {
        case "+":
          n1 = n1 + n2;
          break;
        case "-":
          n1 = n1 - n2;
          break;
        case "/":
          n1 = n1 / n2;
          break;
        case "*":
            n1=n1*n2;
            break;
        default:
          break;
      }
    }
    return n1;
  }
}
