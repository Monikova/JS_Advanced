function editElement(ref, match, replacer) {
    const elem = ref;
    let text = elem.textContent; 

    while (text.includes(match)) {
        text = text.replace(match, replacer);
    }

    return elem.textContent = text;
}
