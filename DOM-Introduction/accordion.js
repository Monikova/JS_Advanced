function toggle() {
    const buttonStatusElement = document.querySelector('.button'); 
    const textElement = document.querySelector('div #extra');
    if (buttonStatusElement.textContent === "More") {
        textElement.style.display = 'block';
        buttonStatusElement.textContent = "Less";
    } else {
        buttonStatusElement.textContent = "More";
        textElement.style.display = 'none';
    }
}


{/* <body>
    <div id="accordion">
        <div class="head">DOM Manipulations Exercise <span class="button" onclick="toggle()">More</span></div>
        <div id="extra">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
    <script src="accordion.js"></script>
</body> */}
