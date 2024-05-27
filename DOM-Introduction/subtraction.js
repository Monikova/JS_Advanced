function subtract() {
    const num1 = document.getElementById('firstNumber').value;
    const num2 = document.getElementById('secondNumber').value;
    const resultAreaElement = document.getElementById('result');
    console.log(resultAreaElement.textContent = Number(num1) - Number(num2));
}


{/* <body>
    <div id="wrapper">
        <input type="text" id="firstNumber" value="13.33" disabled>
        <input type="text" id="secondNumber" value="22.18" disabled>

        <div id="result"></div>
    </div>
    <script src="subtract.js"></script>
    <script>
        window.onload = function() {
            subtract();
        }
    </script>
</body> */}
