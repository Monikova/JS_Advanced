function create(words) {
   const divContentElement = document.getElementById('content'); 

   for (let word of words) {
      let divElement = document.createElement('div');
      let parElement = document.createElement('p');
      parElement.textContent = word;
      parElement.style.display = 'none';
      divElement.append(parElement);
      divElement.addEventListener('click', function(event) {
         parElement.style.display = '';
      });
      divContentElement.append(divElement);
   }
}



{/* <body onload="create(['Section 1', 'Section 2', 'Section 3', 'Section 4']);">
    <div id="content">
    </div>
</body> */}
