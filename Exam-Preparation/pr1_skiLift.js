window.addEventListener('load', solve);

function solve() {
    // First Name, Last Name, Number of people, From date, Number of days
    const firstNameElem = document.getElementById('first-name');
    const lastNameElem = document.getElementById('last-name');
    const numberOfPeopleElem = document.getElementById('people-count');
    const dateElem = document.getElementById('from-date');
    const daysElem = document.getElementById('days-count');

    const nextBtnElem = document.getElementById('next-btn');
    nextBtnElem.addEventListener('click', onNextStep);

    const ticketPreviewUlElem = document.querySelector('ul.ticket-info-list');

    function onNextStep(event) {
        event.preventDefault();

        const firstName = firstNameElem.value;
        const lastName = lastNameElem.value;
        const numberOfPeople = numberOfPeopleElem.value;
        const date = dateElem.value;
        const days = daysElem.value;

        // if (!firstName || !lastName || !numberOfPeople || !date || !days) {
        //     return;
        // }

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
   

    function onEdit() {}

    function onContinue() {}
}
