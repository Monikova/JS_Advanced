function sumTable() {
    const costTdElements = document.querySelectorAll('tbody tr td:nth-child(2n):not(#sum)');
    let sum = 0;
    for (cost of costTdElements) {
        sum += Number(cost.textContent)
    }

    const totalElement = document.getElementById('sum'); 
    totalElement.textContent = sum;
}
