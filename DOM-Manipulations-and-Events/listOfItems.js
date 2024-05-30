function addItem() {
    const textElement = document.getElementById('newItemText');
    const outputFieldElements = document.getElementById('items');
    let newOutputField = document.createElement('li'); 
    newOutputField.textContent = textElement.value;
    outputFieldElements.appendChild(newOutputField);

    // clear text from input area
    textElement.value = '';
}
