function addBaseElements () {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const mainBody = document.createElement('div');
    const footer = document.createElement('div');

    container.classList.add('container');
    header.classList.add('header');
    mainBody.classList.add('mainBody');
    footer.classList.add('footer');

    document.body.appendChild(container);
    container.appendChild(header);
    container.appendChild(mainBody);
    container.appendChild(footer);
}

export default addBaseElements;