function deleteByEmail() {
    const emailInputElement = document.querySelector('input[name=email]');
    const emailTdElements = document.querySelectorAll('td:nth-child(2n)');
    let emailMatch = Array.from(emailTdElements)
                                .find(td => td.textContent === emailInputElement.value); 

    const resultAreaElement = document.getElementById('result');
    if (emailMatch) {
        emailMatch.parentElement.remove();
        resultAreaElement.textContent = 'Deleted.'
    } else {
        resultAreaElement.textContent = 'Not found.'
    }

    // emailInputElement.value = '';                    // clears the email input area afterwards
}
