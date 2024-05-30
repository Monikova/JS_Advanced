function calc() {
    // TODO: sum = num1 + num2
    const num1Elem = document.getElementById('num1');
    const num2Elem = document.getElementById('num2');
    let sum = Number(num1Elem.value) + Number(num2Elem.value); 

    const sumArea = document.getElementById('sum'); 
    sumArea.value = sum;
}
