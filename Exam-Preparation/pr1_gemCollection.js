window.addEventListener("load", solve);

function solve() {
    //Gemstone Name, Color, Carats, Price, and Type
    const gemNameElem = document.getElementById("gem-name");
    const colorElem = document.getElementById("color");
    const caratsElem = document.getElementById("carats");
    const priceElem = document.getElementById("price");
    const typeElem = document.getElementById("type");
    const addBtnElem = document.getElementById("add-btn");
    const previewElem = document.getElementById("preview-list");
    const collectionElem = document.getElementById("collection");

    addBtnElem.addEventListener("click", addOnClick);

    function addOnClick(event) {
        const gemName = gemNameElem.value;
        const color = colorElem.value;
        const carats = caratsElem.value;
        const price = priceElem.value;
        const type = typeElem.value;

        if (!gemName || !color || !carats || !price || !type) {
            return;
        }

        const liElem = document.createElement("li");
        liElem.classList.add("gem-info");

        const articleElem = document.createElement("article");

        const articleHeaderElem = document.createElement("h4");
        articleHeaderElem.textContent = gemName;
        const pColorElem = document.createElement("p");
        pColorElem.textContent = "Color: " + color;
        const pCaratsElem = document.createElement("p");
        pCaratsElem.textContent = "Carats: " + carats;
        const pPriceElem = document.createElement("p");
        pPriceElem.textContent = `Price: ${price}$`;
        const pTypeElem = document.createElement("p");
        pTypeElem.textContent = "Type: " + type;

        const saveBtnElem = addButtons("save-btn", "Save to Collection", saveOnClick);
        const editBtnElem = addButtons("edit-btn", "Edit Information", editOnClick);
        const cancelBtnElem = addButtons("cancel-btn", "Cancel", cancelOnClick);

        articleElem.appendChild(articleHeaderElem);
        articleElem.appendChild(pColorElem);
        articleElem.appendChild(pCaratsElem);
        articleElem.appendChild(pPriceElem);
        articleElem.appendChild(pTypeElem);
        liElem.appendChild(articleElem);
        liElem.appendChild(saveBtnElem);
        liElem.appendChild(editBtnElem);
        liElem.appendChild(cancelBtnElem);
        previewElem.appendChild(liElem);

        clearInputFields(gemNameElem, colorElem, caratsElem, priceElem, typeElem);
        toggleBtn(addBtnElem);
    }

    function clearInputFields(...fields) {
        fields.forEach(f => f.value = "");
    }

    function toggleBtn(btn) {
        btn.disabled = !btn.disabled;
    }

    function addButtons(classes, text, handler) {
        const btnElem = document.createElement("button");
        btnElem.classList.add(classes);
        btnElem.textContent = text;
        btnElem.addEventListener("click", handler);
        return btnElem;
    }

    function editOnClick(event) {
        const parentElem = event.currentTarget.parentElement;
        const gemName = parentElem.querySelector("h4").textContent;
        const [color, carats, price, type] = Array.from(parentElem.querySelectorAll("p")).map(p => p.textContent.split(": ")[1]);

        gemNameElem.value = gemName;
        colorElem.value = color;
        caratsElem.value = carats;
        priceElem.value = price.split("$")[0];
        typeElem.value = type;

        event.currentTarget.parentElement.remove();
        toggleBtn(addBtnElem);
    }
    
    function saveOnClick(event) {
        const parentElem = event.currentTarget.parentElement;
        const gemName = parentElem.querySelector("h4").textContent;
        const [colorInfo, caratsInfo, priceInfo, typeInfo] = Array.from(parentElem.querySelectorAll("p")).map(p => p.textContent);

        const liElem = document.createElement("li");
        const pElem = document.createElement("p");
        pElem.classList.add("collection-item");
        pElem.textContent = `${gemName} - ${colorInfo}/ ${caratsInfo}/ ${priceInfo}/ ${typeInfo}`;

        liElem.appendChild(pElem);
        collectionElem.appendChild(liElem);

        event.currentTarget.parentElement.remove();
        toggleBtn(addBtnElem);
    }
    
    function cancelOnClick(event) {
        event.currentTarget.parentElement.remove();
        toggleBtn(addBtnElem);
    }
    
}
