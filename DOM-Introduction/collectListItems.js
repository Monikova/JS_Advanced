function extractText() {
    const items = document.querySelectorAll("#items li"); 
    let itemsArr = Array.from(items).map(item => item.textContent); 
    const textArea = document.getElementById('result');
    textArea.value = itemsArr.join('\n');    
}


{/* <body>
<ul id="items">
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
</ul>
<textarea id="result"></textarea>
<br>
<button onclick="extractText()">Extract Text</button>
<script src="CollectListItems.js"></script>
</body> */}
