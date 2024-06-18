window.addEventListener('load', solve);

function solve() {
    const timeElem = document.getElementById("time");
    const dateElem = document.getElementById("date");
    const placeElem = document.getElementById("place");
    const eventInfoElem = document.getElementById("event-name");
    const contactsElem = document.getElementById("email");

    const addBtnElem = document.getElementById("add-btn");

    const ulLastCheckElem = document.getElementById("check-list");
    const ulUpcomingElem = document.getElementById("upcoming-list");

    addBtnElem.addEventListener("click", addOnClick);


    function addOnClick(event) {
        const time = timeElem.value;
        const date = dateElem.value;
        const place = placeElem.value;
        const eventInfo = eventInfoElem.value;
        const contacts = contactsElem.value;

        if (!time || !date || !place || !eventInfo || !contacts) {
            return;
        }

        // const pDateAndTimeElem = document.createElement("p");
        // pDateAndTimeElem.textContent = `Begins: ${date} at: ${time}`;
        // const pPlaceElem = document.createElement("p");
        // pPlaceElem.textContent = `In: ${place}`;
        // const pEventElem = document.createElement("p");
        // pEventElem.textContent = `Event: ${eventInfo}`;
        // const pContactElem = document.createElement("p");
        // pContactElem.textContent = `Contact: ${contacts}`;

        // const articleElem = document.createElement("article");
        // articleElem.appendChild(pDateAndTimeElem);
        // articleElem.appendChild(pPlaceElem);
        // articleElem.appendChild(pEventElem);
        // articleElem.appendChild(pContactElem);

        // const liElem = document.createElement("li");
        // liElem.classList.add("event-content");
        // liElem.appendChild(articleElem);

        const liElem = createArticleAndLiElements(time, date, place, eventInfo, contacts);

        const editBtn = createBtn("edit-btn", "Edit", onEdit);
        const continueBtn = createBtn("continue-btn", "Continue", onContinue);
        liElem.appendChild(editBtn);
        liElem.appendChild(continueBtn);

        ulLastCheckElem.appendChild(liElem);
        
        
        clearInputFields(timeElem, dateElem, placeElem, eventInfoElem, contactsElem);
        toggleBtn(addBtnElem);
    }


    function createArticleAndLiElements(time, date, place, eventInfo, contacts) {
        const pDateAndTimeElem = document.createElement("p");
        pDateAndTimeElem.textContent = `Begins: ${date} at: ${time}`;
        const pPlaceElem = document.createElement("p");
        pPlaceElem.textContent = `In: ${place}`;
        const pEventElem = document.createElement("p");
        pEventElem.textContent = `Event: ${eventInfo}`;
        const pContactElem = document.createElement("p");
        pContactElem.textContent = `Contact: ${contacts}`;

        const articleElem = document.createElement("article");
        articleElem.appendChild(pDateAndTimeElem);
        articleElem.appendChild(pPlaceElem);
        articleElem.appendChild(pEventElem);
        articleElem.appendChild(pContactElem);

        const liElem = document.createElement("li");
        liElem.classList.add("event-content");
        liElem.appendChild(articleElem);

        return liElem;
    }
    

    function clearInputFields(...fields) {
        fields.forEach(f => f.value = "");
    }


    function toggleBtn(btn) {
        btn.disabled = !btn.disabled;
    }
    

    function createBtn (classes, text, handler) {
        const btn = document.createElement("button");
        btn.classList.add(classes);
        btn.textContent = text;
        btn.addEventListener("click", handler);
        return btn;
    }


    function onEdit(event) {
        const parentElem = event.currentTarget.parentElement;
        const pElements = parentElem.querySelectorAll("p");
        const [dateAndTime, placeArr, eventArr, email] = Array.from(pElements).map(el => el.textContent.split(": "));

        timeElem.value = dateAndTime[2];
        dateElem.value = dateAndTime[1].split(" ")[0];
        placeElem.value = placeArr[1];
        eventInfoElem.value = eventArr[1];
        contactsElem.value = email[1];

        event.currentTarget.parentElement.remove();

        toggleBtn(addBtnElem);
    }


    function onContinue(event) {
        const parentElem = event.currentTarget.parentElement;
        const pElements = parentElem.querySelectorAll("p");
        const [dateAndTime, placeArr, eventArr, email] = Array.from(pElements).map(el => el.textContent.split(": "));

        const time = dateAndTime[2];
        const date = dateAndTime[1].split(" ")[0];
        const place = placeArr[1];
        const eventInfo = eventArr[1];
        const contacts = email[1];
        
        const liElem = createArticleAndLiElements(time, date, place, eventInfo, contacts);

        const moveBtn = createBtn("finished-btn", "Move to Finished", onMove);
        liElem.appendChild(moveBtn);

        ulUpcomingElem.appendChild(liElem);

        event.currentTarget.parentElement.remove();

        toggleBtn(addBtnElem);
    }


    function onMove() {}

}
