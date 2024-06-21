window.addEventListener('load', solve);

function solve() {
    const firstNameElem = document.getElementById('first-name');
    const lastNameElem = document.getElementById('last-name');
    const numberOfPeopleElem = document.getElementById('people-count');
    const dateElem = document.getElementById('from-date');
    const daysElem = document.getElementById('days-count');

    const nextBtnElem = document.getElementById('next-btn');
    nextBtnElem.addEventListener('click', onNextStep);

    const ticketPreviewUlElem = document.querySelector('ul.ticket-info-list');
    const confirmTicketUlElem = document.querySelector('ul.confirm-ticket');

    const divMainElem = document.getElementById('main');
    const bodyElem = document.getElementById('body');


    function onNextStep(event) {
        event.preventDefault();

        const firstName = firstNameElem.value;
        const lastName = lastNameElem.value;
        const numberOfPeople = numberOfPeopleElem.value;
        const date = dateElem.value;
        const days = daysElem.value;

        if (!firstName || !lastName || !numberOfPeople || !date || !days) {
            return;
        }

        const liElem = createListElem(firstName, lastName, numberOfPeople, date, days);
        const editBtnElem = createBtn('edit-btn', "Edit", onEdit);
        const continueBtnElem = createBtn('continue-btn', "Continue", onContinue);
        liElem.appendChild(editBtnElem);
        liElem.appendChild(continueBtnElem);
        ticketPreviewUlElem.appendChild(liElem);

        clearInputFields(firstNameElem, lastNameElem, numberOfPeopleElem, dateElem, daysElem);
        toggleBtn(nextBtnElem);
    }

    function clearInputFields(...fields) {
        fields.forEach(f => f.value = '');
    }

    function toggleBtn(btn) {
        btn.disabled = !btn.disabled;
    }

    function createListElem(firstName, lastName, numberOfPeople, date, days) {
        const h3Elem = document.createElement('h3');
        h3Elem.textContent = `Name: ${firstName} ${lastName}`;
        const pDateElem = document.createElement('p');
        pDateElem.textContent = `From date: ${date}`;
        const pDaysElem = document.createElement('p');
        pDaysElem.textContent = `For ${days} days`;
        const pNumberOfPeople = document.createElement('p');
        pNumberOfPeople.textContent = `For ${numberOfPeople} people`

        const articleElem = document.createElement('article');
        articleElem.appendChild(h3Elem);
        articleElem.appendChild(pDateElem);
        articleElem.appendChild(pDaysElem);
        articleElem.appendChild(pNumberOfPeople);

        const liElem = document.createElement('li');
        liElem.appendChild(articleElem);

        return liElem;
    }

    function createBtn(classes, text, handler) {
        const btn = document.createElement('button');
        btn.classList.add(classes);
        btn.textContent = text;
        btn.addEventListener('click', handler);
        return btn;
    }
   

    function onEdit(event) {
        const parentElement = event.currentTarget.parentElement;
        const h3Info = parentElement.querySelector('h3').textContent.split(": ")[1];
        const firstName = h3Info.split(' ')[0];
        const lastName = h3Info.split(' ')[1];
        const pElementsInfo = parentElement.querySelectorAll('p');
        const [dateInfo, daysInfo, peopleIfo] = Array.from(pElementsInfo).map(p => p.textContent.split(' '));
        const date = dateInfo[2];
        const days = daysInfo[1];
        const people = peopleIfo[1];

        firstNameElem.value = firstName;
        lastNameElem.value = lastName;
        numberOfPeopleElem.value = people;
        dateElem.value = date;
        daysElem.value = days;

        event.currentTarget.parentElement.remove();
        toggleBtn(nextBtnElem);
    }

    function onContinue(event) {
        const elemToMove = event.currentTarget.parentElement;
        elemToMove.removeChild(document.querySelector('button.edit-btn'));
        elemToMove.removeChild(document.querySelector('button.continue-btn'));
        
        const confirmBtn = createBtn("confirm-btn", 'Confirm', onConfirm);
        const cancelBtn = createBtn("cancel-btn", 'Cancel', onCancel);
        elemToMove.appendChild(confirmBtn);
        elemToMove.appendChild(cancelBtn);

        confirmTicketUlElem.appendChild(elemToMove);
    }

    function onCancel(event) {
        event.currentTarget.parentElement.remove();

        toggleBtn(nextBtnElem);
    }

    function onConfirm(event) {
        divMainElem.remove();

        const h1Elem = document.createElement('h1');
        h1Elem.setAttribute('id', 'thank-you');
        h1Elem.textContent = "Thank you, have a nice day! ";
        bodyElem.appendChild(h1Elem);

        const backbtn = document.createElement('button');
        // backbtn.setAttribute('id', 'back-btn');
        backbtn.id = 'back-btn';
        backbtn.textContent = 'Back ';
        backbtn.addEventListener('click', onBack);
        bodyElem.appendChild(backbtn);
    }

    function onBack(event) {
        location.reload();
    }
}
